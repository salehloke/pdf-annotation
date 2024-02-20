import '../../support/commands'





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

    // cy.get('button[type="submit"]').click()


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
      console.log('', response)
      console.log('response body', response["body"])
      const responseBody = response["body"]

      cy.get('input[name="idNo"]').type(responseBody.idNo)
      cy.get('input[name="phoneNo"]').type(responseBody.phoneNo)
      cy.get('input[name="email"]').type(responseBody.email)
      cy.get('input[name="username"]').type(responseBody.username)
      cy.get('input[name="secretWord"]').type(responseBody.secretWord)
      cy.get('input[name="fullName"]').type(responseBody.fullName)

      //SUBMIT
      cy.get('button[type="submit"]').click()

      cy.wait(2000)
      // cy.contains('div', 'User Successfully Created').click();

      cy.contains('button', 'Ok').click();

      // checking the user that we added just now
      cy.contains('td',responseBody.username).should('exist');
      cy.contains('td',responseBody.phoneNo).should('exist');
      cy.contains('td',responseBody.email.toLowerCase()).should('exist');
      cy.contains('td',responseBody.idNo).should('exist');
      cy.contains('td',responseBody.fullName).should('exist');

    });

  })

})