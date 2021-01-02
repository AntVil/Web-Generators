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
                propertyName: "scrollbar-color",
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
                propertyName: "scrollbar-color",
                propertyValueAssign: 1,
                translation: function(val){
                    return val;
                }
            }
        ]),
        new Property("thumb-radius", {
            type: "range",
            min: 0,
            max: 15
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
            max: 15
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
            min: 15,
            max: 25
        }, [
            {
                browsers: ["chrome", "edge", "opera"],
                elementPrefix: "::-webkit-scrollbar-thumb",
                propertyName: "border",
                propertyValueAssign: 0,
                translation: function(val){
                    return (25 - val) + "px solid transparent";
                }
            }
        ]),
        new Property("", {
            type: "constant",
        }, [
            {
                browsers: ["chrome", "edge", "opera"],
                elementPrefix: "::-webkit-scrollbar-thumb",
                propertyName: "background-clip",
                propertyValueAssign: 0,
                translation: function(val){
                    return "content-box";
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
                propertyName: "width",
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

    updateForm();

    loop();
}

function loop() {
    let code = style.getResultCode();
    if (resultStyleElement.innerHTML !== code) {
        resultStyleElement.innerHTML = code;
        resultCodeElement.value = code.trim();
    }

    requestAnimationFrame(loop);
}


function updateForm(){
    let support = [];
    if(document.getElementById("chromeSupport").checked){
        support.push("chrome");
    }
    if(document.getElementById("edgeSupport").checked){
        support.push("edge");
    }
    if(document.getElementById("firefoxSupport").checked){
        support.push("firefox");
    }
    if(document.getElementById("operaSupport").checked){
        support.push("opera");
    }

    document.getElementById("inputs").innerHTML = "";
    document.getElementById("inputs").appendChild(style.createForm(support));
    style.setRandom();
}

function setRandom(){
    style.setRandom();
}

function copyCodeToClipboard() {
    document.getElementById("resultCode").disabled = false;
    document.getElementById("resultCode").select();
    document.execCommand("copy");
    document.getSelection().removeAllRanges();
    document.getElementById("resultCode").disabled = true;
}
