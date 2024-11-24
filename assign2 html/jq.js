$(window).on("scroll",function(){
    if($(this).scrollTop() >100){
        $("header").addClass("scrolledHeader");
    }else{
        $("header").removeClass("scolledHeader");
    
    }
    })
    //Slide Right 
    function slideRight(){
        var reveals = document.querySelectorAll(".slide-right");
        for(var i=0;i<reveals.length;i++){
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible =100;
            if(elementTop<windowHeight-elementVisible){
                reveals[i].classList.add("active");
    
            }else{
                reveals[i].classList.remove("active");
            }
        }
    }