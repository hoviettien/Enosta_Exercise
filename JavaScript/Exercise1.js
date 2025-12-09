function calculate(a, b, op) {
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/':
            if (b != 0) {
                return a / b;
            } else {
                return 'error: b not be 0';
            }
    }
}
console.log(calculate(0, 0, '/'));