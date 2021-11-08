//@ts-check

sap.ui.define([
//"sap/m/Text"
"sap/ui/core/ComponentContainer"

], 

  /**
     * 
     * @param {typeof sap.ui.core.ComponentContainer} ComponentContainer  
     */

function (ComponentContainer) {

    new ComponentContainer ({
        name: "ns.SAPUI5",
        settings: {
            id:"SAPUI5"
        },
        async: true
    }).placeAt("content");

    alert("mensaje alert !!!");
});
