import { display, celsius} from "./konversi.js"; // import file konversi.js. file ini berisikan export biasa
console.log("BERLIN");
display(celsius);

import calculateBMI from './bmi.js'; // import dari file bmi yang berisikan export default
const determineObesity = (bmi) => {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      return "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
      return "Overweight";
    } else if (bmi >= 30) {
      return "Obese";
    }
  };  
const weight = 70;
const height = 1.75;
const bmi = calculateBMI(weight, height).toFixed(2);
const obesity = determineObesity(bmi);
console.log(`Your BMI is ${bmi}. You are ${obesity}.`);