//concatenate
var myName ='shaimaa'
var jop = 'developer'
var str = `my name is ${myName} and i am a ${jop}`
console.log(str)
console.log(jop.length);
console.log(jop.charAt(0));
console.log(jop.indexOf('v'));
console.log(jop.includes('e'));
console.log(jop.includes('i'));
console.log(jop.slice(0,3));

var product={
    name:'yellowFlower',
    price: 10,
    category:'flower'
}
console.log(product);
console.log(product.name);
console.log(product.price);
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

//render sign in form
var signInBtn = document.getElementById('sign-in-btn')
var signInForm = document.getElementById('root')

signInBtn.addEventListener('click', function login(){
    signInForm.innerHTML = `<form class="sign-form">
        <img src="user.png" alt=""/>
        <h2>sign in</h2>
        <input type="email" placeholder="Email">
        <input type="password" placeholder="Password">
        <button type="submit">Sign in</button>
        <div class="box"><p>if you don't have an account?</p> <a href="#" onclick="render_signup()">Sign up</a></div>
    </form>`
})

//render sighn-up
var root = document.getElementById('root')

const render_signup =()=>{
    root.innerHTML = `<form class="sign-form">
        <img src="user.png" alt=""/>
        <h2>Sign up</h2>
        <input type="email" placeholder="Email">
        <input type="password" placeholder="Password">
        <label>
            <input type="checkbox"> Agree to terms
        </label>
        <button type="submit">Sign up</button>
        <button type="button">Sign up with Google</button>
        <div class="box"><p>do you allready have an account?</p> <a href="#" id="sign-in-btn" >Sign in</a></div>
    </form>`
}
