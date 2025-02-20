describe('Scroll Test', () => {
  it('should navigate to Alat page and scroll', () => {
    // Kunjungi halaman utama
    cy.visit('http://localhost:3000/');

    // Klik tombol "Alat" di navbar
    cy.get('nav').within(() => {
      cy.contains('Alat').click(); // Ganti 'Alat' dengan teks yang sesuai di tombol
    });

    // Pastikan sudah berada di halaman Alat
    cy.url().should('include', '/alat'); // Sesuaikan dengan URL halaman Alat

    // Scroll ke bawah halaman Alat
    cy.scrollTo('bottom', { duration: 2000 }); // Scroll ke bawah dalam 2 detik

    // Tunggu sebentar untuk melihat efek scroll
    cy.wait(1000);

    // Scroll ke atas halaman Alat
    cy.scrollTo('top', { duration: 2000 }); // Scroll ke atas dalam 2 detik

    // Scroll ke posisi tertentu (misalnya, 500px dari atas)
    cy.scrollTo(0, 500, { duration: 2000 }); // Scroll ke posisi 500px dari atas
  });
});