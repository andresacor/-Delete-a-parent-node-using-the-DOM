
let images = document.querySelectorAll('.delete')
let container = document.querySelectorAll('.container')
let cantidad = container.length

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function(){
        images[i].parentNode.parentNode.remove(container)
    })

}




