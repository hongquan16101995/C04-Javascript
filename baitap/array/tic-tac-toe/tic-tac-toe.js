let arr
let value = "x"

function display() {
    let n = +prompt("Nhập số ô muốn chơi: ")
    arr = new Array(n)
    let data = ""
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(n)
        for (let j = 0; j < arr[i].length; j++) {
            arr[i][j] = "- "
            data += "<button id='" + i + j + "' onclick='gamePlay(" + i + j + ")'>&nbsp;</button>"
        }
        data += "<br>"
    }
    console.log(data)
    document.getElementById("result").innerHTML = data
}

function gamePlay(id) {
    let arr_id = getId(id)
    let checkValue = attackCell(arr_id)
    if (check(parseInt(arr_id[0]), parseInt(arr_id[1]))) {
        alert(value + " win")
    }
    if (checkValue) {
        changeValue()
    }
}

function getId(id) {
    let arr_id = id.toString().split("")
    if (id < 10) {
        arr_id[1] = arr_id[0]
        arr_id[0] = 0
    }
    return arr_id
}

function attackCell(arr_id) {
    if (arr[arr_id[0]][arr_id[1]] === "- ") {
        arr[arr_id[0]][arr_id[1]] = value
        let index = "" + arr_id[0] + arr_id[1]
        document.getElementById(index).innerHTML = value
        return true
    } else {
        alert("Ô đã có giá trị")
        return false
    }
}

function changeValue() {
    if (value === "x") {
        value = "o"
    } else {
        value = "x"
    }
}

function check(i, j) {
    let booleanMax = i <= arr.length - 2 && j <= arr.length - 2
    let booleanMin = i >= 2 && j >= 2
    if (!(booleanMax && booleanMin)) {
        return false
    }
    let boolean1 = arr[i][j] === arr[i][j + 1] && arr[i][j + 1] === arr[i][j + 2]
    let boolean2 = arr[i][j] === arr[i][j - 1] && arr[i][j - 1] === arr[i][j - 2]
    let boolean3 = arr[i][j] === arr[i + 1][j] && arr[i + 1][j] === arr[i + 2][j]
    let boolean4 = arr[i][j] === arr[i - 1][j] && arr[i - 1][j] === arr[i - 2][j]
    let boolean5 = arr[i][j] === arr[i + 1][j + 1] && arr[i + 1][j + 1] === arr[i + 2][j + 2]
    let boolean6 = arr[i][j] === arr[i - 1][j - 1] && arr[i - 1][j - 1] === arr[i - 2][j - 2]
    let boolean7 = arr[i][j] === arr[i + 1][j - 1] && arr[i + 1][j - 1] === arr[i + 2][j - 2]
    let boolean8 = arr[i][j] === arr[i - 1][j + 1] && arr[i - 1][j + 1] === arr[i - 2][j + 2]
    return (boolean1 || boolean2 || boolean3 || boolean4
        || boolean5 || boolean6 || boolean7 || boolean8)
}
