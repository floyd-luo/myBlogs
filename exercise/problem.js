// 有效括号匹配
/**
 * @return {Boolean}
 * @param {string} s
 */
var isValid = function (s) {
    if (s.length % 2 === 1) return false;
    let stack = [];
    const type = new Map([
        [')', '('],
        ['}', '{'],
        [']', '[']
    ]);
    for (let char of s) {
        if (type.has(char)) {
            if (stack.length === 0 || stack[stack.lenght - 1] !== type.get(char)) {
                return false;
            }
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
};

/**
 * @return {Array}
 * @param {string} input
 * 实例：
 * 输入：input = [1,2,3,null,5,null,4]
 * 输出：[1,3,4]
 */
const rightSideView = (input) => {
    // 定义二叉树节点
    function TreeNode(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
    function BFS(_root){
        if (!root) return [];

        const queue = [root];
        const result = [];

        while (queue.length > 0) {
            const levelSize = queue.length;

            for (let i = 0; i < levelSize; i++) {
                const node = queue.shift();

                // 如果是当前层的最后一个节点，添加到结果中
                if (i === levelSize - 1) {
                    result.push(node.val);
                }

                // 把左子节点和右子节点按顺序加入队列
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
        }
        return result;
    }
    // 示例二叉树 [1,2,3,null,5,null,4]
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.right = new TreeNode(5);
    root.right.right = new TreeNode(4);
    return BFS(root);
}
let a = rightSideView([1, 2, 3, null, 5, null, 4]);
//console.log(a);

/**
 * @return {Array}
 * @param {Array} arr
 * @param {string} key
 * 实例：
 * 输入：arr = const arr = [
 *   { id: 1, name: 'Alice' },
 *   { id: 2, name: 'Bob' },
 *   { id: 1, name: 'Alice' },
 *   { id: 3, name: 'Charlie' }
 * ];
 * key='id'
 * 输出：[{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }]
 */
function uniqueArr(arr,key){
    return arr.filter((item, index, self) => index === self.findIndex(t => t[key] === item[key]));
}
function uniqueArr2(arr=[],key){
    return Array.from(new Map(arr.map(item=>[item[key],item])).values());
}
function uniqueArr3(arr=[],key){
    return arr.reduce((prev,cur)=>{
        const x = prev.find(item => item[key] === cur[key]);
        if(!x){
            prev.push(cur);
        }
        return prev;
    },[]);
}
 const arr = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 1, name: 'Alice2' },
    { id: 3, name: 'Charlie' }
];
//console.log(uniqueArr3(arr,'id'));
/**
 * 请实现一个 add 函数，满足以下功能
 * 示例：
 * add(1);             // 1
 * add(1)(2);      // 3
 * add(1)(2)(3)；// 6
 * add(1)(2, 3); // 6
 * add(1, 2)(3); // 6
 * add(1, 2, 3); // 6
 */
function add(...args){
    // 在内部声明一个函数，利用闭包的特性保存并收集所有的参数值
    let fn = function(...newArgs) {
        return add.apply(null, args.concat(newArgs))
    }
    fn.valueOf = function () {
        return args.reduce((total, cur) => total + cur, 0);
    }
    return fn;
}
//console.log(add(1));
console.log(add(1)(2)(3));