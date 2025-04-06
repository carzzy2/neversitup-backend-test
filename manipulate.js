/**
 *
 * @param {string} text string of value example "aabb", "abcde"
 * @returns {string[]} string array of result
 */
const manipulate = (text) => {
    if (text.length === 0) {
        return [];
    }
    if (text.length === 1) {
        return [text];
    }
    const result = [];
    const characters = text.split('');
    const findAllPermutations = (currentPermutation, remainingCharacters) => {
        // ถ้าไม่มีตัวเหลืออีกแล้ว แสดงว่าได้คำที่สมบูรณ์แล้ว
        if (remainingCharacters.length === 0) {
            const word = currentPermutation.join('');
            result.push(word);
            return;
        }
        // ลองเลือกทุกตัวใน remainingCharacters ทีละตัว
        for (const [i, chosenChar] of remainingCharacters.entries()) {
            const nextPermutation = [...currentPermutation]; // copy currentPermutation
            const nextRemaining = [...remainingCharacters];  // copy remainingCharacters
            nextPermutation.push(chosenChar);
            nextRemaining.splice(i, 1); // ลบตัวที่เลือกออกจาก remaining
            // เรียกตัวเองต่อไป เพื่อจัดเรียงตัวถัดไป
            findAllPermutations(nextPermutation, nextRemaining);
        }
    }
    findAllPermutations([], characters);
    // filter duplicate
    const newResult = [];
    for (const v of result) {
        if (!newResult.includes(v)) {
            newResult.push(v);
        }
    }
    console.log('newResult', newResult);
    return newResult;
}
module.exports = {
    manipulate
}
