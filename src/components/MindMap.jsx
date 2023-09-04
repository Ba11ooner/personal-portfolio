// npm i echarts --save
// npm i echarts-for-react --save
import ReactEcharts from 'echarts-for-react';

export const EchartsDom = () => {
    // 配置
    const getOption = {
        // 标题
        title: {
            text: '',
        },
        // 提示，滑过时展示数据
        tooltip: {
            trigger: 'item',
        },
        // 主要配置
        series: [
            {
                // 类型
                type: 'tree',
                // 数据源
                data: edata,

                top: '1%',
                left: '7%',
                bottom: '1%',
                right: '20%',

                symbol: 'none', // symbolSize: 100,
                // 字体节点样式
                label: {
                    fontSize: '15px',
                    fontStyle: 'Bold',
                    color: 'rgba(255, 255, 255, 1)',
                    backgroundColor: 'rgba(255, 165, 0, 1)',
                    borderRadius: [22, 11, 11, 6],
                    padding: [16, 16, 16, 16],
                },
                // 线条样式
                lineStyle: {
                    color: 'rgba(221, 212, 212, 1)',
                    curveness: 0.8,
                    width: '2',
                },

                leaves: {},

                emphasis: {
                    focus: 'descendant',
                },
                // 默认展开计几层
                initialTreeDepth: 1,

                expandAndCollapse: true,
                animationDuration: 550,
                animationDurationUpdate: 750,
            },
        ],
    };
    return (
        <div>
            <ReactEcharts

                style={{height: 700}}
                option={getOption}
                notMerge={true}
                lazyUpdate={true}
                // 绑定事件
                onEvents={onclick}
            />
        </div>
    );
}

// 实现手风琴效果的函数
const clickEchartsPie = (params) => {
    // console.log('params:', params);
};

const onclick = {
    // 这里绑定回调
    click: clickEchartsPie,
};

const edata = [{
    //一级菜单
    name: '技术栈',
    label: {
        backgroundColor: 'rgba(168, 0, 252, 1)',
        borderRadius: [22, 11, 11, 6],
        padding: [16, 16, 16, 16],
    },
    //二级菜单
    children: [
        {
            name: 'Web 开发',
            idss: 1,
            //是否收缩
            collapsed: false,
            //三级菜单
            children: [
                {
                    name: '前端',
                    //四级菜单
                    children: [
                        {
                            name: 'JavaScript 框架', collapsed: false,
                            children: [
                                {name: 'jQuery', collapsed: true,},
                                {name: 'Vue', collapsed: true,},
                                {name: 'React', collapsed: true,},
                            ]
                        },
                        {
                            name: '组件库', collapsed: false,
                            children: [
                                {name: 'Bootstrap', collapsed: true,},
                                {name: 'ElementUI', collapsed: true,},
                                {name: 'ProComponents', collapsed: true,},
                            ]
                        }
                        ,
                    ],
                },
                {
                    name: '后端',
                    //四级菜单
                    children: [
                        {
                            name: 'Spring 家族',
                            //五级菜单
                            children: [
                                {name: 'Spring MVC', collapsed: true,},
                                {name: 'Spring Boot', collapsed: true,},
                                {name: 'Spring Cloud', collapsed: true,},
                            ],
                            collapsed: true,
                        },
                        {
                            name: '数据库',
                            //五级菜单
                            children: [
                                {name: 'MySQL', collapsed: true,},
                                {name: 'Redis', collapsed: true,},
                            ],
                            collapsed: false,
                        },
                        {
                            name: '中间件',
                            //五级菜单
                            children: [
                                {name: 'Dubbo', collapsed: true,},
                                {name: 'Nacos', collapsed: true,},
                                {name: 'RabbitMQ', collapsed: true,},
                            ],
                            collapsed: false,
                        },
                        {
                            name: '辅助工具',
                            //五级菜单
                            children: [
                                {name: 'Git', collapsed: true,},
                                {name: 'Postman', collapsed: true,},
                                {name: 'Navicat', collapsed: true,},
                            ],
                            collapsed: false,
                        },
                    ],
                },
                {
                    name: '运维部署',
                    children: [
                        {
                            name: 'Nginx', collapsed: false,
                            children: [
                                {name: 'OpenResty', collapsed: true}]
                        },
                        {name: 'Docker', collapsed: true,},
                        {name: 'Jenkins', collapsed: true,},
                        {name: 'Kubernetes', collapsed: true,},
                    ],
                },
            ],
        },
        {
            name: 'Unity 开发',
        },
        {
            name: '小程序开发',
        },
        {
            name: 'Android 开发',
        },
    ],
},];


