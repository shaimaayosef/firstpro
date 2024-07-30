// console.log("omar")
// var x=5
// var y=6

// var z=x=y
// console.log(z);

document.getElementById("sum1").addEventListener('click',function(){
    var num1= Number(document.getElementById("num1-1").value);
    var num2= Number(document.getElementById("num2-1").value);
    var sum = num1 + num2;
    document.getElementById("result1").innerHTML = sum;
})

document.getElementById("sum2").addEventListener('click',function(){
    var num1= Number(document.getElementById("num1-2").value);
    var num2= Number(document.getElementById("num2-2").value);
    var num3= Number(document.getElementById("num3-2").value);
    var avrage = (num1 + num2+ num3)/3;
    document.getElementById("result2").innerHTML = avrage;
})

var x = Number(prompt('enter x'))
var y = Number(prompt('enter '))

