sap.ui.define([
		'sap/ui/core/SeparatorItem',
		'sap/ui/core/mvc/Controller',
		'sap/ui/model/json/JSONModel'
	], function(SeparatorItem, Controller, JSONModel) {
	"use strict";

	return Controller.extend("sap.m.sample.MultiComboBoxGrouping.controller.MultiComboBoxGrouping", {

		onInit: function () {
			var oModel = new JSONModel(sap.ui.require.toUrl("sap/ui/demo/mock/products.json"));
            var oDictionaryModel = new JSONModel({ dictionary: [] });
            this.getView().setModel(oModel);
			this.getView().setModel(oDictionaryModel, "dict");
            setTimeout(function () {
                oDictionaryModel.setProperty("/dictionary", [
                    {
                        key: "Very Best Screens",
                        text: "Very Best Screens From Dictionary",
                    },
                    {
                        key: "Smartcards",
                        text: "Smartcards From Dictionary",
                    },
                    {
                        key: "Technocom",
                        text: "Technocom From Dictionary",
                    },
                    {
                        key: "Alpha Printers",
                        text: "Alpha Printers From Dictionary",
                    },
                    {
                        key: "Printer for All",
                        text: "Printer for All From Dictionary",
                    },
                    {
                        key: "Oxynum",
                        text: "Oxynum From Dictionary",
                    },
                    {
                        key: "Fasttech",
                        text: "Fasttech From Dictionary",
                    },
                    {
                        key: "Ultrasonic United",
                        text: "Ultrasonic United From Dictionary",
                    },
                    {
                        key: "Speaker Experts",
                        text: "Speaker Experts From Dictionary",
                    },
                    {
                        key: "Brainsoft",
                        text: "Brainsoft From Dictionary",
                    },
                    {
                        key: "Red Point Stores",
                        text: "Red Point Stores From Dictionary",
                    },
                    {
                        key: "Titanium",
                        text: "Titanium From Dictionary",
                    },
                ]);
            }, 5000);
		},

		getGroupHeader: function (oGroup) {
			return new SeparatorItem( {
                text: {
                    parts: [oGroup.key + ">/key", "dict>/dictionary"],
                    formatter: function (sKey, aDict) {
                        return aDict.reduce(function (sAcc, oDict) {
                            if (sKey === oDict.key) {
                                sAcc = oDict.text;
                            }
                            return sAcc;
                        }, sKey);
                    },
                },
            }).setModel(new JSONModel({ key: oGroup.key }), oGroup.key);
		}
	});
});