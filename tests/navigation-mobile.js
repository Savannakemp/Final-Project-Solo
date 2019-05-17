navigationPage = {}

module.exports = {

    beforeEach: browser => {
        navigationPage = browser.page.navigationPage()
        navigationPage.navigate()
        browser.resizeWindow(741, 785)
        navigationPage
            .waitForElementVisible('.smf-icon')
            .click('@MobileNavTab')
            .waitForElementVisible('@MobileLogin')
            .click('@MobileLogin')
            // .waitForElementVisible('@MobileMenu')
            .setValue('@Username', 'savannakemp@hotmail.com') // username and password needs to be filled in.
            .setValue('@Password', 'Malachowski1674')
            .click('@SubmitButton')
            .waitForElementVisible('@ResponsiveLogo')
        
            
    },

    after: browser => {
        navigationPage
            .click('@MobileNavTab')
            .waitForElementVisible('@SignOut')
            .pause(1000)
            .click('@SignOut')
        browser.end()
    },
    
    'Navigation for Mobile': browser => {
        navigationPage
            .click('@MobileNavTab')
            // .expect.element('@UserAccount').to.be.present
            .pause(1000)
            .click('@UserAccount')
        navigationPage
            .expect.element('@MyAccount').to.be.present
        navigationPage
            .click('@MyAccount')
            .expect.element('@AccountDetails').to.be.present
        navigationPage
            .click('@MobileNavTab')
        navigationPage
            .expect.element('@Dashboard').to.be.present
        // navigationPage
        //     .expect('@Surveys').to.be.present
        // navigationPage
        //     .expect('@PlansAndPricing').to.be.present
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