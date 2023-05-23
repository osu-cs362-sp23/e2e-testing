it("creates a to-do", function () {
    cy.visit("/")
    cy.findByPlaceholderText("Enter a To-Do")
        .type("Add our 1st to-do")
    cy.findByRole("button", { name: "Add To-Do" }).click()
    cy.findByText("Add our 1st to-do").should("exist")
})
