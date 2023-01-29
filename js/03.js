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
        for (let i = 0; i <= 2; ++i) {
            num1 = prompt('1~100 사이 숫자를 입력하시오');
            if (num1 > num2) {
                msg = '추측한 숫자가 큽니다.';
                console.log(msg);
                document.write(msg);
                alert('틀렸습니다. 다른 숫자를 입력하시오');
            } else if (num1 < num2) {
                msg = '추측한 숫자가 작습니다.';
                console.log(msg);
                document.write(msg);
                alert('틀렸습니다. 다른 숫자를 입력하시오');
            } else {
                msg = '빙고! 숫자를 맞췄습니다.';
                console.log(msg);
                break;
            }
        }
        return msg;
    }

//31
    let identifyNumber = (number) => {
        // msg = '정수입니다';
        if (number == 0){
            msg = '0 입니다';
        }else if (number < 0){
            msg = '음수입니다';
        } else { msg = '정수입니다';}
        return msg;
    }

//32
    let checkNumber = (number) => {
        if(number < 10000) {
            msg = '10000 미만';
        }else if(number < 20000){
            msg = '10000 ~ 20000';
        }else if(number < 30000){
            msg = '20000 ~ 30000';
        }else {msg = '범위 밖 값';}

        return msg;
    }

//33
    let cardCheck = (cardNumber) => {


    }

//



