# Especificação de Segurança Firestore — Apostila Vida e Ministério

## 1. Invariantes de Dados

1. **Isolamento de Papéis (RBAC Anciãos)**: Somente usuários verificados em `/elders/{uid}` (ou o e-mail inicial `silvaevangcelio@gmail.com`) podem criar, editar ou excluir registros em `weeks`, `schedules`, `participants`, `participants/{id}/private`, `assignmentHistory` e `elders`.
2. **Auto-promoção Bloqueada**: Nenhum usuário comum pode criar ou atualizar seu documento em `/users/{uid}` definindo `role == 'anciao'`, nem alterar `uid`, `role`, `participantId` ou `createdAt` após a criação.
3. **Privacidade das Anotações Pessoais**: Documentos em `/users/{uid}/notes/{noteId}` são acessíveis exclusivamente ao próprio `uid` autenticado (`isOwner(uid)`). Nem mesmo anciãos têm acesso às anotações privadas de outros irmãos.
4. **Isolamento de PII**: E-mail e telefone em `/users/{uid}/private/{docId}` e `/participants/{id}/private/{docId}` ficam separados das coleções públicas/congregacionais e restritos ao dono ou aos anciãos.
5. **Integridade Temporal e Estrutural**: Todo `create` exige `createdAt == request.time`, todo `update` exige `updatedAt == request.time` e campos imutáveis preservados, com validação estrita de `hasAll`/`hasOnly` e limites `.size()` em todas as strings e arrays.

## 2. Payloads Adversariais ("Dirty Dozen")

1. **Auto-escalação de privilégio**: `{ uid: "attacker", displayName: "Teste", role: "anciao", ... }` em `/users/attacker` -> Negado (`PERMISSION_DENIED`).
2. **Alteração de papel via update**: `updateDoc('/users/user1', { role: 'anciao' })` -> Negado via `affectedKeys().hasOnly(...)`.
3. **Campo fantasma (Shadow Field)**: `setDoc('/users/user1', { ..., isAdmin: true })` -> Negado via `keys().hasOnly(...)`.
4. **Injeção de ID gigante**: `/weeks/aaaaa...200chars` -> Negado via `isValidId()`.
5. **E-mail não verificado**: Token com `email: 'silvaevangcelio@gmail.com'` e `email_verified: false` -> Negado via `request.auth.token.email_verified == true`.
6. **Leitura de notas alheias**: `getDoc('/users/victim/notes/n1')` por outro usuário -> Negado.
7. **Leitura de telefone de participante por publicador**: `getDoc('/participants/p1/private/info')` por estudante -> Negado.
8. **Edição da Apostila por Servo Ministerial ou Estudante**: `updateDoc('/weeks/2026-11-23', { openingSong: '99' })` -> Negado (`isElder()` falso).
9. **Edição da Escala por não-ancião**: `setDoc('/schedules/2026-11-23', { ... })` -> Negado.
10. **Falsificação de Timestamp**: `{ createdAt: "2020-01-01T00:00:00Z" }` -> Negado (`incoming().createdAt == request.time`).
11. **Array não limitado / tipo inválido**: `allowedParts: [123, 456]` -> Negado.
12. **Notificação forjada por usuário comum**: `addDoc('/users/other/notifications', { ... })` -> Negado (`isElder()` exigido).
