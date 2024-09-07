let resultado;

export function setNum(item, num, setItem) {
  if (item == "") {
    setItem(num);
  } else {
    setItem(item + num);
  }
}

export function calculate(item, setItem, setResult) {
  if (item.includes("+")) {
    const [num1, num2] = item.split("+");
    resultado = parseFloat(num1) + parseFloat(num2);
    setResult(resultado);
  }

  if (item.includes("-")) {
    const [num1, num2] = item.split("-");
    resultado = parseFloat(num1) - parseFloat(num2);
    setResult(resultado);
  }

  if (item.includes("x")) {
    const [num1, num2] = item.split("x");
    resultado = parseFloat(num1) * parseFloat(num2);
    setResult(resultado);
  }

  if (item.includes("/")) {
    const [num1, num2] = item.split("/");

    if (num2 == "0") {
      setItem("Syntax error!");
    } else resultado = parseFloat(num1) / parseFloat(num2);
    setResult(resultado.toFixed(2));
  }
}

export function calculatePercent(item, setResult) {
  const [num1] = item.split("%");
  resultado = parseFloat(num1) / 100;
  setResult(resultado.toFixed(2));
}
