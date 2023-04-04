let picture = document.getElementById('current-image-container');
let current_image = document.getElementById('current-picture')
const APIKEY = '4QLNcg7cxMVpOfjkrrC0yl4NgUSk9kmlT7xeMISK';
const apodUrl = 'https://api.nasa.gov/planetary/apod';
let picture_detail = document.getElementById('pictureDetail');

function getCurrentImageOfTheDay(){
    const currentDate = new Date().toISOString().split("T")[0];
    fetch(`${apodUrl}?api_key=${APIKEY}&date=${currentDate}`)
        .then((response)=>{
            console.log(response)
            return response.json()

        }).then((data)=>{
            picture_detail.innerHTML = `<h2>${data.title}</h2><p>${data.explanation}</p>`;
            current_image.src = data.url;

            })
}
 function getImageOfTheDay(){
    const selctedDate = document.getElementById('search-input').value;
    console.log("hi")
    fetch(`${apodUrl}?api_key=${APIKEY}&date=${selctedDate}`)
        .then((response)=>{
            console.log(response)
            return response.json()

        }).then((data)=>{
            picture_detail.innerHTML = `<h2>${data.title}</h2><p>${data.explanation}</p>`;
            current_image.src = data.url;

            })
}

// document.getElementById('btn').addEventListener('click',getImageOfTheDay());