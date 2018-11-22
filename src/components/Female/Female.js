const Female = {
  type: 'Pie3D',
  width: 600,
  height: 400,
  dataFormat: 'json',
  dataSource: {
            "chart": {
              "caption": "Female Details",
              "subCaption": "For a net-worth of $1M",
              "showValues": "1",
              "showPercentInTooltip": "0",
              "numberPrefix": "$",
              "enableMultiSlicing": "1",
              "theme": "fusion"
            },
            "data": [
              {
                "label": "Equity",
                "value": "300000"
              },
              {
                "label": "Debt",
                "value": "230000"
              },
              {
                "label": "Bullion",
                "value": "180000"
              },
              {
                "label": "Real-estate",
                "value": "270000"
              },
              {
                "label": "Insurance",
                "value": "20000"
              }
            ]
          }
};


export default Female;
