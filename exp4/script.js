function compareStrings() {
  const s1 = document.getElementById("s1").value.trim();
  const s2 = document.getElementById("s2").value.trim();
  const warn = document.getElementById("warn");
  const res = document.getElementById("res");

  if (!s1 && !s2) {
    warn.textContent = "⚠️ Please enter both strings.";
    warn.style.display = "block";
    res.hidden = true;
    return;
  }

  warn.style.display = "none";
  res.hidden = false;

  document.getElementById("len").textContent =
    s1.length === s2.length ? "Equal length" :
    s1.length > s2.length ? `"${s1}" is longer` : `"${s2}" is longer`;

  document.getElementById("loose").textContent = (s1 == s2);
  document.getElementById("strict").textContent = (s1 === s2);

  const cmp = s1.localeCompare(s2);
  document.getElementById("order").textContent =
    cmp === 0 ? "Same" : cmp < 0 ? `"${s1}" comes before "${s2}"` : `"${s1}" comes after "${s2}"`;
}

function clearAll() {
  ["s1", "s2"].forEach(id => document.getElementById(id).value = "");
  document.getElementById("warn").style.display = "none";
  document.getElementById("res").hidden = true;
}
