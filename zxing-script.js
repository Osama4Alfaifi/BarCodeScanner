body {
  font-family: Arial, sans-serif;
  text-align: center;
  direction: rtl;
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
  background-color: #f5f5f5;
}

h1 {
  color: #2c3e50;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #3498db;
}

.scanner-controls {
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  background-color: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

#reader {
  width: 100%;
  max-width: 400px;
  height: 300px;
  margin: 20px auto;
  border: 2px dashed #ccc;
  border-radius: 10px;
  overflow: hidden;
  background-color: black;
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
  font-weight: bold;
}

button, select {
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
  border: none;
}

button:hover {
  background-color: #2980b9;
}

select {
  background-color: white;
  min-width: 200px;
}

.gallery-btn {
  display: inline-block;
  padding: 10px 15px;
  background-color: #2ecc71;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  border: none;
  font-size: 16px;
}

.gallery-btn:hover {
  background-color: #27ae60;
}

#galleryInput {
  display: none;
}

.search-container {
  margin: 20px 0;
  background-color: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

#searchInput {
  width: 100%;
  max-width: 400px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
}

.table-container {
  overflow-x: auto;
  margin-top: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  padding: 10px;
}

table {
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;
}

th, td {
  padding: 12px 15px;
  text-align: center;
  border: 1px solid #ddd;
}

th {
  background-color: #3498db;
  color: white;
  position: sticky;
  top: 0;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

tr:hover {
  background-color: #f1f1f1;
}

.actions {
  display: flex;
  gap: 8px;
  justify-content: center;
}

.actions button {
  padding: 6px 12px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  min-width: 80px;
}

.actions button:first-child {
  background-color: #f39c12;
}

.actions button:first-child:hover {
  background-color: #e67e22;
}

.actions button:last-child {
  background-color: #e74c3c;
}

.actions button:last-child:hover {
  background-color: #c0392b;
}

@media (max-width: 768px) {
  .scanner-controls {
    flex-direction: column;
    align-items: stretch;
  }
  
  .scanner-controls > * {
    margin: 5px 0;
    width: 100%;
  }
  
  #reader {
    height: 250px;
  }
  
  table {
    min-width: 100%;
  }
}