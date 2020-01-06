describe('test api call to get reddits', () => {
  it('should visit the site', () => {
    cy.visit('http://localhost:3000');

    
  });
  it('should search for Scotland reddits', () => {
    cy.get('#outlined-search')
      .type('Scotland')
      .should('have.value', 'Scotland')

      cy.contains('Get Reddits').click();
  });
  
  it('should search for 20 items on select value change', () => {
    cy.get('#items-select')
      .click()
      .get('[data-value=20]')
      .click()
      .get('#items-select')
      .should('contain', '20')
  })
  it('should have Scotland in searched reddits list', () => {
    cy.get('.searched-reddits__list')
      .should('contain', 'Scotland')
  });
  it('should remove Scotland from searched reddits', () => {
    cy.get('.searched-reddits__list')
      .get('.MuiChip-deleteIcon').eq(-1)
      .click()
      
      cy.get('.searched-reddits__list')
        .should('not.contain', 'Scotland')

  })
})