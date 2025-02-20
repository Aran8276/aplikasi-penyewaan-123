// daftar.cy.ts
describe('Sign In Page Test', () => {
    const signinUrl = 'http://localhost:3000/sigin';
  
    it('should fill the sign in form and click the "Masuk" link', () => {
      // Buka halaman sign in
      cy.visit(signinUrl);
  
      // Isi field email dengan "admin@email.com"
      cy.get('input[name="email"]').type('admin@email.com'); // Sesuaikan selector dengan struktur HTML Anda
  
      // Isi field password dengan "1234567890"
      cy.get('input[name="password"]').type('1234567890'); // Sesuaikan selector dengan struktur HTML Anda
  
      // Verifikasi bahwa nilai telah diisi dengan benar
      cy.get('input[name="email"]').should('have.value', 'admin@email.com');
      cy.get('input[name="password"]').should('have.value', '1234567890');
  
      // Klik link "Masuk"
      cy.contains('a', 'Masuk').click(); // Sesuaikan selector dengan struktur HTML Anda
  
      // Opsional: Verifikasi bahwa pengguna dialihkan ke halaman lain setelah klik
      cy.url().should('not.include', '/signin'); // Misalnya, pastikan URL tidak lagi berada di halaman sign in

// Isi field email dengan "admin@email.com"
cy.get('input[name="email"]').type('admin@email.com'); // Sesuaikan selector dengan struktur HTML Anda
  
// Isi field password dengan "1234567890"
cy.get('input[name="password"]').type('1234567890'); // Sesuaikan selector dengan struktur HTML Anda

// Temukan tombol "Masuk" dan klik
     cy.get('button[type="submit"]').click(); // Sesuaikan selector dengan struktur HTML Anda

    });
  });