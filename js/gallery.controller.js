'use strict'
function  renderGallery() {
    const elGallery = document.querySelector('.gallery')
    
    const images = gImgs
    const strHtmls = images.map(image =>`<img src="${image.url}" onclick="onImgSelect(${image.id})">`)

    elGallery.innerHTML = strHtmls.join('')
1
}

function onImgSelect(imgId){
    setImg(imgId)
    renderMeme()
    const elEditor = document.querySelector('.editor')
    const elGallery = document.querySelector('.gallery')
    const elSearchBar = document.querySelector('.search-bar')
    elGallery.classList.remove('main-layout')
    elGallery.classList.add('hidden')
    elSearchBar.classList.add('hidden')
    elEditor.classList.remove('hidden')
}