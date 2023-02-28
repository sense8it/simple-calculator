document.querySelector("#result").onclick = function () {
  const inp1 = +document.querySelector("#inp1").value;
  const sel = document.querySelector("#sel").value;
  const inp2 = +document.querySelector("#inp2").value;
  let result;

  if (sel === "add") {
    result = inp1 + inp2;
  }
  if (sel === "sub") {
    result = inp1 - inp2;
  }
  if (sel === "mul") {
    result = inp1 * inp2;
  }
  if (sel === "div") {
    result = inp1 / inp2;
  }
  
  document.querySelector('#resultOutput').innerHTML = result;
};


