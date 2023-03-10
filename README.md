
# Javascript
---
1. [자바스크립트 자료형(datatype)](02datatype.html)
   1. [자료형](##자료형)
   2. [숫자형](##숫자형)
   3. [문자형](##문자형)
   4. [Boolean형](##boolean형)
   5. [Null](##Null)
   6. [undefined](##undefined)
   7. [객체형](##객체형)
2. [자바스크립트 연산자(operator)](03operator.html)
   1. [표현식](##표현식)
   2. [연산자](##연산자)
3. [자바스크립트 조건문(condition)](04condition.html)
   1. [if문](##if문)
   2. [if ~ else 문](##if-~-else문)
      1. [중첩 조건문](##중첩-조건문)
      2. [다중 조건문](##다중-조건문)
   3. [switch](##switch)
   4. [if vs switch](##if-vs-switch)
4. [자바스크립트 반복문(loop)](05loop.html)
   1. [for](##for)
   2. [무한 반복문 - for](##무한 반복문---for)
   3. [중첩 반복문 - for](##중첩 반복문---for)
   4. [break](##break)
   5. [continue](##continue)
   6. [while](07loop.html)
   7. [무한 반복문 - while](##무한 반복문---while)
5. [자바스크립트 배열(array)](06array.html)
   * 배열명[위치] = 값
   * 배열명.push(값)
   * for(let 인덱스 in 배열명)
   * for(let 값 of 배열명) -- 추천
   * for(let [인덱스, 값] of 배열명.entries())
   ```javascript
        document.write('<br>');
        // 점심메뉴 출력하기
        // for(let 인덱스 in 배열명)
        for( let idx in menus){
            document.write(menus[idx], '<br>');
        }

        // for(let 값 of 배열명) --추천
        document.write('<br>');
        for (let val of menus) {
            document.write(val, '<br>');
        }

        // for(let [인덱스, 값] of 배열명.entries())
        document.write('<br>');
        for (let [idx, val] of menus.entries()) {
            document.write(idx, val, '<br>');
        }
   ```
6. [자바스크립트 함수](08function.html)
   1. [화살표 함수](09function.html)
   2. [scope, hoistion](10scope.html)
   3. [콜백 함수](11callback.html)
7. [자바스크립트 객체](12object.html)
   - object, set, map
8. [자바스크립트 클래스](13oop.html)
   - 클래스, 생성자, getter/setter, instanceof
9. [자바스크립트 내장 객체](14basic_obj.html)
   - Native, Function, String
---

<!--
# 자바스크립트 연산자

## 표현식

표현식expression : 리터럴(값), 식별자(변수), 연산자, 함수 호출등의 조합을

의미<br> 

표현식은 평가evaluate(표현식이 실행되어 결과값 생성)되어 하나의 값을 만듦


```javascript

    10; // 리터럴 표현식

    sum; // 식별자 표현식

    10 + 20; // 연산자 표현식

    Date(); // 함수 표현식

```

![이미지]('./img/경로')

-->

