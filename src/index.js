// console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";


document.addEventListener("DOMContentLoaded", () => {
    createOptions()
    let allDogs = []

    //fetch images
    fetch(imgUrl)
        .then((resp) => resp.json())
        .then((images) => createImage(images.message));
    //fetch dog breeds
    fetch(breedUrl)
        .then((resp) => resp.json())
        .then((breedObj) => {
            allDogs = Object.keys(breedObj.message)
            allDogs.forEach(dog => createBreed(dog))
        });
        
        const breedHolder = document.querySelector("#dog-breeds");
        
        
        function createOptions(){
            const options = document.querySelector('#breed-dropdown');
            let abc = ['all','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o','p','q','r','s', 't', 'u', 'v', 'w','x','y','z']
            options.innerHTML = ''
            
            abc.forEach(letter => {
                let option = document.createElement('option')
                option.value = letter
                option.textContent = letter
                options.appendChild(option)

            })

            options.addEventListener('change', (e)=> {
                let filteredDogs = []
                if(e.target.value == 'all'){
                    filteredDogs = allDogs
                } else {
                    filteredDogs = allDogs.filter(dog => dog.startsWith(e.target.value))
                }
                breedHolder.innerHTML = ''
                filteredDogs.forEach(dog => createBreed(dog)) 
            })
        };
    
        
        
        //create breed li's and append to ul (breedHolder)
        function createBreed(dog) {
                let li = document.createElement("li");
                li.textContent = dog;
                li.classList = dog[0];
                breedHolder.appendChild(li);
                li.addEventListener('click', () => {
                    li.style.color = 'firebrick'
                })
            
        };

        //create img / append images to image holder
        function createImage(images) {
            const imageHolder = document.querySelector("#dog-image-container");
            for (im of images) {
                let img = document.createElement("img");
                img.src = im;
                imageHolder.appendChild(img);
            }
        };
        
    });

