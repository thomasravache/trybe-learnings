"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Exercise = __importStar(require("./exercises"));
const exercises_1 = require("./exercises");
console.log((0, exercises_1.greeter)('thomas'));
console.log(Exercise.greeter('Thomas'));
console.log(Exercise.personAge('Thomas', 23));
console.log(`A soma do array é igual a ${Exercise.sumArray([2, 6, 9])}`);
console.log(`Triângulo de base 10cm e altura 25cm: ${Exercise.triangle(10, 25)}cm²`);
console.log(`Quadrado de lado 10cm ${Exercise.square(10)}cm²`);
console.log(`Retângulo de base 10cm e altura 25cm: ${Exercise.rectangle(10, 25)}cm²`);
console.log(`Losango de diagonal maior 32cm e diagonal menor 18cm: ${Exercise.diamond(32, 18)}cm²`);
console.log(`Trapézio com altura de 50cm, base maior de 100cm e base menor de 70cm: ${Exercise.trapeze(50, 100, 70)}cm²`);
console.log(`Círculo com raio igual a 25cm: ${Exercise.circle(25)}cm²`);
console.log('teste');
