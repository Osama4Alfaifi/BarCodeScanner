const codeReader = new ZXing.BrowserBarcodeReader();
let currentCode = '';

function startScanner() {
  console.log("Scanner button pressed"); // Debug log
  document.getElementById("errorLog").textContent = "";

  codeReader.decodeOnceFromVideoDevice(undefined, 'preview')
    .then(result => {
      currentCode = result.text;
      document.getElementById('codeOutput').textContent = currentCode;
      document.getElementById('output').classList.remove('hidden');
      const saved = localStorage.getItem(currentCode);
      if (saved) {
        const data = JSON.parse(saved);
        document.getElementById('savedName').textContent = data.name;
        document.getElementById('savedPrice').textContent = data.price;
        document.getElementById('savedData').classList.remove('hidden');
        document.getElementById('dataEntry').classList.add('hidden');
      } else {
        document.getElementById('savedData').classList.add('hidden');
        document.getElementById('dataEntry').classList.remove('hidden');
      }
    })
    .catch(err => {
      console.error("Scanner error:", err);
      document.getElementById("errorLog").textContent = "Camera access failed: " + err;
    });
}

function saveData() {
  const name = document.getElementById('nameInput').value;
  const price = document.getElementById('priceInput').value;
  localStorage.setItem(currentCode, JSON.stringify({ name, price }));
  alert("Data saved! You can scan again to see it.");
  document.getElementById('nameInput').value = '';
  document.getElementById('priceInput').value = '';
  document.getElementById('dataEntry').classList.add('hidden');
}
