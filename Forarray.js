var delta=["Vijay","Uma","Geetha","Manoj","Pavithra"]


var inserting=()=>
{
    const tmp=document.getElementById("users")
    delta.push(tmp.value)
    alert("pushed"+tmp.value)
}

let view=()=>
{
    delta.map((data)=>
    {
        document.writeln(data)
    })
}