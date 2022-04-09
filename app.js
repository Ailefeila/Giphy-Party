async function getGifs(searchTerm){
    const res = await axios.get('https://api.giphy.com/v1/gifs/search', 
    {params: {
        q: searchTerm,
        api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
    }});
    const container = document.querySelector('#container');
    const gif = document.createElement('img');
    gif.src = res.data.data[0].images.original.url;
    container.append(gif);
}

const form = document.querySelector('#searchform');
const input = document.querySelector('#search');
form.addEventListener("submit", function(e){
    e.preventDefault();
    getGifs(input.value);
    form.reset();
})

const rmbtn = document.querySelector('#remove');
rmbtn.addEventListener("click", function(){
    container.innerHTML = "";
})