const codeReader = new ZXing.BrowserBarcodeReader();
const videoElement = document.getElementById('video');
let currentCode = '';

function enableEdit() {
  document.getElementById('dataEntry').classList.remove('hidden');
  document.getElementById('editButtons').classList.add('hidden');
  document.getElementById('savedData').classList.add('hidden');
}

function saveData() {
  const name = document.getElementById('nameInput').value;
  const price = document.getElementById('priceInput').value;
  localStorage.setItem(currentCode, JSON.stringify({ name, price }));
  alert("تم الحفظ");
  document.getElementById('nameInput').value = '';
  document.getElementById('priceInput').value = '';
  document.getElementById('dataEntry').classList.add('hidden');
  updateProductList();
}

function deleteData() {
  localStorage.removeItem(currentCode);
  alert("تم الحذف");
  document.getElementById('output').classList.add('hidden');
  updateProductList();
}

function updateProductList() {
  const tbody = document.getElementById('productTableBody');
  tbody.innerHTML = '';
  for (let i = 0; i < localStorage.length; i++) {
    const code = localStorage.key(i);
    if (code === "HTML5_QRCODE_DATA") continue;
    try {
      const { name, price } = JSON.parse(localStorage.getItem(code));
      const row = document.createElement('tr');
      row.innerHTML = `<td>${code}</td><td>${name}</td><td>${price}</td>`;
      tbody.appendChild(row);
    } catch (err) {
      continue;
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  updateProductList();

  codeReader.decodeFromVideoDevice(null, videoElement, (result, err) => {
    if (result) {
      currentCode = result.text;
      document.getElementById('codeOutput').textContent = currentCode;
      document.getElementById('output').classList.remove('hidden');
      document.getElementById('backToScanButton').classList.remove('hidden');

      const saved = localStorage.getItem(currentCode);
      if (saved) {
        const data = JSON.parse(saved);
        document.getElementById('savedName').textContent = data.name;
        document.getElementById('savedPrice').textContent = data.price;
        document.getElementById('nameInput').value = data.name;
        document.getElementById('priceInput').value = data.price;
        document.getElementById('savedData').classList.remove('hidden');
        document.getElementById('editButtons').classList.remove('hidden');
        document.getElementById('deleteButton').classList.remove('hidden');
        document.getElementById('dataEntry').classList.add('hidden');
      } else {
        document.getElementById('savedData').classList.add('hidden');
        document.getElementById('editButtons').classList.add('hidden');
        document.getElementById('deleteButton').classList.add('hidden');
        document.getElementById('nameInput').value = '';
        document.getElementById('priceInput').value = '';
        document.getElementById('dataEntry').classList.remove('hidden');
      }
    }
  });
});
