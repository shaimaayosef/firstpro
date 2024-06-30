document.getElementById("clickMe").addEventListener('click',function () {
    document.getElementById('numList').innerText =""
    var num = document.getElementById("num").value;
    for(i=0;i<=num;i++){
        document.getElementById('numList').innerText +=i
    }; 
})

document.getElementById("fined").addEventListener('click',function () {
    var x= 0; //sum
    var i = 1; //base
    
    while(x < 10000){
        i++
        x=x+i*i
    }
    console.log(i)
})
document.getElementById("fined1").addEventListener('click',function () {
    var dice1=parseInt(Math.random()*6)+1
    var dice2=parseInt(Math.random()*6)+1
    while(dice1!=dice2){
    dice1=parseInt(Math.random()*6)+1
    dice2=parseInt(Math.random()*6)+1
    console.log('dice1= '+ dice1 +',dice2='+ dice2);
    }
})