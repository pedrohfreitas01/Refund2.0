# 💸 Refund App

Refund é uma aplicação fullstack desenvolvida para facilitar o controle e solicitação de reembolsos de forma rápida e segura, com funcionalidades específicas para diferentes tipos de usuários.

🔗 **Acesse o projeto online:**  
👉 [https://refund-project-zeta.vercel.app/](https://refund-project-zeta.vercel.app)

## ✨ Funcionalidades

- 📄 Cadastro de despesas com upload de nota fiscal
- 🔐 Autenticação e autorização com JWT
- 👥 Controle de acesso por **roles** (employee e admin)
- 📊 Listagem e visualização detalhada de reembolsos para admins

## 👥 Perfis de Usuário

- **Employee:** pode cadastrar uma despesa preenchendo os campos `nome`, `valor`, `categoria` e fazer o upload da nota fiscal.
- **Admin:** pode visualizar uma lista de todas as despesas cadastradas e acessar os detalhes de cada uma.
    - email: mam@mam.com | senha: 123456

---

## 🧠 Tecnologias Utilizadas

### 📦 Backend (`/api`)
- **Node.js**
- **Express**
- **TypeScript**
- **Prisma ORM** (com banco SQLite)
- **JWT** (Autenticação)
- **Multer** (Upload de arquivos)
- **Zod** (Validação)
- **Express Async Errors**

### 💻 Frontend (`/web`)
- **React 19**
- **TypeScript**
- **React Router v6**
- **Tailwind CSS**
- **Zod** (Validação)
- **Axios**

---

## 🚀 Como rodar o projeto

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/refund-app.git
cd refund-app
```
### 2. Rode o backend
```bash
cd api
yarn install # ou npm install
npx prisma generate
npx prisma migrate dev
yarn dev
```

### 3. Rode o frontend
```bash
cd ../web
yarn install # ou npm install
yarn dev

```

### Estrutura de Pastas
refund-app/
│
├── api/         # Backend (Node + Express + Prisma)
│   └── src/
│
└── web/         # Frontend (React + Tailwind)
    └── src/

