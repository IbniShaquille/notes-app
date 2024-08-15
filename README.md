# Notes App

### Panduan Instalasi

#### Prasyarat
Sebelum memulai instalasi, pastikan Anda telah menginstal:
- Node.js (disarankan versi LTS)
- PostgreSQL
- Git

#### Langkah-langkah Instalasi

1. **Clone Repository**
   Pertama, clone repository Notes App dari GitHub:
   ```bash
   git clone https://github.com/IbniShaquille/notes-app.git
   cd notes-app
   ```
2. **Install Dependencies**
   Instal semua dependencies yang diperlukan untuk aplikasi:
   ```bash
   npm install
   ```
3. **Konfigurasi Database PostgreSQL**

   - Buat database baru di PostgreSQL. Anda dapat melakukannya melalui command line atau menggunakan tool GUI seperti pgAdmin.
     ```sql
     CREATE DATABASE notes_app;
     ```

   - Buat tabel untuk menyimpan catatan:
     ```sql
     CREATE TABLE notes (
       id SERIAL PRIMARY KEY,
       title VARCHAR(255) NOT NULL,
       body TEXT,
       createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
     );
     ```
4. **Konfigurasi Environment Variable**
   Buat file `.env` di root direktori proyek dan tambahkan konfigurasi berikut:
   ```json
     DATABASE_URL=postgresql://<username>:<password>@localhost:5432/notes_app
     user=<username>
     password=<password>
     host=localhost
     port=5432
     database=notes_app
   ```
   Gantilah `<username>` dan `<password>` dengan kredensial PostgreSQL Anda.
5. **Jalankan Aplikasi**
   Jalankan aplikasi secara lokal:
   ```bash
   npm run dev
   ```
