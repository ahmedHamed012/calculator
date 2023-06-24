let expression = new String();
let powerflag = true;
document.getElementById('status').style.display = "none";
let x = document.getElementsByTagName('button');
for (let index = 3; index < x.length-1; index++) {
    x[index].onclick = function ()
    {
      expression = expression.concat(this.innerHTML);
      document.getElementById('display').innerHTML = expression;
    }    
}
let clr = document.getElementById('Clr');
clr.onclick = function(){
    document.getElementById('display').innerHTML = "";
    expression = "";
}
let result =document.getElementById('result');
result.onclick=function(){
    document.getElementById('display').innerHTML = eval(expression);
}
let del = document.getElementById('del');
del.onclick = function(){
    let new_expression = expression.substring(0,--expression.length);
    expression = new_expression;
    document.getElementById('display').innerHTML = expression;
}
let power = document.getElementById("power");
power.onclick=function(){
    if(powerflag == true)
    {
        power.style.backgroundColor = "red";
        powerflag = false;
        document.getElementById('status').style.display = "block";
        document.getElementById('status').innerHTML = "OFF";
        document.getElementById('display').style.display = "none";
    }
    else
    {
        power.style.backgroundColor = "green";
        powerflag = true;
        document.getElementById('status').style.display = "none";
        document.getElementById('display').style.display = "block";
        document.getElementById('display').innerHTML = "";
        expression = "";
    }
}