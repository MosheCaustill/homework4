let num1;
let num2;
let result;
let action="calc action"
num1 = (prompt(`אנא הזן מספר`));
if (Number(num1) == num1) {
    num1=Number(num1);
    num2 = (prompt(`אנא הזן מספר`));
    if (Number(num2) == num2) {
        num2=Number(num2);
        action = prompt(`אנא בחר פעולה *,/,+,-`);
        if (action == `*`) {
            result=num1*num2;
        } else if (action == `/`) {
            if (num2==0) {
                result=`divide eror`;
            } else {
                result=num1/num2;
            }
        } else if (action == `+`) {
            result=num1+num2;
        } else if (action == `-`) {
            result=num1-num2;
        } else {
            result=`Invalid Operator`
        }
        alert(String(num1)+action+String(num2)+`=`+String(result));
    } else {
        alert(`Type Error`)
        num2=`Type Error`;
    }
} else {
    alert(`Type Error`)
    num1=`Type Error`;
}
