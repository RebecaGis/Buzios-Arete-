var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Arvores_Comuns_2 = new ol.format.GeoJSON();
var features_Arvores_Comuns_2 = format_Arvores_Comuns_2.readFeatures(json_Arvores_Comuns_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Arvores_Comuns_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arvores_Comuns_2.addFeatures(features_Arvores_Comuns_2);
var lyr_Arvores_Comuns_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arvores_Comuns_2, 
                style: style_Arvores_Comuns_2,
                popuplayertitle: "Arvores_Comuns",
                interactive: true,
                title: '<img src="styles/legend/Arvores_Comuns_2.png" /> Arvores_Comuns'
            });
var format_Arvores_EN_3 = new ol.format.GeoJSON();
var features_Arvores_EN_3 = format_Arvores_EN_3.readFeatures(json_Arvores_EN_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Arvores_EN_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arvores_EN_3.addFeatures(features_Arvores_EN_3);
var lyr_Arvores_EN_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arvores_EN_3, 
                style: style_Arvores_EN_3,
                popuplayertitle: "Arvores_EN",
                interactive: true,
                title: '<img src="styles/legend/Arvores_EN_3.png" /> Arvores_EN'
            });
var format_Buffer_18m_4 = new ol.format.GeoJSON();
var features_Buffer_18m_4 = format_Buffer_18m_4.readFeatures(json_Buffer_18m_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffer_18m_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffer_18m_4.addFeatures(features_Buffer_18m_4);
var lyr_Buffer_18m_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffer_18m_4, 
                style: style_Buffer_18m_4,
                popuplayertitle: "Buffer_18m",
                interactive: true,
                title: '<img src="styles/legend/Buffer_18m_4.png" /> Buffer_18m'
            });
var format_arvores_tabela_5 = new ol.format.GeoJSON();
var features_arvores_tabela_5 = format_arvores_tabela_5.readFeatures(json_arvores_tabela_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_arvores_tabela_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_arvores_tabela_5.addFeatures(features_arvores_tabela_5);
var lyr_arvores_tabela_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_arvores_tabela_5, 
                style: style_arvores_tabela_5,
                popuplayertitle: "arvores_tabela",
                interactive: true,
                title: '<img src="styles/legend/arvores_tabela_5.png" /> arvores_tabela'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_Arvores_Comuns_2.setVisible(true);lyr_Arvores_EN_3.setVisible(true);lyr_Buffer_18m_4.setVisible(true);lyr_arvores_tabela_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatelliteHybrid_1,lyr_Arvores_Comuns_2,lyr_Arvores_EN_3,lyr_Buffer_18m_4,lyr_arvores_tabela_5];
lyr_Arvores_Comuns_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FeatureID': 'FeatureID', 'ZOrder': 'ZOrder', 'AnnotationClassID': 'AnnotationClassID', 'SymbolID': 'SymbolID', 'Status': 'Status', 'TextString': 'TextString', 'FontName': 'FontName', 'FontSize': 'FontSize', 'Bold': 'Bold', 'Italic': 'Italic', 'Underline': 'Underline', 'VerticalAlignment': 'VerticalAlignment', 'HorizontalAlignment': 'HorizontalAlignment', 'XOffset': 'XOffset', 'YOffset': 'YOffset', 'Angle': 'Angle', 'FontLeading': 'FontLeading', 'WordSpacing': 'WordSpacing', 'CharacterWidth': 'CharacterWidth', 'CharacterSpacing': 'CharacterSpacing', 'FlipAngle': 'FlipAngle', 'Override': 'Override', 'Entity': 'Entity', 'Handle': 'Handle', 'Owner': 'Owner', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrLock': 'LyrLock', 'LyrOn': 'LyrOn', 'LyrVPFrzn': 'LyrVPFrzn', 'LyrHandle': 'LyrHandle', 'Color': 'Color', 'EntColor': 'EntColor', 'LyrColor': 'LyrColor', 'BlkColor': 'BlkColor', 'Linetype': 'Linetype', 'EntLinetype': 'EntLinetype', 'LyrLnType': 'LyrLnType', 'BlkLinetype': 'BlkLinetype', 'Elevation': 'Elevation', 'Thickness': 'Thickness', 'LineWt': 'LineWt', 'EntLineWt': 'EntLineWt', 'LyrLineWt': 'LyrLineWt', 'BlkLineWt': 'BlkLineWt', 'RefName': 'RefName', 'LTScale': 'LTScale', 'ExtX': 'ExtX', 'ExtY': 'ExtY', 'ExtZ': 'ExtZ', 'DocName': 'DocName', 'DocPath': 'DocPath', 'DocType': 'DocType', 'DocVer': 'DocVer', 'ScaleX': 'ScaleX', 'ScaleY': 'ScaleY', 'ScaleZ': 'ScaleZ', 'Style': 'Style', 'FontID': 'FontID', 'Text': 'Text', 'Height': 'Height', 'TxtAngle': 'TxtAngle', 'TxtWidth': 'TxtWidth', 'TxtOblique': 'TxtOblique', 'TxtGenType': 'TxtGenType', 'TxtJust': 'TxtJust', 'VertAlign': 'VertAlign', 'TxtFont': 'TxtFont', 'TxtBoxHt': 'TxtBoxHt', 'TxtBoxWd': 'TxtBoxWd', 'TxtRefWd': 'TxtRefWd', 'TxtAttach': 'TxtAttach', 'TxtDir': 'TxtDir', 'LnSpace': 'LnSpace', 'SpaceFct': 'SpaceFct', 'TxtMemo': 'TxtMemo', 'ORIG_FID': 'ORIG_FID', 'Bloco': 'Bloco', 'Bloco_X': 'Bloco_X', 'Bloco_Y': 'Bloco_Y', 'TextString_1': 'TextString', 'TextString_X': 'TextString_X', 'TextString_Y': 'TextString_Y', 'espécie': 'espécie', 'CAP': 'CAP', 'ALTURA': 'ALTURA', 'ID': 'ID', 'OBS': 'OBS', });
lyr_Arvores_EN_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FeatureID': 'FeatureID', 'ZOrder': 'ZOrder', 'AnnotationClassID': 'AnnotationClassID', 'SymbolID': 'SymbolID', 'Status': 'Status', 'TextString': 'TextString', 'FontName': 'FontName', 'FontSize': 'FontSize', 'Bold': 'Bold', 'Italic': 'Italic', 'Underline': 'Underline', 'VerticalAlignment': 'VerticalAlignment', 'HorizontalAlignment': 'HorizontalAlignment', 'XOffset': 'XOffset', 'YOffset': 'YOffset', 'Angle': 'Angle', 'FontLeading': 'FontLeading', 'WordSpacing': 'WordSpacing', 'CharacterWidth': 'CharacterWidth', 'CharacterSpacing': 'CharacterSpacing', 'FlipAngle': 'FlipAngle', 'Override': 'Override', 'Entity': 'Entity', 'Handle': 'Handle', 'Owner': 'Owner', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrLock': 'LyrLock', 'LyrOn': 'LyrOn', 'LyrVPFrzn': 'LyrVPFrzn', 'LyrHandle': 'LyrHandle', 'Color': 'Color', 'EntColor': 'EntColor', 'LyrColor': 'LyrColor', 'BlkColor': 'BlkColor', 'Linetype': 'Linetype', 'EntLinetype': 'EntLinetype', 'LyrLnType': 'LyrLnType', 'BlkLinetype': 'BlkLinetype', 'Elevation': 'Elevation', 'Thickness': 'Thickness', 'LineWt': 'LineWt', 'EntLineWt': 'EntLineWt', 'LyrLineWt': 'LyrLineWt', 'BlkLineWt': 'BlkLineWt', 'RefName': 'RefName', 'LTScale': 'LTScale', 'ExtX': 'ExtX', 'ExtY': 'ExtY', 'ExtZ': 'ExtZ', 'DocName': 'DocName', 'DocPath': 'DocPath', 'DocType': 'DocType', 'DocVer': 'DocVer', 'ScaleX': 'ScaleX', 'ScaleY': 'ScaleY', 'ScaleZ': 'ScaleZ', 'Style': 'Style', 'FontID': 'FontID', 'Text': 'Text', 'Height': 'Height', 'TxtAngle': 'TxtAngle', 'TxtWidth': 'TxtWidth', 'TxtOblique': 'TxtOblique', 'TxtGenType': 'TxtGenType', 'TxtJust': 'TxtJust', 'VertAlign': 'VertAlign', 'TxtFont': 'TxtFont', 'TxtBoxHt': 'TxtBoxHt', 'TxtBoxWd': 'TxtBoxWd', 'TxtRefWd': 'TxtRefWd', 'TxtAttach': 'TxtAttach', 'TxtDir': 'TxtDir', 'LnSpace': 'LnSpace', 'SpaceFct': 'SpaceFct', 'TxtMemo': 'TxtMemo', 'ORIG_FID': 'ORIG_FID', 'Bloco': 'Bloco', 'Bloco_X': 'Bloco_X', 'Bloco_Y': 'Bloco_Y', 'TextString_1': 'TextString', 'TextString_X': 'TextString_X', 'TextString_Y': 'TextString_Y', 'espécie': 'espécie', 'CAP': 'CAP', 'ALTURA': 'ALTURA', 'ID': 'ID', 'OBS': 'OBS', });
lyr_Buffer_18m_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_arvores_tabela_5.set('fieldAliases', {'ETIǪUETA': 'ETIǪUETA', 'NORTE': 'NORTE', 'ESTE': 'ESTE', 'Field4': 'Field4', });
lyr_Arvores_Comuns_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'FeatureID': 'Range', 'ZOrder': 'Range', 'AnnotationClassID': 'TextEdit', 'SymbolID': 'Range', 'Status': 'ValueMap', 'TextString': 'TextEdit', 'FontName': 'TextEdit', 'FontSize': 'TextEdit', 'Bold': 'ValueMap', 'Italic': 'ValueMap', 'Underline': 'ValueMap', 'VerticalAlignment': 'ValueMap', 'HorizontalAlignment': 'ValueMap', 'XOffset': 'TextEdit', 'YOffset': 'TextEdit', 'Angle': 'TextEdit', 'FontLeading': 'TextEdit', 'WordSpacing': 'TextEdit', 'CharacterWidth': 'TextEdit', 'CharacterSpacing': 'TextEdit', 'FlipAngle': 'TextEdit', 'Override': 'Range', 'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Owner': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrLock': 'Range', 'LyrOn': 'TextEdit', 'LyrVPFrzn': 'Range', 'LyrHandle': 'TextEdit', 'Color': 'Range', 'EntColor': 'Range', 'LyrColor': 'Range', 'BlkColor': 'Range', 'Linetype': 'TextEdit', 'EntLinetype': 'TextEdit', 'LyrLnType': 'TextEdit', 'BlkLinetype': 'TextEdit', 'Elevation': 'TextEdit', 'Thickness': 'TextEdit', 'LineWt': 'Range', 'EntLineWt': 'Range', 'LyrLineWt': 'Range', 'BlkLineWt': 'Range', 'RefName': 'TextEdit', 'LTScale': 'TextEdit', 'ExtX': 'TextEdit', 'ExtY': 'TextEdit', 'ExtZ': 'TextEdit', 'DocName': 'TextEdit', 'DocPath': 'TextEdit', 'DocType': 'TextEdit', 'DocVer': 'TextEdit', 'ScaleX': 'TextEdit', 'ScaleY': 'TextEdit', 'ScaleZ': 'TextEdit', 'Style': 'TextEdit', 'FontID': 'Range', 'Text': 'TextEdit', 'Height': 'TextEdit', 'TxtAngle': 'TextEdit', 'TxtWidth': 'TextEdit', 'TxtOblique': 'TextEdit', 'TxtGenType': 'TextEdit', 'TxtJust': 'TextEdit', 'VertAlign': 'TextEdit', 'TxtFont': 'TextEdit', 'TxtBoxHt': 'TextEdit', 'TxtBoxWd': 'TextEdit', 'TxtRefWd': 'TextEdit', 'TxtAttach': 'Range', 'TxtDir': 'Range', 'LnSpace': 'Range', 'SpaceFct': 'TextEdit', 'TxtMemo': 'TextEdit', 'ORIG_FID': 'Range', 'Bloco': 'TextEdit', 'Bloco_X': 'TextEdit', 'Bloco_Y': 'TextEdit', 'TextString_1': 'TextEdit', 'TextString_X': 'TextEdit', 'TextString_Y': 'TextEdit', 'espécie': 'TextEdit', 'CAP': 'TextEdit', 'ALTURA': 'TextEdit', 'ID': 'Range', 'OBS': 'TextEdit', });
lyr_Arvores_EN_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'FeatureID': 'Range', 'ZOrder': 'Range', 'AnnotationClassID': 'TextEdit', 'SymbolID': 'Range', 'Status': 'ValueMap', 'TextString': 'TextEdit', 'FontName': 'TextEdit', 'FontSize': 'TextEdit', 'Bold': 'ValueMap', 'Italic': 'ValueMap', 'Underline': 'ValueMap', 'VerticalAlignment': 'ValueMap', 'HorizontalAlignment': 'ValueMap', 'XOffset': 'TextEdit', 'YOffset': 'TextEdit', 'Angle': 'TextEdit', 'FontLeading': 'TextEdit', 'WordSpacing': 'TextEdit', 'CharacterWidth': 'TextEdit', 'CharacterSpacing': 'TextEdit', 'FlipAngle': 'TextEdit', 'Override': 'Range', 'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Owner': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrLock': 'Range', 'LyrOn': 'TextEdit', 'LyrVPFrzn': 'Range', 'LyrHandle': 'TextEdit', 'Color': 'Range', 'EntColor': 'Range', 'LyrColor': 'Range', 'BlkColor': 'Range', 'Linetype': 'TextEdit', 'EntLinetype': 'TextEdit', 'LyrLnType': 'TextEdit', 'BlkLinetype': 'TextEdit', 'Elevation': 'TextEdit', 'Thickness': 'TextEdit', 'LineWt': 'Range', 'EntLineWt': 'Range', 'LyrLineWt': 'Range', 'BlkLineWt': 'Range', 'RefName': 'TextEdit', 'LTScale': 'TextEdit', 'ExtX': 'TextEdit', 'ExtY': 'TextEdit', 'ExtZ': 'TextEdit', 'DocName': 'TextEdit', 'DocPath': 'TextEdit', 'DocType': 'TextEdit', 'DocVer': 'TextEdit', 'ScaleX': 'TextEdit', 'ScaleY': 'TextEdit', 'ScaleZ': 'TextEdit', 'Style': 'TextEdit', 'FontID': 'Range', 'Text': 'TextEdit', 'Height': 'TextEdit', 'TxtAngle': 'TextEdit', 'TxtWidth': 'TextEdit', 'TxtOblique': 'TextEdit', 'TxtGenType': 'TextEdit', 'TxtJust': 'TextEdit', 'VertAlign': 'TextEdit', 'TxtFont': 'TextEdit', 'TxtBoxHt': 'TextEdit', 'TxtBoxWd': 'TextEdit', 'TxtRefWd': 'TextEdit', 'TxtAttach': 'Range', 'TxtDir': 'Range', 'LnSpace': 'Range', 'SpaceFct': 'TextEdit', 'TxtMemo': 'TextEdit', 'ORIG_FID': 'Range', 'Bloco': 'TextEdit', 'Bloco_X': 'TextEdit', 'Bloco_Y': 'TextEdit', 'TextString_1': 'TextEdit', 'TextString_X': 'TextEdit', 'TextString_Y': 'TextEdit', 'espécie': 'TextEdit', 'CAP': 'TextEdit', 'ALTURA': 'TextEdit', 'ID': 'Range', 'OBS': 'TextEdit', });
lyr_Buffer_18m_4.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'snippet': 'TextEdit', });
lyr_arvores_tabela_5.set('fieldImages', {'ETIǪUETA': 'TextEdit', 'NORTE': 'TextEdit', 'ESTE': 'TextEdit', 'Field4': 'TextEdit', });
lyr_Arvores_Comuns_2.set('fieldLabels', {'OBJECTID': 'no label', 'FeatureID': 'no label', 'ZOrder': 'no label', 'AnnotationClassID': 'no label', 'SymbolID': 'no label', 'Status': 'no label', 'TextString': 'no label', 'FontName': 'no label', 'FontSize': 'no label', 'Bold': 'no label', 'Italic': 'no label', 'Underline': 'no label', 'VerticalAlignment': 'no label', 'HorizontalAlignment': 'no label', 'XOffset': 'no label', 'YOffset': 'no label', 'Angle': 'no label', 'FontLeading': 'no label', 'WordSpacing': 'no label', 'CharacterWidth': 'no label', 'CharacterSpacing': 'no label', 'FlipAngle': 'no label', 'Override': 'no label', 'Entity': 'no label', 'Handle': 'no label', 'Owner': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrLock': 'no label', 'LyrOn': 'no label', 'LyrVPFrzn': 'no label', 'LyrHandle': 'no label', 'Color': 'no label', 'EntColor': 'no label', 'LyrColor': 'no label', 'BlkColor': 'no label', 'Linetype': 'no label', 'EntLinetype': 'no label', 'LyrLnType': 'no label', 'BlkLinetype': 'no label', 'Elevation': 'no label', 'Thickness': 'no label', 'LineWt': 'no label', 'EntLineWt': 'no label', 'LyrLineWt': 'no label', 'BlkLineWt': 'no label', 'RefName': 'no label', 'LTScale': 'no label', 'ExtX': 'no label', 'ExtY': 'no label', 'ExtZ': 'no label', 'DocName': 'no label', 'DocPath': 'no label', 'DocType': 'no label', 'DocVer': 'no label', 'ScaleX': 'no label', 'ScaleY': 'no label', 'ScaleZ': 'no label', 'Style': 'no label', 'FontID': 'no label', 'Text': 'no label', 'Height': 'no label', 'TxtAngle': 'no label', 'TxtWidth': 'no label', 'TxtOblique': 'no label', 'TxtGenType': 'no label', 'TxtJust': 'no label', 'VertAlign': 'no label', 'TxtFont': 'no label', 'TxtBoxHt': 'no label', 'TxtBoxWd': 'no label', 'TxtRefWd': 'no label', 'TxtAttach': 'no label', 'TxtDir': 'no label', 'LnSpace': 'no label', 'SpaceFct': 'no label', 'TxtMemo': 'no label', 'ORIG_FID': 'no label', 'Bloco': 'no label', 'Bloco_X': 'no label', 'Bloco_Y': 'no label', 'TextString_1': 'no label', 'TextString_X': 'no label', 'TextString_Y': 'no label', 'espécie': 'no label', 'CAP': 'no label', 'ALTURA': 'no label', 'ID': 'no label', 'OBS': 'no label', });
lyr_Arvores_EN_3.set('fieldLabels', {'OBJECTID': 'no label', 'FeatureID': 'no label', 'ZOrder': 'no label', 'AnnotationClassID': 'no label', 'SymbolID': 'no label', 'Status': 'no label', 'TextString': 'no label', 'FontName': 'no label', 'FontSize': 'no label', 'Bold': 'no label', 'Italic': 'no label', 'Underline': 'no label', 'VerticalAlignment': 'no label', 'HorizontalAlignment': 'no label', 'XOffset': 'no label', 'YOffset': 'no label', 'Angle': 'no label', 'FontLeading': 'no label', 'WordSpacing': 'no label', 'CharacterWidth': 'no label', 'CharacterSpacing': 'no label', 'FlipAngle': 'no label', 'Override': 'no label', 'Entity': 'no label', 'Handle': 'no label', 'Owner': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrLock': 'no label', 'LyrOn': 'no label', 'LyrVPFrzn': 'no label', 'LyrHandle': 'no label', 'Color': 'no label', 'EntColor': 'no label', 'LyrColor': 'no label', 'BlkColor': 'no label', 'Linetype': 'no label', 'EntLinetype': 'no label', 'LyrLnType': 'no label', 'BlkLinetype': 'no label', 'Elevation': 'no label', 'Thickness': 'no label', 'LineWt': 'no label', 'EntLineWt': 'no label', 'LyrLineWt': 'no label', 'BlkLineWt': 'no label', 'RefName': 'no label', 'LTScale': 'no label', 'ExtX': 'no label', 'ExtY': 'no label', 'ExtZ': 'no label', 'DocName': 'no label', 'DocPath': 'no label', 'DocType': 'no label', 'DocVer': 'no label', 'ScaleX': 'no label', 'ScaleY': 'no label', 'ScaleZ': 'no label', 'Style': 'no label', 'FontID': 'no label', 'Text': 'no label', 'Height': 'no label', 'TxtAngle': 'no label', 'TxtWidth': 'no label', 'TxtOblique': 'no label', 'TxtGenType': 'no label', 'TxtJust': 'no label', 'VertAlign': 'no label', 'TxtFont': 'no label', 'TxtBoxHt': 'no label', 'TxtBoxWd': 'no label', 'TxtRefWd': 'no label', 'TxtAttach': 'no label', 'TxtDir': 'no label', 'LnSpace': 'no label', 'SpaceFct': 'no label', 'TxtMemo': 'no label', 'ORIG_FID': 'no label', 'Bloco': 'no label', 'Bloco_X': 'no label', 'Bloco_Y': 'no label', 'TextString_1': 'no label', 'TextString_X': 'header label - visible with data', 'TextString_Y': 'header label - visible with data', 'espécie': 'hidden field', 'CAP': 'no label', 'ALTURA': 'no label', 'ID': 'no label', 'OBS': 'no label', });
lyr_Buffer_18m_4.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_arvores_tabela_5.set('fieldLabels', {'ETIǪUETA': 'no label', 'NORTE': 'no label', 'ESTE': 'no label', 'Field4': 'no label', });
lyr_arvores_tabela_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});