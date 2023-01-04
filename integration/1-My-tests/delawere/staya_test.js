
describe('Cypress homework', function () {
    it('Проверка успешной авторизации', function () {
         cy.visit('https://staya.dog/');
         cy.get('.header-bottom__right--link').click();
         cy.get('.auth-form > form > [type="email"]').type("divanizzy.gnr@gmail.com");
         cy.get('.auth-form > form > [type="password"]').type('Fuckmozg0ffchik');
         cy.get('.auth-form__submit > .s-button__content').click();
         cy.contains('Мои заказы');
         })
     
})