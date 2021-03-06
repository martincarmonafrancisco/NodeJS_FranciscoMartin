"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const menuPral_1 = require("../view/menuPral");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    let n;
    do {
        n = yield menuPral_1.menuPral();
        switch (n) {
            case 1:
                console.log("Estoy en opción 1");
                break;
            case 2:
                console.log("Estoy en opción 2");
                break;
            case 0:
                console.log('\nAdios');
                break;
            default:
                console.log("Opción incorrecta");
                break;
        }
    } while (n != 0);
});
main();
