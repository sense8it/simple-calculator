document.querySelector("#result").onclick = function () {
  const inp1 = +document.querySelector("#inp1").value;
  const sel = document.querySelector("#sel").value;
  const inp2 = +document.querySelector("#inp2").value;
  let result;

  switch (sel) {
    case "add":
      result = inp1 + inp2;
      break;
    case "sub":
      result = inp1 - inp2;
      break;
    case "mul":
      result = inp1 * inp2;
      break;
    case "div":
      result = inp1 / inp2;
      break;
  }

  result = result !== result ? "ERROR: invalid argument" : result;
  document.querySelector("#resultOutput").innerHTML = result;
  console.log(result);
};
