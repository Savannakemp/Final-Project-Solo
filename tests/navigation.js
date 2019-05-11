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

    'Style/Functionality for Mobile': browser => {
        navigationPage
            .waitForElementVisible('.smf-icon')
            .click('@MobileNavTab')
            // .waitForElementVisible('a[href="/pricing/?ut_source=megamenu"]')
            .click('@MobileLogin')
            // .waitForElementVisible('.wds-type--page-title max-width-header')
            .setValue('@Username', '') // username and password needs to be filled in.
            .setValue('@Password', '')
            .click('@SubmitButton')
            // .click('@MobileNavTab')
            // .click('@MobileAccount')
            // .waitForElementVisible('@SectionLabel')
            // .click('@MobileNavTab')
            // .click('@UserAccount')
            // .click('@MyAccount')
            // .waitForElementVisible('@TitleLine')
            // .click('@NavigationTab')
            // .click('@UserAccount')
            // .click('@Library')
    //         .click('@NavigationTab')
    //         .click('@UserAccount') 
    //         .click('@Contacts')
    //         .click('@NavigationTab') 
    //         .click('@Dashboard')
    //         .click('@NavigationTab')
    //         .click('@Surveys')
    //         .click('@NavigationTab')
    //         .click('@PlansAndPricing')
    //         .click('@Logo')
    //         .click('@NavigationTab')
    //         .click('@Products')
    //         .click('@Enterprise')
    //         .click('@NavigationTab')
    //         .click('@Products')
    //         .click('@Audience')
    //         .click('@NavigationTab')
    //         .click('@Products')
    //         .click('@Integrations')
    //         .click('@NavigationTab')
    //         .click('@Products')
    //         .click('@CX')
    //         .click('@NavigationTab')
    //         .click('@Products')
    //         .click('@Engage')
    //         .click('@NavigationTab')
    //         .click('@Products')
    //         .click('@TechValidate')
    //         .click('@NavigationTab')
    //         .click('@Products')
    //         .click('@Wufoo')
    //         .click('@NavigationTab')
    //         .click('@Products')
    //         .click('@Apply')
    //         .click('@NavigationTab')
    //         .click('@Help')
    //         .click('@HelpCenter')
    //         .click('@NavigationTab')
    //         .click('@Help')
    //         .click('@Curiosity')
    //         .click('@NavigationTab')
    //         .click('@SignOut')
    //         .click('@LogIn')



    },
}