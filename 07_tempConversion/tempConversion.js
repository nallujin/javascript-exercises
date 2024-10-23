const convertToCelsius = function(num) {
  const formula = ((num-32)*(5/9));
  const rawAnswer = Number.isInteger(formula)
  if (rawAnswer) {
    return formula;
  } else {
    return Number(formula.toFixed(1));
  }
};

const convertToFahrenheit = function(num) {
  const formula = (num * (9 / 5) + 32);
  const rawAnswer = Number.isInteger(formula);
  if (rawAnswer) {
    return formula;
  } else {
    return Number(formula.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
