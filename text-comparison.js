import DiffMatchPatch from 'diff-match-patch';

const dmp = new DiffMatchPatch();

// en caso de que les falle o les marque error
// pueden descomentar las siguientes dos lineas
// //@ts-ignore
// const dmp = new DiffMatchPatch();


/**
 * This function takes an an object comparison
 * @param {ComparisonObject} obj comparison object which contains the text to compare
 * @returns {string}
 */
export function compareText(obj) {
    return dmp.diff_main(obj.origin, obj.modified);
}
