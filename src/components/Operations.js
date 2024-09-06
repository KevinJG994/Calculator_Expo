//TODO - Al presionar 0 debe escribir 0 para poder hacer por ejemplo 0.5
export function setNum(item, num, setItem) {
  if (item == "0") {
    setItem(num);
  } else {
    setItem(item + num);
  }
}

export function calculate(item, setItem) {
  let resultado;

  if (item.includes("+")) {
    const [num1, num2] = item.split("+");
    resultado = parseFloat(num1) + parseFloat(num2);
    setItem(resultado.toFixed(2));
  }

  if (item.includes("-")) {
    const [num1, num2] = item.split("-");
    resultado = parseFloat(num1) - parseFloat(num2);
    setItem(resultado.toFixed(2));
  }

  if (item.includes("x")) {
    const [num1, num2] = item.split("x");
    resultado = parseFloat(num1) * parseFloat(num2);
    setItem(resultado.toFixed(2));
  }

  if (item.includes("/")) {
    const [num1, num2] = item.split("/");

    if (num2 == "0") {
      setItem("Syntax error!");
    } else 
        resultado = parseFloat(num1) / parseFloat(num2);
        setItem(resultado.toFixed(2));
  }

  //TODO - Al presionar % debe salir el resultado
  if (item.includes("%")) {
    const [num1] = item.split("%");
    resultado = parseFloat(num1) / 100;
    setItem(resultado.toFixed(2));
  }
}
