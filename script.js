//https://api.themoviedb.org/3/movie/popular?api_key=41bfdf63bb31f7a865298a5248f6475e&language=en-US&page=1


const getMovies = () => {

    var filename = "https://api.themoviedb.org/3/movie/popular?api_key=41bfdf63bb31f7a865298a5248f6475e&language=en-US&page=1";
            

    fetch(filename)
        .then(response => response.json())
        .then(json => carrega(json))
        .catch(error => console.log(error))       
    
}


const carrega = (json) =>{

    for (let i = 0; i < 10 ; i++) {
        

        var container = document.getElementById("container");
        var div = document.createElement("div");
        div.className = 'filme';
        var divImg = document.createElement("div");
        divImg.className = 'divImg';
        var img = document.createElement("img");
        var h3 = document.createElement("h3");

        img.src = "https://image.tmdb.org/t/p/w300"+ json.results[i].poster_path;
        h3.innerHTML = `<span>${(i+1)}. </span>`+json.results[i].title;

        container.appendChild(div);
        div.appendChild(divImg)
        divImg.appendChild(img);
        div.appendChild(h3);
        
    }

}