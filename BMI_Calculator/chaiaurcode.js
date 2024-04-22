const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt((document.querySelector('#height')).value);
  const weight = parseInt((document.querySelector('#weight')).value);
  const result = document.querySelector('#results');

  if (height === '' || height <= 0 || isNaN(height)) {
    result.innerHTML = 'Please enter valid height';
  } else if (weight === '' || weight <= 0 || isNaN(weight)) {
    result.innerHTML = 'Please enter valid weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let addText = '';
    if(bmi < 18.6){
      addText = `Having ${bmi} is considered as Under Weight`;
    }else if(bmi >= 18.6 || bmi <= 24.9){
      addText = `Having ${bmi} is considered as of a Normal Range`;
    }else{
      addText = 'Your are Overweight';
    }
    result.innerHTML = `<span>${bmi}${addText}</span>`;
  }
});
