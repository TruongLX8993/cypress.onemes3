const common = require('../../common.cy');
const enviroment = require('../../../../enviroment.json');
const dieuTriNoiTruTestFunc = require('./test_func');


describe("Nội trú", () => {


    beforeEach(() => {
        common.visitAndLogin(enviroment.kcb);
        common.goToFunctionFromMenu('danhsachdieutrinoitrudraw');


    });

    it('Check các bộ lọc trong DS điều trị NT', function () {
        dieuTriNoiTruTestFunc.validFilter();
    });


    });