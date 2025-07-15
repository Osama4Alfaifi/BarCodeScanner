const codeReader = new ZXing.BrowserMultiFormatContinuousReader();
let currentCode = '';

function startScanner() {
  document.getElementById("errorLog").textContent = "";
  const previewElem = document.getElementById('preview');

  codeReader
    .listVideoInputDevices()
    .then(videoInputDevices => {
      const rearCamera = videoInputDevices.find(device => device.label.toLowerCase().includes("back"))
                          || videoInputDevices[0];

      codeReader.decodeFromVideoDevice(rearCamera.deviceId, 'preview', (result, err) => {
        if (result) {
          currentCode = result.text;
          console.log("Scanned: " + currentCode);
          codeReader.reset();
          showDataForCode(currentCode);
        }
        if (err && !(err instanceof ZXing.NotFoundException)) {
          console.error("ZXing error:", err);
          document.getElementById("errorLog").textContent = err.message;
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
