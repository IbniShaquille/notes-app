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
   ```bash
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

### Tech Stack

**Frontend:**
- **Next.js:** Framework React untuk membuat aplikasi web dengan fitur server-side rendering dan static site generation.
- **JavaScript:** Bahasa pemrograman yang digunakan untuk pengembangan frontend.
- **Chakra-UI:** Library komponen UI untuk React yang memudahkan pembuatan antarmuka pengguna yang responsif dan dapat diakses.

**Backend:**
- **PostgreSQL:** Database relasional yang digunakan untuk menyimpan data catatan.
- **Rest API:** Antarmuka pemrograman aplikasi yang digunakan untuk komunikasi antara frontend dan backend.

### API Documentation

- **Endpoint: Get All Notes**
  - **URL:** /api/notes
  - **Method:** GET
  - **Description:** Mengambil semua catatan.

- **Endpoint: Get Note by ID**
  - **URL:** /api/notes/:id
  - **Method:** GET
  - **Description:** Mengambil catatan berdasarkan ID.

- **Endpoint: Create Note**
  - **URL:** /api/notes
  - **Method:** POST
  - **Description:** Menambahkan catatan baru.

- **Endpoint: Update Note**
  - **URL:** /api/notes/:id
  - **Method:** PUT
  - **Description:** Mengubah catatan berdasarkan ID.

- **Endpoint: Delete Note**
  - **URL:** /api/notes/:id
  - **Method:** DELETE
  - **Description:** Menghapus catatan berdasarkan ID.

