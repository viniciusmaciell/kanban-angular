PROJETO KANBAN-ANGULAR

Este projeto é a reprodução de um quadro de kanban que permite o gerenciamento de cards que podem ser organizados em três colunas (TO-DO, DOING, DONE) respectivamente, e que contém as seguintes funcionalidades:

 - Inserção de Cards
   - Ao clicar no botão em destaque '+' localizado na parte superior esquerda do quadro, um card em branco aparecerá na tela com dois campos "Title" e "Content" a serem preenchidos. O botão verde confirma os dados e adiciona o card na lista "TO-DO", o botão vermelho cancela a ação.

 - Movendo Cards
   - Todo card adicionado conterá botôes <- -> que permitem mover o card entre as listas.

- Modo de edição
   - Ao clicar no botão de edição logo após o campo "Title", um card vazio aparecerá e permitirá a modificação dos dados 'Title' e 'Content'. A edição pode ser confirmada ou cancelada.

 - Excluindo Cards - Todo card possui um botão vermelho na parte central inferior que permite a remoção do mesmo.


 REQUISITOS

  Para executar o projeto deve-se realizar os seguinte passos:

 - Iniciando a API:
     - Após o Download, abra o diretório 'BACK' dentro de um terminal e execute o seguinte comando > npm install.
     - Após a instalação, rode o comando => $ npm run server
     - Ela irá responder na url: http://localhost:5000/
  

 - Iniciando a aplicação:
     - Após o Download, abra o diretório 'FRONT' dentro de um terminal e execute o seguinte comando > npm install.
     - Após a instalação ser concluída, execute o comando => $ ng serve.
     - A aplicação irá iniciar e resposnder na url: http://localhost:4200/.
  
  - Utilizando a aplicação: 
      - Logo após a inicialização no browser, é necessário fazer login para ter acesso ao quadro. Login e senha são, respectivamente, 'letscode' e 'lets@123'.
       - Pronto, você já está apto a utilizar a aplicação sem restrições.
  
  Aproveite !
  
  
  Created by Vinícius Maciel.
