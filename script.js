function toggleMod () {
  const html = document.documentElement
   html.classList.toggle("light")
 
  //pegar a img
    const img = document.querySelector("#profile img")

    //substituir a imagem
   if(html.classList.contains('light')) {
    //se tiver light mode, adicionar a imagem
    img.setAttribute('src', './assets/avatar-light2.png')

   } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute('src', './assets/avatar.png')
   }


   }
 