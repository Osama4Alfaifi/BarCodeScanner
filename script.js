let currentCode = '';

function onScanSuccess(decodedText, decodedResult) {
  currentCode = decodedText;
  document.getElementById('codeOutput').textContent = currentCode;
  document.getElementById('output').classList.remove('hidden');

  const saved = localStorage.getItem(currentCode);
  if (saved) {
    const data = JSON.parse(saved);
    document.getElementById('nameInput').value = data.name;
    document.getElementById('priceInput').value = data.price;
    document.getElementById('savedData').classList.add('hidden');
    document.getElementById('dataEntry').classList.remove('hidden');
  } else {
    document.getElementById('nameInput').value = '';
    document.getElementById('priceInput').value = '';
    document.getElementById('savedData').classList.add('hidden');
    document.getElementById('dataEntry').classList.remove('hidden');
  }

  html5QrcodeScanner.clear();
}

function saveData() {
  const name = document.getElementById('nameInput').value;
  const price = document.getElementById('priceInput').value;
  localStorage.setItem(currentCode, JSON.stringify({ name, price }));
  alert("Saved!");
  document.getElementById('nameInput').value = '';
  document.getElementById('priceInput').value = '';
  document.getElementById('dataEntry').classList.add('hidden');
}

const html5QrcodeScanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess);
