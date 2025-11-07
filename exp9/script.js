document.getElementById("studentForm").addEventListener("submit", e => {
  e.preventDefault();
  document.querySelectorAll(".error").forEach(el => el.textContent = "");

  const name = document.getElementById("name").value.trim();
  const address = document.getElementById("address").value.trim();
  const city = document.getElementById("city").value.trim();
  const state = document.getElementById("state").value;
  const gender = document.getElementById("gender").value;
  const mobile = document.getElementById("mobile").value.trim();
  const email = document.getElementById("email").value.trim();

  let ok = true;

  if (!/^[A-Za-z\s]+$/.test(name)) {
    document.getElementById("nameError").textContent = "Invalid name";
    ok = false;
  }
  if (!address) {
    document.getElementById("addressError").textContent = "Required";
    ok = false;
  }
  if (!/^[A-Za-z\s]+$/.test(city)) {
    document.getElementById("cityError").textContent = "Invalid city";
    ok = false;
  }
  if (!state) {
    document.getElementById("stateError").textContent = "Select state";
    ok = false;
  }
  if (!gender) {
    document.getElementById("genderError").textContent = "Select gender";
    ok = false;
  }
  if (!/^[6-9][0-9]{9}$/.test(mobile)) {
    document.getElementById("mobileError").textContent = "Invalid mobile";
    ok = false;
  }
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/.test(email)) {
    document.getElementById("emailError").textContent = "Invalid email";
    ok = false;
  }

  if (ok) {
    window.location.href = "success.html";
  }
});
