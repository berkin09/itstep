let result = 6;
while(true) {
    let num = +prompt('Решите пример 2+2*2:')
    if(num===result) {
        console.log('Правильно:'+result)
        break;
    } else {
        console.log('Попробуйте снова')
    }
}
