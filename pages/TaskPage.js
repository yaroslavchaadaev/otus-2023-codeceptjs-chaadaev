const { I } = inject();

module.exports = {
    visit (taskId) {
        I.amOnPage(`https://try.vikunja.io/tasks/${taskId}`)
    },

    hasTitle (title) {
        I.see(title)
    },

    getTitle () {
        return I.grabTextFrom('.title.input')
    }
}
