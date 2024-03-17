function calculate() {
  const type = document.getElementById("type").value;
  const area = parseFloat(document.getElementById("area").value);

  let pricePerSquareMeter = 0;

  switch (type) {
    case "parquet":
      pricePerSquareMeter = 500;
      break;
    case "linoleum":
      pricePerSquareMeter = 200;
      break;
    case "carpet":
      pricePerSquareMeter = 300;
      break;
    default:
      break;
  }

  const totalPrice = pricePerSquareMeter * area;

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `Общая стоимость: ${totalPrice.toFixed(2)} тенге`;
}
