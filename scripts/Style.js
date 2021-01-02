class Style {
    constructor(properties) {
        this.properties = properties;
    }

    createForm(restrictions) {
        let form = document.createElement("form");
        for (let i = 0; i < this.properties.length; i++) {
            let elements = this.properties[i].createInput(restrictions);
            for (let j = 0; j < elements.length; j++) {
                form.appendChild(elements[j]);
            }
        }
        return form;
    }

    getResultCode(restrictions) {
        let dict = {};

        for (let i = 0; i < this.properties.length; i++) {
            let propertyFractions = this.properties[i].getPropertyFractions();
            for (let j = 0; j < propertyFractions.length; j++) {
                let p = propertyFractions[j];
                console.log(p);

                if (dict[p["elementPrefix"]] === undefined) {
                    dict[p["elementPrefix"]] = {};
                }
                if (dict[p["elementPrefix"]][p["propertyName"]] === undefined) {
                    dict[p["elementPrefix"]][p["propertyName"]] = [];
                }
                dict[p["elementPrefix"]][p["propertyName"]][p["propertyValueAssign"]] = p["value"];


                //dict[p["elementPrefix"]] = p["value"];//[p["propertyName"]][p["propertyValueAssign"]] = p["value"];
                //dict[p["elementPrefix"]][p["propertyName"]] = p["value"];
                //dict[p["elementPrefix"]] = p["value"];//[p["propertyName"]][p["propertyValueAssign"]] = p["value"];
            }
        }

        let code = "";


        return code;
    }
}


//dict
let x = {
    elementPrefix: {
        propertyName: [
            "",
            ""
        ]
    },
    elementPrefix: [],
    elementPrefix: [],
    elementPrefix: [],
};




//property.getPropertyFractions
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