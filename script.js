function formatJSON() {
  const input = document.getElementById("jsonInput").value;
  const output = document.getElementById("jsonOutput");

  try {
    output.textContent = JSON.stringify(JSON.parse(input), null, 2);
  } catch {
    output.textContent = "Invalid JSON.";
  }
}

function encodeBase64() {
  const input = document.getElementById("base64Input").value;
  document.getElementById("base64Output").textContent =
    btoa(unescape(encodeURIComponent(input)));
}

function decodeBase64() {
  const input = document.getElementById("base64Input").value;
  const output = document.getElementById("base64Output");

  try {
    output.textContent = decodeURIComponent(escape(atob(input)));
  } catch {
    output.textContent = "Invalid Base64.";
  }
}

function generateUUID() {
  document.getElementById("uuidOutput").textContent = crypto.randomUUID();
}

function encodeURL() {
  const input = document.getElementById("urlInput").value;
  document.getElementById("urlOutput").textContent = encodeURIComponent(input);
}

function decodeURL() {
  const input = document.getElementById("urlInput").value;

  try {
    document.getElementById("urlOutput").textContent = decodeURIComponent(input);
  } catch {
    document.getElementById("urlOutput").textContent = "Invalid encoded URL.";
  }
}
