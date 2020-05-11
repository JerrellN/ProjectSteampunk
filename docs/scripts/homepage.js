let modal = document.querySelector("#myModal");
let modalImg = document.querySelector(".modalTeamPic")


$(document).ready(function(){

    $(window).scroll(function(){
        $("#aboutBody").css("background", "black");
    })
})
//Need help here ^

function showModal(elem)
{
    var x = document.getElementById("myModal");
    var y = document.getElementById("aboutBody")
    if (x.style.display === "none")
    {
        x.style.display = "block";
        y.scroll = "no";
        y.style.overflow = hidden;
        x.setAttribute("src", elem.src)
    }
    else
    {
        x.style.display = "none";
        y.scroll = "yes";
        y.scroll.overflow = scroll;
    }
}

function hideModal()
{
    var x = document.getElementById("myModal");
    if (x.style.display === "block")
    {
        x.style.display = "none";
        y.scroll = "yes";
        y.scroll.overflow = scroll;
    }
    else
    {
        x.style.display = "block";
        y.scroll = "no";
        y.style.overflow = hidden;
    }
}

