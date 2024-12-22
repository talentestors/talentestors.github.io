/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","cf4ebf79547679c8f50925325ac0e348"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","e696ba063195e6d9dc4ae13c4a2c09d6"],["/2023/02/06/C语言链表/index.html","fa9ca2aaf23af38bf6e5a2ebbd632c67"],["/2023/02/06/书籍资源/index.html","ce8c2515c3d17a6f0af52c227b491316"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","1a8caf3460f4c492d98b3a93e773eb7d"],["/2023/02/07/为水而水（笑/index.html","f06fe999e998f622adfe3c61aa422105"],["/2023/02/08/洛谷主页源码/index.html","e8a74daa325d500ba45a49b2dfd99056"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","5fe7a74e213889682c830bdac56a32e8"],["/2023/03/09/Web前端笔记-Emmet/index.html","df804338c4d641d2e8eef6da26fb355f"],["/2023/03/23/gitalk-评论/index.html","d3d6d892377a55494b56d564aa1e9274"],["/2023/04/10/用C语言实现字符串全排列/index.html","b90577cddf4ef2982c0f2f713b631c56"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","d7b1e90f9c9e89fc4eb3dc18dca40188"],["/2023/05/15/C语言基础排序-demo/index.html","f9bce49d2ba06ab6dfead8fc5a9e6b8d"],["/2023/06/14/闲着没事干/index.html","1d7f08aa3132eb24dfaa699014e8df6f"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","92f81abe26a2d6380e9b7e2f8a9b76e5"],["/2023/08/01/javase-note/index.html","5d7f93c05a2d1b6d8b9cfc5a0d5bf9c7"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","8a57ebb5690ea2953f9247b38978166e"],["/2023/09/14/vue-pure-admin/index.html","afa5fbbda2dc2abcda16dd7375bbf091"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","3b4a93a6545106076fd787cad8d71e01"],["/2023/11/28/C-CPP-the-memset-function/index.html","5cecf13ece7126205d487e521e481b52"],["/2023/12/13/javaSwing-DynamicClock/index.html","5e9698692c47b0b6776bd6e8c68f0a8b"],["/2024/01/24/builtin-系列函数/index.html","06ce65518f06b56919a7cb0c6235ca44"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","c4ee3684ea4b60f99c2ea634eb682b9c"],["/2024/02/09/新年快乐/index.html","23d5ef3bfb45c7d207bb7b07193601f9"],["/2024/03/26/408-route/index.html","bf387c2816c38b7f056cd52555ecc95d"],["/2024/04/07/转载-线段树专题-xyw813/index.html","7c960febfca8137699b93e89e25d8959"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","c6a2080631b1cd424fae44bb720916d8"],["/2024/05/03/Adobe-PS-2024-软件分享-torrent/index.html","92b2390122006d790116fa1a834b4ec5"],["/2024/05/06/cloudflare-display-issue/index.html","da58aab09ac5d7f9fba9915f9b69dcaf"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","d985b279a73b4adccbea6085caadb5bf"],["/2024/06/18/P3517-POI2011-WYK-Plot/index.html","3094c36a2acdc067dc70b72b0e35c4e0"],["/2024/06/25/open-source-LinuxMirrors/index.html","cf5600c684279ebded46ce15e215d63d"],["/2024/09/02/Dinic-and-LuoGu-P1343/index.html","f590669ae3606f546e67b4639b954ece"],["/2024/10/08/黑题记录-2D-Geometry-110-in-1/index.html","a19069c1c2a7028430725235e11aee15"],["/2024/10/11/常用STL算法库/index.html","6579255ae474e3889994e75216811c7c"],["/2024/11/28/在-Java-中设置输出流的字符集/index.html","3f12ca5800dc9ccb0271c2f4ab462114"],["/2024/12/05/JDK-18-以上使用标准输出流中文输出乱码问题/index.html","e4a0aed760c09086b4154488c6d5e9ea"],["/2024/12/09/Codeforces-Round-992-Div-2-解题报告/index.html","98bd5f64cb72b882419d3f8288bc2e5e"],["/2024/12/17/Where-are-those-algorithms/index.html","e7f1753930eb336308dda374614d7a27"],["/404.html","7b7c2b12ef5e2b95eda92262d85e6cd6"],["/about/index.html","1acc4a41db882e58e8b7fb092bf52b85"],["/archives/2023/02/index.html","05aabafac1e531c9f81f952b0f7d4d17"],["/archives/2023/03/index.html","f58b5565f7ad4c0aff6f62e54d1bc605"],["/archives/2023/04/index.html","241225424cefe0ac46043fc6cfadbd0e"],["/archives/2023/05/index.html","a486ee02dbb1c76f2f4603bc0550fdb7"],["/archives/2023/06/index.html","d4375c4a8c4657a9141151c85ec4680c"],["/archives/2023/08/index.html","9db30b303c30f1d8d95c886afe63dc31"],["/archives/2023/09/index.html","634b4cbed3201d5ccf4e2cba15e05573"],["/archives/2023/10/index.html","197968db4fb0e94abfbe731eabfb5639"],["/archives/2023/11/index.html","4ee79a1f74d60aeb0c131c007dcd923e"],["/archives/2023/12/index.html","dde6f457b4df4c1195590aef3205feb5"],["/archives/2023/index.html","3e8cc9299ee4f7414ef73229f73834f2"],["/archives/2023/page/2/index.html","3e8cc9299ee4f7414ef73229f73834f2"],["/archives/2023/page/3/index.html","3e8cc9299ee4f7414ef73229f73834f2"],["/archives/2024/01/index.html","208561ffcbeafff01463417f3759883c"],["/archives/2024/02/index.html","51597a857ed64facf5780f89da3ad42b"],["/archives/2024/03/index.html","e8411039df60a97af65323a5ad77be0c"],["/archives/2024/04/index.html","3447bb8d48455bee044eec833c7a6aca"],["/archives/2024/05/index.html","f78b44c9d6ccfeef9d4ec11a2e716ff4"],["/archives/2024/06/index.html","2b99a57acb545dc26cb9b9a8319e47f4"],["/archives/2024/09/index.html","de5402e1ed1f76175e309939a03e702e"],["/archives/2024/10/index.html","fb6f3ffe01e12fe490d8dd2efa67400a"],["/archives/2024/11/index.html","daeb3d2112349d5761aa7bbae4afbf4b"],["/archives/2024/12/index.html","323bcd24063150d5acbdc6054d2f4591"],["/archives/2024/index.html","baf7621909740343a65c19838647df04"],["/archives/2024/page/2/index.html","baf7621909740343a65c19838647df04"],["/archives/index.html","b92e1c5f267ef8451cbe3d65adde42f8"],["/archives/page/2/index.html","b92e1c5f267ef8451cbe3d65adde42f8"],["/archives/page/3/index.html","b92e1c5f267ef8451cbe3d65adde42f8"],["/archives/page/4/index.html","b92e1c5f267ef8451cbe3d65adde42f8"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","3f44a588b4541429dca0ff277060a712"],["/categories/技术/index.html","1b0ea7141b0c58f3c7752424d0393dd1"],["/categories/技术/page/2/index.html","7bd54c9992e0da8b4daa433b45d6a4d0"],["/categories/技术/page/3/index.html","9a752fa046c93a28fb77555f8dc424d3"],["/categories/资源/index.html","313dd013c570e26363e497be6d71732c"],["/categories/转载/index.html","97e650c529ab690049469fea942f409a"],["/categories/随想/index.html","b6e10f72b84f111f35a1b1b51dc90143"],["/comment/index.html","e5c78f9f9a4b00ee123d494f69d39f35"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","71cebc0cd666f182f1ab1dbe4a9f15c1"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","ee18cd907c37f0971146c2648da3e1b9"],["/css/style.min.css","2a08992ea2f9646c8f6f476fd81a59d8"],["/css/tags.css","eba03aebbf2f44113682d0ca1e19fcbb"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","944ee8d19a78c490cb4cb793af146158"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","7d105c02e67fa63d316fa5174d0eb768"],["/index.html","75a6a64198d0fdf44e699cd3dd0059be"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/js/lib.min.js","65f02458a8e38579dac5594f252bd66f"],["/js/sakura-app.js","f1afa64bc2698ed86b55ab396a0c7ac3"],["/js/sakura-app.min.js","115ca9549a404cd11acd81cd31abe374"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","c757e76be80d1da11f5c02c68665312c"],["/js/wrapImage.js","f9e15116d23ab9ad9218be6b3f952e30"],["/js/wrapImage.min.js","7b928d1716e58eabdefcf36958e73a35"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","5acd767b8aae12348a1f4c0675fd416c"],["/links/index.html","f4d7fccad238900b373e227b5a5c1a14"],["/music/index.html","1f62bd4b41611ce0627fbf2608bcd8e8"],["/page/2/index.html","5c28e0fbd2d0765ce535987ba88c710e"],["/page/3/index.html","945e1822fa9fc80309010a4bc70bb248"],["/page/4/index.html","7ee044fa4d5ed398b7baeaeb4294900f"],["/rss/index.html","9ddfea49b5da6a602a60c2efb2985eb0"],["/sw-register.js","c8dbbb69626f071e6e2c1676898e5d57"],["/tags/408/index.html","3bb858200e9c69240ee514b861bdff0c"],["/tags/Adobe/index.html","0b227a2333e266f8aea6b09cd8323384"],["/tags/C-C/index.html","867ec91eb667027156f64274bc3096be"],["/tags/C-CPP/index.html","46d926ee4a3acf672cbfaf5faf7b3d38"],["/tags/C/index.html","2da35b6328fc2b6a12adf76bfcd0527d"],["/tags/CPP/index.html","4c3baaca0431d9bc1dd6ce1d26532cec"],["/tags/CSS/index.html","143b1c12b27f8c28b19647b507f90b54"],["/tags/CodeForces/index.html","67df56bd80d8dfa3e50a061321f62940"],["/tags/Color/index.html","6346c8d57a6bc9dfa7be84757336559d"],["/tags/C语言/index.html","421845255f1cebac423630c76a8a034a"],["/tags/Dinic/index.html","5ddc36853d056591ed02febce3ba2022"],["/tags/Div-2/index.html","d8debdd591b8abe90f2253e8dfd33f8e"],["/tags/JDK/index.html","0b687c0d1afbf7f98f0377e52b8e6579"],["/tags/Java/index.html","67718232d8f9a1b1c9f4e654ff670022"],["/tags/JavaScript/index.html","78815ac1495f74eecf0e8e9478b73de4"],["/tags/LeetCode/index.html","a86c938c480fc34b1bb1d87e5465fd23"],["/tags/Linux/index.html","dd346873995690869bfe739b186aa81b"],["/tags/MSYS2/index.html","4cab4a6e7ac683f07eb463e1108ebf1a"],["/tags/Note/index.html","57a6d543eed7dd9bcd7e77e68555e4a3"],["/tags/PS/index.html","865d4c2d36d60cf41000ccf2da32dc56"],["/tags/PrintStream/index.html","245f8f786501ef889fef026ef042dd3d"],["/tags/Rocket-Loader/index.html","741d854a612375e6d62bd1141bb4a2a6"],["/tags/STL/index.html","c4d253ac57480c3607dcb76b21e1a397"],["/tags/Scoop/index.html","2f6266a051c6a9e89db178284d9c092b"],["/tags/Software/index.html","7dabacc533a26dec9bf448053833fce5"],["/tags/Swing/index.html","9e1f9dfb88205f4c1237fec990a2eac4"],["/tags/Tomcat/index.html","fff8356cf1b1118912f377e827909ad2"],["/tags/UTF-8/index.html","18918f7268d21c1407c8b7270c13684b"],["/tags/VSCode/index.html","1754ba6e8250a57803abe62fafee5722"],["/tags/blog/index.html","d3443fa464629f3eb0fdb311e86d60fc"],["/tags/builtin/index.html","ad3bae9be0a5ddef65649ac89e9e2377"],["/tags/cloudflare/index.html","3cfd2571b67495eaf9b0d4b44a9c73f6"],["/tags/index.html","1752a0cb947d0dfe4d6a4e4ee1c2ca2e"],["/tags/tools/index.html","0a0c2112c722a014ee3d2435787dad46"],["/tags/vue/index.html","3b87e583d42b68d7549e9ec9f817d1ba"],["/tags/web/index.html","18aa33b24061ccee7242ccb76018f2d0"],["/tags/乱码/index.html","a9ae1dae9a46577056998aabe71b8021"],["/tags/二分套二分/index.html","e7b707a223dcd2698d03722d119560b8"],["/tags/划水/index.html","1c8dd1b147f553c44592e206f4302fcb"],["/tags/包管理器/index.html","0e2153a4004cc941ce471b2143916532"],["/tags/图论/index.html","d7a11c6aff6c1f61df7623a83e0f87b2"],["/tags/字符集/index.html","cc8e92fd0344c36a45bcf4adbb666a95"],["/tags/应用/index.html","7a015bc09c4eae942e84b9819a17148b"],["/tags/悦读/index.html","687b78a6df399cbd2c077c3a868f6a5c"],["/tags/操作系统/index.html","4106668588047da59bf1785931c9ede6"],["/tags/数据结构/index.html","d6c65a544ca3e921a9ecf0a56efb1a69"],["/tags/数据结构与算法/index.html","047057cf0ef0616e599c6ae90007f4a9"],["/tags/新年/index.html","0389ef3a3477cd2d8b9099ef258c4c0a"],["/tags/杂谈/index.html","cf64ec18aa2a51b6542c6299ab2c67a2"],["/tags/深搜/index.html","4d849e7a1c40f7860d217c55c8108b1e"],["/tags/笔记/index.html","1d7a99c818928523900319f1a4372857"],["/tags/算法/index.html","792a804de570fb2fd91caeaf06dc1d01"],["/tags/线段树/index.html","bb58e65bb6f5931ac861e704e3254e54"],["/tags/编码/index.html","5a1ab167944b87f77c9032e8d4e36029"],["/tags/编程技巧/index.html","576852d1f11477dede9da6eda259a1f5"],["/tags/网络流/index.html","7266a1cc63e0708e9b264340e9e17c8b"],["/tags/萌新/index.html","49a9d790ae5f6a0e23acc0aa7e8d12e6"],["/tags/计算几何/index.html","5676027026f9e60795acf6f4f3e218d8"],["/tags/计算机组成原理/index.html","fb50d32b2f2c0ed887058804d0f587d0"],["/tags/计算机网络/index.html","ca6e6791bb112cbc34561fbcbb599239"],["/tags/质数筛/index.html","2b38a1950617c0bd79b28297ff3d5469"],["/tags/软件/index.html","ebb283426d7e88c98258c4f5ced09223"],["/tags/输出流/index.html","996c39bab2d295680ec515a83d49a961"],["/tags/镜像源/index.html","20ff545cc79c2fa73f3f3df399a9393c"],["/tags/随机增量法/index.html","01afbad693c5a4a58df7bf80a9ed3d32"],["/tags/题解/index.html","961cc36874faf0f37a44047063a98517"],["/theme-sakura/index.html","6051712a9323ea6005bda534a4024ca3"],["/video/index.html","d8cafd345b8f330f715460e636ca29b5"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-brands-400.woff2","8b0ddedbb27cbc9971c8667caa8a0cc1"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-regular-400.woff2","61f30b79daf5b31f0d254a31fba66158"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-solid-900.woff2","c64278386c2bbb5e293e11b94ca2f6d1"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"],["/webfonts/fa-v4compatibility.woff2","4bc58bc16bb05a05d3a47a4f7e143b75"]];
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
