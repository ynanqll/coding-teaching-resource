const fillInTheBlankQuestionGroups = [
  {
    "questionNumber": 25,
    "title": "(10分)小李去超市买菜的清单如下。",
    "image": "img/2022c-25.jpg",
    "questions": [
      {
        "serialNum": 1,
        "question": "在上表的F3单元格中，通过公式计算出西红柿的总价是27，则应在该单元中输人的公式是<input type='text' id='answer25-1' class='answer-input'>。",
        "answer": "=d3*e3或=e3*d3",
        "image": "",
        "score": 4,
        "explanation": ""
      },
      {
        "serialNum": 2,
        "question": "COUNTIF是计算某个区域中满足给定条件的单元格数目。上表所示的B3格用COUNTIF函数统计出产地是“玉溪”的菜品种类是2。如果要通过自动填方式统计出其它产地的菜品种类数量，则13单元格中的函数式应修改为<input type='text' id='answer25-2' class='answer-input'>。",
        "answer": "=countif(b$3:b$14,h3)或=countif($b$3:$b$14,h3)",
        "image": "",
        "score": 4,
        "explanation": ""
      },
      {
        "serialNum": 3,
        "question": "小李想通过图表直观呈现各产地的菜品种类情况，可以选择<input type='text' id='answer25-3' class='answer-input'>图表。(选填“柱形图”或“雷达图”)",
        "answer": "柱形图",
        "image": "",
        "score": 2,
        "explanation": ""
      }
    ]
  },
  {
    "questionNumber": 26,
    "title": "(12分)大约在1500年前，《孙子算经》中就记载了鸡免同笼问题:今有免同笼，上有三十五头，下有九十四足，问雉免各几何?意思就是:有若干只鸡和免在同一个笼子里，从上面数，有三十五个头;从下面数，有九十四只脚。求中鸡和兔各有几只。小邓利用循环结构进行问题求解，其中设鸡的数量为、免的数量为y，同时满足如下两个条件:x+y=35 和2x+4y=94，则问题有解。程序如下:",
    "image": "img/2022c-26.jpg",
    "questions": [
      {
        "serialNum": 1,
        "question": "该程序采用的算法是<input type='text' id='answer26-1' class='answer-input'>。",
        "answer": "枚举法或穷举法",
        "image": "",
        "score": 4,
        "explanation": ""
      },
      {
        "serialNum": 2,
        "question": "程序运行结束，第5行if语句一共执行了<input type='text' id='answer26-2' class='answer-input'>次。",
        "answer": "35*35或1225",
        "image": "",
        "score": 4,
        "explanation": ""
      },
      {
        "serialNum": 3,
        "question": "小朱同学看到小邓的程序后，修改了部分代码，修改后的代码如下：<img src='img/2022c-26-2.jpg'>小朱修改的程序运行结束后，第5行if语句一共执行了<input type='text' id='answer26-3' class='answer-input'>次，小朱的代码<input type='text' id='answer26-4' class='answer-input'>(选填“降低了”“没有提高”或“提高了”)程序的执行效率。",
        "answer": [
          "35",
          "提高了"
        ],
        "image": "",
        "score": [
          2,
          2
        ],
        "explanation": ""
      }
    ]
  },
  {
    "questionNumber": 27,
    "title": "(9分)平板电脑作为常见的移动终端设备，有着丰富的移动应用软件。用平板可以实现网上学习、听音乐、购物等。如下是某学校智慧教室使用的平板电脑要参数。",
    "image": "img/2022c-27.jpg",
    "questions": [
      {
        "serialNum": 1,
        "question": "平板电脑能根据外界光线自动调节屏幕亮度，用到的传感器是<input type='text' id='answer27-1' class='answer-input'>。",
        "answer": "光线传感器",
        "image": "",
        "score": 3,
        "explanation": ""
      },
      {
        "serialNum": 2,
        "question": "Kirin 990”指的是平板电脑的CPU(中央处理器)，CPU由<input type='text' id='answer27-2' class='answer-input'>和控制器组成。",
        "answer": "运算器",
        "image": "",
        "score": 3,
        "explanation": ""
      },
      {
        "serialNum": 3,
        "question": "平板电脑的触摸屏既是<input type='text' id='answer27-3' class='answer-input'>又是输出设备。",
        "answer": "输入设备",
        "image": "",
        "score": 3,
        "explanation": ""
      }
    ]
  }, {
    "questionNumber": 28,
    "title": "(9分)ETC即电子不停车收费系统，是智能交通服务的信息系统，主要用于公路的自动收费。装有ETC车载装置(OBU)的车辆在通过收费站时，无须停车，通过车载装置实现车辆识别、并自动从预先绑定的IC卡或银行账户上扣除相应费用。其系统组成如下图所示。",
    "image": "img/2022C-28.JPG",
    "questions": [
      {
        "serialNum": 1,
        "question": "分析这个系统的功能与组成。车辆经过ETC收费站时，收费站采集到车辆信息，这属于信息系统的<input type='text' id='answer28-1' class='answer-input'>功能。安装于车辆上的车载装置(OBU)与安装在收费站车道上的设备以非接触的方式进行通信和信息交换，主要使用了物联网<input type='text' id='answer28-2' class='answer-input'>技术，是自动识别技术的一种。",
        "answer": [
          "输入",
          "射频识别或RFID或无线射频识别"
        ],
        "image": "",
        "score": [
          2,
          2
        ],
        "explanation": ""
      },
      {
        "serialNum": 2,
        "question": "编写ETC高速公路收费计算的模拟程序。程序实现根据输人的车辆吨位数和行驶的里程数计算费用。计价标准如下:<img src='img/2022c-28-1.jpg'>该 Python 程序代码如下所示，请完善程序实现过路费的计算，并输出相应的提示信息。<img src='img/2022c-28-2.jpg'>程序中第5行下划线处应填入<input type='text' id='answer28-3' class='answer-input'>。<br>程序中第9行下划线处应填入<input type='text' id='answer28-4' class='answer-input'>。",
        "answer": [
          "w<=2或0<w<=2或w>0 and w<=2",
          "s*0.9或0.9*s"
        ],
        "image": "",
        "score": [
          3,
          2
        ],
        "explanation": ""
      }
    ]
  }
];

const multipleChoiceQuestions = [
  {
    questionNumber: 1,
    question: "厦原率的近似值是3 14，从数据、信息和知识的角度分析，以下描述错误的是( )。",
    choices: [
      "A .孤立的看 ，3.14 仅仅是一个数据",
      "B.314是圆周率的近似值，这是信息",
      "C.用3.14乘以半径的平方来计算圆的面积，这是知识",
      "D.数据就是信息，信息积累就拥有知识"
    ],
    answer: "D.数据就是信息，信息积累就拥有知识",
    score: 2.5,
    image: "",
    explanation: ""
  }, {
    questionNumber: 2,
    question: "右图是一幅8x8 像素的黑白图像，已知该图像第一行从左向右的编码为00111100”，那么第4行的编码是()。",
    choices: [
      "A.01000010",
      "B.10100101",
      "C.01011010",
      "D.10011001"
    ],
    answer: "B.10100101",
    score: 2.5,
    image: "img/2022c-2.jpg",
    explanation: ""
  }, {
    questionNumber: 3,
    question: "莫医像颜色的 RCB(Red，Green，Blue)编码用十六进制表示为“#B97A57”，红色编码“B9”对应的十进制数是185，绿色编码“7A”对应的十进制数是122，蓝色编码“57”对应的十进制数是()。",
    choices: [
      "A. 89",
      "B.88",
      "C.87",
      "D.86"
    ],
    answer: "C.87",
    score: 2.5,
    image: "img/2022c-3.jpg",
    explanation: ""
  }, {
    questionNumber: 4,
    question: "云南亚洲象文旅PP征集活动吸引了众多创作者积极参与投稿。其中一幅未经压缩的BMP图像作品及其属性如右图所示，那么该图像的大小约为( )。",
    choices: [
      "A.0.5MB",
      "B.12MB",
      "C.72MB",
      "D.96MB"
    ],
    answer: "B.12MB",
    score: 2.5,
    image: "img/2022c-4.jpg",
    explanation: ""
  }, {
    questionNumber: 5,
    question: "以下Python程序的主体控制结构是(   )。",
    choices: [
      "A.顺序结构",
      "B.选择结构",
      "C.分支结构",
      "D.循环结构"
    ],
    answer: "D.循环结构",
    score: 2.5,
    image: "img/2022c-5.jpg",
    explanation: ""
  }, {
    questionNumber: 6,
    question: "判断一个正整数奇偶性的一般方法是:如果一个正整数x能被2整除，那么x为偶\n数，否则为奇数。其算法描述如下:<br>\n(1)输入一个正整数x;<br>\n(2)x对2求余;<br>\n(3)若余数为0，输出“偶数”，否则输出“奇数”。<br>\n把上述算法用流程图表示，流程图中①处应填人( )。",
    choices: [
      "A.x%2= =0?",
      "B.x%2!=0?",
      "C.x//2= =0?",
      "D.x//2!=0?"
    ],
    answer: "A.x%2= =0?",
    score: 2.5,
    image: "img/2022c-6.jpg",
    explanation: ""
  }, {
    questionNumber: 7,
    question: "小明学习了 Python后，定义了一个列表:listl=[7，-15，32，-10，90]，则 Python7表达式 min(listl)+abs(listl[3])的值为()。",
    choices: [
      "A. -25",
      "B. -5",
      "C.0",
      "D.17"
    ],
    answer: "B. -5",
    score: 2.5,
    image: "img/2022c-8.jpg",
    explanation: ""
  }, {
    questionNumber: 8,
    question: "分析右侧流程图，该流程图描述的算法是计算( )的值.",
    choices: [
      "A.1+2+3+4+……+100",
      "B.1-3+5-7+…-99",
      "C.2+4+6+8+……+100",
      "D.1-2+3-4+……-100"
    ],
    answer: "D.1-2+3-4+……-100",
    score: 2.5,
    image: "img/2022c-8.jpg",
    explanation: ""
  }, {
    questionNumber: 9,
    question: "关于下列Python代码，说法正确的是(   )。",
    choices: [
      "A.变量animals的数据类型是字典",
      "B.len(animals)运算结果为2",
      "C.animals的第二个元素是monkey",
      "D.上述Python代码的输出结果是False"
    ],
    answer: "D.上述Python代码的输出结果是False",
    score: 2.5,
    image: "img/2022c-9.jpg",
    explanation: ""
  }, {
    questionNumber: 10,
    question: "以下是小红编写的根据身高计算票价的程序。运行程序，输入12后，程序报错(报错提示如下)，出错的原因是( ）。",
    choices: [
      "A.用height直接和1,2比较",
      "B.第8行代码中使用了中文",
      "C.字符串类型不能直接和整型进行“+”运算，应把第8行中的money改为str(money)",
      "D.程序中使用了运算符“+”，应该把“+”改为“&”"
    ],
    answer: "C.字符串类型不能直接和整型进行“+”运算，应把第8行中的money改为str(money)",
    score: 2.5,
    image: "img/2022c-10.jpg",
    explanation: ""
  }, {
    questionNumber: 11,
    question: "一元二次方程ax*x+b*x+c=0(a≠0)根的判别式为:△=b*b-4*a*c。当△>=0时，方程有实数根，当△<0时，方程无实数根。判断一元二次方程有无实数根的Python程序如下，程序第8行下划线处应填人()",
    choices: [
      "A.d>=0",
      "B.d>0",
      "C.d=0",
      "D.d<0"
    ],
    answer: "A.d>=0",
    score: 2.5,
    image: "img/2022c-11.jpg",
    explanation: ""
  }, {
    questionNumber: 12,
    question: "下列Pthon程序用于计算0到100之间的偶数和，程序第2行下划线处应填( )。",
    choices: [
      "A.100  1",
      "B.100  2",
      "C.101  1",
      "D.101  2"
    ],
    answer: "D.101  2",
    score: 2.5,
    image: "img/2022c-12.jpg",
    explanation: ""
  }, {
    questionNumber: 13,
    question: "某兴趣小组为了严格考勤纪律，采用考勤记分制。记分原则为:“正常”记100分，“早退”或“迟到”记80分。已知某次活动的考勤登记表如下，则E3单元格中输入的函数错误的是()。",
    choices: [
      "A.=IF(D3='正常”，100，80)",
      "B.=IF(AND(D3='早退'，D3='迟到')，80，100)",
      "C.=IF(NOT(D3='正常')，80，100)",
      "D.=IF(OR(D3='早退”，D3='迟到”)，80，100)"
    ],
    answer: "B.=IF(AND(D3='早退'，D3='迟到')，80，100)",
    score: 2.5,
    image: "img/2022c-13.jpg",
    explanation: ""
  }, {
    questionNumber: 14,
    question: "智能手机通过加速度传感器、陀螺仪传感器等实现“计步”功能，可以统计用户每14.天的步数。高老师上周的运动数据图表如下图所示，描述错误的是( )。",
    choices: [
      "A.该图表类型是柱形图",
      "B.该数据获取的方式是传感器收集",
      "高老师在周六走的步数最多",
      "D.高老师在周二走的步数最少"
    ],
    answer: "D.高老师在周二走的步数最少",
    score: 2.5,
    image: "img/2022c-14.jpg",
    explanation: ""
  }, {
    questionNumber: 15,
    question: "小李利用手机 App获取了某地区7月份第1周每天的最高气温，并用Python 程序绘制了“7月份第1周最高气温变化图”。程序第9行下划线处应填入的代码\n是()。",
    choices: [
      "A. plt.plot(x,y)",
      "B. plt.bar(x,y)",
      "C. plt. barh(x,y)",
      "D. plt.xlabel('x,y')"
    ],
    answer: "A. plt.plot(x,y)",
    score: 2.5,
    image: "img/2022c-15.jpg",
    explanation: ""
  }, {
    questionNumber: 16,
    question: "“智慧校园”项目让师生的学习与生活更加方便和智能，以下不属于人工智能在“智慧校园”中应用的是()。",
    choices: [
      "A.进人校园时，测温终端快速对进入人员进行体温检测和口罩佩戴侦测",
      "B.就餐时，同学们通过面部识别，“刷脸”消费",
      "C.感应到手靠近时，洗手台水龙头自动出水",
      "D.下课了，老师说:“小沃，小沃，关机!”智慧黑板便自动关机"
    ],
    answer: "C.感应到手靠近时，洗手台水龙头自动出水",
    score: 2.5,
    image: "",
    explanation: ""
  }, {
    questionNumber: 17,
    question: "人工智能的快速发展，为医疗健康领域向更高的智能化方向发展提供了非常有利的技术条件。人工智能技术能帮助放射科医生分析CT扫描像，进行人体健康诊断。在这一过程中没有用到的技术是( )。",
    choices: [
      "A.深度学习",
      "B.大数据分析",
      "C.机器学习",
      "D.虚拟现实"
    ],
    answer: "D.虚拟现实",
    score: 2.5,
    image: "",
    explanation: ""
  }, {
    questionNumber: 18,
    question: "信息社会是一个以人为本、具有包容性和面向全面发展的社会。下列关于信息社会的说法，错误的是(  )。",
    choices: [
      "A.政府政务的公开透明会成为政府治理的新趋势",
      "B.信息经济时代更多时候拼的是体力而非脑力",
      "C.电子商务配合先进的物流系统会促进经济的发展",
      "D.信息社会的发展离不开信息的数字化"
    ],
    answer: "B.信息经济时代更多时候拼的是体力而非脑力",
    score: 2.5,
    image: "",
    explanation: ""
  }, {
    questionNumber: 19,
    question: "莱超市管理信息系统结构如下图所示，关于该信息系统说法错误的是( ）。",
    choices: [
      "A.条码扫描器、POS机属于信息系统的硬件，超市管理员、收银员属于用户",
      "B.超市管理员使用条码扫描器录入商品信息，体现了信息系统的输人功能",
      "C.超市收银员使用POS机打印账单，体现了信息系统的输入功能",
      "D.超市仓库管理员使用系统统计商品库存情况，体现了信息系统的处理控制功能"
    ],
    answer: "C.超市收银员使用POS机打印账单，体现了信息系统的输入功能",
    score: 2.5,
    image: "img/2022c-19.jpg",
    explanation: ""
  }, {
    questionNumber: 20,
    question: "Harmony0s是一款面向未来、面向全场景的分布式操作系统，能够支持手机、平板、智能穿戴等多种终端设备使用同一语言无缝沟通。下列说法错误的是(  )。",
    choices: [
      "A.移动终端、计算机，两者的操作系统、应用程序没有区别",
      "B.智能手机系统由软件系统和硬件系统组成、两者缺一不可",
      "C.软件系统分为系统软件和应用软件，HammonyOS属于系统软件",
      "D.智能手机跟计算机一样，包括CPU、存储器和输入输出设备"
    ],
    answer: "A.移动终端、计算机，两者的操作系统、应用程序没有区别",
    score: 2.5,
    image: "",
    explanation: ""
  }, {
    questionNumber: 21,
    question: "物联网技术在智能门锁领域的应用，促进了防盗安全性的技术提升。某智门领系统由智能门锁、发卡机、门卡、门锁管理软件等组成。以下关于物联网的说法错误的是( )。",
    choices: [
      "A.物联网与人工智能、大数据等没有交集",
      "B.发卡机主要用于读写门卡信息，属于物联网感知层设备",
      "C.门锁管理软件主要用于管理门锁相关设备和数据，属于物联网应用层",
      "D.物联网具有全面感知、可靠传递和智能处理等特征"
    ],
    answer: "A.物联网与人工智能、大数据等没有交集",
    score: 2.5,
    image: "",
    explanation: ""
  }, {
    questionNumber: 22,
    question: "小詹为新家设计的智能家居网络结构如下图所示，下列说法错误的是( )。",
    choices: [
      "A.无线路由器是用于不同网络间的连接设备，负责网络间的数据传递",
      "B.组建智能家居网络一般需要无线路由器、调制解调器等网络设备",
      "C.手机、笔记本等移动终端通过无线方式连接网络，不需要网卡",
      "D.平板电脑可以通过手动配置IP地址接入网络"
    ],
    answer: "C.手机、笔记本等移动终端通过无线方式连接网络，不需要网卡",
    score: 2.5,
    image: "img/2022c-22.jpg",
    explanation: ""
  }, {
    questionNumber: 23,
    question: "示列关于信息系统安全风险和防范的说法，错误的是( ）。",
    choices: [
      "A.人”是信息系统的使用者与管理者，是信息系统安全的的薄弱环节",
      "B.使用防火墙后，信息系统在使用过程中就不会存在软硬件漏洞、恶意攻击等安全隐患",
      "C.密码是一种“混淆”技术，由加密算法和解密算法组成，密码越复杂,安全性越好",
      "D.信息系统安全防范的技术方法有数据加密、生物特征识别认证、数据备等"
    ],
    answer: "B.使用防火墙后，信息系统在使用过程中就不会存在软硬件漏洞、恶意攻击等安全隐患",
    score: 2.5,
    image: "",
    explanation: ""
  }, {
    questionNumber: 24,
    question: "从信息保护和信息安全的角度来看，下列说法错误的是()",
    choices: [
      "A.经常修改信息系统的口令，以免被不法分子盗用",
      "B不要随意提供个人或亲属信息，以免信息被非法机构收集、贩卖",
      "C.收到来历不明的中奖信息，按提示要求回复手机验证码",
      "D.一旦发现个人信息被盗用，要及时制止，危害严重的，要第一时间报案"
    ],
    answer: "C.收到来历不明的中奖信息，按提示要求回复手机验证码",
    score: 2.5,
    image: "",
    explanation: ""
  },
];
