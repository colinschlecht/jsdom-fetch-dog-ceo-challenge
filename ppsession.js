// console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


function insertImage(images){
    const imgHolder = document.querySelector('#dog-image-container')
    images.forEach(image => {
        const img = document.createElement('img')
        img.src = image
        imgHolder.appendChild(img)
    })
}

function insertBreed(breeds){
    const breedHolder = document.querySelector('#dog-breeds')
    for (const key in breeds) {
        const li = document.createElement('li')
        li.innerText = key
        li.classList = key[0]
        li.addEventListener('click',()=>{
            li.style.color = 'firebrick'
        })
        breedHolder.appendChild(li)
    }
}

// for (const something of options){
    //     something.addEventListener('click', ()=>{
        //     console.log(breedHolder)
        // })}
        
document.addEventListener('DOMContentLoaded',function(){
    const breedHolder = document.querySelector('#dog-breeds')
    fetch(imgUrl) .then(r => r.json()) .then(json => insertImage(json.message))
    fetch(breedUrl) .then(r => r.json()) .then(function(json){
        for (const key in json.message) {
            const li = document.createElement('li')
            li.innerText = key
            li.classList = key[0]
            li.addEventListener('click',()=>{
                li.style.color = 'firebrick'
            })
            breedHolder.appendChild(li)
        }
    })
    
    const options = document.getElementById('breed-dropdown')
    options.addEventListener('change',(e)=>{
        breedHolder.removeChild
        breedHolder.appendChild(li.classList === e.target.value)
    })

    // selectElement.addEventListener('change', (event) => {
    //     const result = document.querySelector('.result');
    //     result.textContent = `You like ${event.target.value}`;
    //   });
})