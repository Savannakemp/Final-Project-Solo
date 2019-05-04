var navigationPage = {}

module.exports = {

    beforeEach: browser => {
        navigationPage = browser.page.navigationPage()
        navigationPage.navigate()
    },

    after: browser => {
        browser.end()
    },

    'Login/Logout': browser => {
        navigationPage
            .waitForElementVisible('.log-in')
            .click('.log-in')
            .setValue('@Username', '') // username and password needs to be filled in.
            .setValue('@Password', '')
            .click('@SubmitButton')
            .waitForElementVisible('.welcome-line') 
            .click('#userAcctTab_MainMenu')
            .click('a[href="/user/sign-out/?ut_source=header"]')
            // .assert('h1')
            
    },
}