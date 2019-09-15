
main = document.getElementById("main")


let start = (point)=> {
    console.log("start", point.clientX, point.clientY);
}

let move = (point)=> {
    console.log("move", point.clientX, point.clientY);
}

let end = (point)=> {
    console.log("end ", point.clientX, point.clientY);
}


let mousedown = event => {
    document.addEventListener("mousemove", mousemove);
    document.addEventListener("mouseup", mouseup);
    start(event);
}


let mousemove = event => {
    move(event);
}

let mouseup= event => {
    document.removeEventListener("mousemove", mousemove);
    document.removeEventListener("mouseup", mouseup);
    end(event);
}

main.addEventListener("mousedown", mousedown);


// touch


let touchstart = event => {
    for(let touch of event.changedTouches) {
        start(touch);
    }
}


let touchmove = event => {
    for(let touch of event.changedTouches) {
        move(touch);
    }
}

let touchend= event => {
    for(let touch of event.changedTouches) {
        end(touch);
    }
}

let touchcancel= event => {
    for(let touch of event.changedTouches) {
        canel(touch);
    }
}

main.addEventListener("touchstart", touchstart);
main.addEventListener("touchmove", touchmove);
main.addEventListener("touchend", touchend);
main.addEventListener("touchcancel", touchcancel);



