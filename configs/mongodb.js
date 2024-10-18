const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());



mongoose.connect('mongodb://duhig:duhig123@172.28.48.51:27017/inventory?authSource=inventory', {
  authMechanism: 'SCRAM-SHA-1',
 
})
.then(async () => {
  console.log('Database connected successfully!');
})
.catch((err) => {
  console.error('Database connection error:', err);
});
  


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const Item = require('./../models/Items');

// Create an item
app.post('/items', async (req, res) => {
  const newItem = new Item(req.body);
  try {
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all items
app.get('/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json(err);
  }
});
