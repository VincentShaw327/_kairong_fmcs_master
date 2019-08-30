import React from 'react';
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util,
} from 'bizcharts';
import DataSet from '@antv/data-set';

export default class Labelline extends React.Component {
  render() {
    const { DataView } = DataSet;
    const data = [
      {
        item: '事例一',
        count: 40,
      },
      {
        item: '事例二',
        count: 21,
      },
      {
        item: '事例三',
        count: 17,
      },
      {
        item: '事例四',
        count: 13,
      },
      {
        item: '事例五',
        count: 9,
      },
    ];
    const dv = new DataView();
    dv.source( data ).transform( {
      type: 'percent',
      field: 'count',
      dimension: 'item',
      as: 'percent',
    } );
    const cols = {
      percent: {
        formatter: ( val ) => {
          val = `${val * 100}%`;
          return val;
        },
      },
    };
    return (
      <div>
        <Chart
        //   height={window.innerHeight}
          height={100}
          data={dv}
          scale={cols}
          padding={[0, 10, 10, 10]}
          forceFit
        >
          <Coord type="theta" radius={0.75} />
          <Axis name="percent" />
          {/* <Legend
            position="right"
            offsetY={-window.innerHeight / 2 + 120}
            offsetX={-100}
          /> */}
          <Tooltip
            showTitle={false}
            itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
          />
          <Geom
            type="intervalStack"
            position="percent"
            color="item"
            tooltip={[
              'item*percent',
              ( item, percent ) => {
                percent = `${percent * 100}%`;
                return {
                  name: item,
                  value: percent,
                };
              },
            ]}
            style={{
              lineWidth: 1,
              stroke: '#fff',
            }}
          >
            {/* <Label
              content="percent"
              formatter={( val, item ) => `${item.point.item}: ${val}`}
            /> */}
          </Geom>
        </Chart>
      </div>
    );
  }
}

class EGLineChart extends React.Component {
  render() {
    const { data } = this.props;
    const cols = {
      value: {
        min: 0,
      },
      time: {
        range: [0, 1],
      },
    };
    return (
      <div>
        <Chart height={50} data={data} scale={cols} forceFit padding={[0, 0, 0, 0]}>
          <Axis name="time" visible={false} />
          <Axis
            name="value"
            visible={false}
            // label={{
            //   formatter: val => `${( val / 10000 ).toFixed( 1 )}k`,
            // }}
          />
          <Tooltip
            crosshairs={{
              type: 'line',
            }}
          />
          <Geom type="area" position="time*value" />
          <Geom type="line" position="time*value" size={2} />
        </Chart>
      </div>
    );
  }
}
class EGBarChart extends React.Component {
  render() {
    const { data } = this.props;
    const cols = {
      value: {
        min: 0,
      },
      time: {
        range: [0, 1],
      },
    };
    return (
      <div>
        <Chart height={50} data={data} scale={cols} forceFit padding={[0, 0, 0, 0]}>
          <Axis name="time" tickLine={null} visible={false} />
          <Axis
            name="value"
            visible={false}
            // label={{
            //   formatter: val => `${( val / 10000 ).toFixed( 1 )}k`,
            // }}
          />
          <Tooltip
            crosshairs={{
              type: 'line',
            }}
          />
          {/* <Geom type="area" position="time*value" /> */}
          <Geom type="line" shape="smooth" size={1} position="time*value" />
        </Chart>
      </div>
    );
  }
}

export {
  EGLineChart,
  EGBarChart,
}
// ReactDOM.render(<Labelline />, mountNode)
