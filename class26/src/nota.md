EXPLICAÇÃO GERAL — “O que foi feito e por quê”
1️⃣ Add a “Clear Filter” button

O que foi feito:

<button className="clear-btn" onClick={clearFilter}>
  ❌ Clear Filter
</button>


E também criei a função:

const clearFilter = () => setSearch("");


📘 Explicação:
Esse botão limpa o campo de busca (search volta a ser uma string vazia).
Assim o filtro volta a mostrar todos os usuários.

2️⃣ Show total results

Adicionado:

<p className="meta">
  Showing {filtered.length} of {users.length} users
</p>


📘 Explicação:
Mostra quantos usuários estão sendo exibidos após o filtro (filtered.length) em relação ao total baixado da API (users.length).

3️⃣ Add a new searchable item

Adicionado:

u.username.toLowerCase().includes(search.toLowerCase())


📘 Explicação:
Agora o filtro também busca pelo username além de name e email.

4️⃣ Change the window title

Adicionado no useEffect:

document.title = "User Directory 🌍";


📘 Explicação:
Muda o título da aba do navegador (que aparece no topo da janela).

5️⃣ Change the page title

Alterado:

<h1>🌐 User Finder Directory</h1>


📘 Explicação:
Troquei o título visível na página (antes era “Lista de Usuários”) para um nome mais estilizado e com emoji.

6️⃣ Change the main background color

Alterado no CSS:

--bg: #101725; /* era #0b0f14 */


📘 Explicação:
Deixei o fundo levemente mais azulado e suave, pra destacar melhor os cards.

7️⃣ Change the search placeholder message

Alterado o placeholder do input:

placeholder="🔍 Search by name, email, or username..."


📘 Explicação:
Mensagem mais clara e bonita, com emoji de lupa e mencionando o novo campo de busca (username).

8️⃣ Add a new searchable item

✅ (Mesma modificação do item 3)
O campo username foi adicionado à filtragem.

9️⃣ Highlight the typed text in the input

Adicionado no CSS:

.search:not(:placeholder-shown) {
  border-color: var(--accent);
  background-color: #1c2535;
}


e

className={`search ${search ? "active" : ""}`}


📘 Explicação:
Quando o usuário digita algo, o campo de busca muda de cor para indicar que há texto digitado (feedback visual).

🔟 Add emojis or icons to each user

Adicionado dentro do .map():

<div className="title">👤 {u.name}</div>
<div className="muted">📧 {u.email}</div>
<div className="muted">💻 @{u.username}</div>
<div className="muted">🏙️ {u.address.city}</div>
<a className="link">🌎 {u.website}</a>


📘 Explicação:
Adicionei ícones temáticos pra cada tipo de informação, deixando o design mais visual e fácil de ler.

11️⃣ Add a footer message

Adicionado:

<footer className="footer">
  <p>✨ Made with ❤️ by NacckL ✨</p>
</footer>


📘 Explicação:
Mensagem personalizada no rodapé, centralizada e separada por uma linha.

12️⃣ Add a horizontal line between the header and the list

Adicionado:

<hr className="divider" />


E no CSS:

.divider {
  border: 0;
  border-top: 1px solid var(--border);
  margin: 10px 0 20px;
}


📘 Explicação:
Cria uma linha horizontal para separar o cabeçalho da lista de usuários (melhora a estrutura visual).

13️⃣ Add a new attribute to the card

Adicionado:

<div className="muted">🏙️ {u.address.city}</div>


📘 Explicação:
Agora cada card mostra também a cidade do usuário, obtida do campo address.city da API jsonplaceholder.

✨ Resultado Final

O app agora tem:
✅ Filtro com botão “Clear”
✅ Contador de resultados
✅ Busca por nome, email e username
✅ Emojis e cores interativas
✅ Novo fundo, novo título, novo rodapé
✅ Destaque visual ao digitar


(
    useEffect(() => {
  const localUsers = [
    { id: 1, name: "NacckL", email: "nacckl@example.com", username: "NacckL", address: { city: "São Paulo" }, website: "nacckl.dev" },
    { id: 2, name: "Alice Gamer", email: "alice@gamehub.com", username: "Alicee", address: { city: "Rio de Janeiro" }, website: "alicegamer.net" },
    { id: 3, name: "Bruno Trader", email: "bruno@stocks.com", username: "BTrade", address: { city: "Curitiba" }, website: "brunotrade.io" },
  ];
  setUsers(localUsers);
  document.title = "User Directory 🌍";
}, []);

)