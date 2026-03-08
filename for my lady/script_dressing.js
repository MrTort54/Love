girl_hair_btn.onclick = () => {
    document.querySelector(".popover").style.display = "flex";
    document.querySelector("#popover_title").textContent = "Hairs";

    setTimeout(() => {
        document.querySelector(".popover").style.opacity = 1;
    }, 100);
    
    str = ''
    for (let i = 1; i <= 6; i++) {
        str += `<img src="./dress_img/girl_hair${i}.png" alt="" class="item" id="girl_hair${i}_choose">`;
    }
    document.querySelector(".wrap_items").innerHTML = str;

}

girl_top_btn.onclick = () => {
    document.querySelector(".popover").style.display = "flex";
    document.querySelector("#popover_title").textContent = "T-Shirts";

    setTimeout(() => {
        document.querySelector(".popover").style.opacity = 1;
    }, 100);

    str = ''
    for (let i = 1; i <= 10; i++) {
        str += `<img src="./dress_img/girl_top${i}.png" alt="" class="item" id="girl_top${i}_choose">`;
    }
    document.querySelector(".wrap_items").innerHTML = str;

}

girl_bott_btn.onclick = () => {
    document.querySelector(".popover").style.display = "flex";
    document.querySelector("#popover_title").textContent = "Pants";

    setTimeout(() => {
        document.querySelector(".popover").style.opacity = 1;
    }, 100);

    str = ''
    for (let i = 1; i <= 5; i++) {
        str += `<img src="./dress_img/girl_bott${i}.png" alt="" class="item" id="girl_bott${i}_choose">`;
    }
    document.querySelector(".wrap_items").innerHTML = str;

}

boy_hair_btn.onclick = () => {
    document.querySelector(".popover").style.display = "flex";
    document.querySelector("#popover_title").textContent = "Hairs";

    setTimeout(() => {
        document.querySelector(".popover").style.opacity = 1;
    }, 100);

    str = ''
    for (let i = 1; i <= 3; i++) {
        str += `<img src="./dress_img/boy_hair${i}.png" alt="" class="item" id="boy_hair${i}_choose">`;
    }
    document.querySelector(".wrap_items").innerHTML = str;

}

boy_top_btn.onclick = () => {
    document.querySelector(".popover").style.display = "flex";
    document.querySelector("#popover_title").textContent = "T-Shirts";

    setTimeout(() => {
        document.querySelector(".popover").style.opacity = 1;
    }, 100);

    str = ''
    for (let i = 1; i <= 7; i++) {
        str += `<img src="./dress_img/boy_top${i}.png" alt="" class="item" id="boy_top${i}_choose">`;
    }
    document.querySelector(".wrap_items").innerHTML = str;

}

boy_bott_btn.onclick = () => {
    document.querySelector(".popover").style.display = "flex";
    document.querySelector("#popover_title").textContent = "Pants";

    setTimeout(() => {
        document.querySelector(".popover").style.opacity = 1;
    }, 100);

    str = ''
    for (let i = 1; i <= 4; i++) {
        str += `<img src="./dress_img/boy_bott${i}.png" alt="" class="item" id="boy_bott${i}_choose">`;
    }
    document.querySelector(".wrap_items").innerHTML = str;

}

function ChangeImg(person, type, number) {
    id = `${person}_${type}`
    document.getElementById(id).src = `./dress_img/${person}_${type}${number}.png`
}

document.querySelector(".wrap_items").addEventListener("click", (e) => {
    if (e.target.classList.contains("item")) {
        const itemId = e.target.id;
        const match = itemId.match(/(\w+)_(\w+)(\d+)/); // Витяг: girl, hair, цифру
        
        if (match) {
            const word1 = match[1]; // "girl"
            const word2 = match[2]; // "hair"
            const number = match[3]; // цифра
            
            ChangeImg(word1, word2, number);
        }
        setTimeout(() => {
            document.querySelector(".popover").style.display = "none";
        }, 1000);
        document.querySelector(".popover").style.opacity = 0;
        

    }
});



start.onclick = () => {
    document.querySelector(".start").style.opacity = 0;
    setTimeout(() => {
        document.querySelector(".start").style.display = "none";
    }, 1000);
}