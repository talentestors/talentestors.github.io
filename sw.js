/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","98442ccfce02984c6e60c013fd629dd9"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","db164231876598a5070ca30772fc891c"],["/2023/02/06/C语言链表/index.html","a2c0c5604445c9a581b18f0e7ca402c7"],["/2023/02/06/书籍资源/index.html","624f18921b7c46fa313e26e2877ae787"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","853501df49ac738ebd2f21a633c2882c"],["/2023/02/07/为水而水（笑/index.html","d58bde78bd672ed58f409b24ec91ad69"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","e8f65330ed5404b7eb6f6097fd1c55d1"],["/2023/03/09/Web前端笔记-Emmet/index.html","95a800a1d8bc5a6a36be0845a8b7d3f5"],["/2023/03/23/gitalk-评论/index.html","5d534ffa70b674508c76deb73fc759cf"],["/2023/04/10/用C语言实现字符串全排列/index.html","5361a8e95db12cd700e841c01eceb49a"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","d4aa691c08c09f569e8282f8a1fba08a"],["/2023/05/15/C语言基础排序-demo/index.html","b6584fcb30a911f8660d910ee90c68e1"],["/2023/06/14/闲着没事干/index.html","8a740dd44e206cdb2ad2914e436ddfd9"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","5014ed91805966954dbb02dd40dcf8bd"],["/2023/08/01/javase-note/index.html","74a8a4edf64051964849cb3d832f4bff"],["/2023/09/14/vue-pure-admin/index.html","1b02037c81db1ad0e30fdfa448575b2e"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","c572c34239c9f314d48b2f42874903f1"],["/2023/11/28/C-CPP-the-memset-function/index.html","8141fa39bed4161974a957a40a419a7c"],["/2023/12/13/javaSwing-DynamicClock/index.html","0adb4ba9f1a48db65ca56663c38b405e"],["/2024/01/24/builtin-系列函数/index.html","e976adf1fde007b7cfca4fbb510b767a"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","bed6b37d6275b056e8053bd726f6f0db"],["/2024/02/09/新年快乐/index.html","4f97323758658f9eb295df6ebd6854bf"],["/2024/03/26/408-route/index.html","c3392fc762328e0fb9b181f11e2da3d4"],["/2024/04/07/转载-线段树专题-xyw813/index.html","82f6a355bfa1936ddbdd831e5242cf89"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","352b189dd806bde7eec1fdd3ec7e1781"],["/2024/05/06/cloudflare-display-issue/index.html","daea4b0b89848b94cab4bfb0bc74c815"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","a70d2a718276286170450c6cd8af4444"],["/2024/06/18/POI2011-WYK-Plot-Solved/index.html","0e1cf1b9d32a5974783ffb10557ea456"],["/2024/06/25/open-source-LinuxMirrors/index.html","4df9fa9b1a801fdf5265b69fbc414e2a"],["/2024/09/02/Dinic-算法/index.html","a071298b0c37133f9a5f380639b4a83f"],["/2024/10/08/黑题记录-2D-Geometry-110-in-1/index.html","15c0b83c085de3da621d632fb997b3ad"],["/2024/10/11/常用STL算法库/index.html","1ec44de41f573325f8920bc31894a152"],["/2024/11/28/在-Java-中设置输出流的字符集/index.html","4b77f98715273d0242a7e14f237f5732"],["/2024/12/05/JDK-18-以上使用标准输出流中文输出乱码问题/index.html","4fcd569d2bd1fce5da45d283f6a702e8"],["/2024/12/09/Codeforces-Round-992-Div-2-解题报告/index.html","19d388f131ccd383f0818a1df4ca448f"],["/2024/12/17/Where-are-those-algorithms/index.html","e2c72ebb233ead6304d35896d1e09d45"],["/2024/12/26/重构评论系统/index.html","6dd4de6541c20069e276f0c3b41298f2"],["/2025/03/15/GitHub-Skills/index.html","f7f163c030049c66deacf978b885767e"],["/2025/03/16/lombok与delombok-在gradle上的配置方法/index.html","265286dcc9146bfbe90042f021a67ad1"],["/2025/04/09/Codeforces-Round-1016-Div-3-解题报告/index.html","835cac5cb6cdf3039cab6d904f506710"],["/2025/06/11/blacklist/index.html","ac55bb1fb39f9597d9a949f491de1cc1"],["/404.html","7b7c2b12ef5e2b95eda92262d85e6cd6"],["/README_zh.html","9df30aeb32afab8d3f6468f2bb55d1ff"],["/about/index.html","685ab529c01031abea15f547f7daf79b"],["/archives/2023/02/index.html","d28a62244a8fa404f97d6702745dfabb"],["/archives/2023/03/index.html","1144ef9ac12b3979f689373c06532b14"],["/archives/2023/04/index.html","19d70eaf5627923f8c18eb89d6eb9175"],["/archives/2023/05/index.html","46c7750f71b925ea856351a3824a2ad5"],["/archives/2023/06/index.html","ce83b54d2901534b827f4b29646ca04f"],["/archives/2023/08/index.html","1b06c3616cc867cb519344b3b675faa1"],["/archives/2023/09/index.html","7bbdd4858ee6d2665a772cd058ff939e"],["/archives/2023/10/index.html","5b983f1e7c8292a01082b788ea5750b7"],["/archives/2023/11/index.html","dac90f9fc865da9950da596144043e85"],["/archives/2023/12/index.html","1b821d3355feb2fcf40963d36762bbe4"],["/archives/2023/index.html","50896551765cc653d1da645847e72486"],["/archives/2023/page/2/index.html","50896551765cc653d1da645847e72486"],["/archives/2024/01/index.html","29131ab77da21704407cec3495d8fc3c"],["/archives/2024/02/index.html","af6625073a277936fd781a42141b8ec6"],["/archives/2024/03/index.html","e09d1a4a8f260c654bb1a938e62750bb"],["/archives/2024/04/index.html","5007a42fd6d9659fcd6524eb94059526"],["/archives/2024/05/index.html","7feab11493c62d4fc24db9e5f88d0696"],["/archives/2024/06/index.html","1e1774b9c54a77fad2b7c2b6b835ad74"],["/archives/2024/09/index.html","bb6e916ea8ab36d796ed6453da19a7b7"],["/archives/2024/10/index.html","95c43997d019ac66feb3ffeda4ebf078"],["/archives/2024/11/index.html","cb77dc43f3dd16d9721b4d55f8638688"],["/archives/2024/12/index.html","d508c874f73789c875f745f01cccc41a"],["/archives/2024/index.html","59abafaf62260d0bc7d236f3ed2fae15"],["/archives/2024/page/2/index.html","59abafaf62260d0bc7d236f3ed2fae15"],["/archives/2025/03/index.html","a0ecb682ad02d503cfc1606e862a776b"],["/archives/2025/04/index.html","823563a39b4f6d1d2ea4b1ca9af88022"],["/archives/2025/06/index.html","4e262282857feca39da0fb7a1dd740d5"],["/archives/2025/index.html","a2f85f7d1e7a90ae8e56f51662c695ce"],["/archives/index.html","0a3938fbeab47d80afc1beb25a938bac"],["/archives/page/2/index.html","0a3938fbeab47d80afc1beb25a938bac"],["/archives/page/3/index.html","0a3938fbeab47d80afc1beb25a938bac"],["/archives/page/4/index.html","0a3938fbeab47d80afc1beb25a938bac"],["/archives/page/5/index.html","0a3938fbeab47d80afc1beb25a938bac"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","eda0b3565d94c5ed2697f8e4a29ef00a"],["/bangumis/index.html","55de7d1afad9955603caa2219b918eb1"],["/categories/技术/index.html","b8e98b2c18181887d5abc0f42d3da517"],["/categories/技术/page/2/index.html","6c6d7380e7a1b7c0925d4e807cd2379c"],["/categories/技术/page/3/index.html","0930fa48b91c2c27e5796b4dd2ba3c6e"],["/categories/资源/index.html","3df2ff45a9fc4f663dc661b8f4e3d49b"],["/categories/转载/index.html","cd34a4a47bea1f90c039620ee283eef6"],["/categories/随想/index.html","2aebb7778e38369c743c919bfa654b26"],["/comment/index.html","1b0c8f289f9d87d83edbcdc7eb76d9b6"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/giscus.min.css","96c42b2029f44095aaf46f6dc0628ded"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","71cebc0cd666f182f1ab1dbe4a9f15c1"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","73bb864d038d4bb3d83361b8910786bb"],["/css/style.min.css","45b4cf23f077e45f4776fb3f47a7cdd6"],["/css/tags.css","eba03aebbf2f44113682d0ca1e19fcbb"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","cb403e2c8d0c22f97b9d7affcc21437f"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","310b51da09afdb02cb945c3f23b911ad"],["/index.html","b3349aeed21f8aebf2bfe922715c74a1"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/js/lib.js","65f02458a8e38579dac5594f252bd66f"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","f1afa64bc2698ed86b55ab396a0c7ac3"],["/js/sakura-app.min.js","115ca9549a404cd11acd81cd31abe374"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","c757e76be80d1da11f5c02c68665312c"],["/js/wrapImage.js","29007a235330279921b40783f3752c1c"],["/js/wrapImage.min.js","fa46e73ad4d52096338f455d716a71a2"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","2289f9259a88320439eba720a4807d17"],["/links/index.html","bae773c48baeaa5c81308d75de4d75df"],["/music/index.html","81e826d4ec533753612c8ce8eb1dbdc5"],["/page/2/index.html","16168b209b4cae30dfa34f4a08740fcc"],["/page/3/index.html","22067926ac5de285f265ba18c9ac0751"],["/page/4/index.html","a1c8262a1069e79266f6c74f13589d50"],["/page/5/index.html","b1a6ea084864fae9f824423e338db046"],["/rss/index.html","643ba3c4275749a4b2e903ca93bf61c4"],["/sw-register.js","87dcfc0b14e6ac1edb3798f4f87822a7"],["/tags/408/index.html","3cb90559d6862118411ddd3486e73092"],["/tags/C-C/index.html","3e234c3b44297530383463748e96a10a"],["/tags/C-CPP/index.html","d9ddd412f175005e99454b0aa7cea4e4"],["/tags/C/index.html","a70c12b9bc752efcbbb0e5f27198b8f3"],["/tags/CPP/index.html","59ebdd59b6b4b1b020c1317eb5254a53"],["/tags/CSS/index.html","8762ab2d4564c5c0b7594a26f591e7b2"],["/tags/CodeForces/index.html","135503b983558ed94df1e2b8163cc666"],["/tags/Color/index.html","6802f867f65cc0c4744088f08a24c707"],["/tags/Comment/index.html","1ee7be9bb5254efad3ffe9ef849346e4"],["/tags/C语言/index.html","849f8ebe3bf51d236327856ae7331538"],["/tags/Dinic/index.html","9fe3630dc2a3bc6fd4fc0e3e23849f10"],["/tags/Div2/index.html","b32bdb3e950d891010f11b294b015036"],["/tags/Div3/index.html","2f74817cbfbdf47ea3d3e6742e1f9a78"],["/tags/GitHub-Actions/index.html","6210848a50df4dbb7a128ebe1b60f853"],["/tags/GitHub/index.html","19d67d38e142afac797baad6ce07c7af"],["/tags/Gradle/index.html","b41bdf0323db7c23785199f790d980d3"],["/tags/JDK/index.html","9ad87cb3caee7b8d0e40b8bf9737dcc5"],["/tags/Java/index.html","09cae78e6499841a1c62a0e44330d144"],["/tags/JavaScript/index.html","c084d99a81c068e7e976f6021519961a"],["/tags/LeetCode/index.html","f42bad382931e234e92967e0c97b7c11"],["/tags/Linux/index.html","ee631cdc0352a1293eefdc525a8f0f00"],["/tags/Lombok/index.html","663f75dae6caa9e5ce058109e63fd1ef"],["/tags/MSYS2/index.html","e1e3887fd73a4bb4fbb266123791b633"],["/tags/Note/index.html","fac0b64b4c60d46275858153172f290a"],["/tags/PrintStream/index.html","6f9823c528d79dd1ab94f8323a0c3317"],["/tags/Rocket-Loader/index.html","8925afc8d5e650e666a758f22b2528d9"],["/tags/STL/index.html","20d50900b95c82d19c36654cc2f49c0d"],["/tags/Scoop/index.html","5dd5dfe25b4978790a1d9a5d85d61d06"],["/tags/Swing/index.html","bcf024d44c1cbe49ed2c49a991533682"],["/tags/Tomcat/index.html","428d5c8516a7dc9abb8823ebb99f42b4"],["/tags/UTF-8/index.html","2427071a1d6246544ba1c25274d5744e"],["/tags/VSCode/index.html","8e453d795a824550fb6de97441e3482d"],["/tags/blog/index.html","1f9c55621402fbc1435353ca205565d8"],["/tags/builtin/index.html","aa87920a9fa0969477a65c446fb0a5aa"],["/tags/cloudflare/index.html","bc4173c1efe9eaddb5829eceaea7baf4"],["/tags/giscus/index.html","6dda17dd622943ff35a09b529eb3a243"],["/tags/gitalk/index.html","4b66cac1698f15b92e2e737ff0fe81b1"],["/tags/index.html","30c7b49eb4b8319734b10d38b6fd3170"],["/tags/tools/index.html","650b061c94b0ae5e6d6dc3387b550a8b"],["/tags/utteranc/index.html","7929f15a8ca7196ccc1e661ea7384d1a"],["/tags/vue/index.html","212af54d2203bbe67c7a08f2a987d1a1"],["/tags/web/index.html","cf09d69902153c615253d74994dac313"],["/tags/乱码/index.html","8c1ff66da1247e8fc2885e28e3c5aea7"],["/tags/二分套二分/index.html","2cf3762206d3cbc017d959f25bc3cf9f"],["/tags/划水/index.html","a2399d0d3a7408c1e007ce442595739c"],["/tags/包管理器/index.html","779e08dba3a656afe23f9b9815b817fe"],["/tags/图论/index.html","52e835cc2bc5556379b7bb2a6dcc45c0"],["/tags/字符集/index.html","838d8158671e2de55d7aff18c66c9555"],["/tags/应用/index.html","bf924c00ed8828c02576201b02831379"],["/tags/悦读/index.html","d2b53d95d14aa396a0567e1d07b79af1"],["/tags/操作系统/index.html","63c5ab11ef4fb30e0bf5bc19e4a0d1ee"],["/tags/数据结构/index.html","6bde84098c329138ddceddeca885fe41"],["/tags/数据结构与算法/index.html","4d5b8ddc4a934d0124792444a1d5970d"],["/tags/新年/index.html","c5641a83b7fc3401508e72f25f2a5414"],["/tags/杂谈/index.html","5d19563fa40d3e26719be5a361a073c6"],["/tags/笔记/index.html","0893858639ccda8799351e1bf05257f8"],["/tags/算法/index.html","c1bb310f4eafddac16c24026ca7a5371"],["/tags/线段树/index.html","1e06044e121a025d0b8b69e013642496"],["/tags/编码/index.html","a02286d6a758cadb6c22e1753c2510aa"],["/tags/编程技巧/index.html","ebbd94e037a19f835d4174b580a61ee7"],["/tags/网络流/index.html","3ae14ae1a1d5f421b00dcecdbcbc0b05"],["/tags/萌新/index.html","d491a5a15d635c645a44de86f3cb1f5f"],["/tags/计算几何/index.html","abd0d71576cf53263ad3375732e1b7d6"],["/tags/计算机组成原理/index.html","c2c14df3d21d95c2aafac91c740e1776"],["/tags/计算机网络/index.html","6345c95883db8de72451d6686af1beb7"],["/tags/课程/index.html","e7f84c6cf349bddc27801dbaa5789048"],["/tags/软件/index.html","455aecb1ad510e583a608e1812fca062"],["/tags/输出流/index.html","6f6170104f8a01ae39355d7ee7a57b01"],["/tags/镜像源/index.html","6998af176275ac0cc1b4cd5eadb1a121"],["/tags/随机增量法/index.html","d2f38ef409c405d12617e46e54e918d7"],["/tags/题解/index.html","0a5d50f376ae6ad36be14b32635bec3b"],["/theme-sakura/index.html","0c1e01bfda5354761ce8b6dfc799616a"],["/video/index.html","65ff5b8aa13ef6e069d2542bf41f373b"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-brands-400.woff2","8b0ddedbb27cbc9971c8667caa8a0cc1"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-regular-400.woff2","61f30b79daf5b31f0d254a31fba66158"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-solid-900.woff2","c64278386c2bbb5e293e11b94ca2f6d1"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"],["/webfonts/fa-v4compatibility.woff2","4bc58bc16bb05a05d3a47a4f7e143b75"]];
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
