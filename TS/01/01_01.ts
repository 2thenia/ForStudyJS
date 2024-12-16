// 터미널 -> tsc -w = js로 자동 변환. 종료하지 않으면 계속 컴파일.


// Standard Type

// 1. Boolean
let isDone: boolean = false;


// 2. Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b010;
let octal: number = 0o744;


// 3. String
let color: string = "blue";
color = 'red';

let fullName: string = `cat`;
let age: number = 23;
let sentence: string = `Hello. I am a ${fullName}. I'll be ${ age + 1 } years old next month.`;
// 동일한 sentence 선언
let sentence1: string = "Hello. I am a" + fullName + " .\n\n " + 
"I'll be" + (age + 1) + "years old next month.";


// 4. Array
let list: number[] = [1, 2, 3];
let list1: Array<number> = [1, 2, 3];


// 5. Tuple
let x: [string, number];
x = ["Hello", 10];

console.log(x[0].substring(1)); // 성공


// 6. Enum
enum Color1 {Red, Green, Blue}
let c: Color1.Green;
enum Color2 {Skyblue = 1, Pink, Yellow} // 넘버링 체계 수정 가능
let c1: Color2.Skyblue;

enum Color3 {Purple = 1, Black, white}
let colorName: string = Color3[2];

console.log(colorName); // 값이 2인 'Black' 출력


// 7. Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // 성공. 부울임
notSure = 4; // 성공. 숫자임 -> 즉, 어떠한 값이든 할당이 가능해짐


// 8. Void: 값을 반환하지 않는 함수의 반환 타입
function warnUser(): void{
    console.log("This is my warning message"); 
    // 이처럼 출력만 할 뿐, 어떠한 반환값이 존재하지 않는 함수의 타입 지정에 사용됨.
} 


// 8. Null and Undefined
let u: undefined = undefined; // 값이 할당되지 않은 변수의 기본값. 컴파일러가 설정하는 값
let u1: null = null; // 값이 없음을 명시적으로 표기. 개발자가 명시하는 값


// 9. Never: 예외를 던지거나 무한루프에 빠지는 함수에 사용.
//never를 반환하는 함수는 함수의 마지막에 도달 불가.
function error(message: string): never; {
    throw new Error(message)
}

function infiniteLoop(): never {
    while (true){
    }
}

//반환 타입이 never로 추론됨.
 function fail() {
    return error("Something failed");
}


// 10. Object: 위 타입이 아닌 그 외를 의미
declare function crate(o: object | null): void;

create({ prop: 0 }); // 성공
create(null); // 성공

create(42); // 에러
create("str"); // 에러
create(false); // 에러
create(undefined) // 에러


// Type assertions: 검나사 데이터 재구성을 야기하지 않음
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length; // string으로 지정하였으므로 .length 사용 가능
let strLength1: number = (someValue as string).length; // jsx 문법 사용시 권장. 