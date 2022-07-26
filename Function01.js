//let,var,const
function fun1()
{
    //let sure=document.getElementsByTagName('thead')
    var tmp=document.getElementById('Details')
    tmp.style.textTransform='uppercase';
    tmp.style.color='red'
}
 let fun2=()=>
 {
    document.writeln('one is normal Function second one is Fat arrow Function')
 }
 function tag()
 {
     let tmp1=document.getElementsByTagName('th')
    for(i=0;i<tmp1.length;i++) //Looping
    {
        tmp1[i].style.backgroundColor='black'
        tmp1[i].style.color='white'
    }
 }


 function hello()
 {
    alert('sample function method')
 }