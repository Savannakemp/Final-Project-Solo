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

    'Login/logout Mobile': browser => {
        navigationPage
            .waitForElementVisible('.smf-icon')
            .click('@MobileNavTab')
            .waitForElementVisible('@MobileLogin')
            .click('@MobileLogin')
            // .waitForElementVisible('@MobileMenu')
            .setValue('@Username', '') // username and password needs to be filled in.
            .setValue('@Password', '')
            .click('@SubmitButton')
            .waitForElementVisible('@ResponsiveLogo')
            .click('@MobileNavTab')
            .waitForElementVisible('@SignOut')
            .click('@SignOut')
            // .click('@MobileNavTab')
            // .click('@UserAccount')
            // .click('@MyAccount')
            // .waitForElementVisible('@MyAccountInfo')
            // .click('@MobileNavTab')
            // .click('@Library')
            // .waitForElementVisible('')
            // .click('@MobileNavTab')
            // .click('@Contacts')
            // .waitForElementVisible('')
            // .click('@MobileNavTab') 
            // .click('@Dashboard')
            // .waitForElementVisible('')
            // .click('@MobileNavTab')
            // .click('@Surveys')
            // .waitForElementVisible('@Title')
            // .click('@MobileNavTab')
            // .click('@PlansAndPricing')
            // .click('@Logo')
            // .waitForElementVisible('')
            // .click('@MobileNavTab')
            // .click('@Products')
            // .click('@Enterprise')
            // .click('@MobileNavTab')
            // .click('@Products')
            // .click('@Audience')
            // .waitForElementVisible('')
            // .click('@MobileNavTab')
            // .click('@Products')
            // .click('@Integrations')
            // .waitForElementVisible('')
            // .click('@MobileNavTab')
            // .click('@Products')
            // .click('@CX')
            // .waitForElementVisible('')
            // .click('@MobileNavTab')
            // .click('@Products')
            // .click('@Engage')
            // .waitForElementVisible('')
            // .click('@MobileNavTab')
            // .click('@Products')
            // .click('@TechValidate')
            // .waitForElementVisible('')
            // .click('@MobileNavTab')
            // .click('@Products')
            // .click('@Wufoo')
            // .waitForElementVisible('')
            // .click('@MobileNavTab')
            // .click('@Products')
            // .click('@Apply')
            // .waitForElementVisible('')
            // .click('@MobileNavTab')
            // .click('@Help')
            // .click('@HelpCenter')
            // .waitForElementVisible('')
            // .click('@MobileNavTab')
            // .click('@Help')
            // .click('@Curiosity')
            // .waitForElementVisible('')
            // .click('@MobileNavTab')
            // .click('@SignOut')
         







            // .click('@MobileAccount')
            // .waitForElementVisible('@SectionLabel')
            // .click('@MobileNavTab')
            // .click('@UserAccount')
            // .click('@MyAccount')
            // .waitForElementVisible('@TitleLine')
            // .click('@NavigationTab')
    //         .click('@SignOut')
    //         .click('@LogIn')



    },
}