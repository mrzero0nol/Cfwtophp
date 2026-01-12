# Panduan Deploy Toko Digital di cPanel (Node.js + MySQL)

Aplikasi ini adalah toko online produk digital (seperti akun premium, voucher, dll) yang menggunakan **Node.js** sebagai backend dan **MySQL** sebagai database.

## Persyaratan
- Hosting cPanel yang mendukung fitur **Setup Node.js App**.
- Akses ke **MySQL Database**.

---

## Langkah 1: Persiapan Database

1. Login ke cPanel.
2. Buka menu **MySQL® Databases**.
3. Buat database baru (misal: `usercpanel_toko`).
4. Buat user database baru (misal: `usercpanel_admin`) dan atur passwordnya.
5. Tambahkan user ke database dan centang **ALL PRIVILEGES**.
6. Buka menu **phpMyAdmin**.
7. Pilih database yang baru dibuat.
8. Klik tab **Import**, upload file `schema.sql` yang ada di folder project ini, lalu klik **Go**.
   - *Alternatif manual*: Klik tab **SQL**, copy isi `schema.sql` dan paste di kolom query, lalu klik **Go**.

---

## Langkah 2: Upload File

1. Buka **File Manager** di cPanel.
2. Buat folder baru (misal: `toko-app`) di luar `public_html` (agar file sistem aman) atau di dalam `public_html` jika ingin simpel.
3. Upload semua file berikut:
   - `server.js`
   - `db.js`
   - `template.html`
   - `package.json`
   - `.env.example`
   - `schema.sql` (opsional jika sudah diimport)
   - folder `node_modules` (JANGAN diupload, nanti kita install di server).

---

## Langkah 3: Setup Node.js App

1. Di cPanel, cari menu **Setup Node.js App**.
2. Klik **Create Application**.
3. Isi form berikut:
   - **Node.js Version**: Pilih versi **18.x** atau **20.x** (Disarankan versi terbaru yang LTS).
   - **Application Mode**: `Production`.
   - **Application Root**: Masukkan path folder tempat upload file tadi (misal: `toko-app`).
   - **Application URL**: Pilih domain/subdomain toko Anda.
   - **Application Startup File**: Ketik `server.js`.
4. Klik **Create**.
5. Setelah created, klik tombol **Run NPM Install** (tunggu hingga selesai/sukses).

---

## Langkah 4: Konfigurasi Environment (.env)

1. Kembali ke **File Manager**, masuk ke folder aplikasi (`toko-app`).
2. Cari file `.env.example`, rename menjadi `.env` (pastikan fitur *Show Hidden Files* di settings File Manager aktif agar file berawalan titik terlihat).
3. Edit file `.env` dan isi sesuai data Anda:

   ```ini
   PORT=3000

   # Database (Sesuai Langkah 1)
   DB_HOST=localhost
   DB_USER=usercpanel_admin
   DB_PASS=password_database_anda
   DB_NAME=usercpanel_toko

   # Password untuk Login Admin Panel (/admin di aplikasi tidak ada, akses via tombol di pojok kanan bawah web)
   ADMIN_PASSWORD=ganti_password_rahasia

   # Payment Gateway (Pakasir)
   PAKASIR_SLUG=slug_project_pakasir
   PAKASIR_API_KEY=api_key_pakasir
   ```
4. Simpan perubahan file `.env`.

---

## Langkah 5: Jalankan Aplikasi

1. Kembali ke menu **Setup Node.js App**.
2. Klik tombol **Restart Application**.
3. Buka URL domain Anda. Toko sudah siap digunakan!

---

## Cara Menggunakan Admin Panel

1. Buka website toko Anda.
2. Klik tombol **Settings** (ikon gerigi) melayang di pojok kanan bawah.
3. Masukkan password sesuai `ADMIN_PASSWORD` di `.env`.
4. Anda bisa menambah produk, stok, voucher, dan mengatur tampilan banner dari panel ini.

## Troubleshooting

- **Error Database Connection**: Pastikan user/pass/db name di `.env` benar dan user sudah diberi hak akses (All Privileges) di cPanel.
- **Gambar tidak muncul**: Pastikan URL gambar valid (gunakan imgur/postimg/dll).
- **Pembayaran Gagal**: Cek `PAKASIR_SLUG` dan `PAKASIR_API_KEY`, pastikan saldo Pakasir cukup (jika ada biaya admin).
