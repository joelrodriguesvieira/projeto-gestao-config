# API de Vídeos - Express + TypeScript

Esta é uma API simples desenvolvida com Node.js, Express e TypeScript, que armazena os dados de vídeos em memória (sem banco de dados persistente).

## 🚀 Como executar o projeto

### 1. Clone o repositório

```bash
git clone [https://github.com/seu-usuario/nome-do-repo.git](https://github.com/joelrodriguesvieira/projeto-gestao-config.git)
cd projeto-gestao-config
```

### 2. Instale as dependencias

```bash
npm i
```

### 3. Inicie o servisor em modo de desenvolvimento
```bash
npm run dev
```

### 4. Use o arquivo 'routes.http'

Para testar as rotas da aplicação no próprio VSCode, instale a extensao 'REST Client' e depois vá no arquivo routes.http e clique em 'Send Request' em qualquer uma das rotas


## Estilo de Workflow

Decidi usar o GitFlow como fluxo do trabalho, devido a minha prática com esse fluxo, tanto em projetos pessoais, quanto em projetos profissionais.

## Processo de infraestrutura com Virtual Box e Vagrant

- **VM1**: Cliente de testes
- **VM2**: Servidor com backend Node.js/Express

---

## 📦 Requisitos

Antes de iniciar, instale:

- [Vagrant](https://www.vagrantup.com/)
- [VirtualBox](https://www.virtualbox.org/)

---

## ⚙️ Configuração das VMs

- **VM1**
  - 1024 MB de memória
  - IP privado: `192.168.56.10`

- **VM2**
  - 2048 MB de memória
  - IP privado: `192.168.56.11`
  - Node.js instalado
  - Backend executando automaticamente na porta `3001`
  - Sincronização da raiz do projeto com `/home/vagrant/vagrant_data`

---

## 🚀 Como iniciar o ambiente

No terminal, na pasta onde está o `Vagrantfile`, execute:

```bash
vagrant up