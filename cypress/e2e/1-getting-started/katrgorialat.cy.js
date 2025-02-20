// kategoriAlat.cy.js
describe('Kategori Alat Page Test', () => {
    const kategoriAlatUrl = 'http://localhost:3000/kategorialat'; // Ganti dengan URL yang sesuai

    it('should add a new category', () => {
        // Buka halaman kategori alat
        cy.visit(kategoriAlatUrl);

        // Klik tombol "Tambah Kategori Alat"
        cy.get('button').contains('Tambah Kategori Alat').click();

        // Isi form
        cy.get('input[name="nama"]').type('Kategori Alat Baru'); // Isi nama kategori
        cy.get('textarea[name="deskripsi"]').type('Deskripsi untuk kategori alat baru'); // Isi deskripsi kategori

        // Klik tombol "Simpan"
        cy.get('button').contains('Simpan').click();

        // Verifikasi bahwa kategori berhasil ditambahkan
        cy.contains('Kategori Alat Baru').should('be.visible'); // Memastikan nama kategori muncul di tabel
        cy.contains('Deskripsi untuk kategori alat baru').should('be.visible'); // Memastikan deskripsi muncul di tabel
    });
});