import React from 'react'
import './AMain.css'
import {
    Chart,
    Geom,
    Axis,
    Tooltip,
    Coord,
    Label,
    Legend
} from "bizcharts";
import DataSet from "@antv/data-set";

export default class AMain extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { DataView } = DataSet;
        const data = [
            {
                item: "服饰",
                count: 40
            },
            {
                item: "床上用品",
                count: 21
            },
            {
                item: "其他",
                count: 17
            },
            {
                item: "家用电器",
                count: 13
            },
            {
                item: "厨房用具",
                count: 9
            }
        ];
        const dv = new DataView();
        dv.source(data).transform({
            type: "percent",
            field: "count",
            dimension: "item",
            as: "percent"
        });
        const cols = {
            percent: {
                formatter: val => {
                    val = val * 100 + "%";
                    return val;
                }
            }
        };
        // 数据源
        const data1 = [
            { genre: '床上用品', sold: 275, income: 2300 },
            { genre: '厨房用具', sold: 115, income: 667 },
            { genre: '家用电器', sold: 120, income: 982 },
            { genre: '服饰', sold: 350, income: 5271 },
            { genre: '其他', sold: 150, income: 3710 }
        ];

        // 定义度量
        const cols1 = {
            sold: { alias: '销售量' },
            genre: { alias: '商品种类' }
        };
        return (
            <div className="amain">
                <h2>  本月销售情况</h2>
                <div className="left">
                    <Chart
                        forceFit
                        height={600}
                        data={dv}
                        scale={cols}
                    >
                        <Coord type="theta" radius={0.75} />
                        <Axis name="percent" />
                        <Legend
                            position="right"
                            offsetY={-window.innerHeight / 2 + 100}
                            offsetX={-100}
                        />
                        <Tooltip
                            showTitle={false}
                            itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
                        />
                        <Geom
                            type="intervalStack"
                            position="percent"
                            color="item"
                            tooltip={[
                                "item*percent",
                                (item, percent) => {
                                    percent = percent * 100 + "%";
                                    return {
                                        name: item,
                                        value: percent
                                    };
                                }
                            ]}
                            style={{
                                lineWidth: 1,
                                stroke: "#fff"
                            }}
                        >
                            <Label
                                content="percent"
                                offset={-40}
                                textStyle={{
                                    rotate: 0,
                                    textAlign: "center",
                                    shadowBlur: 2,
                                    shadowColor: "rgba(0, 0, 0, .45)"
                                }}
                            />
                        </Geom>
                    </Chart>
                </div>
                <div className="right">
                    <Chart forceFit height={600} data={data1} scale={cols1}>
                        <Axis name="genre" title />
                        <Axis name="sold" title />
                        <Legend position="top" dy={-20} />
                        <Tooltip />
                        <Geom type="interval" position="genre*sold" color="genre" />
                    </Chart>
                </div>
            </div>
        );
    }
}