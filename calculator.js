function multiply() {
    const num1 = document.getElementById('number1').value;
    const num2 = document.getElementById('number2').value;
    const result = document.getElementById('result');

    if (num1 === '' || num2 === '') {
        result.textContent = 'please enter both number'
    }
    else{
        const finalResult = num1 * num2 ;
        result.textContent = finalResult;
    }
}


function plus() {
    const num3 = parseFloat(document.getElementById('number3').value.trim());
    const num4 = parseFloat(document.getElementById('number4').value.trim());
    const result2 = document.getElementById('result2');

    if (isNaN(num3) || isNaN(num4)) {
        result2.textContent = 'Please enter both numbers';
    } else {
        const finalResult = num3 + num4;
        result2.textContent = finalResult;
    }
}

function minus() {
    const num5 = parseFloat(document.getElementsByClassName('number5')[0].value.trim());
    const num6 = parseFloat(document.getElementsByClassName('number6')[0].value.trim());
    const result3 = document.getElementsByClassName('result3')[0];

    if (isNaN(num5) || isNaN(num6)) {
        result3.innerText = 'Please enter both numbers';
    } else {
        const finalResult = num5 - num6;
    result3.innerText = finalResult;
    }
}

function divide() {
    const num7 = parseFloat(document.getElementById('number7').value);
    const num8 = parseFloat(document.getElementById('number8').value);
    const result4 = document.getElementById('result4');

    if (num7 ===''|| num8=== '' ) {
        result4.textContent = 'Please enter both number';
    } else {
        const finalResult = num7 / num8;
        result4.textContent = finalResult;
    }
}
