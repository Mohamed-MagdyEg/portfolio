$(document).ready(function(){
    switch_btn = document.getElementById("switch");
    switch_btn.onclick = function () {  
        if(switch_btn.firstElementChild.classList.contains("fa-sun-o")){
            switch_btn.firstElementChild.classList.remove("fa-sun-o");
            switch_btn.firstElementChild.classList.add("fa-moon-o");
            $(".name,.details,.intro,.front,.git span,.gmail span,.parag,.int,.detail,.skill,.skill2,#arrowdown,#arrowright,.detskill,#arrowdown2,#arrowdown3,#arrowright2,#arrowright3,.number,.skillname,.exper,.leftexper div:nth-child(1),.detexper,.proj,.alignport,.alignport2,.nameproj,.rightexper div:nth-child(1),.fa fa-code").addClass("dark");
            $("body").addClass("bdark");
           $(".leftexper").addClass("leftexperJs")
            
        }
        else{
            switch_btn.firstElementChild.classList.add("fa-sun-o");
            switch_btn.firstElementChild.classList.remove("fa-moon-o");
            $(".name,.details,.intro,.front,.git span,.gmail span,.parag,.int,.detail,.skill,.skill2,#arrowdown,#arrowright,.detskill,#arrowdown2,#arrowdown3,#arrowright2,#arrowright3,.number,.skillname,.exper,.leftexper div:nth-child(1),.detexper,.proj,.alignport,.alignport2,.nameproj,.rightexper div:nth-child(1),.fa fa-code").removeClass("dark");
            $("body").removeClass("bdark");
            $(".leftexper").removeClass("leftexperJs")
        }

    }
    $("#hometop").click(function(){
        $("html,body").animate({
            scrollTop:$("#home").offset().top
        },1000);
    });
    $("#abouttop").click(function(){
        $("html,body").animate({
            scrollTop:$("#about").offset().top
        },1000);
    });
    $("#skillstop").click(function(){
        $("html,body").animate({
            scrollTop:$("#skills").offset().top
        },1000);
    });
    $("#expertop").click(function(){
        $("html,body").animate({
            scrollTop:$("#exper").offset().top
        },1000);
    });
    $("#porttop").click(function(){
        $("html,body").animate({
            scrollTop:$("#port").offset().top
        },1000);
    });
    window.addEventListener("scroll", function(){
        var home = document.querySelector("top");
        home.classList.toggle("sticky",window.scrollY > 30); 
    })
$("#orange").click(function(){
    window.open("https://mohamed-magdyeg.github.io/orange-site-demo/")
  })
  $("#car").click(function(){
    window.open("https://mohamed-magdyeg.github.io/car-showroom/project/home.html")
  })
  $("#facebook").click(function(){
    window.open("https://mohamed-magdyeg.github.io/facebook/facebook.html")
  })
  $("#demodesign").click(function(){
    window.open("https://mohamed-magdyeg.github.io/demo-designs/nike.html")
  })
  $("#org").click(function(){
    window.open("https://mohamed-magdyeg.github.io/orange-site-demo/")
  })
  $("#room").click(function(){
    window.open("https://mohamed-magdyeg.github.io/car-showroom/project/home.html")
  })
  $("#face").click(function(){
    window.open("https://mohamed-magdyeg.github.io/facebook/facebook.html")
  })
  $("#detskill").click(function(){
      $(".allcircle").slideToggle(700);
      $("#arrowright").toggle();
      $("#arrowdown").toggle();
  })
  $("#detskill2").click(function(){
    $(".allcircle2").slideToggle(700);
    $("#arrowright2").toggle();
    $("#arrowdown2").toggle();
})
$("#detskill3").click(function(){
    $("#allcircle3").slideToggle(700);
    $("#arrowright3").toggle();
    $("#arrowdown3").toggle();
    
})
})