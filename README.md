# ToDoList - Fullstack 📡

<img src="./assets/ToDoList.png" alt="ToDoList" />

Um App de To-Do-List (Lista de Tarefas) utilizando API e Banco de Dados próprios - Feito com 💚

> Status do Projeto: Concluído... ✅

## Índice
- <a href="#funcionalidades">Funcionalidades do Projeto</a>
- <a href="#layout">Layout</a>
- <a href="#demonstracao">Demonstração</a>
- <a href="#rodar">Como rodar este projeto?</a>
- <a href="#tecnologias">Tecnologias Utilizadas</a>
- <a href="#autores">Pessoas Autores</a>
- <a href="#passos">Próximos Passos</a>

## Funcionalidades do Projeto - 🔨 <div id="#funcionalidades"></div>
- [x] Criar uma nova tarefa no Banco de Dados
- [x] Ver todas as tarefas criadas no Banco de Dados
- [x] Editar as tarefas já existentes no Banco de Dados
- [x] Deletar tarefas já existentes no Banco de Dados
- [x] Aplição Desktop com Electron

## Layout - 🎨 <div id="#layout"></div>
<img src="./assets/imageproject1.jpg"/>
<img src="./assets/imageproject2.jpg"/>
<img src="./assets/imageproject3.jpg"/>

## Demonstração - 💻 <a id="#demonstracao"></a>
<img src="./assets/demonstration.gif">

## Como Rodar Este Projeto? - ⚙️ <div id="#rodar"></div>
### Back End
- É necessário ter instalado o <a href="https://www.docker.com/">`Docker`</a> no Seu computador
- É necessário ter instalado as extensões `Docker` e `Database Client` em seu VSCode
``` bash
# Clone este repositório
$ git clone https://github.com/FelipeKreulich/todolist-fullstack

# Acesse a pasta do projeto em seu terminal
$ cd todolist-fullstack

# Acesse a pasta do Back-End em seu terminal
$ cd backend

# Instale as dependências do Back-End
$ npm install

# Criando e subindo o container Docker
$ docker run --name mysql -e MYSQL_ROOT_PASSWORD=root -p 3306:3006 -d mysql

# Configure a sua extensão DataBase Client (host: localhost, port: 3306, username: root password: root) !Atenção: Seu Username e Password devem ser iguais aos passados pelo arquivo .env

# Após configurar, crie seu banco de dados com o `name` sendo igual ao passado pelo arquivo .env

# Crie dentro da extensão uma tabela seguindo o modelo do arquivo `model_mysql.md` e retorne aqui novamente

# Execute a aplicação
$ npm start

# A API será inciada na porta
3333, acesse pelo navegador:
http://localhost:3333/tasks
```
### Front End
- É necessário ter a extensão `Live Server` em seu VSCode
```bash
# Caso queira roda a aplicação com electron siga as etapas abaixo

# Se estiver na pasta do backend, retorne a pasta raiz para acessar o frontend
$ cd ..

# Abra um novo terminal e entre na pasta frontend
$ cd frontend

# Instale as dependências do Front-End
$ npm install

# Execute a aplicação
$ npm start

-----------------------------------------------------------------------------

# Caso queira usar o app web, instale a extensão live server no vscode

# Clique com o botão direito sobre o arquivo `index.html`

# Execute a aplicação com o Live Server
```
## Tecnologias Utilizadas - 🔨 <div id="#tecnologias"></div>
### Backend
1. [NodeJS](https://nodejs.org/en) <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" width="15px" />
2. [Express](https://expressjs.com/pt-br/) <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" width="15px" />
3. [MySQL2](https://www.npmjs.com/package/mysql2) <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" width="15px" />

### Frontend
1. [HTML5](https://www.w3schools.com/html/) <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="15px" />
2. [CSS3](https://www.w3schools.com/css/default.asp) <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="15px" />
3. [JavaScript](https://www.w3schools.com/js/default.asp) <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="15px" />

## Pessoas Autores - 🚻 <div id="#autores"></div>
<img src="./assets/eu.jpg" width="84px" style="border-radius:50%" alt="Felipe Kreulich" />

Felipe Kreulich

[Linkedin](www.linkedin.com/in/felipe-kreulich/)

[Portfolio](https://portfolio-felipe.vercel.app)

## Próximos Passos - 🚶🏻 <div id="#passos"></div>
- [ ] Criar Novo Layout
- [ ] Adicionar Toast's
- [ ] Agendar Lembretes
- [ ] Definir Níveis de Prioridade
- [ ] Adicionar Data de Vencimento
- [ ] Adicionar Comentários