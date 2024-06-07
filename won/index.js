var isstatus = document.querySelector("h2")

var addlang = document.querySelector("#button")

flag = 0

addlang.addEventListener("click",function(){
    if(flag==0){
        isstatus.innerHTML = "Addded"
        isstatus.style.color = "green"
        addlang.innerHTML = "Added"
        flag = 1
    }
    else{
        isstatus.innerHTML = "Removed"
        isstatus.style.color = "red"
        addlang.innerHTML = "Add"
        flag = 0
    }

})