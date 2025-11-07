// Reverse String
function reverseStr() {
  let s = document.getElementById("revIn").value;
  document.getElementById("revOut").innerText = s.split("").reverse().join("");
}

// Palindrome Check
function checkPal() {
  let s = document.getElementById("palIn").value.toLowerCase().replace(/ /g, "");
  let rev = s.split("").reverse().join("");
  document.getElementById("palOut").innerText = 
    (s === rev) ? "✅ It is a Palindrome" : "❌ Not a Palindrome";
}

// Replace First
function replaceFirst() {
  let str = document.getElementById("firstStr").value;
  let oldText = document.getElementById("firstOld").value;
  let newText = document.getElementById("firstNew").value;
  document.getElementById("firstOut").innerText = str.replace(oldText, newText);
}

// Replace All
function replaceAll() {
  let str = document.getElementById("allStr").value;
  let oldText = document.getElementById("allOld").value;
  let newText = document.getElementById("allNew").value;
  document.getElementById("allOut").innerText = str.split(oldText).join(newText);
}
