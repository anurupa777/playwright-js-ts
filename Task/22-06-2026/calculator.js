class Calculator{

  constructor(num1 , num2){
        this.num1 = num1;
        this.num2 = num2;
    }

    getAddition(num1,num2){
        this.num1=num1
        this.num2=num2
        console.log ("Addition is :" ,num1+num2)
    }

    getSubstraction(num1,num2){
        this.num1=num1
        this.num2=num2
        console.log ("Substraction is :" ,num1-num2)
    }


     getMultiplication(num1,num2){
        this.num1=num1
        this.num2=num2
        console.log ("Addition is :" ,num1*num2)
    }
    getDivison(num1,num2){
        this.num1=num1
        this.num2=num2
        console.log ("Addition is :" ,num1/num2)
    }
    

}
    let result= new Calculator()
    result.getAddition(12,3)
    result.getSubstraction(12,6)
    result.getMultiplication(2,5)
    result.getDivison(8,2)