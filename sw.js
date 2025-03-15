/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","ae38f98bdb890c58ef4a3cc315007625"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","a06872468996c25f98a158c7acf61268"],["/2023/02/06/C语言链表/index.html","b79d09a57bc0836704f7c8546c2c3c4a"],["/2023/02/06/书籍资源/index.html","d9a6488d9d5e1f52d3cb76503579ea49"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","ce4f3f2fa6f6322cb37c48490e708bd1"],["/2023/02/07/为水而水（笑/index.html","8a90ae63cd985da69e943296bacf1cd2"],["/2023/02/08/洛谷主页源码/index.html","f1e4ebf19bdc2e8979a8a7d3cb796f7f"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","60749acbc29c654e2773a016a754d48f"],["/2023/03/09/Web前端笔记-Emmet/index.html","99d8ed83d70a11e226f267a301849aa7"],["/2023/03/23/gitalk-评论/index.html","08032eb34e674363db1fe8d5b4b5954f"],["/2023/04/10/用C语言实现字符串全排列/index.html","2656ea1395e9274fb1d4ae4734e7060c"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","a1ff22fe947d8f9ce136322338893293"],["/2023/05/15/C语言基础排序-demo/index.html","9683a6c423114abda2f7111ac311a97a"],["/2023/06/14/闲着没事干/index.html","8d97403079ae5f167ef1ad74b266d957"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","7fa2e04630ae34c9eb1239e62ea08711"],["/2023/08/01/javase-note/index.html","7e8ea7bdfbfb87e671242e6f77ce8e91"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","e4b2cdd459fce2ed7b16821e4d245ae7"],["/2023/09/14/vue-pure-admin/index.html","860bc93a49c43016e9c6aec58c7b7825"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","196c8c851feb172a6491e559deab2b3a"],["/2023/11/28/C-CPP-the-memset-function/index.html","0b16ae3a3106ec62c0c6ada52c8503ba"],["/2023/12/13/javaSwing-DynamicClock/index.html","13e21d64a060e14019f3ae11635b33e9"],["/2024/01/24/builtin-系列函数/index.html","3d47c383192a2492b2c739e09f2f6d70"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","7486bc514a60bc9c0c0ea3828aeec980"],["/2024/02/09/新年快乐/index.html","25e5642c1e4ba38fe2cbe5e88057ff78"],["/2024/03/26/408-route/index.html","8cac8fcd6ae975febb00e6e964efdf2e"],["/2024/04/07/转载-线段树专题-xyw813/index.html","2ff4a2a0104fffe8c01fa46fa09aa23c"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","be6cf275abe9599840c178232fe3f58a"],["/2024/05/03/Adobe-PS-2024-软件分享-torrent/index.html","81f0d6ef8f51cd144cec2e089ded9bd2"],["/2024/05/06/cloudflare-display-issue/index.html","494e95f3517446fabcfe2a8d425fb722"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","680d8a7ecdd64a80b845743e9a6960ef"],["/2024/06/18/P3517-POI2011-WYK-Plot/index.html","c3eb98772f329d628d4df1df885b77c6"],["/2024/06/25/open-source-LinuxMirrors/index.html","dfac53d4b2f16ab2bca1e11b71890ca1"],["/2024/09/02/Dinic-and-LuoGu-P1343/index.html","155a4d5f1a152c648d35d71d0eb2c1e4"],["/2024/10/08/黑题记录-2D-Geometry-110-in-1/index.html","a7a95e8fea29345bba5c4d7b9e958aeb"],["/2024/10/11/常用STL算法库/index.html","d504f2768fa10694d63d45940a2d7a2e"],["/2024/11/28/在-Java-中设置输出流的字符集/index.html","0caac96f5b751938467aaf52abdfc1fe"],["/2024/12/05/JDK-18-以上使用标准输出流中文输出乱码问题/index.html","4b6f254287f873e20db73d4e8c6846c2"],["/2024/12/09/Codeforces-Round-992-Div-2-解题报告/index.html","776cf6e911d2d2d8825968f3177fcba1"],["/2024/12/17/Where-are-those-algorithms/index.html","d5ebb81ea0a2db5addda6cf1e754fc42"],["/2024/12/26/重构评论系统/index.html","2dbcde0007987605176f6477eeaef838"],["/2025/03/15/GitHub-Skills/index.html","e16b570fefee93886f079fec190da1e8"],["/404.html","7b7c2b12ef5e2b95eda92262d85e6cd6"],["/about/index.html","21adc0c69cae2f59dc01794e7b0691e3"],["/archives/2023/02/index.html","977ec1cb6a06028ba8f9221a3aa8ba4d"],["/archives/2023/03/index.html","ff4646b04e33a16c42deae2b82d313de"],["/archives/2023/04/index.html","bafe52c5a1f112de7f45776a6b0d3d31"],["/archives/2023/05/index.html","f8bb407305b609e71de7d76533c4d31a"],["/archives/2023/06/index.html","9064ad17c2e015c2b99646e35d29fb05"],["/archives/2023/08/index.html","2e9cb097030b29ae8b5e43501058a14d"],["/archives/2023/09/index.html","42d908b3fc465836e935e55353ecc9ea"],["/archives/2023/10/index.html","aa6f3d31c41bfe0b7b56a0ca8a4dcce7"],["/archives/2023/11/index.html","054aa5175beb5e7dfe38a48046cacac2"],["/archives/2023/12/index.html","83f0dee24784c1df9d3bbfd84e1df70a"],["/archives/2023/index.html","545ce1891d46a72e69311221e793b0d0"],["/archives/2023/page/2/index.html","545ce1891d46a72e69311221e793b0d0"],["/archives/2023/page/3/index.html","545ce1891d46a72e69311221e793b0d0"],["/archives/2024/01/index.html","a0b76e6ad56f44b538117c044f6a5213"],["/archives/2024/02/index.html","dcd40841191d59c0dca5dbd71bc38e39"],["/archives/2024/03/index.html","dcc5727efbba002674b2bb721f407bb8"],["/archives/2024/04/index.html","ddcff819a76140e90c3dba0ba7374e4d"],["/archives/2024/05/index.html","332c1ed91146324f2d2d7cd837f03646"],["/archives/2024/06/index.html","41aba96ea9b4533c37c2e2eaa6daf9a2"],["/archives/2024/09/index.html","bb5cf89a864d956b3b16b7a4f01927ae"],["/archives/2024/10/index.html","73ba8654e1bc0b0d18a3709d63c5c10f"],["/archives/2024/11/index.html","b71f7e621188c26f369e2d67e46f3e0d"],["/archives/2024/12/index.html","344536854b24912730775833b73e270f"],["/archives/2024/index.html","8d51f4e81d2acf253358c78ba7b44c4d"],["/archives/2024/page/2/index.html","8d51f4e81d2acf253358c78ba7b44c4d"],["/archives/2025/03/index.html","be55cbeaaa7b2039acd82a34596238fa"],["/archives/2025/index.html","88a75d4abc4daea2b9b267a5c9169611"],["/archives/index.html","edd373e1da5330727dd0661b4b8983ba"],["/archives/page/2/index.html","edd373e1da5330727dd0661b4b8983ba"],["/archives/page/3/index.html","edd373e1da5330727dd0661b4b8983ba"],["/archives/page/4/index.html","edd373e1da5330727dd0661b4b8983ba"],["/archives/page/5/index.html","edd373e1da5330727dd0661b4b8983ba"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","81d0076262c50a83a1afe27caa022465"],["/categories/技术/index.html","dc68d0d721079a8bb5e46faa60254b0e"],["/categories/技术/page/2/index.html","728cd4d9b2f0ab9f2a4a7f10f47e0c1a"],["/categories/技术/page/3/index.html","17b3c8c411db57b1dd84d939e12c3452"],["/categories/资源/index.html","ac082827c088737c511ae9e361537f29"],["/categories/转载/index.html","9d3ac55e47a82597de8791ae607800ad"],["/categories/随想/index.html","0323d913e0b4b1535d001fe4924f4cff"],["/comment/index.html","89da1f9f5f42acf378fc549776fdbcea"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","71cebc0cd666f182f1ab1dbe4a9f15c1"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","2fee6f3b0b16c3663f93f8e9c193d256"],["/css/style.min.css","5c69036f827bff149d075d5f26850d2b"],["/css/tags.css","eba03aebbf2f44113682d0ca1e19fcbb"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","22871785ccdcc5682462312fc45eda56"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","67499e6a1523c86bc8804d7d8d0283c2"],["/index.html","cff9476ee4d61720ca90204d9bf50ae3"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/js/lib.js","65f02458a8e38579dac5594f252bd66f"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","f1afa64bc2698ed86b55ab396a0c7ac3"],["/js/sakura-app.min.js","115ca9549a404cd11acd81cd31abe374"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","c757e76be80d1da11f5c02c68665312c"],["/js/wrapImage.js","29007a235330279921b40783f3752c1c"],["/js/wrapImage.min.js","fa46e73ad4d52096338f455d716a71a2"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","44766abebce20d3f960386e017f30f7b"],["/links/index.html","15c7f73f7dc5a234daa858d4c083c4e7"],["/music/index.html","e1de621997dee50bf6a3d0b87a14a9d6"],["/page/2/index.html","f7536c972070945f94a5e353041a3bfb"],["/page/3/index.html","189627cbdf7c7bed31eee430da7a4577"],["/page/4/index.html","c14d9dcd574ca4346143ea3037ad8bb9"],["/page/5/index.html","bc62d0be797c29e6912a6255cf406dda"],["/rss/index.html","c68803810fa5787d9f2f4120d7a35ac9"],["/sw-register.js","4e0d1c56d0de1013c7a16523b864f209"],["/tags/408/index.html","7c875721be41fc4448aeb5365624a877"],["/tags/Adobe/index.html","a8d85ea687711eac8b92ad3862d8229d"],["/tags/C-C/index.html","0a23af8868eb9ca091df50220b9f60e5"],["/tags/C-CPP/index.html","f40c66541f6e039d4c1a843676213d8a"],["/tags/C/index.html","6b1f90b681fca97e53edcee514841786"],["/tags/CPP/index.html","cccf7c4f443c4c0bd52780c1b54bf2fa"],["/tags/CSS/index.html","4409ac2aeef1bb8de6f732a3ecfa9e70"],["/tags/CodeForces/index.html","0f86cf522c81536a9699726ea671bcae"],["/tags/Color/index.html","5b7dfe9bf0bb364bf90f5cc6400afaeb"],["/tags/Comment/index.html","e8589483713489de3b9d18e3dda6c9db"],["/tags/C语言/index.html","9598037dfe3e6dbb3b247ef7e1ad2026"],["/tags/Dinic/index.html","eae81f49d6fa243f86720c354192642f"],["/tags/Div-2/index.html","f5e5eef2b42b7c08e8783db327936491"],["/tags/GitHub-Actions/index.html","f76e50ebe17fbd73a6b066b4af7cd15d"],["/tags/GitHub/index.html","1aaf0090623f87d94ab91f5c3efedab4"],["/tags/JDK/index.html","e27fd93b3e6c6f2911e82f452785449a"],["/tags/Java/index.html","527677698f83e5b4f3a0287da0f71f3d"],["/tags/JavaScript/index.html","b6232dc09d329ed62afc4f8dbb06a350"],["/tags/LeetCode/index.html","3f75465ebbfa31437e347f7d26b68723"],["/tags/Linux/index.html","83b3ea31a965ea23bdd05e1491a50d4a"],["/tags/MSYS2/index.html","a7d6dc8c319c94eeac8bcbec01d9641b"],["/tags/Note/index.html","b36bd8a11918a6958b4737f9ea60720b"],["/tags/PS/index.html","91af912ad48b69a3da1073faa0e40c97"],["/tags/PrintStream/index.html","c482611e984fb4721845df5d56f1cec4"],["/tags/Rocket-Loader/index.html","e3fef28a7698736ca206944b13956753"],["/tags/STL/index.html","6687f0554b460862af4c45304e980f69"],["/tags/Scoop/index.html","39aef2f144887fd6f5b73241102cc6e0"],["/tags/Software/index.html","e87a176482e1c868d1937d6ff73a8552"],["/tags/Swing/index.html","5a5a404526dc7eceabff794fc1ac50d3"],["/tags/Tomcat/index.html","e64ff7accd15cf05187204c03bb1c7e4"],["/tags/UTF-8/index.html","6ddff33d0982ca84a471c64f9cbe0755"],["/tags/VSCode/index.html","b81b7e39037f41a7acff0f28bf908524"],["/tags/blog/index.html","d8a12dd9ac63ae1cd4e680bd062540f6"],["/tags/builtin/index.html","be894de2d4eece7f251dc6b4e7e70457"],["/tags/cloudflare/index.html","3cd45ff4b0f5995c96e35ef101542af0"],["/tags/giscus/index.html","75d3ebd7fa508c395025e09b5513dcfe"],["/tags/gitalk/index.html","f0d8e2b27472ac61cf32249d047e36e0"],["/tags/index.html","366426c92028a44071bc0e6516772407"],["/tags/tools/index.html","cb901c6409a61b5daa623920457fd319"],["/tags/utteranc/index.html","8fa7913499e962da904b1343c2c94ce9"],["/tags/vue/index.html","e07692f12fdec9e6290e47d0c19f2645"],["/tags/web/index.html","4dbec5793a8b4d9d2898e4b247936cef"],["/tags/乱码/index.html","bcaec0ca028e23f5522d6971fda2a983"],["/tags/二分套二分/index.html","0a2be6545f5319f91012751b87804598"],["/tags/划水/index.html","2af318c02f89476b9050ceaded53ffc9"],["/tags/包管理器/index.html","4d8220ac55e7863f177c0967a334742d"],["/tags/图论/index.html","c489fb5ad8d7d3fdccdfa505bbec2023"],["/tags/字符集/index.html","29522d7e1d455c884f0e15555e6b4d06"],["/tags/应用/index.html","447e4888810487223a416f175b433674"],["/tags/悦读/index.html","1434b1d2aa3fd203b2df8e2fcc435c8c"],["/tags/操作系统/index.html","e60ec9e38aedeef505361503937c280c"],["/tags/数据结构/index.html","8a4c616de6b14256d78139d311d04c45"],["/tags/数据结构与算法/index.html","abf375ba7c053b0d3570dc7574567a95"],["/tags/新年/index.html","f41e81034df48b8e1080ff94323aa4b8"],["/tags/杂谈/index.html","2930714ba08919a07626c69223f4abf5"],["/tags/深搜/index.html","df1b1119c5403479c70150c2ee9a08bb"],["/tags/笔记/index.html","333b53d0598b8a47d4e771c3965e783a"],["/tags/算法/index.html","9c418aeb3fe9bde67a89ba4340c9e552"],["/tags/线段树/index.html","501a9202d2e452cf1c38e9524caab098"],["/tags/编码/index.html","54557ffe5d561bc1aa0fb9c61ff46200"],["/tags/编程技巧/index.html","7dc3c752ac166f99c2ee66327ac364b1"],["/tags/网络流/index.html","77bb7e73396c721b93569de56db74c78"],["/tags/萌新/index.html","709dacec131b7d9e03e2010d8cdc6dcd"],["/tags/计算几何/index.html","3bf1364a40dbb2bf673530f305e60139"],["/tags/计算机组成原理/index.html","42303d6491e35aeb458e47500217701b"],["/tags/计算机网络/index.html","06df7e94375995b856051c07a9d79aca"],["/tags/课程/index.html","e2a0d03a6e403ffb7cdddc6138da4ed7"],["/tags/质数筛/index.html","ebd106e1babd48d88e5f6e42f6eb9b21"],["/tags/软件/index.html","49e87e2db9dfb2151dd7d2c3b9c559f7"],["/tags/输出流/index.html","f3537d50fe0ff644c9666980d06b7d90"],["/tags/镜像源/index.html","eb64de32123d475c61e08bd4067673ef"],["/tags/随机增量法/index.html","e7be392507849289352d63e8a9a8424e"],["/tags/题解/index.html","bbaef66349c7221976a14c7a494c4986"],["/theme-sakura/index.html","eb4674507b74a9c306dce1d83ee797f2"],["/video/index.html","4b66caf7b90333226fed7de1892543fc"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-brands-400.woff2","8b0ddedbb27cbc9971c8667caa8a0cc1"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-regular-400.woff2","61f30b79daf5b31f0d254a31fba66158"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-solid-900.woff2","c64278386c2bbb5e293e11b94ca2f6d1"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"],["/webfonts/fa-v4compatibility.woff2","4bc58bc16bb05a05d3a47a4f7e143b75"]];
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
