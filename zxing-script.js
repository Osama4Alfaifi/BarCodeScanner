body {
  font-family: Arial, sans-serif;
  text-align: center;
  direction: rtl;
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
}

h1 {
  color: #2c3e50;
  margin-bottom: 20px;
}

.scanner-controls {
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

#reader {
  width: 100%;
  max-width: 400px;
  height: 300px;
  margin: 20px auto;
  border: 2px dashed #ccc;
  border-radius: 10px;
  overflow: hidden;
}

#reader video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.error-message {
  color: #e74c3c;
  margin: 10px 0;
  min-height: 20px;
}

button, select, input {
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ddd;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

button {
  background-color: #3498db;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #2980b9;
}

#galleryInput {
  display: none;
}

.search-container {
  margin: 20px 0;
}

#searchInput {
  width: 100%;
  max-width: 400px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

th, td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: center;
}

th {
  background-color: #3498db;
  color: white;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

.actions {
  display: flex;
  gap: 5px;
  justify-content: center;
}

.actions button {
  padding: 5px 10px;
  font-size: 14px;
}

@media (max-width: 600px) {
  .scanner-controls {
    flex-direction: column;
    align-items: center;
  }
  
  #reader {
    height: 250px;
  }
}