function generate(type) {
  const n = parseInt(document.getElementById("num").value);
  const result = document.getElementById("result");
  const warn = document.getElementById("warn");
  const loopName = document.getElementById("loopName");

  result.innerHTML = "";
  warn.textContent = "";
  loopName.textContent = "";

  if (isNaN(n)) {
    warn.textContent = "⚠️ Please enter a number!";
    return;
  }

  let i = 1;

  if (type === "for") {
    loopName.textContent = "Using For Loop";
    for (i = 1; i <= 10; i++) {
      result.innerHTML += `<li>${n} × ${i} = ${n * i}</li>`;
    }
  } 
  else if (type === "while") {
    loopName.textContent = "Using While Loop";
    while (i <= 10) {
      result.innerHTML += `<li>${n} × ${i} = ${n * i}</li>`;
      i++;
    }
  } 
  else {
    loopName.textContent = "Using Do-While Loop";
    do {
      result.innerHTML += `<li>${n} × ${i} = ${n * i}</li>`;
      i++;
    } while (i <= 10);
  }
}
