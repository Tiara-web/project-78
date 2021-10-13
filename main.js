var name_of_the_student_array = [];

var display_student_array =[];
function submit()
{
    

for(var j=1; j<5; j++)
{
 var name_of_the_student= document.getElementById("name_of_the_student_"+j).value;
 console.log(name_of_the_student);
 name_of_the_student_array.push(name_of_the_student);


}


for(var k=1; k<5; k++)
{
 display_student_array.push("<h4>NAME-"+name_of_the_student_array[k]+"</h4>"); 
 console.log(display_student_array);
 //name_of_the_student_array.push(name_of_the_student);
document.getElementById("display_name_with_commas").innerHTML=display_student_array;
}
}
