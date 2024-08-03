# what is an array?
an array is a collection of items that can be of any data type, including strings, integers and floats, and can be of different data types together.
```js
var numbers=[1,2,3,4,5,6]
console.log(numbers[2]);                   //3
console.log(numbers[4]);                   //5
console.log(numbers.length);               //6
console.log(numbers[numbers.length-1]);   //6
console.log(numbers[numbers]);   //0:1,  1:2,  2:3,  3:4,  4:5,  5:6 -every number in saperate line
for(let i=0;i<numbers.length;i++){
console.log(numbers[i])
} //printt all elements

//print even numpers
for(let i=0;i<numbers.length;i++){
    if(numbers[i]%2==0){
        console.log(numbers[i])
    }
}

//print even numbers with even positions
for(let i=0;i<numbers.length;i++){
    if(numbers[i]%2==0 && i%2==0){
        console.log(numbers[i])
    }
}
```
# style sign up form


