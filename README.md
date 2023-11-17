# Objetivo
 
Este projeto tem o objetivo de demonstrar conceitos e formas de utilizar o framework Playwright para a criação de testes e2e e de API. Utilizaremos o NodeJs com superset TypeScript

# Pré-requisitos

## Sistemas Operacionais

- macOS 11 e superiores
- Linux 
    - Ubuntu 20.04 e 22.04
    - Debian 11
- Windows e WSL

## NodeJs
    - Node.js 14 e superiores
    - Gerenciador de Pacotes do NodeJS (npm)

# Playwright

Framework de testes automatizados construido sobre o Puppeteer. Está disponível para as seguintes linguagens de programação
    - Node.js
    - Python
    - .NET
    - Java

## Organização

O Playwright possui a seguinte organização de pastas/arquivos:
    - playwright.config.ts: Arquivo de configurção geral dos testes
    - .github: Github actions (processo de automação para podermos compilar, testar e fazer deploy do nosso sistema)
    - tests: Pasta principal dos testes. 
    - test-examples: Exemplos de testes

## Iniciar um projeto Playwright

Existe 2 maneiras de iniciar um projeto de automação de testes:
1) Pela linha de comando
    - npm init playwright@latest
2) Pela extensão Playwright do VS Code
    - instalar a extensão Playwright da Microsfot
    - digitat CRTL+SHIFT+P e irá abrir a linha de comando e digital: Install Playwright

# Projeto

## Instalação

Para instalar os recursos necessários digite na raiz do projeto o comando `npm install`

## Execução dos Testes

Existe algumas maneiras de executar os testes, sendo:
    - Executação dos testes: `npm run py:test`
    - Interface Gráfica: `npm run py:ui`
    - Executar testes somente com o browser Chrome: `npm run py:chrome`
    - Executar testes somente do To Do Page: `npm run py:todopage`
    - Executar testes somente da Api: `npm run py:api`
    - Executar testes em modo Dedbug: `npm run py:debug`
    - Exibir relatórios dos testes: `npm run py:report`

# Referências
- https://nodejs.org/pt-br/
- https://playwright.dev/
- https://developer.chrome.com/docs/puppeteer/

# Ferramentas para o Desenvolvimento

    As seguintes ferramentas são necessárias e/ou sugeridas para o projeto

## Instalação:
- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/pt-br)

## IDE
- [VSCode](https://code.visualstudio.com/download)