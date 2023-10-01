const {locator} = require("codeceptjs");
const { I } = inject();

module.exports = {
    root: locate('.task-add'),
    taskField: 'textarea[placeholder="Добавить новую задачу…"]',

    fillTask (task) {
        I.fillField(this.taskField, task)
    },

    submit () {
        I.click(locate('button').withText('Добавить'))
    },

    execute () {
        I.click(locate('//*[@class="fancycheckbox__icon"]'))
    },

    createTask (task) {
        this.fillTask(task)
        this.submit()
    },

    executeTask (task) {
        this.execute()
    }
}
