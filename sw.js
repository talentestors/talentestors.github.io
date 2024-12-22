/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","4dce26cd8dec739c9e19c05ff8d302a4"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","52ec94a2cc6ab83b87e586a72ea7fee3"],["/2023/02/06/C语言链表/index.html","c1e809ab1f36c64a0c2378d2e8d2d004"],["/2023/02/06/书籍资源/index.html","da71a80580272f588542deae0f66d890"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","2e0d380e4f20c9daec553faa6f16f893"],["/2023/02/07/为水而水（笑/index.html","bd43417314b830d46da2583fb892b0e3"],["/2023/02/08/洛谷主页源码/index.html","82c8a0fee1f4fffc582da67a56c66288"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","6964af352cfc2c218775c1f311a92cff"],["/2023/03/09/Web前端笔记-Emmet/index.html","331877766abc6d13b788cfe84fde198b"],["/2023/03/23/gitalk-评论/index.html","f7974827fb6c0f19bacef853bb0986d7"],["/2023/04/10/用C语言实现字符串全排列/index.html","20dcf5cc09844064be754852d7159a4e"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","f5bba6facb4edb8d9cf6df4d48bd4032"],["/2023/05/15/C语言基础排序-demo/index.html","bf66e1e5bf179fe16e5370d361b54c3e"],["/2023/06/14/闲着没事干/index.html","da9fa1b8d806990a45bc5f7fc99291a5"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","fb48b486641ae01c58680ce840ceef3b"],["/2023/08/01/javase-note/index.html","5e25e5a0d9cbfd3d7693533c21e67086"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","0cc1d65b2dbdfbf9cd10c5adfc8d25ee"],["/2023/09/14/vue-pure-admin/index.html","cf0ea7623c4161091e0c9a35c39e0d17"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","3d0e9edc5c1c8948bd16dcfd4f89ebf2"],["/2023/11/28/C-CPP-the-memset-function/index.html","1395439712e0baf0890473532479209d"],["/2023/12/13/javaSwing-DynamicClock/index.html","7aa992c1e7f98708c3cf2da912d22216"],["/2024/01/24/builtin-系列函数/index.html","4a72d31b8ba345609d1b475f4f5f0b03"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","4aec4def20687c3e0489ca47b8d8a354"],["/2024/02/09/新年快乐/index.html","c8a54b3fe3d648ccb31ebff63cd5d02c"],["/2024/03/26/408-route/index.html","8d6320b67021f1d998f91cbe133ea813"],["/2024/04/07/转载-线段树专题-xyw813/index.html","43c95ec33bf6c7e18af9e84899581933"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","671bc1d8e29a9344f2ae622e27133349"],["/2024/05/03/Adobe-PS-2024-软件分享-torrent/index.html","9643953c40c966ba40f8f5998ae0d5fc"],["/2024/05/06/cloudflare-display-issue/index.html","f0adceb1a2932d870916df1bb6e69c92"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","643568da921cb46588767aee9b1479c9"],["/2024/06/18/P3517-POI2011-WYK-Plot/index.html","41233f74a37c0c687962eb2804b115bd"],["/2024/06/25/open-source-LinuxMirrors/index.html","86fc58e1aff79434179bff2195e12540"],["/2024/09/02/Dinic-and-LuoGu-P1343/index.html","e3e7240333fdf528055964135bce4489"],["/2024/10/08/黑题记录-2D-Geometry-110-in-1/index.html","5dce770534e86e9868032e9fd7b93e43"],["/2024/10/11/常用STL算法库/index.html","35f42098947b198b0c4abff716847bcb"],["/2024/11/28/在-Java-中设置输出流的字符集/index.html","30a50b325ca5a97338d185b2a6ee1173"],["/2024/12/05/JDK-18-以上使用标准输出流中文输出乱码问题/index.html","e7cf6c107fb46484371f85a2b575e17e"],["/2024/12/09/Codeforces-Round-992-Div-2-解题报告/index.html","f83584b1a185c2c68c1773764bf8585d"],["/2024/12/17/Where-are-those-algorithms/index.html","8a32d46e929ebfefccbc8af4dfc3cb58"],["/404.html","7b7c2b12ef5e2b95eda92262d85e6cd6"],["/about/index.html","6cce5d1b2e0db33a34581f62d05828de"],["/archives/2023/02/index.html","2da851ed502a6465d2170f589d3dfe3f"],["/archives/2023/03/index.html","aa3cbe913ec2b1eb9b44738249440020"],["/archives/2023/04/index.html","8fa0e809ad506953ec197a5f85cf5f0d"],["/archives/2023/05/index.html","c1ae076889ba2b214593ca7751c70213"],["/archives/2023/06/index.html","0fce432104ae181c5388da68bf573a75"],["/archives/2023/08/index.html","924bcecbfebc5ed1d038949d62c610c9"],["/archives/2023/09/index.html","6cb90e73e2f63917017092d4d78c68d5"],["/archives/2023/10/index.html","551ddbab43dfd95b50efefc11fef4191"],["/archives/2023/11/index.html","b6720607a3c9516a93c1c9c459f00507"],["/archives/2023/12/index.html","ba296b6def60d802a7ce45e2f77590fc"],["/archives/2023/index.html","45bcf8511375b0c760773ff933b331eb"],["/archives/2023/page/2/index.html","45bcf8511375b0c760773ff933b331eb"],["/archives/2023/page/3/index.html","45bcf8511375b0c760773ff933b331eb"],["/archives/2024/01/index.html","1dea22ba4c2494321787f9f24929efa1"],["/archives/2024/02/index.html","32d1b5d99a30cc8d186f4437431202ce"],["/archives/2024/03/index.html","a002fcd3e0f568b28c59b197c4e619d4"],["/archives/2024/04/index.html","b24e6dee0d84c1d36bdec7933e4b1cb1"],["/archives/2024/05/index.html","ad3bd6f61a035575224e169788caefb8"],["/archives/2024/06/index.html","74e004c8551c13b645b1b5de48dd9b78"],["/archives/2024/09/index.html","b09d7dd688be050690c20cdfcd149de4"],["/archives/2024/10/index.html","5bd109c95d6c51b0e8883da8780e2aa2"],["/archives/2024/11/index.html","c47e47437b292e6bf7ba54dfab4bd831"],["/archives/2024/12/index.html","e1978815ef9d644643838f45ad2ca85a"],["/archives/2024/index.html","cc29fb9b73135416f5c008b2c2bcc336"],["/archives/2024/page/2/index.html","cc29fb9b73135416f5c008b2c2bcc336"],["/archives/index.html","cb7ac1381bb7f617784137ffe905e19f"],["/archives/page/2/index.html","cb7ac1381bb7f617784137ffe905e19f"],["/archives/page/3/index.html","cb7ac1381bb7f617784137ffe905e19f"],["/archives/page/4/index.html","cb7ac1381bb7f617784137ffe905e19f"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","5c5ad728a0989e846c5cfb14d4f50fcb"],["/categories/技术/index.html","12beb146078b5959d8a8024d81586a42"],["/categories/技术/page/2/index.html","6c6da18b48a08a984e0063a7c5e871bd"],["/categories/技术/page/3/index.html","abcf4e5c7a6c07eec2bcd8ecc8182044"],["/categories/资源/index.html","c250d86e7a530ab6ea665f84056fb5c3"],["/categories/转载/index.html","9502e27c808a1c3f9dfc157a83fb06c3"],["/categories/随想/index.html","6e30601961eae26da236eb3c7819a859"],["/comment/index.html","85a1cfe76a2bcecd0a0525b70c9b7677"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","71cebc0cd666f182f1ab1dbe4a9f15c1"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","ee18cd907c37f0971146c2648da3e1b9"],["/css/style.min.css","2a08992ea2f9646c8f6f476fd81a59d8"],["/css/tags.css","eba03aebbf2f44113682d0ca1e19fcbb"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","07f670d6deb13440814a715483e73cb2"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","d14a62c61d99fbfbc6db256caebe8a22"],["/index.html","92fe326772c3d763ea4a794c3c9fe450"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/js/lib.min.js","65f02458a8e38579dac5594f252bd66f"],["/js/sakura-app.js","f1afa64bc2698ed86b55ab396a0c7ac3"],["/js/sakura-app.min.js","115ca9549a404cd11acd81cd31abe374"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","c757e76be80d1da11f5c02c68665312c"],["/js/wrapImage.js","f9e15116d23ab9ad9218be6b3f952e30"],["/js/wrapImage.min.js","7b928d1716e58eabdefcf36958e73a35"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","212c2c3cd54afaae21e1b297c4ff5b08"],["/links/index.html","aca12afa70387958f7368c9f70c8872f"],["/music/index.html","32c4f68763cbcd4f2ad161d3cabb2ad3"],["/page/2/index.html","7b594afa0d18814cc57a3a5b34a0b2e3"],["/page/3/index.html","a86e94f56440ddec6a185ac8fd59f865"],["/page/4/index.html","8d1181f33e5410f2b3816a3058d1fde2"],["/rss/index.html","a94958e59ba47519ddef5ee48f34ebd3"],["/sw-register.js","12976972f3b42b2d32bf2190f10ff375"],["/tags/408/index.html","c96da51bf08ad630afb37a632b51be4e"],["/tags/Adobe/index.html","1eaf8ee5e726464f73ec4db89f1718d1"],["/tags/C-C/index.html","e0c723497946010d5edbb005fae21f7b"],["/tags/C-CPP/index.html","02d435556d5f2dab77212741337c69c9"],["/tags/C/index.html","75343af654d57605f9433f155e8fae8f"],["/tags/CPP/index.html","7747f67ad7fb4856fadb4651a2e2f43c"],["/tags/CSS/index.html","bcf23f9380503346c83e417894b5a4a5"],["/tags/CodeForces/index.html","967f698eef79cf1db640d096b5e61fb3"],["/tags/Color/index.html","4eefa1fc1a59d9af803467a6da296d0e"],["/tags/C语言/index.html","376ce15c0e7792ce68f13cbd9e7b96df"],["/tags/Dinic/index.html","221541158c1f4601e0f50a0ea27fff06"],["/tags/Div-2/index.html","c97b84e04f94f054f0ee3da33dd61b52"],["/tags/JDK/index.html","f91524b030c7996a47166dd5b57aa08f"],["/tags/Java/index.html","880bfcc0153285d1edf73bbcc8dba40c"],["/tags/JavaScript/index.html","9cc64206280001821435f6ed37cbf98d"],["/tags/LeetCode/index.html","f9a9b420153f76290c2afe6beb71bc79"],["/tags/Linux/index.html","62a6d586abef1626e6f2d77783a7905d"],["/tags/MSYS2/index.html","69822c211d7dff051a427181d35217f9"],["/tags/Note/index.html","4dff2c8e7e54dff8240216eabcc60824"],["/tags/PS/index.html","bda33cb7a56ed34da2dc1d51003e4c00"],["/tags/PrintStream/index.html","3727b7f75acdbf24943408b141b5e1e9"],["/tags/Rocket-Loader/index.html","99de28b4e922d3c7dea224ef4c2329a6"],["/tags/STL/index.html","fdf01ffb51b7ae6aa1dbe2da15311b52"],["/tags/Scoop/index.html","c1a69a9fbdeb535a734a8916d5aee04f"],["/tags/Software/index.html","bb68c2049c849883cb6dc04b60332ee9"],["/tags/Swing/index.html","c827e280b8b95da12c6307617ac13aed"],["/tags/Tomcat/index.html","8c2784a9b86eb389c55f3507558751e5"],["/tags/UTF-8/index.html","a9e4d20099317be9f4337a001e55ddf3"],["/tags/VSCode/index.html","4bb8529655540cb52eadc319c02e013f"],["/tags/blog/index.html","3902265983a55dcec51c2e2ab7df782e"],["/tags/builtin/index.html","83abab9ada630d6d97a62647cb3f1215"],["/tags/cloudflare/index.html","1e542efd04df89568f905eb28d1e2913"],["/tags/index.html","63a0529f6e19698966ba2bfe9419a56f"],["/tags/tools/index.html","3171eddf50b7255acc17c6182d7e0526"],["/tags/vue/index.html","aa877b895dcf47553f649f439a4cd588"],["/tags/web/index.html","1e106963c7e08528daa139ba1d1eac3c"],["/tags/乱码/index.html","a16ca3fab67a3e183d9030f5d215e678"],["/tags/二分套二分/index.html","4051d7a512703e259c1d6afc1488c521"],["/tags/划水/index.html","5143bfe4592671197c556df421298bfc"],["/tags/包管理器/index.html","357ee7f2b37b7a7ffee30c42ae9d3ba5"],["/tags/图论/index.html","65c7cef3796a9f30b6056903c308f418"],["/tags/字符集/index.html","5b96fff9f347ff5a63923ac5bf75d896"],["/tags/应用/index.html","318a8459032bdf048ff68ec8f336159c"],["/tags/悦读/index.html","5c05200daca1b702597a9499c4863eed"],["/tags/操作系统/index.html","70a45946e92fc3110cae27500077d21a"],["/tags/数据结构/index.html","eef760fe52208cb487a710527848710b"],["/tags/数据结构与算法/index.html","8d2a2d8e01ecf66277157876473f871a"],["/tags/新年/index.html","ca1facce40f1a9ff9c40bd3d8aa17a32"],["/tags/杂谈/index.html","5a4075c97b9f1532ce4664742c988cc8"],["/tags/深搜/index.html","2ddb2ce7c40b5158e91886688aab398d"],["/tags/笔记/index.html","cea9bd21c2c6178c02447c00159d57fe"],["/tags/算法/index.html","05c093600cd59599edaf8d363b2c5bfc"],["/tags/线段树/index.html","0c7cfa95ff09d4410537cbe2721a787d"],["/tags/编码/index.html","0730faa950383211592e4666b7e183ae"],["/tags/编程技巧/index.html","8d18d84fb9d870fe75ff843ea75409c2"],["/tags/网络流/index.html","d4ea9d9d63fbc9fb08076caf26bdcfea"],["/tags/萌新/index.html","e5f5d6bbc9794b7c0ae4e45f97e41aa7"],["/tags/计算几何/index.html","9b9e899e8bd0bb96446c373e894e3778"],["/tags/计算机组成原理/index.html","a3d313d58387fc364b878fbdc614b1f3"],["/tags/计算机网络/index.html","1c41bf913c6e0ff31616ec9042f41c83"],["/tags/质数筛/index.html","96b999a3666bc8bc89af5433fdb01c1e"],["/tags/软件/index.html","3718f00ba4d16e99b280a937e1746ea2"],["/tags/输出流/index.html","2117450c533f30f4566974124ec2189c"],["/tags/镜像源/index.html","3a3f2932f4e7096e8d6ebf139ee0140e"],["/tags/随机增量法/index.html","6ab5559b6b8e574da4c4c234b1cafaa2"],["/tags/题解/index.html","aed2d0907cb8c2a2fae2ae76b8a98a96"],["/theme-sakura/index.html","939a75f9b74d46e5489d8a6a9e66800d"],["/video/index.html","254580343e00a38e64977a6584f491bb"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-brands-400.woff2","8b0ddedbb27cbc9971c8667caa8a0cc1"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-regular-400.woff2","61f30b79daf5b31f0d254a31fba66158"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-solid-900.woff2","c64278386c2bbb5e293e11b94ca2f6d1"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"],["/webfonts/fa-v4compatibility.woff2","4bc58bc16bb05a05d3a47a4f7e143b75"]];
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
