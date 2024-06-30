document.getElementById("clickResult").addEventListener('click',function calculateSum() {
    var number1 = Number(document.getElementById('number1-1').value);
    var number2 = Number(document.getElementById('number2-1').value);
    var sum = number1 + number2;
    document.getElementById('result').innerText = 'Sum: ' + sum;
})

document.getElementById("clickAverage").addEventListener('click',function calculateAverage() {
    var num1 = Number(document.getElementById('number1-2').value);
    var num2 = Number(document.getElementById('number2-2').value);
    var num3 = Number(document.getElementById('number3-2').value);
    var average = (num1 + num2 + num3) / 3;
    document.getElementById('averageResult').innerText = 'Average: ' + average;
})

document.getElementById("clickFlyTime").addEventListener('click',function calculateFlyingTime() {
    var distance = Number(document.getElementById('distance').value);
    var speed = Number(document.getElementById('speed').value);
    if(speed <= 0) {
        document.getElementById('flyingTimeResult').innerText = 'Invalid speed. Please enter a positive number.';
        return;
    }
    var flyingTime = distance / speed;
    var hours = Math.floor(flyingTime);
    var minutes = Math.round((flyingTime - hours) * 60);
    document.getElementById('flyingTimeResult').innerText = 'Flying Time: ' + hours + ' hour(s) and ' + minutes + ' minute(s)';
})

document.getElementById("clickBmiResult").addEventListener('click',function calculateBMI() {
    var weight = Number(document.getElementById('weight').value);
    var height = Number(document.getElementById('height').value);
    var bmi = weight / (height * height);
    document.getElementById('bmiResult').innerText = 'BMI: ' + bmi.toFixed(2);
})

document.getElementById("clickLength").addEventListener('click',function convertLength() {
    var lengthCm = Number(document.getElementById('lengthCm').value);
    var lengthInMeters = lengthCm / 100;
    var lengthInKilometers = lengthCm / 100000;
    document.getElementById('lengthInMeters').innerText = 'Meters: ' + lengthInMeters;
    document.getElementById('lengthInKilometers').innerText = 'Kilometers: ' + lengthInKilometers.toFixed(2);
})

document.getElementById("clickData").addEventListener('click',function convertData() {
    var dataBytes = Number(document.getElementById('dataBytes').value);
    var dataInBits = dataBytes * 8;
    var dataInGigabytes = dataBytes / (1024 * 1024 * 1024);
    document.getElementById('dataInBits').innerText = 'Bits: ' + dataInBits.toLocaleString() + ' bits';
    document.getElementById('dataInGigabytes').innerText = 'Gigabytes: ' + dataInGigabytes.toFixed(3) + ' GB';
})

document.getElementById("clickUpload").addEventListener('click',function calculateUploadTime() {
    var uploadSpeed = Number(document.getElementById('uploadSpeed').value);
    var fileSize = Number(document.getElementById('fileSize').value);
    var uploadSpeedMBps = uploadSpeed / 8;
    var uploadTimeInSeconds = fileSize / uploadSpeedMBps;
    var minutes = Math.floor(uploadTimeInSeconds / 60);
    var seconds = Math.round(uploadTimeInSeconds % 60);
    document.getElementById('uploadTimeResult').innerText = 'Upload Time: ' + minutes + ' minute(s) and ' + seconds + ' second(s)';
})

document.getElementById("clickCircle").addEventListener('click',function calculateCircleProperties() {
    var radius = Number(document.getElementById('radius').value);
    var area = Math.PI * radius * radius;
    var circumference = 2 * Math.PI * radius;
    document.getElementById('circleArea').innerText = 'Area: ' + area.toFixed(2) + ' square units';
    document.getElementById('circleCircumference').innerText = 'Circumference: ' + circumference.toFixed(2) + ' units';
})

document.getElementById("clickOriginal").addEventListener('click',function swapValues() {
    var number1 = Number(document.getElementById('number1-3').value);
    var number2 = Number(document.getElementById('number2-3').value);
    document.getElementById('originalValues').innerText = 'Original Values:' + number1 + ',' + number2;
    
    var temp = number1;
    number1 = number2;
    number2 = temp;
    
    document.getElementById('swappedValues').innerText = 'Swapped Values: ' + number1 + ', ' + number2;
})

document.getElementById("clickBigger").addEventListener('click',function printBiggerNumber() {
    var number1 = Number(document.getElementById('number1').value);
    var number2 = Number(document.getElementById('number2').value);
    var result;
    
    if (number1 > number2) {
        result = number1;
    } else if (number2 > number1) {
        result = number2;
    } else {
        result = "Both numbers are equal.";
    }
    document.getElementById('biggerNumberResult').innerText = 'Bigger Number: ' + result;
})

document.getElementById("clickNumber").addEventListener('click',function checkNumber() {
    var number = Number(document.getElementById('number1-4').value);
    var resultText = 'Number is: ';
    
    if (number > 0) {
        resultText += 'Positive';
    } else if (number < 0) {
        resultText += 'Negative';
    } else {
        resultText += 'Zero';
    }
    
    document.getElementById('numberResult').innerText = resultText;
})

document.getElementById("clickDivisibility").addEventListener('click',function checkDivisibility() {
    var number = Number(document.getElementById('number1-5').value);
    var resultText = 'Result: ';
    
    if (number % 5 === 0 && number % 11 === 0) {
        resultText += 'The number is divisible by both 5 and 11.';
    } else {
        resultText += 'The number is not divisible by both 5 and 11.';
    }
    
    document.getElementById('divisibilityResult').innerText = resultText;
})

document.getElementById("clickEvenOddResult").addEventListener('click',function checkEvenOdd() {
    var number = Number(document.getElementById('number1-6').value);
    var resultText = 'Number is: ';
    
    if (number % 2 === 0) {
        resultText += 'Even';
    } else {
        resultText += 'Odd';
    }
    
    document.getElementById('evenOddResult').innerText = resultText;
})

document.getElementById("clickanRge").addEventListener('click',function checkWithinRange() {
    var rangeStart = Number(document.getElementById('rangeStart').value);
    var rangeEnd = Number(document.getElementById('rangeEnd').value);
    var numberToCheck = Number(document.getElementById('numberToCheck').value);
    var resultText = 'Result: ';
    
    if (numberToCheck >= rangeStart && numberToCheck <= rangeEnd) {
        resultText += 'The number is within the range.';
    } else {
        resultText += 'The number is not within the range.';
    }
    
    document.getElementById('rangeResult').innerText = resultText;
})

document.getElementById("clickBmiResult1").addEventListener('click',function calculateBMI() {
    var height = Number(document.getElementById('height1').value);
    var weight = Number(document.getElementById('weight1').value);
    var bmi = weight / (height * height);
    var resultText = 'BMI Result: ';
    
    if (bmi < 18.5) {
        resultText += 'Underweight (BMI: ' + bmi.toFixed(2) + ')';
    } else if (bmi >= 18.5 && bmi <= 25) {
        resultText += 'Fit (BMI: ' + bmi.toFixed(2) + ')';
    } else if (bmi > 25) {
        resultText += 'Overweight (BMI: ' + bmi.toFixed(2) + ')';
    }
    
    document.getElementById('bmiResult1').innerText = resultText;
})

document.getElementById("clickFinalAmount").addEventListener('click',function calculateFinalAmount() {
    var purchaseAmount = Number(document.getElementById('purchaseAmount').value);
    var discountRate = 0.05;
    var taxRate = 0.10;
    var discountedAmount;
    var finalAmount;
    var resultText = 'Final Amount: ';

    if (purchaseAmount > 1000) {
        discountedAmount = purchaseAmount - (purchaseAmount * discountRate);
    } else {
        discountedAmount = purchaseAmount;
    }

    finalAmount = discountedAmount + (discountedAmount * taxRate);

    resultText += finalAmount.toFixed(2) + ' L.E.';
    
    document.getElementById('finalAmount').innerText = resultText;
})

document.getElementById("clickDogYearsResult").addEventListener('click',function calculateDogYears() {
    var humanYears = Number(document.getElementById('humanYears').value);
    var dogYears;
    var resultText = "Dog's Age in Dog Years: ";

    if (humanYears < 0) {
        resultText += 'Age must be a positive number.';
    } else if (humanYears <= 2) {
        dogYears = humanYears * 10.5;
        resultText += dogYears;
    } else {
        dogYears = 21 + ((humanYears - 2) * 4);
        resultText += dogYears;
    }

    document.getElementById('dogYearsResult').innerText = resultText;
})

document.getElementById("calculationResult").addEventListener('click',function performCalculation() {
    var number1 = Number(document.getElementById('number1-7').value);
    var number2 = Number(document.getElementById('number2-7').value);
    var operation = document.getElementById('operation').value.trim();
    var result;
    var resultText = 'Result: ';

    switch (operation) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            if (number2 === 0) {
                resultText += 'Cannot divide by zero.';
                document.getElementById('calculationResult').innerText = resultText;
                return;
            }
            result = number1 / number2;
            break;
        default:
            resultText += 'Invalid operation.';
            document.getElementById('calculationResult').innerText = resultText;
            return;
    }

    resultText += result;
    document.getElementById('calculationResult').innerText = resultText;
})