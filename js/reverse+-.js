/**
 * +/-ボタンを押したとき、数値の正負を反転します。
 */
function reverseFormula() {
    let formula = document.getElementById("displayFormula");
    if(changeTo_0){
        //演算子を入力して最初に+/-を入力したとき、0に変えない。
        changeTo_0 = false;  
    }
    formula.textContent = -Number(formula.textContent);
}