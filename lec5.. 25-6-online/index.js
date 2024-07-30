

document.getElementById("max").addEventListener('click',function(){
    var num1= Number(document.getElementById("num1").value);
    var num2= Number(document.getElementById("num2").value);
    if(num1>num2){
        document.getElementById("result").innerHTML = num1;
    }else{
        document.getElementById("result").innerHTML = num2;
    }
})

document.getElementById("max1").addEventListener('click',function(){
    var nump1= Number(document.getElementById("n1").value);
    var nump2= Number(document.getElementById("n2").value);
    var nump3= Number(document.getElementById("n3").value);
    if(nump1>nump3 && nump1>nump2){
        document.getElementById("result1").innerHTML = nump1;
    }else{
        if(nump2>nump3){
            document.getElementById("result1").innerHTML = nump2;
        }else{
            document.getElementById("result1").innerHTML = nump3;
        }
    }
})

// var num1=Number(prompt('enter 1st number:'))
// var num2=Number(prompt('enter 2nd number:'))
// var num3=Number(prompt('enter 3rd number:'))


// if(num1>num2 && num1>num3){
//   console.log('your max is '+ num1);
// }else{
// if(num2>num3){
// console.log('your max is '+ num2);
// }else{
//  console.log('your max is '+ num3);
// }
// }

document.getElementById("check").addEventListener('click',function(){
    var num= Number(document.getElementById("num").value);
    if(num%5==0 && num%11==0){
        document.getElementById("devisable").innerHTML = "divisible by 5 and 11";
    }else{
        document.getElementById("devisable").innerHTML = "not divisible by 5 and 11";
    }
})

document.getElementById("get").addEventListener('click',function(){
    var number1= Number(document.getElementById("n-1").value);
    var number2= Number(document.getElementById("n-2").value);
    var operator= document.getElementById("op").value;

    if(operator == '+'){
        document.getElementById("the result").innerHTML = number1+number2;
    }else{
        if(operator == '-'){
            document.getElementById("the result").innerHTML = number1-number2;
        }else{
            if(operator == '*'){
                document.getElementById("the result").innerHTML = number1*number2;
            }else{
                if(operator == '/'){
                    document.getElementById("the result").innerHTML = number1/number2;
                }
            }
        }
    }})
