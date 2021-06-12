var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_arrondmko_1 = new ol.format.GeoJSON();
var features_arrondmko_1 = format_arrondmko_1.readFeatures(json_arrondmko_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_arrondmko_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_arrondmko_1.addFeatures(features_arrondmko_1);
var lyr_arrondmko_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_arrondmko_1, 
                style: style_arrondmko_1,
                interactive: true,
                title: '<img src="styles/legend/arrondmko_1.png" /> arrond mko'
            });

lyr_OSMStandard_0.setVisible(true);lyr_arrondmko_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_arrondmko_1];
lyr_arrondmko_1.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'Alias', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'ID_3': 'ID_3', 'NAME_3': 'NAME_3', 'CCN_3': 'CCN_3', 'CCA_3': 'CCA_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'NL_NAME_3': 'NL_NAME_3', 'VARNAME_3': 'VARNAME_3', 'Wikipedia': 'Wikipedia', });
lyr_arrondmko_1.set('fieldImages', {'ID_0': 'Hidden', 'ISO': 'Hidden', 'NAME_0': 'TextEdit', 'ID_1': 'Hidden', 'NAME_1': 'Hidden', 'ID_2': 'Hidden', 'NAME_2': 'Hidden', 'ID_3': 'Hidden', 'NAME_3': 'TextEdit', 'CCN_3': 'Hidden', 'CCA_3': 'Hidden', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'Hidden', 'NL_NAME_3': 'Hidden', 'VARNAME_3': 'Hidden', 'Wikipedia': 'TextEdit', });
lyr_arrondmko_1.set('fieldLabels', {'NAME_0': 'no label', 'NAME_3': 'no label', 'TYPE_3': 'no label', 'Wikipedia': 'no label', });
lyr_arrondmko_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});