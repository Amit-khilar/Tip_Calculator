btn=document.querySelector("button")
inp1=document.getElementById("bill")
inp2=document.getElementById("tip")
tot=document.getElementById("total")

btn.addEventListener("click",()=>{
 
    billval=inp1.value
    tipval=inp2.value
    totval=billval*(1+tipval/100)
    tot.innerText=`Total: ${totval}`

    if(isNaN(billval)||isNaN(tipval) || billval<0 || tipval<0){
        alert("invalid input! please enter a valid amount")
      
        inp1.value=""
        inp2.value=""
        tot.innerText=`Total:`
    }
})





