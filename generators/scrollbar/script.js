let styles;

let resultStyleElement;
let resultCodeElement;

window.onload = function () {
    resultStyleElement = document.getElementById("resultStyle");
    resultCodeElement = document.getElementById("resultCode");


    style = new Style([
        new Property("thumb-color", {
            type: "color"
        }, [
            {
                browsers: ["chrome", "edge", "opera"],
                elementPrefix: "::-webkit-scrollbar-thumb",
                propertyName: "background-color",
                propertyValueAssign: 0,
                translation: function(val){
                    return val;
                }
            },
            {
                browsers: ["firefox"],
                elementPrefix: "",
                propertyName: "background-color",
                propertyValueAssign: 0,
                translation: function(val){
                    return val;
                }
            }
        ]),
        new Property("track-color", {
            type: "color"
        }, [
            {
                browsers: ["chrome", "edge", "opera"],
                elementPrefix: "::-webkit-scrollbar",
                propertyName: "background-color",
                propertyValueAssign: 0,
                translation: function(val){
                    return val;
                }
            },
            {
                browsers: ["firefox"],
                elementPrefix: "",
                propertyName: "background-color",
                propertyValueAssign: 1,
                translation: function(val){
                    return val;
                }
            }
        ]),
        new Property("thumb-radius", {
            type: "range",
            min: 0,
            max: 25
        }, [
            {
                browsers: ["chrome", "edge", "opera"],
                elementPrefix: "::-webkit-scrollbar-thumb",
                propertyName: "border-radius",
                propertyValueAssign: 0,
                translation: function(val){
                    return val + "px";
                }
            }
        ]),
        new Property("track-radius", {
            type: "range",
            min: 0,
            max: 25
        }, [
            {
                browsers: ["chrome", "edge", "opera"],
                elementPrefix: "::-webkit-scrollbar",
                propertyName: "border-radius",
                propertyValueAssign: 0,
                translation: function(val){
                    return val + "px";
                }
            }
        ]),
        new Property("thumb-width", {
            type: "range",
            min: 0,
            max: 25
        }, [
            {
                browsers: ["chrome", "edge", "opera"],
                elementPrefix: "::-webkit-scrollbar-thumb",
                propertyName: "border-radius",
                propertyValueAssign: 0,
                translation: function(val){
                    return val + "px";
                }
            }
        ]),
        new Property("track-width", {
            type: "range",
            min: 0,
            max: 25
        }, [
            {
                browsers: ["chrome", "edge", "opera"],
                elementPrefix: "::-webkit-scrollbar",
                propertyName: "border-radius",
                propertyValueAssign: 0,
                translation: function(val){
                    return val + "px";
                }
            },
            {
                browsers: ["firefox"],
                elementPrefix: "",
                propertyName: "scrollbar-width",
                propertyValueAssign: 0,
                translation: function(val){
                    if(parseInt(val) === 0){
                        return "none";
                    }else if(parseInt(val) < 15){
                        return "thin";
                    }else{
                        return "auto";
                    }
                }
            }
        ]),
    ]);

    document.getElementById("inputs").appendChild(style.createForm(["chrome"]));

    loop();
}

function loop() {
    let code = style.getResultCode();
    if (resultStyleElement.innerHTML !== code) {
        resultStyleElement.innerHTML = code;
        resultCodeElement.innerText = code;
    }

    //requestAnimationFrame(loop);
}


function copyCodeToClipboard() {
    document.getElementById("resultCode").select();
    document.execCommand("copy");
}