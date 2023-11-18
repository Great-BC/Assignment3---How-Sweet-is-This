$(document).ready(function(){
    $("#header").load("header.html");
    $("#footer").load("footer.html");

    $("#search").hover(function(){
        $(this).css("width", "250px");
        $("#searchText").css("display", "flex");
    }, function(){
        $(this).css("width", "50px")
    });




    $("#main6-btn1").click(function(){
        $("#buttonsWrapper1").css("height", "40vh")
        $("#buttonsWrapper1").css("margin-top", "0px")
        $("#buttonsWrapper1").css("background-image", "url(../Images/Nutritional1.png)")
        $("#buttonsWrapper1").css("background-size", "contain")
        $("#buttonsWrapper1").css("align-items", "first baseline")
        $("#buttonsWrapper1").css("align-items", "first baseline")
    });

    $("#main6-btn2").click(function(){
        $("#buttonsWrapper2").css("height", "40vh")
        $("#buttonsWrapper2").css("margin-top", "0px")
        $("#buttonsWrapper2").css("background-image", "url(../Images/Nutritional1.png)")
        $("#buttonsWrapper2").css("background-size", "contain")
        $("#buttonsWrapper2").css("align-items", "first baseline")
        $("#buttonsWrapper2").css("align-items", "first baseline")
    });

    $("#main6-btn3").click(function(){
        $("#buttonsWrapper3").css("height", "40vh")
        $("#buttonsWrapper3").css("margin-top", "0px")
        $("#buttonsWrapper3").css("background-image", "url(../Images/Nutritional1.png)")
        $("#buttonsWrapper3").css("background-size", "contain")
        $("#buttonsWrapper3").css("align-items", "first baseline")
        $("#buttonsWrapper3").css("align-items", "first baseline")
    });

    $("#main6-btn4").click(function(){
        $("#buttonsWrapper4").css("height", "40vh")
        $("#buttonsWrapper4").css("margin-top", "0px")
        $("#buttonsWrapper4").css("background-image", "url(../Images/Nutritional1.png)")
        $("#buttonsWrapper4").css("background-size", "contain")
        $("#buttonsWrapper4").css("align-items", "first baseline")
        $("#buttonsWrapper4").css("align-items", "first baseline")
    });
  
});