let formula = document.getElementById("displayFormula");
let memoryFormula = document.getElementById("memoryNum");
let passiveNum = Number(0);
let memoryOperator = "";
let changeTo_0 = false;
/**
 * 押した数字を画面に表示します。
 * 
 * @param {int} num 押した数字
 */
function display_num(num) {
    if(changeTo_0 || '0' === formula.textContent){
        //条件式の後半部は、数値入力したあと全て削除して0になったときに備えている
        formula.textContent = num;
        changeTo_0 = false;
        if(memoryFormula.textContent.includes('=')){
            passiveNum = Number(0);
            memoryOperator = "";
            memoryFormula.textContent = "";
        }  
        return;
    }

    formula.textContent += num;
}

/**
 * 演算子を表示します。
 * @param {String} operator 演算子 
 */
function display_operator(operator){

    if(changeTo_0){
        //0に変えるフラグが立っているとき。演算子を連続で入力したとき。
        memoryFormula.textContent = formula.textContent + String(operator);
        memoryOperator = String(operator);
        return;
    }
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
    memoryFormula.textContent = formula.textContent + String(operator);
    memoryOperator = String(operator);
    passiveNum = Number(formula.textContent);
    changeTo_0 = true;
}

/**
 * 小数点を表示します。
 * 
 * @param {String} point 小数点
 */
function display_point(point){
    if(changeTo_0){
        //演算子を入力して最初に小数点を入力したとき、「0.」を表示する。
        formula.textContent = Number(0) + point; 
        if(memoryFormula.textContent.includes('=')){
            //「=」押下後、「.」を押したとき初期化する。
            passiveNum = Number(0);
            memoryOperator = "";
            memoryFormula.textContent = "";
        }   
        changeTo_0 = false;
        return;  
    }
    if(formula.textContent.includes(point)){
        /*小数点がすでに含まれている場合、小数点をつけない*/
        return;
    }
    
    formula.textContent += point;
}