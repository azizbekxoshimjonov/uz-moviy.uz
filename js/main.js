let partMovies = movies.slice(0,100)
let elMovList = document.querySelector('.movises__list')
let elSelCat = document.querySelector('.sel__category')
fnRender(partMovies)
function fnRender(data) {
  elMovList.innerHTML = ""
  data.forEach((item) => {
    let newLi = document.createElement('li')
    newLi.innerHTML = `
    <div class="card" style="width: 18rem;">
        <img src="https://i.ytimg.com/vi/${item.ytid}/hq720.jpg" class="card-img-top" alt="...">
        <div class="card-body">
        <p class="card-title">${item.movie_year}<p>
          <h5 class="card-title d-flex align-item-center justify-content-between">${item.Title.toString().slice(0,25)}  <i onclick="fnLoveMovie('${item.ytid}')" class="bi bi-heart"></i></h5>
          <p class="card-text">${item.Categories.toString().slice(0,30)}</p>
          <h4 class="card-text">${item.imdb_rating}</h4>
          <a href="https://www.youtube.com/watch?v=${item.ytid}" target=""_blank class="btn btn-warning">watch movies</a>
        </div>
      </div>
`
elMovList.appendChild(newLi)
})
}

function fnYear(value){
    if(value == 'old'){
        fnRender(partMovies.sort((a,b)=>a.movie_year - b.movie_year))
    }else{
        fnRender(partMovies.sort((a,b)=>b.movie_year - a.movie_year))
    }
}
function fnRating(value){
    if(value == 'min'){
        fnRender(partMovies.sort((a,b)=>a.imdb_rating - b.imdb_rating))
    }else{
        fnRender(partMovies.sort((a,b)=>b.imdb_rating - a.imdb_rating))
    }
}
let arrCategory = []
partMovies.forEach((item)=>{
    if(!arrCategory.includes(item.Categories))
    arrCategory.push(item.Categories)

})
arrCategory.forEach(item =>{
    let newOption = document.createElement('option')
    newOption.textContent = item
    newOption.value = item
    elSelCat.appendChild(newOption)
})
function fnCategory(value){
    fnRender(partMovies.filter((item)=> item.Categories == value))
}
function movieSearch(e){
    e.preventDefault()
    let mov = e.target.mov.value
    fnRender(partMovies.filter((i)=> 
    i.Title.toString().toLowerCase().includes(mov.toLowerCase()) &&
    i.Title.toString().toLowerCase() [0] == mov.toLowerCase()[0]        
    ))
}
let intialLocalDate = []
function fnLoveMovie(id){
    console.log(partMovies.find((item)=>item.ytid == id));
    intialLocalDate.push(partMovies.find((item)=> item.ytid == id))
    window.localStorage.setItem('localMovie',JSON.stringify(intialLocalDate))
}
