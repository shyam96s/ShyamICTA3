function read(){
    var name=document.getElementById("getname").value;
    console.log(name)
    var Rollno=document.getElementById("getRollno").value;
    console.log(Rollno)
    var Admno=document.getElementById("getAdmno").value;
    console.log(Admno)
    var Age=document.getElementById("getAge").value;
    if(Age>18)
    {
    console.log("Eligible");
    alert(" u r Elligible");
    }
    else{
        console.log("Not Eligible");
        alert("u r not Eligible");
    }
    var op=document.getElementById("dist");
    var distr=op.options[op.selectedIndex].text;
    console.log(distr);
    var op1=document.getElementById("getMobno");
    console.log(op1);
    }
    function get()
    {
        var op1=document.getElementById("getOperand1").value;
        var op2=document.getElementById("getOperand2").value;
        var op3= parseInt(op1);
        var op4= parseInt(op2);
    
        var c=document.getElementById("Opera");
        var Opera=c.options[c.selectedIndex].text;
        if(Opera=="+")
    {
        var b=op3+op4;
    
    }
    else if(Opera=="-")
    {
        var b=op3-op4;
    }
    else if(Opera=="*")
    {
        var b=op3*op4;
        
    }
    else{
        var b=op3/op4;
       
    
    }
    document.getElementById("resul").innerHTML=b;
}
       function largest()
       {
        var op1=document.getElementById("n1").value;
        var op2=document.getElementById("n2").value;
        var op3=document.getElementById("n3").value;
        var x=parseInt(op1);
        var y=parseInt(op2);
        var z=parseInt(op3);

        if(x>y && x>z)
        {
            var res=x;
        }
        else if(y>x && y>z)
        {
            var res=y;
        }
        else if(z>y && z>x)
        {
            var res=z

        }
        else{
            alert("Error");
        }
        document.getElementById("result").innerHTML="<table class='table'><tr><td>Result is </td><td>"+res+"</td></tr></table>";
    }
        function smallest()
       {
        var op1=document.getElementById("n1").value;
        var op2=document.getElementById("n2").value;
        var op3=document.getElementById("n3").value;
        var x=parseInt(op1);
        var y=parseInt(op2);
        var z=parseInt(op3);

        if(x<y && x<z)
        {
            var r=x;
        }
        else if(y<x && y<z)
        {
            var r=y;
        }
        else if(z<y && z<x)
        {
            var r=z;

        }
        else{
            alert("Error");
        }
        document.getElementById("result1").innerHTML="<table class='table'><tr><td>Result is </td><td>"+r+"<td></tr></table>";
    }
        
    

    
    
        
    
        