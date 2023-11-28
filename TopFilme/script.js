function loadTable(){
    fetch("http://www.omdbapi.com?s=Scream&apikey=cea04f46").then((res)=>
    res.json().then((result)=>{
        insertTable(result);
    })
    );
}

function insertTable(data){
    console.log("data",data);
    const element = document.getElementById("box");

    let output = '';
    data.forEach(movie => {
        output = '<div class="box">'
        output += '<div>' + movie.draw + '</div'
        output += '</div>';
    });

    element.innerHTML = output;

 //   <h1>FNAF</h1>
 //           <p class="datum">24.10.23</p>
 //           <p class="rating">04/10</p>
 //           <img class="moviePoster" src="SWP_BILDER/Movie.webp">
 //       </div>
}


const data = loadTable();
