/**
 * 肖氏集团 — 运动鞋每月销售数据
 * 单位：百万元（RMB）
 * 时间段：2025年1月 ~ 2025年12月
 */

const xiaoSalesData = {
  // 品牌/公司
  company: '肖氏集团',
  // 品类
  category: '运动鞋',
  // 单位
  unit: '百万元',
  // 年份
  year: 2025,
  // 12 个月销售数据（百万元）
  monthly: [
    { month: '1月',  sales: 8.2 },
    { month: '2月',  sales: 6.5 },   // 春节淡季
    { month: '3月',  sales: 11.8 },  // 春季回暖
    { month: '4月',  sales: 14.3 },  // 春季旺季
    { month: '5月',  sales: 15.1 },  // 五一促销
    { month: '6月',  sales: 13.6 },  // 618 大促
    { month: '7月',  sales: 12.4 },  // 夏季趋稳
    { month: '8月',  sales: 10.9 },  // 暑期尾声
    { month: '9月',  sales: 16.2 },  // 秋季开学季
    { month: '10月', sales: 17.5 },  // 国庆黄金周
    { month: '11月', sales: 19.8 },  // 双十一大促
    { month: '12月', sales: 21.3 },  // 年末冲刺
  ],
  // 汇总
  get total() {
    return this.monthly.reduce((sum, item) => sum + item.sales, 0);
  },
  // 月份标签
  get months() {
    return this.monthly.map((item) => item.month);
  },
  // 销售额数组
  get sales() {
    return this.monthly.map((item) => item.sales);
  },
};

export default xiaoSalesData;
