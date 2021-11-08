

sap.ui.define([
    "sap/ui/model/json/JSONModel"
],
    /**
       * @param {typeof sap.ui.model.json.JSONModel} JSONModel    
       */

    function (JSONModel) {
        "use strict";

        return {
            createRecipent: function () {
                var oData = {
                    recipient: {
                        name: "Hello.Mod.JS",
                    }
                };

                return new JSONModel(oData);
            }
        }
    });