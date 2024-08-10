var products=[
    {
        id: 1,
        img:'./product.jpg',
        name:'yellowFlower',
        description:'',
        price: 10,
        category:'flower'
    },
    {
        id: 2,
        img:'./product.jpg',
        name:'redFlower',
        description:'',
        price: 15,
        category:'flower'
    },
    {
        id: 3,
        img:'./product.jpg',
        name:'greenFlower',
        description:'',
        price: 20,
        category:'flower'
    },
    {
        id: 4,
        img:'./product.jpg',
        name:'blueFlower',
        description:'',
        price: 25,
        category:'flower'
    },
    {
        id: 5,
        img:'./product.jpg',
        name:'blackFlower',
        description:'',
        price: 30,
        category:'flower'
    },
    {
        id: 6,
        img:'./product.jpg',
        name:'whiteFlower',
        description:'',
        price: 35,
        category:'flower'
    }
]


//loop to generate card from array
var root = document.getElementById('root')
const render_products=()=>{
    for(var i=0; i<products.length; i++){
    root.innerHTML += `
    <div class="product-card">
        <img src="${products[i].img}" alt=''>
        <h2>${products[i].name}</h2>
        <p>${products[i].description}</p>
        <p>${products[i].price}</p>
        <button onclick="addToCart(${products[i].id})">Add to Cart</button>
    </div>
    `
}
}
// render_products();
const refresh=()=>{
    root.innerHTML='';
    render_products();
}
//search function
var searchInput = document.getElementById('search')
var searchBtn = document.getElementById('search-btn')
searchBtn.addEventListener('click', function(){
    searchResult.innerHTML = ''
    for(var i=0; i<products.length; i++){
        if(products[i].name.includes(searchInput.value)||products[i].description.includes(searchInput.value) ){
            root.innerHTML += `
            <div class="product-card">
                <img src="${products[i].img}" alt=''>
                <h2>${products[i].name}</h2>
                <p>${products[i].description}</p>
                <p>${products[i].price}</p>
                <button onclick="addToCart(${products[i].id})>Add to Cart</button>
            </div>
            `
        }
    }
})

//improve search to include searching py price and give a string 'no result for ...' if the search input value not match any product

//render sign in form


const login=()=>{
    root.innerHTML = `<form onsubmit="sign_in()" class="the_form">
        <img src="user.png" alt=""/>
        <h2>sign in</h2>
        <input type="email" id="l_email" placeholder="Email">
        <input type="password" id="l_password" placeholder="Password">
        <button type="submit">Sign in</button>
        <div class="box"><p>if you don't have an account?</p> <a href="#" onclick="render_signup()">Sign up</a></div>
    </form>`
}

//render sighn-up

const render_signup =()=>{
    root.innerHTML = `<form onsubmit="signup()" class="the_form">
        <img src="user.png" alt=""/>
        <h2>Sign up</h2>
        <input type="email" id="email" placeholder="Email">
        <input type="password" id="password" placeholder="Password">
        <label>
            <input type="checkbox" id="checkbox"> Agree to terms
        </label>
        <button type="submit">Sign up</button>
        <button type="button">Sign up with Google</button>
        <div class="box"><p>do you allready have an account?</p> <a href="#" onclick="login()" >Sign in</a></div>
    </form>`
}
var users=[{email:"shimaa@gmail",password:"1234"}];
//sighn up function
const signup=()=>{
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var agree = document.getElementById('checkbox').checked;
    if(email && password && agree){
        // Create a new object with the input values
        var newUser = {
            email: email,
            password: password,
            agree: agree
        };
        // Add the new user to an array
        users.push(newUser);
        login();
        // Display success message
        alert('sign up success');
    }else{
        alert('please fill all the form');
    }
}
console.log(users);

//login function
var loggedIn = false;
const sign_in =()=>{
    var email = document.getElementById('l_email').value;
    var password = document.getElementById('l_password').value;
    if(users.length==0){
        alert('please sign up')
    }else{
        for(var i=0; i<users.length; i++){
            if(email === users[i].email && password === users[i].password){
                loggedIn = true;
                break;
            }
        }
        if(loggedIn){
            alert('login success');
            refresh();
        }else{
            alert('login failed');
        }
    }
}

//log out function
const logout=()=>{
    loggedIn = false;
    login();
}

//rennder add product form
const add_product =()=>{
    root.innerHTML = `<form onsubmit="addProduct()" class="the_form">
        <h2>Add Product</h2>
        <input type="text" id="name" placeholder="Name">
        <input type="text" id="description" placeholder="Description">
        <input type="number" id="price" placeholder="Price">
        <input type="text" id="category" placeholder="Category">
        <button type="submit">Add Product</button>
    </form>`
}

//add product function
const addProduct=()=>{
    if(loggedIn){
        var name = document.getElementById('name').value;
        var description = document.getElementById('description').value;
        var price = document.getElementById('price').value;
        var category = document.getElementById('category').value;
        if(name && description && price && category){
            var newProduct = {
                id: products.length+1,
                img:'./product.jpg',
                name: name,
                description: description,
                price: price,
                category: category
            }
            products.push(newProduct);
            refresh();
            alert('product added');
        }else{
            alert('please fill all the form');
        }
    } else {
        alert('Please log in to add a product');
    }
}

//add to cart function
var cart = [];
const addToCart=(id)=>{
    if(loggedIn){
        for(var i=0; i<products.length; i++){
            if(products[i].id == id){
                cart.push(products[i]);
                alert('product added to cart');
            }
        }
    }else{
        alert('please log in');
    }
}
console.log(cart);