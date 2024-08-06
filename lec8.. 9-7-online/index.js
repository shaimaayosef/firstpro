//array of objects
var products=[
    {
        img:'./product.jpg',
        name:'yellowFlower',
        description:'',
        price: 10,
        category:'flower'
    },
    {
        img:'./product.jpg',
        name:'redFlower',
        description:'',
        price: 15,
        category:'flower'
    },
    {
        img:'./product.jpg',
        name:'greenFlower',
        description:'',
        price: 20,
        category:'flower'
    },
    {
        img:'./product.jpg',
        name:'blueFlower',
        description:'',
        price: 25,
        category:'flower'
    },
    {
        img:'./product.jpg',
        name:'blackFlower',
        description:'',
        price: 30,
        category:'flower'
    },
    {
        img:'./product.jpg',
        name:'whiteFlower',
        description:'',
        price: 35,
        category:'flower'
    }
]
console.log(products);
console.log(products[1]);

//loop to generate card from array
var root = document.getElementById('root')
for(var i=0; i<products.length; i++){
    root.innerHTML += `
    <div class="product-card">
        <img src="${products[i].img}" alt=''>
        <h2>${products[i].name}</h2>
        <p>${products[i].description}</p>
        <p>${products[i].price}</p>
        <button>Add to Cart</button>
    </div>
    `
}

//search function
var searchInput = document.getElementById('search')
var searchBtn = document.getElementById('search-btn')
var searchResult = document.getElementById('root')
searchBtn.addEventListener('click', function(){
    searchResult.innerHTML = ''
    for(var i=0; i<products.length; i++){
        if(products[i].name.includes(searchInput.value)||products[i].description.includes(searchInput.value) ){
            searchResult.innerHTML += `
            <div class="product-card">
                <img src="${products[i].img}" alt=''>
                <h2>${products[i].name}</h2>
                <p>${products[i].description}</p>
                <p>${products[i].price}</p>
                <button>Add to Cart</button>
            </div>
            `
        }
    }
})

//improve search to include searching py price and give a string 'no result for ...' if the search input value not match any product

