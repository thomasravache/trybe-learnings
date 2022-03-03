"use strict";
var rainbow;
(function (rainbow) {
    rainbow[rainbow["vermelho"] = 0] = "vermelho";
    rainbow[rainbow["laranja"] = 1] = "laranja";
    rainbow[rainbow["amarelo"] = 2] = "amarelo";
    rainbow[rainbow["verde"] = 3] = "verde";
    rainbow[rainbow["azul"] = 4] = "azul";
    rainbow[rainbow["azul escuro"] = 5] = "azul escuro";
    rainbow[rainbow["violeta"] = 6] = "violeta";
})(rainbow || (rainbow = {}));
for (let i = 0; i <= 6; i += 1) {
    console.log(rainbow[i]);
}
;
