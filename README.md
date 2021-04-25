# ui-clone-corebiz

![Corebiz](https://github.com/marina-santana/ui-clone-corebiz/blob/master/video.gif)

**Link github page - https://marina-santana.github.io/ui-clone-corebiz/**

## Como rodar (npm e yarn)
**obs: todos os comandos devem ser rodados dentro da pasta do projeto**
- Primeiro faça clone do projeto `git clone https://github.com/marina-santana/ui-clone-corebiz.git`
- Rode o comando `npm install` ou `yarn` 
- Por fim rode o comando `yarn start` ou `npm run start`

### Rodar com o Docker

- Primeiro rode o comando `docker build -t sample:dev .`
- Após criarmos a imagem é necessário subir o container, comando: `docker run -v ${PWD}:/app -v /app/node_modules -p 3000:3000 --rm sample:dev`
- Agora é só acessar a url http://localhost:3000 no seu navegador

### Padronização dos commits
O padrão utilizado nos commits do git foi o **Semantic Commit**  
mais informações sobre esse padrão em ---> https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716

### Conferir resultado
Esse projeto foi publicado no github page confira aqui - https://marina-santana.github.io/ui-clone-corebiz/

### Armazenamento
Para transferência de dados entre componentes foi utilizado o redux e para a persistência foi utilizado o redux-persist, que salva às informações no session storage