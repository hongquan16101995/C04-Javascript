function translateWord() {
    let search = document.getElementById("search").value
    let english = ["Banana", "Apple", "Lemon", "Orange"]
    let vn = ["Chuối", "Táo", "Chanh", "Cam"]
    let flag = false
    for (let i = 0; i < english.length; i++) {
        if (search === english[i]) {
            document.getElementById("result").innerHTML = vn[i]
            flag = true
            break
        }
        if (search === vn[i]) {
            document.getElementById("result").innerHTML = english[i]
            flag = true
            break
        }
    }

    if (!flag) {
        document.getElementById("result").innerHTML = "Không tìm thấy"
    }
}

let number = 0
let interval
function demoSetTimeout() {
    number++
    console.log(number)
    // setTimeout(demoSetTimeout, 1)
}

function start() {
    interval = setInterval(demoSetTimeout, 10)
}

function clearInter() {
    clearInterval(interval)
}
