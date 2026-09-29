# PopIce ERP

Starter ERP toko Pop Ice & jajanan menggunakan HTML, CSS, JavaScript ES Modules, Firebase Authentication, dan Cloud Firestore.

## Fitur
- Login Firebase Authentication
- Dashboard
- Produk CRUD
- POS / Kasir
- Pengurangan stok otomatis setelah transaksi
- Stok masuk
- Pembelian
- Pengeluaran
- Ringkasan keuangan
- Laporan dasar
- Responsive mobile

## 1. Buat Firebase
1. Buka Firebase Console.
2. Buat project baru.
3. Tambahkan Web App.
4. Copy konfigurasi Firebase ke `js/firebase-config.js`.
5. Authentication -> Sign-in method -> aktifkan Email/Password.
6. Authentication -> Users -> buat akun admin.
7. Firestore Database -> Create database.

## 2. Aturan Firestore
Untuk pengembangan awal, gunakan isi `firestore.rules` yang disertakan. Untuk production, sebaiknya rules diperketat berdasarkan role.

## 3. Menjalankan lokal
Karena browser membatasi module dari file://, gunakan local server.

Jika Python tersedia:
`python -m http.server 5500`

Kemudian buka:
`http://localhost:5500/login.html`

Alternatif VS Code: install Live Server lalu Open with Live Server.

## 4. Firebase Hosting
Install Firebase CLI:
`npm install -g firebase-tools`

Login:
`firebase login`

Di folder project:
`firebase init`

Pilih Hosting + Firestore jika diminta, lalu:
`firebase deploy`

## Struktur Firestore
- users
- products
- categories
- suppliers
- customers
- sales
- purchases
- stock_movements
- expenses

## Catatan
Versi ini adalah MVP. Untuk production, tambahkan:
- role/permission berbasis custom claims
- audit log
- validasi transaksi server-side / Cloud Functions
- backup
- nomor invoice yang atomic
- snapshot HPP pada sale_items
- recipe/BOM Pop Ice
- hutang supplier
- pelanggan/piutang
- barcode
- cetak struk
- laporan bulanan yang lebih lengkap
