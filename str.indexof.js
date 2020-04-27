/**
实现 strStr() 函数。
给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。

来源：力扣（LeetCode）
*/


let haystack = 'hello'
let needle = 'll'

// js中有最直接的实现
let strStr = function  (haystack, needle) {
    return haystack.indexOf(needle)
}

/**
 * 遍历长字符，再遍历短字符，逐一比较
*/
let strStr2 = function (haystack, needle) {
    if (needle.length === 0) return 0
    // 标记起始位置
    let i = 0
    // needle 的位置
    let j = 0
    let result = -1
    for (let hl = haystack.length;i < hl; i++) {
        for(let nl = needle.length; j<nl; j++) {
            if(needle[j] !== haystack[i+j]) {
                j = 0
                break
            }
            if (j === nl - 1) {
                result = i
            }
        }
        if (result !== -1) break
    }
    return result
} 
/**
 * 双层循环，即便使用了break，耗时依然较长
*/


/**
 * 正则匹配法
*/
let strStr3 = function (haystack, needle) {
    if (needle.length === 0) return 0
    let reg = new RegExp(needle)
    let result = haystack.match(reg)
    if (result) {
        return result.index
    } else {
        return -1
    }
}