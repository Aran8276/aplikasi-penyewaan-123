// pelanggandata.cy.js
describe('Pelanggan Data Page Test', () => {
    const pelangganUrl = 'http://localhost:3000/pelanggandata'; // Ganti dengan URL yang sesuai

    it('should add a new customer', () => {
        // Buka halaman pelanggan
        cy.visit(pelangganUrl);

        // Klik tombol "Tambah Pelanggan"
        cy.get('button').contains('Tambah Pelanggan').click();

        // Isi form
        cy.get('input[name="nama"]').type('Jane Doe'); // Isi nama
        cy.get('input[name="alamat"]').type('Jl. Contoh No. 123'); // Isi alamat
        cy.get('input[name="telepon"]').type('08123456789'); // Isi telepon

        // Klik tombol "Simpan"
        cy.get('button').contains('Simpan').click();

        // Verifikasi bahwa pelanggan berhasil ditambahkan
        cy.contains('Jane Doe').should('be.visible'); // Memastikan nama muncul di tabel
        cy.contains('Jl. Contoh No. 123').should('be.visible'); // Memastikan alamat muncul di tabel
        cy.contains('08123456789').should('be.visible'); // Memastikan telepon muncul di tabel
    });
});