
let left = null , right = null , oper = null, res = false; resValue = null;


function save() {
    const inputEl = document.getElementById("top-input");
    let value = "";

    if(left === null) 
        return;

    value += left + " ";
    inputEl.value = value;

    if(oper === null) 
    return;
    value += oper + " ";
    inputEl.value = value;

    if(right === null) 
        return;
    value += right + " ";
    inputEl.value = value;

    if(res) {
        switch(oper) {
            case "+" :  resValue = parseInt(left) + parseInt(right); break;
            case "-" :  resValue = parseInt(left) - parseInt(right); break;
            case "*" :  resValue = parseInt(left) * parseInt(right); break;
            case "/" :  resValue = parseInt(left) / parseInt(right); break;
        }
        value += '= ' + resValue;
        inputEl.value = value;
    }
}
//숫자 넣는 함수
function inputNum(num) {
    if(oper === null){
        if(left === null) {
            left = `${num}`
        } else {
            if(num === 0 && parseInt(left) === 0)
                return;
            left += `${num}`
        }
    } else {
        if(right === null) {
            right = `${num}`
        } else {
            if(num === 0 && parseInt(right) === 0)
                return;
            right += `${num}`
        }
    }
   save();
}



function inputOper(op) {

    if(left === null && op === "-") { 
        left = "-"
        save()
        return;
    }
    if(left === "-" && op === "-") {
        return ;
    }
    if(op === "-" && oper !== null && right === null) {
        right= "-"
        save()
        return;
    }
    oper = op;
    save()
}

function inpurEqual() {

   if(res) {
       left = resValue
       right = null
       resValue = null
       oper = null
       res = null

   } else { 
       res = true
   }
    save()
}