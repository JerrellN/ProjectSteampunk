let modal = document.querySelector("#myModal");
let modalImg = document.querySelector(".modalTeamPic")


$(document).ready(function(){

    $(window).scroll(function(){
        $("#aboutBody").css("background", "black");
    })
})
//Need help here ^

function showModalMG()
{
    var x = document.getElementById("myModal");
    var y = document.getElementById("aboutBody");
    document.getElementById("MTP").src = document.getElementById("mikalPic").src;
    

    if (x.style.display === "none")
    {
        x.style.display = "block";
        y.scroll = "no";
        y.style.overflow = hidden;
        
    }
    else
    {
        x.style.display = "none";
        y.scroll = "yes";
        y.scroll.overflow = scroll;
    }
}

function showModalJN()
{
    var x = document.getElementById("myModal");
    var y = document.getElementById("aboutBody");
    document.getElementById("MTP").src = document.getElementById("jerrellPic").src;
    

    if (x.style.display === "none")
    {
        x.style.display = "block";
        y.scroll = "no";
        y.style.overflow = hidden;
        
    }
    else
    {
        x.style.display = "none";
        y.scroll = "yes";
        y.scroll.overflow = scroll;
    }
}

function showModalDD()
{
    var x = document.getElementById("myModal");
    var y = document.getElementById("aboutBody");
    document.getElementById("MTP").src = document.getElementById("dezoPic").src;
    

    if (x.style.display === "none")
    {
        x.style.display = "block";
        y.scroll = "no";
        y.style.overflow = hidden;
        
    }
    else
    {
        x.style.display = "none";
        y.scroll = "yes";
        y.scroll.overflow = scroll;
    }
}

function showModalMM()
{
    var x = document.getElementById("myModal");
    var y = document.getElementById("aboutBody");
    document.getElementById("MTP").src = document.getElementById("tinoPic").src;
    

    if (x.style.display === "none")
    {
        x.style.display = "block";
        y.scroll = "no";
        y.style.overflow = hidden;
        
    }
    else
    {
        x.style.display = "none";
        y.scroll = "yes";
        y.scroll.overflow = scroll;
    }
}

function showModalAB()
{
    var x = document.getElementById("myModal");
    var y = document.getElementById("aboutBody");
    document.getElementById("MTP").src = document.getElementById("antPic").src;
    

    if (x.style.display === "none")
    {
        x.style.display = "block";
        y.scroll = "no";
        y.style.overflow = hidden;
        
    }
    else
    {
        x.style.display = "none";
        y.scroll = "yes";
        y.scroll.overflow = scroll;
    }
}

function showModalAG()
{
    var x = document.getElementById("myModal");
    var y = document.getElementById("aboutBody");
    document.getElementById("MTP").src = document.getElementById("aidanPic").src;
    

    if (x.style.display === "none")
    {
        x.style.display = "block";
        y.scroll = "no";
        y.style.overflow = hidden;
        
    }
    else
    {
        x.style.display = "none";
        y.scroll = "yes";
        y.scroll.overflow = scroll;
    }
}

function showModalEK()
{
    var x = document.getElementById("myModal");
    var y = document.getElementById("aboutBody");
    document.getElementById("MTP").src = document.getElementById("emilyPic").src;
    

    if (x.style.display === "none")
    {
        x.style.display = "block";
        y.scroll = "no";
        y.style.overflow = hidden;
        
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

