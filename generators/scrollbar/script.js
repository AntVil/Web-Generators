window.onload = function(){
    generateScrollbarCSS();
    loop();
}

function loop(){
    generateScrollbarCSS();
    requestAnimationFrame(loop);
}

function generateScrollbarCSS(){
    let width = parseInt(document.getElementById("thumbWidthInput").value);

    /*
    document.getElementById("result").style.width = width + "px";
    */
}

function copyCodeToClipboard(){
    document.getElementById("resultCode").select();
    document.execCommand("copy");
}