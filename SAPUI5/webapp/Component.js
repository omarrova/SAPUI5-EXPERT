

sap.ui.define([
    "sap/ui/core/UIComponent",
    "ns/SAPUI5/model/Models",
    "sap/ui/model/resource/ResourceModel"
],
    /**
     * @param {typeof sap.ui.core.UIComponent} UIComponent
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     */
    function (UIComponent , Models , ResourceModel ) {

        return UIComponent.extend("ns.SAPUI5.Component", {
            
            metadata: {
                manifest : "json"
                // "rootView": {
                //     "viewName": "ns.SAPUI5.view.App",
                //     "type": "XML",
                //     "async" : true,
                //     "id": "app" 
                //}
            },

            init: function () {
                // call ini function of de parent
                UIComponent.prototype.init.apply(this, arguments);

                // set data model
                this.setModel(Models.createRecipent());
                // set i18n model
                var i18nmodel = new ResourceModel({ bundleName: "ns.SAPUI5.i18n.i18n"  });
                // establecemos el objeto ebn la vista
                this.setModel(i18nmodel , "i18n" );
            }
        });
        alert("mensaje alert !!!");
    });