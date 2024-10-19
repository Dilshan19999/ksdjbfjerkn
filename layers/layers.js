ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([79.767049, 6.672659, 80.355163, 7.054441]);
var wms_layers = [];

var format_SEA_0 = new ol.format.GeoJSON();
var features_SEA_0 = format_SEA_0.readFeatures(json_SEA_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SEA_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SEA_0.addFeatures(features_SEA_0);
var lyr_SEA_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SEA_0, 
                style: style_SEA_0,
                popuplayertitle: "SEA",
                interactive: false,
                title: '<img src="styles/legend/SEA_0.png" /> SEA'
            });
var format_SL_1 = new ol.format.GeoJSON();
var features_SL_1 = format_SL_1.readFeatures(json_SL_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SL_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SL_1.addFeatures(features_SL_1);
var lyr_SL_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SL_1, 
                style: style_SL_1,
                popuplayertitle: "SL",
                interactive: false,
                title: '<img src="styles/legend/SL_1.png" /> SL'
            });
var format_Colombodistrict_2 = new ol.format.GeoJSON();
var features_Colombodistrict_2 = format_Colombodistrict_2.readFeatures(json_Colombodistrict_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Colombodistrict_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colombodistrict_2.addFeatures(features_Colombodistrict_2);
var lyr_Colombodistrict_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Colombodistrict_2, 
                style: style_Colombodistrict_2,
                popuplayertitle: "Colombo district",
                interactive: false,
                title: '<img src="styles/legend/Colombodistrict_2.png" /> Colombo district'
            });
var format_seethawakapradeshiyasabha_3 = new ol.format.GeoJSON();
var features_seethawakapradeshiyasabha_3 = format_seethawakapradeshiyasabha_3.readFeatures(json_seethawakapradeshiyasabha_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_seethawakapradeshiyasabha_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_seethawakapradeshiyasabha_3.addFeatures(features_seethawakapradeshiyasabha_3);
var lyr_seethawakapradeshiyasabha_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_seethawakapradeshiyasabha_3, 
                style: style_seethawakapradeshiyasabha_3,
                popuplayertitle: "seethawak apradeshiya sabha",
                interactive: false,
                title: '<img src="styles/legend/seethawakapradeshiyasabha_3.png" /> seethawak apradeshiya sabha'
            });
var format_GNDsofSeethawakapradeshiyasabha_4 = new ol.format.GeoJSON();
var features_GNDsofSeethawakapradeshiyasabha_4 = format_GNDsofSeethawakapradeshiyasabha_4.readFeatures(json_GNDsofSeethawakapradeshiyasabha_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GNDsofSeethawakapradeshiyasabha_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GNDsofSeethawakapradeshiyasabha_4.addFeatures(features_GNDsofSeethawakapradeshiyasabha_4);
var lyr_GNDsofSeethawakapradeshiyasabha_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GNDsofSeethawakapradeshiyasabha_4, 
                style: style_GNDsofSeethawakapradeshiyasabha_4,
                popuplayertitle: "GNDs of Seethawak apradeshiya sabha",
                interactive: true,
                title: '<img src="styles/legend/GNDsofSeethawakapradeshiyasabha_4.png" /> GNDs of Seethawak apradeshiya sabha'
            });
var format_BClassroad_5 = new ol.format.GeoJSON();
var features_BClassroad_5 = format_BClassroad_5.readFeatures(json_BClassroad_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BClassroad_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BClassroad_5.addFeatures(features_BClassroad_5);
var lyr_BClassroad_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BClassroad_5, 
                style: style_BClassroad_5,
                popuplayertitle: "B Class road",
                interactive: true,
                title: '<img src="styles/legend/BClassroad_5.png" /> B Class road'
            });
var format_AClassroad_6 = new ol.format.GeoJSON();
var features_AClassroad_6 = format_AClassroad_6.readFeatures(json_AClassroad_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AClassroad_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AClassroad_6.addFeatures(features_AClassroad_6);
var lyr_AClassroad_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AClassroad_6, 
                style: style_AClassroad_6,
                popuplayertitle: "A Class road",
                interactive: true,
                title: '<img src="styles/legend/AClassroad_6.png" /> A Class road'
            });

lyr_SEA_0.setVisible(true);lyr_SL_1.setVisible(true);lyr_Colombodistrict_2.setVisible(true);lyr_seethawakapradeshiyasabha_3.setVisible(true);lyr_GNDsofSeethawakapradeshiyasabha_4.setVisible(true);lyr_BClassroad_5.setVisible(true);lyr_AClassroad_6.setVisible(true);
var layersList = [lyr_SEA_0,lyr_SL_1,lyr_Colombodistrict_2,lyr_seethawakapradeshiyasabha_3,lyr_GNDsofSeethawakapradeshiyasabha_4,lyr_BClassroad_5,lyr_AClassroad_6];
lyr_SEA_0.set('fieldAliases', {'id': 'id', });
lyr_SL_1.set('fieldAliases', {'PROVINCE_N': 'PROVINCE_N', 'DCODE': 'DCODE', 'DIST': 'DIST', 'CODE': 'CODE', 'DIVISEC': 'DIVISEC', 'Surveys': 'Surveys', 'num of col': 'num of col', });
lyr_Colombodistrict_2.set('fieldAliases', {'PROVINCE_N': 'PROVINCE_N', 'DCODE': 'DCODE', 'DIST': 'DIST', 'CODE': 'CODE', 'DIVISEC': 'DIVISEC', 'Area': 'Area', });
lyr_seethawakapradeshiyasabha_3.set('fieldAliases', {'PROVINCE_N': 'PROVINCE_N', 'DCODE': 'DCODE', 'DIST': 'DIST', 'CODE': 'CODE', 'DIVISEC': 'DIVISEC', 'Area': 'Area', });
lyr_GNDsofSeethawakapradeshiyasabha_4.set('fieldAliases', {'PROVINCE_N': 'PROVINCE_N', 'DISTRICT_N': 'DISTRICT_N', 'DSD_N': 'DSD_N', 'GND_N': 'GND_N', 'GND_C': 'GND_C', 'DSDCODE4': 'DSDCODE4', 'GNDCODE7': 'GNDCODE7', 'GNDPCODE5': 'GNDPCODE5', 'GNDPCODE3': 'GNDPCODE3', });
lyr_BClassroad_5.set('fieldAliases', {'ROAD_ID': 'ROAD_ID', 'CODE': 'CODE', 'CLASS': 'CLASS', });
lyr_AClassroad_6.set('fieldAliases', {'ROAD_ID': 'ROAD_ID', 'CODE': 'CODE', 'CLASS': 'CLASS', });
lyr_SEA_0.set('fieldImages', {'id': '', });
lyr_SL_1.set('fieldImages', {'PROVINCE_N': 'TextEdit', 'DCODE': 'Range', 'DIST': 'TextEdit', 'CODE': 'TextEdit', 'DIVISEC': 'TextEdit', 'Surveys': 'TextEdit', 'num of col': 'TextEdit', });
lyr_Colombodistrict_2.set('fieldImages', {'PROVINCE_N': '', 'DCODE': '', 'DIST': '', 'CODE': '', 'DIVISEC': '', 'Area': '', });
lyr_seethawakapradeshiyasabha_3.set('fieldImages', {'PROVINCE_N': '', 'DCODE': '', 'DIST': '', 'CODE': '', 'DIVISEC': '', 'Area': '', });
lyr_GNDsofSeethawakapradeshiyasabha_4.set('fieldImages', {'PROVINCE_N': 'TextEdit', 'DISTRICT_N': 'TextEdit', 'DSD_N': 'TextEdit', 'GND_N': 'TextEdit', 'GND_C': 'TextEdit', 'DSDCODE4': 'TextEdit', 'GNDCODE7': 'TextEdit', 'GNDPCODE5': 'TextEdit', 'GNDPCODE3': 'TextEdit', });
lyr_BClassroad_5.set('fieldImages', {'ROAD_ID': 'TextEdit', 'CODE': 'Range', 'CLASS': 'TextEdit', });
lyr_AClassroad_6.set('fieldImages', {'ROAD_ID': 'TextEdit', 'CODE': 'Range', 'CLASS': 'TextEdit', });
lyr_SEA_0.set('fieldLabels', {'id': 'no label', });
lyr_SL_1.set('fieldLabels', {'PROVINCE_N': 'hidden field', 'DCODE': 'hidden field', 'DIST': 'hidden field', 'CODE': 'hidden field', 'DIVISEC': 'hidden field', 'Surveys': 'hidden field', 'num of col': 'hidden field', });
lyr_Colombodistrict_2.set('fieldLabels', {'PROVINCE_N': 'no label', 'DCODE': 'no label', 'DIST': 'no label', 'CODE': 'no label', 'DIVISEC': 'no label', 'Area': 'no label', });
lyr_seethawakapradeshiyasabha_3.set('fieldLabels', {'PROVINCE_N': 'header label - visible with data', 'DCODE': 'no label', 'DIST': 'no label', 'CODE': 'no label', 'DIVISEC': 'no label', 'Area': 'no label', });
lyr_GNDsofSeethawakapradeshiyasabha_4.set('fieldLabels', {'PROVINCE_N': 'inline label - always visible', 'DISTRICT_N': 'inline label - always visible', 'DSD_N': 'inline label - always visible', 'GND_N': 'inline label - always visible', 'GND_C': 'inline label - always visible', 'DSDCODE4': 'inline label - always visible', 'GNDCODE7': 'hidden field', 'GNDPCODE5': 'hidden field', 'GNDPCODE3': 'hidden field', });
lyr_BClassroad_5.set('fieldLabels', {'ROAD_ID': 'no label', 'CODE': 'no label', 'CLASS': 'inline label - always visible', });
lyr_AClassroad_6.set('fieldLabels', {'ROAD_ID': 'no label', 'CODE': 'no label', 'CLASS': 'inline label - always visible', });
lyr_AClassroad_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});