// api = https://api.spoonacular.com/recipes/search?apiKey=
//key = 345bd017c57e4eeaa3106544bdd65a28


document.addEventListener("keypress",(e) =>{
    if(e.keyCode === 13 || e.which === 13){
        getInputs();
    }
     
})
   
    


function getInputs(){
    let food = document.querySelector('.all-results');
    food.innerHTML = '<img src="spinner.gif">';
    let input = document.querySelector("input").value;
    if(input !== ""){
        getFoods(input);
    }
    document.querySelector("input").value = ''; 
    
}


async function getFoods(name){
    
    let key = '345bd017c57e4eeaa3106544bdd65a28';
    let results = await fetch(`https://api.spoonacular.com/recipes/search?apiKey=${key}&query=${name}&number=50`);
    let data = await results.json();
    let food = document.querySelector('.all-results');
    food.innerHTML = '';
    //final result
    allData(data); 
}


function allData(data) {
    console.log(data)
    data.results.forEach(item => {
        let container = document.querySelector(".all-results");
        let html = `<div class="col-sm-2 m-2 image">    
                    <img src="https://spoonacular.com/recipeImages/${item.image}" class="img-fluid" alt="Image">
                    <h1>${item.title}</h1>
                    <a href="${item.sourceUrl}" style="color:white;" target="blank"><button class="btn btn-primary w-100">View</button></a>
                    </div>`;
        container.insertAdjacentHTML("beforeend",html);
    })
    
}

/* 
let title = data.results[0].title;
    let url = data.results[0].sourceUrl;
    let image = data.results[0].image;
    console.log(title,url,image);
*/