# Panduan Deploy Toko Digital di cPanel (Node.js + MySQL)

Aplikasi ini adalah toko online produk digital (seperti akun premium, voucher, dll) yang menggunakan **Node.js** sebagai backend dan **MySQL** sebagai database.

## Persyaratan
- Hosting cPanel yang mendukung fitur **Setup Node.js App**.
- Akses ke **MySQL Database**.

---

## Langkah 1: Persiapan Domain / Subdomain

Sebelum menginstall aplikasi, pastikan Anda sudah menyiapkan domain atau subdomain yang akan digunakan.

1. Login ke cPanel.
2. Jika ingin menggunakan **Domain Utama** (misal: `tokosaya.com`), pastikan domain sudah terhubung ke hosting.
3. Jika ingin menggunakan **Subdomain** (misal: `app.tokosaya.com`):
   - Buka menu **Domains** (atau **Subdomains** di cPanel versi lama).
   - Klik **Create A New Domain**.
   - Masukkan nama subdomain (contoh: `app.tokosaya.com`).
   - Pastikan *Document Root* tidak menimpa folder website lain (defaultnya akan membuat folder baru, biarkan saja).
   - Klik **Submit**.

*Domain/Subdomain ini nanti akan muncul di pilihan saat kita men-setup Node.js.*

---

## Langkah 2: Persiapan Database

1. Buka menu **MySQL® Databases** di cPanel.
2. Buat database baru (misal: `usercpanel_toko`).
3. Buat user database baru (misal: `usercpanel_admin`) dan atur passwordnya (Simpan password ini!).
4. Tambahkan user ke database tersebut dan centang **ALL PRIVILEGES**.
5. Buka menu **phpMyAdmin**.
6. Pilih database yang baru dibuat di sidebar kiri.
7. Klik tab **Import**, upload file `schema.sql` yang ada di folder project ini, lalu klik **Go**.
   - *Alternatif manual*: Klik tab **SQL**, copy isi file `schema.sql` dan paste di kolom query, lalu klik **Go**.

---

## Langkah 3: Upload File

1. Buka **File Manager** di cPanel.
2. Buat folder baru khusus untuk aplikasi ini (misal: `toko-app`).
   - *Saran: Buat folder ini di "Home Directory" (sejajar dengan public_html), jangan di dalam public_html agar file source code aman.*
3. Upload semua file berikut ke dalam folder `toko-app`:
   - `server.js`
   - `db.js`
   - `template.html`
   - `package.json`
   - `.env.example`
   - `schema.sql` (opsional jika sudah diimport)

*Catatan: Anda tidak perlu mengupload folder `node_modules` karena folder ini akan dibuat otomatis oleh server pada langkah berikutnya.*

---

## Langkah 4: Setup Node.js App

1. Di cPanel, cari menu **Setup Node.js App**.
2. Klik **Create Application**.
3. Isi form konfigurasi:
   - **Node.js Version**: Pilih versi **18.x** atau **20.x** (Disarankan versi terbaru yang LTS).
   - **Application Mode**: Pilih `Production`.
   - **Application Root**: Masukkan nama folder tempat upload file tadi (contoh: `toko-app`).
   - **Application URL**: **PENTING!** Pilih domain atau subdomain yang sudah Anda siapkan di Langkah 1 tadi.
   - **Application Startup File**: Ketik `server.js`.
4. Klik tombol **Create** di pojok kanan atas.
5. Setelah aplikasi terbuat, klik tombol **Run NPM Install** (tunggu hingga proses selesai/sukses). Tombol ini akan mendownload library yang dibutuhkan dan membuat folder `node_modules`.

---

## Langkah 5: Konfigurasi Environment (.env)

1. Kembali ke **File Manager**, masuk ke folder aplikasi (`toko-app`).
2. Cari file `.env.example`. Klik kanan -> **Rename** menjadi `.env`.
   - *Catatan: Jika file tidak terlihat, klik tombol "Settings" di pojok kanan atas File Manager dan centang "Show Hidden Files (dotfiles)".*
3. Klik kanan file `.env` -> **Edit**. Isi sesuai data Anda:

   ```ini
   PORT=3000

   # Database (Sesuai Langkah 2)
   DB_HOST=localhost
   DB_USER=usercpanel_admin
   DB_PASS=password_database_anda
   DB_NAME=usercpanel_toko

   # Password Admin (Untuk akses menu admin di website)
   ADMIN_PASSWORD=ganti_password_rahasia

   # Payment Gateway (Pakasir)
   PAKASIR_SLUG=slug_project_pakasir
   PAKASIR_API_KEY=api_key_pakasir
   ```
4. Klik **Save Changes**.

---

## Langkah 6: Jalankan Aplikasi

1. Kembali ke menu **Setup Node.js App** di cPanel.
2. Klik tombol **Restart Application**.
3. Buka URL domain/subdomain Anda di browser. Toko sudah siap digunakan!

---

## Cara Menggunakan Admin Panel

1. Buka website toko Anda.
2. Klik tombol **Settings** (ikon gerigi) yang melayang di pojok kanan bawah layar.
3. Masukkan password sesuai `ADMIN_PASSWORD` yang Anda atur di file `.env`.
4. Dari panel ini Anda bisa:
   - Menambah/Edit Produk.
   - Mengatur Stok.
   - Membuat Voucher Diskon.
   - Mengganti Banner dan Nama Toko.

## Troubleshooting

- **Error Database Connection**: Pastikan username, password, dan nama database di file `.env` sudah benar. Pastikan user database sudah diberi hak akses (All Privileges).
- **Gambar tidak muncul**: Pastikan URL gambar yang Anda masukkan valid (gunakan layanan hosting gambar seperti imgur atau postimg).
- **Pembayaran Gagal**: Periksa kembali `PAKASIR_SLUG` dan `PAKASIR_API_KEY` di `.env`.
