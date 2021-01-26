# to-do-list-api
API para o To Do List APP

A API trabalha com MySQL para armazenar os dados das tarefas. A tabela está inclusa no projeto com o nome de <b>to-do-list.sql</b>.
A tabela vai sem dados, eles deverão ser inseridos através do To Do List App.

Depois de instalado o banco de dados é hora de configurar o arquivo <b>db.js</b> que faz a conexão com o banco de dados. Se estiver na máquina local (localhost) só será preciso verificar o usuário e senha de acesso.

A lista de todos os arquivos necessários é:

- controller.js
- db.js
- index.js
- package.json
- routes.js
- yarn.lock

Além do diretório <b>node_modules</b>.

Para executar em uma máquina local, basta digitar no terminal, dentro do diretório do projeto:

-> yarn start

Se aparecer a mensagem: Porta 4k aberta. a API está rodando.
