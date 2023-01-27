function computeLeapYear(year) {
    let result = `평년입니다!! <br>`;
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        result = `${year} - 윤년입니다!! <br>`;
    }
    return `${year}년은 ${result} <br>`;
}

function showStarPyramid(floor) {
    let result = '';

    for (let j = 1; j <= floor; ++j) {
        for (let i = 1; i <= j; ++i) {
            result += '*';
        }
        result += '<br>';
    }
    return document.write(result);
}

function showAMPM(time){
    let result = '오후입니다!! <br>';
    let hour = time[0] + time[1];
    if (hour < 12){ result = `오전입니다!! <br>`;}
    return `${hour}시는 - ${result}`;
}

function computeSungJuk(kor, eng, mat){
    let tot = 0, avg = 0, grade = '가'; // 다중변수 선언

    tot = kor + eng + mat;
    avg = tot / 3 ;
    switch(parseInt(avg / 10)){
        case 10:
        case 9: grade = '수'; break;
        case 8: grade = '우'; break;
        case 7: grade = '미'; break;
        case 6: grade = '양'; break;
    }
    document.write(`총점은 ${tot}, 평균은 ${avg}, 학점은 ${grade} 입니다 <br>`);
}