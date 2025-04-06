/**
 * 
 * @param {number[]} numbers list of numbers example [7], [0], [1,1,2], [0,1,0,0,1], [1,2,3,4,5,6,7,8,9,0]
 * @returns {number} one number that odd number
 */
const findOddNumber = (text) => {
    const countMap = {};
    for (const number of text) {
        if (!countMap[number]) {
            countMap[number] = 1; // if not found set to 1
        } else {
            countMap[number] += 1; // if found add 1
        }
    }
    // ตรวจสอบว่าตัวไหนที่จำนวนเป็นเลขคี่
    for (let key in countMap) {
        if (countMap[key] % 2 === 1) { // check if odd
            return parseInt(key);
        }
        // else {
        //     console.log('key', key);
        // }
    }
    return undefined;
}

console.log(findOddNumber([1,1,2]));
module.exports = {
    findOddNumber
}
