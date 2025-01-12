React Authentication App
Aplikasi autentikasi sederhana menggunakan React yang memungkinkan pengguna untuk mendaftar dan login. Aplikasi ini menggunakan React Router untuk navigasi antar halaman dan React Icons untuk ikon tampilan password.

Fitur
Halaman Login: Pengguna dapat login menggunakan email dan password yang telah terdaftar.
Halaman Register: Pengguna dapat mendaftar dengan memasukkan nama, email, password, dan konfirmasi password.
Toggle Password Visibility: Pengguna dapat melihat password saat memasukkan password menggunakan ikon mata.
Form Validations: Validasi untuk memastikan password dan konfirmasi password cocok, serta memastikan email yang digunakan belum terdaftar.
Prasyarat
Pastikan Anda sudah menginstal Node.js di sistem Anda. Anda bisa mengunduhnya di sini: Node.js.

Instalasi
Ikuti langkah-langkah berikut untuk memulai aplikasi ini:

1. Clone Repository
Clone repository ini ke komputer Anda:
git clone https://github.com/Mriskiali/CRUD-PWEB.git

2. Masuk ke Direktori Proyek
Masuk ke dalam direktori proyek yang baru saja di-clone:
cd CRUD-PWEB

3. Install Dependensi
Install semua dependensi yang diperlukan dengan npm:
npm i / npm install
npm i -g json-server // installasi json server
Ini akan menginstal semua dependensi yang diperlukan, termasuk react-router-dom dan react-icons.

4. Menjalankan Aplikasi
Setelah dependensi terinstal, Anda dapat menjalankan aplikasi menggunakan perintah berikut:
npm run dev // untuk menjalankan program 
json-server --watch db.json --port 5000 // untuk menjalankan dummy dari db servernya

Berikut adalah tech stack yang digunakan dalam program autentikasi React ini:

1. Frontend:
React
React Router
React Icons

2. Styling:
CSS (Cascading Style Sheets)
Flexbox

4. Backend (Simulasi - Data Dummy dengan Fetch)
JSON Server (Opsional - menggunakan fetch)

5. Tools Pengembangan:
Node.js & npm (Node Package Manager)
Vite

7. Build dan Deployment:
npm (Node Package Manager)
