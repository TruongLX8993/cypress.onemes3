function generateInsuranceNumber() {
    let res = 'DN1';
    for (let i = 0; i < 12; i++) res += Math.floor(Math.random() * 10);
    return res;
}

module.exports = {
    generate: generateInsuranceNumber
}