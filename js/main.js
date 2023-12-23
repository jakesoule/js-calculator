class Calculator{
    constructor(){
        this.currNum = 0
        this.prevNum = 0
        this.currOperator = ''
        this.numButtons = ['#zero', '#one', '#two', '#three', '#four', '#five', '#six', '#seven', '#eight', '#nine']
        this.operatorButtons = ['#divide', '#multiply', '#plus', '#minus']
        this.mathLogic = {
            '+': function (x, y) { return x + y },
            '/': function (x, y) { return x / y },
            '-': function (x, y) { return x - y },
            '×': function (x, y) { return x * y },
        }
        

        this.initializeEventListeners()
    }

    initializeEventListeners() {
        this.numButtons.forEach((x) => {
            document.querySelector(x).addEventListener('click', (event) => this.typeToScreen(event))
        })
        
        this.operatorButtons.forEach((x) => {
            document.querySelector(x).addEventListener('click', (event) => this.operate(event))
        })

        document.querySelector('#point').addEventListener('click', (event) => this.addDecimal(event))
        document.querySelector('#equals').addEventListener('click', (event) => this.equals(event))
        document.querySelector('#clear').addEventListener('click', (event) => this.clear(event))
    }

    typeToScreen(event){
        if (document.querySelector('.screen').innerText.length <= 13){
            document.querySelector('.screen').innerHTML += event.target.innerHTML
            this.currNum = Number(document.querySelector('.screen').innerHTML)
        }
    }

    operate(event){
        this.prevNum = this.currNum
        this.currNum = 0
        document.querySelector('.screen').innerHTML = ''
    
        this.currOperator = event.target.innerText
    }
    
    addDecimal(event){
        if (document.querySelector('.screen').innerText.length === 0){
            document.querySelector('.screen').innerText += '0.'
        }
    
        else if (!document.querySelector('.screen').innerText.includes('.')){
            document.querySelector('.screen').innerText += '.'
        }
    }
    
    equals(event){
        if (this.currOperator){
            this.currNum = this.mathLogic[this.currOperator](this.prevNum, this.currNum)
            document.querySelector('.screen').innerHTML = this.currNum
            this.prevNum = 0
            this.currOperator = ''
        }
    }
    
    clear(event){
        this.currNum = 0
        this.prevNum = 0
        this.currOperator = ''
        document.querySelector('.screen').innerHTML = ''
    }

}

const calculator = new Calculator()
console.log(6.1.toFixed(3))