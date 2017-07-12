
//  define a Array for to store age of users
var array =[];

//Create a funtion for to insert user age into the Array.
function insert()
{
//    define variable
    var a = document.getElementById("displaybox");
//    using push method we can store user age into the array.
    array.push(document.getElementById("age").value);
//    a.innerHTML = array.join('<br/>');
    console.log('array');
    return array;

}





//Now create function that show average age of the users that they have entered.
 function avg()
{
//    take var av and assign that to main array.
    array.push(document.getElementById("age").value);
   var a = document.getElementById("displaybox");
    var inti = 1;    //default maximum frequency
    var index =0;  //counter
    var av; //to store  age with maximum frequency
     
//    creating two for loops for the find average age of the users
     for( var i=0;i<array.length;i++)
         {
//             take another var j for the second for loop.
             for (j=i; j<array.length;j++)
                 {
                     if (array[i]== array[j])// if element occurs again in the array
                         index++; //increment counter
                     
                     if(inti<index)
                         {
                             inti=index;
                             av = array[i];
                         }
                 }
             index=0;
         }

    console.log(av+" ( " +inti +" is most average of users ) ") ;
      a.innerHTML = ("Age"  +av+ "is most average  age of users "+inti+ "entered" );
}