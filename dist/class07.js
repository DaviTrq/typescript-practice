"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let things = [120, "test", true];
things.push("hello", 360, true);
things[2] = false;
console.log(things);
console.log(things[2]);
