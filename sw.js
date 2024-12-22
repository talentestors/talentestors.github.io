/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","c065a437f056cd901af023780f9def37"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","91aec0f70cb351bca8b3359f8bd7e85b"],["/2023/02/06/C语言链表/index.html","dffe3b57601907b691879fb8db1389e3"],["/2023/02/06/书籍资源/index.html","8181b49b268b67c3f122c9e1787357d2"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","654f2fbec21500683fa8111fb5ff990d"],["/2023/02/07/为水而水（笑/index.html","fc8924b97d0a79ab2b1447be87669409"],["/2023/02/08/洛谷主页源码/index.html","e4930182de24f1a2e0c402ecac957c7f"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","44d4079c5a4fa295c42c5a0daf74303f"],["/2023/03/09/Web前端笔记-Emmet/index.html","dfaa96789a351d4f81873dc192ef916b"],["/2023/03/23/gitalk-评论/index.html","89f6080fc5a12590ad3e7748c8e7c1a2"],["/2023/04/10/用C语言实现字符串全排列/index.html","e6dd95bc57c97acac2fb39285d92a151"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","9e87396b5993bf40fb200e5fbf141df2"],["/2023/05/15/C语言基础排序-demo/index.html","34da315591beefaca92b320bd253f618"],["/2023/06/14/闲着没事干/index.html","771d8fbeaa0e28723c6498677961a04b"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","7cb02610e4aa23365aec2ee0c7873c78"],["/2023/08/01/javase-note/index.html","c92e1e2b276374835e87268efd90141b"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","67ed2eb470dd4fc9d5642dcb93ec6ec1"],["/2023/09/14/vue-pure-admin/index.html","04e1e8c57cf535bdcceb7d4d488b7a93"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","7767236fde780bd1070fdaaffb678f30"],["/2023/11/28/C-CPP-the-memset-function/index.html","a079b3e188815db0c37b0314c761fc26"],["/2023/12/13/javaSwing-DynamicClock/index.html","fefcb7f525f30000cd4fb14e378d5092"],["/2024/01/24/builtin-系列函数/index.html","a9bef2489405b13cc6937ed85a8468c1"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","2abd4b83028cb527dfd6790a206b928d"],["/2024/02/09/新年快乐/index.html","54966b8aa3a8023e605d9fd15b7adb1d"],["/2024/03/26/408-route/index.html","2c1dbbb39fdc88a85a120956be0b7ce4"],["/2024/04/07/转载-线段树专题-xyw813/index.html","18528e0899deaea7ba10e09dd3ee3441"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","d79eaf12fed313a0c9b1e1cbf05fe600"],["/2024/05/03/Adobe-PS-2024-软件分享-torrent/index.html","b10529258e19c5876cb3ea4baf731701"],["/2024/05/06/cloudflare-display-issue/index.html","3b654707534185831f9ad8c15410a98e"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","93b9a020c72496541d8da6d0e0be85c3"],["/2024/06/18/P3517-POI2011-WYK-Plot/index.html","a46382c7d40e48f1385293f37e0c9854"],["/2024/06/25/open-source-LinuxMirrors/index.html","c3b5366fab1800176c0182c152f16013"],["/2024/09/02/Dinic-and-LuoGu-P1343/index.html","3420c66c3cf87bfb475e6b5fa94e430f"],["/2024/10/08/黑题记录-2D-Geometry-110-in-1/index.html","419e2d7d759f235c3e95f295902bbbdb"],["/2024/10/11/常用STL算法库/index.html","96f9dc6e2b4e02141bc4bf6696b88210"],["/2024/11/28/在-Java-中设置输出流的字符集/index.html","5a3ac81b4379959214e5e64abd0901da"],["/2024/12/05/JDK-18-以上使用标准输出流中文输出乱码问题/index.html","270479452c49ebcf72c256bfb2ff18db"],["/2024/12/09/Codeforces-Round-992-Div-2-解题报告/index.html","8f74a4930217a32bd06d83d59d5c9671"],["/2024/12/17/Where-are-those-algorithms/index.html","5ba66538d6d26e908527482c80c4b1de"],["/404.html","7b7c2b12ef5e2b95eda92262d85e6cd6"],["/about/index.html","1d446b815530dd52bbfff5fbf28773e5"],["/archives/2023/02/index.html","a898c7ebf4e49144b759b3d778ba2275"],["/archives/2023/03/index.html","f5d7edac68748ba918d19671caf577e0"],["/archives/2023/04/index.html","a858787bac8fa31d8c34be519f46179e"],["/archives/2023/05/index.html","1c8ca590cc488fe51f1efc6b808a82aa"],["/archives/2023/06/index.html","7196b073565483cd6f5f2bf503245539"],["/archives/2023/08/index.html","1435cd59075f1abf16a557b6319108fb"],["/archives/2023/09/index.html","a31dbb9e61d5f4d0c6be65db4b852b0c"],["/archives/2023/10/index.html","ec4b1ea59c11c11e8c0098550e828363"],["/archives/2023/11/index.html","377cac89f292723ec1798f1b6bee6327"],["/archives/2023/12/index.html","ef63b09722133ca9156647002d4e2de9"],["/archives/2023/index.html","e02182dcb2d9bdfb0a127437f7cae09b"],["/archives/2023/page/2/index.html","e02182dcb2d9bdfb0a127437f7cae09b"],["/archives/2023/page/3/index.html","e02182dcb2d9bdfb0a127437f7cae09b"],["/archives/2024/01/index.html","b1a015231e60d0fe3924a8d6da96af2d"],["/archives/2024/02/index.html","c9ee52d98ae6edf3462b68a9b470e8ad"],["/archives/2024/03/index.html","8d7cae3e5cff22cae6c6ca9f6e775469"],["/archives/2024/04/index.html","942278e079a9dc7a522302c4ec669645"],["/archives/2024/05/index.html","48a2e741dfed94fdf7ab5a4f542bdb6a"],["/archives/2024/06/index.html","ba5419da40ac571269d1288f5ca4312d"],["/archives/2024/09/index.html","316f83d3caba2bef49b2d4c525665fc1"],["/archives/2024/10/index.html","af1e8d3d0409d95144979ba674a1e22f"],["/archives/2024/11/index.html","7db671661a4d500cda45709f7a16cd00"],["/archives/2024/12/index.html","28f78c6ca508a9abaf7a7be16eb411a3"],["/archives/2024/index.html","ba80d14a31ca94948002f2f6c3376c60"],["/archives/2024/page/2/index.html","ba80d14a31ca94948002f2f6c3376c60"],["/archives/index.html","53a4d0c39f85c06f8ca2668488394035"],["/archives/page/2/index.html","53a4d0c39f85c06f8ca2668488394035"],["/archives/page/3/index.html","53a4d0c39f85c06f8ca2668488394035"],["/archives/page/4/index.html","53a4d0c39f85c06f8ca2668488394035"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","452933a4636807358bec7d14280beb5d"],["/categories/技术/index.html","437ffcea1b1a960542232bdce43dbf5e"],["/categories/技术/page/2/index.html","5e117c37d9a05d2f30f9b67ae8b5cd0d"],["/categories/技术/page/3/index.html","dfc8df4d839096b5933df74221081eef"],["/categories/资源/index.html","cb36bbd02d4ba85612c18fa6ae4ba7e3"],["/categories/转载/index.html","9ad632cb36abe2619c68a5e014f7333b"],["/categories/随想/index.html","d47ae89b68f25b5a5fcb3b46b569a155"],["/comment/index.html","2120c71c32f919ac9044ed9366e99cbe"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","71cebc0cd666f182f1ab1dbe4a9f15c1"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","d8fc0a89b865a6bfedded5a62140a0e8"],["/css/style.min.css","5c69036f827bff149d075d5f26850d2b"],["/css/tags.css","eba03aebbf2f44113682d0ca1e19fcbb"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","024a311cdebc9d234fddcbaf99a0a84e"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","be04423a7800317fc4ff464ddf51aba3"],["/index.html","9e0ec8990fdadc7e34009fdec4b147ec"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/js/lib.min.js","65f02458a8e38579dac5594f252bd66f"],["/js/sakura-app.js","f1afa64bc2698ed86b55ab396a0c7ac3"],["/js/sakura-app.min.js","115ca9549a404cd11acd81cd31abe374"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","c757e76be80d1da11f5c02c68665312c"],["/js/wrapImage.js","c29a2f77c5aa3ba618ec389b270886c0"],["/js/wrapImage.min.js","fc743cae4be00ca6e80bf42d9b3bda32"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","e66554ea5166654c833e3f4039339a18"],["/links/index.html","e7f13518b9549ed83127cf7a11f73128"],["/music/index.html","fdc1fe01ef527c6f9278aa5adbd63abc"],["/page/2/index.html","8252b6040ea4e1504090b6bd7bafe3f6"],["/page/3/index.html","b02266780e531b12dd35a704388f5ed7"],["/page/4/index.html","66e114830022d6d2b49d4b790fd7c5ca"],["/rss/index.html","896a942c773a900770ef366516c8652d"],["/sw-register.js","3b306432452d8105f487023390b72e29"],["/tags/408/index.html","bccc5dfbf296dc309f53f11a6c148023"],["/tags/Adobe/index.html","715901ff8a4a8e267f1bb1806bec03ad"],["/tags/C-C/index.html","c5f1af25933ae01ecadd6a2ad8f01729"],["/tags/C-CPP/index.html","5a4b2be53dec5b32479aff9a0a301457"],["/tags/C/index.html","52b2240f15ab7763fe09d8b314a569a6"],["/tags/CPP/index.html","e3ebd8b8ba14933eca6287bc954c14fd"],["/tags/CSS/index.html","57df00d804141d15cea1d8b90ceec6a5"],["/tags/CodeForces/index.html","3ab23380db42e131f5001746b4450744"],["/tags/Color/index.html","fef24bd47373c3a854de2e5111ab737a"],["/tags/C语言/index.html","4c579a108c8678abd02f59df5ad0a3d3"],["/tags/Dinic/index.html","ed6920b6f560937750a8a394a462b13c"],["/tags/Div-2/index.html","857222b1c0eda91cc0f2c773dbb529ee"],["/tags/JDK/index.html","2c06803ea5a5f2e3c148b50276f61d29"],["/tags/Java/index.html","38eda6a5c1f5d602657b9b00f11a9451"],["/tags/JavaScript/index.html","9cde20f90231efe5ee1628bd5d873393"],["/tags/LeetCode/index.html","78ae2574e061755ea76f8bb28c50e13e"],["/tags/Linux/index.html","f9a2f5880759798f24ed5bdd063e7d5c"],["/tags/MSYS2/index.html","38f46c222132e7d11c2eb5721dda6dd3"],["/tags/Note/index.html","923876f5e58555441e2087f9ed879800"],["/tags/PS/index.html","346f0ca2291a7c2fa475cd5851e26a30"],["/tags/PrintStream/index.html","2dd03e70536f9cadf7c5b385f34a3b18"],["/tags/Rocket-Loader/index.html","4ea3e816853f9dedc910a7a8ec722e38"],["/tags/STL/index.html","8f03c636e38ce0d4526cef3ff68e347f"],["/tags/Scoop/index.html","c0cc02c76900b1c420dcffa1e8a64885"],["/tags/Software/index.html","d9e3355d29beceaf2bb836fd1b9f9195"],["/tags/Swing/index.html","a0bb9cae871f9bedbc5de850c2d484c4"],["/tags/Tomcat/index.html","4a72449ac48a6ac1e315a3590d8a9022"],["/tags/UTF-8/index.html","c190239bcd18082b8858961151ba057c"],["/tags/VSCode/index.html","6c98e37d0f84970fbcb5849968d5e70d"],["/tags/blog/index.html","68bb9879e6f8630b2ee02df76da0619f"],["/tags/builtin/index.html","d9ca49136e63ecd1bb0683858823b4a2"],["/tags/cloudflare/index.html","c67b8fa8dacd85ad4201a82f1337928a"],["/tags/index.html","ecc4ebab134054b97aa67b2693807312"],["/tags/tools/index.html","d22de58e26b55b143577ab82fe9c4726"],["/tags/vue/index.html","e6e052f9ec36fd02b0bfcd750c76012b"],["/tags/web/index.html","8aeb682935e41991227f84e118706db5"],["/tags/乱码/index.html","c30d025221fc121e54be6b84b41b76d8"],["/tags/二分套二分/index.html","1e466eccb228db43a21e15946b40a181"],["/tags/划水/index.html","4275fe7c68b91860395ffd17d0be6b45"],["/tags/包管理器/index.html","fb227354abd4f5a8eb1ae7c34f49c594"],["/tags/图论/index.html","dd501ec6c7907197b22dabd36359d043"],["/tags/字符集/index.html","5d454388234472e86a1d980fd7498d77"],["/tags/应用/index.html","75f3f7336c17a92e63b2f3e924b6640e"],["/tags/悦读/index.html","aa926e77d8d100166088dbf29a765a55"],["/tags/操作系统/index.html","33019cc0888279f2340ad3596b30e9a4"],["/tags/数据结构/index.html","f37c902336c70fbf8f3afa35dfaf58db"],["/tags/数据结构与算法/index.html","28bc834f9f3bfd872405d5270dfadf6e"],["/tags/新年/index.html","9f6369fc388b367c2781f0fa20f9316f"],["/tags/杂谈/index.html","81938e036d325ac9be25e523941cb1c1"],["/tags/深搜/index.html","36c28c95fe2620865776a76e8c801420"],["/tags/笔记/index.html","6df4046e5c809b3e7f093797ed791c9c"],["/tags/算法/index.html","1dab9dd136b1d919377c6784dea46ff0"],["/tags/线段树/index.html","721d03b5b6a0af2e674c29e9e63c79a5"],["/tags/编码/index.html","1606b2872acd858bdfa1e762c4ded6a2"],["/tags/编程技巧/index.html","938132dfe59c66bc3912f50f8f7bfcdb"],["/tags/网络流/index.html","f5c6143df132b023eaf5b7c7a761b81b"],["/tags/萌新/index.html","7175347a810f8d3444c7dcae02372f98"],["/tags/计算几何/index.html","bab4035d196b6cf069842c5c3059f519"],["/tags/计算机组成原理/index.html","4fc158f0e85c1491b5d7a731a32362fc"],["/tags/计算机网络/index.html","0d6372395e7b669b6763a256e8e07534"],["/tags/质数筛/index.html","3b8dad2662767ad6e462e77ac3e924d5"],["/tags/软件/index.html","3ae2f9082434b4eaff9a7dbb692947d9"],["/tags/输出流/index.html","918317c6c369cf858ae6c8bab8cd5008"],["/tags/镜像源/index.html","6eeb4f8c63df045224902e5813efc797"],["/tags/随机增量法/index.html","56b6b58c91917813c1671bc47823215d"],["/tags/题解/index.html","04aeaab78028d4aef2ad01814a205f24"],["/theme-sakura/index.html","1b599f61e5f8b6f6c63c5f2d4df5f794"],["/video/index.html","3692ddcefb31aaa92b20680751c851ed"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-brands-400.woff2","8b0ddedbb27cbc9971c8667caa8a0cc1"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-regular-400.woff2","61f30b79daf5b31f0d254a31fba66158"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-solid-900.woff2","c64278386c2bbb5e293e11b94ca2f6d1"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"],["/webfonts/fa-v4compatibility.woff2","4bc58bc16bb05a05d3a47a4f7e143b75"]];
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
