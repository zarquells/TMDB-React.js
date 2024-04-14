<h2> Utilizamos os seguintes recursos para este projeto: </h2>
<ul>
  <li>  React    </li>
  <li>  Vite     </li>
  <li>  API TMDB </li>
</ul>

<h3> O que é o Vite afinal? </h3>
  <p>
    "Vite é uma ferramenta de desenvolvimento de front-end construída com base no ecossistema do JavaScript. 
    Ela foi criada para melhorar a eficiência do desenvolvimento front-end, 
    tornando-o mais rápido e mais fácil para os desenvolvedores."
    "Vite usa a funcionalidade do ECMAScript 6, que permite que os desenvolvedores criem aplicativos usando módulos JavaScript.
    Ele usa o sistema de módulos nativo do JavaScript, que é nativo nos navegadores modernos, 
    permitindo que os desenvolvedores criem aplicativos sem precisar transpilar o código."
  </p> 

<h3> Construção do Projeto: </h3>
  <p>
    Começamos com o arquivo 'main.jsx' responsável por construir e manter as rotas das páginas, as quais são: 
  </p>
  <ul>
    <li> Main        (Movies) ('to=/')                         </li>
    <li> Page Search (Search) ('to=/search')                   </li>
    <li> Page Movie  (Movie ) ('to=/movie/ {index do filme} ') </li>
  </ul>
  
  <p> 
    Após a construção, fazemos o teste de rotas através do módulo 'Outlet':
  </p>
    <code> 'import { Outlet } from react-router-dom' </code>

  <p> 
    Este módulo nos mostra quais páginas estamos acessando com um texto exibido no body da página atual. 
    Apesar de que podemos verificar isto com base no caminho da url também (rs).
  </p>


 P.S: Note que os arquivos estão em maioria anotados como '.jsx', isto pode facilitar para puxar comandos de acordo com a IDE 
 porém quando se trata do programa em si, não há diferença em relação a lógica podendo ser arquivos tanto '.js' ou '.jsx'.
