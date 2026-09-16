// ========== 熔岩夺宝 - 7个奖池配置 ==========

// 奖池列表
window.POOL_LIST = [
  { id: 'm4',    name: 'M4A1-雷霆王者',    type: 'A', weapon: 'M4A1-雷霆王者' },
  { id: 'ak',    name: 'AK47-雷霆王者',    type: 'A', weapon: 'AK47-雷霆王者' },
  { id: 'barrett', name: '巴雷特-雷霆王者', type: 'A', weapon: '巴雷特-雷霆王者' },
  { id: 'm12s',  name: 'M12S-雷霆王者',    type: 'A', weapon: 'M12S-雷霆王者' },
  { id: 'ting',  name: '王者之霆',          type: 'A', weapon: '王者之霆' },
  { id: 'cop',   name: 'COP357-雷霆王者',  type: 'B', weapon: 'COP357-雷霆王者' },
  { id: 'feng',  name: '雷霆王者之锋',      type: 'B', weapon: '雷霆王者之锋' },
];

// 当前选中的奖池
window.CURRENT_POOL = 'm4';

// 生成A类奖池的概率表
function generatePoolA(weaponName) {
  return [
    // 金色品质（11个，27.9%）
    {name: weaponName + '-燃竞之巅', quality: 'gold', image: '../images/items_box/' + weaponName + '-燃竞之巅/showcase.png', weight: 0.15},
    {name: weaponName + '-熔岩之触', quality: 'gold', image: '../images/items_box/熔岩之触/small.png', weight: 1.00},
    {name: weaponName + '-熔岩之殇', quality: 'gold', image: '../images/items_box/熔岩之殇/small.png', weight: 1.00},
    {name: weaponName + '-熔岩之印', quality: 'gold', image: '../images/items_box/熔岩之印/small.png', weight: 1.00},
    {name: weaponName + '-熔岩光效', quality: 'gold', image: '../images/items_box/熔岩光效/small.png', weight: 1.30},
    {name: '喷火龙玩偶', quality: 'gold', image: '../images/items_box/喷火龙玩偶/small.png', weight: 0.30},
    {name: '熔岩背包', quality: 'gold', image: '../images/items_box/熔岩背包/small.png', weight: 0.30},
    {name: '熔岩火龙挂饰', quality: 'gold', image: '../images/items_box/熔岩火龙挂饰/small.png', weight: 3.425},
    {name: '燃尽挂饰', quality: 'gold', image: '../images/items_box/燃尽挂饰/small.png', weight: 3.425},
    {name: '熔岩火龙喷漆', quality: 'gold', image: '../images/items_box/熔岩火龙喷漆/small.png', weight: 8.00},
    {name: '印花_熔岩火山', quality: 'gold', image: '../images/items_box/印花_熔岩火山/small.png', weight: 8.00},

    // 紫色品质 - 熔岩兑换币（4个，72.1%）
    {name: '熔岩兑换币×3', quality: 'purple', image: '../images/items_box/熔岩兑换币/small.png', weight: 44.702},
    {name: '熔岩兑换币×5', quality: 'purple', image: '../images/items_box/熔岩兑换币/small.png', weight: 20.188},
    {name: '熔岩兑换币×8', quality: 'purple', image: '../images/items_box/熔岩兑换币/small.png', weight: 6.489},
    {name: '熔岩兑换币×18', quality: 'purple', image: '../images/items_box/熔岩兑换币/small.png', weight: 0.721},
  ];
}

// 生成B类奖池的概率表
function generatePoolB(weaponName) {
  return [
    // 金色品质（7个，27.9%）
    {name: weaponName + '-燃竞之巅', quality: 'gold', image: '../images/items_box/' + weaponName + '-燃竞之巅/showcase.png', weight: 0.15},
    {name: '喷火龙玩偶', quality: 'gold', image: '../images/items_box/喷火龙玩偶/small.png', weight: 0.30},
    {name: '熔岩背包', quality: 'gold', image: '../images/items_box/熔岩背包/small.png', weight: 0.30},
    {name: '熔岩火龙挂饰', quality: 'gold', image: '../images/items_box/熔岩火龙挂饰/small.png', weight: 3.575},
    {name: '燃尽挂饰', quality: 'gold', image: '../images/items_box/燃尽挂饰/small.png', weight: 3.575},
    {name: '熔岩火龙喷漆', quality: 'gold', image: '../images/items_box/熔岩火龙喷漆/small.png', weight: 10.00},
    {name: '印花_熔岩火山', quality: 'gold', image: '../images/items_box/印花_熔岩火山/small.png', weight: 10.00},

    // 紫色品质 - 熔岩兑换币（4个，72.1%）
    {name: '熔岩兑换币×3', quality: 'purple', image: '../images/items_box/熔岩兑换币/small.png', weight: 44.702},
    {name: '熔岩兑换币×5', quality: 'purple', image: '../images/items_box/熔岩兑换币/small.png', weight: 20.188},
    {name: '熔岩兑换币×8', quality: 'purple', image: '../images/items_box/熔岩兑换币/small.png', weight: 6.489},
    {name: '熔岩兑换币×18', quality: 'purple', image: '../images/items_box/熔岩兑换币/small.png', weight: 0.721},
  ];
}

// 构建所有奖池的概率表
window.GACHA_POOLS = {};
window.POOL_LIST.forEach(function(pool) {
  if (pool.type === 'A') {
    window.GACHA_POOLS[pool.id] = generatePoolA(pool.weapon);
  } else {
    window.GACHA_POOLS[pool.id] = generatePoolB(pool.weapon);
  }
});

// 兼容旧代码：当前奖池的概率表
window.GACHA_BASE_POOL = window.GACHA_POOLS[window.CURRENT_POOL];

// 切换奖池
window.switchPool = function(poolId) {
  if (window.GACHA_POOLS[poolId]) {
    window.CURRENT_POOL = poolId;
    window.GACHA_BASE_POOL = window.GACHA_POOLS[poolId];
    return true;
  }
  return false;
};

// 获取当前奖池信息
window.getCurrentPool = function() {
  return window.POOL_LIST.find(function(p) { return p.id === window.CURRENT_POOL; });
};
