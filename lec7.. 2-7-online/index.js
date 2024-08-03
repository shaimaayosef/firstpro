var numbers=[1,1,2,2,3,5,5,7,8,4]
console.log(numbers[2]);                   //3
console.log(numbers[4]);                   //5
console.log(numbers.length);               //6
console.log(numbers[numbers.length-1]);   //6
console.log(numbers);   //0:1,  1:2,  2:3,  3:4,  4:5,  5:6 -every number in saperate line
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
    if(numbers[i] !== undefined && numbers[i]%2==0 && i%2==0){
        console.log(numbers[i])

    }
}

//write an algorithm that reverses the order of elements of the given array
var numbers=[1,2,3,4,5,6]
var reversedArray=[]
for(let i=numbers.length-1;i>=0;i--){
    reversedArray.push(numbers[i])
}
console.log(reversedArray)

//write an array ontains negative numbers
var numbers=[1,-2,3,-4,5,-6]
//print all negative numbers from the previos array
for(let i=0;i<numbers.length;i++){
    if(numbers[i]<0){
        console.log(numbers[i])
    }
}

//write an algorithm to fined a spesefic number prompt from user'
var numbers=[1,2,3,4,5,6]
document.getElementById("find").addEventListener('click',function(){
    var num=Number(document.getElementById("input1").value)
var isFound=false
for(let i=0;i<numbers.length;i++){
    if(numbers[i]===num){
        isFound=true
        break
    }
}
if(isFound){
    document.getElementById("result").innerHTML = "number exist";
}
else{
    document.getElementById("result").innerHTML = 'Number is not found';
}})

//write an algorithem that determine a specefic number how many times is repeted
var numbers=[1,2,3,4,5,5,6,4,4,4,4]
document.getElementById("count").addEventListener('click',function(){
    var num=Number(document.getElementById("input2").value)
    var count=0
    for(let i=0;i<numbers.length;i++){
    if(numbers[i]===num){
        count++
    }
}
document.getElementById("countResult").innerHTML =count;
}
)

//get the sum of the array numbers
var numbers=[1,2,3,4,5,6]
var sum=0
for(let i=0;i<numbers.length;i++){
    sum+=numbers[i]
}
console.log(sum)

//get the max number in array
var numbers=[1,2,3,4,5,6]
var max=numbers[0]
for(let i=1;i<numbers.length;i++){
    if(numbers[i]>max){
        max=numbers[i]
    }
}
console.log(max)

//get the min number in array
var numbers=[1,2,3,4,5,6]
var min=numbers[0]
for(let i=1;i<numbers.length;i++){
    if(numbers[i]<min){
        min=numbers[i]
    }
}
console.log(min)

//determine how many numpers is even and howmany is odd
var numbers=[1,2,3,4,5,6]
var evenCount=0
var oddCount=0
for(let i=0;i<numbers.length;i++){
    if(numbers[i]%2==0){
        evenCount++
    }else{
        oddCount++
    }
}
console.log('even numbers count is '+evenCount)
console.log('odd numbers count is '+oddCount)

//nested loops
var numbers=[[1,2,3],[4,5,6],[7,8,9]]
for(let i=0;i<numbers.length;i++){
    for(let j=0;j<numbers[i].length;j++){
        console.log(numbers[i][j])
    }
}

//sort
var numbers=[1,2,3,4,5,6]
numbers.sort()
console.log(numbers)


