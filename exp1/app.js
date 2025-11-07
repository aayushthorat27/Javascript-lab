function calcTriangle() {
  let a = +document.getElementById('a').value;
  let b = +document.getElementById('b').value;
  let c = +document.getElementById('c').value;
  let result = document.getElementById('triangleResult');

  if (a <= 0 || b <= 0 || c <= 0) return result.textContent = "Enter valid sides!";
  if (a + b <= c || a + c <= b || b + c <= a) return result.textContent = "Invalid triangle!";
  
  let s = (a + b + c) / 2;
  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  result.textContent = `Area = ${area.toFixed(2)}`;
}

function calcRectangle() {
  let l = +document.getElementById('length').value;
  let w = +document.getElementById('width').value;
  let result = document.getElementById('rectangleResult');

  if (l <= 0 || w <= 0) return result.textContent = "Enter valid dimensions!";
  result.textContent = `Area = ${(l * w).toFixed(2)}`;
}

function calcCircle() {
  let r = +document.getElementById('radius').value;
  let result = document.getElementById('circleResult');

  if (r <= 0) return result.textContent = "Enter valid radius!";
  result.textContent = `Area = ${(Math.PI * r * r).toFixed(2)}`;
}
