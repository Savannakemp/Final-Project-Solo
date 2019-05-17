navigationPage = {}

module.exports = {

    beforeEach: browser => {
        navigationPage = browser.page.navigationPage()
        navigationPage.navigate()
        browser.resizeWindow(741, 785)
        
            
    },

    after: browser => {
        browser.end()
    },
    
    'Navigation for Mobile': browser => {
        navigationPage
            .click('@MobileNavTab')
            browser.expect('#userAcctTab_MainMenuMobile').to.be.present
            .click('@UserAccount')
        navigationPage
                .expect('@MyAccount').to.be.present
            .click('@MyAccount')
            .waitForElementVisible('@AccountDetails')
        navigationPage
                .expect('@Library').to.be.present
            // .click('@MobileNavTab')
            // .click('@Library')
            // .waitForElementVisible('')
            // .click('@MobileNavTab')
            // .click('@Contacts')
            // .waitForElementVisible('')
            // .click('@MobileNavTab') 
            // .click('@Dashboard')
            // .waitForElementVisible('')
    },
}