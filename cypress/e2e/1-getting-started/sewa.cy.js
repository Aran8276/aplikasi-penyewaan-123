// sewa.test.js
describe('Penyewaan Page Test', () => {
    const penyewaanUrl = 'http://localhost:3000/penyewaan';
  
    it('should navigate to the penyewaan page and click the "Tambah Penyewaan" button', () => {
        // Buka halaman penyewaan
        cy.visit(penyewaanUrl);
  
        // Verifikasi bahwa URL benar (opsional)
        cy.url().should('include', '/penyewaan');
  
        // Temukan tombol "Tambah Penyewaan" dan klik
        cy.get('button').contains('Tambah Penyewaan').click(); // Sesuaikan selector dengan struktur HTML Anda

        // Isi form
        cy.get('input[name="pelanggan"]').type('John Doe'); // Ganti dengan selector yang sesuai
        cy.get('input[name="alat"]').type('Kamera'); // Ganti dengan selector yang sesuai
        cy.get('input[name="tanggal"]').type('2023-10-01'); // Ganti dengan selector yang sesuai
        cy.get('input[name="durasi"]').type('3'); // Ganti dengan selector yang sesuai
        cy.get('textarea[name="detail"]').type('Detail penyewaan kamera'); // Ganti dengan selector yang sesuai

        // Klik tombol "Simpan"
        cy.get('button').contains('Simpan').click(); // Sesuaikan selector dengan struktur HTML Anda

        // Verifikasi bahwa penyewaan berhasil ditambahkan
        cy.contains('Pelanggan').should('be.visible'); // Memastikan tabel muncul
        cy.contains('John Doe').should('be.visible'); // Memastikan data yang ditambahkan muncul di tabel
        cy.contains('Kamera').should('be.visible'); // Memastikan data yang ditambahkan muncul di tabel
        cy.contains('2023-10-01').should('be.visible'); // Memastikan data yang ditambahkan muncul di tabel
        cy.contains('3').should('be.visible'); // Memastikan data yang ditambahkan muncul di tabel
        cy.contains('Detail penyewaan kamera').should('be.visible'); // Memastikan data yang ditambahkan muncul di tabel
    });
});