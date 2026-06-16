import * as echarts from 'echarts';
import xiaoSalesData from './data.js';
import './style.css';

// 初始化图表
const chartDom = document.getElementById('chart');
const myChart = echarts.init(chartDom);

const { months, sales, company, category, unit, year, total } = xiaoSalesData;

// 配置项
const option = {
  title: {
    text: `${company} — ${year}年${category}月度销售额`,
    subtext: `全年累计：${total.toFixed(1)} ${unit}`,
    left: 'center',
    textStyle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
    },
    subtextStyle: {
      fontSize: 14,
      color: '#666',
    },
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
    formatter: (params) => {
      const { name, value } = params[0];
      return `<strong>${name}</strong><br/>
              销售额：<span style="color:#5470c6;font-weight:bold;">${value} ${unit}</span>`;
    },
  },
  grid: {
    top: 80,
    left: 50,
    right: 30,
    bottom: 40,
  },
  xAxis: {
    type: 'category',
    data: months,
    axisLabel: {
      fontSize: 12,
    },
    axisTick: {
      alignWithLabel: true,
    },
  },
  yAxis: {
    type: 'value',
    name: `单位：${unit}`,
    nameTextStyle: {
      fontSize: 12,
      color: '#999',
    },
    axisLabel: {
      formatter: '{value}',
    },
  },
  series: [
    {
      name: `${category}销售额`,
      type: 'bar',
      data: sales,
      barWidth: '50%',
      itemStyle: {
        borderRadius: [6, 6, 0, 0],
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#5470c6' },
          { offset: 1, color: '#91cc75' },
        ]),
      },
      label: {
        show: true,
        position: 'top',
        formatter: '{c}',
        fontSize: 12,
        fontWeight: 'bold',
        color: '#333',
      },
      emphasis: {
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#3b5bb5' },
            { offset: 1, color: '#72b85c' },
          ]),
        },
      },
    },
  ],
};

// 设置配置项并渲染
myChart.setOption(option);

// 响应窗口大小变化
window.addEventListener('resize', () => {
  myChart.resize();
});
