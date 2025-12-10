# WalkDog -- Testes Automatizados com Cypress

Projeto de automação de testes end-to-end utilizando **Cypress**,
aplicado ao sistema WalkDog.

## 📌 Visão Geral

O **WalkDog** é um conjunto de testes automatizados para validação dos
principais fluxos da aplicação, garantindo qualidade e confiabilidade
através do Cypress.
O site é uma pagina dedicada a inscrição de usuários que desejam se voluntariar 
a cudar de cães.
O site tem funções academicas, não sendo um site real e sem backend

## 🛠 Tecnologias Utilizadas

-   **Node.js**
-   **Cypress**
-   **JavaScript**

## 📁 Estrutura do Projeto

    walkdog/
    ├── cypress/
    │   ├── e2e/
    │   │   ├── home.cy.js
    │   │   └── signup.cy.js
    │   ├── fixtures/
    │   │   ├── dataForm.json
    │   │   └── imgTest.png
    │   ├── support/
    │   │   ├── commands.js
    │   │   ├── e2e.js
    │   │   └── index.d.ts
    ├── cypress.config.js
    ├── package.json
    └── README.md

## ⚙️ Scripts Disponíveis

``` N/A
```

## ✅ Pré-requisitos

-   **Node.js 18+**
-   **npm** ou **yarn**

## 📦 Instalação

``` bash
git clone <url-do-repositorio>
cd walkdog
npm install
```

## ▶️ Execução dos Testes

### Abrir interface interativa do Cypress

``` bash
npx cypress open
```

### Executar todos os testes em modo headless

``` bash
npx cypress run
```

## 📂 Descrição das Pastas

### cypress/e2e/

Contém os arquivos de testes automatizados: - home.cy.js --- Testes do
fluxo da homepage - signup.cy.js --- Testes de cadastro

### cypress/fixtures/

Arquivos utilizados como massa de dados e recursos estáticos: -
dataForm.json --- dados de formulários - imgTest.png --- imagem
utilizada em testes

### cypress/support/

Arquivos globais de suporte: - commands.js --- comandos customizados\
- e2e.js --- configurações globais\
- index.d.ts --- tipagem (caso use TypeScript)

## 🤝 Contribuição

1.  Criar branch a partir da `main`
2.  Implementar as alterações
3.  Criar commits
4.  Abrir Pull Request

## 📄 Licença

Projeto educacional para fins de estudo em automação de testes com
Cypress.
