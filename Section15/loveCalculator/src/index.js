function calcular() {
  var n = Math.random();
  n = n * 100;
  n = Math.floor(n);
  n = n + "%";
  console.log(n);

  return n;
}

function result() {
  let outp = document.querySelector("#output");
  let p = document.createElement("p");
  let texto = document.createTextNode(calcular());
  outp.appendChild(p);
  p.appendChild(texto);
}
