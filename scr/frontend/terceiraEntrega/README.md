# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


Descrição das Tabelas do Banco de Dados
Tabela usuariosAdmin
Tabela que armazena informações dos usuários administradores.

Campo	Tipo	Descrição
idAdmin	INT	Chave primária, auto incremento
usuario	VARCHAR(255)	Nome de usuário
senha	VARCHAR(255)	Senha do usuário
nome	VARCHAR(255)	Nome completo do usuário
foto	VARCHAR(255)	URL da foto do usuário
Tabela PrestadorServico
Tabela que armazena informações dos prestadores de serviço (ONGs).

Campo	Tipo	Descrição
idUsuario	INT	Chave primária, auto incremento
nomeOng	VARCHAR(255)	Nome da ONG
telefoneOng	VARCHAR(20)	Telefone da ONG
emailOng	VARCHAR(255)	Email da ONG
linkSite	VARCHAR(255)	Link do site da ONG
linkRedesSociais	TEXT	Links das redes sociais da ONG
enderecoOng	VARCHAR(255)	Endereço da ONG
logoOng	VARCHAR(255)	URL do logo da ONG
fotosCarrosel	TEXT	URLs das fotos do carrossel
dataCadastro	TIMESTAMP	Data de cadastro, padrão para a data atual
Tabela Tipo_Servico
Tabela que armazena os tipos de serviço oferecidos.

Campo	Tipo	Descrição
idTipoServico	INT	Chave primária, auto incremento
causa	VARCHAR(255)	Causa do serviço
Tabela Servico
Tabela que armazena os serviços oferecidos, com chaves estrangeiras para PrestadorServico e Tipo_Servico.

Campo	Tipo	Descrição
idServico	INT	Chave primária, auto incremento
descricao	TEXT	Descrição do serviço
modeloOng	VARCHAR(255)	Modelo da ONG
idUsuario	INT	Chave estrangeira para PrestadorServico
idTipoServico	INT	Chave estrangeira para Tipo_Servico
As chaves estrangeiras possuem as seguintes restrições:

idUsuario referencia idUsuario em PrestadorServico com ON DELETE CASCADE.
idTipoServico referencia idTipoServico em Tipo_Servico com ON DELETE SET NULL.