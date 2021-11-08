
//@ts-check

sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
    //"ns/SAPUI5/model/Models",
    //"sap/ui/model/resource/ResourceModel"


],
    /**
       * 
       * @param {typeof sap.ui.core.mvc.Controller} Controller
       * @param {typeof sap.m.MessageToast} MessageToast
       * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
       */

    function (Controller, MessageToast, Models , ResourceModel ) {
        "use strict";

        return Controller.extend("ns.SAPUI5.controller.App", {
            onInit: function () {
                // set data model
                //this.getView().setModel(Models.createRecipent());
                // set i18n model
                //var i18nmodel = new ResourceModel({ bundleName: "ns.SAPUI5.i18n.i18n"  });
                // establecemos el objeto ebn la vista
                //this.getView().setModel(i18nmodel , "i18n" );
            },
            onShowHello: function () {
                // read text i18n
                var oBundle = this.getView().getModel("i18n").getResourceBundle();

                // read property from data model se captura lo que se ingresa en la caja de texto
                var sRecipient =  this.getView().getModel().getProperty("/recipient/name");
                var sMsg12 = oBundle.getText("helloMessage" , [sRecipient] );
                MessageToast.show(sMsg12);
            }
        });
    });