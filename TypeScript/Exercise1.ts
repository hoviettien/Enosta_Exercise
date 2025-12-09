function calculate(a: number, b: number, operation: '+' | '-' | '*' | '/'): number{
    switch (operation){
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': 
            if (b !== 0){
                return a / b;
            } else {
                throw new Error("b not be 0");
            }
        default: 
            throw new Error("Invalid operation");
    }
}
console.log(calculate(6, 4, '+'));