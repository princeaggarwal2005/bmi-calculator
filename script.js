window.onload = () => {
    const button = document.querySelector('#btn');
    button.addEventListener('click', calcBMI);
};

function calcBMI() {
    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if (!height || isNaN(height) || height <= 0) {
        result.innerHTML = "<p>Please provide a valid height in cm.</p>";
        return;
    } 
    if (!weight || isNaN(weight) || weight <= 0) {
        result.innerHTML = "<p>Please provide a valid weight in kg.</p>";
        return;
    }

    const bmi = ((weight * 10000) / (height * height)).toFixed(2);
    let category = '';

    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }

    result.innerHTML = `<p>Your BMI is <strong>${bmi}</strong>: ${category}</p>`;
}
