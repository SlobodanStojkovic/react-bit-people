let a=0
let b =0
var c

function count(a) {
    a++

    c=a
    if (b){
        let c=0
        c++
    }
    b+=c
}

count (a)
count (1)
count (2)

console.log(a, b, c);