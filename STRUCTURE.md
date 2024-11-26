# Entendendo decisões arquiteturais e a estrutura do projeto

## Requisitos para rodar o projeto

### Setup de ambiente:
- [MongoDB](https://www.mongodb.com/pt-br)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Android Studio](https://developer.android.com/studio?hl=pt-br)

### Como rodar na minha máquina?
1. Clone o projeto: `https://github.com/Gaby-britto/AngaBox---Reviews`

2. Instale as dependências necessárias:
```
   @expo-google-fonts/montserrat
   @react-navigation/native
   @react-navigation/native-stack:
   axios
   expo
   expo-font
   expo-image-picker
   expo-status-bar
   install
   react
   react-native
   react-native-safe-area-context
   react-native-screens
   react-native-vector-icons
```
Ou você pode instalar todas as dependências principais com o comando:
```
  npm install

```

3. Navegue até o diretório da API:
```
   cd apiAnGaBox
```   
4. Inicie a API:
```
   npm run dev
```
5. Volte ao diretório raiz:
 ```
  cd ..
 ```
6. Inicie o Android Studio no aplicativo
7. Inicie o servidor de desenvolvimento:
```
 npx expo android
```
8. Escaneie o qrCode ou digite a URL manualmente
9. Pronto 🎉

## AnGaBox - Aplicativo
### Estrutura do Projeto

- `.expo`: Armazena arquivos temporários e configurações internas do Expo para rodar o aplicativo no ambiente de desenvolvimento.
- `.vscode`: Armazena configurações relacionadas ao desenvolvimento no VS Code, como `settings.json` para ajustes do editor e configurações de depuração.
- `.gitignore`: Arquivo que especifica quais arquivos ou diretórios devem ser ignorados pelo sistema de controle de versão Git, como `node_modules` e arquivos de ambiente.
- `assets`: Contém arquivos que são usados diretamente na interface do usuário, como imagens (png, jpg), fontes personalizadas e outros arquivos que são carregados pelo aplicativo.
- `./node_modules`: Diretório onde todas as dependências do projeto são armazenadas. Este diretório é gerenciado pelo npm e contém todos os pacotes necessários para a aplicação funcionar.
- `./src`: Diretório principal para o código-fonte da aplicação, onde a lógica e os componentes do React são implementados.
  - `./src/Componentes`: Contém todos os componentes reutilizáveis da interface.
    - `./src/Componentes/Cards`: Contém componentes que representam informações apresentadas como cartões (filmes, resenhas, etc.).
      - `./src/Componentes/Cards/CardMovie.js`: Exibe informações sobre filmes, como título, gênero, imagem, etc.
      - `./src/Componentes/Cards/CardMovieAdmin.js`: Versão voltada para administração, com funcionalidades como editar e excluir filmes.
      - `./src/Componentes/Cards/CardReview.js`: Exibe resenhas feitas por usuários, incluindo detalhes como o texto da resenha.
      - `./src/Componentes/Cards/CardReviewAdmin.js`: Versão para o painel de administração, permitindo o gerenciamento das resenhas.
      - `./src/Componentes/Cards/Card2.js`: Outro tipo de componente de cartão para filmes com um layout alternativo.
      - `./src/Componentes/Cards/Card2Admin.js`: Versão para o painel de administração do `Card2.js`.
    - `./src/Componentes/Footer`: Contém componentes relacionados ao rodapé da aplicação.
      - `./src/Componentes/Footer/Footer.js`: Exibe informações gerais no rodapé, como links e informações.
      - `./src/Componentes/Footer/FooterAdmin.js`: Versão para a área de administração, com opções adicionais.
    - `./src/Componentes/Header`: Contém componentes relacionados ao cabeçalho da aplicação.
      - `./src/Componentes/Header/Header.js`: Exibe informações gerais no cabeçalho, como título ou navegação.
      - `./src/Componentes/Header/HeaderImage.js`: Foca na exibição de uma imagem ou logo no cabeçalho.
    - `./src/Componentes/Banner`: Contém componentes relacionados ao banner da aplicação, como imagens ou mensagens promocionais.
    - `./src/Componentes/Button`: Contém componentes reutilizáveis de botões, como botões de ação ou navegação.
    - `./src/Componentes/Search`: Contém componentes relacionados a barras de pesquisa ou filtros para facilitar a busca por filmes, resenhas ou itens.
    - `./src/Componentes/Text`: Contém componentes reutilizáveis relacionados ao texto, como títulos, subtítulos e parágrafos.
  - `./src/Pages`: Contém os componentes responsáveis pela estrutura e organização das páginas da aplicação.
    - `./src/Pages/Admin`: Componentes específicos para a área administrativa.
      - `./src/Pages/Admin/EditPost.js`: Página para editar um post de resenha de filme.
      - `./src/Pages/Admin/HomeAdmin.js`: Página principal do painel de administração, com acesso a várias seções administrativas.
      - `./src/Pages/Admin/LoginAdm.js`: Página de login para administradores.
      - `./src/Pages/Admin/Post.js`: Página que exibe e gerencia os posts de filmes no painel de administração.
      - `./src/Pages/Admin/ReviewAdmin.js`: Página para visualizar e gerenciar as resenhas feitas por usuários no painel administrativo.
      - `./src/Pages/Admin/SearchAdmin.js`: Página com funcionalidades de busca avançada para o administrador filtrar e gerenciar filmes ou resenhas.
      - `./src/Pages/Admin/Users.js`: Página para gerenciamento de usuários, incluindo opções de visualização, edição e exclusão de contas de usuários.
    - `./src/Pages/User`: Componentes específicos para a área do usuário.
      - `./src/Pages/User/Home.js`: Página principal para usuários, com uma visão geral de filmes e resenhas disponíveis.
      - `./src/Pages/User/Review.js`: Página onde os usuários podem visualizar e escrever suas resenhas.
      - `./src/Pages/User/SearchPage.js`: Página de busca, onde os usuários podem procurar por filmes.
      - `./src/Pages/User/User.js`: Página do perfil do usuário, onde ele pode ver suas informações.
    - `./src/Pages/Initial`: Componentes específicos para a página inicial ou de introdução do aplicativo.
    - `./src/Pages/Register`: Componentes específicos para o registro de novos usuários.
    - `./src/Pages/Login`: Componentes específicos para o login do usuário, como formulários de login e autenticação.
- `App.js`: Arquivo de entrada principal da aplicação React Native, onde o componente raiz é renderizado.
- `app.json`: Arquivo de configuração para o projeto Expo, definindo as opções de construção e execução.
- `babel.config.js`: Arquivo de configuração do Babel, responsável por transpilar o código JavaScript moderno para uma versão compatível com os dispositivos móveis.
- `MainNavigator.js`: Arquivo que define a navegação principal da aplicação, incluindo as rotas e a estrutura de navegação.
- `package-lock.json`: Arquivo gerado automaticamente pelo npm que garante versões consistentes de dependências entre diferentes instalações de projeto.
- `package-lock.json`: Este arquivo serve como ponto central para o gerenciamento de dependências e scripts do projeto.





### Como usar?

- Após rodar o projeto você pode alterar os arquivos da pasta `/apiAnGaBox`

### Estrutura do Projeto da API

- `./node_modules`: Diretório onde todas as dependências do projeto são armazenadas. Este diretório é gerenciado pelo npm e contém todos os pacotes necessários para a aplicação funcionar.

- `./src`: Diretório principal para o código-fonte da aplicação, onde a lógica e os componentes da API são implementados.
  - `./src/config`: Contém configurações importantes para o projeto. 
    - `./src/database.js`: Em vez de simular uma base de dados com JSON, esse arquivo passa a gerenciar a conexão com o MongoDB. Ele é essencial para configurar e manter a conexão com o banco de dados.
  - `./src/controller`: Diretório onde estão os controladores que lidam com as requisições HTTP.
    - `./src/controller/AdminController.js`: Controlador para operações relacionadas ao admin.
    - `./src/controller/UserController.js`: Controlador para operações relacionadas a usuários.
    - `./src/controller/PostController.js`: Controlador para operações relacionadas aos posts.
    - `./src/controller/MovieController.js`: Controlador para operações relacionadas aos filmes.
  
  - `./src/middlewares`: Diretório onde estão os middlewares da aplicação.
    - `./src/middlewares/validateAdmin.js`: Middleware para autenticação de admins.
    - `./src/middlewares/validateUser.js`: Middleware para autenticação de usuários.
  
  - `./src/routes`: Diretório onde estão definidas as rotas da API.
    - `./src/routes/admRouter.js`: Define rotas específicas para operações relacionadas a administradores.
      -  `'/' getAll`
      -  `'/:id' getOne` 
      -  `'/' create` 
      -  `'/' upate` 
      -  `'/:id' delete` 
  
    - `./src/routes/movieRouter.js`: Define rotas específicas para operações relacionadas aos movies.
         -  `'/' getAll`
      -  `'/:id' getOne` 
      -  `'/' create` 
      -  `'/' upate` 
      -  `'/:id' delete` 
  
    - `./src/routes/postRouter.js`: Define rotas específicas para operações relacionadas aos posts.
      -  `'/' getAll`
      -  `'/:id' getOne` 
      -  `'/' create`
      -  `'/:id' delete` 
  
    - `./src/routes/userRouter.js`: Define rotas específicas para operações relacionadas a usuários.
      -  `'/' getAll`
      -  `'/:id' getOne` 
      -  `'/' create` 
      -  `'/' upate` 
      -  `'/:id' delete`
    
    - `./src/routes/router.js`: Arquivo que define as rotas da API e associa cada rota ao seu respectivo controlador.
      -  `'/user' userRoutes`
      -  `'/post' postRouter` 
      -  `'/movie' movieRouter` 
      -  `'/adm' admRouter` 
      -  `'/login' UserController`
      -  `'/' AdmController`
      
      
 - `./src/models`: Representa as entidades do sistema e define como os dados serão manipulados.
    - `./src/models/Admin.js`: Modelo que define a estrutura de dados dos administradores.
    - `./src/models/User.js`: Modelo que define a estrutura de dados dos usuários.
    - `./src/models/Post.js`: Modelo que define como os posts de resenha são estruturados.
    - `./src/models/Movie.js`: Modelo para manipulação dos dados de filmes. 

- `.env`:Contém variáveis de ambiente, como chaves secretas e configurações de conexão com banco de dados. Importante manter seguro e fora de controle de versão. 
- `.gitignore`: Lista os arquivos e diretórios que não devem ser incluídos no repositório Git, como node_modules e .env. 
- `./package-lock.json`: Arquivo que registra as versões exatas das dependências instaladas para garantir a consistência nas instalações.
- `./index.js`: Arquivo de entrada principal da aplicação.
- `./package.json`: Arquivo que gerencia as dependências do projeto e scripts, além de armazenar informações sobre o projeto.

# Conclusão:
A arquitetura do projeto foi cuidadosamente organizada para separar claramente a lógica de negócios (controladores) e as rotas, garantindo que a manipulação dos dados seja feita de forma modular. A comunicação entre o frontend (React Native) e o backend (API em Node.js com MongoDB) é simplificada pela estrutura modular, que também facilita a manutenção e expansão do sistema no futuro.
