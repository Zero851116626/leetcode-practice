// 给定一个不重复的无序数组，
// 给出他的全排列
// 三位数，写出来，其实就是一个树状结构。
// 使用一个数组来记录每步的状态： path：[],模拟一个栈的结构，通过入栈，出栈来表示路径
// 用一个变量currentChoose 来表示当前这一步的选择
// 用一个used数组，来存储已经使用了的数值。

const initArr = [1,2,3,4]

function allOrder (initArr) {
    // 初始的状态为空
    const path = []
    // 已经使用的元素，初始时没有
    const used = []
    const l = initArr.length

    // 拿到初始数组，拷贝一份
    const [...copyInit] = initArr


    // 如果path的长度等于initArr的长度，说明已经完成了
    if (paht.length === l) {
        // 回退
    }
    // 如果不等于
    for (let i = 0; i < l; i++) {
        // 如果存在，就下一轮判断
        if (used.includes(initArr[i])) continue
        let currentChoose = copyInit.shift()
        // 如果不存在，就存入
        path.push(currentChoose)
        used.push(currentChoose)
    }
}
allOrder(initArr)