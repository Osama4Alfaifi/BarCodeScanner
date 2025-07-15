const codeReader = new ZXing.BrowserMultiFormatContinuousReader();
let currentCode = '';

function startScanner() {
  document.getElementById("errorLog").textContent = "";
  const previewElem = document.getElementById('preview');

  ZXing.BrowserMultiFormatReader.listVideoInputDevices()
    .then(videoInputDevices => {
      const device = videoInputDevices.find(d => d.label.toLowerCase().includes("back")) || videoInputDevices[0];

      return codeReader.decodeFromVideoDevice(device.deviceId, previewElem, (result, error) => {
        if (result) {
          currentCode = result.text;
          codeReader.reset();
          showDataForCode(currentCode);
        }
        if (error && !(error instanceof ZXing.NotFoundException)) {
          console.error("Decode error", error);
          document.getElementById("errorLog").textContent = error.message;
        }
      });
    })
    .catch(err => {
      console.error("Camera access error:", err);
      document.getElementById("errorLog").textContent = "Camera access failed: " + err.message;
    });
}

function showDataForCode(code) {
  document.getElementById('codeOutput').textContent = code;
  document.getElementById('output').classList.remove('hidden');
  const saved = localStorage.getItem(code);
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
}

function saveData() {
  const name = document.getElementById('nameInput').value;
  const price = document.getElementById('priceInput').value;
  localStorage.setItem(currentCode, JSON.stringify({ name, price }));
  alert("Saved successfully!");
  document.getElementById('nameInput').value = '';
  document.getElementById('priceInput').value = '';
  document.getElementById('dataEntry').classList.add('hidden');
}
