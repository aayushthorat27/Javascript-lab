let arr = [];
let capacity = 0;

const sizeInput = document.getElementById("sizeInput");
const addInput = document.getElementById("addInput");
const checkIndex = document.getElementById("checkIndex");
const removeIndex = document.getElementById("removeIndex");

const sizeMsg = document.getElementById("sizeMsg");
const addMsg = document.getElementById("addMsg");
const checkMsg = document.getElementById("checkMsg");
const removeMsg = document.getElementById("removeMsg");
const arrayDisplay = document.getElementById("arrayDisplay");

// Set array size
document.getElementById("setSizeBtn").onclick = () => {
  const n = parseInt(sizeInput.value);
  if (isNaN(n) || n <= 0) return alert("Enter valid size");
  arr = [];
  capacity = n;
  sizeMsg.textContent = `Array size set to ${capacity}`;
  render();
};

// Add element
document.getElementById("addBtn").onclick = () => {
  if (capacity === 0) return alert("Set array size first!");
  if (arr.length >= capacity) return alert("Array full!");
  const val = addInput.value.trim();
  if (!val) return alert("Enter a value!");
  arr.push(val);
  addMsg.textContent = `Added ${val}`;
  addInput.value = "";
  render();
};

// Check element
document.getElementById("checkBtn").onclick = () => {
  const idx = parseInt(checkIndex.value);

  if (isNaN(idx) || idx < 0 || idx >= arr.length) {
    alert("Invalid index");
    return;
  }

  const element = arr[idx];

  
  const isArray =
    Array.isArray(element) ||
    (typeof element === "string" &&
     element.trim().startsWith("[") &&
     element.trim().endsWith("]"));

  checkMsg.textContent = isArray
    ? `Index ${idx}: Element is an array`
    : `Index ${idx}: Element is not an array`;
};


// Remove element
document.getElementById("removeBtn").onclick = () => {
  const idx = parseInt(removeIndex.value);
  if (isNaN(idx) || idx < 0 || idx >= arr.length) return alert("Invalid index");
  const removed = arr.splice(idx, 1);
  removeMsg.textContent = `Removed ${removed}`;
  render();
};

// Display array
function render() {
  arrayDisplay.textContent = `[ ${arr.join(", ")} ] (len = ${arr.length}/${capacity})`;
}
