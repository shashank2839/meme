let btn = document.getElementById('btnClick')
let image = document.getElementById('image')

btn.addEventListener('click', meme)

function meme(){
    fetch('https://meme-api.herokuapp.com/gimme')
    .then(res => res.json())
    .then(data => {
        btnClick.innerHTML = `<img 
        src="${data.url}"/>`
    })
}
    