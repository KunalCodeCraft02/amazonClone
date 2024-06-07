
// Project No 1

// let buld = document.querySelector("#bulb")
// let btn = document.querySelector("button")

// let flag = 0
// btn.addEventListener("click",function(){
//     if(flag==0){
//     buld.style.backgroundColor = "yellow";
//     console.log("Bulb On")
//     flag = 1
//     }
//     else{
//         buld.style.backgroundColor = "transparent";
//         console.log("Bulb Off")
//         flag = 0
//     }
// })


// Practice

// let a = document.querySelector("h1")
// a.innerHTML = "<h3>Update</h3>"
// a.style.color = "red"
// a.style.backgroundColor = "black"
// a.innerText = "hello"


// let b = document.querySelector("h1")
// b.innerHTML = "Welcome To Our Website"
// b.style.backgroundColor = "black"
// b.style.color = "yellow"


// Project 2

// var istatus = document.querySelector("h5")

// var addlang = document.querySelector("#add")

// var removelang = document.querySelector("#remove")


// addlang.addEventListener("click",function(){
//     istatus.innerHTML = "Language Added"
//     istatus.style.color = "green"

// })
// removelang.addEventListener("click",function(){
//     istatus.innerHTML = "Removed"
//     istatus.style.color = "red"

// })




// var istatus = document.querySelector("h5")

// var addlang = document.querySelector("#add")

// check = 0


// addlang.addEventListener("click",function(){
//     if(check==0){
//     istatus.innerHTML = "Language Added"
//     istatus.style.color = "green"
//     check = 1
//     }
//     else{
//         istatus.innerHTML = "Removed"
//         istatus.style.color = "red"
//         check = 0
//     }


// })


// Project No 3


// var con = document.querySelector("#container")
// var love = document.querySelector("i")

// con.addEventListener("dblclick",function(){
//     love.style.transform ='translate(-50%,-50%) scale(1)'
//     love.style.opacity = 0.8

//     setTimeout(function(){
//         love.style.transform ='translate(-50%,-50%) scale(0)'
//     },1000)
// })


//Project No 4


// var main = document.querySelector("#main")

// var crsr = document.querySelector(".cursor")

// main.addEventListener("mousemove",function(dets){
//     crsr.style.left = dets.x+"px"
//     crsr.style.left = dets.x+"px"
     

// })

// Project 5

var arr = [
    {
        dp:"https://media.istockphoto.com/id/1413770986/photo/digital-tablet-white-screen-mockup-on-modern-white-table-top-view-workspace.webp?b=1&s=170667a&w=0&k=20&c=xYwO2Eg9jycrmTEG6UHbtn_Skb8e5tBKRfpr4VGJ_A4=",story:"https://images.unsplash.com/photo-1513379733131-47fc74b45fc7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsfGVufDB8fDB8fHww"
    },
    {
        dp:"https://images.unsplash.com/photo-1695760676457-03fe7b0f8024?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1488161628813-04466f872be2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsfGVufDB8fDB8fHww"
    }
]

var storiyan = document.querySelector("#storiyan")

clutter = ""

arr.forEach(function(elem,ixid){
    clutter +=  `<div id="${ixid}" class="story">
    <img src="${elem.dp}" alt="">
   </div>`

})
console.log(clutter)

storiyan.innerHTML = clutter

storiyan.addEventListener("click",function(dets){
    console.log(arr[dets.target].story)
})





