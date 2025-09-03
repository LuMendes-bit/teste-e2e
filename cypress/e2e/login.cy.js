describe("Tela de login", function(){

    beforeEach(function(){
        cy.visit("https://kaiquecovo.github.io/pagina-para-teste-e2e")
    })

    it("Deve fazer o login com SUCESSO",function(){
        cy.get("#username").type("admin")
        cy.get("#password").type("1234")
        cy.get("button").click()
        cy.url().should("include","sucesso.html")
        cy.contains("Você logou com sucesso!").should("be.visible")
    })

    it("Deve falhar o login por causa do USUÁRIO ",function(){
        cy.get("#username").type("ehgj")
        cy.get("#password").type("1234")
        cy.get("button").click()
        cy.contains("Usuário ou senha incorretos!").should("be.visible")
    })

     it("Deve falhar o login por causa da SENHA ",function(){
        cy.get("#username").type("admin")
        cy.get("#password").type("7679")
        cy.get("button").click()
        cy.contains("Usuário ou senha incorretos!").should("be.visible")
    })
})