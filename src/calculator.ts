class calculator {
    add(a:number, b:number):number{
        return a+b;
    }
    subtract(a:number, b:number):number{
        return a-b;
    }
    multiply(a:number, b:number):number{
        return a*b;
    }
    divide(a:number, b:number):number{
        if ( b==0 ){
            throw new Error('Number not divisible by zero');
        }
        return a/b;
    }
}

export default calculator;