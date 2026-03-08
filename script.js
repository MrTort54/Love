secondClicked = false;
thirdClicked = false;
forthClicked = false;
fifthClicked = false;

document.getElementById("nav_btn1").style.opacity = "1";
document.getElementById("nav_btn2").style.opacity = "1";

function DoSmall(target){
    for (let i = 1; i <= 6; i++) {
        if (i == target) {
            document.getElementById("nav_btn" + i).style.width = "45px";
            document.getElementById("nav_btn" + i).style.height = "45px";
        } else {
            document.getElementById("nav_btn" + i).style.width = "40px";
            document.getElementById("nav_btn" + i).style.height = "40px";
        }
        }
}

document.getElementById("nav_btn1").onclick = () => {
    document.getElementById("page1").scrollIntoView({ behavior: "smooth" });
    DoSmall(1);
}

document.getElementById("nav_btn2").onclick = () => {
    document.getElementById("page2").scrollIntoView({ behavior: "smooth" });
    secondClicked = true
    document.getElementById("nav_btn3").style.opacity = "1";
    DoSmall(2);
}

document.getElementById("nav_btn3").onclick = () => {
    if (secondClicked) {
        document.getElementById("page3").scrollIntoView({ behavior: "smooth" });
        thirdClicked = true
        document.getElementById("nav_btn4").style.opacity = "1";
        DoSmall(3);
    }
}

document.getElementById("nav_btn4").onclick = () => {
    if (thirdClicked) {
        document.getElementById("page4").scrollIntoView({ behavior: "smooth" });
        forthClicked = true
        document.getElementById("nav_btn5").style.opacity = "1";
        DoSmall(4);
    }
    
}

document.getElementById("nav_btn5").onclick = () => {
    if (forthClicked) {
        document.getElementById("page5").scrollIntoView({ behavior: "smooth" });
        fifthClicked = true
        document.getElementById("nav_btn6").style.opacity = "1";
        DoSmall(5);
    }
    
}


document.getElementById("nav_btn6").onclick = () => {
    if (fifthClicked) {
        document.getElementById("page6").scrollIntoView({ behavior: "smooth" });
        DoSmall(6);
    }
    
}

DoSmall(1)