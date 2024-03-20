// 클래스 선언
class Product {
    constructor(prod_id, code) {
        this.prod_id = prod_id;
        this.code = code;
    }
}

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [prod2_id, code2] = input[0].split(' ');

// 첫 번째 상품 생성
const product1 = new Product("codetree", 50);

// 두 번째 상품 생성
const product2 = new Product(prod2_id, Number(code2));

// 출력
console.log(`product ${product1.code} is ${product1.prod_id}`);
console.log(`product ${product2.code} is ${product2.prod_id}`);