// cuando se trate de sus dependencias, usen la extension 
import { compareText } from './text-comparison.js';

/**
 * @type {ComparisonObject}
 */
const toCompare = {
    origin: "dogs bark",
    modified: "cats bark"
};

console.log(compareText(toCompare));