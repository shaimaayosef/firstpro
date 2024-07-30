# main points:
## what is functions?
snippet of code which excuted when it is called 
## types of functiones:
### print function
```js
//void functions
function print(){
    console.log('omer');
}

print(); //out put 'omer'

function printParameter(x){
    console.log(x);
}   // x is a parameter

printParameter('shaimaa')   // 'shaimaa' is an argument  output will be shaimaa
```
#### what the defrence between parameter and arguments?
### functions can see variables in glopal scop

```js
//returned functions
function sum(a,b){
    var sum = a+b;
    return sum
}
```
### defult parameter
```js
function sum(a,b=0){
    var sum = a+b;
    return sum
}

sum(5)  // it will make b = 0
```
### rest parameter 
```js
function printAll(a,b,...c){
    console.log(a,b,c);
}

printAll(1,2,3,5,4,8,7,9,8)  // 1 match with a , 2 match with b , the rest will match with c and will print it as an array
```
### arrow function
```js
const add = (x,y)=>{
    console.log(x+y)
}
```
### inner function and outer function
```js
function outer(){
    console.log('omar');
    function inner(){
        console.log('sayed');
    }

    inner();
}

outer(); //omer sayed

```
### call back function
```js
function foo(){
    if(x=='click'){
        boo();
    }
}
foo('click',function(){console.log('bar')})
```
### higher order function
### pure function & non pure function
### immedietly invoced function expression.
### recursion function  //rather than loop