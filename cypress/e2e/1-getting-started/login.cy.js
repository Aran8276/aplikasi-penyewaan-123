// login.cy.ts
describe('Login Form Test', () => {
    const loginUrl = 'http://localhost:3000/login';
  
    it('should fill the login form and click the login button', () => {
      // Buka halaman login
      cy.visit(loginUrl);
  
      // Isi field email dengan "admin@email.com"
      cy.get('input[name="email"]').type('admin@email.com'); // Sesuaikan selector dengan struktur HTML Anda
  
      // Isi field password dengan "1234567890"
      cy.get('input[name="password"]').type('1234567890'); // Sesuaikan selector dengan struktur HTML Anda
  
      // Verifikasi bahwa nilai telah diisi dengan benar
      cy.get('input[name="email"]').should('have.value', 'admin@email.com');
      cy.get('input[name="password"]').should('have.value', '1234567890');
  
      // Temukan tombol "Masuk" dan klik
      cy.get('button[type="submit"]').click(); // Sesuaikan selector dengan struktur HTML Anda
  
     
    });
  });