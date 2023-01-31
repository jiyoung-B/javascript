class SungJuk2 { // 부모 클래스는 Object 임 //값만 다루는 클래스 : VO, DTO
    #name = '';   // # 또는 _ 부틸 시 반드 시 멤버변수로 선언 필요
    #kor = 0;
    #eng = 0;
    #mat = 0;

    #tot = 0;
    #avg = 0.0;
    #grd = '';

    constructor(name, kor, eng, mat) {
        this.#name = name;
        this.#kor = kor;
        this.#eng = eng;
        this.#mat = mat;
    }

    set name(name) {this.#name = name;}
    set kor(kor) {this.#kor = kor;}
    set eng(eng) {this.#eng = eng;}
    set mat(mat) {this.#mat = mat;}
    set tot(tot) {this.#tot = tot;}
    set avg(avg) {this.#avg = avg;}
    set grd(grd) {this.#grd = grd;}


    //getter
    get name(){return this.#name;}
    get kor(){return this.#kor;}
    get eng(){return this.#eng;}
    get mat(){return this.#mat;}
    get tot(){return this.#tot;}
    get avg(){return this.#avg;}
    get grd(){return this.#grd;}

    toString(){ // 부모클래스인 Object를 재정의: 오버라이딩
        //showSungJuk의 return 문을 가져오고, sj => this로 바꿈
        return `${this.#name} ${this.#kor} ${this.#eng} ${this.#mat} <br>
                        ${this.#tot} ${this.#avg} ${this.#grd} <br>`;
    }
};

class SungJukService2 { // 기능만 다루는 클래스 : Service, DAO, Util
    static computeSungJuk(sj){ //객체 생성 없이 바로 메서드 호출 가능
        // 엔진에 의해 자동으로 객체화 됨
        //static 만나면 미리 만들어둔다.
        //early하게 소스코드가 실행되기 전에.생성
        //new 는 실행하는 시점에 생성
        sj.tot = sj.kor + sj.eng + sj.mat;
        sj.avg = sj.tot / 3;
        switch (parseInt(sj.avg / 10)) {
            case 10 :case 9 :sj.grd = '수';break;
            case 8 :sj.grd = '우';break;
            case 7 :sj.grd = '미';break;
            case 6 :sj.grd = '양';break;
            default :sj.grd = '가';break;
        } //switch
    };
};