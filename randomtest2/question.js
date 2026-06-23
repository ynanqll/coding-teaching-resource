const fillInTheBlankQuestionGroups = [
  {
    indexNumber: 1,
    questionNumber: 25,
    title: "非选择题（本题有4小题，共40分，请将正确答案填写在答题卡相应的题号下）(12分)辗转相除法，又称欧几里德算法，用于计算两个正整数m、n的最大公约数。它是已知最古老的算法，其可迫测至公元前300年前。辗转相除法的算法步骤是，对于给定的两个正整数m,n(m>n),用m除以n得到余数r。若余数r不为0,就将n和r构成新的一对数(m=n,n=r),继续上面的除法，直到余数r为0,这时m就是原来两个数的最大公约数。因为这个算法需要反复进行除法运算，故被形象地命名为“辗转相除法”。小曲设计了辗转相除法的算法，如下表所示，请根据下面算法回答问题。",
    image: "img/1-25.jpg",
    questions: [
      {
        question: "描述一是<input type='text' id='answer25-1' class='answer-input'>描述法；描述二是流程图描述法；描述三是计算机程序语言描述法。",
        answer: "自然语言",
        image: "",
        score: 4,
        explanation: ""
      },
      {
        question: "在描述三中代码4到6行作用是<input type='text' id='answer25-2' class='answer-input'>",
        answer: "交换m和n的值或交换n和m的值",
        image: "",
        score: 4,
        explanation: ""
      },
      {
        question: "在描述三程序设计中，补充代码第8行划线处为<input type='text' id='answer25-3' class='answer-input'>",
        answer: "r!=0或n!=0",
        image: "",
        score: 4,
        explanation: ""
      }
    ]
  },
  {
    indexNumber: 2,
    questionNumber: 26,
    title: "(10分)学校气象小组使用自动测温仪在校园测量了1月12日的气温，并利用Python绘制了这天的气温图，该图如下所示：",
    image: "img/1-26.jpg",
    questions: [
      {
        question: "在以上Python程序中。变量Y的数据类型是<input type='text' id='answer26-1' class='answer-input'>",
        answer: "列表或list",
        image: "",
        score: 4,
        explanation: ""
      },
      {
        question: "在以上Python程序中，第8行横线处的代码是<input type='text' id='answer26-2' class='answer-input'>",
        answer: "plt.plot(X,Y)",
        image: "",
        score: 4,
        explanation: ""
      },
      {
        question: "通过观察，气温采样间隔时间是个小时<input type='text' id='answer26-3' class='answer-input'>",
        answer: "2",
        image: "",
        score: 2,
        explanation: ""
      }
    ]
  },
  {
    indexNumber: 3,
    questionNumber: 27,
    title: "(9分)学校机房新配置了一台教师机和50台学生机。现在，张老师要将它们先组建成一个局域网后再连人校园网。请回答以下问题。",
    image: "",
    questions: [
      {
        question: "张老师将机房的各台计算机设置完毕后，发现其中一台计算机无法用网址访问校园网，但可以用IP地址正常访问。这时，张老师应该重新设置这台计算机的<input type='text' id='answer27-1' class='answer-input'>,以便于正确解析域名和IP地址。",
        answer: "DNS",
        image: "",
        score: 3,
        explanation: ""
      },
      {
        question: "张老师将机房里的教师机IP地址设置为192.10.55.28,子网掩码设置为255.255.255.0,请问IP地址中代表主机的部分是<input type='text' id='answer27-2' class='answer-input'>",
        answer: "28",
        image: "",
        score: 3,
        explanation: ""
      },
      {
        question: "校园网与因特网之间接入了一个防火墙，防火墙的作用是<input type='text' id='answer27-3' class='answer-input'>",
        answer: "将内网和公共网分开,在校园网与因特网之间建立起一道安全屏障",
        image: "",
        score: 3,
        explanation: ""
      }
    ]
  },
  {
    indexNumber: 4,
    questionNumber: 28,
    title: "(9分)小曲工作第一年，想在父亲生日时送一台笔记本当作生日礼物，她在网上商城换选购买，对比了以下四种型号电脑，请根据下面电脑的参数及性能进行分析",
    image: "img/1-27.jpg",
    questions: [
      {
        question: "从四台计算机运算性能分析，时钟频率最高，运算速度快的计算机是<input type='text' id='answer28-1' class='answer-input'>",
        answer: "电脑2或惠普暗影精灵6",
        image: "",
        score: 3,
        explanation: ""
      },
      {
        question: "小曲父亲从事商务销售工作，经常出差处理事务，从电脑轻便、尺寸较小、携带方便以及便于移动办公的角度，小曲可以选择<input type='text' id='answer28-2' class='answer-input'>，和<input type='text' id='answer28-3' class='answer-input'>",
        answer: ["电脑1或联想小新Pro13", "电脑4或HUAWEI MateBook14"],
        image: "",
        score: [3, 3],
        explanation: ""
      },
    ]
  }, {
    indexNumber: 5,
    questionNumber: 25,
    title: "非选择题（本题有4小题，共40分，请将正确答案填写在答题卡相应的题号下）(8分)小曲编写了一个猜数游戏，电脑会随机生成一个整数 number，然后用户输入猜测数字 guess，程序对生成数number 和猜测数 guess 进行比较，直到相等为止。对上述问题可以建立模型如下:",
    image: "img/2-25.jpg",
    questions: [
      {
        question: "第7行代码的作用是<input type='text' id='answer25-1' class='answer-input'>",
        answer: "随机生成一个0到100之间的整数赋值给number",
        image: "",
        score: 4,
        explanation: ""
      },
      {
        question: "补充完善第15 行划线处的代码为<input type='text' id='answer25-2' class='answer-input'>",
        answer: "elif guess>number:",
        image: "",
        score: 4,
        explanation: ""
      },
    ]
  },
  {
    indexNumber: 6,
    questionNumber: 26,
    title: "(14分)学校高一年级办了“诗词挑战赛”，比赛分为必答题和抢答题两种，6个班分别有一名同学参加，比赛的所有结果如下:",
    image: "img/2-26.jpg",
    questions: [
      {
        question: "根据比赛规则，必答题答对得3分，答错扣1分，抢答题答对得5分，答错扣2分。则在“积分”这列中的单元格 G4 的公式是<input type='text' id='answer26-1' class='answer-input'>",
        answer: "=C4*3-D4*1+E4*5-F4*2",
        image: "",
        score: 4,
        explanation: ""
      },
      {
        question: "根据选手的积分，可以通过 RANK 函数进行排名，并能通过自动填充得到其他选手的排名，则在单元格 H4 应该输入<input type='text' id='answer26-2' class='answer-input'>",
        answer: "=RANK(G4,G$4:G$9)",
        image: "",
        score: 4,
        explanation: ""
      },
      {
        question: "如果想要直观地呈现每名选手的积分情况，则可以应用以下哪种图表进行表示<input type='text' id='answer26-3' class='answer-input'>，(A.柱形图;B.折线图;C.雷达图);这种分析方法属于<input type='text' id='answer26-4' class='answer-input'>",
        answer: ["A", "对比分析法"],
        image: "",
        score: [2, 4],
        explanation: ""
      },
    ]
  },
  {
    indexNumber: 7,
    questionNumber: 27,
    title: "(12 分)下图是小曲家的网络结构拓扑图，请根据下面结构图分析回答问题。",
    image: "img/2-27.jpg",
    questions: [
      {
        question: "图示中的网络设备<input type='text' id='answer27-1' class='answer-input'>,是用来转换模拟和数字两种不同的信号;图示中的网络设备<input type='text' id='answer27-2' class='answer-input'>,是用来连接两个或多个网络的硬件设备，在网络间起网关的作用，并读取每一个数据包中的地址然后决定如何传送的网络设备。",
        answer: ["调制解调", "路由器"],
        image: "",
        score: [3, 3],
        explanation: ""
      },
      {
        question: "图示中有 WAN 口和 LAN 口，WAN 是广域网的缩写，LAN 是<input type='text' id='answer27-3' class='answer-input'>",
        answer: "局域网",
        image: "",
        score: 3,
        explanation: ""
      },
      {
        question: "使用有线传输介质接人台式机的网线，因为其结构特点，我们也把它叫作<input type='text' id='answer27-4' class='answer-input'>，这种结构相互缠绕而成，有效降低信号干扰的程度。",
        answer: "双绞线",
        image: "",
        score: 3,
        explanation: ""
      }
    ]
  },
  {
    indexNumber: 8,
    questionNumber: 28,
    title: "(6分)小张使用了一些智能设备把自己的屋子改造成了一个“聪明”的家，如右图所示，当她踏进家门，客厅音响会说“欢迎回家”，当她走进卧室，卧室的灯会自动亮起，她还能远程操作电饭煲煮饭等。请回答以下问题。",
    image: "img/2-28.jpg",
    questions: [
      {
        question: "小张把自己的家改造得如此智能，主要体现了信息社会的<input type='text' id='answer28-1' class='answer-input'>特征(选填“信息经济”“网络社会”“在线政府”“数字生活”)。",
        answer: "数字生活",
        image: "",
        score: 2,
        explanation: ""
      },
      {
        question: "在“环境”选项里可以看到数据显示20℃，这一数据一般是通过<input type='text' id='answer28-2' class='answer-input'>传感器获主卧传取后上传到 App 中的。",
        answer: "温度传感器或湿度传感器",
        image: "img/2-28-2.jpg",
        score: 2,
        explanation: ""
      },
      {
        question: "小张还在卧室里放置了湿度传感器，测量结果会及时反馈到她的手机上，显示结果如下图所示。如果利用 Python 编写程序来实现显示湿度传感器获取数据的结果，那么在程序第2行划线处应该填人<input type='text' id='answer28-3' class='answer-input'>",
        answer: "if humidity< =20:或if humidity<20:",
        image: "img/2-28-3.jpg",
        score: 2,
        explanation: ""
      },
    ]
  },
  {
    indexNumber: 9,
    questionNumber: 25,
    title: "非选择题(本题有4小题，共40分，请将正确答案填写在答题卡相应的题号下)(12分)小曲在学习利用Python turtle库绘制图形时，先学习绘制了一个正方形(如图1)，然后修改代码绘制了一个正六边形，最后提取特征让用户输入n，绘制正n边形(如图2)。请根据下列程序回答下面问题。",
    image: "img/3-25.jpg",
    questions: [
      {
        question: "在图1绘制正方形的基础上，修改代码绘制正六边形，需要修改两个地方，一是修改第4行代码循环重复6次，改为:for a in range(6):，二是修改第6行代码，改为<input type='text' id='answer25-1' class='answer-input'>",
        answer: "turtle.left(60)或者turtle.right(60)",
        image: "",
        score: 4,
        explanation: ""
      },
      {
        question: "在图2程序中补充代码，完善绘制正n边形的程序。第5行处划线处的代码为<input type='text' id='answer25-2' class='answer-input'>，第7行划线处的代码为<input type='text' id='answer25-3' class='answer-input'>",
        answer: ['for a in range(n)', '360/n'],
        image: "",
        score: [
          4,
          4
        ],
        explanation: ""
      }
    ]
  },
  {
    indexNumber: 10,
    questionNumber: 26,
    title: "(10分)某公司财务部颁布了上班考勤新规定:部门人员每周有10分考勤基础分,迟到一天扣1分，请假一天扣2分。下图为一周的考勤记录:",
    image: "img/3-26.jpg",
    questions: [
      {
        question: "该部门的001号郑静迟到天数通过函数“=COUNTIF(C3:C3,'迟到')”自动计算，则002号许荣思的请假天数一栏用该函数可写为<input type='text' id='answer26-1' class='answer-input'>",
        answer: "=COUNTIF(C4:G4,'请假')",
        image: "",
        score: 4,
        explanation: ""
      },
      {
        question: "通过公式计算001号郑静的考勤分，并能够实现自动填充得到其他人的考勤分，则单元格J3可以写为<input type='text' id='answer26-2' class='answer-input'>",
        answer: "=10-H3-3*2",
        image: "",
        score: 4,
        explanation: ""
      },
      {
        question: "将上表的数据复制到其他表中，但不想连同函数、公式一起复制，比较恰当的方式是<input type='text' id='answer26-3' class='answer-input'>(A、在新表中手动输人:B.选择性粘贴为数值:C.选择性粘贴为图片)",
        answer: "B",
        image: "",
        score: 2,
        explanation: ""
      }
    ]
  },
  {
    indexNumber: 11,
    questionNumber: 27,
    title: "(12分)小曲在学习了信息系统相互联网关知识后，在家构建了如下的智能花卉养护系统，能从光照、温度、家庭局域网湿度和肥力等多个角度，监测花卉的种植环境数据，依托物联网，将数据传入互联网的云端进行数据对比分析，再通过智能手机中的相应App将花卉种植养护提示给用户如右图所示，同时也可以监测相关数据实现智能自动浇水功能。",
    image: "img/3-27.jpg",
    questions: [
      {
        question: "智能花卉养护系统中，从整个物联网的结构来分析，监测数据的传感器属于物联网系统的<input type='text' id='answer27-1' class='answer-input'>，通过相关网络设备及网络设置接入互联网属于物联网的网络层，通过App进行云端数据分析属于物联网的<input type='text' id='answer27-2' class='answer-input'>。",
        answer: ['感知层', '应用层'],
        image: "",
        score: [
          3,
          3
        ],
        explanation: ""
      },
      {
        question: "要实现自动浇花，需要通过<input type='text' id='answer27-3' class='answer-input'>检测土壤的湿度数据，输人控制器,以便于控制器根据具体情况作出相应的指令。",
        answer: "湿度传感器",
        image: "",
        score: 3,
        explanation: ""
      },
      {
        question: "在整个智能花卉养护系统中，用于监测花卉的传感器属于这个系统的硬件，App 属于这个系统的软件，管理员、用户、种植花卉的人属于这个系统的用户，网关、局域网以及互联网等属于这个系统的通信网络，光照情况、温度值、湿度值、肥力情况以及养护建议属于这个系统的<input type='text' id='answer27-4' class='answer-input'>",
        answer: "数据",
        image: "",
        score: 3,
        explanation: ""
      }
    ]
  },
  {
    indexNumber: 12,
    questionNumber: 28,
    title: "(6 分)ATM 取款机是我们生活中常见的可提取现金、査询存款余额、进行转账等工作的信息系统，请结合所学知识回答下面问题。",
    image: "img/3-28.jpg",
    questions: [
      {
        question: "从信息系统的功能角度进行分析，用户输人账号、密码属于系统的输人功能，根据输入的账号和密码系统判断是否正确来决定能否可以取款，属于系统的<input type='text' id='answer28-1' class='answer-input'>功能。",
        answer: "处理控制",
        image: "",
        score: 2,
        explanation: ""
      },
      {
        question: "如果账号和密码正确，则让用户输人取款金额，并根据账户余额来决定是否取款。如果账户余额不足，则提示用户余额不足;如果取款成功，则显示余额。根据上述功能描述，小曲设计了模拟 ATM 取款机的 Python 程序。在以上程序中，第12 行划线处应填入<input type='text' id='answer28-2' class='answer-input'>；在以上程序中，第 22 行划线处应填人<input type='text' id='answer28-3' class='answer-input'>。",
        answer: ['balance-=amount或balance=balance-amount', 'break'],
        image: "",
        score: [
          2,
          2
        ],
        explanation: ""
      },
    ]
  },
  {
    indexNumber: 13,
    questionNumber: 25,
    title: "非选择题(本题有4小题，共40分，请将正确答案填写在答题卡相应的题号下)(12分)小曲在学习了计算机进制转化和 Python 程序设计之后，编写一个程序实现从十进制整数转化为二进制整数。小曲的做法是，对二辗转取余，最后倒序排列。将一个十进制数除以二，得到的商再除以二，依此类推直到商等于零时为止，倒取余数，即换算为二进制数的结果。以下是小曲的程序，请根据程序回答下面问题。",
    image: "img/4-25.jpg",
    questions: [
      {
        question: "当用户输入十进制整数23，转化为二进制数为<input type='text' id='answer25-1' class='answer-input'>。",
        answer: "10111",
        image: "",
        score: 4,
        explanation: ""
      },
      {
        question: "程序中的方法int( )作用是将数据转化为整数，方法str( )作用是<input type='text' id='answer25-2' class='answer-input'>。",
        answer: "将数据转化为字符型",
        image: "",
        score: 4,
        explanation: ""
      },
      {
        question: "程序代码中的5至7行代码的作用是<input type='text' id='answer25-3' class='answer-input'>。",
        answer: "当n对2商等于零时,将此时的n添加到字符b中,然后退出循环",
        image: "",
        score: 4,
        explanation: ""
      }
    ]
  },
  {
    indexNumber: 14,
    questionNumber: 26,
    title: "(9分)学校开展研究性学习，某小组对高一年级学生上学方式进行了探究，下图是\n对统计结果的图表展示。",
    image: "img/4-26.jpg",
    questions: [
      {
        question: "小组是通过网络问卷的方式收集同学们的信息，则这种数据采集方式属于<input type='text' id='answer26-1' class='answer-input'>。",
        answer: "网络数据采集法",
        image: "",
        score: 3,
        explanation: ""
      },
      {
        question: "对统计结果进行此种图表展示的数据分析方法属于<input type='text' id='answer26-2' class='answer-input'>。",
        answer: "对比分析法",
        image: "",
        score: 3,
        explanation: ""
      },
      {
        question: "下列说法正确的是(多选)<input type='text' id='answer26-3' class='answer-input'>。",
        answer: "①②③",
        image: "img/4-263.jpg",
        score: 3,
        explanation: ""
      }
    ]
  },
  {
    indexNumber: 15,
    questionNumber: 27,
    title: "(12分)小明爷爷年龄大了，每次起夜上厕所，总是不能方便找到按钮开灯，在学习了信息系统相关知识后，小明尝试根据爷爷的房间布局和作息习惯设计夜晚感应灯，方便爷爷生活。",
    image: "img/4-27.jpg",
    questions: [
      {
        question: "小明根据爷爷生活场景将夜晚感应灯的功能定位为:功能一是白天不亮，夜晚感应;功能二是人动灯亮，人停灯灭。要实现功能一，需要使用<input type='text' id='answer27-1' class='answer-input'>传感器。要实现功能二，小明在查询资料后了解到可以使用人体感应传感器，检测是否有人经过，当无人在其检测范围内运动时，模块保持输出0:当有人在其检测范围内运动时，模块输出1。",
        answer: "光线",
        image: "",
        score: 3,
        explanation: ""
      },
      {
        question: "在进行信息系统设计时，小明先做了一个初级模型，如上图所示，在这个系统中获取数据的是光线传感器和<input type='text' id='answer27-2' class='answer-input'>，控制处理的是Arduino，输出的是LED 灯。",
        answer: "人体传感器",
        image: "",
        score: 3,
        explanation: ""
      },
      {
        question: "在硬件连接之后，小明尝试设计程序解决问题，下图是他设计的算法流程图。假设夜晚光线值为0~20(包括20)，白天光线值为20~100，有人经过时人体感应灯的值为1，没有人经过时值为0。则在下面流程图中①标记处应该填写<input type='text' id='answer27-3' class='answer-input'>；②)标记处应该填写<input type='text' id='answer27-4' class='answer-input'>。",
        answer: ['guang< =20 and pir ==1', '控制LED灯亮'],
        image: "img/4-272.jpg",
        score: [
          3,
          3
        ],
        explanation: ""
      }
    ]
  },
  {
    indexNumber: 16,
    questionNumber: 28,
    title: "(7分)某工厂购人100千克原材料，每4千克原材料可以生产一件A产品，每5千克原材料可以生产一件B产品。编程计算恰好用尽这些原材料时，生产A产品和B产品数量的各种可能，并输出各种组合。",
    image: "img/4-28.jpg",
    questions: [
      {
        question: "小曲根据上述问题设计了下面两种算法，请根据下面两种算法分析:算法1编程实现采用的方法是<input type='text' id='answer28-1' class='answer-input'>，循环次数n为546次;算法2编程实现采用的方法是枚举法和解析法，循环次数n为26次。算法2的运行时间少于算法1的运行时间，算法2的效率高于算法1。",
        answer: "枚举法",
        image: "",
        score: 3,
        explanation: ""
      },
      {
        question: "算法1中第8行代码的作用是<input type='text' id='answer28-2' class='answer-input'>。",
        answer: "将满足条件的A产品数量和B产品数量组成元组并添加到列表a中",
        image: "",
        score: 4,
        explanation: ""
      },
    ]
  },
  {
    indexNumber: 17,
    questionNumber: 25,
    title: "（12分）十八位居民身份证号码由六位数字地址码、八位数字出生日期码、三位数字顺序码和一位校验码组成（其中倒数第二位是性别代码，男奇数女偶数），其格式如下：",
    image: "img/5-25.png",
    questions: [
      {
        question: "在以上pthon程序中，变量id的数据类型是<input type='text' id='answer25-1' class='answer-input'>，len(id)的作用是<input type='text' id='answer25-2' class='answer-input'>",
        answer: ["字符型", "计算字符id的长度"],
        image: "",
        score: [3, 3],
        explanation: ""
      },
      {
        question: "在以上Python程序中，第3行划线处代码应该为<input type='text' id='answer25-3' class='answer-input'>，第4行划线处代码应该为<input type='text' id='answer25-4' class='answer-input'>",
        answer: ["id[6:10]", "2022-int(id[6:10])"],
        image: "",
        score: [3, 3],
        explanation: ""
      }
    ]
  },
  {
    indexNumber: 18,
    questionNumber: 26,
    title: "（12分）数学学习小组在绘制函数y=x+x-2的图像，他们选择的方式是利用Python编程进行绘图，图像和程序代码如下图所示：",
    image: "img/5-26.png",
    questions: [
      {
        question: "完善程序代码才能画出函数图像，上图程序第6行横线处应该填写<input type='text' id='answer26-1' class='answer-input'>",
        answer: "plt.plot(x,y)",
        image: "",
        score: 4,
        explanation: ""
      },
      {
        question: "pyplot库常用来绘图，该库是<input type='text' id='answer26-2' class='answer-input'>的子库。",
        answer: "matplotlib库",
        image: "",
        score: 4,
        explanation: ""
      },
      {
        question: "上图程序第3行注释可写为<input type='text' id='answer26-3' class='answer-input'>。",
        answer: "#导入numpy库别名为np",
        image: "",
        score: 4,
        explanation: ""
      }
    ]
  },
  {
    indexNumber: 19,
    questionNumber: 27,
    title: "（8分）小明和小兰都各有8张卡片，每张卡片表示一个不同职业的人。如下图所示:<img src='img/5-27.png'>,他们用这些卡片来玩“猜猜这是谁”游戏。小明藏起来一张自己的卡片，而小兰必须通过几个问题猜出隐藏牌上的职业。小兰一次只能问一个问题，并且小明只能回答“是”或“否”<img src='img/5-27-1.png'>。",
    image: "",
    questions: [
      {
        question: "小兰想要通过上图这样的图表来找到被隐藏的卡片。将卡片放到到图中正确的位置，从左到右ABCDEF分别是<input type='text' id='answer27-1' class='answer-input'>职业。",
        answer: "C",
        image: "img/5-27-2.png",
        score: 2,
        explanation: ""
      },
      {
        question: "对上图进行二进制编码，对“是”用1编码,“否”用0编码，则 A人物职业的编码为111，D人物职业的编码为<input type='text' id='answer27-2' class='answer-input'>;E人物职业的编码为<input type='text' id='answer27-3' class='answer-input'>。",
        answer: ["100", "001"],
        image: "",
        score: [2, 2],
        explanation: ""
      },
      {
        question: "上面用3位二进制总共可以编码8种职业。中国有句老话叫“三百六十行，行行出状元”。《中华人民共和国职业分类大典》把我国职业划分为由大到小、由粗到细的四个层次:大类(8个)、中类(66个)、小类(413个)、细类(1838个)，如果要将“细类”都编码成二进制，至少需要采用<input type='text' id='answer27-4' class='answer-input'>位二进制。",
        answer: "11",
        image: "",
        score: 2,
        explanation: ""
      }
    ]
  },
  {
    indexNumber: 20,
    questionNumber: 28,
    title: "（8分）下图为计算机硬件系统的组成与工作原理，请根据计算机系统的相关知识回 答下列问题。",
    image: "img/5-28.png",
    questions: [
      {
        question: "图中所示的①为<input type='text' id='answer28-1' class='answer-input'>，负责计算机算术和逻辑运算；②为<input type='text' id='answer28-2' class='answer-input'>负责将计算机的运算结果或中间结果打印或显示出来。",
        answer: ["运算器", "输出设备"],
        image: "",
        score: [2, 2],
        explanation: ""
      },
      {
        question: "存储器分为内存和外存，一般情况下内存比外存的速度<input type='text' id='answer28-3' class='answer-input'>，外存比内存的容量<input type='text' id='answer28-4' class='answer-input'>。",
        answer: ["快", "大"],
        image: "",
        score: [2, 2],
        explanation: ""
      }
    ]
  }, {
    indexNumber: 21,
    questionNumber: 25,
    title: "(10分)大江东去浪淘尽，千古风流人物;而立之年督东吴，早逝英年两位数;十比个位正小三，个位六倍与寿符;多少年寿属周瑜?诗的意思是:周瑜病逝时的年龄是一个大于30的两位数，其十位数上的数字比个位上的数字小3，个位上的数字的6倍正好等于这个两位数，求这个两位数。",
    image: "img/6-25.png",
    questions: [
      {
        question: "①处应该填写<input type='text' id='answer25-1' class='answer-input'>",
        answer: "y*6==x*10+y或x*10+y==y*6",
        image: "",
        score: 4,
        explanation: ""
      },
      {
        question: "该程序采用的算法是<input type='text' id='answer25-2' class='answer-input'>",
        answer: "枚举法或穷举法或列举法",
        image: "",
        score: 3,
        explanation: ""
      },
      {
        question: "该程序中嵌套循环一共执行了<input type='text' id='answer25-3' class='answer-input'>次。",
        answer: "90",
        image: "",
        score: 3,
        explanation: ""
      }
    ]
  },
  {
    indexNumber: 22,
    questionNumber: 26,
    title: "(12分)利用Python 编程处理数据的时候，经常会用到pandas库，其中一维数据结构是Series，二维结构是DataFrame。下列程序通过Series结构存储了3名学生的体重",
    image: "img/6-26.png",
    questions: [
      {
        question: "根据给出的 Python代码，运行结果是<input type='text' id='answer26-1' class='answer-input'>。",
        answer: "62",
        image: "",
        score: 4,
        explanation: ""
      },
      {
        question: "如果要修改学生 s3的体重为65，则需要添加代码:<input type='text' id='answer26-2' class='answer-input'>。",
        answer: "stu['s3']=65",
        image: "",
        score: 4,
        explanation: ""
      },
      {
        question: "以上程序的第1行代码添加注释:<input type='text' id='answer26-3' class='answer-input'>。",
        answer: "#导入pandas库别名为pd",
        image: "",
        score: 4,
        explanation: ""
      }
    ]
  },
  {
    indexNumber: 23,
    questionNumber: 27,
    title: "（(9分)小曲在学习人工智能的知识时，编写了下面一个西数，请结合所学知识回答下面的问题。",
    image: "img/6-27.png",
    questions: [
      {
        question: "调用函数AND(0,0)，输出的值为0;调用函数AND(1,0)，输出的值为0;调用函数AND(0，1)，输出的值为<input type='text' id='answer27-1' class='answer-input'>;调用函数AND(1，1)，输出的值为<input type='text' id='answer27-2' class='answer-input'>;所以上述的AND函数实现的是Python 逻辑运算中的<input type='text' id='answer27-3' class='answer-input'>运算。",
        answer: ["0", "1", "与"],
        image: "",
        score: [1, 1, 1],
        explanation: ""
      },
      {
        question: "要实现Python 逻辑运算中“或运算”功能，下面Python 程序中第4行下划线处应填<input type='text' id='answer27-4' class='answer-input'>。(选填“tmp<=0.4”“tmp<=0.5”“tmp<=0.6”“tmp<=0.7”)",
        answer: "tmp<=0.4",
        image: "img/6-27-1.png",
        score: 3,
        explanation: ""
      },
      {
        question: "上述程序范例是人工智能中的感知机，这是一个二分类器，能够根据输人的特征将数据划分为两个类别。但是单层感知机分类能力有限，随着人工智能的发展，出现了下面结构的分类器，可以自动从数据中学习到合适的权重参数。该结构在人工智能中称为<input type='text' id='answer27-5' class='answer-input'>，最左边的一列称为输人层，最右边的一列称为输出层，中间的能中称为一列称为隐藏层。",
        answer: "神经网络",
        image: "img/6-27-2.png",
        score: 3,
        explanation: ""
      }
    ]
  },
  {
    indexNumber: 24,
    questionNumber: 28,
    title: "(9分)如下图所示，小明学校的校园网络拓扑结构如下所示。",
    image: "img/6-28.png",
    questions: [
      {
        question: "小明电脑通过宿舍内的无线AP接人网络，用QQ与省外同学小江进行视频聊天等网络设备。聊天的数据在小明校园网中会经过无线AP、核心交换机、<input type='text' id='answer28-1' class='answer-input'>和<input type='text' id='answer28-2' class='answer-input'>等网络设备。",
        answer: ["路由器", "防火墙"],
        image: "",
        score: [3, 3],
        explanation: ""
      },
      {
        question: "小明每次考试之后，通过学校网址访问“学生信息管理系统”，无须下载软件即可查看每一门科目成绩。请问学校“学生信息管理系统”的软件架构是采用<input type='text' id='answer28-3' class='answer-input'>模式。",
        answer: "B/S或浏览器/服务器或Browser/Server",
        image: "",
        score: 3,
        explanation: ""
      }
    ]
  },
  {
    indexNumber:25,
    questionNumber:25,
    title: "(12分)某公司制定了上班考勤规则:员工每周考勤满分为10分，请假一次扣2分，迟到一次扣1.5分。下图为“XX公司6月份第二周考勤记录表”和“各部门6月份第二周考勤统计表”。",
    image: "img/7-25.png",
    questions: [
      {
        question: "根据该公司的考勤规则，利用公式计算出001号李娟的考勤分，则单元格K3中正确的计算公式为<input type='text' id='answer25-1' class='answer-input'>",
        answer: "=10-I3*2-J3*1.5或=10-J3*1.5-I3*1.2或=10-(I3*2+J3*1.5）或=10-（J3*1.5+I3*2）",
        image: "",
        score: 4,
        explanation: ""
      },
      {
        question: "O3单元格中“销售部”部门的迟到人次是通过函数“=SUMIF(C3:C210，M3,J3:J210)”统计得出，如果要通过自动填充功能得到其他部门的迟到人次，则O3单元格的函数应该修改为<input type='text' id='answer25-2' class='answer-input'>",
        answer: "=SUMIF(C$3:C$210,M3,J$3:J$210)或=SUMIF($C$3:$C$210,M3,$J$3:$J$210)",
        image: "",
        score: 4,
        explanation: ""
      },
      {
        question: "根据“各部门6月份第二周考勤统计表”制作出“各部门6月份第二周请假人次统计图”如下页，那么6月份第二周该公司请假人次最多的部门是<input type='text' id='answer25-3' class='answer-input'>。",
        answer: "后勤处",
        image: "img/7-25-1.png",
        score: 4,
        explanation: ""
      }
    ]
  },
  {
    indexNumber:26,
    questionNumber:26,
    title: "(12分)某快递公司为计算快递运费编写了Python程序，当用户输人快递重量(单位是千克)后，根据快递公司的收费标准，计算出快递运费。快递公司的具体收费标准如下表所示:",
    image: "img/7-26.png",
    questions: [
      {
        question: "程序第3行中float 函数的功能是<input type='text' id='answer26-1' class='answer-input'>。",
        answer: "把输入的数据转换为浮点型或把输入的数据转换为浮点数或把输入的数据转换为小数",
        image: "",
        score: 4,
        explanation: ""
      },
      {
        question: "程序中第6行下划线处应填入:<input type='text' id='answer26-2' class='answer-input'>。",
        answer: "weight<=3或weight>1 and weight<=3或1<weight<=3",
        image: "",
        score: 4,
        explanation: ""
      },
      {
        question: "程序中第8行下划线处应填入<input type='text' id='answer26-3' class='answer-input'>。",
        answer: "weight<=5或weight>3 and weight<=5或3<weight<=5",
        image: "",
        score: 4,
        explanation: ""
      }
    ]
  },
  {
    indexNumber:27,
    questionNumber:27,
    title: "(9分)小曲打算为新家构建智能家居网络，以提升家居安全性、便利性和舒适性他家所在的小区住户均采用电信提供的拨号上网方式接入因特网。在学习了计算机网络系统知识后，他为智能家居网络进行规划和搭建，如下页图所示，认真观察下图并回答问题。",
    image: "img/7-27.png",
    questions: [
      {
        question: "图中设备①的名称是<input type='text' id='answer27-1' class='answer-input'>,该设备用来实现模拟信号和数字信号的相互转换。",
        answer: "光调制解调器或调制解调器或光猫或猫或Modem",
        image: "",
        score: 3,
        explanation: ""
      },
      {
        question: "无线路由器上有WAN口和LAN口，设备①连接无线路由器上的<input type='text' id='answer27-2' class='answer-input'>口，台式电脑连接无线路由器上的LAN 口。",
        answer: "wan或WAN",
        image: "",
        score: 3,
        explanation: ""
      },
      {
        question: "上图中手机、笔记本电脑、智能音响等移动终端是通过<input type='text' id='answer27-3' class='answer-input'>方式接入因特网。(选填“有线”或“无线”)",
        answer: "无线",
        image: "",
        score: 3,
        explanation: ""
      }
    ]
  },
  {
    indexNumber:28,
    questionNumber:28,
    title: "(7分)用智能电饭煲烧饭时，在微处理器的控制下，当饭烧熟时，智能电饭煲会自动停止高热烧饭，转为低热保温。这是因为锅底的温度传感器每隔一定时间(比如200毫秒)会将温度数据传送给微处理器，如果温度低于103℃，则继续高热烧饭，一旦发现温度达到103℃(包含103℃，此时锅中水被蒸发完)，微处理器就会控制继电器释放触点，让电饭煲停止烧饭，转入低热保温模式。根据以上描述回答下列问题:",
    image: "img/7-28.png",
    questions: [
      {
        question: "右图所示的流程图描述了某个时刻智能电饭煲根据输入的温度数据进行判断、处理的算法，则在流程图中①标记处应该填写<input type='text' id='answer28-1' class='answer-input'>。",
        answer: "X<103或X<103℃或X小于103或X<103?或锅底温度小于103摄氏度",
        image: "",
        score: 3,
        explanation: ""
      },
      {
        question: "在这个系统中温度传感器所起的作用是<input type='text' id='answer28-2' class='answer-input'>。",
        answer: "用于检测锅底温度，能将锅底温度转换成电信号并输出或用于检测锅底温度",
        image: "",
        score: 3,
        explanation: ""
      }
    ]
  },
  {
    indexNumber:29,
    questionNumber:25,
    title: "(9分)高一年级举办“消防安全知识竞赛”活动，规则如下:①竞赛题目分为必答题和选答题，必答题答对一题加3分，答错不扣分，选答题答对一题加4分，答错一题扣4分，以此计算选手竞赛成绩;②各班选拔三名选手参加竞赛，以他们竞赛成绩的总和作为各班的最终得分。下图为“高一年级‘网上消防安全知识竞赛’成绩表”和“各班最终得分统计表”: ",
    image: "img/8-25.png",
    questions: [
      {
        question: "根据规则，利用公式计算出2班G122号冯泰的竞赛成绩，则单元格 H4中正确的计算公式为<input type='text' id='answer25-1' class='answer-input'>，再通过自动填充功能可以得到其他选手的竞赛成绩。",
        answer: "=D4*3+F4*4-G4*4或=D4*3+(F4-G4)*4",
        image: "",
        score: 3,
        explanation: ""
      },
      {
        question: "根据规则，K4单元格中1班的最终得分通过函数“=SUMIF(A4:A30，J4，H4:H30)”计算得出，如果要通过自动填充得到其他班的最终得分，则K4单元格的函数应该修改为<input type='text' id='answer25-2' class='answer-input'>。",
        answer: "=SUMIF(A$4:A$30,J4,H$4:H$30)或=SUMIF($A$4:$A$30,J4,$H$4:$H$30)",
        image: "",
        score: 3,
        explanation: ""
      },
      {
        question: "根据“各班最终得分统计表”制作出的“高一年级'消防安全知识竞赛’班级得分统计图”，从下图可以分析出，得分最高的班级是<input type='text' id='answer25-3' class='answer-input'>。",
        answer: "4班",
        image: "img/8-25-1.png",
        score: 3,
        explanation: ""
      }
    ]
  },
  {
    indexNumber:30,
    questionNumber:26,
    title: "(12分)BMI(体重指数)是国际上常用的衡量健康程度的一个重要标准，其计算方法是:体重(单位:k8)除以身高(单位:m)的平方。高一男生BMI数值对应的等级，如下表所示，张老师根据该表，编写了Python程序实现:输入身高和体重，计算 BMI的值并判断 BMI等级。",
    image: "img/8-26.png",
    questions: [
      {
        question: "程序第4行下划线处应填人<input type='text' id='answer26-1' class='answer-input'>。",
        answer: "weight/height**2或weight/(height*height)",
        image: "",
        score: 4,
        explanation: ""
      },
      {
        question: "程序第7行下划线处应填人<input type='text' id='answer26-2' class='answer-input'>。",
        answer: "BMI<=16.4或BMI<16.4 or BMI=16.4",
        image: "",
        score: 4,
        explanation: ""
      },
      {
        question: "程序第11行下划线处应填入<input type='text' id='answer26-3' class='answer-input'>。",
        answer: "BMI<=26.3或23.2<BMI<=26.3或BMI>23.2 and BMI<=26.3",
        image: "",
        score: 4,
        explanation: ""
      }
    ]
  },
  {
    indexNumber:31,
    questionNumber:27,
    title: "(9分)在学习了计算机网络系统的相关知识后，小红为新家搭建智能家居网络。认真观察下图并回答问题。",
    image: "img/8-27.png",
    questions: [
      {
        question: "上图中的笔记本电脑、平板电脑等移动终端，通过设备①以无线方式接入网络，图中设备①的名称是<input type='text' id='answer27-1' class='answer-input'>。",
        answer: "无线路由器",
        image: "",
        score: 3,
        explanation: ""
      },
      {
        question: "为了接入因特网，需要把设备①上的 WAN 口通过双绞线连接到 ADSL Modem上的<input type='text' id='answer27-2' class='answer-input'>端口。(选填“LAN”或“Line”)。",
        answer: "LAN",
        image: "",
        score: 3,
        explanation: ""
      },
      {
        question: "上图中的电视机顶盒支持有线和无线方式连接人网，为了提高抗干扰能力，该机顶盒最好使用<input type='text' id='answer27-3' class='answer-input'>方式连接到设备①上。。(选填“有线”或“无线”)",
        answer: "有线",
        image: "",
        score: 3,
        explanation: ""
      }
    ]
  },
  {
    indexNumber:32,
    questionNumber:28,
    title: "智能农业大棚如下图所示，它通过传感器、控制器、网络设施和计算机程序等来实现大棚的自动化管理。例如，自动温度控制系统中的温度传感器每隔一定时间采集大棚中的温度，一旦温度超过预设的最高温度40℃(包含40℃)，控制系统会启动降温系统，给大棚降温;如果温度低于预设的最低温度18℃(包含18℃)，控制系统会启动升温系统，给大棚升温。根据以上描述回答下列问题:",
    image: "img/8-28.png",
    questions: [
      {
        question: "上面的流程图描述了自动温度控制系统进行温度控制的算法，则在流程图中标记①处应填写<input type='text' id='answer28-1' class='answer-input'>，标记②处应填写<input type='text' id='answer28-2' class='answer-input'>。",
        answer: ["启动降温系统", "T<=18℃或T<=18℃?"],
        image: "",
        score: [2, 3],
        explanation: ""
      },
      {
        question: "在智能农业大棚控制系统中，管理员、种植农作物的人属于这个系统的<input type='text' id='answer28-3' class='answer-input'>；平板电脑中的监控App 属于这个系统的<input type='text' id='answer28-4' class='answer-input'>;加湿器、加热器属于这个系统的<input type='text' id='answer28-5' class='answer-input'>;网关、无线局域网属于这个系统的<input type='text' id='answer28-6' class='answer-input'>;温度值、光照情况属于这个系统的<input type='text' id='answer28-7' class='answer-input'>。(选填项:“硬件”、“软件”、“数据”、“通信网络”、“用户”)",
        answer: ["用户", "软件", "硬件", "通信网络", "数据"],
        image: "",
        score: [1, 1, 1, 1, 1],
        explanation: ""
      }
    ]
  },
  { 
    "indexNumber": 33,
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
    "indexNumber": 34,
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
    "indexNumber": 35,
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
    "indexNumber": 36,
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
  },
  {
    "indexNumber": 37,
    questionNumber: 25,
    title: "(10分)世界杯是充满奇迹的舞台，2022年世界杯足球赛各球员进球数如下表所示。",
    image: "img/2022q-25.jpg",
    questions: [
      {
        question: "小曲想运用函数对各个球员按进球数进行排名，他可以在A3单元格输入函数=<input type='text' id='answer25-1' class='answer-input'>(D3，D$3:D$115)进行计算。",
        answer: "rank",
        image: "",
        score: 4,
        explanation: ""
      },
      {
        question: "小曲想要计算2022年世界杯八强国家的进球总数，法国的总进球数是在K3单元格中通过函数“=SUMIF(C3:C115,J3,D3:D115)”统计得出的，如果想要通过自动填充功能获得其它国家的总进球数，则K3单元格中的函数应该修改为<input type='text' id='answer25-2' class='answer-input'>。",
        answer: "=sumif(c$3:c$115,j3,D$3:d$115)或=sumif($c$3:$c$115,j3,$d$3:$d$115)",
        image: "",
        score: 4,
        explanation: ""
      },
      {
        question: "小曲想要通过图表直观呈现八个国家总的进球数量，并进行比较。可以选择图表<input type='text' id='answer25-3' class='answer-input'>。(选填“柱形图”“环形图”或“词云图”)。",
        answer: "柱形图",
        image: "",
        score: 2,
        explanation: ""
      }
    ]
  },
  {
    "indexNumber": 38,
    questionNumber: 26,
    title: "(12分)假设有一张足够大的纸，厚度不超过0.1毫米，对折一次纸的厚度增加一信，折叠多少次后可以超过世界屋脊珠穆朗玛峰的高度8848米。(提示:纸的厚度单位是毫米，珠峰的高度单位是米)",
    image: "img/2022q-26.jpg",
    questions: [
      {
        question: "程序中变量d的数据类型是<input type='text' id='answer26-1' class='answer-input'>。",
        answer: "浮点型或浮点数或小数或float",
        image: "",
        score: 4,
        explanation: ""
      },
      {
        question: "程序中第4行划线处应填入<input type='text' id='answer26-2' class='answer-input'>",
        answer: "h<=8848",
        image: "",
        score: 4,
        explanation: ""
      },
      {
        question: "与程序第6行h*=2代码功能一样的是<input type='text' id='answer26-3' class='answer-input'>(选填“h=h+2”或“h=h*2”)",
        answer: "h=h*2",
        image: "",
        score: 4,
        explanation: ""
      }
    ]
  },
  {
    "indexNumber": 39,
    questionNumber: 27,
    title: "(8分)小曲在学习了信息系统相关知识后，在家构建了如下的智能花弃养护系统，能从光照、温度、湿度和肥力等多个角度，监测花卉的种植环境数据。依托物联网，将数据传人互联网的云端进行数据比对分析，再通过智能手机中的相应App将花卉种植养护提示给用户，同时也可以根据监测相关数据进行自动浇水等功能，如下图所示。",
    image: "img/2022q-27.jpg",
    questions: [
      {
        question: "智能花青养护系统中，从整个物联网的结构来分析，监测数据的传感器属于互联网的<input type='text' id='answer27-1' class='answer-input'>层；通过相关网络设备及网络设置接入物联网属于物联网的网络层;通过APP进行云端数据分析属于物联网的用层。",
        answer: "感知",
        image: "",
        score: 4,
        explanation: ""
      },
      {
        question: "要实现自动浇花，需要通过<input type='text' id='answer27-2' class='answer-input'>传感器检测土壤的湿度数据，输入到控制器，以便于控制器根据具体情况作出相的操作。",
        answer: "湿度",
        image: "",
        score: 4,
        explanation: ""
      },
    ]
  },
  {
    "indexNumber": 40,
    questionNumber: 28,
    title: "(I0分)读好书，好读书，读书好。随着社会的发展，阅读更加便地走进们的生活，下图是某大学的24小时开放式书吧示意图，其最大特点是利各种智能设备，可以做到无人值守。",
    image: "img/2022q-28.jpg",
    questions: [
      {
        question: "信息系统的组成分析。实时的温度、湿度以及借阅排行榜和评论属于开放式书吧系统的<input type='text' id='answer28-1' class='answer-input'>。(选填“硬件”“数据”或“通信网络”)",
        answer: "数据",
        image: "",
        score: 2,
        explanation: ""
      },
      {
        question: "信息系统的支撑技术。系统中图书防盗系统(安全门)主要是在门上配置了对应的读写器和天线，标签在安全门天线的感应范围内，即可准确读取标签信息和状态，这主要体现了物联网技术中的<input type='text' id='answer28-2' class='answer-input'>技术。",
        answer: "射频识别或RFID",
        image: "",
        score: 2,
        explanation: ""
      },
      {
        question: "系统的设计与开发分析。小曲使用Python编写实现恒温功能的模拟程序，温度范围和输出信息如下表所示。<br>①程序中第4行划线处应该填入<input type='text' id='answer28-3' class='answer-input'>。<br>②程序中第4行划线处应该填入<input type='text' id='answer28-4' class='answer-input'>。",
        answer: ["elif", 'print("降温")'],
        image: "img/2022q-28-3.jpg",
        score: [3, 3],
        explanation: ""
      },
    ]
  }, {
    "indexNumber": 41,
    questionNumber: 25,
    title: "(8分)高一年级56位同学参加了数学竞赛，竞赛工作人员小崔把数据收集整理如下：",
    image: "img/2023c-25.jpg",
    questions: [
      {
        question: "小崔运用AVERAGE函数计算所有学生的平均分时，在8单元格出现了如上图所示的信息，则最大可能是<input type='text' id='answer25-1' class='answer-input'>(选填“数据类型错误”、“数据缺失’或“函数名称拼写错误”)。",
        answer: "数据类型错误",
        image: "",
        score: 2,
        explanation: ""
      },
      {
        question: "AVERAGEIF是指定条件求平均值函数，上表所示的(4单元格就是使用该函数求出“王老师”指导的所有学生的平均成绩，如果要通过自动填充的方式得到“刘老师”和“张老师”指导的所有学生的平均成绩，则C4单元格中的函数应该修改为<input type='text' id='answer25-2' class='answer-input'>。",
        answer: "=averageif($d3:$d58,G3,$c3:$c58)或=averageif($d$3:$d$58,G3,$c$3:$c$58)",
        image: "",
        score: 4,
        explanation: ""
      },
      {
        question: "小崔还运用Python中的matplotlib库编写程序绘制了如下图表，直观展示三位指导教师所辅导学生的成绩情况，小崔应用了该库中<input type='text' id='answer25-3' class='answer-input'>函数来绘制柱形图。",
        answer: "bar()",
        image: "img/2023c-25-3.jpg",
        score: 2,
        explanation: ""
      }
    ]
  },
  {
    "indexNumber": 42,
    questionNumber: 26,
    title: "(12分)在中国的传统文化中，兔子一直是一个非常受欢迎的形象，代表着光明和美好。2023年是兔年，小黄想设计一个程序，根据身份证号码统计全校属兔的学生人数。通过上网查阅资料，小黄了解到居民身份证号码由六位数字地址码、八位数字出生日期码、三位数字顺序码和一位校验码组成。",
    image: "",
    questions: [
      {
        question: "根据学生的身份证号码判断生肖。方法是:18位身份证号码中的第7位至第(1)10位表示出生年份，用年份除以12取余数，根据下面余数与生肖的对应关系判断生肖。<img src='img/2023c-26.jpg'> 他编写了一个判断生肖的函数，其Python程序代码如下，程序中第3行下划线处应填人<input type='text' id='answer26-1' class='answer-input'>。",
        answer: "6:8",
        image: "img/2023c-26-1.jpg",
        score: 4,
        explanation: ""
      },
      {
        question: "(逐一列举每一位学生的身份证号码，并统计属兔的学生人数，Python程序代码如下:<img src='img/2023c-26-2.jpg'>程序第8行下划线处应填入<input type='text' id='answer26-2' class='answer-input'>；<br>程序第10行下划线处应填入<input type='text' id='answer26-3' class='answer-input'>。",
        answer: ['0', 'sx'],
        image: "",
        score: [2, 2],
        explanation: ""
      },
      {
        question: "小黄的算法设计思路是先利用循环结构逐一列举每一位学生的身份证号码，然后利用分支结构判断该学生是否属免，上述程序设计使用了<input type='text' id='answer26-4' class='answer-input'>算法。",
        answer: "枚举或穷举",
        image: "",
        score: 4,
        explanation: ""
      }
    ]
  },

  {
    "indexNumber": 43,
    questionNumber: 27,
    title: "(9分)下图是某学校图书管理系统的功能模块图。",
    image: "img/2023c-27.jpg",
    questions: [
      {
        question: "该图书管理系统通过“读者信息录入”模块添加新读者，这属于信息系统的<input type='text' id='answer27-1' class='answer-input'>功能;图书馆电子屏幕显示“图书借出统计”模块统计出的图书借出信息。出信息，这属于信息系统的<input type='text' id='answer27-2' class='answer-input'>功能",
        answer: ["输入", "输出"],
        image: "",
        score: [3, 3],
        explanation: ""
      },
      {
        question: "该图书管理系统还可以通过人脸特征提取和对比实现图书的借阅办理。特征提取是<input type='text' id='answer27-3' class='answer-input'>领域中计算机视觉和图像处理的一个概念，是指使用计算机提取图像中特征信息的方法及过程。特征提取的信息存放在数据库中，它记录了读者的人脸信息。",
        answer: "AI或人工智能",
        image: "",
        score: 3,
        explanation: ""
      },
    ]
  },
  {
    "indexNumber": 44,
    questionNumber: 28,
    title: "(11分)某地下停车场停车收费的过程是:在停车场出入口处，车牌自动识别系统识别车牌号码，记录出入的时间，停车收费系统根据车辆出入时间计算停车费，并显示在费额显示器上。客户可以选择用智能手机扫描收费二维码方式支付停车费付费之后，栏杆自动抬起，车辆可以驶离停车场。",
    image: "img/2023c-28.jpg",
    questions: [
      {
        question: "智能手机作为我们生活中最常见的移动终端设备，基本原理同计算机类似，手机的核心部件CPU是整个设备的控制中枢系统和逻辑控制中心，由<input type='text' id='answer28-1' class='answer-input'>和控制器组成;智能手机的操作系统属于<input type='text' id='answer28-2' class='answer-input'>(选填“系统软件或“应用软件”)。",
        answer: ["运算器", "系统软件"],
        image: "",
        score: [2, 2],
        explanation: ""
      },
      {
        question: "为解决早晚时间段停车场出入口光线太暗的问题，停车场的出入口处安装了自动感应灯。当出入口光线太暗时，感应灯自动打开，否则感应灯自动关闭。该灯使用<input type='text' id='answer28-3' class='answer-input'>传感器实现对光线亮度的检测。",
        answer: "光线或光敏或亮度",
        image: "",
        score: 3,
        explanation: ""
      },
      {
        question: "该停车场制定了“短停少收费，长停多收费”的收费原则，详情如下表所示：<img src='img/2023c-28-3-1.jpg'>以下是小冬同学用Python编写的停车场收费模拟程序，实现根据输入的停车时间计算停车费，请完善程序。<img src='img/2023c-28-3-2.jpg'><br>程序中第4行划线处应该填入<input type='text' id='answer28-4' class='answer-input'>。<br>程序中第7行划线处应该填入<input type='text' id='answer28-5' class='answer-input'>。",
        answer: ["t<=1", 'money=5'],
        image: "",
        score: [2, 2],
        explanation: ""
      },
    ]
  }
];

const multipleChoiceQuestions = [
  {
    indexNumber: 1,
    questionNumber: 1,
    question: "奇偶校验码是一种增加二进制传输系统最小距离的简单和广泛采用的方法，其中奇校验规定如下：在传输编码的最高位置前加一位“I”或“0”使得传输字符的编码中“1”的个数恒为奇数，例如“A”的编码为“0100001”,经过奇校验后为“101000001”,那么“B”经过奇校验后应该为（）。",
    choices: ["A、A.001000001", "B、101000001", "C、001000010", "D、101000010"],
    answer: "D、101000010",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 2,
    questionNumber: 2,
    question: "以下关于数据、信息、知识和智慧的说法错误的是（）。",
    choices: ["A、数据是信息存在的一种形式", "B、数据是一种被加工过的信息", "C、信息经过提炼和总结后，可以形成一定的知识", "D、数据、信息、知识和智慧是逐新递进的概念，后者是前者的抽象与升华，前者是后者的基础和前提"],
    answer: "B、数据是一种被加工过的信息",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 3,
    questionNumber: 3,
    question: "信息可用模拟信号或数字信号表达，如图所示，是两种信号的示意图，关于这两种信号说法错误的是（）。",
    choices: ["A、将模拟信号转化为数字信号一般需要经过采样、量化和编码", "B、模拟信号是以连续变化的物理量表达信息；数字信号是离散的、不连续的信号", "C、数字信号抗干扰性强，有利于存储、加密以及远距离传输", "D、①图是数字信号示意图，②图是模拟信号示意图"],
    answer: "D、①图是数字信号示意图，②图是模拟信号示意图",
    score: 2.5,
    image: "img/1-3.jpg",
    explanation: ""
  },
  {
    indexNumber: 4,
    questionNumber: 4,
    question: "新年将至，小明制作了一张鞭炮插画图，该图属性如下图所示，则该图片的大小约为(  )MB。",
    choices: ["A、1.6", "B、1.5", "C、2.1", "D、1024"],
    answer: "B、1.5",
    score: 2.5,
    image: "img/1-4.jpg",
    explanation: ""
  },
  {
    indexNumber: 5,
    questionNumber: 5,
    question: "用枚举算法求解“找出所有满足各位数字之和等于5的三位数”时，在下列所列举的数值范围内，算法执行效率最高的是(  )。",
    choices: ["A、从0到999", "B、从100到999", "C、从100到500", "D、从104到500"],
    answer: "D、从104到500",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 6,
    questionNumber: 6,
    question: "下列关于算法与算法特征的说法，错误的是(  )。",
    choices: ["A、算法是解决问题或完成任务的一系列步骤", "B、算法在执行时，必须输人至少一个数据算法", "C、计算“斐波那契数列的前m个元素的过程”符合有穷性的特征", "D、用“辗转相除法”计算正整数m和n的最大公约数的方法分步骤具体描述就是算法"],
    answer: "B、算法在执行时，必须输人至少一个数据算法",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 7,
    questionNumber: 7,
    question: "有如下程序段，运行之后a、b的值分别为(  )。",
    choices: ["A、1  -1", "B、-1   1", "C、0   0", "D、0   -2"],
    answer: "A、1  -1",
    score: 2.5,
    image: "img/1-7.jpg",
    explanation: ""
  },
  {
    indexNumber: 8,
    questionNumber: 8,
    question: "下列Python表达式的值不是2的是(  )。",
    choices: ["A、3%2", "B、5//2", "C、1*2", "D、1+3/3"],
    answer: "A、3%2",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 9,
    questionNumber: 9,
    question: "利用Python编程实现计算x=a+aa+ai+amha +a.a的值，其中a是一个数字，如8+88+888+8888+88888。设计一个summation()函数，输入变量为数字a和需要多少个数相加的n,在这个函数中，a.aa.aaa这些基本数由变量basic来保存，前几个数的求和保存在变量sum中，Python程序如下左图所示，请在下划线处填写代码()完善程序实现如下右图的运行结果。",
    choices: ["A、basic+=sum", "B、sum =basic+n", "C、sum=basic+1", "D、sum+=basic"],
    answer: "D、sum+=basic",
    score: 2.5,
    image: "img/1-9.jpg",
    explanation: ""
  },
  {
    indexNumber: 10,
    questionNumber: 10,
    question: "在Python中，判断一个学生是否是一名体重(weight)大于50千克或者身高(height)小于155厘米的女生(gender:Female),条件表达式可以表示为(  )。",
    choices: [
      "A、gender=='Female' and (weight>50 or height<155)",
      "B、gender=='Female' and weight>50 or height<155",
      "C、gender=='Female' or (weight>50 or height<155)",
      "D、gender=='Female' or weight>50 or height<155"
    ],
    answer: "A、gender=='Female' and (weight>50 or height<155)",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 11,
    questionNumber: 11,
    question: "小曲写了一个接近平方数的程序用于计算比整数limit小的最大平方数，并将其存储在变量nearest square中。请根据下面程序代码，判断第7行输出为( )。",
    choices: [
      "A、36",
      "B、40",
      "C、49",
      "D、0"
    ],
    answer: "A、36",
    score: 2.5,
    image: "img/1-11.jpg",
    explanation: ""
  },
  {
    indexNumber: 12,
    questionNumber: 12,
    question: "高一年级的研究小组在调查同学们的上学方式，小组通过问卷收集了一些数据，张华负责将最终的结果做成一张饼图，那么张华所做的是数据处理的哪一步?( )",
    choices: [
      "A、数据收集",
      "B、数据整理",
      "C、数据分析",
      "D、数据呈现"
    ],
    answer: "D、数据呈现",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 13,
    questionNumber: 13,
    question: "高三年级组织物理竞赛，成绩如下图：物理老师通过电子表格软件中的COUNTIF函数进行一等奖人数统计，他在相应单元格输人'=COUNTIF(B3:H3,'>=80')',确认后得到的结果是( )。",
    choices: [
      "A、1",
      "B、2",
      "C、3",
      "D、F3"
    ],
    answer: "C、3",
    score: 2.5,
    image: "img/1-13.jpg",
    explanation: ""
  },
  {
    indexNumber: 14,
    questionNumber: 14,
    question: "利用Pytbon程序绘制x-y的散点图，则下列程序第5行应该填写的代码是( )。",
    choices: [
      "A、plt.plot(X,Y)",
      "B、plt.scatter(X,Y)",
      "C、plt.bar(X,Y)",
      "D、plt.boxplot(X,Y)"
    ],
    answer: "B、plt.scatter(X,Y)",
    score: 2.5,
    image: "img/1-14.jpg",
    explanation: ""
  },
  {
    indexNumber: 15,
    questionNumber: 15,
    question: "下列应用中，体现了人工智能技术的有( )。\n①某软件扫描照片识别照片物体\n②机器人AlphaGo与围棋大师对弈\n③某手机App将语言信息转换为文本\n④声卡将模拟信号转换成数字信号",
    choices: [
      "A、①②④",
      "B、①②③",
      "C、①③④",
      "D、①②③④"
    ],
    answer: "B、①②③",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 16,
    questionNumber: 16,
    question: "下面不是应用于智能物流领域的机器人是（ ）。",
    choices: [
      "A、迎宾机器人",
      "B、搬运机器人",
      "C、货架穿梭车",
      "D、分拣机器人"
    ],
    answer: "A、迎宾机器人",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 17,
    questionNumber: 17,
    question: "自电子计算机问世以来，信息技术沿着以_____为核心、到以_____为核心，再到以_____为核心的发展脉络，深刻影响着社会的经济结构和生产方式，推动了社会信息化、智能化的建设与发展(  )。",
    choices: [
      "A、计算机    人工智能    互联网",
      "B、电子元件    互联网    人工智能",
      "C、计算机    互联网    数据",
      "D、电子元件    计算机    互联网"
    ],
    answer: "C、计算机    互联网    数据",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 18,
    questionNumber: 18,
    question: "图书馆信息系统不仅可以处理借书、还书业务，还可以分类统计藏书数据。这反映了信息系统的(  )。",
    choices: [
      "A、输入功能",
      "B、输出功能",
      "C、处理与控制功能",
      "D、存储功能"
    ],
    answer: "C、处理与控制功能",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 19,
    questionNumber: 19,
    question: "人们可以通过网络购买计算机、智能手机等设备，下图是某电子商务提供的某型号计算机的重要参数。根据所学知识判断下列说法正确的是()。",
    choices: [
      "A、硬盘总大小为1152GB",
      "B、CPU的主频为4G,决定了计算机的运算性能",
      "C、购买电脑只需看CPU就行，其他参数不重要",
      "D、内存的大小为4G,主要用于长期存储数据"
    ],
    answer: "A、硬盘总大小为1152GB",
    score: 2.5,
    image: "img/1-19.jpg",
    explanation: ""
  },
  {
    indexNumber: 20,
    questionNumber: 20,
    question: "下列关于计算机网络传输协议说法错误的是()。",
    choices: [
      "A、数据在网络中传输必须遵守一定的规则和约定，是网络传输协议",
      "B、常见的网络传输协议有：TCP/IP、HTTP、HTTPS、FTP等",
      "C、因为网络有漏洞，机密数据、商业数据、个人隐私等敏感信息都不会通过网络传输",
      "D、协议的安全缺陷与电脑病毒的存在，使得网络环境安全面临极大的危险"
    ],
    answer: "C、因为网络有漏洞，机密数据、商业数据、个人隐私等敏感信息都不会通过网络传输",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 21,
    questionNumber: 21,
    question: "手机中可用来计步的传感器是()。",
    choices: [
      "A、光线传感器",
      "B、加速度传感器",
      "C、温度传感器",
      "D、指纹传感器"
    ],
    answer: "B、加速度传感器",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 22,
    questionNumber: 22,
    question: "智能家居是以住宅为平台，通过物联网技术将家中的各种设备连接到一起，实现智能化的一种生态系统。它具有智能灯光控制、智能电器控割、安防监控系统、智能背景音乐、智能视频共享、可视对讲系统和家庭影院系统等功能。通过各式各样的传感器设备采集数据信息，实现了智能家居的场景化，也让用户真正享受到智能家居带来的乐趣。下列关于智能家居中传感器技术说法错误的是（ ）。",
    choices: [
      "A、根据季节的变化或者用户的需求来调整温度，需要温度传感器",
      "B、需要根据湿度情况实现自动调节室内湿度的功能，需要湿度传感器",
      "C、探测燃气泄漏的二氧化碳浓度以及烟雾浓度，需要用到光敏传感器",
      "D、侦测人的移动，配合监控实现陌生人闯人自动抓拍，需要用到红外传感器"
    ],
    answer: "C、探测燃气泄漏的二氧化碳浓度以及烟雾浓度，需要用到光敏传感器",
    score: 2.5,
    image: "img/1-22.jpg",
    explanation: ""
  },
  {
    indexNumber: 23,
    questionNumber: 23,
    question: "网上聊天的时候，为了防止用户被冒名欺骗的方法是( )。",
    choices: [
      "A、对访问网路的流量进行过滤和保护",
      "B、进行数据加密",
      "C、对信息源方进行身份验证",
      "D、采用防火墙"
    ],
    answer: "C、对信息源方进行身份验证",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 24,
    questionNumber: 24,
    question: "随着社交网络平台如微博、微信、QQ、学习论坛的广泛使用，越来越多的人开始意识到使用社交网路平台的同时有可能泄露个人信息。下列说法错误的是(  )。",
    choices: [
      "A、用户进行“点费”操作时，社交网络平台可能会自动把用户个人喜好信息传向与其合作的企业。企业通过数据挖掘技术分析用户喜好，给用户发送广告",
      "B、移动终端使用开放的Wi-Fi容易导致信息被盗，也容易被定位等",
      "C、社交网络平台可以记录用户登录后的所有活动，定位网页测览者的个人信息，并有可能在用户不知情下，将用户个人信息推送给第三方",
      "D、在公共网络、他人手机或开放Wi-F上登录个人社交网络平台，经常分享个人私密信息不会有什么安全隐患"
    ],
    answer: "D、在公共网络、他人手机或开放Wi-F上登录个人社交网络平台，经常分享个人私密信息不会有什么安全隐患",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 25,
    questionNumber: 1,
    question: "下列有关数字化的说法正确的是( )。",
    choices: [
      "A.数字化信息需要转变为模拟化的信息才能被计算机处理",
      "B.数据在进行远距离传输时，用模拟信号比用数字信号更好",
      "C.模拟信号数字化的过程一般为“抽样一量化一编码”",
      "D.“1，2，3...8，9…”本身就是数字，所以不需要转换为数字化信息就能被计算机直接处理"
    ],
    answer: "C.模拟信号数字化的过程一般为“抽样一量化一编码”",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 26,
    questionNumber: 2,
    question: "早在 70 多年前，中国就已经出现了数据可视化的先驱者，右图是1948年上海第五纺织厂厂长吴德明先生编撰的《中国纺织建设股份有限公司上海第五纺织厂概况》中一幅图，关于这幅图所反映的信息，说法错误的是（ ）。",
    choices: [
      "A.该厂 16 岁至35 岁之间，男性员工的人数比女性员工多",
      "B.该厂30岁以下的员工数比 30 岁以上多",
      "C.该厂不招收 15 岁以下的员工",
      "D.该厂的男性员工数量比女性员工多"
    ],
    answer: "C.该厂不招收 15 岁以下的员工",
    score: 2.5,
    image: "img/2-2.jpg",
    explanation: ""
  },
  {
    indexNumber: 27,
    questionNumber: 3,
    question: "一幅未经压缩的 1024x768 像素的 BMP 图像文件，其存储容量约为0.75MB，则该图像每个像素的颜色位数为( )。",
    choices: [
      "A. 4位",
      "B.8 位",
      "C.16 位",
      "D.24 位"
    ],
    answer: "B.8 位",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 28,
    questionNumber: 4,
    question: "某游戏的界面如下图所示，该游戏在本关卡随机生成了61 个小动物的格子，小动物由5种不同颜色组成，如果要对该游戏进行编码，则格子需____要个二进制位，小动物需要____个二进制位( )。",
    choices: [
      "A.5    3",
      "B.5    4",
      "C.6    3",
      "D.6    4"
    ],
    answer: "C.6    3",
    score: 2.5,
    image: "img/2-4.jpg",
    explanation: ""
  },
  {
    indexNumber: 29,
    questionNumber: 5,
    question: "下列关于算法的描述，说法错误的是( )。",
    choices: [
      "A.描述算法的方法有多种，常用的有自然语言、结构化流程图、伪代码、计算机程 序语言等",
      "B.算法代表着用系统的方法描述解决问题的策略机制。算法对运算的时间没有要求，可以在无限时间内运算",
      "C.同一问题可用不同算法解决，而一个算法的质量优劣将影响到算法乃至程序的 效率",
      "D.算法的特点包括有穷性、确定性、可行性、数据输人、数据输出，必须要有数据输出，可以没有数据输人"
    ],
    answer: "B.算法代表着用系统的方法描述解决问题的策略机制。算法对运算的时间没有要求，可以在无限时间内运算",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 30,
    questionNumber: 6,
    question: "请根据下面某城市刷卡乘坐公交车的算法流程图分析，当m的值为8时，输出结果为( )。",
    choices: [
      "A.提示:请投币",
      "B.结束",
      "C.提示:余额即将不足",
      "D.提示:欢迎乘车"
    ],
    answer: "C.提示:余额即将不足",
    score: 2.5,
    image: "img/2-6.jpg",
    explanation: ""
  },
  {
    indexNumber: 31,
    questionNumber: 7,
    question: "以下代码的运行结果为( )。",
    choices: [
      "A.语文",
      "B.数学",
      "C.生物",
      "D.信息技术"
    ],
    answer: "C.生物",
    score: 2.5,
    image: "img/2-7.jpg",
    explanation: ""
  },
  {
    indexNumber: 32,
    questionNumber: 8,
    question: "已知圆的半径为r，请设计一个程序，求圆的面积s。部分 Python 程序段如下图:则程序中划线处应该填入的语句是( )。",
    choices: [
      "A. s=PI*r*r*2",
      "B. P*r*r=s",
      "C. s=PI*r* *2",
      "D. s=PI* r%2"
    ],
    answer: "C. s=PI*r* *2",
    score: 2.5,
    image: "img/2-8.jpg",
    explanation: ""
  },
  {
    indexNumber: 33,
    questionNumber: 9,
    question: "以下Pyton程序代码运行后,k的值为( )。",
    choices: [
      "A. 10",
      "B. 9",
      "C. 8",
      "D. 7"
    ],
    answer: "B. 9",
    score: 2.5,
    image: "img/2-9.jpg",
    explanation: ""
  },
  {
    indexNumber: 34,
    questionNumber: 10,
    question: "运行下列Python程序的结果为( )。",
    choices: ["A、2-10a.jpg", "B、2-10b.jpg", "C、2-10c.jpg", "D、2-10d.jpg"],
    answer: "A、2-10a.jpg",
    score: 2.5,
    image: "img/2-10.jpg",
    explanation: ""
  },
  {
    indexNumber: 35,
    questionNumber: 11,
    question: "关于Python语言数值运算符，以下选项中描述错误的是( )。",
    choices: [
      "A.x//y 表示x与y之整数商，即不大于x与y之商的最大整数",
      "B.x**y表示x的y次幂，其中，y必须是整数",
      "C.x%y表示x与y之商的余数，也称为模运算",
      "D.x/y表示x与y之商"
    ],
    answer: "B.x**y表示x的y次幂，其中，y必须是整数",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 36,
    questionNumber: 12,
    question: "我们在用 Python 编程进行数据分析的时候，经常会用到 pandas 库中的 DataFrame 对学生成绩分析的 Python 程序如下所示:",
    choices: [
      "A.变量 data 的数据类型是列表",
      "B.DataFrame 是一种二维结构数据",
      "C.指令“print(df,loc[1])”的作用是输出李明的成绩",
      "D.指令“print(df,loc[1])”的作用是输出王伟的成绩"
    ],
    answer: "D.指令“print(df,loc[1])”的作用是输出王伟的成绩",
    score: 2.5,
    image: "img/2-12.jpg",
    explanation: ""
  },
  {
    indexNumber: 37,
    questionNumber: 13,
    question: "下列技术应用使用大数据的是( )。",
    choices: [
      "A. ①②③④",
      "B. ①②④⑤",
      "C. ②③④⑤",
      "D. ①②③④⑤"
    ],
    answer: "B. ①②④⑤",
    score: 2.5,
    image: "img/2-13.jpg",
    explanation: ""
  },
  {
    indexNumber: 38,
    questionNumber: 14,
    question: "利用 Python 程序绘制y=2的x次方(y=2^x)函数图形，则下列程序第5行应该填写的代码是( )。",
    choices: [
      "A. plt. plot(x，y)",
      "B. plt. plot(y，x)",
      "C. plt.bar(x,y)",
      "D. plt.boxplot(x，y)"
    ],
    answer: "A. plt. plot(x，y)",
    score: 2.5,
    image: "img/2-14.jpg",
    explanation: ""
  },
  {
    indexNumber: 39,
    questionNumber: 15,
    question: "现在很多翻译软件都能够进行拍照翻译。下图是使用有道词典拍照一篇英语文章并自动翻译成中文，这里主要应用的人工智能技术是( )。",
    choices: [
      "A.文字识别 机器翻译",
      "B.文字识别 图像识别",
      "C.虚拟现实 图像识别",
      "D.图像识别 虚拟现实"
    ],
    answer: "A.文字识别 机器翻译",
    score: 2.5,
    image: "img/2-15.jpg",
    explanation: ""
  },
  {
    indexNumber: 40,
    questionNumber: 16,
    question: "下列应用中，没有体现人工智能技术的是( )。",
    choices: [
      "A.门禁系统通过指纹识别确认身份",
      "B.某软件将输人的语音自动转换为文字",
      "C.机器人导游回答游客的问题，并提供帮助",
      "D:通过键盘输人商品编码，屏幕上显示出相应价格"
    ],
    answer: "D:通过键盘输人商品编码，屏幕上显示出相应价格",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 41,
    questionNumber: 17,
    question: "以下对“互联网+”描述错误的是( )。",
    choices: [
      "A.在“互联网+”的背景下，将会产生新的消费模式",
      "B.“互联网+”就是让互联网与传统行业进行简单融合",
      "C.“互联网+”已有的例子有:传统集市+互联网有了淘宝，传统百货市场+互联网有了京东，传统银行+互联网有了支付宝，传统交通+互联网有滴滴打车",
      "D.“互联网+”能够促进传统行业的升级换代。比如通信行业，来自数据流量业务的收人已经大大超过了语音短信的收入，促进了运营商进行相关业务的变革升级"
    ],
    answer: "B.“互联网+”就是让互联网与传统行业进行简单融合",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 42,
    questionNumber: 18,
    question: "12306 是中国铁路客户服务中心网站，这个系统根据历年的数据，分析车次安排的合理性，并对特殊时期(如春运)进行预测，帮助管理部门针对是否增加班次做明决策反应是信息系统的( )。",
    choices: [
      "A.输入功能",
      "B:输出功能",
      "C.处理与控制功能",
      "D.存储功能"
    ],
    answer: "C.处理与控制功能",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 43,
    questionNumber: 19,
    question: "下列关于计算机 CPU 说法错误的是( )。",
    choices: [
      "A、CPU 功能主要是解释计算机指令以及处理计算机软件中的数据",
      "B、CPU 是计算机系统的运算和控制核心，包括运算器和控制器",
      "C、CPU 中央处理器，是电子计算机的主要设备之一，电脑中的核心配件",
      "D、CPU 运算器和控制器的功能相同，计算机中有其中一个即可"
    ],
    answer: "D、CPU 运算器和控制器的功能相同，计算机中有其中一个即可",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 44,
    questionNumber: 20,
    question: "小曲家通过电话线或光纤以拨号方式接入因特网时，应使用的网络设备是( )，这种设备负责将数字信号转化为模拟信号。",
    choices: [
      "A.交换机",
      "B.路由器",
      "C.网卡",
      "D.调制解调器"
    ],
    answer: "D.调制解调器",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 45,
    questionNumber: 21,
    question: "手机中的( )可以监测手机内部以及电池的温度。如果发现某一部件温度过高,手机就会关机，防止手机损坏。",
    choices: [
      "A.光线传感器",
      "B.心率传感器",
      "C.温度传感器",
      "D.指纹传感器"
    ],
    answer: "C.温度传感器",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 46,
    questionNumber: 22,
    question: "小曲所在学校搭建了一个基于 Moodle 的在线学习系统，便于周末时提交作业和进行学习讨论，小曲通过浏览器访问网址登录学习管理系统，下列说法正确的是( )。",
    choices: [
      "A.这个系统的开发是基于浏览器/服务器结构的",
      "B.这个系统的开发是基于客户端/服务器结构的",
      "C.这个系统的设计开发不需要数据库系统",
      "D:这个系统需要特定的客户端 App 软件才能访问"
    ],
    answer: "A.这个系统的开发是基于浏览器/服务器结构的",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 47,
    questionNumber: 23,
    question: "小曲发现在许多公共场合都会有开放(即不加密)的Wi-Fi存在，因此他认为Wi-Fi 的加密方式可有可无，在设置家用路由器的无线参数时就没有使用加密方式。下列选项说法正确的是( )。",
    choices: [
      "A.小曲的做法是不正确的，不设置无线路由加密方式会导致移动设备与路由器之间明文通讯，有安全隐患",
      "B.小曲的做法是不正确的，不设置无线路由加密方式虽然没有安全隐患，但是连接的人多了后会影响网络的速度",
      "C.小曲的做法是正确的，这样便于快速连接网络，不需要输人密码",
      "D.小曲的做法是正确的，不设置无线路由的加密方式没有安全隐患，也不会影响网速"
    ],
    answer: "A.小曲的做法是不正确的，不设置无线路由加密方式会导致移动设备与路由器之间明文通讯，有安全隐患",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 48,
    questionNumber: 24,
    question: "某些自媒体对一些社会热点事件常常使用某方的说辞并且轻易下定论，更有甚者,一些新闻门户网站对消息未经核实而直接一键转载。它们都因为不注重( )而造成信息污染。",
    choices: [
      "A.网络攻击",
      "B.身份认证",
      "C.防火墙技术",
      "D.网上道德规范和信息安全法律法规"
    ],
    answer: "D.网上道德规范和信息安全法律法规",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 49,
    questionNumber: 1,
    question: "以下关于数据、信息、知识的说法正确的是(  )。",
    choices: [
      "A.数据有不同的形式表示，信息不会因为数据的不同表现形式而改变",
      "B.信息和知识里都不包含数据",
      "C.知识才能产生价值，数据和信息都是没有价值的",
      "D.不同的人对于同样的信息所形成的知识是相同的"
    ],
    answer: "A.数据有不同的形式表示，信息不会因为数据的不同表现形式而改变",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 50,
    questionNumber: 2,
    question: "小张是某军队情报员，一天他截获一张写有密码的纸条，该密码是一个五位二进制数，但有两个二进制位由于污渍看不清楚，根据该数，小张可以推断(   )。",
    choices: [
      "A.该数转换为十进制一定是奇数",
      "B.该数转换为十进制可能为11",
      "C.该数转换为十进制一定是偶数",
      "D.该数转换为十进制可能为 32"
    ],
    answer: "C.该数转换为十进制一定是偶数",
    score: 2.5,
    image: "img/3-2.jpg",
    explanation: ""
  },
  {
    indexNumber: 51,
    questionNumber: 3,
    question: "小曲的证件照电子版(图像)尺寸为1600x2048,像素，颜色位深度为24位。她在某学习网站进行报名注册需上传个人证件照，网站要求上传文件大小不得超过100KB。根据这一要求，小曲对图像的压缩比至少是(  )。",
    choices: [
      "A. 60:1",
      "B.86:1",
      "C.90:1",
      "D.96:1"
    ],
    answer: "D.96:1",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 52,
    questionNumber: 4,
    question: "在课堂上，老师组织学生们玩解密游戏，游戏规则是将26个字母编码成二进制数字，通过手电筒光线的闪烁来传递信号，为了使游戏顺利进行，老师最少需要(  )二进制来对字母进行编码。",
    choices: [
      "A.3 位",
      "B.4 位",
      "C.5 位",
      "D.6 位"
    ],
    answer: "C.5 位",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 53,
    questionNumber: 5,
    question: "下列 Python 程序无法执行，原因是它违反了算法的什么特征(  )。",
    choices: [
      "A.有穷性",
      "B.确定性",
      "C.唯一性",
      "D.可行性"
    ],
    answer: "D.可行性",
    score: 2.5,
    image: "img/3-5.jpg",
    explanation: ""
  },
  {
    indexNumber: 54,
    questionNumber: 6,
    question: "请根据以下流程图进行判断，当输人a为27,b为18时，输出t的值为(  )。",
    choices: [
      "A. 27",
      "B. 18",
      "C. 1",
      "D. 0"
    ],
    answer: "D. 0",
    score: 2.5,
    image: "img/3-6.jpg",
    explanation: ""
  },
  {
    indexNumber: 55,
    questionNumber: 7,
    question: "下图是一段 Pyton 程序，该程序运行后的结果是(  )。",
    choices: [
      "A. [ 'yellow','red']",
      "B.['white','blue']",
      "C. [ 'yellow' , 'blue', 'white']",
      "D. [ 'white' , 'green','red']"
    ],
    answer: "B.['white','blue']",
    score: 2.5,
    image: "img/3-7.jpg",
    explanation: ""
  },
  {
    indexNumber: 56,
    questionNumber: 8,
    question: "下面两组 Python 程序的执行结果分别为(  )。",
    choices: [
      "A. P y t ②P y t o n",
      "B. P y t ②P y t h o n",
      "C. ①P y t h o n ②P y t h o n",
      "D. ①P y t o n ②P y t"
    ],
    answer: "A. P y t ②P y t o n",
    score: 2.5,
    image: "img/3-8.jpg",
    explanation: ""
  },
  {
    indexNumber: 57,
    questionNumber: 9,
    question: "小曲在学习了 Python turtle 库之后，通过右图编程设计了一个图案，阅读下列程序，分析该程序绘制的图)案为(  )。",
    choices: ["A、3-9a.jpg", "B、3-9b.jpg", "C、3-9c.jpg", "D、3-9d.jpg"],
    answer: "A、3-9a.jpg",
    score: 2.5,
    image: "img/3-9.jpg",
    explanation: ""
  },
  {
    indexNumber: 58,
    questionNumber: 10,
    question: "小曲使用Python 定义了下面一个函数，如果执行faet(5)语句的值为(  )。",
    choices: [
      "A.1",
      "B.120",
      "C.24",
      "D.720"
    ],
    answer: "B.120",
    score: 2.5,
    image: "img/3-10.jpg",
    explanation: ""
  },
  {
    indexNumber: 59,
    questionNumber: 11,
    question: "小曲正在编写游戏用户管理的程序，下面是其中一个程序段，程序运行后输出结果为(  )。",
    choices: [
      "A.{ 'name':'高明’,'age':18,'job': 'teacher'}",
      "B.{'name':'高明’，'age':24}",
      "C.|'name’:'髙明’,'age':24,'job':'teacher'}",
      "D.程序运行会出错"
    ],
    answer: "C.|'name’:'髙明’,'age':24,'job':'teacher'}",
    score: 2.5,
    image: "img/3-11.jpg",
    explanation: ""
  },
  {
    indexNumber: 60,
    questionNumber: 12,
    question: "期末考试结束后，高二某学习小组的部分成绩如下:\n小组成员张华想通过公式(函数)在单元格B9得到语文的平均分，下列哪一个\n公式(函数)不能通过自动填充得到其他三科平均分(  )。",
    choices: [
      "A. =AVERAGE(B3 :B7)",
      "B. =AVERAGE(B$3 :B $7)",
      "C. =AVERAGE($ B3 :$ B7)",
      "D. =(B3+B4+B5+B6+B7)/5"
    ],
    answer: "C. =AVERAGE($ B3 :$ B7)",
    score: 2.5,
    image: "img/3-12.jpg",
    explanation: ""
  },
  {
    indexNumber: 61,
    questionNumber: 13,
    question: "下列关于大数据的说法错误的是(  )。",
    choices: [
      "A.大数据具有数据体量大的特征",
      "B.大数据也存在数据安全、个人隐私等问题",
      "C.生活中的所有数据都是大数据",
      "D.手机地图应用中的实时路况，体现了大数据的特征"
    ],
    answer: "C.生活中的所有数据都是大数据",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 62,
    questionNumber: 14,
    question: "2020年12月31日，国家主席习近平发表了 2021年新年贺词，贺词的词云图如下,下列说法错误的是(  )。",
    choices: [
      "A.在整篇贺词中,“我们”一词是被提及最多的",
      "B.词云图显示了贺词中出现的所有词语",
      "C.词云图可以通过文字大小、字体颜色来展现词语出现的频率",
      "D.词云图是一种将文本进行可视化表达的方式"
    ],
    answer: "B.词云图显示了贺词中出现的所有词语",
    score: 2.5,
    image: "img/3-14.jpg",
    explanation: ""
  },
  {
    indexNumber: 63,
    questionNumber: 15,
    question: "下面活动中应用了智能语音技术的是(  )。",
    choices: [
      "A.当天黑了家里的窗帘自动拉合",
      "B.下雨天窗户自动关闭",
      "C.夜间起床说声“开灯”，夜灯就亮了",
      "D.当宝宝大声哭泣，智能床铃就开始播放音乐"
    ],
    answer: "C.夜间起床说声“开灯”，夜灯就亮了",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 64,
    questionNumber: 16,
    question: "以下(  )不属于信息社会的重要特征。",
    choices: [
      "A.以知识为基础的信息经济是最基本的经济形态，知识成为社会发展的巨大资源以知识和人才为基础，以创新为主要驱动力",
      "B.政府是最大的公共信息的采集者、处理者和拥有者",
      "C.文化模式日趋虚拟化、单一性",
      "D.工具数字化、方式数字化、内容数字化的社会生活，塑造出一种全新的生在与发展方式"
    ],
    answer: "C.文化模式日趋虚拟化、单一性",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 65,
    questionNumber: 17,
    question: "从2009年开始,“大数据”才成为互联网信息技术行业的流行词汇。从技术上看，大数据与(  )的关系就像一枚硬币的正反面一样密不可分。",
    choices: [
      "A.电子计算",
      "B.数学计算",
      "C.模拟计算",
      "D.云计算"
    ],
    answer: "D.云计算",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 66,
    questionNumber: 18,
    question: "小曲通过 MO0C 网站体验网上学习，通过手机终端、平板或笔记本都可以开展网上学习，并可以根据课程分类和课程目录选择自己想学习的内容，也可以将自己学习上的问题发送到论坛进行讨论交流。下列关于网上学习M00C信息系统说法正确的是(  )。",
    choices: [
      "A.手机、平板、MOOC课程平台、小曲、老师及管理员等都属于这个信息系统的组成部分",
      "B.使用这个平台的学习者才是这个系统的用户，授课老师及管理员不是用户",
      "C.课程资源属于这个系统的数据，论坛中发布的问题不属于这个系统的数据",
      "D.网络学习平台信息系统没有局限性，可以替代学校教育"
    ],
    answer: "A.手机、平板、MOOC课程平台、小曲、老师及管理员等都属于这个信息系统的组成部分",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 67,
    questionNumber: 19,
    question: "下列关于计算机硬件说法错误的是(  )。",
    choices: [
      "A.计算机中的数据采用二进制存储",
      "B.计算机硬件包括运算器、控制器、存储器、输人和输出设备",
      "C.智能手机和平板电脑的硬件结构与计算机硬件结构完全不同",
      "D.计算机的中央处理器CPU包括运算器和控制器"
    ],
    answer: "C.智能手机和平板电脑的硬件结构与计算机硬件结构完全不同",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 68,
    questionNumber: 20,
    question: "将任务分散到不同的计算机分别完成，或由网络中比较空闲的计算机分担负荷，均衡各个计算机负载，提高处理问题的实时性，提高系统的可靠性和可用性，这体现了计算机网络的(  )功能。",
    choices: [
      "A.数据通信",
      "B.资源共享",
      "C.分布处理",
      "D.跨越空间"
    ],
    answer: "C.分布处理",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 69,
    questionNumber: 21,
    question: "校园一卡通系统中的 POS 机通过网络中心获得学生的账户信息、图片资料等，主要使用了物联网的(  )。",
    choices: [
      "A.RFID 射频识别技术",
      "B.二维码识别技术",
      "C.无线传感技术",
      "D.嵌人式系统技术"
    ],
    answer: "A.RFID 射频识别技术",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 70,
    questionNumber: 22,
    question: "下列用于不同网络间的连接设备，具有判断网络地址和选择IP路径作用的设备是(  )。",
    choices: [
      "A.路由器",
      "B.调制解调器",
      "C.网卡",
      "D.双绞线"
    ],
    answer: "A.路由器",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 71,
    questionNumber: 23,
    question: "下列行为不违背信息道德的是(  )。",
    choices: [
      "A.小王自恃计算机水平很“高”，通过网络强行控制别人的计算机，随意删除别人 的文件",
      "B.小丽趁工作之便将公司核心技术文件以电子邮件的形式发给对手公司老总，并 获5万元红包",
      "C.小吴破解了某公司开发的软件并以每套1000元的价格卖出获利",
      "D.小木登录论坛贴图社区，上传若干风景图片，并希望网友对他的作品提出意见"
    ],
    answer: "D.小木登录论坛贴图社区，上传若干风景图片，并希望网友对他的作品提出意见",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 72,
    questionNumber: 24,
    question: "小张发现自己的办公电脑有被别人使用过的痕迹，为了防止这种情况，他可以在录电脑操作系统时，采用______，而对于重要的文件，可以采用_____，即使电脑被别人使用，文件中的内容也不会被泄露。(  )",
    choices: [
      "A. ①④",
      "B. ②③",
      "C.③④",
      "D. ①③"
    ],
    answer: "A. ①④",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 73,
    questionNumber: 1,
    question: "作为自然界三大要素之一，信息能为我们提供的价值与物质和能量所提供的价值是不同的，以下例子中没有体现信息价值的是(  )。",
    choices: [
      "A.孤陋寡闻最危险",
      "B.春雨贵如油",
      "C.知彼知已，百战不殆",
      "D.信息不准，生意亏本"
    ],
    answer: "B.春雨贵如油",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 74,
    questionNumber: 2,
    question: "在生活中，许多事物都是连续变化的，例如水银温度计的上升、汽车速度的变化等，这些连续变化的信号通常被称为(  )。",
    choices: [
      "A.模拟信号",
      "B.数字信号",
      "C.离散信号",
      "D.电信号"
    ],
    answer: "A.模拟信号",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 75,
    questionNumber: 3,
    question: "小王对某个音频文件进行如下的编辑，其中不影响该文件存储容量的操作是(  )。",
    choices: [
      "A.高音量改为低音量",
      "B.量化位数从16位改为8位",
      "C.双声道改为单声道",
      "D.采样频率从44.1kHz改为4.1kHz"
    ],
    answer: "A.高音量改为低音量",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 76,
    questionNumber: 4,
    question: "右图是一块魔方的结构图，魔方的每个面上均有9个小格，如果每一个小格都需要用二进制来进行编码，且每个小格的编码均不相同，则完成整个魔方的编码需要(  )个二进制位进行编码。",
    choices: [
      "A.4位",
      "B.5位",
      "C.6位",
      "D.7位"
    ],
    answer: "C.6位",
    score: 2.5,
    image: "img/4-4.jpg",
    explanation: ""
  },
  {
    indexNumber: 77,
    questionNumber: 5,
    question: "众里寻他千百度，蓦然回首，那人却在灯火阑珊处(辛弃疾《青玉案》)，所体现的算法是(  )。",
    choices: [
      "A.回溯",
      "B.贪心",
      "C.分治",
      "D.递归"
    ],
    answer: "A.回溯",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 78,
    questionNumber: 6,
    question: "某算法流程如下图所示，如果输入n的初值为5，下列描述正确的是(  )。",
    choices: [
      "A.对条件n>1的判断为5次",
      "B.该算法结束后，c的值为5",
      "C.该算法是循环结构，无分支结构",
      "D、4-6d.jpg"
    ],
    answer: "B.该算法结束后，c的值为5",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 79,
    questionNumber: 7,
    question: "运行 Python 语句“print(type(['云南”,'四川','贵州']))”的结果是(  )。",
    choices: [
      "A.<class 'list' >",
      "B. <class 'str' >",
      "C.<class ' int' >",
      "D.<class ' tuple'>"
    ],
    answer: "A.<class 'list' >",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 80,
    questionNumber: 8,
    question: "下列 Python 程序运行后的结果是(  )。",
    choices: [
      "A. 4",
      "B. 5",
      "C.6",
      "D.7"
    ],
    answer: "C.6",
    score: 2.5,
    image: "img/4-8.jpg",
    explanation: ""
  },
  {
    indexNumber: 81,
    questionNumber: 9,
    question: "利用Python 求出100以内所有能被3整除的正整数，则下列程序第3行的横线处应该填(  )。",
    choices: [
      "A. i=i*3",
      "B， i=i%3",
      "C.i%3==0",
      "D，i/3 ==1"
    ],
    answer: "C.i%3==0",
    score: 2.5,
    image: "img/4-9.jpg",
    explanation: ""
  },
  {
    indexNumber: 82,
    questionNumber: 10,
    question: "阅读如下Python 程序段，该程序段运行后，输出m的值是(  )。",
    choices: [
      "A. 53",
      "B. 18",
      "C.26",
      "D. c"
    ],
    answer: "A. 53",
    score: 2.5,
    image: "img/4-10.jpg",
    explanation: ""
  },
  {
    indexNumber: 83,
    questionNumber: 11,
    question: "阅读如下Python 程序段:",
    choices: [
      "A. 30",
      "B.20",
      "C.60",
      "D.80"
    ],
    answer: "A. 30",
    score: 2.5,
    image: "img/4-11.jpg",
    explanation: ""
  },
  {
    indexNumber: 84,
    questionNumber: 12,
    question: "IF函数是电子表格软件中用来作条件判断的函数，单元格A1的值是60，A2的值是55，如果在 A3 输人“=IF(AND(A1>=60,A2>=60),'通过','未通过')”，确定后得到的结果是(  )。",
    choices: [
      "A.通过",
      "B.未通过",
      "C.null",
      "D. 115"
    ],
    answer: "B.未通过",
    score: 2.5,
    image: "img/4-12.jpg",
    explanation: ""
  },
  {
    indexNumber: 85,
    questionNumber: 13,
    question: "智能手机都具有“计步”功能，该功能可以统计使用者的步数，那么该功能的开发体现了(  )数据采集的应用。",
    choices: [
      "A.统计报表",
      "B. 网络爬虫",
      "C.传感器",
      "D.实验数据采集"
    ],
    answer: "C.传感器",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 86,
    questionNumber: 14,
    question: "matplotlib库中的 pyplot 子库主要用来绘制图表，其中函数scatter(  )用来绘制散点图，绘制曲线图的函数是(  )。",
    choices: [
      "A.plot(  )",
      "B.ylabel(  )",
      "C:title(  )",
      "D.show(  )"
    ],
    answer: "A.plot(  )",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 87,
    questionNumber: 15,
    question: "下面关于人工智能的说法错误的是(  )。",
    choices: [
      "A.人工智能一定程度上能模仿人类的活动",
      "B.人工智能可以全面取代人类活动",
      "C.人工智能的发展将改变人类社会生活",
      "D.人工智能的发展也会产生一些负面的社会影响"
    ],
    answer: "B.人工智能可以全面取代人类活动",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 88,
    questionNumber: 16,
    question: "下列应用中，没有体现人工智能技术的有(  )。",
    choices: [
      "A.“天网”视频监控系统可以自动识别犯罪分子的容貌",
      "B.百度识图可以上传图片并在互联网上自动搜索与该图片相似的其他图片",
      "C.某电视台的虚拟主持人在节目中和嘉宾聊得不亦乐乎",
      "D.在国际会议中，同声传译员实时地将听到的内容翻译后传递给观众"
    ],
    answer: "D.在国际会议中，同声传译员实时地将听到的内容翻译后传递给观众",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 89,
    questionNumber: 17,
    question: "近年来,“互联网+政务服务”已成为推进政府治理现代化的重要途径，“人在家中坐，事情全办妥”成为了常态，以下属于在线政府特征的有(  )。\n①科学决策 ②公开透明 ③低效治理④互动参与",
    choices: [
      "A. ①②③④",
      "B.①②③",
      "C.②③④",
      "D.①②④"
    ],
    answer: "D.①②④",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 90,
    questionNumber: 18,
    question: "下面关于信息系统及其支撑技术，描述错误的是(  )。",
    choices: [
      "A.计算机硬件主要由输入设备、运算器、控制器、存储器和输出设备组成，移动终端也主要由这五部分组成",
      "B.Android(安卓)、Apple 0S、Harmony0s(鸿蒙)是常见的移动终端应用软件(App)",
      "C.旅客使用二代身份证在火车站的闸机上进行身份验证，其中使用了RFID(射频识别)技术",
      "D.信息系统是指由软件、硬件设施、通信网络、数据和用户构成的人机一体化交互系统，比如12306火车票网上售票系统就是信息系统"
    ],
    answer: "B.Android(安卓)、Apple 0S、Harmony0s(鸿蒙)是常见的移动终端应用软件(App)",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 91,
    questionNumber: 19,
    question: "下列关于生活中常用的传感器说法错误的是(  )。",
    choices: [
      "A.电饭锅、测温仪中用到了温度传感器",
      "B.光电鼠标、火灾报警器中用到了光敏传感器",
      "C.商城自动门用到了红外线传感器",
      "D.手机光敏传感器可用来解锁、加密、支付等"
    ],
    answer: "D.手机光敏传感器可用来解锁、加密、支付等",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 92,
    questionNumber: 20,
    question: "下列属于计算机网络中有线传输介质的是(  )。",
    choices: [
      "A.光纤",
      "B.激光",
      "C.微波",
      "D.红外线"
    ],
    answer: "A.光纤",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 93,
    questionNumber: 21,
    question: "小曲准备在京东商城购买一台笔记本，以下是她挑选电脑的型号与参数，分析选项说法正确的是(  )。",
    choices: [
      "A.windows 10、0mce 是系统软件",
      "B.这台电脑的硬盘采用的是固态硬盘和机械硬盘双硬盘",
      "C.挑选电脑时看 CPU 性能即可，其他参数不重要",
      "D.这台电脑轻巧便携，适合轻松随行移动办公"
    ],
    answer: "D.这台电脑轻巧便携，适合轻松随行移动办公",
    score: 2.5,
    image: "img/4-21.jpg",
    explanation: ""
  },
  {
    indexNumber: 94,
    questionNumber: 22,
    question: "下图是某车站票务信息系统的部分组成结构，根据图示分析，关于这个信息系统说法错误的是(  )。",
    choices: [
      "A.信息系统的基本组成包括用户、硬件、软件、网络和数据",
      "B.交换机、无线 AP、核心交换机属于信息系统的网络通信硬件部分",
      "C.售票软件、管理系统等属于这个信息系统的软件部分",
      "D.人工售票、自助售票负责数据输入，没有数据输出"
    ],
    answer: "D.人工售票、自助售票负责数据输入，没有数据输出",
    score: 2.5,
    image: "img/4-22.jpg",
    explanation: ""
  },
  {
    indexNumber: 95,
    questionNumber: 23,
    question: "登录信息系统，用户输入用户名和密码后，还要求输人验证码，目的是确保(  )。",
    choices: [
      "A.区分当前用户是计算机还是人",
      "B.为了验证用户的用户名和密码是否正确",
      "C.为了检查用户名和密码是否匹配",
      "D.验证用户身份是否正确"
    ],
    answer: "A.区分当前用户是计算机还是人",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 96,
    questionNumber: 24,
    question: "在使用信息系统过程中养成规范的使用习惯，树立信息安全意识，以下说法错误的是(  )。",
    choices: [
      "A.不要随意扫描或点击陌生人的二维码，不要轻易打开他人发送的网页链接",
      "B.不要随意打开电子邮件中的附件，在打开下载的附件前，先使用杀毒软件查杀病毒",
      "C.更换新手机后，删除旧手机中隐私信息后可以丢弃",
      "D.给智能手机、平板电脑等安装软件时要注意权限说明，对读取通信录、获取地理位置等权限的请求，要谨慎对待"
    ],
    answer: "C.更换新手机后，删除旧手机中隐私信息后可以丢弃",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 97,
    questionNumber: 1,
    question: "现代人的生活逐渐离不开手机，我们在手机上进行的每一次浏览和点击都会成为数据的一部分，对于上述描述，下列说法错误的是（	）",
    choices: ["A、我们所产生的数据在处理后可以创造一定的价值", "B、我们只是普通人，所以我们所产生的数据是完全没有价值的", "C、我们每天在互联网上所产生的数据也面临着泄露的风险", "D、网络上“猜你喜欢”或“推荐商品”等功能的实现依赖于你上网的数据"],
    answer: "B、我们只是普通人，所以我们所产生的数据是完全没有价值的",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 98,
    questionNumber: 2,
    question: "某汽车仪表盘显示的部分内容如图所示，以下关于数据、信息和知识说法中错误的是（	）。",
    choices: ["A、图中的数字“1/2”是数据的体现", "B、“现在指针指向3/4处”，这是信息的体现", "C、“当红色指针快要指向E时，车辆就需要尽快加油”，这是知识的体现", "D、该仪表盘上没有体现任何信息"],
    answer: "D、该仪表盘上没有体现任何信息",
    score: 2.5,
    image: "img/5-2.jpg",
    explanation: ""
  },
  {
    indexNumber: 99,
    questionNumber: 3,
    question: "小明在运动会时和同桌拍了一张2400 x1600像素的照片，由于照片太大，小明在锁 定纵横比的情况下对这张图片的大小进行调整，下列选项中可能是调整后图片大小 的是（）。",
    choices: ["A、2000 x1200", "B、1200 x600", "C、900x700", "D、300 x200"],
    answer: "D、300 x200",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 100,
    questionNumber: 4,
    question: "下列数字中属于奇数的是（）。",
    choices: ["A、(10000)2", "B、(10111)2", "C、(11010)2", "D、(11110)2"],
    answer: "B、(10111)2",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 101,
    questionNumber: 5,
    question: "执行下面Python程序，将输出多少次“hello”（）。",
    choices: ["A、5次", "B、20次", "C、4次", "D、10次2"],
    answer: "B、20次",
    score: 2.5,
    image: "img/5-5.jpg",
    explanation: ""
  },
  {
    indexNumber: 102,
    questionNumber: 6,
    question: "小明设置了一个闹钟，周末他会关掉闹钟睡到自然醒，下面流程图中①②处分别应 该填人（）。",
    choices: ["A、是（Y)  否（N)", "B、否（N)  是（Y)", "C、是（Y)  是（Y)", "D、否（N) 否（N)"],
    answer: "A、是（Y)  否（N)",
    score: 2.5,
    image: "img/5-6.png",
    explanation: ""
  },
  {
    indexNumber: 103,
    questionNumber: 7,
    question: "下图是一段Python程序，如果输人数据为11和3,则程序运行后“总费用为” ( )元。",
    choices: ["A、26.40", "B、29.70", "C、30.50", "D、33.00"],
    answer: "A、26.40",
    score: 2.5,
    image: "img/5-7.jpg",
    explanation: ""
  },
  {
    indexNumber: 104,
    questionNumber: 8,
    question: "小曲在学习了程序设计之后，尝试编写计算城市人口密度的程序（城市人口密度=人口总数/ 土地面积），并比较北京和上海的人口密度。根据下列程序分析，代码第9 行的运行结果为（	）。",
    choices: ["A、False", "B、True", "C、0.13", "D、0.38"],
    answer: "A、False",
    score: 2.5,
    image: "img/5-8.jpg",
    explanation: ""
  },
  {
    indexNumber: 105,
    questionNumber: 9,
    question: "小曲使用Python编写了一个计算某月天数的程序，她先将十二个月的天数存储到列表中，程序会根据用户输人的月份，输出该月份有多少天。请根据下面程序分析， 第3行划线处正确的代码是（	）。",
    choices: ["A、num_ days = days_ in_ month [month]", "B、num_ days = days_ in_ month [0]", "C、num_ days = days_ in_ month [ month + 1 ]", "D、num_ days = days_ in_ month [ month - 1 ]"],
    answer: "D、num_ days = days_ in_ month [ month - 1 ]",
    score: 2.5,
    image: "img/5-9.jpg",
    explanation: ""
  },
  {
    indexNumber: 106,
    questionNumber: 10,
    question: "在学习Python Turtle库后，小曲编写代码设计了一个图案，下列代码绘制的图案是（ ）",
    choices: ["A、5-10A.png", "B、5-10B.png", "C、5-10C.png", "D、5-10D.png"],
    answer: "A、5-10A.png",
    score: 2.5,
    image: "img/5-10.png",
    explanation: ""
  },
  {
    indexNumber: 107,
    questionNumber: 11,
    question: "Python中的count ( )方法用于统计字符串里某个字符出现的次数，使用方法为str. count (sub, start, end), sub代表字符，start和end分别代表开始搜索和结束搜索 的位置，则执行下图程序后，得到的结果为（ ）。",
    choices: ["A、0", "B、1", "C、2", "D、3"],
    answer: "B、1",
    score: 2.5,
    image: "img/5-11.png",
    explanation: ""
  },
  {
    indexNumber: 108,
    questionNumber: 12,
    question: "IF函数是电子表格软件中用来做条件判断的函数，单元格A2的值是60,如果在A3输入“=IF(A2> =80,“—等奖二等奖”）”，确定后得到的结果是（ ）。",
    choices: ["A、—等奖", "B、二等奖", "C、三等奖", "D、60"],
    answer: "B、二等奖",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 109,
    questionNumber: 13,
    question: "Numpy是使用Python进行科学计算的外部库。能生成功能强大的N维数组对象，关于下列程序说法正确的是（ ）。",
    choices: ["A、生成的x1和x2序列是一样的", "B、x1有5个数字，为[10:32.5 55.77.5 100.]", "C、x2有5个数字，为[10:32.555.77.5100.]", "D、x1有18个数字，为[1015 20 25 30 35 40 45 50 55 60 65 70 75 80 85 90 95]"],
    answer: "D、x1有18个数字，为[1015 20 25 30 35 40 45 50 55 60 65 70 75 80 85 90 95]",
    score: 2.5,
    image: "img/5-13.png",
    explanation: ""
  },
  {
    indexNumber: 110,
    questionNumber: 14,
    question: "某组织将春节期间某地区人们主要支出情况的调查数据可视化，如下图所示，下列分析错误的是( )。",
    choices: ["A、棋牌、KTV等娱乐活动”的支出，23-30岁人群的花费最多", "B、不同年龄段的人群“买年货”的支出都是最多的", "C、60岁以上人群的最大花费是“压岁钱”最少花费是“棋牌、KTV 等娱乐活动”", "D、“走亲访友的礼物”的支出，51岁以上人群的花费比较大"],
    answer: "B、不同年龄段的人群“买年货”的支出都是最多的",
    score: 2.5,
    image: "img/5-14.png",
    explanation: ""
  },
  {
    indexNumber: 111,
    questionNumber: 15,
    question: "智能客服机器人是一款基于知识库的智能问答机器人，以下关于智能问答A器人的说法中错误的是（）。",
    choices: ["A、智能问答机器人是在某一领域知识范围内，实现人机自动问答的智能信息系统", "B、智能问答机器人是一种新颖的操作系统", "C、智能问答机器人，通过语料库检索出相关文档和答案，再从相关的候选答案中 提取最接近问题的结", "D、人们可以直接使用自然语言组成的问句进行提问，智能问答机器人采用了自然 语言处理技术，根据相关领域知识，快速、准确地返回答案"],
    answer: "B、智能问答机器人是一种新颖的操作系统",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 112,
    questionNumber: 16,
    question: "下列关于图灵测试说法错误的是（	）。",
    choices: ["A、图灵测试是测试机器是否具有智能唯一的方法", "B、图灵测拭会在测试人在与被测试者（一个人和一台机器）隔开的情况下，通过一 些装置（如键盘）向被测试者随意提问，测试者根据问答判断被测试者是人还 是机器", "C、图灵测试由“现代计算机理论之父”图灵提出", "D、通过问答的方式能通过图灵测试，不代表这个机器能具备像人一样的心智"],
    answer: "A、图灵测试是测试机器是否具有智能唯一的方法",
    score: 2.5,
    image: "img/5-16.png",
    explanation: ""
  },
  {
    indexNumber: 113,
    questionNumber: 17,
    question: "以下不是信息社会的重要特征的是（	）。",
    choices: ["A、网络和数字产品成为人们的生活必需品，随着数字化生活工具的高度普及，生活将越来越舒适和便捷", "B、在线政府体现政府决策更趋于科学化，政府运行更为公开化，政府行政效率和 服务质量进一步提高", "C、网络化是信息社会最为典型的特征", "D、信息社会崇尚人性发展，不具包容性"],
    answer: "D、信息社会崇尚人性发展，不具包容性",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 114,
    questionNumber: 18,
    question: "小曲在商店挑选手机时，选择了华为P40 Pro,以下是送款手机的具体参数，下列选 项分析中说法错误的是（	）。",
    choices: ["A、运行内存决定了手机的运算速度和性能", "B、手机的体系结构与计算机的体系结构类似", "C、手机的屏幕既是输入设备也是输出设备", "D、运行内存和机身存储都是手机的存储器"],
    answer: "A、运行内存决定了手机的运算速度和性能",
    score: 2.5,
    image: "img/5-18.png",
    explanation: ""
  },
  {
    indexNumber: 115,
    questionNumber: 19,
    question: "下面案例描述中，属于信息系统局限性的是（	）",
    choices: ["A、印象笔记有多终端，随时随地记录，方便查询和整理", "B、美团外卖用户可以快速找到美食，随时随地下单，网上支付，快捷方便", "C、淘宝购买食物看不到真实的食物来源，有时候图文不符", "D、12306火车票网上售票系统解决“出行买票难”的问题"],
    answer: "C、淘宝购买食物看不到真实的食物来源，有时候图文不符",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 116,
    questionNumber: 20,
    question: "下图是小曲家组建的一个小型无线网 络，下列分析说法错误的是（	)。",
    choices: ["A、手机、平板及笔记本等移动终端 通过无线连接网络，不需要网卡", "B、组建小型无线网络一般需要无线 路由器、网卡、调制解调器、无 线终端等设备", "C、无线局域网一般用于家庭和小型 办公网络，通常与调制解调器 (Modem)相连", "D、图中WAN是广域网的简写，LAN是局域网的简写"],
    answer: "A、手机、平板及笔记本等移动终端 通过无线连接网络，不需要网卡",
    score: 2.5,
    image: "img/5-20.png",
    explanation: ""
  },
  {
    indexNumber: 117,
    questionNumber: 21,
    question: "关于IP地址说法错误的是（	）。",
    choices: ["A、IPv4地址由一个32位长的二进制数组成", "B、IP地址分为网络号和主机号，由默认网关划分", "C、DNS可以帮助计算机自动获取域名所对应的IP地址", "D、216. 276. 54. 5是个错误的1P地址"],
    answer: "B、IP地址分为网络号和主机号，由默认网关划分",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 118,
    questionNumber: 22,
    question: "下列关于物联网的结构说法错误的是（	）。",
    choices: ["A、物联网的结构包括感知层、网络层、应用层", "B、感知层实现对物理世界的智能感知识别等，传感器属于感知层", "C、网络层实现信息的传递、路由和控制等，网络设备、RFID、二维码属于网络层", "D、应用层包括应用基础设施和各种物联网应用，云计算、WEB服务等属于应用层"],
    answer: "C、网络层实现信息的传递、路由和控制等，网络设备、RFID、二维码属于网络层",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 119,
    questionNumber: 23,
    question: "下列关于安全防范中密码技术说法错误的是（	）。",
    choices: ["A、密码技术包含了加密过程和解密过程", "B、密码技术的基本原理是在发送端将数据变换成某种形式，把信息隐藏起来，在 接收端通过反变换恢复数据的原样", "C、凯撒密码是一种密码技术", "D、数据进行加密后，数据就不会泄露"],
    answer: "D、数据进行加密后，数据就不会泄露",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 120,
    questionNumber: 24,
    question: "春节期间^小明同学突然接到外地电话，对方声称是小明的朋友王某，并完全报出小明的姓名身份证号码和家庭住址等，说自己最近家庭遇到一些困难，想问小明 借钱。小明当即判断应该是自己的个人信息被泄露了，并及时挂断了电话。针对这 种情况下列说法错误的是（	）。",
    choices: ["A、小明的个人隐私权未受到侵害，不用理睬此类电话", "B、尝试寻找个人信息泄露源头，注销或更换相应账号", "C、可能的信息泄露渠道有：网站注册信息被窃取，网上交流、购物等信息被窃取", "D、D.生活中我们应该增强信息安全意识，保护自己的隐私"],
    answer: "A、小明的个人隐私权未受到侵害，不用理睬此类电话",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 121,
    questionNumber: 1,
    question: "下列对于数据的说法正确的是（\t）。",
    choices: [
      "A.互联网是数据产生的唯一方式",
      "B.手工处理数据的方式已经无法满足数据的快速增长，所以我们应该彻底废弃这种 方式",
      "C.现代信息技术的发展让数据的传输变得更慢了",
      "D.数据的表现形式不局限于数字，还有文字、图片、音频、视频等"
    ],
    answer: "C.现代信息技术的发展让数据的传输变得更慢了",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 122,
    questionNumber: 2,
    question: "—个十进制的奇数转换为二进制之后，其最后一位（最右边的位）必然是（\t）。",
    choices: [
      "A. 0",
      "B. 1",
      "C. 2",
      "D.无法确定"
    ],
    answer: "B. 1",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 123,
    questionNumber: 3,
    question: "—幅1000x900像素、24位色未经压缩的BMP图像，在不更改其他参数和文件类型\n的情况下将其大小更改为500 X300像素，则新图和原图容量比为（\t）。",
    choices: [
      "A. 2:1",
      "B. 4:1",
      "C.1:4",
      "D.1:6"
    ],
    answer: "D.1:6",
    score: 2.5,
    image: "",
    explanation: ""
  }, {
    indexNumber: 124,
    questionNumber: 4,
    question: "将6个灯泡排成一行，用〇和●表示灯亮和灯不亮，下图是这一行灯的五种情况，分别表示五个数字:1，2，3，4，5，那么●●○●○○●表示的数是( )。",
    choices: [
      "A.22",
      "B:89",
      "C.105",
      "D.113"
    ],
    answer: "A.22",
    score: 2.5,
    image: "img/6-4.png",
    explanation: ""
  }, {
    indexNumber: 125,
    questionNumber: 5,
    question: "下列关于算法的描述，正确的是（\t）。",
    choices: [
      "A.算法只能用自然语言描述",
      "B.解决一个问题的算法是唯一的",
      "C.同一个问题的算法不同，结果也不会相同",
      "D.算法过程要一步步执行，每一步执行的操作必须准确"
    ],
    answer: "D.算法过程要一步步执行，每一步执行的操作必须准确",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 126,
    questionNumber: 6,
    question: "某算法的部分流程图如图所示，执行这部分流程图，若输人x的值为-5，则输出结果为()。",
    choices: [
      "A. 2",
      "B.4",
      "C.5",
      "D.25"
    ],
    answer: "B.4",
    score: 2.5,
    image: "img/6-6.png",
    explanation: ""
  }, {
    indexNumber: 127,
    questionNumber: 7,
    question: "下列关于Python语句说法正确的是（ ）。",
    choices: [
      "A.如果a=3、b=5,执行a, b=b，a可以将a. b的值进行互换",
      "B.在Python中，'=='表示赋值符号",
      "C.只能用数字对变量进行赋值",
      "D.在Python中每次只能给一个变量赋值，不能给多个变量同时赋值"
    ],
    answer: "A.如果a=3、b=5,执行a, b=b，a可以将a. b的值进行互换",
    score: 2.5,
    image: "",
    explanation: ""
  }, {
    indexNumber: 128,
    questionNumber: 8,
    question: "下列Python表达式结果为10的是（）。",
    choices: [
      "A.abs(int(-10.6))",
      "B.len('7+3')",
      "C.int(-10.6)",
      "D.round(10.9)"
    ],
    answer: "A.abs(int(-10.6))",
    score: 2.5,
    image: "",
    explanation: ""
  }, {
    indexNumber: 129,
    questionNumber: 9,
    question: "以下代码的输出结果是（)",
    choices: [
      "A.200",
      "B. 4",
      "C.300",
      "D.2"
    ],
    answer: "B. 4",
    score: 2.5,
    image: "img/6-9.png",
    explanation: ""
  }, {
    indexNumber: 130,
    questionNumber: 10,
    question: "小曲在学习使用Python turtle绘制正方形时，将左转90度写成了左转95度，编写的代码如下所示，则运行后的图形为（）。",
    choices: [
      "A.6-10A.png",
      "B.6-10B.png",
      "C.6-10C.png",
      "D.6-10D.png"
    ],
    answer: "A.6-10A.png",
    score: 2.5,
    image: "img/6-10.png",
    explanation: ""
  },
  {
    indexNumber: 131,
    questionNumber: 11,
    question: "在Python中，向m={'a':1,'b':2,'d':4}中添加键值对应该使用下列哪个语句()。",
    choices: [
      "A.m(3)='c”",
      "B.m[2]=3",
      "C.m['c'] =3",
      "D.m['3']=c"
    ],
    answer: "C.m['c'] =3",
    score: 2.5,
    image: "",
    explanation: ""
  }, {
    indexNumber: 132,
    questionNumber: 12,
    question: "小明通过“国家数据”平台找到了我国西南5省的旅游人数的数据，如果想通过函 数求出云南省五年来接待外国游客的平均人数，则应在单元格G3中输人的函数是（).",
    choices: [
      "A.= AVERAGE (B3： F3)",
      "A.B. =SUM (B3： F3)",
      "C. = AVERAGE (F3: F7)",
      "D. = AVERAGE (B3： B7)"
    ],
    answer: "A.= AVERAGE (B3： F3)",
    score: 2.5,
    image: "img/6-11.png",
    explanation: ""
  }, {
    indexNumber: 133,
    questionNumber: 13,
    question: "13.词云图是目前常用的关键词可视化数据表达方式之一，下图是中学课文《背影》的 词云图示例。制作词云的方法很多，我们常用Python编程进行词云图制作，利用 Python编写程序制作词云图的顺序是（ ）。",
    choices: [
      "A.①②④③",
      "B.①②③④",
      "C.④①②③",
      "D.②①④③"
    ],
    answer: "D.②①④③",
    score: 2.5,
    image: "img/6-13.png",
    explanation: ""
  }, {
    indexNumber: 134,
    questionNumber: 14,
    question: "某学校举行运动会，数据组正在整理“男子组100米”的比赛成绩，数据如下表所示：",
    choices: [
      "A.数据缺失",
      "B.数据重复",
      "C.格式不一致",
      "D.以上问题都存在"
    ],
    answer: "C.格式不一致",
    score: 2.5,
    image: "img/6-14.png",
    explanation: ""
  },
  {
    indexNumber: 135,
    questionNumber: 15,
    question: "人脸识别技术是基于人的脸部特征，对输人的人脸图像或者视频流，首先判断其是否存在人脸，如果存在人脸，则进一步给出脸的大小及主要面部器官的位置信息。人脸识别技术大致可分为5个步骤，以下正确的排序是：①人脸特征提取②匹配与识别③人脸检测④人脸采集⑤人脸图像预测处理",
    choices: [
      "A.①③④⑤②",
      "B.③②①④⑤",
      "C.⑤②④①③",
      "D.④③⑤①②"
    ],
    answer: "D.④③⑤①②",
    score: 2.5,
    image: "img/6-15.png",
    explanation: ""
  }, {
    indexNumber: 136,
    questionNumber: 16,
    question: "通过交通信息采集系统采集道路中的车辆流量、行车速度等信息，经智能系统分析后调整各路口红绿灯时长，属于人工智能在（\t）领域的应用。",
    choices: [
      "A.智能物流",
      "B.智能安防",
      "C.智能控制",
      "D.智能交通"
    ],
    answer: "D.智能交通",
    score: 2.5,
    image: "",
    explanation: ""
  }, {
    indexNumber: 137,
    questionNumber: 17,
    question: "以下生活中的场景，没有体现信息社会特征的是（\t）。",
    choices: [
      "A.和好友利用课余时间一起到河边写生",
      "B.在超市购物结账时，拿出手机出示付款码即可结算",
      "C.各种政务服务平台逐渐推广，为公众提供各种服务的同时也接受公众的监督",
      "D.在疫情期间，推广“健康码”“通信行程卡”等应用，为疫情防控提供信息化 支持"
    ],
    answer: "A.和好友利用课余时间一起到河边写生",
    score: 2.5,
    image: "",
    explanation: ""
  }, {
    indexNumber: 138,
    questionNumber: 18,
    question: "校园一卡通收费系统的核心功能之一是自动化收费，可以实现电子货币自动流转如刷卡付费、售卡充值、交易结算等。其中交易结算属于这个信息系统的(）功能。",
    choices: [
      "A.输入功能",
      "B.输出功能",
      "C.存储功能",
      "D.处理功能"
    ],
    answer: "D.处理功能",
    score: 2.5,
    image: "",
    explanation: ""
  }, {
    indexNumber: 139,
    questionNumber: 19,
    question: "下图是台式机的主要组件，说法正确的是()。",
    choices: [
      "A.①是CPU，主要负责对数据进行运算处理",
      "B.②是CPU，主要负责对数据进行运算处理",
      "C.③是硬盘，主要负责工作时与CPU交换数据",
      "D.④是硬盘，是计算机的输出设备"
    ],
    answer: "A.①是CPU，主要负责对数据进行运算处理",
    score: 2.5,
    image: "img/6-19.png",
    explanation: ""
  },
  {
    indexNumber: 140,
    questionNumber: 20,
    question: "智能手机都配置有各类传感器。如果要实现下述功能:检测手机是否贴在耳朵上正在打电话，以便自动调暗屏幕达到省电的目的。这需要()传感器。",
    choices: [
      "A.温度",
      "B.加速度",
      "C.紫外线",
      "D.距离"
    ],
    answer: "D.距离",
    score: 2.5,
    image: "",
    explanation: ""
  }, {
    indexNumber: 141,
    questionNumber: 21,
    question: "小曲家是通过使用PPPOE拨号上网，下图是她们家的网络结构示意图，下列选项说法错误的是(）。",
    choices: [
      "A.一般情况接人因特网是ISP将光纤接人光调制解调器，俗称“光猫”",
      "B.一般通过双绞线将无线路由器WAN口和调制解调器连接起来",
      "C.手机、平板电脑通过无线 Wi-Fi接入无线路由器",
      "D.移动设备接入无线路由器后必须通过手动才能设置IP地址"
    ],
    answer: "D.移动设备接入无线路由器后必须通过手动才能设置IP地址",
    score: 2.5,
    image: "img/6-21.png",
    explanation: ""
  }, {
    indexNumber: 142,
    questionNumber: 22,
    question: "以下物联网通信技术中，（\t）不属于近距离无线通信技术。",
    choices: [
      "A.蓝牙",
      "B. NFC",
      "C. RFID",
      "D.移动通信网络5G"
    ],
    answer: "D.移动通信网络5G",
    score: 2.5,
    image: "",
    explanation: ""
  }, {
    indexNumber: 143,
    questionNumber: 23,
    question: "下列关于信息系统应用中的安全风险说法错误的是（\t）。",
    choices: [
      "A.自然巧害、软硬件漏洞、恶意攻击、人为失误等都会给信息系统带来安全风险",
      "B.恶意攻击是无法避免的，对于该类风险不需要防范浪费成本",
      "C.信息系统工程是个社会系统工程，需要多方面综合防护",
      "D.网络因素以及数据传播过程中也会存在安全风险"
    ],
    answer: "B.恶意攻击是无法避免的，对于该类风险不需要防范浪费成本",
    score: 2.5,
    image: "",
    explanation: ""
  }, {
    indexNumber: 144,
    questionNumber: 24,
    question: "在信息社会中，以下（）是个人信息安全使用行为。",
    choices: [
      "A.小刘妈妈发现路边有人做活动，扫一下二维码就可以获得小礼品，她就拿出手 机扫了二维码并按提示进行了一些操作，获得了一份小礼品。",
      "B.小赵爸爸为了上网方便，在手机里设置了自动连接Wi-Fi的功能。一天晚上， 一家人在外面餐厅吃饭时，爸爸搜寻到一个不用输人密码就能登录的免费Wi - Fi，爸爸就登录了手机银行，输人卡号和密码査询银行卡账号余额。",
      "C.小王妈妈钱包被盗窃，紧接着银行卡中的钱也被取走，她的钱包中有身份证与 银行卡，并且将身份证号的后六位设置为银行卡密码。",
      "D.小君家中计算机的硬盘中保存有她从小到大成长过程中的照片和视频，非常珍 贵，小君妈妈会定时用移动硬盘、云空间做备份。"
    ],
    answer: "D.小君家中计算机的硬盘中保存有她从小到大成长过程中的照片和视频，非常珍 贵，小君妈妈会定时用移动硬盘、云空间做备份。",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber: 145,
    questionNumber: 1,
    question: "下述对数据、信息和知识的描述，错误的是()。",
    choices: [
      "A.数据和信息的关系可以看成是“原料”和“成品”之间的关系",
      "B.信息来源于数据，是经过加工处理的数据",
      "C.数据、信息与知识三者之间的价值变化趋势是逐渐递减",
      "D.知识是人们运用大脑对获取或积累的信息进行系统化提炼、研究和分析的结果"
    ],
    answer: "C.数据、信息与知识三者之间的价值变化趋势是逐渐递减",
    score: 2.5,
    image: "",
    explanation: ""
  }, {
    indexNumber:146,
    questionNumber: 2,
    question: "小明利用2022年北京冬奥会会徽制作了一张宣传图(图一)，图片属性如下图所示(图二)，则该图片的存储容量大小约为（）。",
    choices: [
      "A.3MB",
      "B. 3KB",
      "C.24MB",
      "D.24KB"
    ],
    answer: "A.3MB",
    score: 2.5,
    image: "img/7-2.png",
    explanation: ""
  }, {
    indexNumber:147,
    questionNumber: 3,
    question: "如右图所示:大拇指代表最高位，小拇指代表最低位，伸直为1，弯曲为0，那么下图的手势编码为()。",
    choices: [
      "A. 10011",
      "B. 11001",
      "C.00110",
      "D.01100"
    ],
    answer: "B. 11001",
    score: 2.5,
    image: "img/7-3.png",
    explanation: ""
  }, {
    indexNumber:148,
    questionNumber: 4,
    question: "如果我们用一个■代表一位数，几个■代表几位数，那么(1■■1■)2,右下角标能表示的十进制数字范围是()。",
    choices: [
      "A.0~32",
      "B.17~31",
      "C.18~31",
      "D.16~32"
    ],
    answer: "C.18~31",
    score: 2.5,
    image: "",
    explanation: ""
  }, {
    indexNumber:149,
    questionNumber: 5,
    question: "观察右侧流程图，下列关于算法特征表述错误的是(）。",
    choices: [
      "A.算法可以没有数据输入",
      "B.算法必须至少有一个输出",
      "C.该流程图符合算法的有穷性特征",
      "D.该流程图中s=s+1体现了算法的确定性"
    ],
    answer: "C.该流程图符合算法的有穷性特征",
    score: 2.5,
    image: "img/7-5.png",
    explanation: ""
  }, {
    indexNumber:150,
    questionNumber: 6,
    question: "在python中，以下程序运行后的结果是()。",
    choices: [
      "A.7-6A.png",
      "B.7-6B.png",
      "C.7-6C.png",
      "D.7-6D.png"
    ],
    answer: "D.7-6D.png",
    score: 2.5,
    image: "img/7-6.png",
    explanation: ""
  },
  {
    indexNumber:151,
    questionNumber: 7,
    question: "在Pyhon 编程中，判断一个学生是否是一名体重(weigbi)大于 55 千克或者身高(height)小于170厘米的男生(gender:Male)，条件表达式可以表示为()。",
    choices: [
      "A. gender == ' Male' and ( weight > 55 or height < 170)",
      "B. gender == ' Male' or weight >55 or height < 170",
      "C. gender == ' Male' or ( weight > $5 and height < 170)",
      "D. gender == ' Male' and weight >55 and height < 170"
    ],
    answer: "A. gender == ' Male' and ( weight > 55 or height < 170)",
    score: 2.5,
    image: "",
    explanation: ""
  }, {
    indexNumber:152,
    questionNumber: 8,
    question: "“不积跬步，无以至千里;不积小流，无以成江海。”每天进步一点点，一年后，你将进步很大;而每天退步一点点，一年后，你将落后很多。为完成两个励志公式1.01365~37.8和0.99365~0.03的计算，补充完善下面Python程序第6行划线部分的代码()。",
    choices: [
      "A.0.99 **365",
      "B. s2*0.99",
      "C.s2*1.01",
      "D. 1.01 ** 365"
    ],
    answer: "B. s2*0.99",
    score: 2.5,
    image: "img/7-8.png",
    explanation: ""
  }, {
    indexNumber:153,
    questionNumber: 9,
    question: "阅读并理解下面的 Python 程序代码，程序运行结果是()。",
    choices: [
      "A.7-9A.png",
      "B.7-9B.png",
      "C.7-9C.png",
      "D.7-9D.png"
    ],
    answer: "A.7-9A.png",
    score: 2.5,
    image: "img/7-9.png",
    explanation: ""
  }, {
    indexNumber:154,
    questionNumber: 10,
    question: "利用Python编写自定义函数完成阶乘的计算，代码如下所示，程序运行结果是()。",
    choices: [
      "A. 1",
      "B.120",
      "C.24",
      "D. 6"
    ],
    answer: "C.24",
    score: 2.5,
    image: "img/7-10.png",
    explanation: ""
  }, {
    indexNumber:155,
    questionNumber: 11,
    question: "下图为某班级“球类运动爱好调查表”,需要统计出爱好各种球类运动的人数。运用COUNTIF函数先统计出爱好篮球的人数，再用自动填充功能得出爱好其他球类运动的人数，那么在G3单元格中应该输入的函数是()。",
    choices: [
      "A.=COUNTIF(D3 :D49，F3)",
      "B.=COUNTIF(D$3:D$49，F3)",
      "C.=COUNTIF(B3:B49，F3)",
      "D.=COUNTIF(B$3:B$49，F3)"
    ],
    answer: "B.=COUNTIF(D$3:D$49，F3)",
    score: 2.5,
    image: "img/7-11.png",
    explanation: ""
  }, {
    indexNumber:156,
    questionNumber: 12,
    question: "利用 Python 程序绘制函数y=sin(x)的图像。若要绘制下页图所示的函数图像，则下列代码中第6行应填写的语句是()。",
    choices: [
      "A  plt. plot(x,y)",
      "B. plt.plot(y,x)",
      "C. plt.bar(x,y)",
      "D. plt. boxplot(x,y)"
    ],
    answer: "A  plt. plot(x,y)",
    score: 2.5,
    image: "img/7-12.png",
    explanation: ""
  },
  {
    indexNumber:157,
    questionNumber: 13,
    question: "词云图是一种数据可视化表达方式。关于下图所示词云图说法正确的是()。",
    choices: [
      "A.词云图只能通过字体的大小表示关键词的重要程度",
      "B.对文本分词后可直接创建词云图，无须特征提取",
      "C.从词云图可以分析出词语“父亲”比“北京”的出现频率高",
      "D.词云图必须显示该数据集包含的全部词语"
    ],
    answer: "C.从词云图可以分析出词语“父亲”比“北京”的出现频率高",
    score: 2.5,
    image: "img/7-13.png",
    explanation: ""
  }, {
    indexNumber:158,
    questionNumber: 14,
    question: "下列应用中，体现了人工智能技术的有(）。\n①微信好友间通过语音通话功能进行实时聊天\n②使用“网易云音乐”软件中“听歌识曲”的功能识别歌曲的名称\n③登录常用的购物平台时，平台会推送你“喜欢”的商品信息\n④)Excel软件中的“自动填充”功能",
    choices: [
      "A.①②",
      "B.②③",
      "C.③④",
      "D.②④"
    ],
    answer: "B.②③",
    score: 2.5,
    image: "",
    explanation: ""
  }, {
    indexNumber:159,
    questionNumber: 15,
    question: "人工智能是引领未来的战略性技术，将深刻改变人类生产生活方式。以下关于人工智能说法错误的是()。",
    choices: [
      "A.人工智能技术的发展虽然会使部分人失业，但也会创造出新的就业机会",
      "B.人工智能使我们的生活更加智能和便利",
      "C.人工智能的开发运用要遵守法律法规，防范人工智能失控的风险",
      "D.只要实现了技术突破，人工智能将全面取代人类活动"
    ],
    answer: "D.只要实现了技术突破，人工智能将全面取代人类活动",
    score: 2.5,
    image: "",
    explanation: ""
  }, {
    indexNumber:160,
    questionNumber: 16,
    question: "以下的生活场景，没有体现信息社会特征的是()。",
    choices: [
      "A.和好友利用课余时间一起到河边写生",
      "B.城市道路电子提示牌显示前方道路的实时路况",
      "C.在国家政务服务平台上可以申请办理个人电子社保卡",
      "D.推广“健康码”、“通信行程卡”等应用，为疫情防控提供信息化的数据支持"
    ],
    answer: "A.和好友利用课余时间一起到河边写生",
    score: 2.5,
    image: "",
    explanation: ""
  }, {
    indexNumber:161,
    questionNumber: 17,
    question: "以下关于信息系统说法错误的是(）。",
    choices: [
      "A.信息系统的主要功能包括输人、存储、处理、控制和输出",
      "B.网上订购系统、电子地图、照相机设备和聊天软件都是独立完整的信息系统",
      "C.信息系统是一个由硬件、软件、通信网络、数据资源和用户组成的人机交互系统",
      "D.信息系统种类繁多，功能丰富，解决有些问题可能需要多种信息系统来共同完成"
    ],
    answer: "B.网上订购系统、电子地图、照相机设备和聊天软件都是独立完整的信息系统",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber:162,
    questionNumber: 18,
    question: "下列关于计算机系统说法错误的是(）。",
    choices: [
      "A.计算机采用存储程序和程序控制自动执行的工作方式",
      "B.计算机硬件包括控制器、运算器、处理器、输入和输出设备五大组成部分",
      "C.计算机必须安装操作系统，常见的操作系统有Windows、Unix、Linux 等",
      "D.计算机采用二进制形式表示指令和数据"
    ],
    answer: "B.计算机硬件包括控制器、运算器、处理器、输入和输出设备五大组成部分",
    score: 2.5,
    image: "",
    explanation: ""
  }, {
    indexNumber:163,
    questionNumber: 19,
    question: "小敏家的平板电脑需要通过 Wi-F 方式接人因特网，必须使用的网络设备是(）。",
    choices: [
      "A.无线路由器",
      "B.交换机",
      "C.有线网卡",
      "D.集线器"
    ],
    answer: "A.无线路由器",
    score: 2.5,
    image: "",
    explanation: ""
  }, {
    indexNumber:164,
    questionNumber: 20,
    question: "小明为家里的台式计算机和笔记本电脑组建家庭局域网，已设置好台式计算机的IP地址为192.168.0.2，网关(路由器)的IP地址为192.168.0.1，可以将笔记本电脑的IP地址设置为()。",
    choices: [
      "A.192.168.0.2",
      "B.192.168.0.1",
      "C.192.168.0.30",
      "D.192.168.0.256"
    ],
    answer: "C.192.168.0.30",
    score: 2.5,
    image: "",
    explanation: ""
  }, {
    indexNumber:165,
    questionNumber: 21,
    question: "生活中，我们刷公交卡乘坐公交车;在学校，我们刷校园一卡通就餐、借阅图书21.等，这些应用使用了物联网技术中的(）。",
    choices: [
      "A.蓝牙技术",
      "B.Wi-Fi",
      "C.二维码识别技术",
      "D.射频识别技术(RFID)"
    ],
    answer: "D.射频识别技术(RFID)",
    score: 2.5,
    image: "",
    explanation: ""
  }, {
    indexNumber:166,
    questionNumber: 22,
    question: ".农业物联网运用多种传感器设备检测环境中的参数。在温度控制系统中，()获得大棚里的实时温度，通过网络设备传输给控制系统。当温度过低时，控制系统发出指令，启动大棚内的升温系统;当温度过高时，控制系统发出指令，控制大棚的卷帘自动卷起，起到通风降温的功能。",
    choices: [
      "A.触碰传感器",
      "B.温湿度传感器",
      "C.红外传感器",
      "D.超声传感器"
    ],
    answer: "B.温湿度传感器",
    score: 2.5,
    image: "img/7-22.png",
    explanation: ""
  },
  {
    indexNumber:167,
    questionNumber: 23,
    question: "下列不违背信息道德的行为是()。",
    choices: [
      "A.小丽用手机拍下同学照片，未经同学允许，制作成微表情图片在微信群中使用",
      "B.小王自恃计算机水平很“高”，通过网络强行控制别人的计算机，随意删改别人的文件",
      "C.小吴从网上下载了一篇文章，稍作修改后作为自己的作品提交给老师",
      "D.小雨喜欢写作，经常将自己的原创作品发布到博客上与好友分享"
    ],
    answer: "D.小雨喜欢写作，经常将自己的原创作品发布到博客上与好友分享",
    score: 2.5,
    image: "",
    explanation: ""
  }, {
    indexNumber:168,
    questionNumber: 24,
    question: "要做好无线网络的安全防范，以下说法错误的是()。",
    choices: [
      "A.如果需要进行网上购物和网上银行操作，尽量不要使用公共免费Wi-Fi，避免泄露自己的重要信息",
      "B.为自己家中的 Wi-Fi设置相对复杂的密码并定期更新，可提高黑客破解的难度",
      "C.进入公共场所后，把自己的手机Wi-F功能关闭，可以避免在不知情的情况下连接恶意Wi-Fi",
      "D.直接连接且不需要验证的免费Wi-Fi使用起来特别方便，可以放心使用"
    ],
    answer: "D.直接连接且不需要验证的免费Wi-Fi使用起来特别方便，可以放心使用",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber:169,
    questionNumber: 1,
    question: "某医院门口安装的热成像体温检测系统抓拍到的画面如下。结合该画面，以下关于数据、信息和知识，说法错误的是()。",
    choices: [
      "A、图中36.4℃、36.5℃、33.6℃承载的是检测系统测量的人体体温信息",
      "B.图中36.4℃、36.5℃、33.6℃是信息，所以信息是数据的载体",
      "C.从图中我们可以看出所有人的体温低于:37℃，知道他们没有发烧，这是知识的体现",
      "D.当我们孤立地看 36.4时，它仅仅是一个数据，其本身没有明确的意义"
    ],
    answer: "B.图中36.4℃、36.5℃、33.6℃是信息，所以信息是数据的载体",
    score: 2.5,
    image: "img/8-1.png",
    explanation: ""
  }, {
    indexNumber:170,
    questionNumber: 2,
    question: "小雨建立了一套编码规则对文字进行编码。观察下图，若“家”字的编码为 1110.则“蓝”字的编码为(）",
    choices: [
      "A.0010",
      "B.0100",
      "C. 1101",
      "D.1011"
    ],
    answer: "C. 1101",
    score: 2.5,
    image: "img/8-2.png",
    explanation: ""
  }, {
    indexNumber:171,
    questionNumber: 3,
    question: "小明把他自创的歌曲录制成一个时长为5分钟，采样频率为22kHz，量化位数为163.位的双声道 WAVE格式音频文件。计算该文件存储容量大小的算式是()",
    choices: [
      "A.8-3A.png",
      "B.8-3B.png",
      "C.8-3C.png",
      "D.8-3D.png"
    ],
    answer: "C.8-3C.png",
    score: 2.5,
    image: "",
    explanation: ""
  }, {
    indexNumber:172,
    questionNumber: 4,
    question: "RGB 颜色编码中，RGB(255，12，147)表示深粉色，此时G的数值12是用十进制4数表示的，其对应的二进制数为( )。",
    choices: [
      "A.00001001",
      "B.00001010",
      "C.00001011",
      "D.00001100"
    ],
    answer: "D.00001100",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber:173,
    questionNumber: 5,
    question: "右图是某市公交车上的公交卡刷卡机工作流程图。分析该流程图，如果公交卡的当前余额为10元，输出的是()。",
    choices: [
      "A.提示:请投币",
      "B.提示:余额即将不足",
      "C.提示:欢迎乘车",
      "D.M=M-2"
    ],
    answer: "C.提示:欢迎乘车",
    score: 2.5,
    image: "img/8-5.png",
    explanation: ""
  }, {
    indexNumber:174,
    questionNumber: 6,
    question: "民间流传着“韩信点兵”的故事。韩信带1500名士兵打仗，战死四五百人(战死约400-500人)，剩下的士兵排队:站3人一排，多出2人;站5人一排，多出4人站7人一排，多出6人。韩信马上说出剩余人数:1049。为实现剩余士兵人数的计算，补充完善下面Python程序第3行划线处的代码()。",
    choices: [
      "A. num%3=-2 and num%5 ==4 and num%7==6",
      "B.num%3==2 or num%5 ==4 or num%7--6",
      "C.num/3=2 and num//5 ==4 and num//7=-6",
      "D.num//3 =-2 or num//5 =4 'or num//7 ==6"
    ],
    answer: "A. num%3=-2 and num%5 ==4 and num%7==6",
    score: 2.5,
    image: "img/8-6.png",
    explanation: ""
  }, {
    indexNumber:175,
    questionNumber: 7,
    question: "绘制正六边形的 Python 程序代码如右，程序第5行下划线处应填入()。",
    choices: [
      "A. backward(60)",
      "B.t. backward(60)",
      "C.left(60)",
      "D.t. left(60)"
    ],
    answer: "D.t. left(60)",
    score: 2.5,
    image: "img/8-7.png",
    explanation: ""
  }, {
    indexNumber:176,
    questionNumber: 8,
    question: "某公司在第一年初购买了一台价值为120万元的设备，该设备的价值在使用过程中逐年减少。已知从第2年到第6年，每年初的价值比上年初减少10万元:从第7年开始，每年初的价值为上年初的75%。编写Python 程序计算第10年初的价值为，程序第5行下划线处应填人()。",
    choices: [
      "A. value=120-10",
      "B. value=value-10",
      "C. value=120_i",
      "D.value =value -i"
    ],
    answer: "B. value=value-10",
    score: 2.5,
    image: "img/8-8.png",
    explanation: ""
  },
  {
    indexNumber:177,
    questionNumber: 9,
    question: ".“猜数游戏”中，计算机随机生成一个0~10之间的整数，用户输入一个整数进行猜测，计算机根据用户输人的数据进行比对，直到用户猜中为止。为了实现“猜数游戏”，补充完善下列 Python 程序第5行下划线处的代码()。",
    choices: [
      "A. guess! =number",
      "B. guess=!number",
      "C. guess =-number",
      "D.guess = number"
    ],
    answer: "A. guess! =number",
    score: 2.5,
    image: "img/8-9.png",
    explanation: ""
  }, {
    indexNumber:178,
    questionNumber: 10,
    question: "阅读并理解下面的 Python 程序代码，程序运行的结果是()",
    choices: [
      "A.8-10A.png",
      "B.8-10B.png",
      "C.8-10C.png",
      "D.8-10D.png"
    ],
    answer: "C.8-10C.png",
    score: 2.5,
    image: "img/8-10.png",
    explanation: ""
  }, {
    indexNumber:179,
    questionNumber: 11,
    question: "下图为“某公司部门员工信息表”和“员工平均年龄统计表”，需要统计出各部门员工的平均年龄。运用AVERAGEIF函数先统计出财务部员工的平均年龄，再用自动填充功能得出其他部门员工平均年龄，那么在 H3单元格中应该输人的函数是().",
    choices: [
      "A:=AVERAGEIF(C3:C91:G3，D$3:D$91)",
      "B.=AVERAGEIF(C$3:C$91、G3，D$3:D$91)",
      "C.=AVERAGEIF(C$3:C$91，G3，D3:D91)",
      "D:=AVERAGEIF(C3:C91，G3，D3:D91)"
    ],
    answer: "B.=AVERAGEIF(C$3:C$91、G3，D$3:D$91)",
    score: 2.5,
    image: "img/8-11.png",
    explanation: ""
  }, {
    indexNumber:180,
    questionNumber: 12,
    question: "利用 Python 程序绘制如下所示的欧姆定律实验数据散点图，下面程序中用来绘制散点图的代码是()。",
    choices: [
      "A.第1行",
      "B.第2行",
      "C.第4行.",
      "D.第5行"
    ],
    answer: "D.第5行",
    score: 2.5,
    image: "img/8-12.png",
    explanation: ""
  }, {
    indexNumber:181,
    questionNumber: 13,
    question: "小珊对《济南的冬天》的文本进行数据分析，生成的词云图如下所示，下列说法错误的是().",
    choices: [
      "A.词云图中没有显示“的”“地”“得”等 词，所以文章中没有这些词",
      "B.从词云图中可以分析出词语“济南”比“天气”出现的频率高",
      "C.词云图分析时用词作为文本的特征项进行提取",
      "D.词云图让我们能够快速获取到文本数据中 所蕴含的关键信息"
    ],
    answer: "A.词云图中没有显示“的”“地”“得”等 词，所以文章中没有这些词",
    score: 2.5,
    image: "img/8-13.png",
    explanation: ""
  }, {
    indexNumber:182,
    questionNumber: 14,
    question: "以下没有体现人工智能对人们生活产生积极影响的是(",
    choices: [
      "A.智能语音导航系统，让驾驶员能更专心地驾驶，保障了汽车的行驶安全",
      "B.由于技术的不成熟，2018年，无人驾驶汽车发生全球首例车祸",
      "C.智能扫地机器人可以完成房间的清扫工作，减少了人们做家务的烦恼",
      "D.餐厅里的智能服务机器人能迅速响应顾客的需求，提升了餐厅的服务质量"
    ],
    answer: "B.由于技术的不成熟，2018年，无人驾驶汽车发生全球首例车祸",
    score: 2.5,
    image: "",
    explanation: ""
  }, {
    indexNumber:183,
    questionNumber: 15,
    question: "人工智能技术正快速融人人们的生活。比如，智能冰箱可以对用户膳食的合理性进行分析，自动统筹安排，推荐食谱，提示需要补充的食材。这属于人工智能在哪个领域的应用(）。",
    choices: [
      "A.智能安防",
      "B.智能医疗",
      "C.智能物流",
      "D.智能家居"
    ],
    answer: "D.智能家居",
    score: 2.5,
    image: "",
    explanation: ""
  }, {
    indexNumber:184,
    questionNumber: 16,
    question: "以下没有体现信息技术对人们生活、工作和学习影响的事例是(",
    choices: [
      "A.线上课堂可以让大众随时随地进行自主化和个性化的学习",
      "B.网络购物让消费者足不出户就可以购买到自己心仪的商品",
      "C.适量运动有利于身体健康，放学后步行回家",
      "D.网络社交可以让人们随时随地交流、分享信息"
    ],
    answer: "C.适量运动有利于身体健康，放学后步行回家",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber:185,
    questionNumber: 17,
    question: "电子点餐系统解决了传统手工点餐模式下人力消耗大、管理效率低等弊端，为提升餐饮运营效率和服务质量提供了帮助。下列关于电子点餐系统，说法错误的是(）。",
    choices: [
      "A.点餐系统的打印机为顾客打印消费单，主要体现了信息系统的输出功能",
      "B.在点餐系统中，顾客用于点餐的平板电脑只具有输入功能，没有输出功能",
      "C.顾客的订单数据能够存储在点餐系统中，主要体现了信息系统的存储功能",
      "D.商家利用点餐系统对顾客点餐数据进行分析，主要体现了信息系统的处理功能"
    ],
    answer: "B.在点餐系统中，顾客用于点餐的平板电脑只具有输入功能，没有输出功能",
    score: 2.5,
    image: "",
    explanation: ""
  }, {
    indexNumber:186,
    questionNumber: 18,
    question: "小牛准备购买一台笔记本电脑。他在网上商城挑选了两款电脑，配置参数如下所示。根据该表，以下说法正确的是()。",
    choices: [
      "A.从硬盘配置来看，B 款电脑优于A 款电脑",
      "B.A款电脑的屏幕分辨率高于B款电脑的屏幕分辨率",
      "C.A款电脑和B款电脑都可以直接读取光盘信息",
      "D.从CPU型号的参数来看，A款电脑优于B款电脑"
    ],
    answer: "D.从CPU型号的参数来看，A款电脑优于B款电脑",
    score: 2.5,
    image: "img/8-18.png",
    explanation: ""
  }, {
    indexNumber:187,
    questionNumber: 19,
    question: "小明家的网络拓扑结构图如下所示，他把台式机上的照片通过因特网发送给同学。那么照片传输过程中，实现数字信号与模拟信号相互转换的设备是（）。",
    choices: [
      "A.调制解调器",
      "B.无线路由器",
      "C.台式机",
      "D.笔记本电脑"
    ],
    answer: "A.调制解调器",
    score: 2.5,
    image: "img/8-19.png",
    explanation: ""
  }, {
    indexNumber:188,
    questionNumber: 20,
    question: "办公室新配置了一台计算机，已知该办公室路由器(网关)的IP地址是192.103.0.1，要将该计算机与办公室其它计算机建立网络连接并通信，该计算机的IP地址可以设置为()",
    choices: [
      "A.192.103.0.1",
      "B.192.103.16.1",
      "C.192.103.0.16",
      "D.192.103.0.256"
    ],
    answer: "C.192.103.0.16",
    score: 2.5,
    image: "",
    explanation: ""
  }, {
    indexNumber:189,
    questionNumber: 21,
    question: "射频识别(RFID)技术在我们的生活中随处可见，下列生活实例中没有用到该技术的是()。",
    choices: [
      "A.张阿姨下班后，刷公交卡，乘坐26路公交车回家",
      "B.小华同学在学校图书馆，刷校园一卡通借阅图书",
      "C.高三年级的小丽同学高考报名时，刷二代身份证验证身份信息",
      "D.小莺到某医院看病，用手机扫描医院提供的二维码获取健康码"
    ],
    answer: "D.小莺到某医院看病，用手机扫描医院提供的二维码获取健康码",
    score: 2.5,
    image: "",
    explanation: ""
  }, {
    indexNumber:190,
    questionNumber: 22,
    question: "智能浇花系统中实现自动浇水功能时，获取土壤中实时湿度数据的传感器是(）。",
    choices: [
      "A.超声传感器-",
      "B.湿度传感器",
      "C,红外传感器",
      "D.温度传感器"
    ],
    answer: "B.湿度传感器",
    score: 2.5,
    image: "",
    explanation: ""
  }, {
    indexNumber:191,
    questionNumber: 23,
    question: "下列关于二维码扫描带来的风险，说法正确的是()。",
    choices: [
      "A.凡是共享单车上的二维码都可以放心扫描，不存在风险",
      "B.扫描街边“扫码送礼”活动的二维码，只要不填写私人信息，就不存在风险",
      "C.网购时收到卖家发来的领红包二维码，扫描该二维码领取红包，不存在风险",
      "D.不扫描来路不明的二维码，这样做可以降低扫描二维码带来的风险"
    ],
    answer: "D.不扫描来路不明的二维码，这样做可以降低扫描二维码带来的风险",
    score: 2.5,
    image: "",
    explanation: ""
  }, {
    indexNumber:192,
    questionNumber: 24,
    question: "为提高信息系统的安全性，身份认证技术应运而生。以下哪个事例没有用到身份认证技术()。",
    choices: [
      "A.小宇浏览学校网站时，将公告栏里的通知截图保存到电脑中",
      "B.张彤在电脑端登录微信时，需要用手机扫描登录二维码，确认后才能登录",
      "C.小张到银行办理某业务时，需要通过人脸识别认证后，才能办理相关业务",
      "D.小王登录网上营业厅时，输入手机收到的动态口令后，完成登录"
    ],
    answer: "A.小宇浏览学校网站时，将公告栏里的通知截图保存到电脑中",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber:193,
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
    indexNumber:194,
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
    indexNumber:195,
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
    indexNumber:196,
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
    indexNumber:197,
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
    indexNumber:198,
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
    indexNumber:199,
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
    indexNumber:200,
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
    indexNumber:201,
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
    indexNumber:202,
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
    indexNumber:203, 
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
    indexNumber:204,
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
    indexNumber:205,
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
    indexNumber:206,
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
    indexNumber:207,
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
    indexNumber:208,
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
    indexNumber:209,
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
    indexNumber:210,
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
    indexNumber:211,
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
    indexNumber:212,
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
    indexNumber:213,
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
    indexNumber:214,
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
    indexNumber:215,
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
    indexNumber:216,
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
  {
    indexNumber:217,
    questionNumber: 1,
    question: "高二寒假小敏打算从大理去昆明看望外婆外公。他从官网上查询了昆明1月15日至1月18日的天气预报如下表所示。从数据、信息和知识的角度进行分析，下面说法正确的是（ ）。",
    choices: ["A、表格中“15、4、9、3”等数值是数据，而文字、表格等非数值不是数据。", "B、表格中每天的气温波动较大，所以上表的天气预报不能提供有效信息", "C、以上天气预报是从官网查询的，所以准确无误，1月25日肯定不会下雨", "D、小敏根据天气预报信息，提醒外婆周日添加衣物，这是知识的体现"],
    answer: "D、小敏根据天气预报信息，提醒外婆周日添加衣物，这是知识的体现",
    score: 2.5,
    image: "img/2022q-1.png",
    explanation: "信息是经过加工的数据，信息经过提炼、总结、归纳形成知识，在运用知识解决问题的过程中产生智慧。故选D。"
  },
  {
    indexNumber:218,
    questionNumber: 2,
    question: "小敏在处理图片时，图片背景颜色的RGB十进制编码为(0,102,255),蓝色编码“255”对应的二进制数是（ ）。",
    choices: ["A、00110011", "B、10011001", "C、11001100", "D、11111111"],
    answer: "D、11111111",
    score: 2.5,
    image: "",
    explanation: "255=128+64+32+16+8+4+2+1,故选D。"
  },
  {
    indexNumber:219,
    questionNumber: 3,
    question: "天文爱好者小曲在查询空间站的相关资料时，收集了“空间站.bmp”图片，其属性如下图所示，则该图片的存储容量大小约为（ ）。",
    choices: ["A、600*400*24/8/1024KB", "B、600*400*3/8/1024KB", "C、600*400*24/8/1000KB", "D、600*400*3/8/1000KB"],
    answer: "A、600*400*24/8/1024KB",
    score: 2.5,
    image: "img/2022q-3.jpg",
    explanation: "由图片大小=分辨率*量化位数/8B,或=分辨率*量化位数/8/1024KB,或=分辨率*量化位数/8/1024/1023MB,可知选A。"
  },
  {
    indexNumber:220,
    questionNumber: 4,
    question: "“IT”两个字符，通过8*8点阵图编码如右图所示，若该图第一行从左到右的编码为10011111，那么第二行的信息编码是（）。",
    choices: ["A、10000100", "B、10001110", "C、10000101", "D、100111111"],
    answer: "A、10000100",
    score: 2.5,
    image: "img/2022q-4.jpg",
    explanation: "由题目所给示例，图中黑色为1，白色为0。故选A。"
  },
  {
    indexNumber:221,
    questionNumber: 5,
    question: "右图为求某数绝对值的两种算法描述，算法描述1和算法描述2分别为（ ）。",
    choices: ["A、自然语言 流程图", "B、伪代码 流程图", "C、伪代码 流程图", "D、自然语言 伪代码"],
    answer: "A、自然语言 流程图",
    score: 2.5,
    image: "img/2022q-5.jpg",
    explanation: ""
  },
  {
    indexNumber:222,
    questionNumber: 6,
    question: "分析如图所示流程图，输入n的值为4，输出s的值是（）。",
    choices: ["A、0", "B、12", "C、20", "D、30"],
    answer: "B、12",
    score: 2.5,
    image: "img/2022q-6.jpg",
    explanation: ""
  },
  {
    indexNumber:223,
    questionNumber: 7,
    question: "小曲使用Python编写了一个计算某月天数的程序，她先将12个月的天数存储到列表中，程序会根据用户输入的月份，输出该月有多少天。程序第3行划线处应填写的代码是（）。",
    choices: ["A、n-d[m]", "B、n-d[0]", "C、n=d[m+1]", "D、n=d[m-1]"],
    questionNumber: 7,
    question: "小曲使用Python编写了一个计算某月天数的程序，她先将12个月的天数存储到列表中，程序会根据用户输入的月份，输出该月有多少天。程序第3行划线处应填写的代码是（）。",
    choices: ["A、n-d[m]", "B、n-d[0]", "C、n=d[m+1]", "D、n=d[m-1]"],
    answer: "D、n=d[m-1]",
    score: 2.5,
    image: "img/2022q-7.jpg",
    explanation: ""
  },
  {
    indexNumber:224,
    questionNumber: 8,
    question: "周末小曲和同学逛书店，书店正在做降价促销。如果消费金额低于或等于200元，会给10%的折扣，如果消费额大于200元，会给20%的折扣。小曲使用Python编写了下面程序，第6行划线处应填写的代码是（）。",
    choices: ["A、m=str(m)", "B、m=str(m*0.9)", "C、m=str(m*0.8)", "D、m=m*0.8"],
    answer: "C、m=str(m*0.8)",
    score: 2.5,
    image: "img/2022q-8.jpg",
    explanation: ""
  },
  {
    indexNumber:225,
    questionNumber: 9,
    question: "小敏利用Python编写了一个根据输入半径，求解圆面积s的程序。程序运行时，输入半径的值为6，程序出现以下错误提示，程序出错的原因是（）。",
    choices: ["A、程序第2行代码中的变量pi末定义", "B、程序中变量r的数据类型是字符宝型，不能用于计算", "C、程序第1行代码多了个右括号", "D、程序第3行代码中双引号应该改成单引号"],
    answer: "A、程序第2行代码中的变量pi末定义",
    score: 2.5,
    image: "img/2022q-9.jpg",
    explanation: ""
  },
  {
    indexNumber:226,
    questionNumber: 10,
    question: "认真分析如下Python程序，其中“monkey.jpg”原图如图所示，运行该程序后图像显示为（）。",
    choices: ["A、rotate(90).jpg", "B、rotate(180).jpg", "C、rotate(270).jpg", "D、rotate(0).jpg"],
    answer: "A、rotate(90).jpg",
    score: 2.5,
    image: "img/2022q-10.jpg",
    explanation: ""
  },
  {
    indexNumber:227,
    questionNumber: 11,
    question: "小曲使用Python程序编写了如图所示的函数s(n),调用函数s(10)的值为（）。",
    choices: ["A、100", "B、55", "C、10", "D、0"],
    answer: "B、55",
    score: 2.5,
    image: "img/2022q-11.jpg",
    explanation: ""
  },
  {
    indexNumber:228,
    questionNumber: 12,
    question: "在学习使用PythonTurtle库绘制图形时，同学们编写了绘制正多边形及迷宫的代码。下列选项中，请找出代码与图形相对应的的正确选项（）。",
    choices: ["A、正多边形及迷宫.jpg", "B、三角形.jpg", "C、六边形.jpg", "D、三圆环.jpg"],
    answer: "A、正多边形及迷宫.jpg",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber:229,
    questionNumber: 13,
    question: "下图是某月微信读书计算机类前50的阅读排行榜单。小曲想根据推荐值数据将这50本书籍进行分类，推荐值大于等于80%的是“好评如潮”，小于80%的是“值得一读”，运用条件函数计算出每一本书的分类等级，则在F3单元格内应图输入的函数是（）。",
    choices: ["A、=IF(E3>=0.8，“好评如潮”，“值得一读”)",
      "B、=IF(E3>=0.8，“值得一读”，“好评如潮”)",
      "C、=COUNTIF(E3>=0.8，“好评如潮”，“值得一读”)",
      "D、C、=COUNTIF(E3>=0.8，“值得一读”，“好评如潮”)"],
    answer: "A、=IF(E3>=0.8，“好评如潮”，“值得一读”)",
    score: 2.5,
    image: "img/2022q-13.jpg",
    explanation: ""
  },
  {
    indexNumber:230,
    questionNumber: 14,
    question: "“词云图”是数据可视化的一种方式。右图是小曲利用Python编程对“云南”百度词条分析形成的调整云图，下列说法正确的是（）。",
    choices: ["A、对文本分词后可直接创建词云，无须提取特征",
      "B、词云必须显示该数据集中包含的全部词语",
      "C、从词云图中可以看出词语“云南”比“昆明”的出现频率高",
      "D、最能表现该数据集中文本特征的词是“铁路”"],
    answer: "C、从词云图中可以看出词语“云南”比“昆明”的出现频率高",
    score: 2.5,
    image: "img/2022q-14.jpg",
    explanation: ""
  },
  {
    indexNumber:231,
    questionNumber: 15,
    question: "有Python程序如下左图所示，要绘制出下右图所示函数y=-x**3的图像，则程序第5行划线处应填写的代码是（）。",
    choices: ["A、plt.plot(x,y)",
      "B、plt.scatter(x,y)",
      "C、plt.bar(x,y)",
      "D、plt.xbar(x,y)"],
    answer: "B、plt.scatter(x,y)",
    score: 2.5,
    image: "img/2022q-15.jpg",
    explanation: ""
  },
  {
    indexNumber:232,
    questionNumber: 16,
    question: "吴老师从商场开车回学校的途中发生了以下几件事：<br>(1)开出商场时，出口处的停车闸识别了好的车牌号，并显示相应的停车费<br>(2)使用微信方式支付停车费<br>(3)出发前，因为不熟悉回去的路，她用高德地图搜索了回程路线<br>(4)图中她喊了一声“小爱同学”，手机助手回应“我在”<br>(5)停车时，她听到广播回正播放一首歌，不知道叫什么歌名，于是使用手机“网易云音乐”App中“听歌识曲”功能，5秒后，手机显示出了该歌曲的名称。<br>上面描述的事情运用到人工智能技术的是（）。",
    choices: ["A、（1）（2）（3）",
      "B、（1）（4）（5）",
      "C、（2）（3）（5）",
      "D、（2）（3）（4）"],
    answer: "B、（1）（4）（5）",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber:233,
    questionNumber: 17,
    question: "现在很多翻译软件都能够进行拍照翻译，下列图片是使用有道词典对某篇英语文章进行拍照后，翻译软件自动将英文翻译成中文，该功能主要应用的人工智能技术是（）。",
    choices: ["A、文字识别 机器翻译",
      "B、文字识别 图像识别",
      "C、虚拟现实 图像识别",
      "D、图像识别 虚拟现实"],
    answer: "A、文字识别 机器翻译",
    score: 2.5,
    image: "img/2022q-17.jpg",
    explanation: ""
  },
  {
    indexNumber:234,
    questionNumber: 18,
    question: "下列关于自媒体说法错误的是（）",
    choices: ["A、自媒体时代的媒体是数字化的，这意味着它们可能通过互联网快速传播",
      "B、自媒体在发布过程中不受时间、地点的限制，可以实现即时性发布，因而对于新闻传播的真实性难以考证",
      "C、自媒体时代我们从多种平台获取信息，获取信息的途径多样化。现代自媒体形式的主要媒介有微博、微信朋友圈、贴吧论坛、博客、抖音、视频号等社交网络平台",
      "D、自媒体时代的媒体是开放式的，这意味着我们可以创作任何内容并将其发布到互联网上，并借助网络舆论对他人进行抨击"],
    answer: "D、自媒体时代的媒体是开放式的，这意味着我们可以创作任何内容并将其发布到互联网上，并借助网络舆论对他人进行抨击",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber:235,
    questionNumber: 19,
    question: "下列关于网络学习平台的信息系统说法正确的是（）。",
    choices: ["A、手机、平板电脑、课程资源、授课老师及管理员等属于这个信息系统的组成部分",
      "B、使用这个平台的学习者才是这个系统的用户，授课老师及管理员不是信息系统的用户",
      "C、课程资源属于这个信息系统的数据，论坛中发布的信息不属于这个信息系统的数据",
      "D、网络学习平台没有局限性，可以替代学校教育"],
    answer: "A、手机、平板电脑、课程资源、授课老师及管理员等属于这个信息系统的组成部分",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber:236,
    questionNumber: 20,
    question: "“夸父一号”是由中国太阳物理学家自主提出的综合性太阳探测专用卫星，已于2022年10月成功发射并进入预定轨道。“夸父一号”的科学目标是观测和研究太阳磁场、太阳耀斑和日冕物质抛射的起源及三者之间可能存在的因果关系。国家空间科学中心需要对大量的观测数据进行处理，这一过程通常是由多台计算机共同协作完成，这主要体现的网络功能是（）。",
    choices: ["A、数据通信",
      "B、资源共享",
      "C、分布式处理",
      "D、微电子技术"],
    answer: "C、分布式处理",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber:237,
    questionNumber: 21,
    question: "以下是某电子商务平台提供的华为平板电脑MatePad Pro 11的参数，根据所学知识判断下列说法错误的是（）。<br>“高通骁龙870八核最高频率3.2Ghz/8GB/128GB/11英寸/OLED屏，十点触控/蓝牙5.1模块/支持802.11ax无线协议/环境光传感器，霍尔传感器，陀螺仪，指南针，重力传感器/HarmonyOS 3”",
    choices: ["A、CPU采用高能骁龙870处理器，它是决定计算机运算性能的关键参数",
      "B、内存的大小为8G字节，主要用于长期存储数据",
      "C、OLED屏表示显示器，它即是输出设备也是输入设备",
      "D、该平板电脑采用的操作系统是HarmonyOS(鸿蒙操作系统)"],
    answer: "B、内存的大小为8G字节，主要用于长期存储数据",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber:238,
    questionNumber: 22,
    question: "小明在户外锻炼时，习惯用无线耳机边跑步边通过手机4G网络在线听音乐。在这个场景中，无线耳机和手机分别使用的网络接入方式是（）。",
    choices: ["A、蓝牙技术和移动通信技术",
      "B、红外传输技术和蓝牙技术",
      "C、移动通信技术和红外传输技术",
      "D、蓝牙技术和NFC技术"],
    answer: "A、蓝牙技术和移动通信技术",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber:239,
    questionNumber: 23,
    question: "随着社交网络平台如微博、微信、QQ、学习论坛的广泛使用，越来越多的人开始意识到使用社交网络平台的同时有可能泄露个人信息。下列说法错误的是（）。",
    choices: ["A、用户进行“点赞”操作时，社交网络平台可能会自动把用户个人喜好信息传向与共合作的企业，企业通过数据挖掘技术分析用户喜好，给用户发送广告",
      "B、移动终端使用开放的Wi-Fi容易导致信息被盗，也容易被定位",
      "C、社交网络平台可以记录用户登录后的所有活动，定位网页浏览者的个人信息，并有可能在用户不知情下，将用户个人信息推送给第三方",
      "D、在公共网络或开放Wi-Fi上登录个人社交网络平台，可以分享个人私密信息"],
    answer: "D、在公共网络或开放Wi-Fi上登录个人社交网络平台，可以分享个人私密信息",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber:240,
    questionNumber: 24,
    question: "从设计安全的个人密码的角度来看，以下说法错误的是()。",
    choices: ["A、密码不能太短，尽量在8位以上，否则计算机能快速破解密码",
      "B、不要用常见的词汇作密码，确保密码中包括数字和大小写字母",
      "C、可以把自己的生日、手机号码等个人信息设为密码",
      "D、密码要尽可能用数字、字母大小写、特殊符号等多种符号的组合"],
    answer: "C、可以把自己的生日、手机号码等个人信息设为密码",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber:241,
    questionNumber: 1,
    "question": "右图是一张从北京到天津的火车票。从数据、信息和知识的角度进行分析，说法错误的是()。",
    "choices": [
      "A.火车票中的“57.0”是数据是数据。",
      "B.火车票中的“C2021”没有蕴含任何信息",
      "C.从火车票中的数据可以知道乘车车次、时间、目的地和票价，这是信息的体现",
      "D.114元可以购买两张这样的火车票，这是知识的体现。"],
    answer: "B.火车票中的“C2021”没有蕴含任何信息",
    score: 2.5,
    image: "img/2023c-1.jpg",
    explanation: ""
  },
  {
    indexNumber:242,
    questionNumber: 2,
    question: "早在远古时代，人们就会用给绳子打结的方式来记录信息。下图中，如果绳子甲的套码为0110110，则绳子乙的编码是()。",
    choices: [
      "A.0110110",
      "B.1001001",
      "C.1011101",
      "D.0100010"
    ],
    answer: "C.1011101",
    score: 2.5,
    image: "img/2023c-2.jpg",
    explanation: ""
  },
  {
    indexNumber:243,
    questionNumber: 3,
    question: "为了让学生获得丰富的学习资源，某校自主开发了校本资源学习平台。现在需要为体育特长班的40 名同学每人提供一个二进制编码的登录账号，则编码至少需要（）。",
    choices: [
      "A.5位",
      "B.6位",
      "C.7位",
      "D.8位"
    ],
    answer: "B.6位",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber:244,
    questionNumber: 4,
    question: "(相约玉溪》是云南省第16届省运会的会歌。如果把会歌录制成时长为3分零8秒，采样频率为44kHz，量化位数为32位的双声道WAVE格式音频文件，那么计算该文件存储容量大小的算式是(）。",
    choices: [
      "A.2023c-4-1.jpg",
      "B.2023c-4-2.jpg",
      "C.2023c-4-3.jpg",
      "D.2023c-4-4.jpg"
    ],
    answer: "A.2023c-4-1.jpg",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber:245,
    questionNumber: 5,
    question: "某市出租车计价标准是:3千米内(含3千米)收费8元;超过3千米的部分，按1.8元/千米收费;收燃油附加费2元。根据以上标准，用于计算车费y的流程图如下图所示，流程图的菱形框中应填人()。",
    choices: [
      "A.x←3",
      "B.x>=3",
      "C.x<=3",
      "D.x>3"
    ],
    answer: "D.x>3",
    score: 2.5,
    image: "img/2023c-5.jpg",
    explanation: ""
  },
  {
    indexNumber:246,
    questionNumber: 6,
    question: "如图是小丽设计的算法流程图。下列关于该流程图描述正确的是（）。",
    choices: [
      "A.该流程图中s=s-i没有体现算法的确定性",
      "B.该算法有数据输出",
      "C.该算法不符合有穷性特征",
      "D.i的初始值应修改为0"
    ],
    answer: "C.该算法不符合有穷性特征",
    score: 2.5,
    image: "img/2023c-6.jpg",
    explanation: ""
  },
  {
    indexNumber:247,
    questionNumber: 7,
    question: "闰年的判断方法是:如果年份能被4整除且不能被100整除，则该年为闰年;年份能被400整除，则该年也为闰年。在Pyton编程中，判断年份y是否为闰年的表达式正确的是()。",
    choices: [
      "A.year%4==0 and year%100!=0 or year%400==0",
      "B.year//4==0 and year//100!=0 or year//400==0",
      "C.year%4=0 and year%100!=0 or year%400=0",
      "D.year//4==0 and year//100!=0 or year%400=0"
    ],
    answer: "A.year%4==0 and year%100!=0 or year%400==0",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber:248,
    questionNumber: 8,
    question: "小杨学习了Python中的字典数据类型后，编写了班级信息管理程序。下面是程序的部分代码，说法错误的是（）。",
    choices: [
      "A.字典Bjxx中，“性别”是键，“男”是值",
      "B.可以通过print(Bjxx[7])来输出小明的年龄",
      "C.可以通过print(Bjxx['年龄']来输出小明的年龄",
      "D.代码运行后输出结果为：{'姓名':''小明'，'年龄'：17，'性别'：'男'，'身高'：1.75}"
    ],
    answer: "B.可以通过print(Bjxx[7])来输出小明的年龄",
    score: 2.5,
    image: "img/2023c-8.jpg",
    explanation: ""
  },
  {
    indexNumber:249,
    questionNumber: 9,
    question: "以下Python程序的运行结果是（）。",
    choices: [
      "A.0  2  4  6",
      "B.0  2  4  8",
      "C.0  2  6",
      "D.2  4  6  8"
    ],
    answer: "C.0  2  6",
    score: 2.5,
    image: "img/2023c-9.jpg",
    explanation: ""
  },
  {
    indexNumber:250,
    questionNumber: 10,
    question: "某公司编写了一个根据员工年终考核量化分值评定等级的Python程序，程序代码如下所示。当输人员工年终考核量化分值88.8后，程序运行结果是（）。",
    choices: [
      "A.考核等级为:A等",
      "B.考核等级为:B等",
      "C.考核等级为:C等",
      "D.考核等级为:D等"
    ],
    answer: "B.考核等级为:B等",
    score: 2.5,
    image: "img/2023c-10.jpg",
    explanation: ""
  }, {
    indexNumber:251,
    questionNumber: 11,
    question: "世界卫生组织发布的男性标准体重计算公式为:标准体重(kg)等于身高(cm减去80，再乘以70%。小吴编写了一个根据身高计算男性标准体重的程序，代码下面左图所示。在调试过程中程序出错，如下面右图所示，出错的原因是(）。",
    choices: [
      "A.变量 weigh 的首字母没有大写",
      "B.第2行代码没有写成“weight=(height-80)x70÷100”",
      "C.第2行的变量 height 是字符串类型，不能和整数进行减法运算",
      "D.第3行的引号没有用单引号"
    ],
    answer: "C.第2行的变量 height 是字符串类型，不能和整数进行减法运算",
    score: 2.5,
    image: "img/2023c-11.jpg",
    explanation: ""
  },
  {
    indexNumber:252,
    questionNumber: 12,
    question: "以下是小兰编写的计算三角形面积的Pyhon 程序，下列说法错误的是()。",
    choices: [
      "A.该程序使用了分支结构",
      "B.程序代码中使用了变量a、b、c，它们的数据类型分别是实型、整型、实型",
      "C.第7行中“math.sqrt(p*(p-a)*(p-b)*(p-c))”是求出p*(p-a)*(p-b)*(p-e)的平方根",
      "D.程序代码中使用了库，库的名称是math"
    ],
    answer: "B.程序代码中使用了变量a、b、c，它们的数据类型分别是实型、整型、实型",
    score: 2.5,
    image: "img/2023c-12.jpg",
    explanation: ""
  },
  {
    indexNumber:253,
    questionNumber: 13,
    question: "小李编写 Python 程序实现数据可视化呈现，执行下列代码后呈现的图表是(\n)。",
    choices: [
      "A.2023c-13-1.jpg",
      "B.2023c-13-2.jpg",
      "C.2023c-13-3.jpg",
      "D.2023c-13-4.jpg"
    ],
    answer: "A.2023c-13-1.jpg",
    score: 2.5,
    image: "img/2023c-13.jpg",
    explanation: ""
  },
  {
    indexNumber:254,
    questionNumber: 14,
    question: "下列应用中，没有用到大数据技术的是()。",
    choices: [
      "A.气象部门及时处理气象卫星等设备采集到的数据实现准确预报天气",
      "B.小明通过共享单车软件平台实时查看最近的单车停放点，完成还车",
      "C.某学校对学生的两次省统测成绩进行统计，统计结果作为评优的依据之",
      "D.商家根据商务平台上的行业宏观情况、自己品牌的市场状况、消费者行为情况 等进行生产和库存决策"
    ],
    answer: "C.某学校对学生的两次省统测成绩进行统计，统计结果作为评优的依据之",
    score: 2.5,
    image: "",
    explanation: ""
  },
  {
    indexNumber:255,
    questionNumber: 15,
    question: "下表中，若要对各州市的旅游收入进行排名，可以用RANK函数先计算昆明的排名，再)。通过自动填充的方法得到其他州市的排名。那么在C3单元格中应输人的函数是()。",
    choices: [
      "A.=RANK(E3，E3:E16)",
      "B.=RANK(E$3，E$3:E$16)",
      "C.=RANK(E3，E$3:E$16)",
      "D.=RANK(E$3，E3:E16)"
    ],
    answer: "C.=RANK(E3，E$3:E$16)",
    score: 2.5,
    image: "img/2023c-15.jpg",
    explanation: ""
  },
  {
    indexNumber:256,
    questionNumber: 16,
    question: "下列应用场景中，关于人工智能深度学习的描述，错误的是(）。",
    choices: [
      "A.由于机器人必须处理现实世界中的大量、多样性数据，所以深度学习算法要为机器人执行的每一项工作编写一个全新的算法",
      "B.人们可利用深度学习算法判断互联网上大量的博客、研究论文等信息来源的真实性",
      "C.深度学习可以由机器自己完成特征提取",
      "D.基于深度学习的图像分类是一种能够对图像进行自动识别和分类的机器学习技术，可用来识别和分类图像中存在的物体、场景、表情等内容，极大地提高了图像分类效率"
    ],
    answer: "A.由于机器人必须处理现实世界中的大量、多样性数据，所以深度学习算法要为机器人执行的每一项工作编写一个全新的算法",
    score: 2.5,
    image: "",
    explanation: ""
  }, {
    indexNumber:257,
    questionNumber: 17,
    question: "人工智能在学习领域有广泛的应用。下列关于人工智能的说法不正确的是()。",
    choices: [
      "A.人工智能可以完全代替教师的教学",
      "B.人工智能通过分析学生学习记录，帮助学生找到存在的问题",
      "C.人工智能有可能实现学生之间相互学习、协作学习，同时还可以对几千名学生进行协调和指导",
      "D.人工智能可以针对每一名学习者选择合适的学习资源，制订个性化的学习方案"
    ],
    answer: "A.人工智能可以完全代替教师的教学",
    score: 2.5,
    image: "",
    explanation: ""
  }, {
    indexNumber:258,
    questionNumber: 18,
    question: "下列对于信息社会数字生活的分析，错误的是()。",
    choices: [
      "A.网络和数字产品将成为多数人的生活必需品",
      "B.人们的工作内容以创造、处理和分配信息为主，信息逐渐成为最主要的消费内容",
      "C.人们的娱乐方式数字化，数字家庭成为未来家庭的发展趋势",
      "D.人们的工作将更加弹性化和自主化，终身学习与随时随地学习成为可能，而人际交往范围与空间则缩小了"
    ],
    answer: "D.人们的工作将更加弹性化和自主化，终身学习与随时随地学习成为可能，而人际交往范围与空间则缩小了",
    score: 2.5,
    image: "",
    explanation: ""
  }, {
    indexNumber:259,
    questionNumber: 19,
    question: "19.下表是华为Mate40的主要参数。关于该手机，下列说法正确的是(）。",
    choices: [
      "A.该手机CPU 主频能达到3.3GHZ",
      "B.该手机能运行基于HarmonyOS3.0.0系统开发的App",
      "C.该手机配置了许多传感器，包括人脸识别、色温传感器和味敏传感器等",
      "D.该手机的存储内存是8GB，类似于计算机中的“硬盘”"
    ],
    answer: "B.该手机能运行基于HarmonyOS3.0.0系统开发的App",
    score: 2.5,
    image: "img/2023c-19.jpg",
    explanation: ""
  },
  {
    indexNumber:260,
    questionNumber: 20,
    question: "智能家居是物联网的一种应用场景。下列说法错误的是()。",
    choices: [
      "A.远程设置冰箱温度不需要物联网的网络层、应用层相关技术的支撑",
      "B.应用层是物联网和用户(包括人、组织和其它系统)的接口",
      "C.网络层可以将感知层采集到的信息通过网络传递到手机、服务器等终端设备",
      "D.智能家居各种类型的传感器属于物联网的感知层"
    ],
    answer: "A.远程设置冰箱温度不需要物联网的网络层、应用层相关技术的支撑",
    score: 2.5,
    image: "",
    explanation: ""
  }, {
    indexNumber:261,
    questionNumber: 21,
    question: "QQ、微信、抖音等社交平台在使用时必须遵守相关法律法规。下列行为正确的是()。",
    choices: [
      "A.在QQ上转发涉密文件",
      "B.在微信上随意转发未经证实的信息",
      "C.在抖音里录制上传不健康的内容",
      "D.在朋友圈分享自己参加物理奥赛的成功经验"
    ],
    answer: "D.在朋友圈分享自己参加物理奥赛的成功经验",
    score: 2.5,
    image: "",
    explanation: ""
  }, {
    indexNumber:262,
    questionNumber: 22,
    question: "下图为某酒店的网络拓扑结构图。以下分析错误的是(）。",
    choices: [
      "A.该酒店的网络硬件主要有路由器、交换机、无线 AP 等",
      "B.客房、会议室的笔记本电脑通过有线方式接入网络，服务器通过无线方式接入网络",
      "C.无线AP(AccessPoint)即无线网络接入点，可实现无线设备与酒店网络的连接",
      "D.路由器是不同网络间的连接设设备，负责将数据从一个网络传递到另一个网络"
    ],
    answer: "B.客房、会议室的笔记本电脑通过有线方式接入网络，服务器通过无线方式接入网络",
    score: 2.5,
    image: "img/2023c-22.jpg",
    explanation: ""
  }, {
    indexNumber:263,
    questionNumber: 23,
    question: "小星计划去北京旅游，他要在智能手机上安装一款帮助出行的APP。下列说法错误的是()。",
    choices: [
      "A.应选择安全的下载平台下载APP",
      "B.安装手机App时要留心APP是否携带恶意软件",
      "C.手机App中设置的支付密码不要轻易告诉别人",
      "D.卸载了手机App后，App中设置的账号和密码会自动删除"
    ],
    answer: "D.卸载了手机App后，App中设置的账号和密码会自动删除",
    score: 2.5,
    image: "",
    explanation: ""
  }, {
    indexNumber:264,
    questionNumber: 24,
    question: "小东在计算机的浏览器中输人“www.163.com”无法访问163 网站，但用163 网站的IP地址“182.242.61.245”可以访问。造成这一现象的原因可能是()。",
    choices: [
      "A.计算机IP地址设置不正确",
      "B.DNS 服务器设置不正确",
      "C.计算机子网掩码设置不正确",
      "D.网关设置不正确"
    ],
    answer: "B.DNS 服务器设置不正确",
    score: 2.5,
    image: "",
    explanation: ""
  },
];