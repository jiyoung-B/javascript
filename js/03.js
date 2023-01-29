// 26
    let tax = (salary, marriage) => {
    let percentage = 0;
    switch(marriage) {
    case 'y' : if(salary >= 3000) { percentage = 0.25} break;
    case 'n' : (salary < 6000) ? percentage = 0.15 : percentage = 0.35; break;
    default : percentage = 0.1; break;
}
    return salary * percentage;
}

//30
    let catchNumber = (num1) => {
        while(num1 != num2){
           // num1 = prompt('1~100 사이 숫자를 입력하시오');
            if (num1 > num2) {
                msg = '추측한 숫자가 큽니다.';
                console.log(msg)}
            else if (num1 < num2) {
                msg = '추측한 숫자가 작습니다.';
                console.log(msg)}
        }

        msg = ' 빙고! 숫자를 맞췄습니다.';
        return msg;
    }



