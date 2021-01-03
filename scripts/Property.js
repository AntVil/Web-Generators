class Property {
    constructor(name, specification, cssRules) {
        this.name = name;
        this.specification = specification;
        this.cssRules = cssRules;
    }

    createInput(restrictions) {
        let valid = true;

        for (let i = 0; i < restrictions.length; i++) {
            let valid_ = false;
            for (let j = 0; j < this.cssRules.length; j++) {
                if (this.cssRules[j].browsers.includes(restrictions[i])) {
                    valid_ = true;
                }
            }
            valid = valid && valid_;
        }

        if (valid && this.specification.type !== "constant" && this.specification.type !== "calculation") {
            let label = document.createElement("label");
            label.innerText = this.name;
            label.for = this.name;

            let input = document.createElement("input");
            input.type = this.specification.type;
            input.id = this.name;
            input.name = this.name;
            input.min = this.specification.min;
            input.max = this.specification.max;

            return [label, input];
        } else {
            let span = document.createElement("span");
            return span;
        }
    }

    getPropertyFractions() {
        let propertyFractions = [];
        for (let i = 0; i < this.cssRules.length; i++) {
            let property = this.cssRules[i];

            if(property.ignore){
                continue;
            }

            if (this.specification.type === "calculation") {
                try{
                    let values = [];
                    for (let j = 0; j < this.specification.properties.length; j++) {
                        values.push(document.getElementById(this.specification.properties[j]).value);
                    }
                    propertyFractions.push({
                        elementPrefix: property.elementPrefix,
                        propertyName: property.propertyName,
                        propertyValueAssign: property.propertyValueAssign,
                        value: property.translation(...values)
                    });
                }catch(e){

                }
            } else {
                let value;
                if (this.specification.type !== "constant") {
                    try {
                        value = document.getElementById(this.name).value;
                    } catch (e) {
                        return [];
                    }
                } else {
                    value = "";
                }
                propertyFractions.push({
                    elementPrefix: property.elementPrefix,
                    propertyName: property.propertyName,
                    propertyValueAssign: property.propertyValueAssign,
                    value: property.translation(value)
                });
            }
        }
        return propertyFractions;
    }

    setRandom() {
        try {
            if (this.specification.type === "range") {
                document.getElementById(this.name).value = Math.floor((this.specification.max - this.specification.min) * Math.random() + this.specification.min);
            } else if (this.specification.type === "color") {
                let val = "#" + Math.floor(Math.random() * 16777215).toString(16);
                while (val.length < 7) {
                    val += "0"
                }
                document.getElementById(this.name).value = val;
            }
        } catch (e) {

        }
    }
}
