"use strict";

const chalk = require("chalk");

console.log(chalk.hex("#FF0000")(`
Y88b   d88P  .d8888b.  8888888b.     d8888 888b     d888 
 Y88b d88P  d88P  Y88b 888   Y88b   d88888 8888b   d8888 
  Y88o88P   Y88b.      888    888  d88P888 88888b.d88888 
   Y888P     "Y888b.   888   d88P d88P 888 888Y88888P888 
   d888b        "Y88b. 8888888P" d88P  888 888 Y888P 888 
  d88888b         "888 888      d88P   888 888  Y8P  888 
 d88P Y88b  Y88b  d88P 888     d8888888888 888   "   888 
d88P   Y88b  "Y8888P"  888    d88P     888 888       888 
                                                         
                                                         
                                                         
`));
console.log(chalk.hex("#FF0000")("♰𝕏𝕊ℙ𝔸𝕄 𝔸 𝕎ℍ 𝔻ℂ♰\n"));
console.log(chalk.hex("#FF0000")("OWNER BOT: @MALIK_XSPAM"));
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWASocket = void 0;
const Socket_1 = __importDefault(require("./Socket"));
exports.makeWASocket = Socket_1.default;
__exportStar(require("../WAProto"), exports);
__exportStar(require("./Utils"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Store"), exports);
__exportStar(require("./Defaults"), exports);
__exportStar(require("./WABinary"), exports);
__exportStar(require("./WAM"), exports);
__exportStar(require("./WAUSync"), exports);

exports.default = Socket_1.default;
