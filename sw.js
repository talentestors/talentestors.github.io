/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","a974b882653225d317cce486b8dfd66d"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","468c4aa0a32f43ff8377a1a61617853f"],["/2023/02/06/C语言链表/index.html","7e465a6eb85dac3a5ba0f05e72a7a84b"],["/2023/02/06/书籍资源/index.html","9a116ff799cd2ea2868ce7b53c27a2b6"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","3d6849d2d0f9223f2b776d0e22e33910"],["/2023/02/07/为水而水（笑/index.html","7a5a19d7c9b18247aa369fb86218abc1"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","fdf0d96c67477cff6e5a6dd8caa826f2"],["/2023/03/09/Web前端笔记-Emmet/index.html","2cdc692f3f5db3b86f208771a4e70f84"],["/2023/03/23/gitalk-评论/index.html","41bcac8f7a1d5548279f266551004184"],["/2023/04/10/用C语言实现字符串全排列/index.html","4662b78b81248a527b38b4be8281c060"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","f8e57f5d17cac5fea5306dbc3fbe0341"],["/2023/05/15/C语言基础排序-demo/index.html","68e3193f3abcfcc6d54aec5e88cceac8"],["/2023/06/14/闲着没事干/index.html","f72f10cb44e50a8b4269ba599adce78e"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","5fe000ea4ac94c926845ec0d18195a99"],["/2023/08/01/javase-note/index.html","5b9b9c2c759fe8fe3ba1f8f2cc4e03da"],["/2023/09/14/vue-pure-admin/index.html","d0cd61f950050644d1006c215dd85518"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","869b333a636724355024706cb3481098"],["/2023/11/28/C-CPP-the-memset-function/index.html","0250325e393c3af56df829943873e4b6"],["/2023/12/13/javaSwing-DynamicClock/index.html","b9aa44de8c4f007bd3f7c14dc372ed5f"],["/2024/01/24/builtin-系列函数/index.html","eb6a3d54473fd71d0f41649ddd3fe9ae"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","f851ef449cfc27a64decd84d2c62fae1"],["/2024/02/09/新年快乐/index.html","d7c7b3217f804752aa730e67449729ff"],["/2024/04/07/转载-线段树专题-xyw813/index.html","deabe90ff0aed119350fb96f6bd70462"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","89377c1d8cd6f6765a727aa532acad57"],["/2024/05/06/cloudflare-display-issue/index.html","442c5fd5476e73d5767d8afb77482cde"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","a419952d5dfbb00af0017f88d7d233c6"],["/2024/06/18/POI2011-WYK-Plot-Solved/index.html","861eb8c2477ed7e36369759fb7175174"],["/2024/06/25/open-source-LinuxMirrors/index.html","dfa65ca5ad35b974ab073e80d7b256a9"],["/2024/09/02/Dinic-算法/index.html","e3513e98c23b9e6c2593a3281ff24ca4"],["/2024/10/08/黑题记录-2D-Geometry-110-in-1/index.html","3654d671ba424f8302381f9fc48030b5"],["/2024/10/11/常用STL算法库/index.html","deafd7a4e0f9af66c71b6a239b9ebeaa"],["/2024/11/28/在-Java-中设置输出流的字符集/index.html","401c04b5bafbff0892638d979cefa8f0"],["/2024/12/05/JDK-18-以上使用标准输出流中文输出乱码问题/index.html","c5410c4ccdebae9eb4ef9d8569a1e743"],["/2024/12/09/Codeforces-Round-992-Div-2-解题报告/index.html","0d688a49fef5748d8649dc0b6d7fcec2"],["/2024/12/17/Where-are-those-algorithms/index.html","85d29462b48614609b9c847011420084"],["/2024/12/26/重构评论系统/index.html","52f37ed8c812cca6ea9ac8cfe5b67434"],["/2025/01/01/blacklist/index.html","388e466ab1d72f01f7d40a24897c427a"],["/2025/03/15/GitHub-Skills/index.html","efed3c1d831df8880870f3d26d1f6d82"],["/2025/03/16/lombok与delombok-在gradle上的配置方法/index.html","24383a99108a5c5b89fe74ebfbbe1a0a"],["/2025/04/09/Codeforces-Round-1016-Div-3-解题报告/index.html","b2413d129feb744418bcbb9991f144c5"],["/2025/08/23/github-special-files-guide/index.html","262b2d3e42ba773d2142038b1ef60d60"],["/2025/09/28/408-route/index.html","7982a957440e27a01a44722f1a450f0b"],["/2025/10/14/rvo/index.html","ed2b1cc9b01253ee1dec49e55e1ca8f1"],["/2025/11/13/What-is-OSINT/index.html","cc3923908a2c46a6e2948779ade4af78"],["/2025/11/20/DDoS-and-CC/index.html","5e4c1c2c76c7cecbba051eaf1f3381f6"],["/2026/01/02/2025-summary/index.html","f3dde0d5a36053ba289b16dfa32ce527"],["/404.html","edd5f4c87db88fbfd6dfed4ff9b11f64"],["/about/index.html","1189b8f95d74ff5aec7ddb1e01464472"],["/archives/2023/02/index.html","826382bf3d302dc852431509341c44a7"],["/archives/2023/03/index.html","069e543e806b19e22e7af2b69fad0ecd"],["/archives/2023/04/index.html","32f587f85d2f64026bc578f598bf6399"],["/archives/2023/05/index.html","26aaef47a4dfb963ac574b4b6abcf870"],["/archives/2023/06/index.html","226241bbcd60a4258ef2523ac4bc2034"],["/archives/2023/08/index.html","d6edf32000a03fb3c970a69fb9c2182d"],["/archives/2023/09/index.html","e45a734f2e06e0c6e1f402a99d4a06f8"],["/archives/2023/10/index.html","95c18d7ceee35b795e48453dfbb514ee"],["/archives/2023/11/index.html","4058f7689260639c53af5b93228c5396"],["/archives/2023/12/index.html","ecdfe73ab3e090101f4b01227643f574"],["/archives/2023/index.html","dfb2eb59aa833251c8064f24bafc88bb"],["/archives/2023/page/2/index.html","dfb2eb59aa833251c8064f24bafc88bb"],["/archives/2024/01/index.html","28fcbf8fb383d9f406ca81018ce126da"],["/archives/2024/02/index.html","205180a7eed9a0c2fc959684b5703216"],["/archives/2024/04/index.html","e0778f381b254b63a2d16f703df61558"],["/archives/2024/05/index.html","66a5742c1420f3c441c4951437170af0"],["/archives/2024/06/index.html","a54f59ff59a750c719f4e2075b242d4e"],["/archives/2024/09/index.html","42816521d2f178982c9b179a652a9b6f"],["/archives/2024/10/index.html","aae3c1d320f2c308af0ffb920e0d525c"],["/archives/2024/11/index.html","03e854fffde7208cf4b0f98531b08cd7"],["/archives/2024/12/index.html","e8b8eb1f0372e728f91793f4a4889586"],["/archives/2024/index.html","a2f219c714c22d0049b505e52bc91c57"],["/archives/2024/page/2/index.html","a2f219c714c22d0049b505e52bc91c57"],["/archives/2025/01/index.html","898986a8663c46f08f0fd0e3baf5107f"],["/archives/2025/03/index.html","570eaff8339a1684122807b58b7c475b"],["/archives/2025/04/index.html","2678355250c81dad45669d55407833ef"],["/archives/2025/08/index.html","52328fcd83f2af187a79713f2d84cd10"],["/archives/2025/09/index.html","1fd5bacc6e52df75bfe2ba8cba233639"],["/archives/2025/10/index.html","9780552a89c1de2e91ddd6ae5c3754c4"],["/archives/2025/11/index.html","c8d35367a9111aeabbf58d0abafc7f93"],["/archives/2025/index.html","2c71704831f02d3b9aab3dcd5881a6a4"],["/archives/2026/01/index.html","358d04528686e030a168c2f896121d21"],["/archives/2026/index.html","1b0a6cceb5b2050f31ac1404caaf21c0"],["/archives/index.html","34399e5874db32d2114d2745e76585ee"],["/archives/page/2/index.html","34399e5874db32d2114d2745e76585ee"],["/archives/page/3/index.html","34399e5874db32d2114d2745e76585ee"],["/archives/page/4/index.html","34399e5874db32d2114d2745e76585ee"],["/archives/page/5/index.html","34399e5874db32d2114d2745e76585ee"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-FUXEtNSWPD.html","3e2eec0e5d15b2bea8faa7656ae0facf"],["/bangumi/index.html","19c5862f5732f38e8f1822069ed354f5"],["/bangumis/index.html","86af4d9d07fa7513fcd76d2aef457103"],["/categories/技术/index.html","5a0e17413aa29340c52c97fad38e2991"],["/categories/技术/page/2/index.html","3836fb536ea9d3d44d027a3d265884db"],["/categories/技术/page/3/index.html","33c3d74a66126f04b942504e986c982c"],["/categories/技术/page/4/index.html","768f08c0a50aa17a23d8530896e8bfd2"],["/categories/资源/index.html","416523e4e03779af3941e03559b8adf8"],["/categories/转载/index.html","0b5003cf4cec22d43232ea26046be94f"],["/categories/随想/index.html","8a9daf615785f28d937ef8abfad91e77"],["/comment/index.html","f69a1c006be40bfed0be2405c6a47d68"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/giscus.min.css","96c42b2029f44095aaf46f6dc0628ded"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","71cebc0cd666f182f1ab1dbe4a9f15c1"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","73bb864d038d4bb3d83361b8910786bb"],["/css/style.min.css","45b4cf23f077e45f4776fb3f47a7cdd6"],["/css/tags.css","eba03aebbf2f44113682d0ca1e19fcbb"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","3a428862b87453a93af413f5293b5ffc"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","bd7bec9240a47eceb04c44d1c460cfee"],["/index.html","382e673ce00c79da6c1201f312d7c614"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","5132d9c9a907e42c82f678b7b58a7552"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/js/lib.js","65f02458a8e38579dac5594f252bd66f"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","202c751aef91535fd84ba360224674d1"],["/js/sakura-app.min.js","b0060bc00f258957442c264d7f0450ae"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","c757e76be80d1da11f5c02c68665312c"],["/js/wrapImage.js","4b4646b7e9ebf8781487aa57053fb59c"],["/js/wrapImage.min.js","f366dcba793c09c735153652842d92e6"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","ae02843f47f2e41423ad96cad266ca46"],["/links/index.html","69850429b09762e2f22d2c8463949231"],["/music/index.html","231cba3804fb0d0a45398af63262c953"],["/page/2/index.html","87e5ef10436bf78c98e74543541a97e8"],["/page/3/index.html","e8c8f91a9c91e1cd88cf2d2d50396c11"],["/page/4/index.html","9a8697e4a44c0d528341484d494c3b24"],["/page/5/index.html","790863dde74e2fe6a48c240ce080f5e2"],["/rss/index.html","3a03b3d7cb2f29a8e337d1997ec011bd"],["/sw-register.js","d31d5c2f096b2e1f8447c3114df77a3f"],["/tags/408/index.html","19dabd221b8e7a294f6442b0a47ba96f"],["/tags/C-C/index.html","7c084f4ddb3500ac8d7f10a8e673debb"],["/tags/C-CPP/index.html","2eb4a70b11f850bbef247f2df76a2289"],["/tags/C/index.html","3c10fee3f7df2c8e3e58fd9635346f05"],["/tags/CC攻击/index.html","7befb1cd50ceac2def142674b3fa0e0f"],["/tags/CONTRIBUTING/index.html","0dd7140acd187b8b350f57cc76985618"],["/tags/CPP/index.html","08049bf002156c4c9fd97ae679e79e7d"],["/tags/CSS/index.html","029794c0f81764e0919ea7d56335a9a9"],["/tags/CodeForces/index.html","5e2bf5d65aa5df9cb082e06487bb2915"],["/tags/Color/index.html","d5836149a3106b37521c9f24d7908f7a"],["/tags/Comment/index.html","8b435e71e4c18dc12a928f524c638ad6"],["/tags/C语言/index.html","f0b5be568bcead3b09e4710108d47914"],["/tags/DDoS/index.html","ae403bdc14ea0278daf6a0dc9b02b2c6"],["/tags/Dinic/index.html","617e239ae6109dbe36ee183a22099bbe"],["/tags/Div2/index.html","683cf9ed3b704e198a001ffaf6d23442"],["/tags/Div3/index.html","dc8ea0fe4456ed32fa03208b78fcdccf"],["/tags/GitHub-Actions/index.html","371f72b0f5f810616d1303b086a6b817"],["/tags/GitHub/index.html","bef22612cfbc35c62e6ca9f9b6c67106"],["/tags/Gradle/index.html","0d1ea30ca558a2c2fefdc804230150fe"],["/tags/JDK/index.html","b87f39f424f11b86d11e2b7b78f71949"],["/tags/Java/index.html","5a6652fe1b71e5e555e8a89addd63db3"],["/tags/JavaScript/index.html","d8ac94b695ee7f0539c1d9a9428d4564"],["/tags/LICENSE/index.html","6f724ef20e8f36933e4b2c5b2afa9edc"],["/tags/LeetCode/index.html","07a30cffc28a202bd62108865725c89a"],["/tags/Linux/index.html","aef9a5e5f101a74c2e5cbf9be1597993"],["/tags/Lombok/index.html","a878ff17fbcb21be85a7f6cfb0a9bfbf"],["/tags/MSYS2/index.html","99f2aebe7ee7fe6de836c40454a03b3e"],["/tags/NoneBot/index.html","aff65cbfe2f8e277c10a8a3ee0d77016"],["/tags/Note/index.html","89da4870085f2a9489c85c5699ff3b9f"],["/tags/OSINT/index.html","70bb724a339e3d3cf97fb4cb877ee4c4"],["/tags/PrintStream/index.html","7517b57f1c6422c970e574032a5bb15a"],["/tags/Python/index.html","b746ec47dec15a6ad14640d6fe149ad3"],["/tags/README/index.html","5e6061a499f36bccc8fdfa5f029f30b2"],["/tags/RVO/index.html","f8c15ad84635a64cbec9d070c33c0178"],["/tags/Rocket-Loader/index.html","e44d31729db3dfdfc8d7de3600d709e6"],["/tags/STL/index.html","48b59370bdfab0f20b67d04ee9be1493"],["/tags/Scoop/index.html","3506a1af20e11c478a42919aea46b3c0"],["/tags/Swing/index.html","767a8031e9d717a32e23918e72099b97"],["/tags/Tomcat/index.html","b5d802d485828244db14a42d9ab2f9ce"],["/tags/UTF-8/index.html","373165605f17fc2330efb7e8d702f1a5"],["/tags/VSCode/index.html","d99944112a3c03b7821f536a14e7cefd"],["/tags/blacklist/index.html","96e90ea972543b3403e3b1c5ab82b0e9"],["/tags/blog/index.html","7d965a04333789619faffcb6a349250d"],["/tags/builtin/index.html","4301f28ddb247410fdf538c02ac05157"],["/tags/cloudflare/index.html","b880740d06427af455ff44d092d0a2de"],["/tags/giscus/index.html","04fea08b00d4d46eefb3f5fd01561492"],["/tags/gitalk/index.html","d80574b8495ee6b8a94ae3b4a220f74f"],["/tags/index.html","c6c3056b83568a4a2babe4bc1ca7acad"],["/tags/tools/index.html","aee960a49c8f374d4cc0e9d3585d64fd"],["/tags/utteranc/index.html","e4fba5b113a20738e1911ce8e7e826df"],["/tags/vue/index.html","9d9f0918b18f47b271526795843e182b"],["/tags/web/index.html","9bbe4cfc31e37fc0dcab027ef07ee55a"],["/tags/乱码/index.html","3df1a6827e0fc2c2495dbe3048a5876c"],["/tags/二分套二分/index.html","6bca585a2880b78819da901096f06bd7"],["/tags/云计算/index.html","60b72c637feff9ae9b2f52355d2a8538"],["/tags/仓库管理/index.html","6c7c2f8209d55c329336d1d0a6db94e7"],["/tags/信息分析/index.html","baa621e99543af041e574cf05b365fba"],["/tags/划水/index.html","80a3050df0baeca11e4e44acd16ba9dc"],["/tags/包管理器/index.html","5b46964fa3708f6cf8a56140eb884b34"],["/tags/图论/index.html","1a66951b7de08a0f4a989c67d77c534c"],["/tags/字符集/index.html","312147eb61488bea61dbaf44d505b9a3"],["/tags/应用/index.html","89126ed4c419e687b23660973c2cae82"],["/tags/开源/index.html","77285fad14c5b5a632c8efdddb37e1de"],["/tags/开源情报/index.html","a461fba03ef801fdc71c51d9a62f78f2"],["/tags/悦读/index.html","7d8c7bf07481981429b8361b17965d99"],["/tags/技术总结/index.html","3658c8d19fea6b4d9c55caa567bcf801"],["/tags/操作系统/index.html","6de38378e5718cb1b8231f4eccb9dfae"],["/tags/数据合规/index.html","404e9cc7385e9c6315579f488ea83cc3"],["/tags/数据结构/index.html","a2cb415ad09c05a340f3449e353e262d"],["/tags/数据结构与算法/index.html","db12cbdc472b6d17836d15760c3aea73"],["/tags/新年/index.html","41e378677a043885bb6d648afafe81e9"],["/tags/服务器运维/index.html","c5edc4a07a4be37f596ad0186a59a80a"],["/tags/杂谈/index.html","661e2d7ebfae78924683a7f3076eb30c"],["/tags/笔记/index.html","7b78b07eb6fb00bcdaf229c166465c63"],["/tags/算法/index.html","6dd1a7fa0e04b6e6bcee1225e6e8e981"],["/tags/线段树/index.html","6e8152b3f48e56b3113f00b8d9ca578e"],["/tags/编码/index.html","517db9b55d35867071719ae0614f450e"],["/tags/编程技巧/index.html","a673fde3d5d0511f1cb4a4c41491b864"],["/tags/网络安全/index.html","9b56f44ff7499029abf917f98f619d2e"],["/tags/网络流/index.html","f25c9ac723b1622af9e8294b38f36306"],["/tags/职业发展/index.html","87b5d4af7708d2a029c1381b92dab241"],["/tags/萌新/index.html","4c5dc209e2ccb7718ecc010223109221"],["/tags/计算几何/index.html","089e902ada92ceb6109814b7dc9fed53"],["/tags/计算机组成原理/index.html","22de0b0fba0a6cd0e6176a593a2839a8"],["/tags/计算机网络/index.html","dc80e9381fb77c20545c5b9635f3125d"],["/tags/课程/index.html","58815c64527623d05415269528d86af7"],["/tags/软件/index.html","03b57e20c1102e01f28031d2cd121e54"],["/tags/输出流/index.html","37757ee6a47b28a71bc42a59440f9db3"],["/tags/镜像源/index.html","24adf496408ff7cbaf4f6659319b06c6"],["/tags/随机增量法/index.html","a96e5f88a161984823ca283ffb5947f5"],["/tags/隐私伦理/index.html","47da0c8603853c042dac131801d13f6f"],["/tags/题解/index.html","99214df8cc08964a45b281b8fd175459"],["/theme-sakura/index.html","a9e24428548e1b5fdff39ea84ae73f60"],["/video/index.html","2ab3890bee5533251168f2a12f9afbc5"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-brands-400.woff2","8b0ddedbb27cbc9971c8667caa8a0cc1"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-regular-400.woff2","61f30b79daf5b31f0d254a31fba66158"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-solid-900.woff2","c64278386c2bbb5e293e11b94ca2f6d1"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"],["/webfonts/fa-v4compatibility.woff2","4bc58bc16bb05a05d3a47a4f7e143b75"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"fastly.jsdelivr.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"gcore.jsdelivr.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdnjs.cloudflare.com"});





/* eslint-enable */
