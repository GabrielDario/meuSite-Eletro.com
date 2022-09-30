function slide0() {
    

    document.getElementById('foto4').style.display = "inline-block";
    document.getElementById('foto41').style.display = "none";
    
    document.getElementById('foto1').style.display = "none";
    document.getElementById('foto12').style.display = "inline-block";
    
    

    document.getElementById('slide').src = "resource/layout/slide1.png";
    setTimeout("slide1()", 5000);
}

function slide1() {
    
    document.getElementById('slide').src = "resource/layout/slide2.png";
    document.getElementById('foto12').style.display = "none";
    document.getElementById('foto1').style.display = "inline-block";
    document.getElementById('foto21').style.display = "inline-block";
    document.getElementById('foto2').style.display = "none";
    setTimeout("slide2()", 5000);
}

function slide2() {
    document.getElementById('slide').src = "resource/layout/slide3.png";
    document.getElementById('foto21').style.display = "none";
    document.getElementById('foto2').style.display = "inline-block";
    document.getElementById('foto3').style.display = "none";
    document.getElementById('foto31').style.display = "inline-block";
    setTimeout("slide3()", 5000);
}

function slide3() {
     document.getElementById('slide').src = "resource/layout/slide4.png";
    document.getElementById('foto31').style.display = "none";
    document.getElementById('foto3').style.display = "inline-block";
    document.getElementById('foto4').style.display = "none";
    document.getElementById('foto41').style.display = "inline-block";
    setTimeout("slide0()", 5000);
}
