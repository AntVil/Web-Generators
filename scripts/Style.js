class Style {
    constructor(properties) {
        this.properties = properties;
    }

    createForm(restrictions) {
        let form = document.createElement("form");
        if(restrictions.length !== 0){
            for (let i = 0; i < this.properties.length; i++) {
                let elements = this.properties[i].createInput(restrictions);
                for (let j = 0; j < elements.length; j++) {
                    form.appendChild(elements[j]);
                }
            }
        }
        return form;
    }

    getResultCode() {
        let dict = {};

        for (let i = 0; i < this.properties.length; i++) {
            let propertyFractions = this.properties[i].getPropertyFractions();
            for (let j = 0; j < propertyFractions.length; j++) {
                let p = propertyFractions[j];
                if (dict[p["elementPrefix"]] === undefined) {
                    dict[p["elementPrefix"]] = {};
                }
                if (dict[p["elementPrefix"]][p["propertyName"]] === undefined) {
                    dict[p["elementPrefix"]][p["propertyName"]] = [];
                }
                dict[p["elementPrefix"]][p["propertyName"]][p["propertyValueAssign"]] = p["value"];
            }
        }

        let code = "";

        let prefixes = Object.keys(dict);
        for(let i=0;i<prefixes.length;i++){
            let code_ = `\n#result${prefixes[i]}{\n`;

            let propertyNames = Object.keys(dict[prefixes[i]]);
            for(let j=0;j<propertyNames.length;j++){
                code_ += `    ${propertyNames[j]}: ${dict[prefixes[i]][propertyNames[j]].join(" ")};\n`
            }

            code_ += "}\n"
            code += code_;
        }


        return code;
    }

    setRandom(){
        for(let i=0;i<this.properties.length;i++){
            this.properties[i].setRandom();
        }
    }
}
