const { I } = inject();

module.exports = {
    // локаторы
    fields: {
        username: '#username',
        password: '#password'
    },
    submitButton: locate('button').withText('Войти'),
    errors: {
        password: '.password-field + p',
        credentials: '//*[@class="message-wrapper mb-4"]'
    },

    // методы
    visit () {
        I.amOnPage('https://try.vikunja.io/login')
        I.see('Войти')
    },

    fillUsername (username) {
        I.fillField(this.fields.username, username)
    },
    fillPassword (password) {
        I.fillField(this.fields.password, password)
    },
    submitForm () {
        I.click(this.submitButton)
    },
    async getPasswordError () {
        return await I.grabTextFrom(this.errors.password)
    },
    async getCredentialsError () {
        return await I.grabTextFrom(this.errors.credentials)
    },
    login ({ username, password }) {
        this.visit()
        this.fillUsername(username)
        this.fillPassword(password)
        this.submitForm()
    }
}
