// index.js
Page({
  data: {
    picFilePath:'', //本地图片链接
    // 分类
    items: [
      {value: 'advanced_general', name: '通用',checked: 'true',iconName: 'hongmoshibie',textColor:'green',image_url:['../../picture/lanbo.jpg','../../picture/mian.jpg','../../picture/caomei.jpg'],
      index_content:['在意大利乃至全世界，兰博基尼是诡异的，它神秘地诞生，出人意料地推出一款又一款的让人咋舌的超级跑车。兰博基尼最能代表罗马2700年的历史，七丘之城罗马建城于不易防守之地，扩张与攻击在最初的一刻就凝聚于血脉之中。它是举世难得的艺术品,意大利最具声望的设计大师甘迪尼为其倾注一生的心血。每一个棱角、每一道线条都是如此完美，都在默默诠释兰博基尼近乎原始的美。如此一个特立独行的跑车品牌是数十年来世界车坛追逐与猎奇的焦点。',
      '棉花，是锦葵科（Malvaceae）棉属（Gossypium）植物的种籽纤维，原产于亚热带。植株灌木状，在热带地区栽培可长到6米高，一般为1到2米。花朵乳白色，开花后不久转成深红色然后凋谢，留下绿色小型的蒴果，称为棉铃。棉铃内有棉籽，棉籽上的茸毛从棉籽表皮长出，塞满棉铃内部，棉铃成熟时裂开，露出柔软的纤维。纤维白色或白中带黄，长约2至4厘米（0.75~1.5寸），含纤维素约87～90%，水5~8%，其他物质4~6%。棉花产量最高的国家有中国、美国、印度等。','草莓（英文学名：strawberry），多年生草本植物。高10-40厘米，茎低于叶或近相等，密被开展黄色柔毛。叶三出，小叶具短柄，质地较厚，倒卵形或菱形，上面深绿色，几无毛，下面淡白绿色，疏生毛，沿脉较密；叶柄密被开展黄色柔毛。聚伞花序，花序下面具一短柄的小叶；聚合果大，宿存萼片直立，紧贴于果实；瘦果尖卵形，光滑。花期4-5月，果期6-7月。原产南美，中国各地及欧洲等地广为栽培。草莓营养价值高，含有多种营养物质 ，且有保健功效。'],index_title:['兰博基尼','棉花','草莓']},
      {value: 'plant', name: '植物',iconName: 'hua1',textColor:'',image_url:['../../picture/f1.jpg','../../picture/f2.jpg','../../picture/f3.jpg'],
      index_content:['非洲菊（学名：Gerbera jamesonii Bolus）是菊科，大丁草属多年生、被毛草本植物。根状茎短，为残存的叶柄所围裹，具较粗的须根；叶基生，莲座状，叶片长椭圆形至长圆形，顶端短尖或略钝，叶柄具粗纵棱，多少被毛；花葶单生，或稀有数个丛生，无苞叶；毛于顶部最稠密，头状花序单生于花葶之顶；总苞钟形，花托扁平，裸露，蜂窝状；花冠管短，花药具长尖的尾部；瘦果圆柱形，密被白色短柔毛；冠毛略粗糙，鲜时污白色，干时带浅褐色，基部联合。花期11月至翌年4月。',
      '天竺葵（学名：Pelargonium hortorum ），别名洋绣球、石腊红、入腊红、日烂红、洋葵，属牻牛儿苗科，包括约230种多年生肉质、亚灌木或灌木植物。天竺葵原产非洲南部，世界各地普遍栽培。天竺葵幼株为肉质草本，老株半木质化；在西方是很好的装饰窗台的花卉，在欧洲大陆，如德奥等国，尤为常见。天竺葵生长期需要充足的阳光，因此冬季必须把它放在向阳处。光照不足，茎叶徒长，花梗细软，花序发育不良；弱光下的花蕾往往花开不畅，提前枯萎。天竺葵不喜大肥，肥料过多会使天竺葵生长过旺不利开花。',
      '玫瑰（学名：Rosa rugosa Thunb.）：原产地中国。属蔷薇目，蔷薇科落叶灌木，枝杆多针刺，奇数羽状复叶，小叶5-9片，椭圆形，有边刺。花瓣倒卵形，重瓣至半重瓣，花有紫红色、白色，果期8-9月，扁球形。枝条较为柔弱软垂且多密刺，每年花期只有一次，因此较少用于育种，近来其主要被重视的特性为抗病性与耐寒性。玫瑰作为经济作物时，其花朵主要用于食品及提炼香精玫瑰油，玫瑰油应用于化妆品、食品、精细化工等工业。'],index_title:['非洲菊','天竺葵','玫瑰']},
      {value: 'animal', name: '动物',iconName: 'dongwutubiao_gou',textColor:'',image_url:['../../picture/a1.jpg','../../picture/a2.jpg','../../picture/a3.jpg'],
      index_content:['秋田犬（日语：あきたいぬ/アキタイヌ）是日本国犬，在日本是家庭宠物犬。秋田犬是日本最大的狐狸犬种，这一大型狐狸犬就算在欧洲和美国这种狐狸犬种众多的国家也颇为引人瞩目。在日本，秋田犬是具有国家历史文物意义的犬，属国犬，因“忠犬八公”闻名于世，是日本指定的国家天然纪念物中唯一的大型犬。该犬十分勇猛、感觉锐敏、忠诚且聪明，有关其忠诚的故事很多。秋田犬是能干的工作犬和看家犬，最拿手的本领是帮猎人在雪地或水中寻找被击中的猎物，寻回后交给主人。',
      '英国短毛猫，体形圆胖，四肢粗短发达，毛短而密，头大脸圆，温柔平静，对人友善，极易饲养。大而圆的眼睛根据被毛不同而呈现各种颜色。作为一个古老的猫品种，其历史可追溯至古罗马时期的家猫，由于拥有悠久的育种历史，可以称得上是猫家族中的典范。英国短毛猫除了拥有固定而聚，代表性的遗传特征之外，又具有丰富的变异性，如背毛色眼睛颜色等。更重要的是，有了广泛的配种历史后，这种猫拥有了更健康的身体和更温驯的性格。',
      '大熊猫（学名：Ailuropoda melanoleuca）：属于食肉目、熊科、大熊猫亚科和大熊猫属唯一的哺乳动物。仅有二个亚种。雄性个体稍大于雌性。体型肥硕似熊、丰腴富态，头圆尾短，头躯长1.2-1.8米，尾长10-12厘米。体重80-120千克，最重可达180千克，体色为黑白两色，脸颊圆，有大的黑眼圈，标志性的内八字的行走方式，也有解剖刀般锋利的爪子。大熊猫皮肤厚，最厚处可达10毫米。黑白相间的外表，有利于隐蔽在密林的树上和积雪的地面而不易被天敌发现。'],index_title:['秋田犬','英国短毛猫','熊猫']},
      {value: 'red_wine', name: '酒类',iconName: 'wine',textColor:'',image_url:['../../picture/redwine.jpg','../../picture/w2.jpg','../../picture/w3.jpg'],
      index_content:['类型：干红，国家：法国，等级/Rank: AOC，年份/Vintage:2012，产地/Area:法国波尔多法定产区，葡萄品种：赤霞珠、美乐，醒酒时间：20-30分钟，适饮温度：12-18℃，酒品介绍：美丽清澈的紫红色，有黑莓等浆果气味，并有橡木芳香。入口圆润饱满，口感平衡愉悦，香气优雅纯正。',
      '马拉莎尼城堡 莎桐湾波尔多之路 干红葡萄酒产于被称为法国葡萄酒王后的波尔多，口感柔顺细雅，适合在室温下搭配烤肉/炖肉等美食享用。',
      '颜色：明亮的深红色酒体，边缘带粉红色。气味：香味新鲜活跃，有成熟的夏日浆果香和黑色香料的辛香，鲜明橡木味不太明显，果香较为突出。口感：柔滑的单宁使浆果味和酒香达到一种有趣的平衡。中度的酒体，在口中有肉质和新鲜多汁的诱惑。饮用及配餐建议：饮用前一小时开瓶，最好使用醒酒器。温度最好在18℃-22℃。适合与羊扒、意大利粉面、比萨等以及普遍中浓味中餐菜肴配食。酒精度：14%。'],index_title:['帕度波城堡波尔多干红葡萄酒','沙桐湾波尔多之路干红葡萄酒','洛神山庄设拉子干红葡萄酒']},
      {value: 'dishs', name: '菜品',iconName: 'shiwu1',textColor:'',image_url:['../../picture/youyu.jpg','../../picture/d2.jpg','../../picture/d3.jpg'],
      index_content:['爆炒鱿鱼，是用鱿鱼制作的一道家常菜。鱿鱼有少量的脂肪和碳水化合物，含有大量的胆固醇，鱿鱼中的微量元素以及钙、磷、硒、钾、钠含量都是较高的。1.鱿鱼富含钙、磷、铁元素，利于骨骼发育和造血，能有效治疗贫血；2.鱿鱼除富含蛋白质和人体所需的氨基酸外，还含有大量的牛黄酸，可抑制血液中的胆固醇含量，缓解疲劳，恢复视力，改善肝脏功能；3.鱿鱼所含多肽和硒有抗病毒、抗射线作用。',
      '红烧肉，一道著名的大众菜肴，各大菜系都有自己特色的红烧肉。其以五花肉为制作主料，最好选用肥瘦相间的三层肉（五花肉）来做，锅具以砂锅为主，做出来的肉肥瘦相间，香甜松软，营养丰富，入口即化。红烧肉在我国各地流传甚广，做法多达二三十种。猪肋条肉（五花肉）：猪肉含有丰富的优质蛋白质和必需的脂肪酸，并提供血红素（有机铁）和促进铁吸收的半胱氨酸，能改善缺铁性贫血；具有补肾养血，滋阴润燥的功效。',
      '咕噜肉(Sweet and Sour Pork)，又名古老肉，是一道广东的传统特色名菜。此菜始于清代。当时在广州市的许多外国人都非常喜欢食用中国菜，尤其喜欢吃糖醋排骨，但吃时不习惯吐骨。糖醋排骨的历史较老，现经改制后，便改称为“古老肉”。外国人发音不准，常把“古老肉”叫做“咕噜肉”，因为吃时有弹性，嚼肉时有格格声，故长期以来这两种称法并存。此菜在国内外享有较高声誉。市面上常见的是罐头菠萝搭配的咕噜肉。'],index_title:['爆炒鱿鱼','红烧肉','咕噜肉']}
    ],
    // 选中的分类
    selectItem:'advanced_general',
    // 识别结果
    result:[],
    // 识别结果条数
    resultNum: 0,
    // 左侧边栏动画效果
    isRuleTrue:false,
    useSwitch:false,
    // 底部导航点击
    moreTap:false,
    cameraTap:false,
    photoTap:false,
    // 首页图片
    image_url:['../../picture/lanbo.jpg','../../picture/mian.jpg','../../picture/caomei.jpg'],
    // 首页内容
    index_content:['在意大利乃至全世界，兰博基尼是诡异的，它神秘地诞生，出人意料地推出一款又一款的让人咋舌的超级跑车。兰博基尼最能代表罗马2700年的历史，七丘之城罗马建城于不易防守之地，扩张与攻击在最初的一刻就凝聚于血脉之中。它是举世难得的艺术品,意大利最具声望的设计大师甘迪尼为其倾注一生的心血。每一个棱角、每一道线条都是如此完美，都在默默诠释兰博基尼近乎原始的美。如此一个特立独行的跑车品牌是数十年来世界车坛追逐与猎奇的焦点。',
    '棉花，是锦葵科（Malvaceae）棉属（Gossypium）植物的种籽纤维，原产于亚热带。植株灌木状，在热带地区栽培可长到6米高，一般为1到2米。花朵乳白色，开花后不久转成深红色然后凋谢，留下绿色小型的蒴果，称为棉铃。棉铃内有棉籽，棉籽上的茸毛从棉籽表皮长出，塞满棉铃内部，棉铃成熟时裂开，露出柔软的纤维。纤维白色或白中带黄，长约2至4厘米（0.75~1.5寸），含纤维素约87～90%，水5~8%，其他物质4~6%。棉花产量最高的国家有中国、美国、印度等。',
    '草莓（英文学名：strawberry），多年生草本植物。高10-40厘米，茎低于叶或近相等，密被开展黄色柔毛。叶三出，小叶具短柄，质地较厚，倒卵形或菱形，上面深绿色，几无毛，下面淡白绿色，疏生毛，沿脉较密；叶柄密被开展黄色柔毛。聚伞花序，花序下面具一短柄的小叶；聚合果大，宿存萼片直立，紧贴于果实；瘦果尖卵形，光滑。花期4-5月，果期6-7月。原产南美，中国各地及欧洲等地广为栽培。草莓营养价值高，含有多种营养物质 ，且有保健功效。'],
    // 首页标题
    index_title:['兰博基尼','棉花','草莓'],
    // 当前滑块标题
    swiper_title: '兰博基尼',
    // 当前滑块内容
    swiper_content:'在意大利乃至全世界，兰博基尼是诡异的，它神秘地诞生，出人意料地推出一款又一款的让人咋舌的超级跑车。兰博基尼最能代表罗马2700年的历史，七丘之城罗马建城于不易防守之地，扩张与攻击在最初的一刻就凝聚于血脉之中。它是举世难得的艺术品,意大利最具声望的设计大师甘迪尼为其倾注一生的心血。每一个棱角、每一道线条都是如此完美，都在默默诠释兰博基尼近乎原始的美。如此一个特立独行的跑车品牌是数十年来世界车坛追逐与猎奇的焦点。',
    // 当前滑块图片索引
    img_index:0,
    // 压缩图片大小
    cWidth: 300,
    cHeight : 300,
    // 压缩后的图片链接
    canvasImgUrl:'',
    // 点击预览图片列表
    previewImgUrl:[],
    // 滑动坐标
    startX:0,
    startY:0,
    // 识别结果高度
    resultHeights:[],
    //当前swiper标签索引
    current:0,
    // 通用缓存Storage
    indexStorage:[[{score:"66.20%",root:"交通工具-汽车",keyword:"跑车",baike_info:{baike_url:"http://baike.baidu.com/item/%E8%B7%91%E8%BD%A6/303835",image_url:"https://bkimg.cdn.bcebos.com/pic/5366d0160924ab1887ca17c539fae6cd7a890b67",description:"跑车的英文名是SportsCar或SportyCar，属于一种低底盘、线条流畅、动力突出的汽车类型，其最大特点是不断追求速度极限。跑车的分类有很多种，按车身结构可分为轿跑、敞篷跑车、双门跑车，按价值可分为平民跑车、超级跑车。"}},
                  {score:"45.45%",root:"交通工具-汽车",keyword:"轿车",baike_info:{baike_url:"http://baike.baidu.com/item/%E8%BD%BF%E8%BD%A6/568373",image_url:"https://bkimg.cdn.bcebos.com/pic/ac6eddc451da81cb39db49bf932ec7160924ab189b22",description:"轿车(saloon car)是指用于载送人员及其随身物品，且座位布置在两轴之间的汽车。包括驾驶者在内，座位数最多不超过九个。一般轿车强调的是舒适性，以乘员为中心。而且是从经济性考虑出发，选择马力适中、排量小、耗油量小的发动机。在中国内地的行驶证管理方面，轿车特指区别于货车、皮卡、SUV、大巴、中巴的小型汽车，俗称为“小轿车”。在香港，轿车又称私家车。"}},
                  {score:"28.49%",root:"交通工具-汽车",keyword:"汽车",baike_info:{baike_url:"http://baike.baidu.com/item/%E6%B1%BD%E8%BD%A6/152503",image_url:"https://bkimg.cdn.bcebos.com/pic/f3d3572c11dfa9ec8a13cbb20a9ae003918fa0ec6b49",description:"我国国家最新标准《汽车和挂车类型的术语和定义》(GB/T 3730．1—2001)中对汽车有如下定义：由动力驱动，具有4个或4个以上车轮的非轨道承载的车辆，主要用于：载运人员和(或)货物；牵引载运人员和(或)货物的车辆；特殊用途。国产汽车品牌有：红旗、长安、长城、奇瑞、吉利、荣威等。国外汽车品牌有：丰田、大众、现代、起亚、标致等。"}},
                  {score:"14.30%",root:"交通工具-汽车",keyword:"汽车模型",baike_info:false},
                  {score:"0.03%",root:"商品-家装建材",keyword:"壁纸",baike_info:false}],

                  [{score:'84.38%',root:"植物-其它",keyword:"新疆棉花",baike_info:false},
                  {score:'66.37%',root:"植物-其它",keyword:"棉花籽",baike_info:false},
                  {score:'45.16%',root:"植物-莎草科",keyword:"羊胡子草",baike_info:{baike_url:"http://baike.baidu.com/item/%E7%BE%8A%E8%83%A1%E5%AD%90%E8%8D%89/6516148",image_url:"http://imgsrc.baidu.com/baike/pic/item/7af40ad162d9f2d370b7ec2aabec8a136227cc55.jpg",description:"羊胡子草，别名：卵穗苔草，莎草科，生于岩壁上。华南地区、西南地区。为多年生草本，高14至80cm。根状茎粗短。杆密丛生，基部具黑褐色叶鞘。叶基生，无杆生叶；叶片线形，长50至60cm，顶端渐狭成刚毛状，边内卷，具细齿，基部鞘状。"}},
                  {score:'3.97%',root:"植物-灌木",keyword:"棉花产业",baike_info:false}],

                  [{score:'87.43%',root:"植物-蔷薇科",keyword:"草莓",baike_info:{baike_url:"http://baike.baidu.com/item/%E8%8D%89%E8%8E%93/32702",image_url:"https://bkimg.cdn.bcebos.com/pic/faf2b2119313b07ec8e23fdd06d7912396dd8c83",description:"草莓(英文学名：strawberry、拉丁学名：Fragaria × ananassa Duch.)，多年生草本植物。高10-40厘米，茎低于叶或近相等，密被开展黄色柔毛。叶三出，小叶具短柄，质地较厚，倒卵形或菱形，上面深绿色，几无毛，下面淡白绿色，疏生毛，沿脉较密；叶柄密被开展黄色柔毛。聚伞花序，花序下面具一短柄的小叶；花两性；萼片卵形，比副萼片稍长；花瓣白色，近圆形或倒卵椭圆形。聚合果大，宿存萼片直立，紧贴于果实；瘦果尖卵形，光滑。花期4-5月，果期6-7月。原产南美，中国各地及欧洲等地广为栽培。草莓营养价值高，含有多种营养物质 ，且有保健功效。(概述图片参考： )"}},
                  {score:'69.19%',root:"植物-其它",keyword:"红色草莓",baike_info:false},
                  {score:'36.03%',root:"植物-无患子科",keyword:"荔枝",baike_info:false},
                  {score:'18.16%',root:"商品-穿戴",keyword:"毛线",baike_info:false},
                  {score:'0.28%',root:"植物-蔷薇科",keyword:"苹果",baike_info:false}],
                ],
    // 植物缓存
    plantStorage:[[{score:'83.52%',name:"非洲菊",baike_info:{baike_url:"http://baike.baidu.com/item/%E9%9D%9E%E6%B4%B2%E8%8F%8A/530646",image_url:"https://bkimg.cdn.bcebos.com/pic/8718367adab44aed60603e2dbf1c8701a08bfbc9",description:"非洲菊(学名：Gerbera jamesonii Bolus)是菊科，大丁草属多年生、被毛草本植物。根状茎短，为残存的叶柄所围裹，具较粗的须根；叶基生，莲座状，叶片长椭圆形至长圆形，顶端短尖或略钝，叶柄具粗纵棱，多少被毛；花葶单生，或稀有数个丛生，无苞叶；毛于顶部最稠密，头状花序单生于花葶之顶；总苞钟形，花托扁平，裸露，蜂窝状；花冠管短，花药具长尖的尾部；瘦果圆柱形，密被白色短柔毛；冠毛略粗糙，鲜时污白色，干时带浅褐色，基部联合。花期11月至翌年4月。非洲菊原产于非洲南部的德兰士瓦，喜温暖通风、阳光充足的环境。该种花花色丰富，分别有红色、白色、黄色、橙色、紫色等，大而色泽艳丽，可被用于切花、盆栽及庭院装饰。(概述图参考来源：)"}},
                  {score:'3.58%',name:"雏菊",baike_info:{baike_url:"http://baike.baidu.com/item/%E9%9B%8F%E8%8F%8A/16619",image_url:"https://bkimg.cdn.bcebos.com/pic/024f78f0f736afc379312bb10d51fcc4b74542a9b485",description:"雏菊(学名：Bellis perennis L.)，又名马兰头花、延命菊，春菊、太阳菊等。是菊科雏菊属植物的一种，多年生草本植物。高10厘米左右。雏菊原产于欧洲。原种被视为丛生的杂草，开花期在春季。雏菊在能够渡夏的寒冷地区可以进行分枝繁殖。早春开花，生气盎然，具有君子的风度和天真烂漫的风采，深得意大利人的喜爱，因而推举为国花。(概述图参考资料来源：)"}},
                  {score:'1.49%',name:"菊花",baike_info:false}],

                  [{score:'85.00%',name:"天竺葵",baike_info:false},
                  {score:'0.74%',name:"家天竺葵",baike_info:{baike_url:"http://baike.baidu.com/item/%E5%AE%B6%E5%A4%A9%E7%AB%BA%E8%91%B5/7551371",image_url:"https://bkimg.cdn.bcebos.com/pic/c75c10385343fbf25814f81ebe7eca8065388fd7",description:"家天竺葵(学名：Pelargonium domesticum Bailey)是牻牛儿苗科天竺葵属植物。多年生草本，高30-40厘米，茎直立，分枝。基部木质化，被开展的长柔毛。叶互生；托叶干膜质，三角状宽卵形。伞形花序与叶对生或腋生，明显长于叶，具花数朵。花期7-8月(温室冬季亦开花)。原产于非洲南部；世界各地广为栽培。中国北方常见栽培种。性喜温暖和凉爽的气候环境，喜阳光照射，耐寒冷、忌酷热，要求在肥沃疏松、富含有机质的培养土中生长。家天竺葵品种花色繁多，嫩绿，粉红、紫红，色彩非常美丽，是公园、庭院、花坛绿化美化的极好植物，也宜盆栽。"}},
                  {score:'0.65%',name:"马蹄纹天竺葵",baike_info:false}],

                  [{score:'73.4%',name:"玫瑰",baike_info:{baike_url:"http://baike.baidu.com/item/%E7%8E%AB%E7%91%B0/63206",image_url:"https://bkimg.cdn.bcebos.com/pic/21a4462309f7905297c355730bf3d7ca7acbd59a",description:"玫瑰(学名：Rosa rugosa Thunb.)：原产地中国。属蔷薇目，蔷薇科落叶灌木，枝杆多针刺，奇数羽状复叶，小叶5-9片，椭圆形，有边刺。花瓣倒卵形，重瓣至半重瓣，花有紫红色、白色，果期8-9月，扁球形。枝条较为柔弱软垂且多密刺，每年花期只有一次，因此较少用于育种，近来其主要被重视的特性为抗病性与耐寒性。玫瑰作为经济作物时，其花朵主要用于食品及提炼香精玫瑰油，玫瑰油应用于化妆品、食品、精细化工等工业。在欧洲诸语言中，蔷薇、玫瑰、月季都是使用同一个词，如英语是rose，德语是Die Rose。玫瑰是英国的国花。通俗意义中的“玫瑰”已成为多种蔷薇属植物的通称。且事实上杂交玫瑰也是由蔷薇属下各物种杂交选育所产生。此内容请看“玫瑰花”一词。"}},
                  {score:'16.91%',name:"月季花",baike_info:{baike_url:"http://baike.baidu.com/item/%E6%9C%88%E5%AD%A3%E8%8A%B1/14505544",image_url:"https://bkimg.cdn.bcebos.com/pic/562c11dfa9ec8a139fe24202f903918fa1ecc05c",description:"月季花(学名：Rosa chinensis Jacq.)：被称为花中皇后，又称“月月红”，是常绿、半常绿低矮灌木，四季开花﹐一般为红色﹐或粉色、偶有白色和黄色﹐可作为观赏植物，也可作为药用植物，亦称月季。有三个自然变种，现代月季花型多样，有单瓣和重瓣，还有高心卷边等优美花型；其色彩艳丽、丰富，不仅有红、粉、黄、白等单色，还有混色、银边等品种；多数品种有芳香。月季的品种繁多，世界上已有近万种，中国也有千种以上。自然花期8月到次年4月，花成大型，由内向外，呈发散型，有浓郁香气，可广泛用于园艺栽培和切花。月季的适应性强，耐寒、抗旱，不论地栽、盆栽均可，适用于美化庭院、装点园林、布置花坛、配植花篱、花架，月季栽培容易，可作切花，用于做花束和各种花篮，月季花朵可提取香精，并可入药。也有较好的抗真菌及协同抗耐药真菌活性。红色切花更成为情人间必送的礼物之一，并成为爱情诗歌的主题。中国是月季的原产地之一。月季花荣秀美，姿色多样，四时常开，深受人们的喜爱，中国有52个城市将它选为市花，1985年5月月季被评为中国十大名花第五名。(概述图片参考资料来源：)"}},
                  {score:'0.50%',name:"洋桔梗",baike_info:{baike_url:"http://baike.baidu.com/item/%E6%B4%8B%E6%A1%94%E6%A2%97/6946300",image_url:"https://bkimg.cdn.bcebos.com/pic/00e93901213fb80e8fead6a53ed12f2eb938948d",description:"洋桔梗(Eustoma grandiflorum(Raf.)Shinners)龙胆科多年生植物，株高30-100厘米。叶对生，阔椭圆形至披针形，几无柄，叶基略抱茎；叶表蓝绿色。雌雄蕊明显，苞片狭窄披针形，花瓣覆瓦状排列。花色丰富，有单色及复色，花瓣单瓣与双瓣之分。洋桔梗又名草原龙胆，原生于美国南部至墨西哥之间的石灰岩地带，现代的洋桔梗栽培是在日本兴旺起来的。在20世纪60年代已开始作商业化的栽培。洋桔梗花色典雅明快，花形别致可爱，是国际上十分流行的盆花和切花种类之一。(概述图片来源：)"}}]],
    // 动物缓存
    animalStorage:[[{score:'52.76%',name:"日本秋田犬",baike_info:{baike_url:"http://baike.baidu.com/item/%E7%A7%8B%E7%94%B0%E7%8A%AC/504109",image_url:"https://bkimg.cdn.bcebos.com/pic/622762d0f703918f7dd24b275f3d269758eec4d8",description:"秋田犬(日语：あきたいぬ/アキタイヌ)是日本国犬，在日本是家庭宠物犬。秋田犬是日本最大的狐狸犬种，这一大型狐狸犬就算在欧洲,美国这种狐狸犬种众多的国家也颇为引人瞩目。在日本，秋田犬是具有国家历史文物意义的犬，属国犬，因“忠犬八公”闻名于世，是日本指定的国家天然纪念物中唯一的大型犬。该犬十分勇猛、感觉锐敏、忠诚且聪明，有关其忠诚的故事很多。秋田县是秋田犬发祥地，该地区北部多山，而且冬季十分寒冷。秋田犬是能干的工作犬和看家犬，村民们常常带着犬去猎杀野猪和熊，犬最拿手的本领是帮猎人在雪地或水中寻找被击中的猎物，寻回后交给主人。"}},
                  {score:'40.98%',name:"威尔士柯基",baike_info:{baike_url:"http://baike.baidu.com/item/%E5%A8%81%E5%B0%94%E5%A3%AB%E6%9F%AF%E5%9F%BA/1780641",image_url:"https://bkimg.cdn.bcebos.com/pic/58ee3d6d55fbb2fbe7e9fd374d4a20a44723dcd1",description:"威尔士柯基个子矮小，骨量适中，胸深。整个身体的侧面轮廓的比例是长度远大于高度。尾巴位置非常低，而且象狐狸尾巴。给人的整体印象是：漂亮、有力的小型犬，速度和耐力都非常好，聪明，结构坚固，但不粗糙。"}},
                  {score:'5.39%',name:"日本柴犬",baike_info:{baike_url:"http://baike.baidu.com/item/%E6%97%A5%E6%9C%AC%E6%9F%B4%E7%8A%AC/10425292",image_url:"https://bkimg.cdn.bcebos.com/pic/314e251f95cad1c878c013ce7f3e6709c83d51e4",description:"日本柴犬是日本本土最小的犬种，用于在日本多山的地形中，在浓密的灌木丛中，利用视觉和嗅觉进行捕猎的猎犬，警惕而敏捷，感觉敏锐。同时，他也是一种非常卓越的门卫犬和伴侣犬。在日本，柴犬被政府指定为“天然纪念物”。原因是其起源早，早在公元前1000年，柴犬就生活在日本山区，也叫丛林犬，动作轻盈敏捷，是十分优秀的犬种。"}},
                  {score:'0.27%',name:"中华田园犬",baike_info:false},
                  {score:'0.17%',name:"美系秋田犬",baike_info:false},
                  {score:'0.06%',name:"日本犬",baike_info:false}],

                  [{score:'81.21%',name:"英国短毛猫",baike_info:{baike_url:"http://baike.baidu.com/item/%E8%8B%B1%E5%9B%BD%E7%9F%AD%E6%AF%9B%E7%8C%AB/672846",image_url:"https://bkimg.cdn.bcebos.com/pic/8d5494eef01f3a292df5f01bf46fab315c6035a8d686",description:"英国短毛猫，体形圆胖，四肢粗短发达，毛短而密，头大脸圆，温柔平静，对人友善，极易饲养。大而圆的眼睛根据被毛不同而呈现各种颜色。作为一个古老的猫品种，其历史可追溯至古罗马时期的家猫，由于拥有悠久的育种历史，可以称得上是猫家族中的典范。英国短毛猫除了拥有固定而聚，代表性的遗传特征之外，又具有丰富的变异性，如背毛色眼睛颜色等。更重要的是，有了广泛的配种历史后，这种猫拥有了更健康的身体和更温驯的性格。"}},
                  {score:'11.57%',name:"俄罗斯蓝猫",baike_info:{baike_url:"http://baike.baidu.com/item/%E4%BF%84%E7%BD%97%E6%96%AF%E8%93%9D%E7%8C%AB/643065",image_url:"https://bkimg.cdn.bcebos.com/pic/908fa0ec08fa513da1c7f807346d55fbb3fbd9fe",description:"俄罗斯蓝猫(Russian Blue)，历史上曾被称做阿契安吉蓝猫，曾有过三种不同的名字。最初是阿契安吉蓝猫，直到20世纪40年代才有俄罗斯蓝猫的名字，另外有段时间它则叫做马耳他猫。证据显示，这种猫确实原产于俄罗斯，因为已在俄罗斯寒带地区发现了同种的猫。俄罗斯蓝猫体型细长，大而直立的尖耳朵，脚掌小而圆，走路像是用脚尖在走。身上披着银蓝色光泽的短被毛，配上修长苗条的体型和轻盈的步态，尽显一派猫中的贵族风度。"}},
                  {score:'0.94%',name:"卡尔特猫",baike_info:false},
                  {score:'0.91%',name:"苏格兰折耳猫",baike_info:false},
                  {score:'0.86%',name:"卡特尔猫",baike_info:false},
                  {score:'0.71%',name:"短毛猫",baike_info:false}],

                  [{score:'99.54%',name:"国宝大熊猫",baike_info:false},
                  {score:'0.18%',name:"秦岭四宝",baike_info:{baike_url:"http://baike.baidu.com/item/%E7%A7%A6%E5%B2%AD%E5%9B%9B%E5%AE%9D/1309579",image_url:"https://bkimg.cdn.bcebos.com/pic/d1a20cf431adcbef1c6b4cfbaeaf2edda2cc9feb",description:"秦岭四宝是指生活在秦岭中的朱鹮、大熊猫、金丝猴,羚牛这四种珍稀动物。2011年参加西安世界园艺博览会，入住世园会四宝馆，使这一称谓进一步强化和固化。"}},
                  {score:'0.07%',name:"团团圆圆",baike_info:{baike_url:"http://baike.baidu.com/item/%E5%9B%A2%E5%9B%A2%E5%9C%86%E5%9C%86/16688491",image_url:"https://bkimg.cdn.bcebos.com/pic/8326cffc1e178a82b9015e372349648da9773912425b",description:"团团圆圆，腾讯游戏《洛克王国》中的宠物，可以超进化为泉水汤圆。闹元宵，月正圆，今夕知何夕。团圆事事同。星灿乌云裹，珠浮浊水中。"}},
                  {score:'0.07%',name:"棕色大熊猫",baike_info:false},
                  {score:'0.03%',name:"圆仔",baike_info:false},
                  {score:'0.01%',name:"小熊猫",baike_info:false}]],
    // 酒类缓存
    wineStorage:[[{wineNameCn:'法国干红 帕度波城堡波尔多产区07年份干红葡萄酒',baike_info:false}],
                  [{wineNameCn:'法国波尔多产区 沙桐湾波尔多之路干红葡萄酒',baike_info:false}],
                  [{wineNameCn:'澳大利亚 洛神山庄设拉子干红葡萄酒',baike_info:false}]],
    // 菜品缓存
    dishStorage:[[{probability:'20.96%',has_calorie:true,name:"炝炒腰花",baike_info:{baike_url:"http://baike.baidu.com/item/%E7%82%9D%E7%82%92%E8%85%B0%E8%8A%B1/2531077",image_url:"https://bkimg.cdn.bcebos.com/pic/738b4710b912c8fc5b85e572f7039245d688211e",description:"猪腰含有蛋白质、脂肪、碳水化合物、钙、磷、铁和维生素等，有健肾补腰、和肾理气之功效。猪腰子具有补肾气、通膀胱、消积滞、止消渴之功效。可用于治疗肾虚腰痛、水肿、耳聋等症。1.适宜肾虚之人腰酸腰痛、遗精、盗汗者食用；适宜老年人肾虚耳聋、耳鸣者食用；2.血脂偏高者、高胆固醇者忌食。"}},
                  {probability:'11.84%',has_calorie:true,name:"酱肉丝",baike_info:{baike_url:"http://baike.baidu.com/item/%E9%85%B1%E8%82%89%E4%B8%9D/2689787",image_url:"https://bkimg.cdn.bcebos.com/pic/b90e7bec54e736d1fb1014b39b504fc2d562690e",description:"酱肉丝是一道传统的家常菜，主要制作食材是猪里脊肉，配料是豆腐皮等，调料是甜面酱、白糖、料酒等，通过大火烧制而成。"}},
                  {probability:'9.56%',has_calorie:true,name:"爆三样",baike_info:false},
                  {probability:'8.08%',has_calorie:true,name:"爆炒鱿鱼",baike_info:false},
                  {probability:'4.01%',has_calorie:true,name:"牛柳",baike_info:false}],

                  [{probability:'82.08%',has_calorie:true,name:"红烧肉",baike_info:{baike_url:"http://baike.baidu.com/item/%E7%BA%A2%E7%83%A7%E8%82%89/571767",image_url:"https://bkimg.cdn.bcebos.com/pic/f31fbe096b63f624c51a87b68944ebf81b4ca3c4",description:"红烧肉，一道著名的大众菜肴，各大菜系都有自己特色的红烧肉。其以五花肉为制作主料，最好选用肥瘦相间的三层肉(五花肉)来做，锅具以砂锅为主，做出来的肉肥瘦相间，香甜松软，营养丰富，入口即化。红烧肉在我国各地流传甚广，做法多达二三十种，具有一定的营养价值。"}},
                  {probability:'7.74%',has_calorie:true,name:"糖醋排骨",baike_info:{baike_url:"http://baike.baidu.com/item/%E7%B3%96%E9%86%8B%E6%8E%92%E9%AA%A8/31447",image_url:"https://bkimg.cdn.bcebos.com/pic/562c11dfa9ec8a1391024834f903918fa1ecc0ce",description:"糖醋排骨(Sweet and Sour Spare Ribs)，是糖醋味型中具有代表性的一道大众喜爱的特色传统名菜。它选用新鲜猪子排作主料，肉质鲜嫩，成菜色泽红亮油润。“糖醋”中国各大菜系都拥有的一种口味。糖醋排骨起源浙江，是典型的一道浙菜。正宗的糖醋排骨做法和用料都颇为讲究，一般排骨选用仔排、肋排。排骨需先去除血水，沥干腌制入味，然后裹上粉下油炸至表面金黄酥脆捞出备用，冰糖炒出糖色后放排骨入锅翻炒，最后淋上米醋调成糖醋味。这里一定要用米醋，陈醋味道太重影响口感。沪菜用料简单注重的是酸甜的口味里面用到了番茄酱 这也是沪菜的特点，浙菜用料丰富，做法精细，色、香、味具全；川菜做糖醋排骨讲究排骨精选与糖盐醋的搭配 。糖醋排骨的调配汁只有沪菜会加番茄酱，沪菜口味偏甜 ， 浙菜和川菜偏重 。沪菜浙菜的糖醋排骨属于烧菜，而川菜中的糖醋排骨 是四川一道很有名的凉菜，用的是炸收的烹饪方法，属于糖醋味型，琥珀油亮，干香滋润，甜酸醇厚，是一款好的下酒菜或是开胃菜。颇受中国人民喜爱。淮扬菜的糖醋排骨在技法上兼顾了浙菜的和川菜的特点，口味上结合沪菜的特点，用糖醋，葱蒜调味，用油热煸，淮扬菜做法的糖醋排骨历史较其余三个菜系较短。"}},
                  {probability:'1.80%',has_calorie:true,name:"烧排骨",baike_info:{baike_url:"http://baike.baidu.com/item/%E7%83%A7%E6%8E%92%E9%AA%A8/4766890",image_url:"https://bkimg.cdn.bcebos.com/pic/4bed2e738bd4b31c8701889a579c307f9e2f070852f5",description:"烧排骨，做法多样，口味独特。糖醋排骨，红烧排骨，土豆烧排骨，冬瓜排骨汤，秘制烧排骨，番茄排骨汤，香辣排骨，薄荷蒸排骨，蜜汁烤排骨，京都排骨等都为烧排骨的一种。"}},
                  {probability:'1.47%',has_calorie:true,name:"排骨汤",baike_info:false},
                  {probability:'1.42%',has_calorie:true,name:"无锡排骨",baike_info:false}],

                  [{probability:'77.72%',has_calorie:true,name:"咕咾肉",baike_info:{baike_url:"http://baike.baidu.com/item/%E5%92%95%E5%92%BE%E8%82%89/677632",image_url:"https://bkimg.cdn.bcebos.com/pic/09fa513d269759ee87ad3987bffb43166c22dff9",description:"咕咾肉又称咕噜肉，是广东的一道特色传统名菜，属于粤菜，以甜酸汁及猪肉煮成。咕咾肉作为欧美人士最熟悉的中国菜之一，常见于中国以外的唐人街的餐馆。"}},
                  {probability:'14.04%',has_calorie:true,name:"糖醋排骨",baike_info:{baike_url:"http://baike.baidu.com/item/%E7%B3%96%E9%86%8B%E6%8E%92%E9%AA%A8/31447",image_url:"https://bkimg.cdn.bcebos.com/pic/562c11dfa9ec8a1391024834f903918fa1ecc0ce",description:"糖醋排骨(Sweet and Sour Spare Ribs)，是糖醋味型中具有代表性的一道大众喜爱的特色传统名菜。它选用新鲜猪子排作主料，肉质鲜嫩，成菜色泽红亮油润。“糖醋”中国各大菜系都拥有的一种口味。糖醋排骨起源浙江，是典型的一道浙菜。正宗的糖醋排骨做法和用料都颇为讲究，一般排骨选用仔排、肋排。排骨需先去除血水，沥干腌制入味，然后裹上粉下油炸至表面金黄酥脆捞出备用，冰糖炒出糖色后放排骨入锅翻炒，最后淋上米醋调成糖醋味。这里一定要用米醋，陈醋味道太重影响口感。沪菜用料简单注重的是酸甜的口味里面用到了番茄酱 这也是沪菜的特点，浙菜用料丰富，做法精细，色、香、味具全；川菜做糖醋排骨讲究排骨精选与糖盐醋的搭配 。糖醋排骨的调配汁只有沪菜会加番茄酱，沪菜口味偏甜 ， 浙菜和川菜偏重 。沪菜浙菜的糖醋排骨属于烧菜，而川菜中的糖醋排骨 是四川一道很有名的凉菜，用的是炸收的烹饪方法，属于糖醋味型，琥珀油亮，干香滋润，甜酸醇厚，是一款好的下酒菜或是开胃菜。颇受中国人民喜爱。淮扬菜的糖醋排骨在技法上兼顾了浙菜的和川菜的特点，口味上结合沪菜的特点，用糖醋，葱蒜调味，用油热煸，淮扬菜做法的糖醋排骨历史较其余三个菜系较短。"}},
                  {probability:'1.72%',has_calorie:true,name:"荔枝肉",baike_info:{baike_url:"http://baike.baidu.com/item/%E8%8D%94%E6%9E%9D%E8%82%89/1182132",image_url:"https://bkimg.cdn.bcebos.com/pic/a8014c086e061d955135c17479f40ad162d9ca0f",description:"荔枝肉是福建省福州市、莆田市等地的一道特色传统名菜，属于闽菜系；该菜品已有二三百年历史。因原料中有白色的荸荠和切成十字花刀的猪肉，烹调后因外形型似荔枝而得名。制法是将猪瘦肉剞上十字花刀，切成斜形块，因剞的深度、宽度均匀恰当，炸后卷缩成荔枝形，佐以红糟、香醋、白糖、酱油、麻油、湿淀粉等调料即成。"}},
                  {probability:'1.30%',has_calorie:true,name:"宫保鸡丁",baike_info:false},
                  {probability:'1.05%',has_calorie:true,name:"生炒骨",baike_info:false}]],
    
    // 首页自动切换
    IndexAutoPlay: true,
    // 识别记录缓存
    historyLists: [],
    // 显示识别记录
    historyShow: false,
    //当前存在识别记录数量
    historyNum:0
  },

  // 首页滑块切换事件
  indexSwiperChange(e){
    let current = e.detail.current
    this.setData({swiper_content:this.data.index_content[current],swiper_title:this.data.index_title[current],img_index:current})
  },

  // 暂停切换
  pauseAutoPlay(){
    this.setData({IndexAutoPlay:false})
  },

  // 点击首页相关识别，跳转具体
  goDetail(){
    let index = this.data.img_index
    let newResult = []
    if(this.data.selectItem == 'advanced_general'){
      newResult = this.data.indexStorage[index]
    }else if(this.data.selectItem == 'plant'){
      newResult = this.data.plantStorage[index]
    }else if(this.data.selectItem == 'animal'){
      newResult = this.data.animalStorage[index]
    }else if(this.data.selectItem == 'red_wine'){
      newResult = this.data.wineStorage[index]
    }else if(this.data.selectItem == 'dishs'){
      newResult = this.data.dishStorage[index]
    }
    let num = newResult.length
    let path = this.data.image_url[index]
    this.setData({result:newResult,resultNum:num,picFilePath:path,isRuleTrue:false,moreTap:false})
  },

  // 显示识别记录
  showHistory(){
    // 读取缓存记录
    let info = wx.getStorageInfoSync()
    let keyLists = info.keys
    let historyLists = []
    keyLists.forEach(item => {
      // 区分反馈缓存
      if(item.indexOf("https://") == -1){
        let history = {}
        let keys = item.split(";")
        history.title = keys[0]
        history.time = keys[1]
        history.score = keys[2]
        let url  = wx.getStorageSync(item)
        history.url = url
        historyLists.push(history)
      }
    })
    this.setData({historyLists:historyLists,historyShow:true,isRuleTrue: false,moreTap:false})
  },

  // 计算当前识别记录数量
  countHistoryNum(){
    let info = wx.getStorageInfoSync()
    let keyLists = info.keys
    let num = 0
    keyLists.forEach(item =>{
      if(item.indexOf("https://") == -1){
        num += 1
      }
    })
    this.setData({historyNum:num})
  },

  // 点击结果进行复制
  copyResult(e){
    let score = ''
    let root = ''
    let name = ''
    let desc = ''
    if(this.data.selectItem == 'advanced_general'){
      score = e.currentTarget.dataset.result.score
      root = e.currentTarget.dataset.result.root
      name = e.currentTarget.dataset.result.keyword
      if(e.currentTarget.dataset.result.baike_info != false){
        desc = e.currentTarget.dataset.result.baike_info.description
      }
      wx.setClipboardData({
        data: `名称：${name};分类：${root};相似度：${score};描述：${desc}`
      })
    }
    else if(this.data.selectItem == 'red_wine'){
      name = e.currentTarget.dataset.result.wineNameCn
      if(e.currentTarget.dataset.result.baike_info != false){
        desc = e.currentTarget.dataset.result.baike_info.description
      }
      wx.setClipboardData({
        data: `名称：${name};描述：${desc}`
      })
    }
    else if(this.data.selectItem == 'dishs'){
      score = e.currentTarget.dataset.result.probability
      root = e.currentTarget.dataset.result.has_calorie == true? '有':'无'
      name = e.currentTarget.dataset.result.name
      if(e.currentTarget.dataset.result.baike_info != false){
        desc = e.currentTarget.dataset.result.baike_info.description
      }
      wx.setClipboardData({
        data: `名称：${name};卡路里：${root};相似度：${score};描述：${desc}`
      })
    }else{
      score = e.currentTarget.dataset.result.score
      name = e.currentTarget.dataset.result.name
      if(e.currentTarget.dataset.result.baike_info != false){
        desc = e.currentTarget.dataset.result.baike_info.description
      }
      wx.setClipboardData({
        data: `名称：${name};相似度：${score};描述：${desc}`
      })
    }
    
  },

  // 获取本地图片
  upLoad(e){
    let that = this
    let type = e.currentTarget.dataset.type
      if(type == 'camera'){
        that.setData({cameraTap:true,photoTap:false,moreTap:false,isRuleTrue: false})
      }else{
        that.setData({photoTap:true,cameraTap:false,moreTap:false,isRuleTrue: false})
      }
      wx.chooseImage({
              count: 1, //可选择图片张数
              sizeType: ['compressed'], //图片大小：压缩图片，第一次
              sourceType: [type], //图片来源：相册或相机
              success (res) {
                // tempFilePath可以作为img标签的src属性显示图片
                let tempFilePath = res.tempFilePaths[0]
        //         that.setData({picFilePath:tempFilePath})

                wx.showLoading({
                  title: '压缩图片中',
                })
              // 对图片进行二次压缩
                //-----返回选定照片的本地文件路径列表，获取照片信息-----------
              wx.getImageInfo({
                  src: tempFilePath,  
                  success: function(res){
                    let img_path = res.path //未二次压缩前的图片链接
                    //---------利用canvas压缩图片--------------
                  var ratio = 2;
                  var canvasWidth = res.width //图片原始长宽
                  var canvasHeight = res.height
                  while (canvasWidth > 400 || canvasHeight > 400){// 保证宽高在400以内
                      canvasWidth = Math.trunc(res.width / ratio)
                      canvasHeight = Math.trunc(res.height / ratio)
                      ratio++;
                  }
                  that.setData({
                      cWidth: canvasWidth,
                      cHeight: canvasHeight
                  })
                  //----------绘制图形并取出图片路径--------------
                  var ctx = wx.createCanvasContext('canvas')
                  ctx.drawImage(img_path, 0, 0, canvasWidth, canvasHeight)
                  ctx.draw(false, setTimeout(function(){
                      wx.canvasToTempFilePath({
                          canvasId: 'canvas',
                          destWidth: canvasWidth,
                          destHeight: canvasHeight,
                          success: function (res) {
                              // console.log(res.tempFilePath)
                              //最终图片路径
                              wx.hideLoading({
                                success: () => {
                                  wx.showToast({
                                    title: '图片压缩成功',
                                    icon: 'success',
                                    success(){
                                      let imgList = []
                                      imgList.push(img_path)
                                      that.setData({picFilePath:img_path,canvasImgUrl:res.tempFilePath,previewImgUrl:imgList})
                                    }
                                  })
                                },
                              })
                          },
                          fail: function (res) {
                              console.log(res.errMsg)
                              wx.hideLoading({
                                success: () => {
                                  wx.showToast({
                                    title: '图片压缩失败',
                                    icon: 'error'
                                  })
                                },
                              })
                          }
                      })
                  },2000))    //留一定的时间绘制canvas
                      },
                      fail: function(res){
                        console.log(res.errMsg)
                        wx.hideLoading({
                          success: () => {
                            wx.showToast({
                              title: '图片获取失败',
                              icon: 'error'
                            })
                          },
                        })
                    },
                })
              },
              fail(res){
                wx.showToast({
                  title: '未选择图片',
                  icon:'error'
                })
                that.setData({cameraTap:false,photoTap:false})
              }
            })
  },

  // 选择图片后加载完成触发
  selectPicOk(){
    let that = this
    // 判断图片来源--区分首页识别相关跳转
    if(that.data.picFilePath.indexOf("://tmp") != -1){
      wx.showToast({
        title: '图片加载成功',
        success(){
          // that.recognizePic(that.data.canvasImgUrl) //原图识别
          that.recognizePic(that.data.picFilePath) //二次压缩识别
        }
      })
    }else{
      // 遍历获取识别结果标签高度
      let query = wx.createSelectorQuery()
      query.selectAll('.result_card').boundingClientRect(function (rect) {
        let heightList = []
        rect.forEach(item=>{
          heightList.push(item.height)
          that.setData({resultHeights:heightList})
        })
      }).exec()
    }
  },

  // 点击上传的图片预览
  preViewImg(){
    let that = this
    if(that.data.picFilePath.indexOf("://tmp") != -1){
      wx.previewImage({
        urls: that.data.previewImgUrl
      })
    }
  },

  // 点击预览历史记录的图片
  preViewHistoryImg(e){
    let imageList = []
    let url = e.currentTarget.dataset.history
    imageList.push(url)
    wx.previewImage({
      urls: imageList,
    })
  },

  // 点击结果中的图片预览
  showResultImg(e){
    let url = e.currentTarget.dataset.img
    let urlList = []
    urlList.push(url)
    wx.previewImage({
      urls: urlList,
    })
  },

  // 分析图片
  recognizePic(ImgUrl){
    let that = this
    let uploadTask = wx.uploadFile({
      url: 'https://hscode.vip/api/img/get-image-recognition-result', // 接口地址
      filePath: ImgUrl, // 上传二次压缩后的图片
      timeout: 10000, //超时时间
      name: 'img_file', // 图片对应的key参数，服务器可根据此参数获取图片
      formData: {
        img_type: that.data.selectItem // 识别分类参数
      },
      success (res){
        let dataStr = res.data // 这是一个字符串
        let data = JSON.parse(dataStr) // 转换为对象
        if(data.code != 200){
          wx.hideLoading({
            success: () => {
              that.setData({picFilePath:'',canvasImgUrl:''})
              wx.showToast({
                title: data.data,
                icon: 'none',
                duration: 3000
              })
            },
          })
        }else{
          if(data.code == 200){
            let result = data.data.info.result
            wx.hideLoading({
              success: () => {
                wx.showToast({
                  title: '识别成功',
                  icon: 'success'
                })
                let select = that.data.selectItem
                // 根据选择的分类获取对应结果，红酒需要区分处理（返回是一个对象而不是数组）
                let cate = result[select]
                let cateName = Object.keys(result)[0]
                let newResult = []
                // 判断是否存在百度百科信息
                if(cateName == 'red_wine'){
                    if(JSON.stringify(cate.result.baike_info) == '{}'){
                      cate.result.baike_info = false
                    }
                    newResult.push(cate.result)
                    that.setData({result:newResult})
                }
                else{
                  cate.result.forEach(item =>{
                    if(JSON.stringify(item.baike_info) == '{}'){
                      item.baike_info = false
                    }
                    if(cateName == 'dishs'){
                      // 处理匹配度数据成百分比形式
                      item.probability = (item.probability * 100).toFixed(2) + '%'
                    }else{
                      // 处理匹配度数据成百分比形式
                      item.score = (item.score * 100).toFixed(2) + '%'
                    }
                  })
                  newResult = cate.result
                  that.setData({result:newResult,resultNum:cate.result_num})
                }
                // 遍历获取识别结果标签高度
                let query = wx.createSelectorQuery()
                query.selectAll('.result_card').boundingClientRect(function (rect) {
                  let heightList = []
                  rect.forEach(item=>{
                    heightList.push(item.height)
                    that.setData({resultHeights:heightList})
                  })
                }).exec()

                // 缓存图片文件
                let fs = wx.getFileSystemManager()
                fs.saveFile({
                  tempFilePath: ImgUrl,
                  success(res){
                    let url = res.savedFilePath
                    // 保存识别记录缓存
                    let newDate = new Date() //日期时间
                    let time = newDate.toLocaleString()
                    let title = ''
                    let score = ''
                    if(that.data.selectItem == 'advanced_general'){
                      title = newResult[0].keyword
                      score = newResult[0].score
                    }
                    else if(that.data.selectItem == 'red_wine'){
                      title = newResult[0].wineNameCn
                    }
                    else{
                      title = newResult[0].name
                      score = newResult[0].score
                      if(that.data.selectItem == 'dishs'){
                        score = newResult[0].probability
                      }
                    }
                    that.saveHistoryStorage(url,title,time,score)
                  }
                })

                // wx.setStorage({
                //   data: newResult,
                //   key: 'dishs3',
                // })
                // wx.setStorageSync('dishs_picFilePath3', that.data.picFilePath)
                // wx.setStorageSync('dishs_canvasImgUrl3', that.data.canvasImgUrl)
              },
            })
          }
          else{
            wx.hideLoading({
              success: () => {
                wx.showToast({
                  title: '识别失败',
                  icon: 'error'
                })
              },
            })
          }
        } 
      },
      fail (res){
        console.log(res)
        wx.hideLoading({
          success: () => {
            wx.showToast({
              title: '图片上传失败',
              icon:'error'
            })
            that.setData({picFilePath:'',canvasImgUrl:''})
          }
        })
      }
    })

    uploadTask.onProgressUpdate((res) => {
      wx.showLoading({
        title:`上传中：${res.progress}%`
      })
    })
  },

  // 缓存识别记录---图片地址、标题、时间、匹配率
  saveHistoryStorage(url,title,time,score){
    let name = `${title};${time};${score}`
    wx.setStorageSync(name, url)
    this.countHistoryNum()
  },

  // 分类选择
  radioChange(e) {
    const items = this.data.items
    for (let i = 0, len = items.length; i < len; ++i) {
      items[i].checked = items[i].value === e.detail.value
      if(items[i].checked == true){
        items[i].textColor = 'green'
        this.setData({image_url:items[i].image_url,index_content:items[i].index_content,
          index_title:items[i].index_title,swiper_content:items[i].index_content[this.data.img_index],
          swiper_title:items[i].index_title[this.data.img_index],IndexAutoPlay:true
        })
      }else{
        items[i].textColor = ''
      }
    }
    this.setData({items,selectItem:e.detail.value})
  },
 
  // 更多按钮点击事件
  openLeftPage() {
    if(this.data.isRuleTrue){
      this.setData({isRuleTrue: false,moreTap:false,cameraTap:false,photoTap:false,IndexAutoPlay:true})
    }else{
      // 如果是初次打开，则要先渲染侧边栏
      if(!this.data.useSwitch){
        this.setData({isRuleTrue: true,useSwitch: true}) //一定要同时设置class属性，否则会出现抖动
        // 计算识别历史数量
        this.countHistoryNum()
      }
      this.setData({isRuleTrue: true,moreTap:true,cameraTap:false,photoTap:false,IndexAutoPlay:true})
    }
  },

  // 点击返回按钮返回首页
  goBackIndex(){
    this.setData({picFilePath:'',canvasImgUrl:'',result:[],resultNum:0,historyShow:false})
  },

  // 当“更多内容”展开时点击图片触发关闭
  closeLeft(){
    if(this.data.isRuleTrue){
      this.setData({isRuleTrue: false,moreTap:false,cameraTap:false,photoTap:false})
    }
  },

  // 判断滑动方向
  slideEnd(e){
    // 通过判断X轴与Y轴变化的大小来区分是左右还是上下滑动
    let endX = e.touches[0].pageX - this.data.startX
    let endY = e.touches[0].pageY - this.data.startY
    // 向左滑动并且侧边栏是打开状态
    // endX绝对值大于endY表示横向滑动
    if(endX < 0 && Math.abs(endX) > Math.abs(endY)){
      // 关闭侧边栏
      this.closeLeft()
    }
    else{
      // 向右滑动，并且侧边栏是关闭状态
      if(!this.data.isRuleTrue && Math.abs(endX) > Math.abs(endY)){
        // 打开侧边栏
      this.openLeftPage()
      }
    }
  },

  //开始滑动事件
  sildeStart(e){
    this.setData({startX:e.touches[0].pageX,startY:e.touches[0].pageY})
  },

  // 调用反馈组件事件
  openFeedBack(){
    this.selectComponent("#avatar").showDialog()
    this.setData({isRuleTrue:false,moreTap:false})
  },

  onShareAppMessage: function () {
      wx.showShareMenu({
        withShareTicket: true,
        menus: ['shareAppMessage', 'shareTimeline']
      })
    },

  //用户点击右上角分享朋友圈
  onShareTimeline: function () {
    return {
        title: '',
        query: {
          key: value
        },
        imageUrl: ''
      }
  }, 

  //刷新
  onRefresh(){
    //在当前页面显示导航条加载动画
    wx.showNavigationBarLoading(); 
    //显示 loading 提示框。需主动调用 wx.hideLoading 才能关闭提示框
    wx.showLoading({
      title: '刷新中...',
    })
    this.getData();
  },

  getData(){
    this.setData({picFilePath:'',canvasImgUrl:'',result:[],resultNum:0})
    //隐藏loading 提示框
    wx.hideLoading();
    //隐藏导航条加载动画
    wx.hideNavigationBarLoading();
    //停止下拉刷新
    wx.stopPullDownRefresh();
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
      //调用刷新时将执行的方法
    this.onRefresh();
  },

  swiperChange(e){
    this.setData({current:e.detail.current})
  },

  onLoad() {
    // let that = this
    // wx.getStorage({
    //   key: 'result',
    //   success(res){
    //     that.setData({result:res.data,resultNum:5})
    //     // // 遍历获取识别结果标签高度
    //     // var query = wx.createSelectorQuery()
    //     // query.selectAll('.result_card').boundingClientRect(function (rect) {
    //     //   let heightList = []
    //     //   rect.forEach(item=>{
    //     //     heightList.push(item.height)
    //     //     that.setData({resultHeights:heightList})
    //     //   })
    //     // }).exec()
    //   }
    // })
    // // 获取本地缓存
    // let picFilePath = wx.getStorageSync('picFilePath')
    // let canvasImgUrl = wx.getStorageSync('canvasImgUrl')
    // let picList = []
    // picList.push(picFilePath)
    // that.setData({picFilePath:picFilePath,canvasImgUrl:canvasImgUrl,previewImgUrl:picList})
  }
})
