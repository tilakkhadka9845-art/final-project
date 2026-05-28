const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'suppliers.db');
const db = new sqlite3.Database(dbPath);

const initDb = () => {
    return new Promise((resolve, reject) => {
        db.serialize(() => {
            // Suppliers table
            db.run(`
                CREATE TABLE IF NOT EXISTS suppliers (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT NOT NULL,
                    country TEXT NOT NULL,
                    industry TEXT NOT NULL,
                    notes TEXT,
                    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                )
            `);

            // Risk Analyses table
            db.run(`
                CREATE TABLE IF NOT EXISTS risk_analyses (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    supplier_id INTEGER NOT NULL,
                    geopolitical INTEGER,
                    financial INTEGER,
                    lead_time INTEGER,
                    quality INTEGER,
                    overall REAL,
                    risk_level TEXT,
                    summary TEXT,
                    key_risks TEXT, -- JSON string
                    recommendations TEXT, -- JSON string
                    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                    FOREIGN KEY (supplier_id) REFERENCES suppliers (id)
                )
            `, (err) => {
                if (err) reject(err);
                else resolve();
            });
        });
    });
};

module.exports = { db, initDb };
