const config = require('../config/config.js')
// const expect = require('chai').expect;

Feature('Работа с задачами')

Before(({ loginPage }) => {
    loginPage.login(config.credentials.user)
})

Scenario('Создание новой задачи', ({ I, mainPage, addNewTaskFormElement }) => {
    mainPage.visit()

    const timestamp = Date.now()
    addNewTaskFormElement.createTask(`ТестовыйТестТестович ${timestamp}`)
    I.see(`ТестовыйТестТестович ${timestamp}`)
})

Scenario('Отметить задачу выполненной', ({ I, mainPage, addNewTaskFormElement }) => {
    mainPage.visit()

    I.see(`ТестовыйТестТестович`)
    addNewTaskFormElement.executeTask()
    I.dontSeeElement('//*[@class="tasktext"]')
})
