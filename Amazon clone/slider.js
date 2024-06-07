const slides = document.querySelectorAll(".slide")
slides.forEach(
    (slide,index)=>{
        slide.style.left = '$(index * 100)%'
    }

)