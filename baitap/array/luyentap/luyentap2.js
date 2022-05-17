function bai3() {
    creatArray()
    let count = 0
    for (let i = 0; i < array.length; i++) {
        if (!isNaN(array[i])) {
            count++
        }
    }
    console.log(array)
    console.log("Số ký tự số là: " + count)
}

