function generateInsuranceNumber1() {
    let res = 'MAI TEST';
    for (let i = 0; i < 5; i++) res += Math.floor(Math.random() * 10);
    return res;
}

module.exports = {
    generate: generateInsuranceNumber1
}