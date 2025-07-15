body {
  font-family: 'Arial', sans-serif;
  background-color: #f8f9fa;
  margin: 0;
  padding: 20px;
  direction: rtl;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 2px solid #3498db;
}

.scanner-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-bottom: 20px;
  background-color: #f1f8fe;
  padding: 15px;
  border-radius: 8px;
}

select, button, .gallery-btn {
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ddd;
  background-color: white;
}

button, .gallery-btn {
  background-color: #3498db;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover, .gallery-btn:hover {
  background-color: #2980b9;
}

.gallery-btn {
  background-color: #2ecc71;
}

.gallery-btn:hover {
  background-color: #27ae60;
}

#galleryInput {
  display: none;
}

#reader {
  width: 100%;
  max-width: 400px;
  height: 300px;
  margin: 20px auto;
  border: 2px dashed #ccc;
  border-radius: 10px;
  overflow: hidden;
  background-color: #000;
}

#reader video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.error-message {
  color: #e74c3c;
  text-align: center;
  margin: 10px 0;
  font-weight: bold;
  min-height: 24px;
}

.search-container {
  margin: 20px 0;
  text-align: center;
}

#searchInput {
  width: 100%;
  max-width: 500px;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
}

.table-wrapper {
  overflow-x: auto;
  margin-top: 30px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
}

table {
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;
}

th, td {
  padding: 12px 15px;
  text-align: center;
  border: 1px solid #e0e0e0;
}

th {
  background-color: #3498db;
  color: white;
  position: sticky;
  top: 0;
  font-weight: bold;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

tr:hover {
  background-color: #f1f8fe;
}

.actions {
  display: flex;
  gap: 8px;
  justify-content: center;
}

.actions button {
  padding: 8px 12px;
  font-size: 14px;
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
  
  select, button, .gallery-btn {
    width: 100%;
  }
  
  #reader {
    height: 250px;
  }
  
  th, td {
    padding: 8px 10px;
    font-size: 14px;
  }
  
  .actions {
    flex-direction: column;
    gap: 5px;
  }
  
  .actions button {
    width: 100%;
  }
}