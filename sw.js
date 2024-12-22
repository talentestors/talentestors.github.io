/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","10a0a801c4da526f81eb3fdea31e5b23"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","c9f0d3941c39788857a5b38fdba71ba3"],["/2023/02/06/C语言链表/index.html","76195afd1558fb902372d7e332abdfe9"],["/2023/02/06/书籍资源/index.html","5025ee7c78294ac73576165c0570ddc7"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","2f1744e549b708810820cd4d7854efe4"],["/2023/02/07/为水而水（笑/index.html","3928a68a4648d3bf459dd829844b2340"],["/2023/02/08/洛谷主页源码/index.html","858b39131b65203b02ed5cca59722ec0"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","b702db646e41f0b0699b538d191c80d5"],["/2023/03/09/Web前端笔记-Emmet/index.html","af1c004b06fe757961f30afda6a4701a"],["/2023/03/23/gitalk-评论/index.html","a65014fa190dc369d7675a57e2054647"],["/2023/04/10/用C语言实现字符串全排列/index.html","d0add97981275e2acad16208b37bcac3"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","ac757bddd1e300bd561db678482e92fd"],["/2023/05/15/C语言基础排序-demo/index.html","ef28cb94801285748088572373da9ab4"],["/2023/06/14/闲着没事干/index.html","9af55b0afe40491f29f88667daaa7dac"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","9f3c1a004a34c744328545d814b1b375"],["/2023/08/01/javase-note/index.html","f05c2564359e50894a009d012757f669"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","249af62af2ff19963bdeca5ee0b455cb"],["/2023/09/14/vue-pure-admin/index.html","42345b231101939f7c4896d883a91557"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","0a0d5bceca90906e5197f56bcb7938e7"],["/2023/11/28/C-CPP-the-memset-function/index.html","0ee5ef85129a241c131df8b54051283f"],["/2023/12/13/javaSwing-DynamicClock/index.html","ae1d9abf8975a9c9dfbd4a70f697ebe5"],["/2024/01/24/builtin-系列函数/index.html","e2d9bcba83f3da2acce666e790dae21e"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","b49d4ee1f8642571fe05710f53fbdb2d"],["/2024/02/09/新年快乐/index.html","f87efe13b04831ccd006da558beafb38"],["/2024/03/26/408-route/index.html","9a2dc02232778c5563d131d229c9e48e"],["/2024/04/07/转载-线段树专题-xyw813/index.html","7e3f55d3a83887d6bf1e67c6e65077e4"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","867536858ed35acdbc2c0331ebe07f45"],["/2024/05/03/Adobe-PS-2024-软件分享-torrent/index.html","7d8e737e6ca2dad770e4c248c53d03d1"],["/2024/05/06/cloudflare-display-issue/index.html","90318b418dee548cb1f6f8200cb93576"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","04eea7107697cfc3cb6c5ce99a3e6790"],["/2024/06/18/P3517-POI2011-WYK-Plot/index.html","c1eaff0dbc3020e872a0f5d0e829632b"],["/2024/06/25/open-source-LinuxMirrors/index.html","dc5cc44e846544d45d003dda1fa3383e"],["/2024/09/02/Dinic-and-LuoGu-P1343/index.html","607319bab887fc2b9477412030125b4c"],["/2024/10/08/黑题记录-2D-Geometry-110-in-1/index.html","7d03ebaebdc3663a0808c79f2ac66282"],["/2024/10/11/常用STL算法库/index.html","c4bb5008737a5c393f92af1d7f5bca67"],["/2024/11/28/在-Java-中设置输出流的字符集/index.html","80c3806588f8b866ac0eba8000012192"],["/2024/12/05/JDK-18-以上使用标准输出流中文输出乱码问题/index.html","2123993c1349c55cbe9e6387f87cf0ae"],["/2024/12/09/Codeforces-Round-992-Div-2-解题报告/index.html","411e2ee55229e3eccadd2589d199eea5"],["/2024/12/17/Where-are-those-algorithms/index.html","4ec6fc51bc134aa68e9a13f7a1b60545"],["/404.html","7b7c2b12ef5e2b95eda92262d85e6cd6"],["/about/index.html","f692a9dcd4a5e79ccf557116fdb777ba"],["/archives/2023/02/index.html","893d7a8197ba2e72d94883157b5a77f8"],["/archives/2023/03/index.html","11408d9883e9c7e9fd87947804e8f706"],["/archives/2023/04/index.html","e449fab2eec71616d0bd0eb747019aa0"],["/archives/2023/05/index.html","1870e5309671941d7015a21ffc9a714f"],["/archives/2023/06/index.html","2b68dc349d062794ff46064342a67864"],["/archives/2023/08/index.html","b841f7192ae7c57309caa0f9c805bcc1"],["/archives/2023/09/index.html","d8c6250906bc146ce7dff0183cb54f52"],["/archives/2023/10/index.html","a33024111ef644c80ed97121cbe43004"],["/archives/2023/11/index.html","484686b56e006651cc7fc6faa0cfc461"],["/archives/2023/12/index.html","53e06f86db5ffc5ab532a0504633309b"],["/archives/2023/index.html","8f4c09ee54ca760ecf05653c73b94db0"],["/archives/2023/page/2/index.html","8f4c09ee54ca760ecf05653c73b94db0"],["/archives/2023/page/3/index.html","8f4c09ee54ca760ecf05653c73b94db0"],["/archives/2024/01/index.html","f8fe698437de8651836acc0123c9d11c"],["/archives/2024/02/index.html","42e7513a5ac2e8484d9390f3e0ee4c44"],["/archives/2024/03/index.html","01a8adb6164a1fb4c7ddca6872a7afef"],["/archives/2024/04/index.html","7184dc189c12d68d523c0db4190ca3e5"],["/archives/2024/05/index.html","3852f619fdbf57df28f9dab1b889c2d2"],["/archives/2024/06/index.html","8cb6ffdd17d07c7467bc7afbc7ab2ab1"],["/archives/2024/09/index.html","6731ceb69c705955daed356e68d7deca"],["/archives/2024/10/index.html","aaf163a7a0378f5abaf3c1590cc0e85f"],["/archives/2024/11/index.html","fb0bc861b7e2f1e90c89d1d22690db0f"],["/archives/2024/12/index.html","4ed8ac1f21841d17dc57137a6d829218"],["/archives/2024/index.html","98f29d93941c79082235735d8fbbfd26"],["/archives/2024/page/2/index.html","98f29d93941c79082235735d8fbbfd26"],["/archives/index.html","3a83d4732ae3ac1f0c97f0aad7cd160a"],["/archives/page/2/index.html","3a83d4732ae3ac1f0c97f0aad7cd160a"],["/archives/page/3/index.html","3a83d4732ae3ac1f0c97f0aad7cd160a"],["/archives/page/4/index.html","3a83d4732ae3ac1f0c97f0aad7cd160a"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","6534511e68d4d542acbabec1b02f612b"],["/categories/技术/index.html","2d0f623c8f5fed8fd15fa7f074f025bd"],["/categories/技术/page/2/index.html","ee2492550a475d8655186065b7bfa2d0"],["/categories/技术/page/3/index.html","9369aa35f96f6190a5aececd0e3f63c8"],["/categories/资源/index.html","6ba70da355d05a65d589d663302c3b15"],["/categories/转载/index.html","53e2352ced76ed33c51d798abd853361"],["/categories/随想/index.html","8f386c96ffc8d21b61fb89baaa5f9e03"],["/comment/index.html","49b2f7d25135a88b131411cc1c08c5c7"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","71cebc0cd666f182f1ab1dbe4a9f15c1"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","ee18cd907c37f0971146c2648da3e1b9"],["/css/style.min.css","2a08992ea2f9646c8f6f476fd81a59d8"],["/css/tags.css","eba03aebbf2f44113682d0ca1e19fcbb"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","a35aeed719a45bb67ca0cf26ab0908b7"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","f9a8744882b3c3de4689e0757a318e29"],["/index.html","a3d4f52eb8c6d1b11f3707899b89f9e2"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/js/lib.min.js","65f02458a8e38579dac5594f252bd66f"],["/js/sakura-app.js","f1afa64bc2698ed86b55ab396a0c7ac3"],["/js/sakura-app.min.js","115ca9549a404cd11acd81cd31abe374"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","c757e76be80d1da11f5c02c68665312c"],["/js/wrapImage.js","f9e15116d23ab9ad9218be6b3f952e30"],["/js/wrapImage.min.js","7b928d1716e58eabdefcf36958e73a35"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","2a39afd54c642c69f79a71c2aca2ff3f"],["/links/index.html","ea65729bae73e18b719f81956b8b8fbf"],["/music/index.html","43a4bd2d4933eafeb98cd0c63a10c9ca"],["/page/2/index.html","a5d040a75336476aee6bec97727fa7d2"],["/page/3/index.html","8c20ae3f31e09b952b272590c10e07b5"],["/page/4/index.html","2944a8dc13896ea57f8f68cfa7a64c76"],["/rss/index.html","d423f29fc52968e765f5d4b42613d51c"],["/sw-register.js","8690a9b8344bd2532b6560f42045b1b7"],["/tags/408/index.html","b9f2bc7b7b961e299592dbfc74ef57c5"],["/tags/Adobe/index.html","a0ceefc22ef884cb9270a4ef9d834d8d"],["/tags/C-C/index.html","4fea057eb0f2873c31d37a164b12d056"],["/tags/C-CPP/index.html","1f4c2b12cb27ebac6450ef45a9460cfe"],["/tags/C/index.html","304f9e3add755410293686b462f5ac4c"],["/tags/CPP/index.html","4264b6fe7979484c075d22673ac14970"],["/tags/CSS/index.html","d9978bb6bab1516c4a2f3f9f097bc2b2"],["/tags/CodeForces/index.html","e3eb9fd4e7b0ea169bcc268c71fabd95"],["/tags/Color/index.html","147fb8e945576bb5bfd0b517d39c77b8"],["/tags/C语言/index.html","ebb8b0653f96b2c1cda402d1015a3d53"],["/tags/Dinic/index.html","de6d742e5daf83d4db199e93a5b4f857"],["/tags/Div-2/index.html","962e773d71b0ae78708f1262f97cce68"],["/tags/JDK/index.html","9c796d45d7b6cb51cfda111cc98a51c3"],["/tags/Java/index.html","3e34bcc2f49dcf1b3ce3d52a61d44091"],["/tags/JavaScript/index.html","adfe7bf583f895b07961f4f7fe906889"],["/tags/LeetCode/index.html","29177ebc7c0b782acce16c05a4e77a53"],["/tags/Linux/index.html","4aeb57babf485e36f896fc1be188ca75"],["/tags/MSYS2/index.html","3adc4b2150b1fb728bb2b54cf605a954"],["/tags/Note/index.html","492b1bc9069b4e232019c44e12f1884d"],["/tags/PS/index.html","97185cb599e4bf7c6d90b6f1d189bf7b"],["/tags/PrintStream/index.html","12d5b0f669de20abe5c77ebf0af62fd4"],["/tags/Rocket-Loader/index.html","a45b718ea1b0b715ed36c3e9c1f3aa8b"],["/tags/STL/index.html","b7683997f6c2bfc15b3b435702b71052"],["/tags/Scoop/index.html","84605f3021f8d93edc338e5ecaa7e6f9"],["/tags/Software/index.html","088b628776bc7b22df6f6eaa6c39f0c0"],["/tags/Swing/index.html","994ba015d77ba3dd2d885b25fb566060"],["/tags/Tomcat/index.html","0676a5ed87138feec8bfa4835218b72a"],["/tags/UTF-8/index.html","66ae94899d0d8af880961ca16b09614a"],["/tags/VSCode/index.html","c45829f44983b87c5280a6fbfbf7b1f8"],["/tags/blog/index.html","4d7487f3076dd173593abe1404dd7948"],["/tags/builtin/index.html","777c5f8e81cdf2661d7051dcf0d34192"],["/tags/cloudflare/index.html","0d6fa36026fbb9594ab18fdbdf286c31"],["/tags/index.html","a814d57b040663c96ca47da4d092e9b6"],["/tags/tools/index.html","5228eca5a3f8a670098078136f820b54"],["/tags/vue/index.html","4e12336312ddf1548b1ab3aad0123887"],["/tags/web/index.html","98c5c9f2e637d5b9df675f14c859c049"],["/tags/乱码/index.html","7fdb877d35a21969166c00a3c6eda2c3"],["/tags/二分套二分/index.html","0412450773b707071dbdb445f314bd93"],["/tags/划水/index.html","792d859d07362679b1dfe1be447623d0"],["/tags/包管理器/index.html","5de24a424a79f8382b910b51b2bd7af6"],["/tags/图论/index.html","c058e70874bace667f9449b59cbf6c1c"],["/tags/字符集/index.html","4b355d0aa96d5167c6d95c96fc3a3e31"],["/tags/应用/index.html","aa3e226528028191b72318e47a46564a"],["/tags/悦读/index.html","fe00e7e6c58bd38f08693b736828b7b7"],["/tags/操作系统/index.html","078b3ea9ffee965dad09848041f1fa30"],["/tags/数据结构/index.html","be0e17045b9b11ed1e017258fd7da44d"],["/tags/数据结构与算法/index.html","94f53d9120e2241e2ec5c64392fd4984"],["/tags/新年/index.html","9c0de7ec04d7cbd0febd7161f7a383a6"],["/tags/杂谈/index.html","e707b116a71ff05a116bd8344b84720d"],["/tags/深搜/index.html","a9ae258358908f7363d3378f5f0c9e9b"],["/tags/笔记/index.html","7f47cf7303b0ae8c9164ac81e3a94b0a"],["/tags/算法/index.html","c5001ed06eee41f8b5070329602df3c9"],["/tags/线段树/index.html","ab92df8569e0d8b5f2ea5b578d8f163a"],["/tags/编码/index.html","d089f399818b9e7431340a616116b4a6"],["/tags/编程技巧/index.html","c15046a61d04b27ad5c5a0f089efbda2"],["/tags/网络流/index.html","7d7a349924bd8e406b48b8cfc8921ce0"],["/tags/萌新/index.html","e2ec30e618025053c34a96109ea56b61"],["/tags/计算几何/index.html","7a7884cd4e931b22d70a960b56dde3fd"],["/tags/计算机组成原理/index.html","d290043440da58c89c74d7302402f578"],["/tags/计算机网络/index.html","29923da9af46cde2a843a546d114dd55"],["/tags/质数筛/index.html","6287e315d6a58ed94145cec7fff3028d"],["/tags/软件/index.html","bbe7a1180951d9ab85db366647c3b106"],["/tags/输出流/index.html","f2c57b2984ff033210832b2d0d59af97"],["/tags/镜像源/index.html","8a77d2f79f47a1439679f9019bcc4b93"],["/tags/随机增量法/index.html","2cad06099aa87faad77413002f48101e"],["/tags/题解/index.html","b1b8f7a253a4fcc5186b38812a57d32f"],["/theme-sakura/index.html","e6e5fda3d0252a3ec88bfd1f568a3f28"],["/video/index.html","c02335b4e946d5328d6d83e73d6f4748"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-brands-400.woff2","8b0ddedbb27cbc9971c8667caa8a0cc1"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-regular-400.woff2","61f30b79daf5b31f0d254a31fba66158"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-solid-900.woff2","c64278386c2bbb5e293e11b94ca2f6d1"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"],["/webfonts/fa-v4compatibility.woff2","4bc58bc16bb05a05d3a47a4f7e143b75"]];
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
