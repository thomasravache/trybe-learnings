"use strict";
var actions;
(function (actions) {
    actions[actions["salvar"] = 0] = "salvar";
    actions[actions["imprimir"] = 1] = "imprimir";
    actions[actions["abrir"] = 2] = "abrir";
    actions[actions["visualizar"] = 3] = "visualizar";
    actions[actions["fechar"] = 4] = "fechar";
})(actions || (actions = {}));
;
console.log(actions.salvar);
