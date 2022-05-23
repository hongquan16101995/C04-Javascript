// let array
function creatArray() {
    let n = +prompt("Nhập vào số phần tử của mảng: ")
    let array = new Array(n)
    for (let i = 0; i < array.length; i++) {
        array[i] = prompt("Nhập vào phần tử thứ " + (i+1))
    }
    return array
}
