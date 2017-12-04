// 可以在这里操作数据对象

module.exports = function(req, res) {
    setTimeout(() => {
        res.end('plain text');
    }, 1000)
}
