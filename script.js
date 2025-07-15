let currentCode = '';

function onScanSuccess(decodedText, decodedResult) {
  currentCode = decodedText;
  document.getElementById('codeOutput').textContent = currentCode;
  document.getElementById('output').classList.remove('hidden');

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

  html5QrcodeScanner.clear();
}

function enableEdit() {
  document.getElementById('dataEntry').classList.remove('hidden');
  document.getElementById('editButtons').classList.add('hidden');
  document.getElementById('savedData').classList.add('hidden');
}

function saveData() {
  const name = document.getElementById('nameInput').value;
  const price = document.getElementById('priceInput').value;
  localStorage.setItem(currentCode, JSON.stringify({ name, price }));
  alert("Saved!");
  document.getElementById('nameInput').value = '';
  document.getElementById('priceInput').value = '';
  document.getElementById('dataEntry').classList.add('hidden');
  updateProductList();
}

function deleteData() {
  localStorage.removeItem(currentCode);
  alert("Deleted!");
  document.getElementById('output').classList.add('hidden');
  updateProductList();
}

function updateProductList() {
  const productList = document.getElementById('productList');
  productList.innerHTML = '';
  for (let i = 0; i < localStorage.length; i++) {
    const code = localStorage.key(i);
    const { name, price } = JSON.parse(localStorage.getItem(code));
    const item = document.createElement('li');
    item.textContent = `Code: ${code} | Name: ${name} | Price: ${price}`;
    productList.appendChild(item);
  }
}

document.addEventListener('DOMContentLoaded', updateProductList);

const html5QrcodeScanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess);
