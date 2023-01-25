function r (num){
    if (num==1){
        return 1
    }
    return   num *r(num-1)
}
console.log(r(5));