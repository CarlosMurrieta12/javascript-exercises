const convertToCelsius = function(fDegree) {
  let cDegree = 0;
  cDegree = (fDegree - 32) * 5/9;
  let rounded = Math.round(cDegree * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function(cDegree) {
  let fDegree = 0;
  fDegree = (cDegree * 9/5 + 32);
  let rounded = Math.round(fDegree * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
