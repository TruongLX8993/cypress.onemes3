function login() {
    cy.visit("/login.aspx");
    cy.get('#txtLoginName').type("sys.admin.hieutt")
    cy.get("#txtPassword").type("1")
    cy.get("#btnLogin").click();
}

function goToFunctionFromMenu(wpid) {

    cy.get(`#side-menu a[href*='${wpid}']:first`).click({force: true});
}


function enterSelectBoxNormal(selectTagId, value) {
    cy.get(`#${selectTagId}`).parent().find('span.selection span.select2-selection').click();
    cy.get('span.select2-search').find('input.select2-search__field').type(`${value}{downArrow}{enter}`);
}

function enterSelectBoxElas(selectTagId, value) {
    cy.get(`#${selectTagId}`).parent().find('span.selection span.select2-selection').click();
    cy.get('span.select2-search').find('input.select2-search__field').type(`${value}`);
    cy.get(`#select2-${selectTagId}-results`).find('tr:first').click();
}


function enterSelectBoxUlLi(selectTagId, value){
    cy.get(`#${selectTagId}`).parent().find('span.selection span.select2-selection').click();
    cy.get('span.select2-search').find('input.select2-search__field').type(`${value}`);
    cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(2)').click();

}


function inputDateTime(selectTagId){
    const today = new Date();
    // Thêm 1 ngày
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    // Định dạng ngày tháng năm thành chuỗi 'YYYY-MM-DD'
    const formattedDate = `${String(tomorrow.getDate()).padStart(2, '0')}-${String(tomorrow.getMonth() + 1).padStart(2, '0')}-${tomorrow.getFullYear()}`;
    cy.get(`#${selectTagId}`).clear();
    cy.get(`#${selectTagId}`).type(`${formattedDate}`);

}

module.exports = {
    login: login,
    goToFunctionFromMenu: goToFunctionFromMenu,
    enterSelectBoxNormal: enterSelectBoxNormal,
    enterSelectBoxElas: enterSelectBoxElas,
    enterSelectBoxUlLi: enterSelectBoxUlLi,
    inputDateTime: inputDateTime,
}
