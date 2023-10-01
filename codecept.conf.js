exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://try.vikunja.io',
      show: true,
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: './pages/LoginPage.js',
    mainPage: "./pages/MainPage.js",
    addNewTaskFormElement: "./pages/fragments/AddNewTaskFormElement.js",
    taskListElement: "./pages/fragments/TaskListElement.js",
    taskPage: "./pages/TaskPage.js"
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
    pattern: 'wait.*',
    timeout: 0
  },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './tests/*_test.js',
  name: 'otus-2023-codeceptjs-chaadaev'
}
