var wms_layers = [];


        var lyr_ESRIWorldTopo_0 = new ol.layer.Tile({
            'title': 'ESRI World Topo',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_ESRIStandard_1 = new ol.layer.Tile({
            'title': 'ESRI Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_ESRIOcean_2 = new ol.layer.Tile({
            'title': 'ESRI Ocean',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_ESRISatellite_3 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_ESRIBoundariesPlaces_4 = new ol.layer.Tile({
            'title': 'ESRI Boundaries&Places',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Plantasdelicuefaccindegas_5 = new ol.format.GeoJSON();
var features_Plantasdelicuefaccindegas_5 = format_Plantasdelicuefaccindegas_5.readFeatures(json_Plantasdelicuefaccindegas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Plantasdelicuefaccindegas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Plantasdelicuefaccindegas_5.addFeatures(features_Plantasdelicuefaccindegas_5);
var lyr_Plantasdelicuefaccindegas_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Plantasdelicuefaccindegas_5, 
                style: style_Plantasdelicuefaccindegas_5,
                popuplayertitle: 'Plantas de licuefacción de gas',
                interactive: true,
                title: '<img src="styles/legend/Plantasdelicuefaccindegas_5.png" /> Plantas de licuefacción de gas'
            });
var format_Gasoductosenproyecto_6 = new ol.format.GeoJSON();
var features_Gasoductosenproyecto_6 = format_Gasoductosenproyecto_6.readFeatures(json_Gasoductosenproyecto_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gasoductosenproyecto_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gasoductosenproyecto_6.addFeatures(features_Gasoductosenproyecto_6);
var lyr_Gasoductosenproyecto_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gasoductosenproyecto_6, 
                style: style_Gasoductosenproyecto_6,
                popuplayertitle: 'Gasoductos en proyecto',
                interactive: true,
                title: '<img src="styles/legend/Gasoductosenproyecto_6.png" /> Gasoductos en proyecto'
            });
var format_Gasoductosenconstruccin_7 = new ol.format.GeoJSON();
var features_Gasoductosenconstruccin_7 = format_Gasoductosenconstruccin_7.readFeatures(json_Gasoductosenconstruccin_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gasoductosenconstruccin_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gasoductosenconstruccin_7.addFeatures(features_Gasoductosenconstruccin_7);
var lyr_Gasoductosenconstruccin_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gasoductosenconstruccin_7, 
                style: style_Gasoductosenconstruccin_7,
                popuplayertitle: 'Gasoductos en construcción',
                interactive: true,
                title: '<img src="styles/legend/Gasoductosenconstruccin_7.png" /> Gasoductos en construcción'
            });
var format_GasoductosnointengradosaSISTRANAGAS_8 = new ol.format.GeoJSON();
var features_GasoductosnointengradosaSISTRANAGAS_8 = format_GasoductosnointengradosaSISTRANAGAS_8.readFeatures(json_GasoductosnointengradosaSISTRANAGAS_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GasoductosnointengradosaSISTRANAGAS_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GasoductosnointengradosaSISTRANAGAS_8.addFeatures(features_GasoductosnointengradosaSISTRANAGAS_8);
var lyr_GasoductosnointengradosaSISTRANAGAS_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GasoductosnointengradosaSISTRANAGAS_8, 
                style: style_GasoductosnointengradosaSISTRANAGAS_8,
                popuplayertitle: 'Gasoductos no intengrados a SISTRANAGAS',
                interactive: true,
                title: '<img src="styles/legend/GasoductosnointengradosaSISTRANAGAS_8.png" /> Gasoductos no intengrados a SISTRANAGAS'
            });
var format_Centralesdecompresin_9 = new ol.format.GeoJSON();
var features_Centralesdecompresin_9 = format_Centralesdecompresin_9.readFeatures(json_Centralesdecompresin_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centralesdecompresin_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centralesdecompresin_9.addFeatures(features_Centralesdecompresin_9);
var lyr_Centralesdecompresin_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Centralesdecompresin_9, 
                style: style_Centralesdecompresin_9,
                popuplayertitle: 'Centrales de compresión',
                interactive: true,
                title: '<img src="styles/legend/Centralesdecompresin_9.png" /> Centrales de compresión'
            });
var format_ReddeSISTRANGAS_10 = new ol.format.GeoJSON();
var features_ReddeSISTRANGAS_10 = format_ReddeSISTRANGAS_10.readFeatures(json_ReddeSISTRANGAS_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReddeSISTRANGAS_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReddeSISTRANGAS_10.addFeatures(features_ReddeSISTRANGAS_10);
var lyr_ReddeSISTRANGAS_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReddeSISTRANGAS_10, 
                style: style_ReddeSISTRANGAS_10,
                popuplayertitle: 'Red de SISTRANGAS',
                interactive: true,
                title: '<img src="styles/legend/ReddeSISTRANGAS_10.png" /> Red de SISTRANGAS'
            });
var format_Cuencasdegasshale_11 = new ol.format.GeoJSON();
var features_Cuencasdegasshale_11 = format_Cuencasdegasshale_11.readFeatures(json_Cuencasdegasshale_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cuencasdegasshale_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cuencasdegasshale_11.addFeatures(features_Cuencasdegasshale_11);
var lyr_Cuencasdegasshale_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cuencasdegasshale_11, 
                style: style_Cuencasdegasshale_11,
                popuplayertitle: 'Cuencas de gas shale',
                interactive: true,
                title: '<img src="styles/legend/Cuencasdegasshale_11.png" /> Cuencas de gas shale'
            });
var format_anpmx_12 = new ol.format.GeoJSON();
var features_anpmx_12 = format_anpmx_12.readFeatures(json_anpmx_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_anpmx_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_anpmx_12.addFeatures(features_anpmx_12);
var lyr_anpmx_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_anpmx_12, 
                style: style_anpmx_12,
                popuplayertitle: 'anpmx',
                interactive: true,
                title: '<img src="styles/legend/anpmx_12.png" /> anpmx'
            });
var format_DuctosdeImportacion_13 = new ol.format.GeoJSON();
var features_DuctosdeImportacion_13 = format_DuctosdeImportacion_13.readFeatures(json_DuctosdeImportacion_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DuctosdeImportacion_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DuctosdeImportacion_13.addFeatures(features_DuctosdeImportacion_13);
var lyr_DuctosdeImportacion_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DuctosdeImportacion_13, 
                style: style_DuctosdeImportacion_13,
                popuplayertitle: 'Ductos de Importacion',
                interactive: true,
                title: '<img src="styles/legend/DuctosdeImportacion_13.png" /> Ductos de Importacion'
            });

lyr_ESRIWorldTopo_0.setVisible(true);lyr_ESRIStandard_1.setVisible(true);lyr_ESRIOcean_2.setVisible(true);lyr_ESRISatellite_3.setVisible(true);lyr_ESRIBoundariesPlaces_4.setVisible(true);lyr_Plantasdelicuefaccindegas_5.setVisible(true);lyr_Gasoductosenproyecto_6.setVisible(true);lyr_Gasoductosenconstruccin_7.setVisible(true);lyr_GasoductosnointengradosaSISTRANAGAS_8.setVisible(true);lyr_Centralesdecompresin_9.setVisible(true);lyr_ReddeSISTRANGAS_10.setVisible(true);lyr_Cuencasdegasshale_11.setVisible(true);lyr_anpmx_12.setVisible(true);lyr_DuctosdeImportacion_13.setVisible(true);
var layersList = [lyr_ESRIWorldTopo_0,lyr_ESRIStandard_1,lyr_ESRIOcean_2,lyr_ESRISatellite_3,lyr_ESRIBoundariesPlaces_4,lyr_Plantasdelicuefaccindegas_5,lyr_Gasoductosenproyecto_6,lyr_Gasoductosenconstruccin_7,lyr_GasoductosnointengradosaSISTRANAGAS_8,lyr_Centralesdecompresin_9,lyr_ReddeSISTRANGAS_10,lyr_Cuencasdegasshale_11,lyr_anpmx_12,lyr_DuctosdeImportacion_13];
lyr_Plantasdelicuefaccindegas_5.set('fieldAliases', {'Name': 'Name', 'Localidad': 'Localidad', 'Conexi__n': 'Conexi__n', 'Permisiona': 'Permisiona', 'No__Permis': 'No__Permis', 'Inicio_Ope': 'Inicio_Ope', 'Consorcio': 'Consorcio', 'Capacidad_': 'Capacidad_', 'Infraestru': 'Infraestru', 'Notas/cont': 'Notas/cont', 'Fecha_Oper': 'Fecha_Oper', 'Fecha_Expo': 'Fecha_Expo', 'Estatus': 'Estatus', 'Monto_Inv': 'Monto_Inv', 'Cap_Fase1': 'Cap_Fase1', 'Cap_Fase2': 'Cap_Fase2', 'Cap_Fase3': 'Cap_Fase3', 'Cap_Fase4': 'Cap_Fase4', 'Cap_Fase5': 'Cap_Fase5', 'Permiso_EU': 'Permiso_EU', 'Num_Proyec': 'Num_Proyec', });
lyr_Gasoductosenproyecto_6.set('fieldAliases', {'nombre': 'nombre', 'proyecto': 'proyecto', 'tipo': 'tipo', 'capacidad_': 'capacidad_', 'inversin_m': 'inversin_m', 'desarrolla': 'desarrolla', 'promotor': 'promotor', 'longitud_k': 'longitud_k', 'tramo': 'tramo', 'permiso_cr': 'permiso_cr', 'fecha_de_i': 'fecha_de_i', 'zona_tarif': 'zona_tarif', 'integrado_': 'integrado_', 'observacio': 'observacio', });
lyr_Gasoductosenconstruccin_7.set('fieldAliases', {'nombre': 'nombre', 'proyecto': 'proyecto', 'tipo': 'tipo', 'capacidad_': 'capacidad_', 'inversin_m': 'inversin_m', 'desarrolla': 'desarrolla', 'promotor': 'promotor', 'longitud_k': 'longitud_k', 'tramo': 'tramo', 'permiso_cr': 'permiso_cr', 'fecha_de_i': 'fecha_de_i', 'zona_tarif': 'zona_tarif', 'integrado_': 'integrado_', 'observacio': 'observacio', });
lyr_GasoductosnointengradosaSISTRANAGAS_8.set('fieldAliases', {'nombre': 'nombre', 'proyecto': 'proyecto', 'tipo': 'tipo', 'capacidad_': 'capacidad_', 'inversin_m': 'inversin_m', 'desarrolla': 'desarrolla', 'promotor': 'promotor', 'longitud_k': 'longitud_k', 'tramo': 'tramo', 'permiso_cr': 'permiso_cr', 'fecha_de_i': 'fecha_de_i', 'zona_tarif': 'zona_tarif', 'integrado_': 'integrado_', 'observacio': 'observacio', });
lyr_Centralesdecompresin_9.set('fieldAliases', {'estaciones': 'estaciones', });
lyr_ReddeSISTRANGAS_10.set('fieldAliases', {'ducto': 'ducto', 'proyecto': 'proyecto', 'tipo': 'tipo', 'longitud_k': 'longitud_k', 'tramo': 'tramo', 'permiso_cr': 'permiso_cr', 'inicio_de_': 'inicio_de_', 'zona_tarif': 'zona_tarif', 'integrado_': 'integrado_', 'notas': 'notas', });
lyr_Cuencasdegasshale_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'MasterID': 'MasterID', 'Basin_Name': 'Basin_Name', 'Shale_Form': 'Shale_Form', 'Geologic_A': 'Geologic_A', 'Basin_Area': 'Basin_Area', 'Prospectiv': 'Prospectiv', 'Thickness_': 'Thickness_', 'Thicknes_1': 'Thicknes_1', 'Thicknes_2': 'Thicknes_2', 'Thicknes_3': 'Thicknes_3', 'Depth_Inte': 'Depth_Inte', 'Depth_In_1': 'Depth_In_1', 'Depth_Aver': 'Depth_Aver', 'Thicknes_4': 'Thicknes_4', 'Reservoir_': 'Reservoir_', 'Pressure_G': 'Pressure_G', 'TOC_Weight': 'TOC_Weight', 'Thermal_Ma': 'Thermal_Ma', 'Average_Te': 'Average_Te', 'Porosity_p': 'Porosity_p', 'Matrix_Per': 'Matrix_Per', 'Gas_Phase': 'Gas_Phase', 'GIP_Assoc_': 'GIP_Assoc_', 'Average_Ri': 'Average_Ri', 'Average__1': 'Average__1', 'GIP_Dry_Ga': 'GIP_Dry_Ga', 'Average__2': 'Average__2', 'Average__3': 'Average__3', 'GIP_Wet_Ga': 'GIP_Wet_Ga', 'Average__4': 'Average__4', 'Average__5': 'Average__5', 'Oil_Phase': 'Oil_Phase', 'OIP_Oil_Co': 'OIP_Oil_Co', 'Average__6': 'Average__6', 'Average__7': 'Average__7', 'OIP_Conden': 'OIP_Conden', 'Average__8': 'Average__8', 'Average__9': 'Average__9', 'Shale_Reso': 'Shale_Reso', 'Adsorbed_G': 'Adsorbed_G', 'Silica_Cal': 'Silica_Cal', 'Clay_Conte': 'Clay_Conte', 'Lithology': 'Lithology', 'Oil_Potent': 'Oil_Potent', 'NGL_Potent': 'NGL_Potent', 'Gas_Potent': 'Gas_Potent', 'Fracturing': 'Fracturing', 'Active_Exp': 'Active_Exp', 'Activity_S': 'Activity_S', 'Commercial': 'Commercial', 'Acreage_Pe': 'Acreage_Pe', 'Active_Pro': 'Active_Pro', 'Country': 'Country', 'Sources': 'Sources', 'Hyperlink': 'Hyperlink', 'Georef_Sca': 'Georef_Sca', 'Comments': 'Comments', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Hydrocarbo': 'Hydrocarbo', 'GIP_Concen': 'GIP_Concen', 'OIP_Concen': 'OIP_Concen', 'Risked_OIP': 'Risked_OIP', 'Risked_Rec': 'Risked_Rec', 'Average_Qu': 'Average_Qu', 'Average_Ca': 'Average_Ca', 'Label_ID': 'Label_ID', 'layer': 'layer', 'path': 'path', });
lyr_anpmx_12.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'CAT_MANEJO': 'CAT_MANEJO', 'ESTADOS': 'ESTADOS', 'MUNICIPIOS': 'MUNICIPIOS', 'REGION': 'REGION', 'SUPERFICIE': 'SUPERFICIE', 'S_TERRES': 'S_TERRES', 'S_MARINA': 'S_MARINA', 'PRIM_DEC': 'PRIM_DEC', 'ULT_DOF': 'ULT_DOF', 'PCM1': 'PCM1', 'SINAP': 'SINAP', 'ID_ANP': 'ID_ANP', 'cov_id': 'cov_id', 'etiqueta': 'etiqueta', 'numpoligon': 'numpoligon', 'cita': 'cita', 'NUM_ANP': 'NUM_ANP', });
lyr_DuctosdeImportacion_13.set('fieldAliases', {'nombre': 'nombre', 'longitud': 'longitud', 'permisiona': 'permisiona', 'nmero_de_p': 'nmero_de_p', });
lyr_Plantasdelicuefaccindegas_5.set('fieldImages', {'Name': 'TextEdit', 'Localidad': 'TextEdit', 'Conexi__n': 'TextEdit', 'Permisiona': 'TextEdit', 'No__Permis': 'TextEdit', 'Inicio_Ope': 'TextEdit', 'Consorcio': 'TextEdit', 'Capacidad_': 'TextEdit', 'Infraestru': 'TextEdit', 'Notas/cont': 'TextEdit', 'Fecha_Oper': 'TextEdit', 'Fecha_Expo': 'TextEdit', 'Estatus': 'TextEdit', 'Monto_Inv': 'TextEdit', 'Cap_Fase1': 'TextEdit', 'Cap_Fase2': 'TextEdit', 'Cap_Fase3': 'TextEdit', 'Cap_Fase4': 'TextEdit', 'Cap_Fase5': 'TextEdit', 'Permiso_EU': 'TextEdit', 'Num_Proyec': 'TextEdit', });
lyr_Gasoductosenproyecto_6.set('fieldImages', {'nombre': 'TextEdit', 'proyecto': 'TextEdit', 'tipo': 'TextEdit', 'capacidad_': 'TextEdit', 'inversin_m': 'TextEdit', 'desarrolla': 'TextEdit', 'promotor': 'TextEdit', 'longitud_k': 'TextEdit', 'tramo': 'TextEdit', 'permiso_cr': 'TextEdit', 'fecha_de_i': 'TextEdit', 'zona_tarif': 'TextEdit', 'integrado_': 'TextEdit', 'observacio': 'TextEdit', });
lyr_Gasoductosenconstruccin_7.set('fieldImages', {'nombre': 'TextEdit', 'proyecto': 'TextEdit', 'tipo': 'TextEdit', 'capacidad_': 'TextEdit', 'inversin_m': 'TextEdit', 'desarrolla': 'TextEdit', 'promotor': 'TextEdit', 'longitud_k': 'TextEdit', 'tramo': 'TextEdit', 'permiso_cr': 'TextEdit', 'fecha_de_i': 'TextEdit', 'zona_tarif': 'TextEdit', 'integrado_': 'TextEdit', 'observacio': 'TextEdit', });
lyr_GasoductosnointengradosaSISTRANAGAS_8.set('fieldImages', {'nombre': 'TextEdit', 'proyecto': 'TextEdit', 'tipo': 'TextEdit', 'capacidad_': 'TextEdit', 'inversin_m': 'TextEdit', 'desarrolla': 'TextEdit', 'promotor': 'TextEdit', 'longitud_k': 'TextEdit', 'tramo': 'TextEdit', 'permiso_cr': 'TextEdit', 'fecha_de_i': 'TextEdit', 'zona_tarif': 'TextEdit', 'integrado_': 'TextEdit', 'observacio': 'TextEdit', });
lyr_Centralesdecompresin_9.set('fieldImages', {'estaciones': '', });
lyr_ReddeSISTRANGAS_10.set('fieldImages', {'ducto': 'TextEdit', 'proyecto': 'TextEdit', 'tipo': 'TextEdit', 'longitud_k': 'TextEdit', 'tramo': 'TextEdit', 'permiso_cr': 'TextEdit', 'inicio_de_': 'TextEdit', 'zona_tarif': 'TextEdit', 'integrado_': 'TextEdit', 'notas': 'TextEdit', });
lyr_Cuencasdegasshale_11.set('fieldImages', {'OBJECTID': 'TextEdit', 'MasterID': 'TextEdit', 'Basin_Name': 'TextEdit', 'Shale_Form': 'TextEdit', 'Geologic_A': 'TextEdit', 'Basin_Area': 'TextEdit', 'Prospectiv': 'TextEdit', 'Thickness_': 'TextEdit', 'Thicknes_1': 'TextEdit', 'Thicknes_2': 'TextEdit', 'Thicknes_3': 'TextEdit', 'Depth_Inte': 'TextEdit', 'Depth_In_1': 'TextEdit', 'Depth_Aver': 'TextEdit', 'Thicknes_4': 'TextEdit', 'Reservoir_': 'TextEdit', 'Pressure_G': 'TextEdit', 'TOC_Weight': 'TextEdit', 'Thermal_Ma': 'TextEdit', 'Average_Te': 'TextEdit', 'Porosity_p': 'TextEdit', 'Matrix_Per': 'TextEdit', 'Gas_Phase': 'TextEdit', 'GIP_Assoc_': 'TextEdit', 'Average_Ri': 'TextEdit', 'Average__1': 'TextEdit', 'GIP_Dry_Ga': 'TextEdit', 'Average__2': 'TextEdit', 'Average__3': 'TextEdit', 'GIP_Wet_Ga': 'TextEdit', 'Average__4': 'TextEdit', 'Average__5': 'TextEdit', 'Oil_Phase': 'TextEdit', 'OIP_Oil_Co': 'TextEdit', 'Average__6': 'TextEdit', 'Average__7': 'TextEdit', 'OIP_Conden': 'TextEdit', 'Average__8': 'TextEdit', 'Average__9': 'TextEdit', 'Shale_Reso': 'TextEdit', 'Adsorbed_G': 'TextEdit', 'Silica_Cal': 'TextEdit', 'Clay_Conte': 'TextEdit', 'Lithology': 'TextEdit', 'Oil_Potent': 'TextEdit', 'NGL_Potent': 'TextEdit', 'Gas_Potent': 'TextEdit', 'Fracturing': 'TextEdit', 'Active_Exp': 'TextEdit', 'Activity_S': 'TextEdit', 'Commercial': 'TextEdit', 'Acreage_Pe': 'TextEdit', 'Active_Pro': 'TextEdit', 'Country': 'TextEdit', 'Sources': 'TextEdit', 'Hyperlink': 'TextEdit', 'Georef_Sca': 'TextEdit', 'Comments': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Hydrocarbo': 'TextEdit', 'GIP_Concen': 'TextEdit', 'OIP_Concen': 'TextEdit', 'Risked_OIP': 'TextEdit', 'Risked_Rec': 'TextEdit', 'Average_Qu': 'TextEdit', 'Average_Ca': 'TextEdit', 'Label_ID': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_anpmx_12.set('fieldImages', {'NOMBRE': 'TextEdit', 'CAT_MANEJO': 'TextEdit', 'ESTADOS': 'TextEdit', 'MUNICIPIOS': 'TextEdit', 'REGION': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'S_TERRES': 'TextEdit', 'S_MARINA': 'TextEdit', 'PRIM_DEC': 'DateTime', 'ULT_DOF': 'DateTime', 'PCM1': 'TextEdit', 'SINAP': 'TextEdit', 'ID_ANP': 'TextEdit', 'cov_id': 'TextEdit', 'etiqueta': 'TextEdit', 'numpoligon': 'TextEdit', 'cita': 'TextEdit', 'NUM_ANP': 'Range', });
lyr_DuctosdeImportacion_13.set('fieldImages', {'nombre': 'TextEdit', 'longitud': 'TextEdit', 'permisiona': 'TextEdit', 'nmero_de_p': 'TextEdit', });
lyr_Plantasdelicuefaccindegas_5.set('fieldLabels', {'Name': 'inline label - visible with data', 'Localidad': 'inline label - visible with data', 'Conexi__n': 'inline label - visible with data', 'Permisiona': 'inline label - visible with data', 'No__Permis': 'inline label - visible with data', 'Inicio_Ope': 'inline label - visible with data', 'Consorcio': 'inline label - visible with data', 'Capacidad_': 'inline label - visible with data', 'Infraestru': 'inline label - visible with data', 'Notas/cont': 'inline label - visible with data', 'Fecha_Oper': 'inline label - visible with data', 'Fecha_Expo': 'inline label - visible with data', 'Estatus': 'inline label - visible with data', 'Monto_Inv': 'inline label - visible with data', 'Cap_Fase1': 'inline label - visible with data', 'Cap_Fase2': 'inline label - visible with data', 'Cap_Fase3': 'inline label - visible with data', 'Cap_Fase4': 'inline label - visible with data', 'Cap_Fase5': 'inline label - visible with data', 'Permiso_EU': 'inline label - visible with data', 'Num_Proyec': 'inline label - visible with data', });
lyr_Gasoductosenproyecto_6.set('fieldLabels', {'nombre': 'inline label - visible with data', 'proyecto': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'capacidad_': 'inline label - visible with data', 'inversin_m': 'inline label - visible with data', 'desarrolla': 'inline label - visible with data', 'promotor': 'inline label - visible with data', 'longitud_k': 'inline label - visible with data', 'tramo': 'inline label - visible with data', 'permiso_cr': 'inline label - visible with data', 'fecha_de_i': 'inline label - visible with data', 'zona_tarif': 'inline label - visible with data', 'integrado_': 'inline label - visible with data', 'observacio': 'hidden field', });
lyr_Gasoductosenconstruccin_7.set('fieldLabels', {'nombre': 'inline label - visible with data', 'proyecto': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'capacidad_': 'inline label - visible with data', 'inversin_m': 'inline label - visible with data', 'desarrolla': 'inline label - visible with data', 'promotor': 'inline label - visible with data', 'longitud_k': 'inline label - visible with data', 'tramo': 'inline label - visible with data', 'permiso_cr': 'inline label - visible with data', 'fecha_de_i': 'inline label - visible with data', 'zona_tarif': 'inline label - visible with data', 'integrado_': 'inline label - visible with data', 'observacio': 'hidden field', });
lyr_GasoductosnointengradosaSISTRANAGAS_8.set('fieldLabels', {'nombre': 'inline label - always visible', 'proyecto': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'capacidad_': 'inline label - visible with data', 'inversin_m': 'inline label - visible with data', 'desarrolla': 'inline label - visible with data', 'promotor': 'inline label - visible with data', 'longitud_k': 'inline label - visible with data', 'tramo': 'inline label - visible with data', 'permiso_cr': 'inline label - visible with data', 'fecha_de_i': 'inline label - visible with data', 'zona_tarif': 'inline label - visible with data', 'integrado_': 'inline label - visible with data', 'observacio': 'hidden field', });
lyr_Centralesdecompresin_9.set('fieldLabels', {'estaciones': 'inline label - always visible', });
lyr_ReddeSISTRANGAS_10.set('fieldLabels', {'ducto': 'inline label - always visible', 'proyecto': 'inline label - always visible', 'tipo': 'inline label - always visible', 'longitud_k': 'inline label - always visible', 'tramo': 'inline label - always visible', 'permiso_cr': 'inline label - always visible', 'inicio_de_': 'inline label - always visible', 'zona_tarif': 'inline label - always visible', 'integrado_': 'inline label - always visible', 'notas': 'hidden field', });
lyr_Cuencasdegasshale_11.set('fieldLabels', {'OBJECTID': 'hidden field', 'MasterID': 'hidden field', 'Basin_Name': 'inline label - always visible', 'Shale_Form': 'inline label - always visible', 'Geologic_A': 'inline label - always visible', 'Basin_Area': 'inline label - always visible', 'Prospectiv': 'inline label - always visible', 'Thickness_': 'inline label - always visible', 'Thicknes_1': 'hidden field', 'Thicknes_2': 'hidden field', 'Thicknes_3': 'hidden field', 'Depth_Inte': 'hidden field', 'Depth_In_1': 'hidden field', 'Depth_Aver': 'inline label - always visible', 'Thicknes_4': 'hidden field', 'Reservoir_': 'hidden field', 'Pressure_G': 'hidden field', 'TOC_Weight': 'hidden field', 'Thermal_Ma': 'hidden field', 'Average_Te': 'hidden field', 'Porosity_p': 'inline label - always visible', 'Matrix_Per': 'hidden field', 'Gas_Phase': 'inline label - always visible', 'GIP_Assoc_': 'inline label - always visible', 'Average_Ri': 'hidden field', 'Average__1': 'hidden field', 'GIP_Dry_Ga': 'hidden field', 'Average__2': 'hidden field', 'Average__3': 'hidden field', 'GIP_Wet_Ga': 'hidden field', 'Average__4': 'hidden field', 'Average__5': 'hidden field', 'Oil_Phase': 'inline label - always visible', 'OIP_Oil_Co': 'inline label - always visible', 'Average__6': 'hidden field', 'Average__7': 'hidden field', 'OIP_Conden': 'hidden field', 'Average__8': 'hidden field', 'Average__9': 'hidden field', 'Shale_Reso': 'hidden field', 'Adsorbed_G': 'hidden field', 'Silica_Cal': 'hidden field', 'Clay_Conte': 'hidden field', 'Lithology': 'hidden field', 'Oil_Potent': 'hidden field', 'NGL_Potent': 'hidden field', 'Gas_Potent': 'hidden field', 'Fracturing': 'inline label - always visible', 'Active_Exp': 'hidden field', 'Activity_S': 'hidden field', 'Commercial': 'hidden field', 'Acreage_Pe': 'hidden field', 'Active_Pro': 'hidden field', 'Country': 'hidden field', 'Sources': 'inline label - always visible', 'Hyperlink': 'hidden field', 'Georef_Sca': 'hidden field', 'Comments': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'Hydrocarbo': 'hidden field', 'GIP_Concen': 'hidden field', 'OIP_Concen': 'hidden field', 'Risked_OIP': 'hidden field', 'Risked_Rec': 'hidden field', 'Average_Qu': 'hidden field', 'Average_Ca': 'hidden field', 'Label_ID': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_anpmx_12.set('fieldLabels', {'NOMBRE': 'inline label - always visible', 'CAT_MANEJO': 'inline label - always visible', 'ESTADOS': 'inline label - always visible', 'MUNICIPIOS': 'inline label - always visible', 'REGION': 'inline label - always visible', 'SUPERFICIE': 'inline label - always visible', 'S_TERRES': 'hidden field', 'S_MARINA': 'hidden field', 'PRIM_DEC': 'hidden field', 'ULT_DOF': 'hidden field', 'PCM1': 'hidden field', 'SINAP': 'hidden field', 'ID_ANP': 'hidden field', 'cov_id': 'hidden field', 'etiqueta': 'hidden field', 'numpoligon': 'hidden field', 'cita': 'hidden field', 'NUM_ANP': 'hidden field', });
lyr_DuctosdeImportacion_13.set('fieldLabels', {'nombre': 'inline label - always visible', 'longitud': 'inline label - always visible', 'permisiona': 'inline label - always visible', 'nmero_de_p': 'inline label - always visible', });
lyr_DuctosdeImportacion_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});