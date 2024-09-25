'use strict'

var gMeme = { 
    selectedImgId: 1, 
    selectedLineIdx: 0, 
    lines: [ 
        { 
            txt: 'I sometimes eat Falafel', 
            size: 20, 
            color: 'red' 
        } 
    ] 
} 


function getMeme(){
    return gMeme
}

function setImg(imgId){
    gMeme.selectedImgId = imgId
}

function getSelectedUrl(){
    const selectedImgId = gImgs.find(img => img.id === gMeme.selectedImgId)
    return selectedImgId.url 
}

function setLineTxt(txt){
    gMeme.lines[0].txt = txt
}