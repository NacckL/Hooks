1. Que parte do código define o título da janela?
O título da janela (que aparece na aba do navegador) não está definido em nenhum dos arquivos React/JSX fornecidos.
•
Onde é definido: O título é definido na tag <title> dentro do arquivo index.html do projeto (que não foi fornecido). Este é o arquivo principal que carrega o aplicativo React.

2. Por que className é usado no arquivo index?
O termo index file pode se referir a main.jsx (o ponto de entrada) ou IndicatorsIndexPage.jsx (o componente principal).
•
Motivo: className é usado em vez de class porque o código está escrito em JSX (JavaScript XML), que é uma extensão de sintaxe usada pelo React. A palavra-chave class é reservada em JavaScript para definir classes de programação. Para evitar conflito, o React utiliza className para se referir ao atributo class do HTML, que é usado para aplicar estilos CSS.
•
Exemplo em IndicatorsIndexPage.jsx (Linha 39):

3. Que parte do código é responsável por fazer o card branco aparecer centralizado na página?
A centralização do card branco é definida no arquivo indicators-index.css, dentro da classe .indicators-page.
•
Trecho de Código (Linhas 15-22):
•
Explicação:
1.
display: flex; transforma o contêiner (indicators-page) em um contêiner flexível.
2.
justify-content: center; centraliza o conteúdo (o card) horizontalmente.
3.
align-items: flex-start; alinha o conteúdo no início do eixo transversal (vertical), mas como o padding é aplicado ao contêiner, o card aparece centralizado horizontalmente e com um espaçamento superior. Se fosse align-items: center;, o card estaria centralizado perfeitamente no meio da tela.



4. Em qual arquivo as cores, espaçamento e fontes são definidos?
As cores, espaçamento e algumas definições de fonte são definidos no arquivo indicators-index.css.
•
Cores e Espaçamento (Variáveis CSS): A maioria das definições é feita usando Variáveis CSS (propriedades customizadas) dentro do seletor :root.
•
Trecho de Código (Linhas 1-11):
•
Fontes (Tamanho e Peso): O tamanho e peso da fonte são definidos em seletores específicos, como em .title e nas células da tabela.

5. O que o elemento <th> faz?
O elemento <th> (Table Header) representa uma célula de cabeçalho em uma tabela HTML.
•
Função: Ele é usado para rotular colunas (ou, em alguns casos, linhas) e fornece contexto semântico para o conteúdo da tabela. Por padrão, o texto dentro de um <th> é exibido em negrito e centralizado (embora o CSS no seu projeto o alinhe à esquerda).
•
Uso no Projeto (Linhas 51-53 de IndicatorsIndexPage.jsx):

6. O que data.map faz no arquivo index?
No arquivo IndicatorsIndexPage.jsx, o método data.map() é usado para iterar sobre o array data e renderizar dinamicamente as linhas da tabela.
•
Trecho de Código (Linhas 57-67 de IndicatorsIndexPage.jsx):
•
Explicação: Para cada objeto dentro do array data (que contém os indicadores), a função map retorna um novo elemento <tr> (linha da tabela), preenchendo as células (<td>) com os valores de row.name, row.dimension e row.description. Isso evita a necessidade de escrever manualmente o código para cada linha da tabela.

7. Que elemento representa uma célula de cabeçalho dentro de uma linha de tabela?
O elemento que representa uma célula de cabeçalho dentro de uma linha de tabela é o <th> (Table Header).

8. Que elemento representa uma célula de dados padrão dentro de uma linha de tabela?
O elemento que representa uma célula de dados padrão dentro de uma linha de tabela é o <td> (Table Data).

9. Se quiséssemos exibir apenas uma linha estática em vez de vários indicadores, que parte do código poderíamos remover ou simplificar?
Para exibir apenas uma linha estática, você precisaria remover a lógica de iteração e o array de dados.
•
Partes a Simplificar/Remover:
1.
Remover o array data (Linhas 4-35 de IndicatorsIndexPage.jsx).
2.
Remover o método .map() que itera sobre o array.
•
Simplificação no JSX (Linhas 57-67 de IndicatorsIndexPage.jsx): Você substituiria o bloco dinâmico:

10. Qual regra CSS define a cor de fundo de toda a página, e qual variável é usada para isso?
A cor de fundo de toda a página é definida pela regra background: var(--bg); na classe .indicators-page no arquivo indicators-index.css.
•
Regra CSS: background: var(--bg);
•
Variável Usada: --bg
•
Trecho de Código (Linhas 1-2 e 17 de indicators-index.css):

