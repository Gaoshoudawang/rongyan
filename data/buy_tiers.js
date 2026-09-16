// 购买抽奖币档位配置（和概率表统一结构）
// 消除硬编码，所有购买档位配置集中在这里
var BUY_TIERS = [
  {
    tier: 0,
    reward: '火山币×1',
    reward_count: 1,
    price: 6,
    bg_image: 'images/common/pages/buy/shop_bg_0.png'
  },
  {
    tier: 1,
    reward: '火山币×10',
    reward_count: 10,
    price: 50,
    bg_image: 'images/common/pages/buy/shop_bg_1.png'
  },
  {
    tier: 2,
    reward: '火山币×66',
    reward_count: 66,
    price: 328,
    bg_image: 'images/common/pages/buy/shop_bg_2.png'
  },
  {
    tier: 3,
    reward: '火山币×135',
    reward_count: 135,
    price: 648,
    bg_image: 'images/common/pages/buy/shop_bg_3.png'
  }
];
