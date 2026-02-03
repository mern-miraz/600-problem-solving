// Number 1 ---- Mile to Yard
function mileToYard(miles) {
  const yardsPerMile = 1760;
  return miles * yardsPerMile;
}
console.log(mileToYard(5));

// Number 2 ---- Kilowatt-hour to Kilocalorie (VALID conversion)
// 1 kilowatt-hour ≈ 860 kilocalories
function kilowattHourToKilocalorie(kwh) {
  const kilocaloriePerKwh = 860;
  return kwh * kilocaloriePerKwh;
}
console.log(kilowattHourToKilocalorie(5));

// Number 3 ---- Hour to Second
function hourToSecond(hours) {
  const secondsPerHour = 60 * 60;
  return hours * secondsPerHour;
}
console.log(hourToSecond(5));

// Number 4 ---- Centimeter to Meter
function centimeterToMeter(centimeters) {
  const centimetersPerMeter = 100;
  return centimeters / centimetersPerMeter;
}
console.log(centimeterToMeter(1500));

// Number 5 ---- Inch to Centimeter
function inchToCentimeter(inches) {
  const centimetersPerInch = 2.54;
  return inches * centimetersPerInch;
}
console.log(inchToCentimeter(5));

// Number 6 ---- Pound to Kilogram
function poundToKilogram(pounds) {
  const kilogramPerPound = 0.453592;
  return pounds * kilogramPerPound;
}
console.log(poundToKilogram(15));

// Number 7 ---- Yard to Meter
function yardToMeter(yard) {
  const meterPerYard = 0.9144;
  return yard * meterPerYard;
}
console.log(yardToMeter(20));
