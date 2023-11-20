//adicionando filmes 
function adicionarFilme () {
  //adicionando valor do filme
  var filmeFavorito =
  document.getElementById('filme').value
  //adicionando lista e imagem 
  var elementoListaFilmes = document.getElementById('listaFilmes')
  elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + '<img src=' + filmeFavorito + '>'
  //cod para limpar barra de url
  document.getElementById('filme').value='' 


}