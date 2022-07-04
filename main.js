
var Studentarray=[];

function submit()
{

    var name_1 = document.getElementById("name_1").value;
    var name_2 = document.getElementById("name_2").value;
    var name_2 = document.getElementById("name_3").value;
    var name_2 = document.getElementById("name_4").value;

 Studentarray.push(name_1);
 Studentarray.push(name_2);
 Studentarray.push(name_3);
 Studentarray.push(name_4);

 console.log(Studentarray);

 document.getElementById("display_name").innerHTML= Studentarray;
}