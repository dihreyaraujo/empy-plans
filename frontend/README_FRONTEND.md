# 💻 Frontend - EMPY Planos

Este projeto é o frontend da aplicação de gerenciamento de planos, desenvolvido em React utilizando JavaScript, com CSS puro e integração com a API backend via HTTP.

---

## 📦 Instalação

1. **Instale as dependências**
```bash
npm install
```

---

## ▶️ Como iniciar o projeto

```bash
npm start
```

O app será iniciado em:
```
http://localhost:3000
```

---

## 🌐 Backend

Certifique-se de que a API backend esteja rodando em `http://localhost:3001` (ou altere a URL no arquivo `src/services/api.js`).

---

## 📁 Estrutura de pastas

```
src/
├── assets/              # Imagens e ícones
├── components/          # Componentes reutilizáveis
├── pages/               # Páginas principais do app
├── services/            # Configuração do axios para chamadas HTTP
├── styles/              # Estilos CSS
├── App.jsx              # Componente principal
└── index.js             # Ponto de entrada
```

---

## ✨ Funcionalidades

- Visualização de planos disponíveis
- Página "Meu Plano" com vencimento e dados do plano atual
- Tela de pagamento com redirecionamento
- CRUD de planos (admin)
- Estilo fiel ao protótipo Figma

---