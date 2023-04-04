let picture = document.getElementById('current-image-container');
const APIKEY = '4QLNcg7cxMVpOfjkrrC0yl4NgUSk9kmlT7xeMISK'
const url = 'https://api.nasa.gov/planetary/apod?'

fetch('https://api.nasa.gov/planetary/apod?api_key=4QLNcg7cxMVpOfjkrrC0yl4NgUSk9kmlT7xeMISK')
.then((response)=>{
    return response.json()
}).then((data)=>{

    console.log(data);
})

document.getElementById('btn')