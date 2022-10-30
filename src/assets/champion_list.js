const champion_list = [
  {
    name: "Aatrox",
    name_chinese: "厄薩斯",
    date: "2013/06/13",
  },
  {
    name: "Ahri",
    name_chinese: "阿璃",
    date: "2011/12/14",
  },
  {
    name: "Akali",
    name_chinese: "阿卡莉",
    date: "2010/05/11",
  },
  {
    name: "Akshan",
    name_chinese: "埃可尚",
    date: "2021/07/22",
  },
  {
    name: "Alistar",
    name_chinese: "亞歷斯塔",
    date: "2009/02/21",
  },
  {
    name: "Amumu",
    name_chinese: "阿姆姆",
    date: "2009/06/26",
  },
  {
    name: "Anivia",
    name_chinese: "艾妮維亞",
    date: "2009/07/10",
  },
  {
    name: "Annie",
    name_chinese: "安妮",
    date: "2009/02/21",
  },
  {
    name: "Aphelios",
    name_chinese: "亞菲利歐",
    date: "2019/12/11",
  },
  {
    name: "Ashe",
    name_chinese: "艾希",
    date: "2009/02/21",
  },
  {
    name: "Aurelion Sol",
    name_chinese: "翱銳龍獸",
    date: "2016/03/24",
  },
  {
    name: "Azir",
    name_chinese: "阿祈爾",
    date: "2014/09/16",
  },
  {
    name: "Bard",
    name_chinese: "巴德",
    date: "2015/03/11",
  },
  {
    name: "Bel'Veth",
    name_chinese: "貝爾微斯",
    date: "2022/06/09",
  },
  {
    name: "Blitzcrank",
    name_chinese: "布里茨",
    date: "2009/09/02",
  },
  {
    name: "Brand",
    name_chinese: "布蘭德",
    date: "2011/04/12",
  },
  {
    name: "Braum",
    name_chinese: "布朗姆",
    date: "2014/05/12",
  },
  {
    name: "Caitlyn",
    name_chinese: "凱特琳",
    date: "2011/01/04",
  },
  {
    name: "Camille",
    name_chinese: "卡蜜兒",
    date: "2016/12/07",
  },
  {
    name: "Cassiopeia",
    name_chinese: "卡莎碧雅",
    date: "2010/12/14",
  },
  {
    name: "Cho'Gath",
    name_chinese: "科加斯",
    date: "2009/06/26",
  },
  {
    name: "Corki",
    name_chinese: "庫奇",
    date: "2009/09/19",
  },
  {
    name: "Darius",
    name_chinese: "達瑞斯",
    date: "2012/05/23",
  },
  {
    name: "Diana",
    name_chinese: "黛安娜",
    date: "2012/08/07",
  },
  {
    name: "Dr. Mundo",
    name_chinese: "蒙多醫生",
    date: "2009/09/02",
  },
  {
    name: "Draven",
    name_chinese: "達瑞文",
    date: "2012/06/06",
  },
  {
    name: "Ekko",
    name_chinese: "艾克",
    date: "2015/05/28",
  },
  {
    name: "Elise",
    name_chinese: "伊莉絲",
    date: "2012/10/26",
  },
  {
    name: "Evelynn",
    name_chinese: "伊芙琳",
    date: "2009/05/01",
  },
  {
    name: "Ezreal",
    name_chinese: "伊澤瑞爾",
    date: "2010/03/16",
  },
  {
    name: "Fiddlesticks",
    name_chinese: "費德提克",
    date: "2009/02/21",
  },
  {
    name: "Fiora",
    name_chinese: "菲歐拉",
    date: "2012/02/29",
  },
  {
    name: "Fizz",
    name_chinese: "飛斯",
    date: "2011/11/15",
  },
  {
    name: "Galio",
    name_chinese: "加里歐",
    date: "2010/08/10",
  },
  {
    name: "Gangplank",
    name_chinese: "剛普朗克",
    date: "2009/08/19",
  },
  {
    name: "Garen",
    name_chinese: "蓋倫",
    date: "2010/04/27",
  },
  {
    name: "Gnar",
    name_chinese: "吶兒",
    date: "2014/08/12",
  },
  {
    name: "Gragas",
    name_chinese: "古拉格斯",
    date: "2010/02/02",
  },
  {
    name: "Graves",
    name_chinese: "葛雷夫",
    date: "2011/10/19",
  },
  {
    name: "Gwen",
    name_chinese: "關",
    date: "2021/04/15",
  },
  {
    name: "Hecarim",
    name_chinese: "赫克林",
    date: "2012/04/18",
  },
  {
    name: "Heimerdinger",
    name_chinese: "漢默丁格",
    date: "2009/10/10",
  },
  {
    name: "Illaoi",
    name_chinese: "伊羅旖",
    date: "2015/11/24",
  },
  {
    name: "Irelia",
    name_chinese: "伊瑞莉雅",
    date: "2010/11/16",
  },
  {
    name: "Ivern",
    name_chinese: "埃爾文",
    date: "2016/10/05",
  },
  {
    name: "Janna",
    name_chinese: "珍娜",
    date: "2009/09/02",
  },
  {
    name: "Jarvan IV",
    name_chinese: "嘉文四世",
    date: "2011/03/01",
  },
  {
    name: "Jax",
    name_chinese: "賈克斯",
    date: "2009/02/21",
  },
  {
    name: "Jayce",
    name_chinese: "杰西",
    date: "2012/07/07",
  },
  {
    name: "Jhin",
    name_chinese: "燼",
    date: "2016/02/01",
  },
  {
    name: "Jinx",
    name_chinese: "吉茵珂絲",
    date: "2013/10/10",
  },
  {
    name: "Kai'Sa",
    name_chinese: "凱莎",
    date: "2018/03/07",
  },
  {
    name: "Kalista",
    name_chinese: "克黎思妲",
    date: "2014/11/19",
  },
  {
    name: "Karma",
    name_chinese: "卡瑪",
    date: "2011/02/01",
  },
  {
    name: "Karthus",
    name_chinese: "卡爾瑟斯",
    date: "2009/06/12",
  },
  {
    name: "Kassadin",
    name_chinese: "卡薩丁",
    date: "2009/08/07",
  },
  {
    name: "Katarina",
    name_chinese: "卡特蓮娜",
    date: "2009/09/19",
  },
  {
    name: "Kayle",
    name_chinese: "凱爾",
    date: "2009/02/21",
  },
  {
    name: "Kayn",
    name_chinese: "慨影",
    date: "2017/07/12",
  },
  {
    name: "Kennen",
    name_chinese: "凱能",
    date: "2010/04/08",
  },
  {
    name: "Kha'Zix",
    name_chinese: "卡力斯",
    date: "2012/09/27",
  },
  {
    name: "Kindred",
    name_chinese: "鏡爪",
    date: "2015/10/20",
  },
  {
    name: "Kled",
    name_chinese: "克雷德",
    date: "2016/08/11",
  },
  {
    name: "Kog'Maw",
    name_chinese: "寇格魔",
    date: "2010/06/24",
  },
  {
    name: "LeBlanc",
    name_chinese: "勒布朗",
    date: "2010/11/02",
  },
  {
    name: "Lee Sin",
    name_chinese: "李星",
    date: "2011/04/01",
  },
  {
    name: "Leona",
    name_chinese: "雷歐娜",
    date: "2011/07/13",
  },
  {
    name: "Lillia",
    name_chinese: "莉莉亞",
    date: "2020/07/22",
  },
  {
    name: "Lissandra",
    name_chinese: "麗珊卓",
    date: "2013/04/30",
  },
  {
    name: "Lucian",
    name_chinese: "路西恩",
    date: "2013/08/22",
  },
  {
    name: "Lulu",
    name_chinese: "露璐",
    date: "2012/03/20",
  },
  {
    name: "Lux",
    name_chinese: "拉克絲",
    date: "2010/10/19",
  },
  {
    name: "Malphite",
    name_chinese: "墨菲特",
    date: "2009/09/02",
  },
  {
    name: "Malzahar",
    name_chinese: "馬爾札哈",
    date: "2010/06/01",
  },
  {
    name: "Maokai",
    name_chinese: "茂凱",
    date: "2011/02/16",
  },
  {
    name: "Master Yi",
    name_chinese: "易大師",
    date: "2009/02/21",
  },
  {
    name: "Miss Fortune",
    name_chinese: "好運姐",
    date: "2010/09/08",
  },
  {
    name: "Mordekaiser",
    name_chinese: "魔鬥凱薩",
    date: "2010/02/24",
  },
  {
    name: "Morgana",
    name_chinese: "魔甘娜",
    date: "2009/02/21",
  },
  {
    name: "Nami",
    name_chinese: "娜米",
    date: "2012/12/07",
  },
  {
    name: "Nasus",
    name_chinese: "納瑟斯",
    date: "2009/10/01",
  },
  {
    name: "Nautilus",
    name_chinese: "納帝魯斯",
    date: "2012/02/14",
  },
  {
    name: "Neeko",
    name_chinese: "妮可",
    date: "2018/12/05",
  },
  {
    name: "Nidalee",
    name_chinese: "奈德麗",
    date: "2009/12/17",
  },
  {
    name: "Nilah",
    name_chinese: "淣菈",
    date: "2022/07/13",
  },
  {
    name: "Nocturne",
    name_chinese: "夜曲",
    date: "2011/03/15",
  },
  {
    name: "Nunu & Willump",
    name_chinese: "努努和威朗普",
    date: "2009/02/21",
  },
  {
    name: "Olaf",
    name_chinese: "歐拉夫",
    date: "2010/06/09",
  },
  {
    name: "Orianna",
    name_chinese: "奧莉安娜",
    date: "2011/06/01",
  },
  {
    name: "Ornn",
    name_chinese: "鄂爾",
    date: "2017/08/23",
  },
  {
    name: "Pantheon",
    name_chinese: "潘森",
    date: "2010/02/02",
  },
  {
    name: "Poppy",
    name_chinese: "波比",
    date: "2010/01/13",
  },
  {
    name: "Pyke",
    name_chinese: "派克",
    date: "2018/05/31",
  },
  {
    name: "Qiyana",
    name_chinese: "姬亞娜",
    date: "2019/06/28",
  },
  {
    name: "Quinn",
    name_chinese: "葵恩",
    date: "2013/03/01",
  },
  {
    name: "Rakan",
    name_chinese: "銳空",
    date: "2017/04/19",
  },
  {
    name: "Rammus",
    name_chinese: "拉姆斯",
    date: "2009/07/10",
  },
  {
    name: "Rek'Sai",
    name_chinese: "雷珂煞",
    date: "2014/12/11",
  },
  {
    name: "Rell",
    name_chinese: "銳兒",
    date: "2020/12/10",
  },
  {
    name: "Renata Glasc",
    name_chinese: "睿娜妲．格萊斯克",
    date: "2022/02/17",
  },
  {
    name: "Renekton",
    name_chinese: "雷尼克頓",
    date: "2011/01/17",
  },
  {
    name: "Rengar",
    name_chinese: "雷葛爾",
    date: "2012/08/20",
  },
  {
    name: "Riven",
    name_chinese: "雷玟",
    date: "2011/09/14",
  },
  {
    name: "Rumble",
    name_chinese: "藍寶",
    date: "2011/04/26",
  },
  {
    name: "Ryze",
    name_chinese: "雷茲",
    date: "2009/02/21",
  },
  {
    name: "Samira",
    name_chinese: "煞蜜拉",
    date: "2020/09/21",
  },
  {
    name: "Sejuani",
    name_chinese: "史瓦妮",
    date: "2012/01/17",
  },
  {
    name: "Senna",
    name_chinese: "姍娜",
    date: "2019/11/10",
  },
  {
    name: "Seraphine",
    name_chinese: "瑟菈紛",
    date: "2020/10/29",
  },
  {
    name: "Sett",
    name_chinese: "賽特",
    date: "2020/01/14",
  },
  {
    name: "Shaco",
    name_chinese: "薩科",
    date: "2009/10/10",
  },
  {
    name: "Shen",
    name_chinese: "慎",
    date: "2010/03/24",
  },
  {
    name: "Shyvana",
    name_chinese: "希瓦娜",
    date: "2011/11/01",
  },
  {
    name: "Singed",
    name_chinese: "辛吉德",
    date: "2009/04/18",
  },
  {
    name: "Sion",
    name_chinese: "賽恩",
    date: "2009/02/21",
  },
  {
    name: "Sivir",
    name_chinese: "希維爾",
    date: "2009/02/21",
  },
  {
    name: "Skarner",
    name_chinese: "史加納",
    date: "2011/08/09",
  },
  {
    name: "Sona",
    name_chinese: "索娜",
    date: "2010/09/20",
  },
  {
    name: "Soraka",
    name_chinese: "索拉卡",
    date: "2009/02/21",
  },
  {
    name: "Swain",
    name_chinese: "斯溫",
    date: "2010/10/05",
  },
  {
    name: "Sylas",
    name_chinese: "賽勒斯",
    date: "2019/01/25",
  },
  {
    name: "Syndra",
    name_chinese: "星朵拉",
    date: "2012/09/13",
  },
  {
    name: "Tahm Kench",
    name_chinese: "貪啃奇",
    date: "2015/07/11",
  },
  {
    name: "Taliyah",
    name_chinese: "塔莉雅",
    date: "2016/05/18",
  },
  {
    name: "Talon",
    name_chinese: "塔隆",
    date: "2011/08/24",
  },
  {
    name: "Taric",
    name_chinese: "塔里克",
    date: "2009/08/19",
  },
  {
    name: "Teemo",
    name_chinese: "提摩",
    date: "2009/02/21",
  },
  {
    name: "Thresh",
    name_chinese: "瑟雷西",
    date: "2013/01/23",
  },
  {
    name: "Tristana",
    name_chinese: "崔絲塔娜",
    date: "2009/02/21",
  },
  {
    name: "Trundle",
    name_chinese: "特朗德",
    date: "2010/12/01",
  },
  {
    name: "Tryndamere",
    name_chinese: "泰達米爾",
    date: "2009/05/01",
  },
  {
    name: "Twisted Fate",
    name_chinese: "逆命",
    date: "2009/02/21",
  },
  {
    name: "Twitch",
    name_chinese: "圖奇",
    date: "2009/05/01",
  },
  {
    name: "Udyr",
    name_chinese: "烏迪爾",
    date: "2009/12/02",
  },
  {
    name: "Urgot",
    name_chinese: "烏爾加特",
    date: "2010/08/24",
  },
  {
    name: "Varus",
    name_chinese: "法洛士",
    date: "2012/05/08",
  },
  {
    name: "Vayne",
    name_chinese: "汎",
    date: "2011/05/10",
  },
  {
    name: "Veigar",
    name_chinese: "維迦",
    date: "2009/07/24",
  },
  {
    name: "Vel'Koz",
    name_chinese: "威寇茲",
    date: "2014/02/24",
  },
  {
    name: "Vex",
    name_chinese: "薇可絲",
    date: "2021/09/23",
  },
  {
    name: "Vi",
    name_chinese: "菲艾",
    date: "2012/12/19",
  },
  {
    name: "Viego",
    name_chinese: "維爾戈",
    date: "2021/01/22",
  },
  {
    name: "Viktor",
    name_chinese: "維克特",
    date: "2011/12/29",
  },
  {
    name: "Vladimir",
    name_chinese: "弗拉迪米爾",
    date: "2010/07/27",
  },
  {
    name: "Volibear",
    name_chinese: "弗力貝爾",
    date: "2011/11/29",
  },
  {
    name: "Warwick",
    name_chinese: "沃維克",
    date: "2009/02/21",
  },
  {
    name: "Wukong",
    name_chinese: "悟空",
    date: "2011/07/26",
  },
  {
    name: "Xayah",
    name_chinese: "剎雅",
    date: "2017/04/19",
  },
  {
    name: "Xerath",
    name_chinese: "齊勒斯",
    date: "2011/10/05",
  },
  {
    name: "Xin Zhao",
    name_chinese: "趙信",
    date: "2010/07/13",
  },
  {
    name: "Yasuo",
    name_chinese: "犽宿",
    date: "2013/12/13",
  },
  {
    name: "Yone",
    name_chinese: "犽凝",
    date: "2020/08/06",
  },
  {
    name: "Yorick",
    name_chinese: "約瑞科",
    date: "2011/06/22",
  },
  {
    name: "Yuumi",
    name_chinese: "悠咪",
    date: "2019/05/14",
  },
  {
    name: "Zac",
    name_chinese: "札克",
    date: "2013/03/29",
  },
  {
    name: "Zed",
    name_chinese: "劫",
    date: "2012/11/13",
  },
  {
    name: "Zeri",
    name_chinese: "婕莉",
    date: "2022/01/20",
  },
  {
    name: "Ziggs",
    name_chinese: "希格斯",
    date: "2012/02/01",
  },
  {
    name: "Zilean",
    name_chinese: "極靈",
    date: "2009/04/18",
  },
  {
    name: "Zoe",
    name_chinese: "柔依",
    date: "2017/11/21",
  },
  {
    name: "Zyra",
    name_chinese: "枷蘿",
    date: "2012/07/24",
  },
];

export { champion_list };
