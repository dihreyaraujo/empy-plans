
# Empy - Desafio Técnico Backend

Este projeto é o backend do desafio técnico para a vaga de Desenvolvedor Full Stack Pleno na Empy.  
Ele simula o fluxo de aquisição, upgrade e downgrade de planos de assinatura com controle de pagamentos, usando Node.js + Express + TypeScript + Prisma + PostgreSQL.

---

## 📦 Tecnologias

- Node.js + Express
- TypeScript
- Prisma ORM
- PostgreSQL
- Zod (validação)
- SOLID + Clean Code + Repository Pattern

---

## ⚙️ Requisitos

- Node.js v18+
- PostgreSQL
- npm ou yarn

---

## 🚀 Como rodar o projeto

### 1. Instale as dependências

```bash
npm install
```

### 3. Configure o `.env`

Crie um arquivo `.env` na raiz e insira:

```
DATABASE_URL="postgresql://usuario:senha@localhost:5432/database"
PORT=3000
```

> Substitua os valores conforme seu PostgreSQL.

### 4. Rode as migrações e as seeds

```bash
npx prisma migrate dev --name init
npx prisma db seed
npx prisma generate
```

### 5. Inicie o servidor

```bash
npm run dev
```

---

## 🧠 Estrutura do projeto

```
src/
├── controllers/
├── database/
├── dtos/
├── middlewares/
├── repositories/
├── routes/
├── services/
├── utils/
├── validations/
└── server.ts
```

---

## 🔄 Regras de negócio

### 🔁 Simulação de pagamento

- Cada tentativa de compra retorna:
  - 80% de chance de **sucesso**: `"pago"`
  - 10% de chance de `"recusado - sem limite"`
  - 10% de chance de `"não autorizado"`
- Todos os pagamentos (com sucesso ou não) são registrados no **Histórico de Compras**

---

## 📚 Funcionalidades

### 📌 Planos pré-cadastrados via seed

- `Light`: R$ 189,90
- `Standard`: R$ 279,90
- `Pro`: R$ 590,90

Você pode criar **planos personalizados com desconto** a partir do plano `Standard`.

---

## 📡 API Endpoints

### 📘 1. `GET /plans`

Retorna todos os planos disponíveis (fixos + personalizados).

**Resposta:**

```json
[
  {
    "id": "uuid",
    "name": "Standard",
    "price": 39.9,
    "type": "standard",
    "annualPrice": 390.90,
    "isCustom": false
  }
]
```

---

### 🆕 2. `POST /plans`

Cria um plano personalizado com base no plano `Standard`.

**Body:**

```json
{
  "name": "Plano Estudante",
  "type": "Student",
  "discount": 20,
  "price": 189.90,
  "annualPrice": 1899.90
}
```

**Resposta:**

```json
{
  "id": "uuid",
  "name": "Plano Estudante",
  "type": "Student",
  "discount": 20,
  "price": 189.90,
  "annualPrice": 1899.90,
}
```

---

### 💳 3. `POST /purchase`

Simula a compra de um plano (pode retornar sucesso ou erro).

**Body:**

```json
{
  "name": "João",
  "planId": "uuid-do-plano"
}
```

**Resposta de sucesso:**

```json
{
  "status": "pago",
  "plan": "Standard",
  "price": 189.90,
  "purchaseId": "uuid"
}
```

**Resposta de falha:**

```json
{
  "status": "não autorizado",
  "plan": "Pro",
  "price": 590.90,
  "purchaseId": "uuid"
}
```

---

### 📜 4. `GET /users/:id/purchases`

Retorna o histórico de compras do usuário.

**Resposta:**

```json
[
  {
    "id": "uuid",
    "status": "pago",
    "createdAt": "...",
    "plan": {
      "name": "Standard",
      "price": 189.90
    }
  }
]
```

---

### 📦 5. `GET /users/:id/current-plan`

Retorna o último plano **pago** do usuário.

**Resposta:**

```json
{
  "id": "uuid",
  "status": "pago",
  "plan": {
    "name": "Pro",
    "price": 59.9,
    "createdAt": "...",
  }
}
```

---

## 🧪 Testes manuais recomendados

1. Criar plano personalizado
2. Simular compra (pago ou erro)
3. Fazer upgrade (com falha e sucesso)
4. Fazer downgrade (com falha e sucesso)
5. Consultar histórico e plano atual

---

## 📁 Arquitetura e padrões utilizados

- Separação por camadas: Controller → Service → Repository
- Validação de entrada com Zod
- Repository Pattern para abstração de acesso ao banco
- Clean Code & SOLID

---
