function AnswerToEqual(){
    memoryFormula = document.getElementById("memoryNum");
    if(memoryFormula.textContent.endsWith('=')){
        return;
    }
    else{
        memoryFormula.textContent = memoryFormula.textContent + formula.textContent + '=';
    }
    formula = document.getElementById("displayFormula");
    //記憶してる演算子があるとき、答えを計算式に表示する。
    switch(memoryOperator){
        case '+':
            formula.textContent = String(passiveNum + Number(formula.textContent));
            break;
        case '-':
            formula.textContent = String(passiveNum - Number(formula.textContent));
            break;
        case '*':
            formula.textContent = String(passiveNum * Number(formula.textContent));
            break;
        case '÷':
            formula.textContent = String(passiveNum / Number(formula.textContent));
            break;
        case '%':
            formula.textContent = String(passiveNum % Number(formula.textContent));
            break;
        default:    
    }
    passiveNum = Number(formula.textContent);
    changeTo_0 = true;
}