// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

const accum = (str) => {
    let str2 = str.toLowerCase()
    let arr = [] 
    for (let i = 0; i < str2.length; i++){
        arr.push(`${str2[i].toUpperCase()}${str2[i].repeat(i)}`)
    }
    return arr.join("-")
}

accum("RqaEzty")

//Solution 2

const accum = (str) => {
    return str.split("").map((el,ind) => el.toUpperCase() + el.toLowerCase().repeat(ind)).join("-")
}