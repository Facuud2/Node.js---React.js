// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
const items = [
      {id:0, name: 'Consultoría en Tecnologías de la Información', price: 750, image: 'https://www.bernanetwork.com/img/20221212_63970bcb1264e.png'},
      { id: 1, name: 'Desarrollo de API RESTful', price: 500, image: 'https://blog.back4app.com/wp-content/uploads/2023/04/rest-cover.webp'},
      { id: 2, name: 'Optimización SEO Avanzado', price: 300, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMq5mXVNTcIWIkSOtht64GgVxKeBWqFxK5ZQ&amp;s ' },
      { id: 3, name: 'Mantenimiento de Base de Datos', price: 200, image: 'https://placehold.co/200 ' },
      { id: 4, name: 'Diseño de Sitio Web Ecommerce', price: 800, image: 'https://placehold.co/200 ' },
      { id: 5, name: 'Integración de Pagos Online', price: 400, image: 'https://placehold.co/200 ' },
      { id: 6, name: 'Consultoría en Ciberseguridad', price: 600, image: 'https://placehold.co/200 ' },
      { id: 7, name: 'Desarrollo de Aplicaciones Móviles', price: 1000, image: 'https://placehold.co/200 ' },
      { id: 8, name: 'Automatización de Procesos RPA', price: 700, image: 'https://placehold.co/200 ' }
  ];

// Rutas

app.get('/api/items', (req, res) => {
  res.json(items);
});

// Agregar un nuevo elemento
app.post('/api/items', (req, res) => {
  const newItem = req.body;
  newItem.id = items.length + 1;
  items.push(newItem);
  res.status(201).json(newItem);
});

// Eliminar un elemento por ID
app.delete('/api/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  items = items.filter(item => item.id !== itemId);
  res.status(200).json({ message: 'Elemento eliminado' });
});


// Endpoint PUT para actualizar un elemento por ID
app.put('/api/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const updatedItem = req.body;

  const index = items.findIndex(item => item.id === itemId);

  if (index === -1) {
    return res.status(404).json({ message: 'Elemento no encontrado' });
  }

  items[index] = { ...items[index], ...updatedItem };
  res.status(200).json(items[index]);
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});