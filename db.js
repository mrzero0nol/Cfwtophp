const mysql = require('mysql2/promise');
require('dotenv').config();

// Buat connection pool agar efisien
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    database: process.env.DB_NAME || 'test',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Fungsi untuk mengambil data (GET) - Meniru perilaku KV Storage
async function dbGet(key, options = {}) {
    try {
        const [rows] = await pool.execute('SELECT value FROM kv_store WHERE key_name = ?', [key]);
        if (rows.length === 0) return null;

        const val = rows[0].value;
        if (options.type === 'json') {
            try {
                return JSON.parse(val);
            } catch (e) {
                return null;
            }
        }
        return val;
    } catch (err) {
        console.error(`DB Get Error (${key}):`, err.message);
        return null;
    }
}

// Fungsi untuk menyimpan data (PUT) - Insert atau Update
async function dbPut(key, value) {
    try {
        const valStr = typeof value === 'object' ? JSON.stringify(value) : value;
        // Menggunakan ON DUPLICATE KEY UPDATE agar seperti behaviour KV (overwrite)
        await pool.execute(
            'INSERT INTO kv_store (key_name, value) VALUES (?, ?) ON DUPLICATE KEY UPDATE value = VALUES(value)',
            [key, valStr]
        );
        return true;
    } catch (err) {
        console.error(`DB Put Error (${key}):`, err.message);
        return false;
    }
}

// Fungsi untuk menghapus data (DELETE)
async function dbDelete(key) {
    try {
        await pool.execute('DELETE FROM kv_store WHERE key_name = ?', [key]);
        return true;
    } catch (err) {
        console.error(`DB Delete Error (${key}):`, err.message);
        return false;
    }
}

// Test koneksi saat start
(async () => {
    try {
        const connection = await pool.getConnection();
        console.log('Database connected successfully!');
        connection.release();
    } catch (err) {
        console.error('Database connection failed:', err.message);
        console.error('TIP: Pastikan variabel lingkungan (Environment Variables) DB_HOST, DB_USER, DB_PASS, DB_NAME sudah diatur dengan benar di cPanel atau file .env.');
    }
})();

module.exports = {
    pool,
    dbGet,
    dbPut,
    dbDelete
};
