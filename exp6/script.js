let arr = [];
let capacity = 0;

const sizeInput = document.getElementById("sizeInput");
const addInput = document.getElementById("addInput");
const checkInput = document.getElementById("checkInput");
const removeInput = document.getElementById("removeInput");

const arrayDisplay = document.getElementById("arrayDisplay");
const sizeMsg = document.getElementById("sizeMsg");
const addMsg = document.getElementById("addMsg");
const checkMsg = document.getElementById("checkMsg");
const removeMsg = document.getElementById("removeMsg");

document.getElementById("setSizeBtn").onclick = () => {
  const n = parseInt(sizeInput.value);
  if (isNaN(n) || n <= 0) {
    sizeMsg.textContent = "Enter valid array size!";
    return;
  }
  arr = [];
  capacity = n;
  sizeMsg.textContent = ` Array size set to ${capacity}`;
  render();
};

// Display current array size & capacity
document.getElementById("displaySizeBtn").onclick = () => {
  if (capacity === 0) return alert("Set array size first!");
  alert(`📏 Array length: ${arr.length} / Capacity: ${capacity}`);
};

document.getElementById("addBtn").onclick = () => {
  if (capacity === 0) return alert("Set size first!");
  if (arr.length >= capacity) return alert("Array full!");
  const val = addInput.value.trim();
  if (!val) return alert("Enter a value!");
  arr.push(val);
  addMsg.textContent = `Added "${val}"`;
  addInput.value = "";
  render();
};

document.getElementById("checkBtn").onclick = () => {
  const val = checkInput.value.trim();
  if (!val) return alert("Enter value to check!");
  checkMsg.textContent = arr.includes(val)
    ? ` "${val}" is present`
    : ` "${val}" not found`;
};

document.getElementById("removeBtn").onclick = () => {
  const val = removeInput.value.trim();
  if (!val) return alert("Enter value to remove!");
  const index = arr.indexOf(val);
  if (index === -1) return alert("Value not found!");
  arr.splice(index, 1);
  removeMsg.textContent = `Removed "${val}"`;
  render();
};

document.getElementById("emptyBtn").onclick = () => {
  arr = [];
  removeMsg.textContent = "🧹 Array emptied!";
  render();
};

function render() {
  arrayDisplay.textContent = `[ ${arr.join(", ")} ] (len=${arr.length}, cap=${capacity})`;
}
