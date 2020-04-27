/**
1.     1
2.     11
3.     21
4.     1211
5.     111221
 * */ 



/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    function readString(str){
        let current = str[0]
        let n = 1
        let result2 = ''
        for (let j = 1,l=str.length;j<l;j++) {
            if (str[j]===current) {
                n++
                continue
            } else {
                result2 += `${n}${current}`
                current = str[j]
                n = 1
            }
        }
        return result2 += `${n}${current}`
    }
    // 从1开始读到n
    let result = '1'
    if (n===1) return result
    for(let i = 2;i<=n;i++){
         // 读上一个，返回当前
        result = readString(result)
    }
    return result
};


// 正则方式
var countAndSay2 = function(n) {
    let prev = '1'
    for(let i = 1; i < n; i++){
        prev = prev.replace(/(\d)\1*/g, item =>`${item.length}${item[0]}`)
    }
    return prev
};

// 学习一波replace
/**
 * replace 的第二个参数可以是字符串，也可以是函数
 * 如果是函数：(匹配到的那一项，匹配元素，当前位置，字符串本身)=> ''
 * 正则表达式中的小括号"()"。是代表分组的意思。 如果再其后面出现\1则是代表与第一个小括号中要匹配的内容相同。
 * 以n=5，结果为111221为例
 * 因为全局匹配，出现了三次匹配
 * 第一次：‘111’，item = ‘111’，匹配元素就是1，当前位置就是0
 * 第二次：‘22’，item = ‘22’，匹配的元素就是2，当前位置是3
 * 第三次: ‘1’， item = ‘1’， 匹配的到元素1，当前位置5
 * 通过正则匹配，效率明显提高
 * */ 
