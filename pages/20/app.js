const image = document.querySelectorAll('.image');
const gallery = document.querySelector('.gallery');

let ImageBox = []
image.forEach((element)=>{
    ImageBox.push(element.outerHTML)

})

console.log(ImageBox)

let Index = -1

window.addEventListener("keydown", ()=>{
    if(event.keyCode == "39" && Index < 5){ // right
        Index++
        gallery.innerHTML = ImageBox[Index]
        console.log(Index)
        
    }
    if(event.keyCode == "37" && Index > 0){ // left
        Index--
        gallery.innerHTML = ImageBox[Index]

    }
})