let a = Math.round(Math.random() * 100)
alert(`Randomda chiqan son: ${a}`)
if(a % 3 === 0){
    alert(`${a} soni fizz`)
}else if(a % 5===0){
    alert(`${a} soni buzz`)
}else if(a % 5 ===0 && a % 3 ===0){
    alert(`${a} fizzbuzz`)
}
else{
    alert(`${a} soni fizz mas buzz mas fizzbuzz ham emas`)
}


//3=fizz
//5=buzz
//3,5=fizzbuzz