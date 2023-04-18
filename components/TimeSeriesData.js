const data = {
  daily: [
    {
    name: 'Page A',
    news1: 40,
    news2: 24,
    news3: 24,
  },
  {
    name: 'Page B',
    news1: 30,
    news2: 13,
    news3: 22,
  },
  {
    name: 'Page C',
    news1: 20,
    news2: 98,
    news3: 22,
  },
  {
    name: 'Page D',
    news1: 27,
    news2: 39,
    news3: 20,
  },
  {
    name: 'Page E',
    news1: 18,
    news2: 48,
    news3: 21,
  },
  {
    name: 'Page F',
    news1: 8,
    news2: 38,
    news3: 25,
  },
  {
    name: 'Page G',
    news1: 3,
    news2: 43,
    news3: 21,
  },
  ],
  monthly: [
    {
    name: 'Page A',
    news1: 404,
    news2: 247,
    news3: 243,
  },
  {
    name: 'Page B',
    news1: 304,
    news2: 135,
    news3: 229,
  },
  {
    name: 'Page C',
    news1: 208,
    news2: 980,
    news3: 224,
  },
  {
    name: 'Page D',
    news1: 275,
    news2: 396,
    news3: 207,
  },
  {
    name: 'Page E',
    news1: 183,
    news2: 482,
    news3: 217,
  },
  {
    name: 'Page F',
    news1: 82,
    news2: 383,
    news3: 257,
  },
  {
    name: 'Page G',
    news1: 33,
    news2: 436,
    news3: 218,
  },
  ],
  text:
      {
          news1: [
              {text:"今日は駅員がやけにていねいだな。少し騒ぐとてきめんに効果が出てくる",username: "くたりーまん", userid: "@fatigue_salaryman", "icon":"Dash", favo: Math.floor(Math.random() * 10),
                retweet: Math.floor(Math.random() * 100), like: Math.floor(Math.random() * 10), date: Math.floor(Math.random() * 10 + 1)},
              {text:"台の上に登って釈明しろ　俺の1日分の給料は3000円だぞ、補償をしろ",username: "くたりーまん", userid: "@fatigue_salaryman", "icon":"Dash", favo: Math.floor(Math.random() * 10),
                retweet: Math.floor(Math.random() * 100), like: Math.floor(Math.random() * 10), date: Math.floor(Math.random() * 20 + 1)},
              {text:"あいうえお",username: "くたりーまん", userid: "@fatigue_salaryman", "icon":"Dash", favo: Math.floor(Math.random() * 10),
                retweet: Math.floor(Math.random() * 100), like: Math.floor(Math.random() * 10), date: Math.floor(Math.random() * 30 + 1)},
              {text:"責任者は誰だ、出てこい",username: "くたりーまん", userid: "@fatigue_salaryman", "icon":"Dash", favo: Math.floor(Math.random() * 10),
                retweet: Math.floor(Math.random() * 100), like: Math.floor(Math.random() * 10), date: Math.floor(Math.random() * 40 + 1)}
          ],
          news2: [
              {text:"さらに闘いを強化　5日まで全面スト",username: "労働者よ団結せよ", userid: "@assembled_labor", "icon":"Anger", favo: Math.floor(Math.random() * 10),
                retweet: Math.floor(Math.random() * 100), like: Math.floor(Math.random() * 10), date: Math.floor(Math.random() * 10 + 1)},
              {text:"スト権奪還闘争・最高裁判決　言外にスト権を容認",username: "労働者よ団結せよ", userid: "@assembled_labor", "icon":"Anger", favo: Math.floor(Math.random() * 10),
                retweet: Math.floor(Math.random() * 100), like: Math.floor(Math.random() * 10), date: Math.floor(Math.random() * 20 + 1)},
              {text:"総理は決断せよ　全国的なストに突入",username: "労働者よ団結せよ", userid: "@assembled_labor", "icon":"Anger", favo: Math.floor(Math.random() * 10),
                retweet: Math.floor(Math.random() * 100), like: Math.floor(Math.random() * 10), date: Math.floor(Math.random() * 30 + 1)},
              {text:"方針通りスト決行　全面保障を明示せよ",username: "労働者よ団結せよ", userid: "@assembled_labor", "icon":"Anger", favo: Math.floor(Math.random() * 10),
                retweet: Math.floor(Math.random() * 100), like: Math.floor(Math.random() * 10), date: Math.floor(Math.random() * 40 + 1)}
          ],
          news3: [
              {text:"乗客の怒り「順法」つぶす　26駅で破壊・占拠　首都圏は全面マヒ",username: "走狗の監視者", userid: "@cooked_watchdog", "icon":"NewsPaper", favo: Math.floor(Math.random() * 10),
                retweet: Math.floor(Math.random() * 100), like: Math.floor(Math.random() * 10), date: Math.floor(Math.random() * 10 + 1)},
              {text:"「順法」に乗客の怒り爆発　ガラス割り投石　積残された六千人　運転士逃げ、駅長入院",username: "走狗の監視者", userid: "@cooked_watchdog", "icon":"NewsPaper", favo: Math.floor(Math.random() * 10),
                retweet: Math.floor(Math.random() * 100), like: Math.floor(Math.random() * 10), date: Math.floor(Math.random() * 20 + 1)},
              {text:"積もる不満　一気に火の手　乗客パワー爆発　壊し、燃やし、奪う　上野・新宿駅など「廃墟」",username: "走狗の監視者", userid: "@cooked_watchdog", "icon":"NewsPaper", favo: Math.floor(Math.random() * 10),
                retweet: Math.floor(Math.random() * 100), like: Math.floor(Math.random() * 10), date: Math.floor(Math.random() * 30 + 1)},
              {text:"電車が走れば騒がない　超満員には慣れっこ",username: "走狗の監視者", userid: "@cooked_watchdog", "icon":"NewsPaper", favo: Math.floor(Math.random() * 10),
                retweet: Math.floor(Math.random() * 100), like: Math.floor(Math.random() * 10), date: Math.floor(Math.random() * 40 + 1)},

          ],
      },
};

export default data;