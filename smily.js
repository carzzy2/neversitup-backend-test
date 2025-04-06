/**
 * 
 * @param {string[]} texts list of string [":)", ":(", ":>"]
 * @returns {number} amount of smily face detected
 */
const countSmilyFace = (text) => {
    let count = 0;
    for (const face of text) {
        if (face.length === 2) {
            // กรณีไม่มีจมูก เช่น ":)", ";D"
            const eyes = face[0];
            const mouth = face[1];
            if ((eyes === ':' || eyes === ';') && (mouth === ')' || mouth === 'D')) {
                count++;
            }
        } else if (face.length === 3) {
            // กรณีมีจมูก เช่น ":-)", ";~D"
            const eyes = face[0];
            const nose = face[1];
            const mouth = face[2];
            if (
                (eyes === ':' || eyes === ';') && (nose === '-' || nose === '~') && (mouth === ')' || mouth === 'D')
            ) {
                count++;
            }

        } // กรณีอื่นไม่ต้องนับ (ผิด format)
    }

    return count;
}
console.log(countSmilyFace([';']));
module.exports = {
    countSmilyFace
}
