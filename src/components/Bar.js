import React, { Component } from 'react';
import {VictoryChart, VictoryBar, VictoryTheme } from 'victory';
import {xml} from '../Data'

var parseString = require('xml2js').parseString;
parseString(xml, function (err, result) {
    const data = result.Response.Times[0].Time;

    const mapData = data.map((obj) => {
        return (
        {'Date': obj.Date[0], 
        'Minutes': obj.Minutes[0]})
        })
        console.log(mapData)
});




const sampleData = [
    {x: 1, y: 2},
    {x: 2, y: 3}
];


class Bar extends Component {
    render() {
        return (
            <div>
                <VictoryChart
                    theme={VictoryTheme.material}
                    domainPadding={{ x: 20 }}
                    >
                    <VictoryBar
                     
                        barWidth={40}
                        style={{
                        data: { fill: "#c43a31" }
                        }}
                        data={sampleData}
                    />
                </VictoryChart>              
            </div>
        );
    }
}

export default Bar


