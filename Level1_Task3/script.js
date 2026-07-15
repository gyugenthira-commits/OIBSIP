function convertTemperature() {
  const temperature = parseFloat(document.getElementById("temperature").value);

  const from = document.getElementById("from").value;

  const to = document.getElementById("to").value;

  const output = document.getElementById("output");

  if (isNaN(temperature)) {
    output.textContent = "Please enter a valid number.";

    return;
  }

  if (from === to) {
    output.textContent = `${temperature.toFixed(2)}° ${getUnit(to)}`;

    return;
  }

  let result;

  // Celsius conversions
  if (from === "Celsius" && to === "Fahrenheit") {
    result = (temperature * 9) / 5 + 32;
  } else if (from === "Celsius" && to === "Kelvin") {
    result = temperature + 273.15;
  }

  // Fahrenheit conversions
  else if (from === "Fahrenheit" && to === "Celsius") {
    result = ((temperature - 32) * 5) / 9;
  } else if (from === "Fahrenheit" && to === "Kelvin") {
    result = ((temperature - 32) * 5) / 9 + 273.15;
  }

  // Kelvin conversions
  else if (from === "Kelvin" && to === "Celsius") {
    result = temperature - 273.15;
  } else if (from === "Kelvin" && to === "Fahrenheit") {
    result = ((temperature - 273.15) * 9) / 5 + 32;
  }

  output.textContent = `${result.toFixed(2)}° ${getUnit(to)}`;
}

function getUnit(scale) {
  if (scale === "Celsius") return "C";

  if (scale === "Fahrenheit") return "F";

  return "K";
}
