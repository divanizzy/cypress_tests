
describe('Cypress homework', function () {
    it('Проверка логики восстановления пароля', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#forgotEmailButton').click();
         cy.get('#mailForgot').type('divanizzy.gnr@gmail.com');
         cy.get('#restoreEmailButton').click();
         cy.contains('Успешно отправили пароль на e-mail');
         cy.get('#exitMessageButton > .exitIcon');
     })
     it('Позитивный кейс авторизации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click()
        cy.contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon');
    })
    it('Негативный кейс авторизации (неправильный пароль)', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio2');
        cy.get('#loginButton').click()
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
    })
    it('Негативный кейс авторизации (неправильный логин)', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikovvvvv.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click()
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');

    })
})
