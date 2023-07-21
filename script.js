function toggleMode() {
  const html = document.documentElement

  html.classList.toggle('light')

  // pegar a tag img e substituir a imagem
  const img = document.querySelector('#profile img')

  // Se tiver light mode, adicionar a imagem light
  if(html.classList.contains('light')) {
    img.setAttribute('src', './assets/logo-com-nome.jpeg')
  } else {
  // se tiver sem light mode, manter a imagem normal 
  img.setAttribute('src', './assets/logo.jpeg')
}
}