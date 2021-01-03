let styles;

let resultStyleElement;
let resultCodeElement;

window.onload = function () {
    resultStyleElement = document.getElementById("resultStyle");
    resultCodeElement = document.getElementById("resultCode");

    style = new Style([
        new Property("", {
            type: "constant"
        }, [
            {
                browsers: ["chrome", "edge", "opera"],
                elementPrefix: ".result",
                propertyName: "background-color",
                propertyValueAssign: 0,
                translation: function(val){
                    return val;
                }
            },
            {
                browsers: ["firefox"],
                elementPrefix: ".result",
                propertyName: "background",
                propertyValueAssign: 0,
                translation: function(val){
                    return "transparent";
                }
            }
        ]),
        new Property("", {
            type: "constant"
        }, [
            {
                browsers: ["chrome", "edge", "opera"],
                elementPrefix: ".result",
                propertyName: "-webkit-appearance",
                propertyValueAssign: 0,
                translation: function(val){
                    return "none";
                }
            }
        ]),
        new Property("", {
            type: "constant"
        }, [
            {
                browsers: ["chrome", "edge", "opera"],
                elementPrefix: ".result::-webkit-slider-thumb",
                propertyName: "-webkit-appearance",
                propertyValueAssign: 0,
                translation: function(val){
                    return "none";
                }
            }
        ]),
        new Property("", {
            type: "constant"
        }, [
            {
                browsers: ["chrome", "edge", "opera"],
                elementPrefix: ".result::-webkit-slider-runnable-track",
                propertyName: "border-style",
                propertyValueAssign: 0,
                translation: function(val){
                    return "solid";
                }
            },
            {
                browsers: ["firefox"],
                elementPrefix: ".result::-moz-range-track",
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
                browsers: ["chrome", "edge", "opera"],
                elementPrefix: ".result::-webkit-slider-thumb",
                propertyName: "border-style",
                propertyValueAssign: 0,
                translation: function(val){
                    return "solid";
                }
            },
            {
                browsers: ["firefox"],
                elementPrefix: ".result::-moz-range-thumb",
                propertyName: "border-style",
                propertyValueAssign: 0,
                translation: function(val){
                    return "solid";
                }
            }
        ]),
        new Property("", {
            type: "calculation",
            properties: ["thumb-border-width", "thumb-height", "track-border-width", "track-height"]
        }, [
            {
                browsers: ["chrome", "edge", "opera"],
                elementPrefix: ".result::-webkit-slider-thumb",
                propertyName: "margin-top",
                propertyValueAssign: 0,
                translation: function(thumbBorderWidth, thumbHeight, trackBorderWidth, trackHeight){
                    if(trackBorderWidth > trackHeight / 2){
                        if(thumbBorderWidth > thumbHeight / 2){
                            return ((trackHeight - thumbHeight) / 2 - trackBorderWidth + (trackBorderWidth - trackHeight / 2) - (thumbBorderWidth - thumbHeight / 2)) + "px";
                        }else{
                            return ((trackHeight - thumbHeight) / 2 - trackBorderWidth + (trackBorderWidth - trackHeight / 2)) + "px";
                        }
                    }else{
                        if(thumbBorderWidth > thumbHeight / 2){
                            return ((trackHeight - thumbHeight) / 2 - trackBorderWidth - (thumbBorderWidth - thumbHeight / 2)) + "px";
                        }else{
                            return ((trackHeight - thumbHeight) / 2 - trackBorderWidth) + "px";
                        }
                    }
                }
            },
            {
                browsers: ["firefox"],
                ignore: true,
                elementPrefix: "",
                propertyName: "",
                propertyValueAssign: 0,
                translation: function(){
                    return;
                }
            }
        ]),
        new Property("", {
            type: "constant"
        }, [
            {
                browsers: ["chrome", "edge", "opera"],
                elementPrefix: ".result",
                propertyName: "background-color",
                propertyValueAssign: 0,
                translation: function(val){
                    return val;
                }
            },
            {
                browsers: ["firefox"],
                elementPrefix: ".result",
                propertyName: "width",
                propertyValueAssign: 0,
                translation: function(val){
                    return "100%";
                }
            }
        ]),
        new Property("", {
            type: "constant"
        }, [
            {
                browsers: ["chrome", "edge", "opera"],
                elementPrefix: ".result",
                propertyName: "background-color",
                propertyValueAssign: 0,
                translation: function(val){
                    return val;
                }
            },
            {
                browsers: ["firefox"],
                elementPrefix: ".result::-moz-range-track",
                propertyName: "width",
                propertyValueAssign: 0,
                translation: function(val){
                    return "100%";
                }
            }
        ]),
        new Property("thumb-color", {
            type: "color"
        }, [
            {
                browsers: ["chrome", "edge", "opera"],
                elementPrefix: ".result::-webkit-slider-thumb",
                propertyName: "background-color",
                propertyValueAssign: 0,
                translation: function(val){
                    return val;
                }
            },
            {
                browsers: ["firefox"],
                elementPrefix: ".result::-moz-range-thumb",
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
                elementPrefix: ".result::-webkit-slider-runnable-track",
                propertyName: "background-color",
                propertyValueAssign: 0,
                translation: function(val){
                    return val;
                }
            },
            {
                browsers: ["firefox"],
                elementPrefix: ".result::-moz-range-track",
                propertyName: "background-color",
                propertyValueAssign: 0,
                translation: function(val){
                    return val;
                }
            }
        ]),
        new Property("progress-color", {
            type: "color"
        }, [
            {
                browsers: ["edge"],
                elementPrefix: ".result",
                propertyName: "background-color",
                propertyValueAssign: 0,
                translation: function(val){
                    return val;
                }
            },
            {
                browsers: ["firefox"],
                elementPrefix: ".result::-moz-range-progress",
                propertyName: "background-color",
                propertyValueAssign: 0,
                translation: function(val){
                    return val;
                }
            }
        ]),
        new Property("thumb-border-color", {
            type: "color"
        }, [
            {
                browsers: ["chrome", "edge", "opera"],
                elementPrefix: ".result::-webkit-slider-thumb",
                propertyName: "border-color",
                propertyValueAssign: 0,
                translation: function(val){
                    return val;
                }
            },
            {
                browsers: ["firefox"],
                elementPrefix: ".result::-moz-range-thumb",
                propertyName: "border-color",
                propertyValueAssign: 0,
                translation: function(val){
                    return val;
                }
            }
        ]),
        new Property("track-border-color", {
            type: "color"
        }, [
            {
                browsers: ["chrome", "edge", "opera"],
                elementPrefix: ".result::-webkit-slider-runnable-track",
                propertyName: "border-color",
                propertyValueAssign: 0,
                translation: function(val){
                    return val;
                }
            },
            {
                browsers: ["firefox"],
                elementPrefix: ".result::-moz-range-track",
                propertyName: "border-color",
                propertyValueAssign: 0,
                translation: function(val){
                    return val;
                }
            }
        ]),
        new Property("thumb-border-width", {
            type: "range",
            min: 0,
            max: 25
        }, [
            {
                browsers: ["chrome", "edge", "opera"],
                elementPrefix: ".result::-webkit-slider-thumb",
                propertyName: "border-width",
                propertyValueAssign: 0,
                translation: function(val){
                    return val + "px";
                }
            },
            {
                browsers: ["firefox"],
                elementPrefix: ".result::-moz-range-thumb",
                propertyName: "border-width",
                propertyValueAssign: 0,
                translation: function(val){
                    return val + "px";
                }
            }
        ]),
        new Property("track-border-width", {
            type: "range",
            min: 0,
            max: 25
        }, [
            {
                browsers: ["chrome", "edge", "opera"],
                elementPrefix: ".result::-webkit-slider-runnable-track",
                propertyName: "border-width",
                propertyValueAssign: 0,
                translation: function(val){
                    return val + "px";
                }
            },
            {
                browsers: ["chrome", "edge", "opera"],
                elementPrefix: ".result::-webkit-slider-runnable-track",
                propertyName: "border-width",
                propertyValueAssign: 1,
                translation: function(val){
                    return Math.min(val, 5) + "px";
                }
            },
            {
                browsers: ["firefox"],
                elementPrefix: ".result::-moz-range-track",
                propertyName: "border-width",
                propertyValueAssign: 0,
                translation: function(val){
                    return val + "px";
                }
            },
            {
                browsers: ["firefox"],
                elementPrefix: ".result::-moz-range-track",
                propertyName: "border-width",
                propertyValueAssign: 1,
                translation: function(val){
                    return Math.min(val, 5) + "px";
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
                elementPrefix: ".result::-webkit-slider-thumb",
                propertyName: "border-radius",
                propertyValueAssign: 0,
                translation: function(val){
                    return val + "px";
                }
            },
            {
                browsers: ["firefox"],
                elementPrefix: ".result::-moz-range-thumb",
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
                elementPrefix: ".result::-webkit-slider-runnable-track",
                propertyName: "border-radius",
                propertyValueAssign: 0,
                translation: function(val){
                    return val + "px";
                }
            },
            {
                browsers: ["firefox"],
                elementPrefix: ".result::-moz-range-track",
                propertyName: "border-radius",
                propertyValueAssign: 0,
                translation: function(val){
                    return val + "px";
                }
            }
        ]),
        new Property("progress-radius", {
            type: "range",
            min: 0,
            max: 25
        }, [
            {
                browsers: ["edge"],
                elementPrefix: ".result",
                propertyName: "background-color",
                propertyValueAssign: 0,
                translation: function(val){
                    return val;
                }
            },
            {
                browsers: ["firefox"],
                elementPrefix: ".result::-moz-range-progress",
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
            max: 40
        }, [
            {
                browsers: ["chrome", "edge", "opera"],
                elementPrefix: ".result::-webkit-slider-thumb",
                propertyName: "width",
                propertyValueAssign: 0,
                translation: function(val){
                    return val + "px";
                }
            },
            {
                browsers: ["firefox"],
                elementPrefix: ".result::-moz-range-thumb",
                propertyName: "width",
                propertyValueAssign: 0,
                translation: function(val){
                    return val + "px";
                }
            }
        ]),
        new Property("thumb-height", {
            type: "range",
            min: 0,
            max: 40
        }, [
            {
                browsers: ["chrome", "edge", "opera"],
                elementPrefix: ".result::-webkit-slider-thumb",
                propertyName: "height",
                propertyValueAssign: 0,
                translation: function(val){
                    return val + "px";
                }
            },
            {
                browsers: ["firefox"],
                elementPrefix: ".result::-moz-range-thumb",
                propertyName: "height",
                propertyValueAssign: 0,
                translation: function(val){
                    return val + "px";
                }
            }
        ]),
        new Property("track-height", {
            type: "range",
            min: 0,
            max: 40
        }, [
            {
                browsers: ["chrome", "edge", "opera"],
                elementPrefix: ".result::-webkit-slider-runnable-track",
                propertyName: "height",
                propertyValueAssign: 0,
                translation: function(val){
                    return val + "px";
                }
            },
            {
                browsers: ["firefox"],
                elementPrefix: ".result::-moz-range-track",
                propertyName: "height",
                propertyValueAssign: 0,
                translation: function(val){
                    return val + "px";
                }
            }
        ]),
        new Property("progress-height", {
            type: "range",
            min: 0,
            max: 40
        }, [
            {
                browsers: ["edge"],
                elementPrefix: ".result",
                propertyName: "background-color",
                propertyValueAssign: 0,
                translation: function(val){
                    return val;
                }
            },
            {
                browsers: ["firefox"],
                elementPrefix: ".result::-moz-range-progress",
                propertyName: "height",
                propertyValueAssign: 0,
                translation: function(val){
                    return val + "px";
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
