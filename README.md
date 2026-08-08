#  Gerenciador de Tarefas

Aplicação web simples para gerenciamento de tarefas, desenvolvida com **React, Next.js e TypeScript**.

O projeto permite criar, visualizar, concluir e excluir tarefas, servindo também como projeto de estudo para conceitos de desenvolvimento **Full Stack**, componentes React e **Server Actions** do Next.js.

## Funcionalidades

* ✅ Criar novas tarefas
* ☑️ Marcar tarefas como concluídas
* 🗑️ Excluir tarefas
* 📋 Listar tarefas cadastradas
* 🔄 Atualização da interface após alterações
* 🧩 Organização do projeto utilizando componentes React
* ⚡ Utilização de Server Actions do Next.js

##  Tecnologias utilizadas

* **Next.js**
* **React**
* **TypeScript**
* **Tailwind CSS**
* **DaisyUI**
* **Node.js**

## 📂 Estrutura do projeto

```text
Gerenciador-de-Tarefas-Simples/
│
├── actions/
│   └── ...              # Server Actions
│
├── app/
│   ├── page.tsx         # Página principal
│   ├── layout.tsx       # Layout da aplicação
│   └── ...
│
├── components/
│   ├── Taskform.tsx     # Formulário de criação
│   ├── Tasklist.tsx     # Lista de tarefas
│   ├── CheckBox.tsx     # Controle de conclusão
│   └── ...
│
├── type/
│   └── Tarefas.ts       # Modelo e operações das tarefas
│
├── public/              # Arquivos públicos
│
├── package.json
└── README.md
```

## Como executar o projeto

### 1. Pré-requisitos

É necessário ter instalado:

* [Node.js](https://nodejs.org/)
* npm

Você pode verificar se o Node.js está instalado executando:

```bash
node --version
```

E o npm:

```bash
npm --version
```

### 2. Clone o repositório

```bash
git clone https://github.com/Vency54/Gerenciador-de-Tarefas-Simples.git
```

Entre na pasta do projeto:

```bash
cd Gerenciador-de-Tarefas-Simples
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute em modo de desenvolvimento

```bash
npm run dev
```

Depois, abra no navegador:

```text
http://localhost:3000
```

## Executando a versão de produção

Para gerar a versão otimizada da aplicação:

```bash
npm run build
```

Depois:

```bash
npm run start
```

A aplicação estará disponível em:

```text
http://localhost:3000
```

## Sobre o projeto

Este projeto foi desenvolvido com o objetivo de praticar conceitos importantes do ecossistema React/Next.js, incluindo:

* Componentização
* Props
* Server Actions
* Formulários
* Manipulação de estado
* Tipagem com TypeScript
* Revalidação de páginas com `revalidatePath`
* Organização de projetos Next.js
* Integração entre componentes de cliente e servidor

## Persistência dos dados

Atualmente, as tarefas são armazenadas **em memória**, não utilizando um banco de dados.

Isso significa que os dados podem ser perdidos quando a aplicação é reiniciada.

Uma evolução futura do projeto seria implementar um banco de dados, como:

* PostgreSQL
* MySQL
* SQL Server
* SQLite


---

⭐ Caso este projeto tenha sido útil ou interessante, considere deixar uma estrela no repositório!

