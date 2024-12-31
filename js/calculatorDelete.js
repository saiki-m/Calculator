/**
 * ACボタンを押したとき、計算式を初期表示に戻します。
 */
function clearFormula() {
    let formula = document.getElementById("displayFormula");
    let memoryFormula = document.getElementById("memoryNum");
    formula.textContent = String(0);
    passiveNum = Number(0);
    memoryOperator = "";
    memoryFormula.textContent = "";
    let changeTo_0 = false;
}

/**
 * ×ボタンを押したとき、最後に入力した数値や、小数点、または符号を消します。
 */
function deleteLastChar() {
    let formula = document.getElementById("displayFormula");
    if(formula.textContent.length == 1){
        //数値が1桁のとき、0にする。
        formula.textContent = String(0);
        return;
    }
    //計算式の入力数が2以上であれば、最後尾1文字を削除。
    formula.textContent = formula.textContent.slice(0, (formula.textContent.length - 1));
}