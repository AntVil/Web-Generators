class Property {
    constructor(name, specification, cssRules) {
        this.name = name;
        this.specification = specification;
        this.cssRules = cssRules;
    }

    createInput(restrictions) {
        let valid = false;
        for(let i=0;i<restrictions.length;i++){
            for(let j=0;j<this.cssRules.length;j++){
                if(this.cssRules[j].browsers.includes(restrictions[i])){
                    valid = true;
                }
            }
        }

        if (valid) {
            let label = document.createElement("label");
            label.innerText = this.name;
            
            let input = document.createElement("input");
            input.type = this.specification.type;
            input.id = this.name;

            return [label, input];
        } else {
            let span = document.createElement("span");
            return span;
        }
    }

    getPropertyFractions(restrictions) {
        let propertyFractions = [];
        for(let i=0;i<this.cssRules.length;i++){
            let property = this.cssRules[i];
            propertyFractions.push({
                elementPrefix: property.elementPrefix,
                propertyName: property.propertyName,
                propertyValueAssign: property.propertyValueAssign,
                value: property.translation(document.getElementById(this.name).value)
            });
        }
        console.log(propertyFractions);
        return propertyFractions;
    }
}

[
    {
        elementPrefix: "",
        propertyName: "",
        propertyValueAssign: 0,
        value: ""
    },
    {
        elementPrefix: "",
        propertyName: "",
        propertyValueAssign: 0,
        value: ""
    }
]



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
])