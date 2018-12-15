// function abc() {
//   console.log("in here");
//   require.config({
//     paths: {
//       echarts: 'http://echarts.baidu.com/build/dist'
//     }
//   });

//   require(
//     [
//       'echarts',
//       'echarts/chart/chord',
//       'echarts/chart/force'
//     ],
//     function (ec) {
//       // Initialize after dom ready
//       var myChart = ec.init(document.getElementById('main'));
//       console.log("inside main");
//       //   var ecConfig = require('echarts/config');


//       function focus(param) {
//         var data = param.data;
//         var links = option.series[0].links;
//         var nodes = option.series[0].nodes;
//         if (
//           data.source !== undefined &&
//           data.target !== undefined
//         ) {
//           var sourceNode = nodes.filter(function (n) {
//             return n.name == data.source
//           })[0];
//           var targetNode = nodes.filter(function (n) {
//             return n.name == data.target
//           })[0];
//           console.log("aah " + sourceNode.name + ' -> ' + targetNode.name + ' (' + data.weight + ')');
//         } else {
//           console.log("aai" + data.name + '(' + data.value + ')');
//         }
//       }
//       //   myChart.on(config.EVENT.CLICK, focus)


//       myChart.on(echarts.EVENT.CLICK, focus)

//       myChart.on(echarts.EVENT.FORCE_LAYOUT_END, function () {
//         console.log(myChart.chart.force.getPosition());
//       });

//     })
//   option = {
//     title: {
//       text: 'ab：ac',
//       subtext: 'ad',
//       x: 'right',
//       y: 'bottom'
//     },
//     tooltip: {
//       trigger: 'item',
//       formatter: '{a} : {b}'
//     },
//     toolbox: {
//       show: true,
//       feature: {
//         restore: {
//           show: true
//         },
//         magicType: {
//           show: true,
//           type: ['force', 'chord']
//         },
//         saveAsImage: {
//           show: true
//         }
//       }
//     },
//     legend: {
//       x: 'left',
//       data: ['ae', 'af']
//     },
//     series: [{
//       type: 'force',
//       name: "ab",
//       ribbonType: false,
//       categories: [{
//           name: 'ag'
//         },
//         {
//           name: 'ae'
//         },
//         {
//           name: 'af'
//         }
//       ],
//       itemStyle: {
//         normal: {
//           label: {
//             show: true,
//             textStyle: {
//               color: '#333'
//             }
//           },
//           nodeStyle: {
//             brushType: 'both',
//             borderColor: 'rgba(255,215,0,0.4)',
//             borderWidth: 1
//           },
//           linkStyle: {
//             type: 'curve'
//           }
//         },
//         emphasis: {
//           label: {
//             show: false
//             // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
//           },
//           nodeStyle: {
//             //r: 30
//           },
//           linkStyle: {}
//         }
//       },
//       useWorker: false,
//       minRadius: 15,
//       maxRadius: 25,
//       gravity: 1.1,
//       scaling: 1.1,
//       roam: 'move',
//       nodes: [{
//           category: 0,
//           name: 'ac',
//           value: 10,
//           label: 'ac\n（aaa）'
//         },
//         {
//           category: 1,
//           name: 'ah-ac',
//           value: 2
//         },
//         {
//           category: 1,
//           name: 'ai-ac',
//           value: 3
//         },
//         {
//           category: 1,
//           name: 'aj-ac',
//           value: 3
//         },
//         {
//           category: 1,
//           name: 'ak-al',
//           value: 7
//         },
//         {
//           category: 2,
//           name: 'am-an',
//           value: 5
//         },
//         {
//           category: 2,
//           name: 'ao',
//           value: 8
//         },
//         {
//           category: 2,
//           name: 'ap-aq',
//           value: 9
//         },
//         {
//           category: 2,
//           name: 'ar-as',
//           value: 4
//         },
//         {
//           category: 2,
//           name: 'at-au',
//           value: 4
//         },
//         {
//           category: 2,
//           name: 'av-aw',
//           value: 1
//         },
//       ],
//       links: [{
//           source: 'ah-ac',
//           target: 'ac',
//           weight: 1,
//           name: 'aab'
//         },
//         {
//           source: 'ai-ac',
//           target: 'ac',
//           weight: 2,
//           name: 'aac'
//         },
//         {
//           source: 'aj-ac',
//           target: 'ac',
//           weight: 1,
//           name: 'aad'
//         },
//         {
//           source: 'ak-al',
//           target: 'ac',
//           weight: 2
//         },
//         {
//           source: 'am-an',
//           target: 'ac',
//           weight: 3,
//           name: 'aae'
//         },
//         {
//           source: 'ao',
//           target: 'ac',
//           weight: 1
//         },
//         {
//           source: 'ap-aq',
//           target: 'ac',
//           weight: 6,
//           name: 'aaf'
//         },
//         {
//           source: 'ar-as',
//           target: 'ac',
//           weight: 1,
//           name: 'aag'
//         },
//         {
//           source: 'at-au',
//           target: 'ac',
//           weight: 1
//         },
//         {
//           source: 'av-aw',
//           target: 'ac',
//           weight: 1
//         },
//         {
//           source: 'aj-ac',
//           target: 'ai-ac',
//           weight: 1
//         },
//         {
//           source: 'ao',
//           target: 'ai-ac',
//           weight: 1
//         },
//         {
//           source: 'ao',
//           target: 'aj-ac',
//           weight: 1
//         },
//         {
//           source: 'ao',
//           target: 'ak-al',
//           weight: 1
//         },
//         {
//           source: 'ao',
//           target: 'am-an',
//           weight: 1
//         },
//         {
//           source: 'ap-aq',
//           target: 'ao',
//           weight: 6
//         },
//         {
//           source: 'ap-aq',
//           target: 'aj-ac',
//           weight: 1
//         },
//         {
//           source: 'at-au',
//           target: 'ao',
//           weight: 1
//         }
//       ]
//     }]
//   };
// }

abc();

function abc() {
  option = {
    title: {
      text: 'ab：ac',
      subtext: 'ad',
      x: 'right',
      y: 'bottom'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} : {b}'
    },
    toolbox: {
      show: true,
      feature: {
        restore: {
          show: true
        },
        magicType: {
          show: true,
          type: ['force', 'chord']
        },
        saveAsImage: {
          show: true
        }
      }
    },
    legend: {
      x: 'left',
      data: ['ae', 'af']
    },
    series: [{
      type: 'force',
      name: "ab",
      ribbonType: false,
      categories: [{
          name: 'ag'
        },
        {
          name: 'ae'
        },
        {
          name: 'af'
        }
      ],
      itemStyle: {
        normal: {
          label: {
            show: true,
            textStyle: {
              color: '#333'
            }
          },
          nodeStyle: {
            brushType: 'both',
            borderColor: 'rgba(255,215,0,0.4)',
            borderWidth: 1
          },
          linkStyle: {
            type: 'curve'
          }
        },
        emphasis: {
          label: {
            show: false
            // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
          },
          nodeStyle: {
            //r: 30
          },
          linkStyle: {}
        }
      },
      useWorker: false,
      minRadius: 15,
      maxRadius: 25,
      gravity: 1.1,
      scaling: 1.1,
      roam: 'move',
      nodes: [{
          category: 0,
          name: 'ac',
          value: 10,
          label: 'ac\n（aaa）'
        },
        {
          category: 1,
          name: 'ah-ac',
          value: 2
        },
        {
          category: 1,
          name: 'ai-ac',
          value: 3
        },
        {
          category: 1,
          name: 'aj-ac',
          value: 3
        },
        {
          category: 1,
          name: 'ak-al',
          value: 7
        },
        {
          category: 2,
          name: 'am-an',
          value: 5
        },
        {
          category: 2,
          name: 'ao',
          value: 8
        },
        {
          category: 2,
          name: 'ap-aq',
          value: 9
        },
        {
          category: 2,
          name: 'ar-as',
          value: 4
        },
        {
          category: 2,
          name: 'at-au',
          value: 4
        },
        {
          category: 2,
          name: 'av-aw',
          value: 1
        },
      ],
      links: [{
          source: 'ah-ac',
          target: 'ac',
          weight: 1,
          name: 'aab'
        },
        {
          source: 'ai-ac',
          target: 'ac',
          weight: 2,
          name: 'aac'
        },
        {
          source: 'aj-ac',
          target: 'ac',
          weight: 1,
          name: 'aad'
        },
        {
          source: 'ak-al',
          target: 'ac',
          weight: 2
        },
        {
          source: 'am-an',
          target: 'ac',
          weight: 3,
          name: 'aae'
        },
        {
          source: 'ao',
          target: 'ac',
          weight: 1
        },
        {
          source: 'ap-aq',
          target: 'ac',
          weight: 6,
          name: 'aaf'
        },
        {
          source: 'ar-as',
          target: 'ac',
          weight: 1,
          name: 'aag'
        },
        {
          source: 'at-au',
          target: 'ac',
          weight: 1
        },
        {
          source: 'av-aw',
          target: 'ac',
          weight: 1
        },
        {
          source: 'aj-ac',
          target: 'ai-ac',
          weight: 1
        },
        {
          source: 'ao',
          target: 'ai-ac',
          weight: 1
        },
        {
          source: 'ao',
          target: 'aj-ac',
          weight: 1
        },
        {
          source: 'ao',
          target: 'ak-al',
          weight: 1
        },
        {
          source: 'ao',
          target: 'am-an',
          weight: 1
        },
        {
          source: 'ap-aq',
          target: 'ao',
          weight: 6
        },
        {
          source: 'ap-aq',
          target: 'aj-ac',
          weight: 1
        },
        {
          source: 'at-au',
          target: 'ao',
          weight: 1
        }
      ]
    }]
  };
  

  function focus(param) {
    var data = param.data;
    var links = option.series[0].links;
    var nodes = option.series[0].nodes;
    if (
      data.source !== undefined &&
      data.target !== undefined
    ) { //点击的是边
      var sourceNode = nodes.filter(function (n) {
        return n.name == data.source
      })[0];
      var targetNode = nodes.filter(function (n) {
        return n.name == data.target
      })[0];
      console.log("aah " + sourceNode.name + ' -> ' + targetNode.name + ' (' + data.weight + ')');
    } else { // 点击的是点
      console.log("aai" + data.name + '(' + data.value + ')');
    }
  }
  myChart.on(require('echarts/config').EVENT.CLICK, focus)

  myChart.on(require('echarts/config').EVENT.FORCE_LAYOUT_END, function () {
    console.log(myChart.chart.force.getPosition());
  });



}
