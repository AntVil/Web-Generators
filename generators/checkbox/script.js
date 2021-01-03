let styles;

let resultStyleElement;
let resultCodeElement;

window.onload = function () {
    resultStyleElement = document.getElementById("resultStyle");
    resultCodeElement = document.getElementById("resultCode");

    style = new Style([
        new Property("", {
            type: "constant",
        }, [
            {
                browsers: ["chrome", "edge", "opera", "firefox"],
                elementPrefix: ".result+label",
                propertyName: "cursor",
                propertyValueAssign: 0,
                translation: function(val){
                    return "pointer";
                }
            }
        ]),
        new Property("", {
            type: "constant",
        }, [
            {
                browsers: ["chrome", "edge", "opera", "firefox"],
                elementPrefix: ".result+label",
                propertyName: "position",
                propertyValueAssign: 0,
                translation: function(val){
                    return "relative";
                }
            }
        ]),
        new Property("", {
            type: "constant",
        }, [
            {
                browsers: ["chrome", "edge", "opera", "firefox"],
                elementPrefix: ".result+label",
                propertyName: "display",
                propertyValueAssign: 0,
                translation: function(val){
                    return "inline-flex";
                }
            }
        ]),
        new Property("", {
            type: "constant",
        }, [
            {
                browsers: ["chrome", "edge", "opera", "firefox"],
                elementPrefix: ".result+label:after",
                propertyName: "position",
                propertyValueAssign: 0,
                translation: function(val){
                    return "absolute";
                }
            }
        ]),
        new Property("", {
            type: "constant",
        }, [
            {
                browsers: ["chrome", "edge", "opera", "firefox"],
                elementPrefix: ".result+label:before",
                propertyName: "display",
                propertyValueAssign: 0,
                translation: function(val){
                    return "inline-block";
                }
            }
        ]),
        new Property("", {
            type: "constant",
        }, [
            {
                browsers: ["chrome", "edge", "opera", "firefox"],
                elementPrefix: ".result+label:after",
                propertyName: "display",
                propertyValueAssign: 0,
                translation: function(val){
                    return "inline-block";
                }
            }
        ]),
        new Property("", {
            type: "constant",
        }, [
            {
                browsers: ["chrome", "edge", "opera", "firefox"],
                elementPrefix: ".result+label:after",
                propertyName: "content",
                propertyValueAssign: 0,
                translation: function(val){
                    return "\"\"";
                }
            }
        ]),
        new Property("", {
            type: "constant",
        }, [
            {
                browsers: ["chrome", "edge", "opera", "firefox"],
                elementPrefix: ".result+label:before",
                propertyName: "content",
                propertyValueAssign: 0,
                translation: function(val){
                    return "\"\"";
                }
            }
        ]),
        new Property("", {
            type: "constant",
        }, [
            {
                browsers: ["chrome", "edge", "opera", "firefox"],
                elementPrefix: ".result:checked+label:after",
                propertyName: "border-style",
                propertyValueAssign: 0,
                translation: function(val){
                    return "solid";
                }
            }
        ]),
        new Property("", {
            type: "constant",
        }, [
            {
                browsers: ["chrome", "edge", "opera", "firefox"],
                elementPrefix: ".result+label:before",
                propertyName: "border-style",
                propertyValueAssign: 0,
                translation: function(val){
                    return "solid";
                }
            }
        ]),
        new Property("", {
            type: "constant"
        }, [
            {
                browsers: ["chrome", "edge", "opera", "firefox"],
                elementPrefix: ".result",
                propertyName: "visibility",
                propertyValueAssign: 0,
                translation: function(val){
                    return "hidden";
                }
            }
        ]),
        new Property("", {
            type: "constant"
        }, [
            {
                browsers: ["chrome", "edge", "opera", "firefox"],
                elementPrefix: ".result",
                propertyName: "width",
                propertyValueAssign: 0,
                translation: function(val){
                    return "0";
                }
            }
        ]),
        new Property("", {
            type: "constant"
        }, [
            {
                browsers: ["chrome", "edge", "opera", "firefox"],
                elementPrefix: ".result",
                propertyName: "height",
                propertyValueAssign: 0,
                translation: function(val){
                    return "0";
                }
            }
        ]),
        new Property("check-color", {
            type: "color"
        }, [
            {
                browsers: ["chrome", "edge", "opera", "firefox"],
                elementPrefix: ".result:checked+label:after",
                propertyName: "background-color",
                propertyValueAssign: 0,
                translation: function(val){
                    return val;
                }
            }
        ]),
        new Property("box-color", {
            type: "color"
        }, [
            {
                browsers: ["chrome", "edge", "opera", "firefox"],
                elementPrefix: ".result+label:before",
                propertyName: "background-color",
                propertyValueAssign: 0,
                translation: function(val){
                    return val;
                }
            }
        ]),
        new Property("check-border-color", {
            type: "color"
        }, [
            {
                browsers: ["chrome", "edge", "opera", "firefox"],
                elementPrefix: ".result:checked+label:after",
                propertyName: "border-color",
                propertyValueAssign: 0,
                translation: function(val){
                    return val;
                }
            }
        ]),
        new Property("box-border-color", {
            type: "color"
        }, [
            {
                browsers: ["chrome", "edge", "opera", "firefox"],
                elementPrefix: ".result+label:before",
                propertyName: "border-color",
                propertyValueAssign: 0,
                translation: function(val){
                    return val;
                }
            }
        ]),
        new Property("ckeck-disabled-gray", {
            type: "range",
            min: 0,
            max: 100
        }, [
            {
                browsers: ["chrome", "edge", "opera", "firefox"],
                elementPrefix: ".result:disabled+label:after",
                propertyName: "filter",
                propertyValueAssign: 0,
                translation: function(val){
                    return "grayscale("+ val + "%)";
                }
            }
        ]),
        new Property("box-disabled-gray", {
            type: "range",
            min: 0,
            max: 100
        }, [
            {
                browsers: ["chrome", "edge", "opera", "firefox"],
                elementPrefix: ".result:disabled+label:before",
                propertyName: "filter",
                propertyValueAssign: 0,
                translation: function(val){
                    return "grayscale("+ val + "%)";
                }
            }
        ]),
        new Property("check-radius", {
            type: "range",
            min: 0,
            max: 25
        }, [
            {
                browsers: ["chrome", "edge", "opera", "firefox"],
                elementPrefix: ".result:checked+label:after",
                propertyName: "border-radius",
                propertyValueAssign: 0,
                translation: function(val){
                    return val + "px";
                }
            }
        ]),
        new Property("box-radius", {
            type: "range",
            min: 0,
            max: 25
        }, [
            {
                browsers: ["chrome", "edge", "opera", "firefox"],
                elementPrefix: ".result+label:before",
                propertyName: "border-radius",
                propertyValueAssign: 0,
                translation: function(val){
                    return val + "px";
                }
            }
        ]),
        new Property("check-border-width", {
            type: "range",
            min: 0,
            max: 25
        }, [
            {
                browsers: ["chrome", "edge", "opera", "firefox"],
                elementPrefix: ".result:checked+label:after",
                propertyName: "border-width",
                propertyValueAssign: 0,
                translation: function(val){
                    return val + "px";
                }
            }
        ]),
        new Property("box-border-width", {
            type: "range",
            min: 0,
            max: 25
        }, [
            {
                browsers: ["chrome", "edge", "opera", "firefox"],
                elementPrefix: ".result+label:before",
                propertyName: "border-width",
                propertyValueAssign: 0,
                translation: function(val){
                    return val + "px";
                }
            }
        ]),
        new Property("check-width", {
            type: "range",
            min: 0,
            max: 25
        }, [
            {
                browsers: ["chrome", "edge", "opera", "firefox"],
                elementPrefix: ".result:checked+label:after",
                propertyName: "width",
                propertyValueAssign: 0,
                translation: function(val){
                    return val + "px";
                }
            }
        ]),
        new Property("box-width", {
            type: "range",
            min: 0,
            max: 25
        }, [
            {
                browsers: ["chrome", "edge", "opera", "firefox"],
                elementPrefix: ".result+label:before",
                propertyName: "width",
                propertyValueAssign: 0,
                translation: function(val){
                    return val + "px";
                }
            }
        ]),
        new Property("check-height", {
            type: "range",
            min: 0,
            max: 25
        }, [
            {
                browsers: ["chrome", "edge", "opera", "firefox"],
                elementPrefix: ".result:checked+label:after",
                propertyName: "height",
                propertyValueAssign: 0,
                translation: function(val){
                    return val + "px";
                }
            }
        ]),
        new Property("box-height", {
            type: "range",
            min: 0,
            max: 25
        }, [
            {
                browsers: ["chrome", "edge", "opera", "firefox"],
                elementPrefix: ".result+label:before",
                propertyName: "height",
                propertyValueAssign: 0,
                translation: function(val){
                    return val + "px";
                }
            }
        ]),
        new Property("line-height", {
            type: "range",
            min: 0,
            max: 120
        }, [
            {
                browsers: ["chrome", "edge", "opera", "firefox"],
                elementPrefix: ".result+label",
                propertyName: "line-height",
                propertyValueAssign: 0,
                translation: function(val){
                    return val + "px";
                }
            }
        ]),
        new Property("", {
            type: "calculation",
            properties: ["box-border-width", "box-height", "check-border-width", "check-height"]
        }, [
            {
                browsers: ["chrome", "edge", "opera", "firefox"],
                elementPrefix: ".result+label:after",
                propertyName: "margin-top",
                propertyValueAssign: 0,
                translation: function(boxBorderWidth, boxHeight, checkBorderWidth, checkHeight){
                    return (parseInt(boxHeight) / 2) - (parseInt(checkHeight) / 2) + parseInt(boxBorderWidth) - parseInt(checkBorderWidth) + "px";
                }
            }
        ]),
        new Property("", {
            type: "calculation",
            properties: ["box-border-width", "box-width", "check-border-width", "check-width"]
        }, [
            {
                browsers: ["chrome", "edge", "opera", "firefox"],
                elementPrefix: ".result+label:after",
                propertyName: "margin-left",
                propertyValueAssign: 0,
                translation: function(boxBorderWidth, boxWidth, checkBorderWidth, checkWidth){
                    return (parseInt(boxWidth) / 2) - (parseInt(checkWidth) / 2) + parseInt(boxBorderWidth) - parseInt(checkBorderWidth) + "px";
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
