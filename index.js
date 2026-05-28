const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { initDb } = require('./db');

const supplierRoutes = require('./routes/suppliers');
const analysisRoutes = require('./routes/analysis');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

// Main Routes
app.use('/api/suppliers', supplierRoutes);
app.use('/api/analysis', analysisRoutes);

app.get('/', (req, res) => {
    res.json({ message: "Supplier Risk Analyzer Node Backend Running" });
});

// Start Server after DB init
initDb().then(() => {
    app.listen(PORT, '0.0.0.0', () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}).catch(err => {
    console.error("Failed to initialize database:", err);
});
