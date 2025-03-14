/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","eacf6e29cfa86e8611a0cfb49366ae5c"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","86916b6409becac18bbf9a57032e2960"],["/2023/02/06/C语言链表/index.html","2617a0540b09ead7b13d1251424c7662"],["/2023/02/06/书籍资源/index.html","484e5dd4d4c62ac0246eb8abb841ddca"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","f23a75ec4160cbe02e798a5be5448dc9"],["/2023/02/07/为水而水（笑/index.html","252dc5645a9c51ec8e37fa88b9a85823"],["/2023/02/08/洛谷主页源码/index.html","3f99d406dcc3946590177475ada59a26"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","03f8cafd0176c9f6edf55db9b53de5da"],["/2023/03/09/Web前端笔记-Emmet/index.html","5020b196e173feb6e71cdd36b26afcac"],["/2023/03/23/gitalk-评论/index.html","df7d5a8bb3b5ff2872850a0da71cc121"],["/2023/04/10/用C语言实现字符串全排列/index.html","2b9164d0cd6bf45976580cbee86186ed"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","83d639cf81385779ac837e5b27c9b18e"],["/2023/05/15/C语言基础排序-demo/index.html","a71401e3e2ef83960ba1a03e78bbd643"],["/2023/06/14/闲着没事干/index.html","70e2059e8958edc45216bd7d3866599b"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","0bdaba458693c12cd9fa92a1bef218bf"],["/2023/08/01/javase-note/index.html","4f2ccc1c92d14e469b623f2486e7d471"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","960c9572a6450348ab885c071db00fbc"],["/2023/09/14/vue-pure-admin/index.html","115deb19a4a48a07b2d5b05d21e3ce0f"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","b19892bd75f421b9ca667764f39c61ad"],["/2023/11/28/C-CPP-the-memset-function/index.html","19d7cb0a805afdbfca42910ec39b97ac"],["/2023/12/13/javaSwing-DynamicClock/index.html","e45a80252c1fdbe4dfb46a0da522bdba"],["/2024/01/24/builtin-系列函数/index.html","30136b5f17d057211486b80d7a44acbf"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","f641b425a9ca1786e85a01e01db7d08d"],["/2024/02/09/新年快乐/index.html","5c240a4925eef9627d7801bca051f6ef"],["/2024/03/26/408-route/index.html","7943b36e77a4314458b0f7fe58a644b8"],["/2024/04/07/转载-线段树专题-xyw813/index.html","59d5d4fc08e4be0f0c82b0c4bea642ad"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","79e6b0d8c5945d101f1e508c415cee43"],["/2024/05/03/Adobe-PS-2024-软件分享-torrent/index.html","47a62937e3c577c999ec4a62e4413aa6"],["/2024/05/06/cloudflare-display-issue/index.html","7af0e3b4bf38fef6d008fa613d677254"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","1f4801c3271ab1aa9d9c3cc583649324"],["/2024/06/18/P3517-POI2011-WYK-Plot/index.html","4383160dfaec10ed7537bf91bc40a1ea"],["/2024/06/25/open-source-LinuxMirrors/index.html","6154af845258b4f1b33a964a8b826cbb"],["/2024/09/02/Dinic-and-LuoGu-P1343/index.html","871bf54e92635fdcc6908fe230cc1451"],["/2024/10/08/黑题记录-2D-Geometry-110-in-1/index.html","b2703f18e7cbc1e7eb3f898d03ae3520"],["/2024/10/11/常用STL算法库/index.html","39d1ffd688e9271076504559f274f91e"],["/2024/11/28/在-Java-中设置输出流的字符集/index.html","a0aab6dd256ee6cda9e648bc6f35a8f5"],["/2024/12/05/JDK-18-以上使用标准输出流中文输出乱码问题/index.html","9562b6f29419fc34d00d407c419af749"],["/2024/12/09/Codeforces-Round-992-Div-2-解题报告/index.html","3e7738b5ecbe16b3782aff1637c8a540"],["/2024/12/17/Where-are-those-algorithms/index.html","cc7a329414e508840b67eb64cdd865c6"],["/2024/12/26/重构评论系统/index.html","29fc39da87b2dbe4a8af0125b180abc0"],["/404.html","7b7c2b12ef5e2b95eda92262d85e6cd6"],["/about/index.html","1b45a9aec4f58c90dee839099c2beffc"],["/archives/2023/02/index.html","66497c5eb520e5355c1467398a35662d"],["/archives/2023/03/index.html","1d3a22faa46751e556c64cd1a4489a30"],["/archives/2023/04/index.html","0387d1012d61294713347dbe8911afca"],["/archives/2023/05/index.html","ac68219ef3880da04a61082859533372"],["/archives/2023/06/index.html","577b5f89db6601bcc3baa071642b2d3f"],["/archives/2023/08/index.html","1995d49e942f8ea61c4840ceabf458e6"],["/archives/2023/09/index.html","ed99b7cb0eba755e8241e9086bc09953"],["/archives/2023/10/index.html","8c5d2841b1d723c8ad0ad79ae328dbb7"],["/archives/2023/11/index.html","16f410c6542bc1db83d9751e7cfd4624"],["/archives/2023/12/index.html","da5f8ef1dbba79a413e7384eff7beca7"],["/archives/2023/index.html","365b69bab9966207831cbc41ab4ec209"],["/archives/2023/page/2/index.html","365b69bab9966207831cbc41ab4ec209"],["/archives/2023/page/3/index.html","365b69bab9966207831cbc41ab4ec209"],["/archives/2024/01/index.html","7749f49788a03c8c66b0f7d9a884fe73"],["/archives/2024/02/index.html","079a0156936e41395235ce3aafc24c63"],["/archives/2024/03/index.html","3d9f6489c1a7f46998ba331c85da3e1c"],["/archives/2024/04/index.html","7600af9244a9f66f8a163bf07803d926"],["/archives/2024/05/index.html","d21c30fa51e662e6900e7c00fde1f49b"],["/archives/2024/06/index.html","23ecac8d461c96ee604e11806f14e7b7"],["/archives/2024/09/index.html","2d0a6745d365796f1dea7ad402556159"],["/archives/2024/10/index.html","9874d0656ffd38f58402047ddf688140"],["/archives/2024/11/index.html","68383072cc7a45afc2177f7e71c3d5db"],["/archives/2024/12/index.html","6c4833371547fa7e9f683a63adbc9fdc"],["/archives/2024/index.html","76dae0d1b87916f5286ed14d2a8b7b6b"],["/archives/2024/page/2/index.html","76dae0d1b87916f5286ed14d2a8b7b6b"],["/archives/index.html","78fb27b7fbf28bf0f64e41b18bb89bd8"],["/archives/page/2/index.html","78fb27b7fbf28bf0f64e41b18bb89bd8"],["/archives/page/3/index.html","78fb27b7fbf28bf0f64e41b18bb89bd8"],["/archives/page/4/index.html","78fb27b7fbf28bf0f64e41b18bb89bd8"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","b3f826a2b538ed74abb72a470a251637"],["/categories/技术/index.html","0cae4382444e964fc91e27e4e0f6738f"],["/categories/技术/page/2/index.html","961745f2d6b93d3fcebb22a265975619"],["/categories/技术/page/3/index.html","84c722d45ec2e3d6b9f7db4304c27589"],["/categories/资源/index.html","ab04ac1aa17323c3cf27b343c8c437ea"],["/categories/转载/index.html","1ca78e7e25cdced74f366aa2e6b2fe64"],["/categories/随想/index.html","86f1d09debfb3188f5b6f3ef4940e40a"],["/comment/index.html","41aee211b39c03bb0ef23ab359bdc15d"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","71cebc0cd666f182f1ab1dbe4a9f15c1"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","2fee6f3b0b16c3663f93f8e9c193d256"],["/css/style.min.css","5c69036f827bff149d075d5f26850d2b"],["/css/tags.css","eba03aebbf2f44113682d0ca1e19fcbb"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","f80f1bcecd4aad8fd5d8e8506a902851"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","057d09ddf80071ee7f38dc607a0ee349"],["/index.html","c2eeb588044973d4fd8dffa7bc4a9aa8"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/js/lib.min.js","65f02458a8e38579dac5594f252bd66f"],["/js/sakura-app.js","f1afa64bc2698ed86b55ab396a0c7ac3"],["/js/sakura-app.min.js","115ca9549a404cd11acd81cd31abe374"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","c757e76be80d1da11f5c02c68665312c"],["/js/wrapImage.js","29007a235330279921b40783f3752c1c"],["/js/wrapImage.min.js","fa46e73ad4d52096338f455d716a71a2"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","d934c11cfa655f5b924644107c183bc5"],["/links/index.html","fdf94628256bdd0ea8b1506b163970ae"],["/music/index.html","27c2a616170d0eef7adf294fe27bb4dd"],["/page/2/index.html","9b18a4b045cece29c54bd52af04b81ba"],["/page/3/index.html","fe60ecd1877c1365103058b3a0d65a36"],["/page/4/index.html","4ebeb8d9a0f202a5faa95ceae08ec70d"],["/rss/index.html","e940e1c5defb50ee2f09978e05bb7dba"],["/sw-register.js","3ed9a95d83a837edc8e57b6cd95fe946"],["/tags/408/index.html","082680e5c35faa092f9f0a3ae78003ac"],["/tags/Adobe/index.html","945fd1965abfe4c3f63be1407d48fdc8"],["/tags/C-C/index.html","41feb260786cdaff3e77159e29e65e6d"],["/tags/C-CPP/index.html","0ff96b023810f91312f80b50b0c38e9a"],["/tags/C/index.html","5ead2fb61caf46227cef09721846a75d"],["/tags/CPP/index.html","fd68e90e9a2998ca81d7c882977903e1"],["/tags/CSS/index.html","f47be66b24a36df1d851a71bd18f7667"],["/tags/CodeForces/index.html","fc3531d1b02990e1beb8e6474d139f99"],["/tags/Color/index.html","8ac61bd351d0dadaeee12c5023ab2975"],["/tags/Comment/index.html","d1ad85220e08aab35889267d256498ee"],["/tags/C语言/index.html","32056e83f7bf6d8b430df320e2f428e8"],["/tags/Dinic/index.html","bc90534e023d24e3527d3e00f50ab1e9"],["/tags/Div-2/index.html","a1157be7b227d4128ce00c7510faa271"],["/tags/JDK/index.html","2ea0e32bb3de31b9caede9921e96c4f6"],["/tags/Java/index.html","c96c2320396a1958a4155138093fcbea"],["/tags/JavaScript/index.html","b2bd450bffcf6a0a8d9e92dcc3e07e2b"],["/tags/LeetCode/index.html","96a0d1f7d042e0cf89c8cc6fc47e0242"],["/tags/Linux/index.html","f0514aef8d9b4a1d6f256ffe8a441822"],["/tags/MSYS2/index.html","bbec781248b8f4148f7f8001429af940"],["/tags/Note/index.html","2beb575221f3ac644f80cf48d29a9242"],["/tags/PS/index.html","8ab03686cc954974219ea200fea545d1"],["/tags/PrintStream/index.html","57b802675f0101148b06c7b2b119ad95"],["/tags/Rocket-Loader/index.html","a55bc64c67e7dc76c2f5ecaadc8c0ba8"],["/tags/STL/index.html","4b093400f5775139fbec5c55c562d31d"],["/tags/Scoop/index.html","c7047d709c1716079793a7915f0b28ad"],["/tags/Software/index.html","cf02c78a24eba10201ba9a583d824fe9"],["/tags/Swing/index.html","1f1e0d3ba20a66d07e30ee538f8f0d61"],["/tags/Tomcat/index.html","c466cab751eda77bf8680c67a91dbe93"],["/tags/UTF-8/index.html","d0d9648ff333b49a619092207ec1ca83"],["/tags/VSCode/index.html","d4d002f78b1b1c20e5c5b15428bd0eb5"],["/tags/blog/index.html","a0fc909b0a10666d61dcad326fee12b8"],["/tags/builtin/index.html","fc577bbedfcabfceb723f9989785c91d"],["/tags/cloudflare/index.html","b92e9dbbde631717ec9e659a32d2954c"],["/tags/giscus/index.html","ddba026e648849f9e7a8c9ba109800b2"],["/tags/gitalk/index.html","67bdc900d53d32ee21cfcb25c8afa9db"],["/tags/index.html","1a0fb48afd5b527fcd0419049c675c48"],["/tags/tools/index.html","e51860f1046b8048e0f1b3b1f7a873bb"],["/tags/utteranc/index.html","b2063bd9e0d567f9f2e9ca8e3e52e06c"],["/tags/vue/index.html","dc77efb7b95b4dca0003e20ed9867747"],["/tags/web/index.html","6d3d4f602e15a2a15d034dd5c6591b7a"],["/tags/乱码/index.html","acae0cfcb63e821a3ca164cb13f3a697"],["/tags/二分套二分/index.html","32382157f3a1b31fdbc519619469e849"],["/tags/划水/index.html","4a38f8bc46e7f135fe9069df7f4a4d52"],["/tags/包管理器/index.html","8eff859bc5bf580bf68b803146fe6195"],["/tags/图论/index.html","fc7750f5d4df96f7a1f5397d73344488"],["/tags/字符集/index.html","e72d59180ce62fa7acb97a2cd8b7a82e"],["/tags/应用/index.html","fd7efdce2009366fdc575a5e4ac13738"],["/tags/悦读/index.html","e55b247f6fecb1bd9a14f81ee88432a2"],["/tags/操作系统/index.html","f48393c755910e3759ec6d6eb5e37bee"],["/tags/数据结构/index.html","ddaabf4c878c2102fa7c88d0fac22b46"],["/tags/数据结构与算法/index.html","0bd505fafb22a04591e09c7d1ac05da3"],["/tags/新年/index.html","7b65534833e8a828c79198c73d1db731"],["/tags/杂谈/index.html","865f562df55ddb745c6af124a16f3ed0"],["/tags/深搜/index.html","7dfe0ead1492903438aff77cf9f569fe"],["/tags/笔记/index.html","8aaef3a2ad84278dc30d91f15221fe12"],["/tags/算法/index.html","89f3cce0da3049f09ce7a4cdf16df1da"],["/tags/线段树/index.html","5c4028dabb583bca9c8119987d787803"],["/tags/编码/index.html","74ee260a05d8edf85e9a75191a667963"],["/tags/编程技巧/index.html","0046408a024f12bdda1594f04e55bad7"],["/tags/网络流/index.html","e2fe65a426a40e6f2920c4ba162fb68b"],["/tags/萌新/index.html","d9c777b980282d195ff7734bdbfc667e"],["/tags/计算几何/index.html","db92dab8b6249241201dfe5593f09878"],["/tags/计算机组成原理/index.html","dcd26c9c930570cddb127793bc6b453f"],["/tags/计算机网络/index.html","79fd70a7e149d8fe83f68a7d1607c791"],["/tags/质数筛/index.html","f4915a45a1e93f3a9fba7010c3de7942"],["/tags/软件/index.html","e067160076efd246d0d38600e652898e"],["/tags/输出流/index.html","62b99e2c7a97791284a7b64bf670bd23"],["/tags/镜像源/index.html","531b9eb1e911eeedc0b3a866eb23dff6"],["/tags/随机增量法/index.html","b152b5cf5a282e13f3baf2837b038fa1"],["/tags/题解/index.html","7754ed651e1db967b50296834bccb6ed"],["/theme-sakura/index.html","4a6f29e8d420bf0869950b76e899d2b0"],["/video/index.html","96222a966434107c622949f3e90d20df"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-brands-400.woff2","8b0ddedbb27cbc9971c8667caa8a0cc1"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-regular-400.woff2","61f30b79daf5b31f0d254a31fba66158"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-solid-900.woff2","c64278386c2bbb5e293e11b94ca2f6d1"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"],["/webfonts/fa-v4compatibility.woff2","4bc58bc16bb05a05d3a47a4f7e143b75"]];
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
