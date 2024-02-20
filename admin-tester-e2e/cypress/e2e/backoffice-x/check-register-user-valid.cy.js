import '../../support/commands'



describe('test Check if Register New User Exists', () => {
  beforeEach(() => {

    cy.visit('/login')

    cy.get('input[name=pfNumber]').type('admin01')

    // {enter} causes the form to submit
    cy.get('input[name=isLocalAccount]').check()

    // {enter} causes the form to submit
    cy.get('input[name=password]').type(`${123456}{enter}`)

  })

  it('login with username: admin01', function () {
    // destructuring assignment of the this.currentUser object

    // we should be redirected to /dashboard
    const sideBar = cy.get('[data-testid="flowbite-sidebar-item-group"]')
    sideBar.get('li').contains('span>p', 'Dashboard')
    // our auth cookie should be present
    // cy.getCookie('your-session-cookie').should('exist')
    // cy.screenshot()

    // UI should reflect this user being logged in
  })
  it('should contain create new User Button', function () {
    // we should be redirected to /dashboard
    const sideBar = cy.get('[data-testid="flowbite-sidebar-item-group"]')
    sideBar.get('li').contains('span>p', 'Dashboard')
    sideBar.get('li').contains('span>p', 'User')
    // sideBar.get('li').contains('span>p','Announcement')   
    // sideBar.get('li').contains('span>p','Announcement')   
    const test = sideBar.get('li>a').contains('span>p', 'User')
    test.click()

    // const createNewUserBtn = cy.get('#create-new-user-btn').contains('Creater New User')
    const createNewUserBtn = cy.get('#create-new-user-btn').click()
    // createNewUserBtn.click()

    // our auth cookie should be present

  })


  it('should contain create new User Page', function () {
    // we should be redirected to /dashboard
    const sideBar = cy.get('[data-testid="flowbite-sidebar-item-group"]')
    sideBar.get('li').contains('span>p', 'Dashboard')
    sideBar.get('li').contains('span>p', 'User')
    // sideBar.get('li').contains('span>p','Announcement')   
    // sideBar.get('li').contains('span>p','Announcement')   
    const test = sideBar.get('li>a').contains('span>p', 'User')
    test.click()

    // const createNewUserBtn = cy.get('#create-new-user-btn').contains('Creater New User')
    const createNewUserBtn = cy.get('#create-new-user-btn').click()
    const pageTitle = cy.get('div').should('contain', 'Create New User')

    // createNewUserBtn.click()

    // our auth cookie should be present

  })

})



describe('test Register New User Feature', () => {
  beforeEach(() => {

    cy.visit('/login')
    cy.get('input[name=pfNumber]').type('admin01')
    // {enter} causes the form to submit
    cy.get('input[name=isLocalAccount]').check()
    // {enter} causes the form to submit
    cy.get('input[name=password]').type(`${123456}{enter}`)
    const sideBar = cy.get('[data-testid="flowbite-sidebar-item-group"]')
    const test = sideBar.get('li>a').contains('span>p', 'User')
    test.click()
    // reroute to create new user page
    const createNewUserBtn = cy.get('#create-new-user-btn').click()
    // checking if the title is correct
  })

  it('Check input exists: Identification Type, ID Number, Country Code, Phone Number, Email,  Username, Password, secretword', function () {
    cy.wait(1500)

    cy.get('input[type="hidden"][name="idType"]').should('exist')
    cy.get('input[type="hidden"][name="countryCode"]').should('exist')
    cy.get('input[name="idNo"]').should('be.visible')
    cy.get('input[name="phoneNo"]').should('be.visible')
    cy.get('input[name="email"]').should('be.visible')
    cy.get('input[name="username"]').should('be.visible')
    cy.get('input[name="password"]').should('be.visible')
    cy.get('input[name="pfNo"]').should('be.visible')
    cy.get('input[name="activePolicyNo"]').should('be.visible')

    cy.get('button[type="submit"]').click()

    // cy.get

    // createNewUserBtn.click()

    // our auth cookie should be present

  })


  it('Check Success Case: Test create new user', function () {
    cy.wait(1500)

    cy.get('input[type="hidden"][name="idType"]').should('exist')
    cy.get('input[type="hidden"][name="countryCode"]').should('exist')
    cy.get('input[name="idNo"]').should('be.visible')
    cy.get('input[name="phoneNo"]').should('be.visible')
    cy.get('input[name="email"]').should('be.visible')
    cy.get('input[name="username"]').should('be.visible')
    cy.get('input[name="password"]').should('be.visible')
    cy.get('input[name="pfNo"]').should('be.visible')
    cy.get('input[name="activePolicyNo"]').should('be.visible')

    cy.get('button[type="submit"]').click()
    cy.request({
      method: 'GET', // Specify the HTTP method (GET, POST, etc.)
      url: 'http://localhost:3501/user', // Specify the URL of the API endpoint
      headers: {
        // Optional: Specify any headers needed for the request
        // 'Authorization': 'Bearer your_access_token',
        'Content-Type': 'application/json'
      },
      // Optionally, you can include request body or query parameters:
      // body: {},
      // qs: {}
    }).then((response) => {
      // Handle the response here
      console.log()
      expect(response.status).to.eq(200); // Example assertion
    });
    
    // cy.get

    // createNewUserBtn.click()

    // our auth cookie should be present

  })

})