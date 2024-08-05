// 配置
window.Config = {

  // 显示标题
  SiteName: '站点状态监测',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only
  ApiKeys: [
    'u2638486-4ee1ab2018d420fd77cd9876',
  ],

    // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 是否显示检测站点的链接
  ShowLink: true,

  // 导航栏菜单
  Navi: [
    {
      text: 'Luatoolx',
      url: 'https://faka.leee.xin'
    },
    {
      text: '论坛1',
      url: 'https://x.leee.xin'
    },
    {
      text: '论坛2',
      url: 'https://bbs.leee.xin'
    },
  ],
};
