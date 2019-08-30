import React, { Fragment } from 'react';
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
import moment from 'moment'
import DataSet from '@antv/data-set';

class EGTend extends React.Component {
  render() {
    const { data } = this.props;
    const ds = new DataSet();
    const dv = ds.createView().source( data || [] );
    dv.transform( {
      type: 'fold',
      fields: ['3.1', '3.2', '3.3', '3.4', '3.5', '3.6', '3.7', '3.8', '3.9', '3.10'],
      // 展开字段集
      key: '月份',
      // key字段
      value: '产量', // value字段
    } );
    const scale = {
      time: {
        tickCount: 6, // 定义坐标轴刻度线的条数，默认为 5
      },
    };
    return (
      <div>
        <Chart
          height={260}
          data={data || []}
          padding={[20, 10, 30, 70]}
          forceFit
        >
          <Axis
            name="time"
            label={
                {
                    textStyle: {
                        textAlign: 'center', // 文本对齐方向，可取值为： start center end
                        // fill: 'white', // 文本的颜色
                        fontSize: '12', // 文本大小
                        fontWeight: 'bold', // 文本粗细
                        textBaseline: 'top', // 文本基准线，可取 top middle bottom，默认为middle
                    },
                    formatter( text, item, index ) {
                      const txt = moment( text ).format( 'MM/DD' );
                      // return `${arr[0]}\n${arr[1]}`;
                      // return `${text}/kW.h`;
                      return `${txt}`;
                    },
                }
            }
          />
          <Axis
            name="energy"
            line={
                {
                    // stroke: 'white',
                    // fill: 'white',
                    // opacity: 0.3,
                    lineWidth: 2,
                  }
            }
            label={
                {
                    textStyle: {
                        textAlign: 'end', // 文本对齐方向，可取值为： start center end
                        // fill: 'white', // 文本的颜色
                        fontSize: '10px', // 文本大小
                        fontWeight: 'bold', // 文本粗细
                        textBaseline: 'middle', // 文本基准线，可取 top middle bottom，默认为middle
                    },
                    formatter( text, item, index ) {
                        const arr = text.split( ' ' );
                        // return `${arr[0]}\n${arr[1]}`;
                        return `${text}/kW.h`;
                        // return `${text}`;
                      },
                }
            }
          />
          {/* <Legend /> */}
          <Tooltip
            crosshairs={{
              type: 'y',
            }}
          />
          <Geom
            type="interval"
            position="time*energy"
            color={['#00BCFF']}
            // color={"name"}
            // adjust={[
            //   {
            //     type: "dodge",
            //     marginRatio: 1 / 32
            //   }
            // ]}
          />
        </Chart>
      </div>
    );
  }
}


export default EGTend
export {
    EGTend,
}
