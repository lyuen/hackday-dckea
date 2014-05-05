/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'Text2',
            type:'text',
            rect:['473px','670px','141px','39px','auto','auto'],
            text:"Aisle 1",
            align:"center",
            font:['Arial, Helvetica, sans-serif',24,"rgba(0,0,0,1)","normal","none",""]
         },
         {
            id:'Text2Copy',
            type:'text',
            rect:['762px','670px','141px','39px','auto','auto'],
            text:"Delivery",
            align:"center",
            font:['Arial, Helvetica, sans-serif',24,"rgba(0,0,0,1)","normal","none",""]
         },
         {
            id:'DCAPE',
            type:'rect',
            rect:['71','51','auto','auto','auto','auto']
         },
         {
            id:'Rectangle2',
            type:'rect',
            rect:['12px','561px','116px','159px','auto','auto'],
            fill:["rgba(73,109,246,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'Text',
            type:'text',
            rect:['42px','627px','auto','auto','auto','auto'],
            text:"Cart",
            font:['Arial, Helvetica, sans-serif',24,"rgba(255,246,0,1.00)","normal","none",""]
         },
         {
            id:'Rectangle3',
            type:'rect',
            rect:['538px','628px','13px','183px','auto','auto'],
            fill:["rgba(0,0,0,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[[],['-90deg']]
         },
         {
            id:'Rectangle3Copy',
            type:'rect',
            rect:['827px','628px','13px','183px','auto','auto'],
            fill:["rgba(0,0,0,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[[],['-90deg']]
         },
         {
            id:'shelf_1',
            type:'rect',
            rect:['225','14','auto','auto','auto','auto']
         },
         {
            id:'shelf_1Copy',
            type:'rect',
            rect:['225','14','auto','auto','auto','auto']
         },
         {
            id:'shelf_1Copy2',
            type:'rect',
            rect:['225','14','auto','auto','auto','auto']
         },
         {
            id:'shelf_1Copy3',
            type:'rect',
            rect:['225','14','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'shelf_1Copy',
            symbolName:'shelf_1'
         },
         {
            id:'shelf_1Copy3',
            symbolName:'shelf_1'
         },
         {
            id:'shelf_1',
            symbolName:'shelf_1'
         },
         {
            id:'DCAPE',
            symbolName:'DCAPE'
         },
         {
            id:'shelf_1Copy2',
            symbolName:'shelf_1'
         }
         ]
      },
   states: {
      "Base State": {
         "${_DCAPE}": [
            ["style", "top", '646.28px'],
            ["style", "left", '150.32px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Rectangle2}": [
            ["style", "height", '158.68326822917px'],
            ["color", "background-color", 'rgba(73,109,246,1.00)'],
            ["style", "left", '11.67px'],
            ["style", "top", '561.33px']
         ],
         "${_Text2Copy}": [
            ["style", "top", '670px'],
            ["style", "left", '762px'],
            ["style", "text-align", 'center']
         ],
         "${_shelf_1Copy2}": [
            ["style", "left", '701px']
         ],
         "${_Text2}": [
            ["style", "top", '670.35px'],
            ["style", "left", '473px'],
            ["style", "text-align", 'center']
         ],
         "${_shelf_1Copy3}": [
            ["style", "left", '936px']
         ],
         "${_Rectangle3}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["transform", "rotateZ", '-90deg'],
            ["style", "height", '182.98333740234px'],
            ["style", "left", '537.62px'],
            ["style", "top", '627.98px']
         ],
         "${_Text}": [
            ["style", "top", '627px'],
            ["style", "left", '41.67px'],
            ["color", "color", 'rgba(255,246,0,1.00)']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '1000px'],
            ["style", "height", '720px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Rectangle3Copy}": [
            ["color", "background-color", 'rgba(0,0,0,1)'],
            ["transform", "rotateZ", '-90deg'],
            ["style", "height", '182.98333740234px'],
            ["style", "left", '826.95px'],
            ["style", "top", '628.01px']
         ],
         "${_shelf_1Copy}": [
            ["style", "left", '468px'],
            ["style", "top", '13px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
            { id: "eid187", tween: [ "style", "${_shelf_1Copy2}", "left", '701px', { fromValue: '701px'}], position: 0, duration: 0 },
            { id: "eid193", tween: [ "style", "${_DCAPE}", "top", '646.28px', { fromValue: '646.28px'}], position: 0, duration: 0 },
            { id: "eid186", tween: [ "style", "${_shelf_1Copy3}", "left", '936px', { fromValue: '936px'}], position: 0, duration: 0 },
            { id: "eid188", tween: [ "style", "${_shelf_1Copy}", "left", '468px', { fromValue: '468px'}], position: 0, duration: 0 },
            { id: "eid189", tween: [ "style", "${_shelf_1Copy}", "top", '13px', { fromValue: '13px'}], position: 0, duration: 0 },
            { id: "eid182", tween: [ "style", "${_DCAPE}", "left", '150.32px', { fromValue: '150.32px'}], position: 0, duration: 0 }         ]
      }
   }
},
"DCAPE": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: true,
   content: {
   dom: [
   {
      id: 'DCAPE_body',
      type: 'rect',
      rect: ['0','0','auto','auto','auto','auto']
   },
   {
      id: 'stockholm_sofa',
      type: 'rect',
      rect: ['556','-279','auto','auto','auto','auto']
   },
   {
      id: 'billsta_table',
      type: 'rect',
      rect: ['91','-504','auto','auto','auto','auto']
   },
   {
      id: 'errland_chair',
      type: 'rect',
      rect: ['795','-431','auto','auto','auto','auto']
   },
   {
      id: 'glenn_stool',
      type: 'rect',
      rect: ['339','-590','auto','auto','auto','auto']
   },
   {
      id: 'hemnes_table',
      type: 'rect',
      rect: ['556','-474','auto','auto','auto','auto']
   },
   {
      id: 'userCart1',
      type: 'rect',
      rect: ['-104','-6','auto','auto','auto','auto']
   },
   {
      rect: ['473px','670px','141px','39px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
      id: 'Text2Copy2',
      text: 'Aisle 1',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   {
      id: 'hemnes_table',
      symbolName: 'hemnes_table'
   },
   {
      id: 'userCart1',
      symbolName: 'userCart1'
   },
   {
      id: 'stockholm_sofa',
      symbolName: 'stockholm_sofa'
   },
   {
      id: 'glenn_stool',
      symbolName: 'glenn_stool'
   },
   {
      id: 'DCAPE_body',
      symbolName: 'DCAPE_head'
   },
   {
      id: 'errland_chair',
      symbolName: 'errland_chair'
   },
   {
      id: 'billsta_table',
      symbolName: 'billsta_table'
   }   ]
   },
   states: {
      "Base State": {
         "${_glenn_stool}": [
            ["style", "top", '-590px'],
            ["style", "left", '339px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_userCart1}": [
            ["style", "top", '-6px'],
            ["style", "left", '-104px'],
            ["transform", "rotateZ", '90deg']
         ],
         "${_billsta_table}": [
            ["style", "top", '-504px'],
            ["style", "left", '91px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Text2Copy3}": [
            ["style", "top", '670.35px'],
            ["style", "left", '473px']
         ],
         "${_DCAPE_body}": [
            ["transform", "scaleX", '0.84127'],
            ["style", "top", '4px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '90deg']
         ],
         "${_Text2Copy2}": [
            ["style", "top", '670.35px'],
            ["style", "left", '473px'],
            ["style", "text-align", 'center']
         ],
         "${symbolSelector}": [
            ["style", "height", '62.666667938232px'],
            ["style", "width", '62.666667938232px']
         ],
         "${_hemnes_table}": [
            ["style", "top", '-474px'],
            ["style", "left", '556px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_stockholm_sofa}": [
            ["style", "top", '-279px'],
            ["style", "left", '556px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_errland_chair}": [
            ["style", "top", '-431px'],
            ["style", "left", '795px'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 32250,
         autoPlay: false,
         labels: {
            "grabBilstaTable": 45,
            "endBilstaTable": 3750,
            "grabGlenStool": 4000,
            "done": 8750,
            "grabStockholmSofa": 9000,
            "grabErrlandChair": 14000,
            "grabHemnesTable": 19250,
            "checkOutAisle1": 24000,
            "checkOutDelivery": 27750
         },
         timeline: [
            { id: "eid214", tween: [ "style", "${_DCAPE_body}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid225", tween: [ "style", "${_DCAPE_body}", "left", '244px', { fromValue: '0px'}], position: 45, duration: 455 },
            { id: "eid229", tween: [ "style", "${_DCAPE_body}", "left", '244px', { fromValue: '244px'}], position: 750, duration: 0 },
            { id: "eid238", tween: [ "style", "${_DCAPE_body}", "left", '140px', { fromValue: '244px'}], position: 1500, duration: 250 },
            { id: "eid261", tween: [ "style", "${_DCAPE_body}", "left", '138px', { fromValue: '140px'}], position: 1750, duration: 250 },
            { id: "eid262", tween: [ "style", "${_DCAPE_body}", "left", '143px', { fromValue: '138px'}], position: 2000, duration: 250 },
            { id: "eid263", tween: [ "style", "${_DCAPE_body}", "left", '143px', { fromValue: '143px'}], position: 2750, duration: 0 },
            { id: "eid286", tween: [ "style", "${_DCAPE_body}", "left", '-10px', { fromValue: '143px'}], position: 3000, duration: 290 },
            { id: "eid603", tween: [ "style", "${_DCAPE_body}", "left", '0px', { fromValue: '-10px'}], position: 3290, duration: 460 },
            { id: "eid332", tween: [ "style", "${_DCAPE_body}", "left", '480px', { fromValue: '0px'}], position: 4000, duration: 750 },
            { id: "eid336", tween: [ "style", "${_DCAPE_body}", "left", '480px', { fromValue: '480px'}], position: 5000, duration: 0 },
            { id: "eid343", tween: [ "style", "${_DCAPE_body}", "left", '386px', { fromValue: '480px'}], position: 5862, duration: 138 },
            { id: "eid356", tween: [ "style", "${_DCAPE_body}", "left", '386px', { fromValue: '386px'}], position: 6500, duration: 0 },
            { id: "eid368", tween: [ "style", "${_DCAPE_body}", "left", '386px', { fromValue: '386px'}], position: 6750, duration: 0 },
            { id: "eid373", tween: [ "style", "${_DCAPE_body}", "left", '386px', { fromValue: '386px'}], position: 7500, duration: 0 },
            { id: "eid386", tween: [ "style", "${_DCAPE_body}", "left", '-10.5px', { fromValue: '386px'}], position: 7750, duration: 625 },
            { id: "eid607", tween: [ "style", "${_DCAPE_body}", "left", '0px', { fromValue: '-10.5px'}], position: 8375, duration: 585 },
            { id: "eid428", tween: [ "style", "${_DCAPE_body}", "left", '712px', { fromValue: '0px'}], position: 9000, duration: 1000 },
            { id: "eid435", tween: [ "style", "${_DCAPE_body}", "left", '712px', { fromValue: '712px'}], position: 10250, duration: 0 },
            { id: "eid442", tween: [ "style", "${_DCAPE_body}", "left", '614.67px', { fromValue: '712px'}], position: 10750, duration: 250 },
            { id: "eid470", tween: [ "style", "${_DCAPE_body}", "left", '614.67px', { fromValue: '614.67px'}], position: 12000, duration: 0 },
            { id: "eid482", tween: [ "style", "${_DCAPE_body}", "left", '6.42px', { fromValue: '614.67px'}], position: 12250, duration: 1000 },
            { id: "eid611", tween: [ "style", "${_DCAPE_body}", "left", '0px', { fromValue: '6.42px'}], position: 13250, duration: 500 },
            { id: "eid516", tween: [ "style", "${_DCAPE_body}", "left", '713.33px', { fromValue: '0px'}], position: 14000, duration: 1000 },
            { id: "eid521", tween: [ "style", "${_DCAPE_body}", "left", '713.33px', { fromValue: '713.33px'}], position: 15250, duration: 0 },
            { id: "eid526", tween: [ "style", "${_DCAPE_body}", "left", '713.33px', { fromValue: '713.33px'}], position: 16500, duration: 0 },
            { id: "eid559", tween: [ "style", "${_DCAPE_body}", "left", '713.33px', { fromValue: '713.33px'}], position: 16750, duration: 0 },
            { id: "eid564", tween: [ "style", "${_DCAPE_body}", "left", '713.33px', { fromValue: '713.33px'}], position: 17000, duration: 0 },
            { id: "eid573", tween: [ "style", "${_DCAPE_body}", "left", '0px', { fromValue: '713.33px'}], position: 17250, duration: 1000 },
            { id: "eid627", tween: [ "style", "${_DCAPE_body}", "left", '474.67px', { fromValue: '0px'}], position: 19250, duration: 750 },
            { id: "eid637", tween: [ "style", "${_DCAPE_body}", "left", '479.62px', { fromValue: '474.67px'}], position: 20000, duration: 250 },
            { id: "eid638", tween: [ "style", "${_DCAPE_body}", "left", '483.62px', { fromValue: '479.62px'}], position: 20250, duration: 750 },
            { id: "eid661", tween: [ "style", "${_DCAPE_body}", "left", '483.41px', { fromValue: '483.62px'}], position: 21500, duration: 250 },
            { id: "eid665", tween: [ "style", "${_DCAPE_body}", "left", '482.98px', { fromValue: '483.41px'}], position: 21750, duration: 500 },
            { id: "eid682", tween: [ "style", "${_DCAPE_body}", "left", '0.03px', { fromValue: '482.98px'}], position: 22500, duration: 500 },
            { id: "eid780", tween: [ "style", "${_DCAPE_body}", "left", '-12px', { fromValue: '0px'}], position: 24000, duration: 250 },
            { id: "eid781", tween: [ "style", "${_DCAPE_body}", "left", '-16px', { fromValue: '-12px'}], position: 24250, duration: 500 },
            { id: "eid732", tween: [ "style", "${_DCAPE_body}", "left", '357px', { fromValue: '-16px'}], position: 25000, duration: 500 },
            { id: "eid733", tween: [ "style", "${_DCAPE_body}", "left", '357px', { fromValue: '357px'}], position: 25750, duration: 0 },
            { id: "eid786", tween: [ "style", "${_DCAPE_body}", "left", '357px', { fromValue: '357px'}], position: 26000, duration: 0 },
            { id: "eid748", tween: [ "style", "${_DCAPE_body}", "left", '357px', { fromValue: '357px'}], position: 26500, duration: 0 },
            { id: "eid754", tween: [ "style", "${_DCAPE_body}", "left", '0px', { fromValue: '357px'}], position: 26750, duration: 500 },
            { id: "eid845", tween: [ "style", "${_DCAPE_body}", "left", '-8px', { fromValue: '0px'}], position: 27750, duration: 250 },
            { id: "eid868", tween: [ "style", "${_DCAPE_body}", "left", '-16px', { fromValue: '-8px'}], position: 28000, duration: 500 },
            { id: "eid869", tween: [ "style", "${_DCAPE_body}", "left", '-8px', { fromValue: '-16px'}], position: 28500, duration: 250 },
            { id: "eid886", tween: [ "style", "${_DCAPE_body}", "left", '637.33px', { fromValue: '-8px'}], position: 28750, duration: 750 },
            { id: "eid899", tween: [ "style", "${_DCAPE_body}", "left", '637.33px', { fromValue: '637.33px'}], position: 29750, duration: 0 },
            { id: "eid908", tween: [ "style", "${_DCAPE_body}", "left", '637px', { fromValue: '637.33px'}], position: 30500, duration: 500 },
            { id: "eid922", tween: [ "style", "${_DCAPE_body}", "left", '0px', { fromValue: '637px'}], position: 31250, duration: 750 },
            { id: "eid830", tween: [ "style", "${_userCart1}", "top", '-6px', { fromValue: '-6px'}], position: 0, duration: 0 },
            { id: "eid832", tween: [ "style", "${_userCart1}", "top", '-6px', { fromValue: '-6px'}], position: 24000, duration: 0 },
            { id: "eid722", tween: [ "style", "${_userCart1}", "top", '-53.47px', { fromValue: '-6px'}], position: 24750, duration: 76 },
            { id: "eid783", tween: [ "style", "${_userCart1}", "top", '-73px', { fromValue: '-53.47px'}], position: 24826, duration: 59 },
            { id: "eid724", tween: [ "style", "${_userCart1}", "top", '-51.22px', { fromValue: '-73px'}], position: 24885, duration: 51 },
            { id: "eid785", tween: [ "style", "${_userCart1}", "top", '-5.18px', { fromValue: '-51.22px'}], position: 24936, duration: 64 },
            { id: "eid743", tween: [ "style", "${_userCart1}", "top", '39.72px', { fromValue: '-5.18px'}], position: 25500, duration: 111 },
            { id: "eid788", tween: [ "style", "${_userCart1}", "top", '67px', { fromValue: '39.72px'}], position: 25611, duration: 139 },
            { id: "eid745", tween: [ "style", "${_userCart1}", "top", '167px', { fromValue: '67px'}], position: 25750, duration: 250 },
            { id: "eid839", tween: [ "style", "${_userCart1}", "top", '-6px', { fromValue: '-6px'}], position: 27750, duration: 0 },
            { id: "eid874", tween: [ "style", "${_userCart1}", "top", '-46.5px', { fromValue: '-6px'}], position: 28500, duration: 59 },
            { id: "eid879", tween: [ "style", "${_userCart1}", "top", '-66px', { fromValue: '-46.5px'}], position: 28559, duration: 65 },
            { id: "eid876", tween: [ "style", "${_userCart1}", "top", '-61.45px', { fromValue: '-66px'}], position: 28624, duration: 45 },
            { id: "eid881", tween: [ "style", "${_userCart1}", "top", '-0.18px', { fromValue: '-61.45px'}], position: 28669, duration: 81 },
            { id: "eid885", tween: [ "style", "${_userCart1}", "top", '2.82px', { fromValue: '-0.18px'}], position: 28750, duration: 750 },
            { id: "eid895", tween: [ "style", "${_userCart1}", "top", '47.93px', { fromValue: '2.82px'}], position: 29500, duration: 123 },
            { id: "eid897", tween: [ "style", "${_userCart1}", "top", '70px', { fromValue: '47.93px'}], position: 29623, duration: 127 },
            { id: "eid902", tween: [ "style", "${_userCart1}", "top", '298px', { fromValue: '70px'}], position: 29750, duration: 500 },
            { id: "eid310", tween: [ "transform", "${_errland_chair}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid316", tween: [ "transform", "${_errland_chair}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 4000, duration: 0 },
            { id: "eid403", tween: [ "transform", "${_errland_chair}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 9000, duration: 0 },
            { id: "eid502", tween: [ "transform", "${_errland_chair}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 14000, duration: 0 },
            { id: "eid537", tween: [ "transform", "${_errland_chair}", "rotateZ", '90deg', { fromValue: '0deg'}], position: 16500, duration: 250 },
            { id: "eid567", tween: [ "transform", "${_errland_chair}", "rotateZ", '180deg', { fromValue: '90deg'}], position: 17000, duration: 250 },
            { id: "eid600", tween: [ "transform", "${_errland_chair}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 19250, duration: 0 },
            { id: "eid660", tween: [ "style", "${_hemnes_table}", "top", '-421.33px', { fromValue: '-474px'}], position: 21500, duration: 250 },
            { id: "eid664", tween: [ "style", "${_hemnes_table}", "top", '44.67px', { fromValue: '-421.33px'}], position: 21750, duration: 500 },
            { id: "eid675", tween: [ "style", "${_hemnes_table}", "top", '-6px', { fromValue: '44.67px'}], position: 22250, duration: 250 },
            { id: "eid684", tween: [ "style", "${_hemnes_table}", "top", '-6px', { fromValue: '-6px'}], position: 23000, duration: 0 },
            { id: "eid707", tween: [ "style", "${_hemnes_table}", "top", '-474px', { fromValue: '-6px'}], position: 24000, duration: 0 },
            { id: "eid217", tween: [ "style", "${_DCAPE_body}", "top", '4px', { fromValue: '4px'}], position: 0, duration: 0 },
            { id: "eid224", tween: [ "style", "${_DCAPE_body}", "top", '5px', { fromValue: '4px'}], position: 45, duration: 455 },
            { id: "eid231", tween: [ "style", "${_DCAPE_body}", "top", '-499px', { fromValue: '5px'}], position: 750, duration: 500 },
            { id: "eid237", tween: [ "style", "${_DCAPE_body}", "top", '-499px', { fromValue: '-499px'}], position: 1500, duration: 0 },
            { id: "eid267", tween: [ "style", "${_DCAPE_body}", "top", '-499px', { fromValue: '-499px'}], position: 2000, duration: 0 },
            { id: "eid271", tween: [ "style", "${_DCAPE_body}", "top", '0px', { fromValue: '-499px'}], position: 2250, duration: 500 },
            { id: "eid287", tween: [ "style", "${_DCAPE_body}", "top", '-1px', { fromValue: '0px'}], position: 3000, duration: 290 },
            { id: "eid605", tween: [ "style", "${_DCAPE_body}", "top", '4px', { fromValue: '-1px'}], position: 3290, duration: 460 },
            { id: "eid333", tween: [ "style", "${_DCAPE_body}", "top", '5px', { fromValue: '4px'}], position: 4000, duration: 750 },
            { id: "eid338", tween: [ "style", "${_DCAPE_body}", "top", '-590px', { fromValue: '5px'}], position: 5000, duration: 572 },
            { id: "eid342", tween: [ "style", "${_DCAPE_body}", "top", '-590px', { fromValue: '-590px'}], position: 5862, duration: 0 },
            { id: "eid357", tween: [ "style", "${_DCAPE_body}", "top", '-590px', { fromValue: '-590px'}], position: 6500, duration: 0 },
            { id: "eid371", tween: [ "style", "${_DCAPE_body}", "top", '0px', { fromValue: '-590px'}], position: 6750, duration: 500 },
            { id: "eid375", tween: [ "style", "${_DCAPE_body}", "top", '0px', { fromValue: '0px'}], position: 7500, duration: 0 },
            { id: "eid609", tween: [ "style", "${_DCAPE_body}", "top", '4px', { fromValue: '0px'}], position: 7750, duration: 1210 },
            { id: "eid427", tween: [ "style", "${_DCAPE_body}", "top", '5px', { fromValue: '4px'}], position: 9000, duration: 1000 },
            { id: "eid431", tween: [ "style", "${_DCAPE_body}", "top", '5px', { fromValue: '5px'}], position: 10000, duration: 0 },
            { id: "eid437", tween: [ "style", "${_DCAPE_body}", "top", '-264px', { fromValue: '5px'}], position: 10250, duration: 250 },
            { id: "eid463", tween: [ "style", "${_DCAPE_body}", "top", '-264px', { fromValue: '-264px'}], position: 10750, duration: 0 },
            { id: "eid467", tween: [ "style", "${_DCAPE_body}", "top", '-264px', { fromValue: '-264px'}], position: 11500, duration: 0 },
            { id: "eid468", tween: [ "style", "${_DCAPE_body}", "top", '0px', { fromValue: '-264px'}], position: 11750, duration: 250 },
            { id: "eid483", tween: [ "style", "${_DCAPE_body}", "top", '4px', { fromValue: '0px'}], position: 12250, duration: 1000 },
            { id: "eid616", tween: [ "style", "${_DCAPE_body}", "top", '4px', { fromValue: '4px'}], position: 13750, duration: 0 },
            { id: "eid517", tween: [ "style", "${_DCAPE_body}", "top", '5px', { fromValue: '4px'}], position: 14000, duration: 1000 },
            { id: "eid523", tween: [ "style", "${_DCAPE_body}", "top", '-439px', { fromValue: '5px'}], position: 15250, duration: 500 },
            { id: "eid528", tween: [ "style", "${_DCAPE_body}", "top", '-439px', { fromValue: '-439px'}], position: 16500, duration: 0 },
            { id: "eid561", tween: [ "style", "${_DCAPE_body}", "top", '4px', { fromValue: '-439px'}], position: 16750, duration: 250 },
            { id: "eid577", tween: [ "style", "${_DCAPE_body}", "top", '4px', { fromValue: '4px'}], position: 17250, duration: 0 },
            { id: "eid617", tween: [ "style", "${_DCAPE_body}", "top", '4px', { fromValue: '4px'}], position: 18250, duration: 0 },
            { id: "eid628", tween: [ "style", "${_DCAPE_body}", "top", '5px', { fromValue: '4px'}], position: 19250, duration: 750 },
            { id: "eid634", tween: [ "style", "${_DCAPE_body}", "top", '-464px', { fromValue: '5px'}], position: 20250, duration: 500 },
            { id: "eid667", tween: [ "style", "${_DCAPE_body}", "top", '-464px', { fromValue: '-464px'}], position: 21500, duration: 0 },
            { id: "eid666", tween: [ "style", "${_DCAPE_body}", "top", '4px', { fromValue: '-464px'}], position: 21750, duration: 500 },
            { id: "eid681", tween: [ "style", "${_DCAPE_body}", "top", '4px', { fromValue: '4px'}], position: 22500, duration: 0 },
            { id: "eid702", tween: [ "style", "${_DCAPE_body}", "top", '4px', { fromValue: '4px'}], position: 24000, duration: 0 },
            { id: "eid715", tween: [ "style", "${_DCAPE_body}", "top", '4px', { fromValue: '4px'}], position: 24750, duration: 0 },
            { id: "eid731", tween: [ "style", "${_DCAPE_body}", "top", '3.99px', { fromValue: '4px'}], position: 25000, duration: 500 },
            { id: "eid744", tween: [ "style", "${_DCAPE_body}", "top", '104px', { fromValue: '3.99px'}], position: 25750, duration: 250 },
            { id: "eid787", tween: [ "style", "${_DCAPE_body}", "top", '103.98px', { fromValue: '104px'}], position: 26000, duration: 250 },
            { id: "eid750", tween: [ "style", "${_DCAPE_body}", "top", '4px', { fromValue: '103.98px'}], position: 26250, duration: 250 },
            { id: "eid756", tween: [ "style", "${_DCAPE_body}", "top", '4px', { fromValue: '4px'}], position: 26750, duration: 0 },
            { id: "eid757", tween: [ "style", "${_DCAPE_body}", "top", '4px', { fromValue: '4px'}], position: 27250, duration: 0 },
            { id: "eid844", tween: [ "style", "${_DCAPE_body}", "top", '4px', { fromValue: '4px'}], position: 27750, duration: 0 },
            { id: "eid887", tween: [ "style", "${_DCAPE_body}", "top", '6.99px', { fromValue: '4px'}], position: 28750, duration: 750 },
            { id: "eid903", tween: [ "style", "${_DCAPE_body}", "top", '234.98px', { fromValue: '6.99px'}], position: 29750, duration: 500 },
            { id: "eid909", tween: [ "style", "${_DCAPE_body}", "top", '4px', { fromValue: '234.98px'}], position: 30500, duration: 500 },
            { id: "eid924", tween: [ "style", "${_DCAPE_body}", "top", '4px', { fromValue: '4px'}], position: 31250, duration: 0 },
            { id: "eid925", tween: [ "style", "${_DCAPE_body}", "top", '4px', { fromValue: '4px'}], position: 32000, duration: 0 },
            { id: "eid303", tween: [ "style", "${_stockholm_sofa}", "left", '556px', { fromValue: '556px'}], position: 0, duration: 0 },
            { id: "eid321", tween: [ "style", "${_stockholm_sofa}", "left", '556px', { fromValue: '556px'}], position: 4000, duration: 0 },
            { id: "eid408", tween: [ "style", "${_stockholm_sofa}", "left", '556px', { fromValue: '556px'}], position: 9000, duration: 0 },
            { id: "eid449", tween: [ "style", "${_stockholm_sofa}", "left", '619.75px', { fromValue: '556px'}], position: 11500, duration: 250 },
            { id: "eid478", tween: [ "style", "${_stockholm_sofa}", "left", '555.75px', { fromValue: '619.75px'}], position: 12000, duration: 250 },
            { id: "eid484", tween: [ "style", "${_stockholm_sofa}", "left", '-61px', { fromValue: '555.75px'}], position: 12250, duration: 1000 },
            { id: "eid486", tween: [ "style", "${_stockholm_sofa}", "left", '-79.67px', { fromValue: '-61px'}], position: 13250, duration: 250 },
            { id: "eid512", tween: [ "style", "${_stockholm_sofa}", "left", '556px', { fromValue: '556px'}], position: 14000, duration: 0 },
            { id: "eid593", tween: [ "style", "${_stockholm_sofa}", "left", '556px', { fromValue: '556px'}], position: 19250, duration: 0 },
            { id: "eid700", tween: [ "style", "${_stockholm_sofa}", "left", '556px', { fromValue: '556px'}], position: 24000, duration: 0 },
            { id: "eid820", tween: [ "style", "${_stockholm_sofa}", "left", '556px', { fromValue: '556px'}], position: 27750, duration: 0 },
            { id: "eid308", tween: [ "transform", "${_glenn_stool}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid313", tween: [ "transform", "${_glenn_stool}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 4000, duration: 0 },
            { id: "eid363", tween: [ "transform", "${_glenn_stool}", "rotateZ", '-90deg', { fromValue: '0deg'}], position: 6500, duration: 250 },
            { id: "eid379", tween: [ "transform", "${_glenn_stool}", "rotateZ", '0deg', { fromValue: '-90deg'}], position: 7500, duration: 250 },
            { id: "eid400", tween: [ "transform", "${_glenn_stool}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 9000, duration: 0 },
            { id: "eid499", tween: [ "transform", "${_glenn_stool}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 14000, duration: 0 },
            { id: "eid585", tween: [ "transform", "${_glenn_stool}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 19250, duration: 0 },
            { id: "eid299", tween: [ "style", "${_billsta_table}", "left", '91px', { fromValue: '91px'}], position: 0, duration: 0 },
            { id: "eid258", tween: [ "style", "${_billsta_table}", "left", '111.75px', { fromValue: '91px'}], position: 2000, duration: 130 },
            { id: "eid272", tween: [ "style", "${_billsta_table}", "left", '154px', { fromValue: '111.75px'}], position: 2130, duration: 120 },
            { id: "eid280", tween: [ "style", "${_billsta_table}", "left", '118px', { fromValue: '154px'}], position: 2750, duration: 125 },
            { id: "eid288", tween: [ "style", "${_billsta_table}", "left", '100px', { fromValue: '118px'}], position: 2875, duration: 125 },
            { id: "eid284", tween: [ "style", "${_billsta_table}", "left", '-53px', { fromValue: '100px'}], position: 3000, duration: 290 },
            { id: "eid290", tween: [ "style", "${_billsta_table}", "left", '-74.33px', { fromValue: '-53px'}], position: 3290, duration: 210 },
            { id: "eid326", tween: [ "style", "${_billsta_table}", "left", '91px', { fromValue: '-74.33px'}], position: 4000, duration: 0 },
            { id: "eid405", tween: [ "style", "${_billsta_table}", "left", '91px', { fromValue: '91px'}], position: 9000, duration: 0 },
            { id: "eid504", tween: [ "style", "${_billsta_table}", "left", '91px', { fromValue: '91px'}], position: 14000, duration: 0 },
            { id: "eid590", tween: [ "style", "${_billsta_table}", "left", '91px', { fromValue: '91px'}], position: 19250, duration: 0 },
            { id: "eid697", tween: [ "style", "${_billsta_table}", "left", '91px', { fromValue: '91px'}], position: 24000, duration: 0 },
            { id: "eid817", tween: [ "style", "${_billsta_table}", "left", '91px', { fromValue: '91px'}], position: 27750, duration: 0 },
            { id: "eid304", tween: [ "style", "${_errland_chair}", "left", '795px', { fromValue: '795px'}], position: 0, duration: 0 },
            { id: "eid315", tween: [ "style", "${_errland_chair}", "left", '795px', { fromValue: '795px'}], position: 4000, duration: 0 },
            { id: "eid556", tween: [ "style", "${_errland_chair}", "left", '795px', { fromValue: '795px'}], position: 9000, duration: 0 },
            { id: "eid558", tween: [ "style", "${_errland_chair}", "left", '790px', { fromValue: '795px'}], position: 14000, duration: 0 },
            { id: "eid543", tween: [ "style", "${_errland_chair}", "left", '723.88px', { fromValue: '795px'}], position: 16500, duration: 250 },
            { id: "eid569", tween: [ "style", "${_errland_chair}", "left", '670px', { fromValue: '723.88px'}], position: 17000, duration: 250 },
            { id: "eid575", tween: [ "style", "${_errland_chair}", "left", '-36.25px', { fromValue: '670px'}], position: 17250, duration: 1000 },
            { id: "eid579", tween: [ "style", "${_errland_chair}", "left", '-69.9px', { fromValue: '-36.25px'}], position: 18250, duration: 500 },
            { id: "eid598", tween: [ "style", "${_errland_chair}", "left", '795px', { fromValue: '795px'}], position: 19250, duration: 0 },
            { id: "eid302", tween: [ "style", "${_glenn_stool}", "left", '339px', { fromValue: '339px'}], position: 0, duration: 0 },
            { id: "eid312", tween: [ "style", "${_glenn_stool}", "left", '339px', { fromValue: '339px'}], position: 4000, duration: 0 },
            { id: "eid364", tween: [ "style", "${_glenn_stool}", "left", '365.75px', { fromValue: '339px'}], position: 6500, duration: 127 },
            { id: "eid366", tween: [ "style", "${_glenn_stool}", "left", '400.5px', { fromValue: '365.75px'}], position: 6627, duration: 123 },
            { id: "eid380", tween: [ "style", "${_glenn_stool}", "left", '367.37px', { fromValue: '400.5px'}], position: 7500, duration: 130 },
            { id: "eid383", tween: [ "style", "${_glenn_stool}", "left", '344.5px', { fromValue: '367.37px'}], position: 7630, duration: 120 },
            { id: "eid387", tween: [ "style", "${_glenn_stool}", "left", '-52px', { fromValue: '344.5px'}], position: 7750, duration: 625 },
            { id: "eid397", tween: [ "style", "${_glenn_stool}", "left", '-61.33px', { fromValue: '-52px'}], position: 8375, duration: 245 },
            { id: "eid417", tween: [ "style", "${_glenn_stool}", "left", '339px', { fromValue: '339px'}], position: 9000, duration: 0 },
            { id: "eid498", tween: [ "style", "${_glenn_stool}", "left", '339px', { fromValue: '339px'}], position: 14000, duration: 0 },
            { id: "eid584", tween: [ "style", "${_glenn_stool}", "left", '339px', { fromValue: '339px'}], position: 19250, duration: 0 },
            { id: "eid216", tween: [ "transform", "${_DCAPE_body}", "rotateZ", '90deg', { fromValue: '90deg'}], position: 0, duration: 0 },
            { id: "eid228", tween: [ "transform", "${_DCAPE_body}", "rotateZ", '0deg', { fromValue: '90deg'}], position: 500, duration: 250 },
            { id: "eid233", tween: [ "transform", "${_DCAPE_body}", "rotateZ", '-90deg', { fromValue: '0deg'}], position: 1250, duration: 250 },
            { id: "eid260", tween: [ "transform", "${_DCAPE_body}", "rotateZ", '-180deg', { fromValue: '-90deg'}], position: 2000, duration: 250 },
            { id: "eid278", tween: [ "transform", "${_DCAPE_body}", "rotateZ", '-90deg', { fromValue: '-180deg'}], position: 2750, duration: 250 },
            { id: "eid426", tween: [ "transform", "${_DCAPE_body}", "rotateZ", '90deg', { fromValue: '-90deg'}], position: 3500, duration: 250 },
            { id: "eid425", tween: [ "transform", "${_DCAPE_body}", "rotateZ", '90deg', { fromValue: '90deg'}], position: 4000, duration: 0 },
            { id: "eid335", tween: [ "transform", "${_DCAPE_body}", "rotateZ", '0deg', { fromValue: '90deg'}], position: 4750, duration: 250 },
            { id: "eid340", tween: [ "transform", "${_DCAPE_body}", "rotateZ", '-90deg', { fromValue: '0deg'}], position: 5572, duration: 290 },
            { id: "eid359", tween: [ "transform", "${_DCAPE_body}", "rotateZ", '-180deg', { fromValue: '-90deg'}], position: 6500, duration: 250 },
            { id: "eid378", tween: [ "transform", "${_DCAPE_body}", "rotateZ", '-90deg', { fromValue: '-180deg'}], position: 7500, duration: 250 },
            { id: "eid419", tween: [ "transform", "${_DCAPE_body}", "rotateZ", '90deg', { fromValue: '-90deg'}], position: 8750, duration: 210 },
            { id: "eid432", tween: [ "transform", "${_DCAPE_body}", "rotateZ", '90deg', { fromValue: '90deg'}], position: 9000, duration: 0 },
            { id: "eid434", tween: [ "transform", "${_DCAPE_body}", "rotateZ", '0deg', { fromValue: '90deg'}], position: 10000, duration: 250 },
            { id: "eid439", tween: [ "transform", "${_DCAPE_body}", "rotateZ", '-90deg', { fromValue: '0deg'}], position: 10500, duration: 250 },
            { id: "eid447", tween: [ "transform", "${_DCAPE_body}", "rotateZ", '-180deg', { fromValue: '-90deg'}], position: 11500, duration: 250 },
            { id: "eid477", tween: [ "transform", "${_DCAPE_body}", "rotateZ", '-90deg', { fromValue: '-180deg'}], position: 12000, duration: 250 },
            { id: "eid488", tween: [ "transform", "${_DCAPE_body}", "rotateZ", '90deg', { fromValue: '-90deg'}], position: 13500, duration: 250 },
            { id: "eid511", tween: [ "transform", "${_DCAPE_body}", "rotateZ", '90deg', { fromValue: '90deg'}], position: 14000, duration: 0 },
            { id: "eid520", tween: [ "transform", "${_DCAPE_body}", "rotateZ", '0deg', { fromValue: '90deg'}], position: 15000, duration: 250 },
            { id: "eid525", tween: [ "transform", "${_DCAPE_body}", "rotateZ", '90deg', { fromValue: '0deg'}], position: 15750, duration: 250 },
            { id: "eid536", tween: [ "transform", "${_DCAPE_body}", "rotateZ", '180deg', { fromValue: '90deg'}], position: 16500, duration: 250 },
            { id: "eid568", tween: [ "transform", "${_DCAPE_body}", "rotateZ", '270deg', { fromValue: '180deg'}], position: 17000, duration: 250 },
            { id: "eid582", tween: [ "transform", "${_DCAPE_body}", "rotateZ", '450deg', { fromValue: '270deg'}], position: 18750, duration: 250 },
            { id: "eid679", tween: [ "transform", "${_DCAPE_body}", "rotateZ", '90deg', { fromValue: '450deg'}], position: 19250, duration: 0 },
            { id: "eid678", tween: [ "transform", "${_DCAPE_body}", "rotateZ", '0deg', { fromValue: '90deg'}], position: 20000, duration: 250 },
            { id: "eid636", tween: [ "transform", "${_DCAPE_body}", "rotateZ", '90deg', { fromValue: '0deg'}], position: 20750, duration: 250 },
            { id: "eid657", tween: [ "transform", "${_DCAPE_body}", "rotateZ", '180deg', { fromValue: '90deg'}], position: 21500, duration: 250 },
            { id: "eid673", tween: [ "transform", "${_DCAPE_body}", "rotateZ", '270deg', { fromValue: '180deg'}], position: 22250, duration: 250 },
            { id: "eid687", tween: [ "transform", "${_DCAPE_body}", "rotateZ", '450deg', { fromValue: '270deg'}], position: 23500, duration: 250 },
            { id: "eid713", tween: [ "transform", "${_DCAPE_body}", "rotateZ", '-90deg', { fromValue: '90deg'}], position: 24000, duration: 250 },
            { id: "eid717", tween: [ "transform", "${_DCAPE_body}", "rotateZ", '90deg', { fromValue: '-90deg'}], position: 24750, duration: 250 },
            { id: "eid740", tween: [ "transform", "${_DCAPE_body}", "rotateZ", '180deg', { fromValue: '90deg'}], position: 25500, duration: 250 },
            { id: "eid747", tween: [ "transform", "${_DCAPE_body}", "rotateZ", '360deg', { fromValue: '180deg'}], position: 26000, duration: 250 },
            { id: "eid751", tween: [ "transform", "${_DCAPE_body}", "rotateZ", '360deg', { fromValue: '360deg'}], position: 26250, duration: 0 },
            { id: "eid790", tween: [ "transform", "${_DCAPE_body}", "rotateZ", '270deg', { fromValue: '360deg'}], position: 26500, duration: 250 },
            { id: "eid759", tween: [ "transform", "${_DCAPE_body}", "rotateZ", '450deg', { fromValue: '270deg'}], position: 27250, duration: 250 },
            { id: "eid826", tween: [ "transform", "${_DCAPE_body}", "rotateZ", '270deg', { fromValue: '450deg'}], position: 27750, duration: 250 },
            { id: "eid853", tween: [ "transform", "${_DCAPE_body}", "rotateZ", '450deg', { fromValue: '270deg'}], position: 28500, duration: 250 },
            { id: "eid855", tween: [ "transform", "${_DCAPE_body}", "rotateZ", '450deg', { fromValue: '450deg'}], position: 28753, duration: 0 },
            { id: "eid891", tween: [ "transform", "${_DCAPE_body}", "rotateZ", '540deg', { fromValue: '450deg'}], position: 29500, duration: 250 },
            { id: "eid905", tween: [ "transform", "${_DCAPE_body}", "rotateZ", '720deg', { fromValue: '540deg'}], position: 30250, duration: 250 },
            { id: "eid911", tween: [ "transform", "${_DCAPE_body}", "rotateZ", '630deg', { fromValue: '720deg'}], position: 31000, duration: 250 },
            { id: "eid927", tween: [ "transform", "${_DCAPE_body}", "rotateZ", '810deg', { fromValue: '630deg'}], position: 32000, duration: 250 },
            { id: "eid300", tween: [ "style", "${_billsta_table}", "top", '-504px', { fromValue: '-504px'}], position: 0, duration: 0 },
            { id: "eid259", tween: [ "style", "${_billsta_table}", "top", '-461.82px', { fromValue: '-504px'}], position: 2000, duration: 130 },
            { id: "eid273", tween: [ "style", "${_billsta_table}", "top", '-446px', { fromValue: '-461.82px'}], position: 2130, duration: 120 },
            { id: "eid268", tween: [ "style", "${_billsta_table}", "top", '53px', { fromValue: '-446px'}], position: 2250, duration: 500 },
            { id: "eid281", tween: [ "style", "${_billsta_table}", "top", '31px', { fromValue: '53px'}], position: 2750, duration: 125 },
            { id: "eid289", tween: [ "style", "${_billsta_table}", "top", '-5px', { fromValue: '31px'}], position: 2875, duration: 125 },
            { id: "eid285", tween: [ "style", "${_billsta_table}", "top", '-6px', { fromValue: '-5px'}], position: 3000, duration: 290 },
            { id: "eid317", tween: [ "style", "${_billsta_table}", "top", '-10px', { fromValue: '-6px'}], position: 3290, duration: 210 },
            { id: "eid328", tween: [ "style", "${_billsta_table}", "top", '-504px', { fromValue: '-504px'}], position: 4000, duration: 0 },
            { id: "eid404", tween: [ "style", "${_billsta_table}", "top", '-504px', { fromValue: '-504px'}], position: 9000, duration: 0 },
            { id: "eid503", tween: [ "style", "${_billsta_table}", "top", '-504px', { fromValue: '-504px'}], position: 14000, duration: 0 },
            { id: "eid589", tween: [ "style", "${_billsta_table}", "top", '-504px', { fromValue: '-504px'}], position: 19250, duration: 0 },
            { id: "eid696", tween: [ "style", "${_billsta_table}", "top", '-504px', { fromValue: '-504px'}], position: 24000, duration: 0 },
            { id: "eid816", tween: [ "style", "${_billsta_table}", "top", '-504px', { fromValue: '-504px'}], position: 27750, duration: 0 },
            { id: "eid309", tween: [ "transform", "${_stockholm_sofa}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid322", tween: [ "transform", "${_stockholm_sofa}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 4000, duration: 0 },
            { id: "eid409", tween: [ "transform", "${_stockholm_sofa}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 9000, duration: 0 },
            { id: "eid448", tween: [ "transform", "${_stockholm_sofa}", "rotateZ", '-90deg', { fromValue: '0deg'}], position: 11500, duration: 250 },
            { id: "eid476", tween: [ "transform", "${_stockholm_sofa}", "rotateZ", '0deg', { fromValue: '-90deg'}], position: 12000, duration: 250 },
            { id: "eid508", tween: [ "transform", "${_stockholm_sofa}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 14000, duration: 0 },
            { id: "eid594", tween: [ "transform", "${_stockholm_sofa}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 19250, duration: 0 },
            { id: "eid701", tween: [ "transform", "${_stockholm_sofa}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 24000, duration: 0 },
            { id: "eid821", tween: [ "transform", "${_stockholm_sofa}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 27750, duration: 0 },
            { id: "eid831", tween: [ "transform", "${_userCart1}", "rotateZ", '90deg', { fromValue: '90deg'}], position: 0, duration: 0 },
            { id: "eid834", tween: [ "transform", "${_userCart1}", "rotateZ", '90deg', { fromValue: '90deg'}], position: 24000, duration: 0 },
            { id: "eid726", tween: [ "transform", "${_userCart1}", "rotateZ", '180deg', { fromValue: '90deg'}], position: 24750, duration: 135 },
            { id: "eid727", tween: [ "transform", "${_userCart1}", "rotateZ", '270deg', { fromValue: '180deg'}], position: 24885, duration: 115 },
            { id: "eid741", tween: [ "transform", "${_userCart1}", "rotateZ", '360deg', { fromValue: '270deg'}], position: 25500, duration: 250 },
            { id: "eid840", tween: [ "transform", "${_userCart1}", "rotateZ", '90deg', { fromValue: '90deg'}], position: 27750, duration: 0 },
            { id: "eid875", tween: [ "transform", "${_userCart1}", "rotateZ", '270deg', { fromValue: '90deg'}], position: 28500, duration: 250 },
            { id: "eid894", tween: [ "transform", "${_userCart1}", "rotateZ", '360deg', { fromValue: '270deg'}], position: 29500, duration: 250 },
            { id: "eid306", tween: [ "style", "${_stockholm_sofa}", "top", '-279px', { fromValue: '-279px'}], position: 0, duration: 0 },
            { id: "eid320", tween: [ "style", "${_stockholm_sofa}", "top", '-279px', { fromValue: '-279px'}], position: 4000, duration: 0 },
            { id: "eid407", tween: [ "style", "${_stockholm_sofa}", "top", '-279px', { fromValue: '-279px'}], position: 9000, duration: 0 },
            { id: "eid450", tween: [ "style", "${_stockholm_sofa}", "top", '-224.8px', { fromValue: '-279px'}], position: 11500, duration: 250 },
            { id: "eid464", tween: [ "style", "${_stockholm_sofa}", "top", '39.2px', { fromValue: '-224.8px'}], position: 11750, duration: 250 },
            { id: "eid479", tween: [ "style", "${_stockholm_sofa}", "top", '-15px', { fromValue: '39.2px'}], position: 12000, duration: 250 },
            { id: "eid485", tween: [ "style", "${_stockholm_sofa}", "top", '-16px', { fromValue: '-15px'}], position: 12250, duration: 1000 },
            { id: "eid513", tween: [ "style", "${_stockholm_sofa}", "top", '-279px', { fromValue: '-279px'}], position: 14000, duration: 0 },
            { id: "eid592", tween: [ "style", "${_stockholm_sofa}", "top", '-279px', { fromValue: '-279px'}], position: 19250, duration: 0 },
            { id: "eid699", tween: [ "style", "${_stockholm_sofa}", "top", '-279px', { fromValue: '-279px'}], position: 24000, duration: 0 },
            { id: "eid819", tween: [ "style", "${_stockholm_sofa}", "top", '-279px', { fromValue: '-279px'}], position: 27750, duration: 0 },
            { id: "eid658", tween: [ "transform", "${_hemnes_table}", "rotateZ", '90deg', { fromValue: '0deg'}], position: 21500, duration: 250 },
            { id: "eid672", tween: [ "transform", "${_hemnes_table}", "rotateZ", '180deg', { fromValue: '90deg'}], position: 22250, duration: 250 },
            { id: "eid709", tween: [ "transform", "${_hemnes_table}", "rotateZ", '0deg', { fromValue: '180deg'}], position: 24000, duration: 0 },
            { id: "eid659", tween: [ "style", "${_hemnes_table}", "left", '493.33px', { fromValue: '556px'}], position: 21500, duration: 250 },
            { id: "eid663", tween: [ "style", "${_hemnes_table}", "left", '492.68px', { fromValue: '493.33px'}], position: 21750, duration: 500 },
            { id: "eid674", tween: [ "style", "${_hemnes_table}", "left", '440px', { fromValue: '492.68px'}], position: 22250, duration: 250 },
            { id: "eid683", tween: [ "style", "${_hemnes_table}", "left", '-42.93px', { fromValue: '440px'}], position: 22500, duration: 500 },
            { id: "eid685", tween: [ "style", "${_hemnes_table}", "left", '-66.92px', { fromValue: '-42.93px'}], position: 23000, duration: 250 },
            { id: "eid708", tween: [ "style", "${_hemnes_table}", "left", '556px', { fromValue: '-66.92px'}], position: 24000, duration: 0 },
            { id: "eid829", tween: [ "style", "${_userCart1}", "left", '-104px', { fromValue: '-104px'}], position: 0, duration: 0 },
            { id: "eid833", tween: [ "style", "${_userCart1}", "left", '-104px', { fromValue: '-104px'}], position: 24000, duration: 0 },
            { id: "eid720", tween: [ "style", "${_userCart1}", "left", '-67.25px', { fromValue: '-104px'}], position: 24750, duration: 76 },
            { id: "eid782", tween: [ "style", "${_userCart1}", "left", '-8px', { fromValue: '-67.25px'}], position: 24826, duration: 59 },
            { id: "eid721", tween: [ "style", "${_userCart1}", "left", '21.62px', { fromValue: '-8px'}], position: 24885, duration: 51 },
            { id: "eid784", tween: [ "style", "${_userCart1}", "left", '52.67px', { fromValue: '21.62px'}], position: 24936, duration: 64 },
            { id: "eid730", tween: [ "style", "${_userCart1}", "left", '418.67px', { fromValue: '52.67px'}], position: 25000, duration: 500 },
            { id: "eid742", tween: [ "style", "${_userCart1}", "left", '399.32px', { fromValue: '418.67px'}], position: 25500, duration: 111 },
            { id: "eid789", tween: [ "style", "${_userCart1}", "left", '350px', { fromValue: '399.32px'}], position: 25611, duration: 139 },
            { id: "eid838", tween: [ "style", "${_userCart1}", "left", '-104px', { fromValue: '-104px'}], position: 27750, duration: 0 },
            { id: "eid873", tween: [ "style", "${_userCart1}", "left", '-75.97px', { fromValue: '-104px'}], position: 28500, duration: 59 },
            { id: "eid878", tween: [ "style", "${_userCart1}", "left", '-20px', { fromValue: '-75.97px'}], position: 28559, duration: 65 },
            { id: "eid877", tween: [ "style", "${_userCart1}", "left", '16.87px', { fromValue: '-20px'}], position: 28624, duration: 45 },
            { id: "eid880", tween: [ "style", "${_userCart1}", "left", '55.17px', { fromValue: '16.87px'}], position: 28669, duration: 81 },
            { id: "eid884", tween: [ "style", "${_userCart1}", "left", '700.5px', { fromValue: '55.17px'}], position: 28750, duration: 750 },
            { id: "eid896", tween: [ "style", "${_userCart1}", "left", '677.73px', { fromValue: '700.5px'}], position: 29500, duration: 123 },
            { id: "eid898", tween: [ "style", "${_userCart1}", "left", '630px', { fromValue: '677.73px'}], position: 29623, duration: 127 },
            { id: "eid305", tween: [ "style", "${_glenn_stool}", "top", '-590px', { fromValue: '-590px'}], position: 0, duration: 0 },
            { id: "eid311", tween: [ "style", "${_glenn_stool}", "top", '-590px', { fromValue: '-590px'}], position: 4000, duration: 0 },
            { id: "eid365", tween: [ "style", "${_glenn_stool}", "top", '-554.25px', { fromValue: '-590px'}], position: 6500, duration: 127 },
            { id: "eid367", tween: [ "style", "${_glenn_stool}", "top", '-539.5px', { fromValue: '-554.25px'}], position: 6627, duration: 123 },
            { id: "eid370", tween: [ "style", "${_glenn_stool}", "top", '50.5px', { fromValue: '-539.5px'}], position: 6750, duration: 500 },
            { id: "eid381", tween: [ "style", "${_glenn_stool}", "top", '32.23px', { fromValue: '50.5px'}], position: 7500, duration: 130 },
            { id: "eid382", tween: [ "style", "${_glenn_stool}", "top", '0px', { fromValue: '32.23px'}], position: 7630, duration: 120 },
            { id: "eid398", tween: [ "style", "${_glenn_stool}", "top", '0px', { fromValue: '0px'}], position: 8375, duration: 0 },
            { id: "eid416", tween: [ "style", "${_glenn_stool}", "top", '-590px', { fromValue: '0px'}], position: 9000, duration: 0 },
            { id: "eid497", tween: [ "style", "${_glenn_stool}", "top", '-590px', { fromValue: '-590px'}], position: 14000, duration: 0 },
            { id: "eid583", tween: [ "style", "${_glenn_stool}", "top", '-590px', { fromValue: '-590px'}], position: 19250, duration: 0 },
            { id: "eid301", tween: [ "transform", "${_billsta_table}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid257", tween: [ "transform", "${_billsta_table}", "rotateZ", '-90deg', { fromValue: '0deg'}], position: 2000, duration: 250 },
            { id: "eid279", tween: [ "transform", "${_billsta_table}", "rotateZ", '0deg', { fromValue: '-90deg'}], position: 2750, duration: 250 },
            { id: "eid319", tween: [ "transform", "${_billsta_table}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 4000, duration: 0 },
            { id: "eid406", tween: [ "transform", "${_billsta_table}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 9000, duration: 0 },
            { id: "eid505", tween: [ "transform", "${_billsta_table}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 14000, duration: 0 },
            { id: "eid591", tween: [ "transform", "${_billsta_table}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 19250, duration: 0 },
            { id: "eid698", tween: [ "transform", "${_billsta_table}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 24000, duration: 0 },
            { id: "eid818", tween: [ "transform", "${_billsta_table}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 27750, duration: 0 },
            { id: "eid307", tween: [ "style", "${_errland_chair}", "top", '-431px', { fromValue: '-431px'}], position: 0, duration: 0 },
            { id: "eid314", tween: [ "style", "${_errland_chair}", "top", '-431px', { fromValue: '-431px'}], position: 4000, duration: 0 },
            { id: "eid401", tween: [ "style", "${_errland_chair}", "top", '-431px', { fromValue: '-431px'}], position: 9000, duration: 0 },
            { id: "eid500", tween: [ "style", "${_errland_chair}", "top", '-431px', { fromValue: '-431px'}], position: 14000, duration: 0 },
            { id: "eid542", tween: [ "style", "${_errland_chair}", "top", '-380.87px', { fromValue: '-431px'}], position: 16500, duration: 250 },
            { id: "eid562", tween: [ "style", "${_errland_chair}", "top", '58.13px', { fromValue: '-380.87px'}], position: 16750, duration: 250 },
            { id: "eid570", tween: [ "style", "${_errland_chair}", "top", '12px', { fromValue: '58.13px'}], position: 17000, duration: 250 },
            { id: "eid576", tween: [ "style", "${_errland_chair}", "top", '13px', { fromValue: '12px'}], position: 17250, duration: 1000 },
            { id: "eid580", tween: [ "style", "${_errland_chair}", "top", '13.25px', { fromValue: '13px'}], position: 18250, duration: 500 },
            { id: "eid599", tween: [ "style", "${_errland_chair}", "top", '-431px', { fromValue: '-431px'}], position: 19250, duration: 0 }         ]
      }
   }
},
"DCAPE_head": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['3px','8px','56px','44px','auto','auto'],
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(245,174,39,1.00)']
   },
   {
      rect: ['16px','20px','29px','27px','auto','auto'],
      id: 'Rectangle3',
      stroke: [0,'rgba(212,36,36,0.00)','none'],
      type: 'rect',
      fill: ['rgba(204,46,46,1.00)']
   },
   {
      id: 'DCAPE_arms',
      type: 'rect',
      rect: ['-12','19','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'DCAPE_arms',
      symbolName: 'DCAPE_arms'
   }   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["style", "height", '44.000049591064px'],
            ["style", "top", '8px'],
            ["style", "left", '3px'],
            ["style", "width", '56.200000762939px']
         ],
         "${symbolSelector}": [
            ["style", "height", '63px'],
            ["style", "width", '63px']
         ],
         "${_DCAPE_arms}": [
            ["style", "top", '8px'],
            ["style", "left", '-9px']
         ],
         "${_Rectangle3}": [
            ["style", "top", '20.37px'],
            ["color", "background-color", 'rgba(204,46,46,1.00)'],
            ["style", "height", '27.250005722046px'],
            ["color", "border-color", 'rgba(212,36,36,0.00)'],
            ["style", "left", '16px'],
            ["style", "width", '29.17286214389px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"DCAPE_hands": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '76.10000038147px'],
            ["style", "width", '43.766666650772px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 45,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"DCAPE_arms": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['62px','24px','22px','11px','auto','auto'],
      transform: [{},['-90deg']],
      id: 'Rectangle4Copy4',
      stroke: [0,'rgba(0,0,0,0.00)','none'],
      type: 'rect',
      fill: ['rgba(88,88,88,1.00)']
   },
   {
      rect: ['54px','17px','39px','6px','auto','auto'],
      transform: [{},['-90deg']],
      id: 'Rectangle5Copy3',
      stroke: [0,'rgba(0, 0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(88,88,88,1)']
   },
   {
      rect: ['73px','-3px','3px','11px','auto','auto'],
      transform: [{},['90deg']],
      id: 'Rectangle6Copy3',
      stroke: [0,'rgba(0, 0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(88,88,88,1)']
   },
   {
      rect: ['-5px','23px','22px','11px','auto','auto'],
      transform: [{},['-90deg']],
      id: 'Rectangle4Copy5',
      stroke: [0,'rgba(0,0,0,0.00)','none'],
      type: 'rect',
      fill: ['rgba(88,88,88,1.00)']
   },
   {
      rect: ['-14px','17px','39px','6px','auto','auto'],
      transform: [{},['-90deg']],
      id: 'Rectangle5Copy4',
      stroke: [0,'rgba(0, 0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(88,88,88,1)']
   },
   {
      rect: ['4px','-3px','3px','11px','auto','auto'],
      transform: [{},['90deg']],
      id: 'Rectangle6Copy4',
      stroke: [0,'rgba(0, 0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(88,88,88,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '40.000002113525px'],
            ["style", "width", '79.316665587646px']
         ],
         "${_Rectangle4Copy4}": [
            ["style", "top", '23.74px'],
            ["transform", "rotateZ", '-90deg'],
            ["style", "height", '10.566666603088px'],
            ["style", "left", '61.82px'],
            ["style", "width", '22px']
         ],
         "${_Rectangle5Copy4}": [
            ["style", "top", '16.71px'],
            ["transform", "rotateZ", '-90deg'],
            ["style", "height", '6px'],
            ["style", "left", '-13.68px'],
            ["style", "width", '39.399993896484px']
         ],
         "${_Rectangle6Copy4}": [
            ["style", "top", '-3.49px'],
            ["transform", "rotateZ", '90deg'],
            ["style", "height", '10.550000190735px'],
            ["style", "left", '3.92px'],
            ["style", "width", '2.7833333015442px']
         ],
         "${_Rectangle4Copy5}": [
            ["style", "top", '23.42px'],
            ["transform", "rotateZ", '-90deg'],
            ["style", "height", '10.566666603088px'],
            ["style", "left", '-4.93px'],
            ["style", "width", '22px']
         ],
         "${_Rectangle6Copy3}": [
            ["style", "top", '-3.17px'],
            ["transform", "rotateZ", '90deg'],
            ["style", "height", '10.550000190735px'],
            ["style", "left", '72.68px'],
            ["style", "width", '2.7833333015442px']
         ],
         "${_Rectangle5Copy3}": [
            ["style", "top", '17.03px'],
            ["transform", "rotateZ", '-90deg'],
            ["style", "height", '6px'],
            ["style", "left", '54.1px'],
            ["style", "width", '39.399993896484px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 30500,
         autoPlay: true,
         labels: {
            "grabBilstaTable": 40,
            "pickup": 1750,
            "drop": 3250,
            "grabGlennStool": 4000,
            "pickup copy": 6000,
            "drop copy": 8375,
            "grabStockholmSofa": 9000,
            "pickup copy copy": 11000,
            "drop copy copy": 13250,
            "grabErrlandChair": 14000,
            "pickup copy copy 1": 16000,
            "drop copy copy copy": 18250,
            "grabHemnesTable": 19250,
            "pickup copy copy copy": 21000,
            "drop copy copy copy copy": 23000,
            "checkOutAisle1": 24000,
            "pickup copy copy 1 copy": 24250,
            "drop copy copy copy copy copy": 26000,
            "checkOutDelivery": 27750,
            "drop copy copy copy copy copy copy": 30000
         },
         timeline: [
            { id: "eid242", tween: [ "style", "${_Rectangle5Copy4}", "left", '-13.68px', { fromValue: '-13.68px'}], position: 1750, duration: 0 },
            { id: "eid243", tween: [ "style", "${_Rectangle5Copy4}", "left", '-13.68px', { fromValue: '-13.68px'}], position: 2205, duration: 0 },
            { id: "eid293", tween: [ "style", "${_Rectangle5Copy4}", "left", '-13.68px', { fromValue: '-13.68px'}], position: 3250, duration: 0 },
            { id: "eid347", tween: [ "style", "${_Rectangle5Copy4}", "left", '-13.68px', { fromValue: '-13.68px'}], position: 6000, duration: 0 },
            { id: "eid348", tween: [ "style", "${_Rectangle5Copy4}", "left", '-13.68px', { fromValue: '-13.68px'}], position: 6455, duration: 0 },
            { id: "eid390", tween: [ "style", "${_Rectangle5Copy4}", "left", '-13.68px', { fromValue: '-13.68px'}], position: 8375, duration: 0 },
            { id: "eid454", tween: [ "style", "${_Rectangle5Copy4}", "left", '-13.68px', { fromValue: '-13.68px'}], position: 11000, duration: 0 },
            { id: "eid455", tween: [ "style", "${_Rectangle5Copy4}", "left", '-13.68px', { fromValue: '-13.68px'}], position: 11455, duration: 0 },
            { id: "eid491", tween: [ "style", "${_Rectangle5Copy4}", "left", '-13.68px', { fromValue: '-13.68px'}], position: 13250, duration: 0 },
            { id: "eid547", tween: [ "style", "${_Rectangle5Copy4}", "left", '-13.68px', { fromValue: '-13.68px'}], position: 16000, duration: 0 },
            { id: "eid548", tween: [ "style", "${_Rectangle5Copy4}", "left", '-13.68px', { fromValue: '-13.68px'}], position: 16455, duration: 0 },
            { id: "eid621", tween: [ "style", "${_Rectangle5Copy4}", "left", '-13.68px', { fromValue: '-13.68px'}], position: 18250, duration: 0 },
            { id: "eid648", tween: [ "style", "${_Rectangle5Copy4}", "left", '-13.68px', { fromValue: '-13.68px'}], position: 21000, duration: 0 },
            { id: "eid649", tween: [ "style", "${_Rectangle5Copy4}", "left", '-13.68px', { fromValue: '-13.68px'}], position: 21455, duration: 0 },
            { id: "eid690", tween: [ "style", "${_Rectangle5Copy4}", "left", '-13.68px', { fromValue: '-13.68px'}], position: 23000, duration: 0 },
            { id: "eid763", tween: [ "style", "${_Rectangle5Copy4}", "left", '-13.68px', { fromValue: '-13.68px'}], position: 24250, duration: 0 },
            { id: "eid764", tween: [ "style", "${_Rectangle5Copy4}", "left", '-13.68px', { fromValue: '-13.68px'}], position: 24705, duration: 0 },
            { id: "eid774", tween: [ "style", "${_Rectangle5Copy4}", "left", '-13.68px', { fromValue: '-13.68px'}], position: 26000, duration: 0 },
            { id: "eid859", tween: [ "style", "${_Rectangle5Copy4}", "left", '-13.68px', { fromValue: '-13.68px'}], position: 28000, duration: 0 },
            { id: "eid860", tween: [ "style", "${_Rectangle5Copy4}", "left", '-13.68px', { fromValue: '-13.68px'}], position: 28455, duration: 0 },
            { id: "eid914", tween: [ "style", "${_Rectangle5Copy4}", "left", '-13.68px', { fromValue: '-13.68px'}], position: 30000, duration: 0 },
            { id: "eid250", tween: [ "style", "${_Rectangle5Copy3}", "top", '-3px', { fromValue: '17.03px'}], position: 1750, duration: 455 },
            { id: "eid298", tween: [ "style", "${_Rectangle5Copy3}", "top", '16px', { fromValue: '-3px'}], position: 3250, duration: 500 },
            { id: "eid355", tween: [ "style", "${_Rectangle5Copy3}", "top", '-3px', { fromValue: '17.03px'}], position: 6000, duration: 455 },
            { id: "eid395", tween: [ "style", "${_Rectangle5Copy3}", "top", '16px', { fromValue: '-3px'}], position: 8375, duration: 500 },
            { id: "eid462", tween: [ "style", "${_Rectangle5Copy3}", "top", '-3px', { fromValue: '17.03px'}], position: 11000, duration: 455 },
            { id: "eid496", tween: [ "style", "${_Rectangle5Copy3}", "top", '16px', { fromValue: '-3px'}], position: 13250, duration: 500 },
            { id: "eid555", tween: [ "style", "${_Rectangle5Copy3}", "top", '-3px', { fromValue: '17.03px'}], position: 16000, duration: 455 },
            { id: "eid626", tween: [ "style", "${_Rectangle5Copy3}", "top", '16px', { fromValue: '-3px'}], position: 18250, duration: 500 },
            { id: "eid656", tween: [ "style", "${_Rectangle5Copy3}", "top", '-3px', { fromValue: '17.03px'}], position: 21000, duration: 455 },
            { id: "eid695", tween: [ "style", "${_Rectangle5Copy3}", "top", '16px', { fromValue: '-3px'}], position: 23000, duration: 500 },
            { id: "eid771", tween: [ "style", "${_Rectangle5Copy3}", "top", '-3px', { fromValue: '17.03px'}], position: 24250, duration: 455 },
            { id: "eid779", tween: [ "style", "${_Rectangle5Copy3}", "top", '16px', { fromValue: '-3px'}], position: 26000, duration: 500 },
            { id: "eid867", tween: [ "style", "${_Rectangle5Copy3}", "top", '-3px', { fromValue: '17.03px'}], position: 28000, duration: 455 },
            { id: "eid919", tween: [ "style", "${_Rectangle5Copy3}", "top", '16px', { fromValue: '-3px'}], position: 30000, duration: 500 },
            { id: "eid244", tween: [ "style", "${_Rectangle5Copy4}", "top", '-3.32px', { fromValue: '16.71px'}], position: 1750, duration: 455 },
            { id: "eid294", tween: [ "style", "${_Rectangle5Copy4}", "top", '15.62px', { fromValue: '-3.32px'}], position: 3250, duration: 500 },
            { id: "eid349", tween: [ "style", "${_Rectangle5Copy4}", "top", '-3.32px', { fromValue: '16.71px'}], position: 6000, duration: 455 },
            { id: "eid391", tween: [ "style", "${_Rectangle5Copy4}", "top", '15.62px', { fromValue: '-3.32px'}], position: 8375, duration: 500 },
            { id: "eid456", tween: [ "style", "${_Rectangle5Copy4}", "top", '-3.32px', { fromValue: '16.71px'}], position: 11000, duration: 455 },
            { id: "eid492", tween: [ "style", "${_Rectangle5Copy4}", "top", '15.62px', { fromValue: '-3.32px'}], position: 13250, duration: 500 },
            { id: "eid549", tween: [ "style", "${_Rectangle5Copy4}", "top", '-3.32px', { fromValue: '16.71px'}], position: 16000, duration: 455 },
            { id: "eid622", tween: [ "style", "${_Rectangle5Copy4}", "top", '15.62px', { fromValue: '-3.32px'}], position: 18250, duration: 500 },
            { id: "eid650", tween: [ "style", "${_Rectangle5Copy4}", "top", '-3.32px', { fromValue: '16.71px'}], position: 21000, duration: 455 },
            { id: "eid691", tween: [ "style", "${_Rectangle5Copy4}", "top", '15.62px', { fromValue: '-3.32px'}], position: 23000, duration: 500 },
            { id: "eid765", tween: [ "style", "${_Rectangle5Copy4}", "top", '-3.32px', { fromValue: '16.71px'}], position: 24250, duration: 455 },
            { id: "eid775", tween: [ "style", "${_Rectangle5Copy4}", "top", '15.62px', { fromValue: '-3.32px'}], position: 26000, duration: 500 },
            { id: "eid861", tween: [ "style", "${_Rectangle5Copy4}", "top", '-3.32px', { fromValue: '16.71px'}], position: 28000, duration: 455 },
            { id: "eid915", tween: [ "style", "${_Rectangle5Copy4}", "top", '15.62px', { fromValue: '-3.32px'}], position: 30000, duration: 500 },
            { id: "eid248", tween: [ "style", "${_Rectangle5Copy3}", "left", '54.1px', { fromValue: '54.1px'}], position: 1750, duration: 0 },
            { id: "eid249", tween: [ "style", "${_Rectangle5Copy3}", "left", '54.1px', { fromValue: '54.1px'}], position: 2205, duration: 0 },
            { id: "eid297", tween: [ "style", "${_Rectangle5Copy3}", "left", '54.1px', { fromValue: '54.1px'}], position: 3250, duration: 0 },
            { id: "eid353", tween: [ "style", "${_Rectangle5Copy3}", "left", '54.1px', { fromValue: '54.1px'}], position: 6000, duration: 0 },
            { id: "eid354", tween: [ "style", "${_Rectangle5Copy3}", "left", '54.1px', { fromValue: '54.1px'}], position: 6455, duration: 0 },
            { id: "eid394", tween: [ "style", "${_Rectangle5Copy3}", "left", '54.1px', { fromValue: '54.1px'}], position: 8375, duration: 0 },
            { id: "eid460", tween: [ "style", "${_Rectangle5Copy3}", "left", '54.1px', { fromValue: '54.1px'}], position: 11000, duration: 0 },
            { id: "eid461", tween: [ "style", "${_Rectangle5Copy3}", "left", '54.1px', { fromValue: '54.1px'}], position: 11455, duration: 0 },
            { id: "eid495", tween: [ "style", "${_Rectangle5Copy3}", "left", '54.1px', { fromValue: '54.1px'}], position: 13250, duration: 0 },
            { id: "eid553", tween: [ "style", "${_Rectangle5Copy3}", "left", '54.1px', { fromValue: '54.1px'}], position: 16000, duration: 0 },
            { id: "eid554", tween: [ "style", "${_Rectangle5Copy3}", "left", '54.1px', { fromValue: '54.1px'}], position: 16455, duration: 0 },
            { id: "eid625", tween: [ "style", "${_Rectangle5Copy3}", "left", '54.1px', { fromValue: '54.1px'}], position: 18250, duration: 0 },
            { id: "eid654", tween: [ "style", "${_Rectangle5Copy3}", "left", '54.1px', { fromValue: '54.1px'}], position: 21000, duration: 0 },
            { id: "eid655", tween: [ "style", "${_Rectangle5Copy3}", "left", '54.1px', { fromValue: '54.1px'}], position: 21455, duration: 0 },
            { id: "eid694", tween: [ "style", "${_Rectangle5Copy3}", "left", '54.1px', { fromValue: '54.1px'}], position: 23000, duration: 0 },
            { id: "eid769", tween: [ "style", "${_Rectangle5Copy3}", "left", '54.1px', { fromValue: '54.1px'}], position: 24250, duration: 0 },
            { id: "eid770", tween: [ "style", "${_Rectangle5Copy3}", "left", '54.1px', { fromValue: '54.1px'}], position: 24705, duration: 0 },
            { id: "eid778", tween: [ "style", "${_Rectangle5Copy3}", "left", '54.1px', { fromValue: '54.1px'}], position: 26000, duration: 0 },
            { id: "eid865", tween: [ "style", "${_Rectangle5Copy3}", "left", '54.1px', { fromValue: '54.1px'}], position: 28000, duration: 0 },
            { id: "eid866", tween: [ "style", "${_Rectangle5Copy3}", "left", '54.1px', { fromValue: '54.1px'}], position: 28455, duration: 0 },
            { id: "eid918", tween: [ "style", "${_Rectangle5Copy3}", "left", '54.1px', { fromValue: '54.1px'}], position: 30000, duration: 0 },
            { id: "eid241", tween: [ "style", "${_Rectangle6Copy4}", "top", '-23.37px', { fromValue: '-3.49px'}], position: 1750, duration: 455 },
            { id: "eid292", tween: [ "style", "${_Rectangle6Copy4}", "top", '-4.37px', { fromValue: '-23.37px'}], position: 3250, duration: 500 },
            { id: "eid346", tween: [ "style", "${_Rectangle6Copy4}", "top", '-23.37px', { fromValue: '-3.49px'}], position: 6000, duration: 455 },
            { id: "eid389", tween: [ "style", "${_Rectangle6Copy4}", "top", '-4.37px', { fromValue: '-23.37px'}], position: 8375, duration: 500 },
            { id: "eid453", tween: [ "style", "${_Rectangle6Copy4}", "top", '-23.37px', { fromValue: '-3.49px'}], position: 11000, duration: 455 },
            { id: "eid490", tween: [ "style", "${_Rectangle6Copy4}", "top", '-4.37px', { fromValue: '-23.37px'}], position: 13250, duration: 500 },
            { id: "eid546", tween: [ "style", "${_Rectangle6Copy4}", "top", '-23.37px', { fromValue: '-3.49px'}], position: 16000, duration: 455 },
            { id: "eid620", tween: [ "style", "${_Rectangle6Copy4}", "top", '-4.37px', { fromValue: '-23.37px'}], position: 18250, duration: 500 },
            { id: "eid647", tween: [ "style", "${_Rectangle6Copy4}", "top", '-23.37px', { fromValue: '-3.49px'}], position: 21000, duration: 455 },
            { id: "eid689", tween: [ "style", "${_Rectangle6Copy4}", "top", '-4.37px', { fromValue: '-23.37px'}], position: 23000, duration: 500 },
            { id: "eid762", tween: [ "style", "${_Rectangle6Copy4}", "top", '-23.37px', { fromValue: '-3.49px'}], position: 24250, duration: 455 },
            { id: "eid773", tween: [ "style", "${_Rectangle6Copy4}", "top", '-4.37px', { fromValue: '-23.37px'}], position: 26000, duration: 500 },
            { id: "eid858", tween: [ "style", "${_Rectangle6Copy4}", "top", '-23.37px', { fromValue: '-3.49px'}], position: 28000, duration: 455 },
            { id: "eid913", tween: [ "style", "${_Rectangle6Copy4}", "top", '-4.37px', { fromValue: '-23.37px'}], position: 30000, duration: 500 },
            { id: "eid239", tween: [ "style", "${_Rectangle6Copy4}", "left", '3.92px', { fromValue: '3.92px'}], position: 1750, duration: 0 },
            { id: "eid240", tween: [ "style", "${_Rectangle6Copy4}", "left", '3.92px', { fromValue: '3.92px'}], position: 2205, duration: 0 },
            { id: "eid291", tween: [ "style", "${_Rectangle6Copy4}", "left", '3.92px', { fromValue: '3.92px'}], position: 3250, duration: 0 },
            { id: "eid344", tween: [ "style", "${_Rectangle6Copy4}", "left", '3.92px', { fromValue: '3.92px'}], position: 6000, duration: 0 },
            { id: "eid345", tween: [ "style", "${_Rectangle6Copy4}", "left", '3.92px', { fromValue: '3.92px'}], position: 6455, duration: 0 },
            { id: "eid388", tween: [ "style", "${_Rectangle6Copy4}", "left", '3.92px', { fromValue: '3.92px'}], position: 8375, duration: 0 },
            { id: "eid451", tween: [ "style", "${_Rectangle6Copy4}", "left", '3.92px', { fromValue: '3.92px'}], position: 11000, duration: 0 },
            { id: "eid452", tween: [ "style", "${_Rectangle6Copy4}", "left", '3.92px', { fromValue: '3.92px'}], position: 11455, duration: 0 },
            { id: "eid489", tween: [ "style", "${_Rectangle6Copy4}", "left", '3.92px', { fromValue: '3.92px'}], position: 13250, duration: 0 },
            { id: "eid544", tween: [ "style", "${_Rectangle6Copy4}", "left", '3.92px', { fromValue: '3.92px'}], position: 16000, duration: 0 },
            { id: "eid545", tween: [ "style", "${_Rectangle6Copy4}", "left", '3.92px', { fromValue: '3.92px'}], position: 16455, duration: 0 },
            { id: "eid619", tween: [ "style", "${_Rectangle6Copy4}", "left", '3.92px', { fromValue: '3.92px'}], position: 18250, duration: 0 },
            { id: "eid645", tween: [ "style", "${_Rectangle6Copy4}", "left", '3.92px', { fromValue: '3.92px'}], position: 21000, duration: 0 },
            { id: "eid646", tween: [ "style", "${_Rectangle6Copy4}", "left", '3.92px', { fromValue: '3.92px'}], position: 21455, duration: 0 },
            { id: "eid688", tween: [ "style", "${_Rectangle6Copy4}", "left", '3.92px', { fromValue: '3.92px'}], position: 23000, duration: 0 },
            { id: "eid760", tween: [ "style", "${_Rectangle6Copy4}", "left", '3.92px', { fromValue: '3.92px'}], position: 24250, duration: 0 },
            { id: "eid761", tween: [ "style", "${_Rectangle6Copy4}", "left", '3.92px', { fromValue: '3.92px'}], position: 24705, duration: 0 },
            { id: "eid772", tween: [ "style", "${_Rectangle6Copy4}", "left", '3.92px', { fromValue: '3.92px'}], position: 26000, duration: 0 },
            { id: "eid856", tween: [ "style", "${_Rectangle6Copy4}", "left", '3.92px', { fromValue: '3.92px'}], position: 28000, duration: 0 },
            { id: "eid857", tween: [ "style", "${_Rectangle6Copy4}", "left", '3.92px', { fromValue: '3.92px'}], position: 28455, duration: 0 },
            { id: "eid912", tween: [ "style", "${_Rectangle6Copy4}", "left", '3.92px', { fromValue: '3.92px'}], position: 30000, duration: 0 },
            { id: "eid245", tween: [ "style", "${_Rectangle6Copy3}", "left", '72.68px', { fromValue: '72.68px'}], position: 1750, duration: 0 },
            { id: "eid246", tween: [ "style", "${_Rectangle6Copy3}", "left", '72.68px', { fromValue: '72.68px'}], position: 2205, duration: 0 },
            { id: "eid295", tween: [ "style", "${_Rectangle6Copy3}", "left", '72.68px', { fromValue: '72.68px'}], position: 3250, duration: 0 },
            { id: "eid350", tween: [ "style", "${_Rectangle6Copy3}", "left", '72.68px', { fromValue: '72.68px'}], position: 6000, duration: 0 },
            { id: "eid351", tween: [ "style", "${_Rectangle6Copy3}", "left", '72.68px', { fromValue: '72.68px'}], position: 6455, duration: 0 },
            { id: "eid392", tween: [ "style", "${_Rectangle6Copy3}", "left", '72.68px', { fromValue: '72.68px'}], position: 8375, duration: 0 },
            { id: "eid457", tween: [ "style", "${_Rectangle6Copy3}", "left", '72.68px', { fromValue: '72.68px'}], position: 11000, duration: 0 },
            { id: "eid458", tween: [ "style", "${_Rectangle6Copy3}", "left", '72.68px', { fromValue: '72.68px'}], position: 11455, duration: 0 },
            { id: "eid493", tween: [ "style", "${_Rectangle6Copy3}", "left", '72.68px', { fromValue: '72.68px'}], position: 13250, duration: 0 },
            { id: "eid550", tween: [ "style", "${_Rectangle6Copy3}", "left", '72.68px', { fromValue: '72.68px'}], position: 16000, duration: 0 },
            { id: "eid551", tween: [ "style", "${_Rectangle6Copy3}", "left", '72.68px', { fromValue: '72.68px'}], position: 16455, duration: 0 },
            { id: "eid623", tween: [ "style", "${_Rectangle6Copy3}", "left", '72.68px', { fromValue: '72.68px'}], position: 18250, duration: 0 },
            { id: "eid651", tween: [ "style", "${_Rectangle6Copy3}", "left", '72.68px', { fromValue: '72.68px'}], position: 21000, duration: 0 },
            { id: "eid652", tween: [ "style", "${_Rectangle6Copy3}", "left", '72.68px', { fromValue: '72.68px'}], position: 21455, duration: 0 },
            { id: "eid692", tween: [ "style", "${_Rectangle6Copy3}", "left", '72.68px', { fromValue: '72.68px'}], position: 23000, duration: 0 },
            { id: "eid766", tween: [ "style", "${_Rectangle6Copy3}", "left", '72.68px', { fromValue: '72.68px'}], position: 24250, duration: 0 },
            { id: "eid767", tween: [ "style", "${_Rectangle6Copy3}", "left", '72.68px', { fromValue: '72.68px'}], position: 24705, duration: 0 },
            { id: "eid776", tween: [ "style", "${_Rectangle6Copy3}", "left", '72.68px', { fromValue: '72.68px'}], position: 26000, duration: 0 },
            { id: "eid862", tween: [ "style", "${_Rectangle6Copy3}", "left", '72.68px', { fromValue: '72.68px'}], position: 28000, duration: 0 },
            { id: "eid863", tween: [ "style", "${_Rectangle6Copy3}", "left", '72.68px', { fromValue: '72.68px'}], position: 28455, duration: 0 },
            { id: "eid916", tween: [ "style", "${_Rectangle6Copy3}", "left", '72.68px', { fromValue: '72.68px'}], position: 30000, duration: 0 },
            { id: "eid247", tween: [ "style", "${_Rectangle6Copy3}", "top", '-23.12px', { fromValue: '-3.17px'}], position: 1750, duration: 455 },
            { id: "eid296", tween: [ "style", "${_Rectangle6Copy3}", "top", '-4.12px', { fromValue: '-23.12px'}], position: 3250, duration: 500 },
            { id: "eid352", tween: [ "style", "${_Rectangle6Copy3}", "top", '-23.12px', { fromValue: '-3.17px'}], position: 6000, duration: 455 },
            { id: "eid393", tween: [ "style", "${_Rectangle6Copy3}", "top", '-4.12px', { fromValue: '-23.12px'}], position: 8375, duration: 500 },
            { id: "eid459", tween: [ "style", "${_Rectangle6Copy3}", "top", '-23.12px', { fromValue: '-3.17px'}], position: 11000, duration: 455 },
            { id: "eid494", tween: [ "style", "${_Rectangle6Copy3}", "top", '-4.12px', { fromValue: '-23.12px'}], position: 13250, duration: 500 },
            { id: "eid552", tween: [ "style", "${_Rectangle6Copy3}", "top", '-23.12px', { fromValue: '-3.17px'}], position: 16000, duration: 455 },
            { id: "eid624", tween: [ "style", "${_Rectangle6Copy3}", "top", '-4.12px', { fromValue: '-23.12px'}], position: 18250, duration: 500 },
            { id: "eid653", tween: [ "style", "${_Rectangle6Copy3}", "top", '-23.12px', { fromValue: '-3.17px'}], position: 21000, duration: 455 },
            { id: "eid693", tween: [ "style", "${_Rectangle6Copy3}", "top", '-4.12px', { fromValue: '-23.12px'}], position: 23000, duration: 500 },
            { id: "eid768", tween: [ "style", "${_Rectangle6Copy3}", "top", '-23.12px', { fromValue: '-3.17px'}], position: 24250, duration: 455 },
            { id: "eid777", tween: [ "style", "${_Rectangle6Copy3}", "top", '-4.12px', { fromValue: '-23.12px'}], position: 26000, duration: 500 },
            { id: "eid864", tween: [ "style", "${_Rectangle6Copy3}", "top", '-23.12px', { fromValue: '-3.17px'}], position: 28000, duration: 455 },
            { id: "eid917", tween: [ "style", "${_Rectangle6Copy3}", "top", '-4.12px', { fromValue: '-23.12px'}], position: 30000, duration: 500 }         ]
      }
   }
},
"BOX_billstatable": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','5px','40px','28px','auto','auto'],
      transform: [{1:0,0:0},['92deg']],
      id: 'box',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(87,146,222,1.00)']
   },
   {
      transform: [{1:0,0:0},['-90deg']],
      rect: ['0px','3px','40px','34px','auto','auto'],
      type: 'text',
      id: 'Text2',
      text: 'Hemnes<br>Table',
      align: 'left',
      font: ['Arial, Helvetica, sans-serif',11,'rgba(0,0,0,1)','normal','none','']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '48.566665649414px'],
            ["style", "width", '34px']
         ],
         "${_Text2}": [
            ["style", "top", '3px'],
            ["transform", "rotateZ", '-90deg'],
            ["style", "width", '40px'],
            ["style", "left", '0px'],
            ["style", "font-size", '11px']
         ],
         "${_box}": [
            ["color", "background-color", 'rgba(176,146,98,1.00)'],
            ["style", "top", '7.25px'],
            ["style", "border-width", '1px'],
            ["transform", "rotateZ", '90deg'],
            ["style", "height", '34px'],
            ["style", "border-style", 'none'],
            ["style", "left", '-7.27px'],
            ["style", "width", '48.571428571429px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 6500,
         autoPlay: true,
         timeline: [
            { id: "eid157", tween: [ "style", "${_box}", "top", '-0.66px', { fromValue: '7.25px'}], position: 0, duration: 505 },
            { id: "eid201", tween: [ "style", "${_box}", "top", '5.96px', { fromValue: '-0.66px'}], position: 505, duration: 2995 },
            { id: "eid158", tween: [ "style", "${_box}", "top", '26.98px', { fromValue: '5.96px'}], position: 3500, duration: 250 },
            { id: "eid159", tween: [ "style", "${_box}", "top", '35.98px', { fromValue: '26.98px'}], position: 3750, duration: 250 },
            { id: "eid160", tween: [ "style", "${_box}", "top", '574.48px', { fromValue: '35.98px'}], position: 4000, duration: 1000 },
            { id: "eid161", tween: [ "style", "${_box}", "top", '564.98px', { fromValue: '574.48px'}], position: 5000, duration: 250 },
            { id: "eid162", tween: [ "style", "${_box}", "top", '543.48px', { fromValue: '564.98px'}], position: 5250, duration: 250 },
            { id: "eid163", tween: [ "style", "${_box}", "top", '542.48px', { fromValue: '543.48px'}], position: 5500, duration: 500 },
            { id: "eid200", tween: [ "style", "${_box}", "height", '48.549999237061px', { fromValue: '34px'}], position: 0, duration: 505 },
            { id: "eid168", tween: [ "style", "${_box}", "left", '-14.34px', { fromValue: '-7.27px'}], position: 0, duration: 505 },
            { id: "eid202", tween: [ "style", "${_box}", "left", '-8.62px', { fromValue: '-14.34px'}], position: 505, duration: 2495 },
            { id: "eid169", tween: [ "style", "${_box}", "left", '-2.98px', { fromValue: '-8.62px'}], position: 3000, duration: 500 },
            { id: "eid170", tween: [ "style", "${_box}", "left", '28.78px', { fromValue: '-2.98px'}], position: 3500, duration: 250 },
            { id: "eid171", tween: [ "style", "${_box}", "left", '52.67px', { fromValue: '28.78px'}], position: 3750, duration: 250 },
            { id: "eid172", tween: [ "style", "${_box}", "left", '52.02px', { fromValue: '52.67px'}], position: 4000, duration: 1000 },
            { id: "eid173", tween: [ "style", "${_box}", "left", '32.52px', { fromValue: '52.02px'}], position: 5000, duration: 250 },
            { id: "eid174", tween: [ "style", "${_box}", "left", '23.02px', { fromValue: '32.52px'}], position: 5250, duration: 250 },
            { id: "eid175", tween: [ "style", "${_box}", "left", '-74.98px', { fromValue: '23.02px'}], position: 5500, duration: 500 },
            { id: "eid176", tween: [ "style", "${_box}", "left", '-99.98px', { fromValue: '-74.98px'}], position: 6000, duration: 500 },
            { id: "eid167", tween: [ "color", "${_box}", "background-color", 'rgba(176,146,98,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(176,146,98,1.00)'}], position: 0, duration: 0 },
            { id: "eid203", tween: [ "style", "${_box}", "width", '63.233291625977px', { fromValue: '48.571428571429px'}], position: 0, duration: 505 },
            { id: "eid164", tween: [ "transform", "${_box}", "rotateZ", '0deg', { fromValue: '90deg'}], position: 3500, duration: 500 },
            { id: "eid165", tween: [ "transform", "${_box}", "rotateZ", '90deg', { fromValue: '0deg'}], position: 5000, duration: 500 }         ]
      }
   }
},
"shelf_1": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['3px','2px','57px','520px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(162,27,27,1.00)']
   },
   {
      rect: ['0px','514px','64px','12px','auto','auto'],
      id: 'Rectangle4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,0,0,1.00)']
   },
   {
      rect: ['0px','256px','64px','12px','auto','auto'],
      id: 'Rectangle5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,0,0,1)']
   },
   {
      rect: ['0px','0px','64px','12px','auto','auto'],
      id: 'Rectangle5Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,0,0,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '526px'],
            ["style", "width", '64px']
         ],
         "${_Rectangle5}": [
            ["style", "top", '256px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_Rectangle5Copy}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '64px']
         ],
         "${_Rectangle4}": [
            ["style", "top", '514px'],
            ["style", "left", '0px'],
            ["style", "width", '63.666667938232px']
         ],
         "${_Rectangle}": [
            ["style", "top", '2px'],
            ["style", "left", '2.67px'],
            ["color", "background-color", 'rgba(162,27,27,1.00)']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"billstaTable": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','44px','63px','auto','auto'],
      id: 'Rectangle6',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(176,146,98,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '63px'],
            ["style", "width", '44px']
         ],
         "${_Rectangle6}": [
            ["style", "height", '63px'],
            ["style", "top", '-0.02px'],
            ["style", "left", '0px'],
            ["style", "width", '44.000080108643px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"hemnesTable": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','44px','63px','auto','auto'],
      id: 'Rectangle6Copy',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(176,146,98,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle6Copy}": [
            ["style", "top", '0px'],
            ["style", "height", '63px'],
            ["style", "left", '0px'],
            ["style", "width", '44.000080108643px']
         ],
         "${symbolSelector}": [
            ["style", "height", '63px'],
            ["style", "width", '44px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"glennStool": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','44px','63px','auto','auto'],
      id: 'Rectangle6Copy2',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(176,146,98,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle6Copy2}": [
            ["style", "top", '-0.02px'],
            ["style", "height", '63px'],
            ["style", "left", '0px'],
            ["style", "width", '44.000080108643px']
         ],
         "${symbolSelector}": [
            ["style", "height", '63px'],
            ["style", "width", '44px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"stockholmSofa": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','44px','63px','auto','auto'],
      id: 'Rectangle6Copy3',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(176,146,98,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '63px'],
            ["style", "width", '44px']
         ],
         "${_Rectangle6Copy3}": [
            ["style", "top", '0px'],
            ["style", "height", '63px'],
            ["style", "left", '0px'],
            ["style", "width", '44.000080108643px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"billsta_table": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','43px','73px','auto','auto'],
      id: 'Rectangle8',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(176,146,98,1)']
   },
   {
      transform: [{1:0,0:0},['-90deg']],
      rect: ['-36px','8px','141px','57px','auto','auto'],
      type: 'text',
      id: 'Text3',
      text: 'Billsta<br>Table',
      align: 'center',
      font: ['Arial, Helvetica, sans-serif',12,'rgba(0,0,0,1)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3}": [
            ["style", "top", '8.28px'],
            ["style", "text-align", 'center'],
            ["transform", "rotateZ", '-90deg'],
            ["style", "left", '-36.32px'],
            ["style", "font-size", '12px']
         ],
         "${symbolSelector}": [
            ["style", "height", '73px'],
            ["style", "width", '43px']
         ],
         "${_Rectangle8}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"stockholm_sofa": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','53px','95px','auto','auto'],
      id: 'Rectangle7',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(176,146,98,1)']
   },
   {
      transform: [{1:0,0:0},['-90deg']],
      rect: ['-4px','33px','63px','28px','auto','auto'],
      type: 'text',
      id: 'Text5',
      text: 'Stockholm<br>Sofa',
      align: 'center',
      font: ['Arial, Helvetica, sans-serif',12,'rgba(0,0,0,1)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle7}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "height", '94.650001525879px']
         ],
         "${_Text5}": [
            ["style", "top", '33.32px'],
            ["style", "width", '62.666625976563px'],
            ["style", "left", '-4.32px'],
            ["transform", "rotateZ", '-90deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '94.650001525879px'],
            ["style", "width", '53px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"glenn_stool": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','36px','63px','auto','auto'],
      id: 'Rectangle10',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(176,146,98,1)']
   },
   {
      type: 'text',
      font: ['Arial, Helvetica, sans-serif',12,'rgba(0,0,0,1)','normal','none','normal'],
      rect: ['1px','17px','auto','auto','auto','auto'],
      id: 'Text4',
      text: 'Glenn<br>Stool',
      align: 'center',
      transform: [{1:0,0:0},['-90deg']]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle10}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Text4}": [
            ["style", "top", '17px'],
            ["style", "left", '1px'],
            ["transform", "rotateZ", '-90deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '63px'],
            ["style", "width", '36px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"errland_chair": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','43px','49px','auto','auto'],
      id: 'Rectangle9',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(176,146,98,1)']
   },
   {
      transform: [{1:0,0:0},['90deg']],
      rect: ['2px','9px','auto','auto','auto','auto'],
      type: 'text',
      id: 'Text6',
      text: 'Errland<br>Chair',
      align: 'center',
      font: ['Arial, Helvetica, sans-serif',12,'rgba(0,0,0,1)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text6}": [
            ["style", "top", '9px'],
            ["style", "left", '2px'],
            ["transform", "rotateZ", '90deg']
         ],
         "${_Rectangle9}": [
            ["style", "height", '48.750096638997px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '43px']
         ],
         "${symbolSelector}": [
            ["style", "height", '48.75px'],
            ["style", "width", '43px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"hemnes_table": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','43px','84px','auto','auto'],
      id: 'Rectangle',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(176,146,98,1)']
   },
   {
      type: 'text',
      font: ['Arial, Helvetica, sans-serif',12,'rgba(0,0,0,1)','normal','none','normal'],
      rect: ['-7px','27px','59px','auto','auto','auto'],
      id: 'Text2',
      text: 'Hemnes<br>Table',
      align: 'center',
      transform: [{1:0,0:0},['90deg']]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle}": [
            ["style", "height", '83.650001525879px'],
            ["style", "top", '-0.02px'],
            ["style", "left", '0px'],
            ["style", "width", '43px']
         ],
         "${_Text2}": [
            ["style", "top", '27.32px'],
            ["style", "width", '58.666625976563px'],
            ["style", "left", '-7.32px'],
            ["transform", "rotateZ", '90deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '83.650001525879px'],
            ["style", "width", '43px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"userCart1": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','79px','73px','auto','auto'],
      id: 'Rectangle4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(22,44,156,1.00)']
   },
   {
      type: 'text',
      font: ['Arial, Helvetica, sans-serif',18,'rgba(0,0,0,1)','normal','none','normal'],
      rect: ['-6px','3px','79px','66px','auto','auto'],
      id: 'Text3',
      text: 'Users Cart',
      align: 'center',
      transform: [{1:0,0:0},['-270deg']]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3}": [
            ["style", "top", '3.29px'],
            ["transform", "rotateZ", '-270deg'],
            ["style", "height", '66.433268229167px'],
            ["style", "width", '79px'],
            ["style", "left", '-6.29px'],
            ["style", "font-size", '18px']
         ],
         "${_Rectangle4}": [
            ["style", "top", '0px'],
            ["style", "left", '-0.02px'],
            ["style", "width", '78.666748046875px']
         ],
         "${symbolSelector}": [
            ["style", "height", '73px'],
            ["style", "width", '78.666664123535px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-1453162");
