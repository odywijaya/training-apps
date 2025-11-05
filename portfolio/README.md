# Portfolio (template)

Folder ini berisi template halaman portofolio statis yang memuat data dari `data.json`.

Cara pakai cepat:

1. Buka `portfolio/data.json` dan ganti isinya dengan data dari profil LinkedIn Anda (atau tempel manual ringkasan, pengalaman, pendidikan, dll.).
2. Jalankan server HTTP statis di folder `portfolio` dan buka `http://localhost:8000` atau port yang Anda pilih.

Contoh menjalankan (PowerShell / Windows):

```powershell
# dengan Python 3 (jika tersedia):
cd .\portfolio
python -m http.server 8000

# atau dengan Node (jika terpasang):
cd .\portfolio
npx serve -l 8000
```

Kenapa tidak otomatis mengambil dari LinkedIn?

- LinkedIn membatasi akses API (OAuth) untuk profil; mengambil data otomatis memerlukan otorisasi dan seringkali pengaturan server dengan kredensial API. Untuk keamanan dan kesederhanaan, disediakan `data.json` yang dapat Anda isi secara manual.

Jika Anda ingin, kirimkan URL profil publik LinkedIn Anda atau ekspor data (mis. salin teks pengalaman) lalu saya bantu mengonversi dan memasukkannya ke `data.json`.

Lanjutan yang bisa saya bantu:

- Auto-konversi dari URL publik LinkedIn (memerlukan Anda menempelkan data atau memberikan akses),
- Menambahkan foto, sosial, atau desain yang Anda suka,
- Mengintegrasikan ke folder `app/public` yang sudah ada.
