function fun() {
    var inputVal1 = document.getElementById("text1").value;
    var inputVal2 = document.getElementById("text2").value;
    var res = inputVal1.split(" ");
    var res2 = inputVal2.split(" ");
    var x1 = res.length;
    var x2 = res2.length;
    var result;
    var status;
    var i;
   
        result = "No of words in the first box = "+x1+" </br> No of words in the first box = "+x2;

    document.getElementById("rs").innerHTML = result;
    status = "Exactly same !!";
    for(i = 0;i<=res.length;i++){
         if (res[i] !== res2[i]){
            status = "Its different !!!";
            break;
        }  
    }

//test phase 1
var pos = 0;
var res3 = [];
var res4 = [];
for(i = 0;i<=res.length;i++){
    if (res[i] !== res2[i]){
        res3.push(res2[i]);
       el = "<spane style = 'background-color:red'>"+res2[i]+"</spane>";
       res4.push(el);
       continue;
   }
   res4[i] = res2[i];
}  
//test phase ends here
 var textRes = res4.join(" ");
 document.getElementById("rs").innerHTML = result;
 document.getElementById("rs2").innerHTML = status;
    document.getElementById("resbord").innerHTML = textRes;
 
   
}

