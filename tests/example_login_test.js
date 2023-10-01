const config = require('../config/config.js')
const expect = require('chai').expect;

Feature('Авторизация');

Before(({ loginPage }) => {
    loginPage.visit()
})

Scenario('Успешная авторизация',  async ({ I, loginPage }) => {
    loginPage.login(config.credentials.user)
    I.seeCurrentUrlEquals('https://try.vikunja.io/')
});

Scenario('Нельзя авторизоваться без пароля', async ({ I, loginPage }) => {
    loginPage.login({
        username: config.credentials.user.username,
        password: ''
    })
    await expect(await loginPage.getPasswordError()).to.be.equal('Введите пароль.')
    I.dontSeeCurrentUrlEquals('https://try.vikunja.io')
})

Scenario('Нельзя авторизоваться с неверными данными', async ({ I, loginPage }) => {
    loginPage.login({
        username: config.credentials.user.username,
        password: 'randomString'
    })
    await expect(await loginPage.getCredentialsError()).to.be.equal('Неверное имя пользователя или пароль.')
    I.dontSeeCurrentUrlEquals('https://try.vikunja.io')
})
