/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","0958b97e897fa566cfb5fcc7181b2e02"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","0a74191d92a516c8a4c6843da4f1f532"],["/2023/02/06/C语言链表/index.html","ebd81e7af83266d6df735e58a0c509d8"],["/2023/02/06/书籍资源/index.html","abbabc832b70983896fa80849516771c"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","0b2808f98a6cd658c07093bb89eb1581"],["/2023/02/07/为水而水（笑/index.html","524c8cf45e22e4f61ec560347e2e87bd"],["/2023/02/08/洛谷主页源码/index.html","c55edc7fb6cb4777ae2efca3a368b1e3"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","e23efe8c81c1181ee7212bd2b65798aa"],["/2023/03/09/Web前端笔记-Emmet/index.html","70a2d6d61432b10b3ce908c65e97aaf1"],["/2023/03/23/gitalk-评论/index.html","016cb5f715797f16a2459df8cae175d4"],["/2023/04/10/用C语言实现字符串全排列/index.html","5883b2b857045761838e836ce38a880c"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","8993e5c2304d930cc895dc0d0a664f03"],["/2023/05/15/C语言基础排序-demo/index.html","16f1df3544f12b299ab2fe1961eb5532"],["/2023/06/14/闲着没事干/index.html","0f73eb7b5ad50821b60c15c575facef1"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","6584c7e8474f77b13ed9fa69460de316"],["/2023/08/01/javase-note/index.html","ca516d765d7093592232bdc46f63f355"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","097eb5b2fbfb6b339f544262def120bc"],["/2023/09/14/vue-pure-admin/index.html","acef503e6a21298a7d6464e8c461b680"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","749d9bfeb29f8875ca55354ecbd983d0"],["/2023/11/28/C-CPP-the-memset-function/index.html","4317adaf3178286aefc7652349e90876"],["/2023/12/13/javaSwing-DynamicClock/index.html","3de77d3b36de109e05e80c06ec93b484"],["/2024/01/24/builtin-系列函数/index.html","9917c1efaa5bccb98fb3192c67d6a712"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","1b0549837f486c0cf6737f634c89e058"],["/2024/02/09/新年快乐/index.html","688d6b5f0b1264a9e150ac0c893816a5"],["/2024/03/26/408-route/index.html","3810ee1e6c56a48c6954f7130cd24f2d"],["/2024/04/07/转载-线段树专题-xyw813/index.html","cc9f5aad5b60754be129efeeaafbf06f"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","b1491b3fbdd82b1c1124766f7d743f2e"],["/2024/05/03/Adobe-PS-2024-软件分享-torrent/index.html","3ee243581e74d40948482a7dea13f38c"],["/2024/05/06/cloudflare-display-issue/index.html","c57533acb2b200340f6c623da9f84c1c"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","596dfe4c56a617b225f11961badc456a"],["/2024/06/18/P3517-POI2011-WYK-Plot/index.html","061ada85a6e77bb0cd1b779699ffafab"],["/2024/06/25/open-source-LinuxMirrors/index.html","78a1fc049bc0b47661edecb51627c3d0"],["/2024/09/02/Dinic-and-LuoGu-P1343/index.html","5a2e639eb074527c0775f00a4f0d1428"],["/2024/10/08/黑题记录-2D-Geometry-110-in-1/index.html","f52da7eb4df9636bab50465679389b16"],["/2024/10/11/常用STL算法库/index.html","ec089e754f7b78501c59740c1f6205f8"],["/2024/11/28/在-Java-中设置输出流的字符集/index.html","c4d52d912e2bf91a4a15fff8c56449be"],["/2024/12/05/JDK-18-以上使用标准输出流中文输出乱码问题/index.html","6cd5fc3f2cee449255d2735c06b460b3"],["/2024/12/09/Codeforces-Round-992-Div-2-解题报告/index.html","4fa46f49081484c4f6da1a2beb150ee5"],["/2024/12/17/Where-are-those-algorithms/index.html","64d8e6763666587a2bf623fe9e06dde3"],["/2024/12/26/重构评论系统/index.html","811e772a15865f47a5d3bc22a8ff89c8"],["/404.html","7b7c2b12ef5e2b95eda92262d85e6cd6"],["/about/index.html","b9ad6352148c6845b0d27125eceb1a9b"],["/archives/2023/02/index.html","8464a54b9d778ed4a915fcbe46f5a3d8"],["/archives/2023/03/index.html","053fa8b365e42431e27b6b4c2f44f553"],["/archives/2023/04/index.html","a88928e938a102c2697eb286eaffddc5"],["/archives/2023/05/index.html","4f911bbd571409f7b4cc1285ccd423d7"],["/archives/2023/06/index.html","8c3db5398eaf1e3c2f021cb370888a87"],["/archives/2023/08/index.html","2899791a7da1980926ec7e841197a1c2"],["/archives/2023/09/index.html","a8a4bad94eb8bb361a22f7d40957cdc4"],["/archives/2023/10/index.html","b5b22083e9e9b933d463e5825d49fab1"],["/archives/2023/11/index.html","3ba51749175b168efbc88e9dab291af5"],["/archives/2023/12/index.html","337fd65c870d1f9a402342c0e35536aa"],["/archives/2023/index.html","0e4720077ac055e3c170443b19864247"],["/archives/2023/page/2/index.html","0e4720077ac055e3c170443b19864247"],["/archives/2023/page/3/index.html","0e4720077ac055e3c170443b19864247"],["/archives/2024/01/index.html","bd4dff72b6ed169d5d73eaceb42bccf8"],["/archives/2024/02/index.html","2df74690e1ecf86024da8d68aab61d2b"],["/archives/2024/03/index.html","02c4269bd6ee5dbf5e3a1c6e67e80b96"],["/archives/2024/04/index.html","9f8fd844bba4963bb1509651a13b52d0"],["/archives/2024/05/index.html","2c1011d1d2a1960296324fe5a5fc8b4f"],["/archives/2024/06/index.html","8b3d4f2ee60188e931123305e11347e9"],["/archives/2024/09/index.html","92cada31048b6bf0f002ae349285e715"],["/archives/2024/10/index.html","126aa5182c302729cc8bcf73699cf5e1"],["/archives/2024/11/index.html","7c65434b97b67a714db1eb8ac0410a1c"],["/archives/2024/12/index.html","d9fd000fd92806990f60faf6f9e51f73"],["/archives/2024/index.html","7253d04425530ca7ba20e1db2fe39881"],["/archives/2024/page/2/index.html","7253d04425530ca7ba20e1db2fe39881"],["/archives/index.html","375378a11f06fbb0fe86a8ebb7990b88"],["/archives/page/2/index.html","375378a11f06fbb0fe86a8ebb7990b88"],["/archives/page/3/index.html","375378a11f06fbb0fe86a8ebb7990b88"],["/archives/page/4/index.html","375378a11f06fbb0fe86a8ebb7990b88"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","59412f4b95921aa21830bf719d06b044"],["/categories/技术/index.html","b0a16b24df12df8d6643b235c6461f56"],["/categories/技术/page/2/index.html","3450ea6a3f41a182ea461834fca5b584"],["/categories/技术/page/3/index.html","b756f729d8c9ea138536d824eda9ca84"],["/categories/资源/index.html","8795a384df39ff021e7fa791cca99e25"],["/categories/转载/index.html","c460c0b3e5d296fd4f49e22a2d43c68e"],["/categories/随想/index.html","e91ee2026fc9a79fe9470ac4fc96c792"],["/comment/index.html","3c28f0730377f447e2a6f16b696cfed0"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","71cebc0cd666f182f1ab1dbe4a9f15c1"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","2fee6f3b0b16c3663f93f8e9c193d256"],["/css/style.min.css","5c69036f827bff149d075d5f26850d2b"],["/css/tags.css","eba03aebbf2f44113682d0ca1e19fcbb"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","3e5fadf6d121835a0a708e2f27363ff2"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","60c68be5baa238eecd6c7c5af6f9f547"],["/index.html","8435e43e9f28109381e84b4718213346"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/js/lib.min.js","65f02458a8e38579dac5594f252bd66f"],["/js/sakura-app.js","f1afa64bc2698ed86b55ab396a0c7ac3"],["/js/sakura-app.min.js","115ca9549a404cd11acd81cd31abe374"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","c757e76be80d1da11f5c02c68665312c"],["/js/wrapImage.js","29007a235330279921b40783f3752c1c"],["/js/wrapImage.min.js","fa46e73ad4d52096338f455d716a71a2"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","2b6510845160235b7febc7410e776ee5"],["/links/index.html","64970e61df50738d3e08fd8a3fd7b4e2"],["/music/index.html","b977a40e23e86471e7ef88cb24f9849d"],["/page/2/index.html","b011c0e8d16b3044121f4f2b3028d36d"],["/page/3/index.html","8429d25a9234838af9992d4d2e78e284"],["/page/4/index.html","e6b55e31e8719c5cf6b91b7c93877033"],["/rss/index.html","ac90205843ed7dab5f26f88eb59d4bff"],["/sw-register.js","756116a6abc34c090817b7c46f269775"],["/tags/408/index.html","8dc4841bb369bdc6616b7fc2e9790142"],["/tags/Adobe/index.html","d8919fc4f99937e01e77efff953fb6d4"],["/tags/C-C/index.html","59359d496e82ecfb1afdeaf524a3230b"],["/tags/C-CPP/index.html","06c4f2a492d5300a3b0a9c2252b52c4f"],["/tags/C/index.html","7f09dda71dce028e80eb38896f4e148e"],["/tags/CPP/index.html","6ef1cbe0ef30a0626710da88917ace9b"],["/tags/CSS/index.html","1908477be55254651ee105d6f99bc31a"],["/tags/CodeForces/index.html","927c889e3b5334632f0c619cc1609e3a"],["/tags/Color/index.html","6c864c4a6d002bf56b63fea4710d22ad"],["/tags/Comment/index.html","91642910c58bc44a135a4152b2facb27"],["/tags/C语言/index.html","ec34ae3e76d05ff32bfbcbd004e552a7"],["/tags/Dinic/index.html","83a6931e2ee47ca59dca8b00587d98c8"],["/tags/Div-2/index.html","d86213350489947b15578218ef25a504"],["/tags/JDK/index.html","e7e39485cd8f9cda216a37d9b885fcb0"],["/tags/Java/index.html","eb9b5fe4da7715163e50efdec786f687"],["/tags/JavaScript/index.html","441185a5d211fdd2c50aaf70cf1f7f47"],["/tags/LeetCode/index.html","3d61e79eea25621f07b03d649e1551da"],["/tags/Linux/index.html","7a2b42ca4283079653d79cc785462c1d"],["/tags/MSYS2/index.html","68c6bf32206a4759b68a21b82d8f9bcc"],["/tags/Note/index.html","9fccf0e8d687149198bf84ceeef46a36"],["/tags/PS/index.html","a8a7b497bd5b3778f60948b440d1c281"],["/tags/PrintStream/index.html","ad6fe6e67d4483e10b6498f7211098ba"],["/tags/Rocket-Loader/index.html","86bd89718ce4d3fc2df1889e731e2448"],["/tags/STL/index.html","c68652f09bf39f7138945668aee7c70b"],["/tags/Scoop/index.html","6799482fca29ddc81d848ee9107fb814"],["/tags/Software/index.html","3a406797533deaaab6d23d53efc7eb13"],["/tags/Swing/index.html","158d5577c18da52b31d795eca097b11b"],["/tags/Tomcat/index.html","efd1eef3030650ca6ac9fc762c2e9526"],["/tags/UTF-8/index.html","f2052513b75aa93b2589f335e00af338"],["/tags/VSCode/index.html","9a7c925f37ccd7d37b4c19c0c387d5de"],["/tags/Web/index.html","ebeb9f7bf802035b88749f1e03cf3542"],["/tags/blog/index.html","8a137bea19825556e3cd6c164ef9a59e"],["/tags/builtin/index.html","e711a112e0e910fb615919a73920c53a"],["/tags/cloudflare/index.html","eeda8b5f7dc1ccca67b6f22f0de68e3f"],["/tags/giscus/index.html","70909b01879d0e3477d94c4468cac876"],["/tags/gitalk/index.html","1530acb8129849ceb1ff443d9136c576"],["/tags/index.html","855ca9deae9d83d1843a570880241a38"],["/tags/tools/index.html","80950b90bc07042b2637155a153e9472"],["/tags/utteranc/index.html","914fa49dbedd925abf7e62300f9a0224"],["/tags/vue/index.html","44ddfe2e78e4f1c71e3f7554c6883aa8"],["/tags/乱码/index.html","9e9bf38bc8ff5f6a5663f47cdd5cb758"],["/tags/二分套二分/index.html","802139fe89f4145994833e9425f92d1b"],["/tags/划水/index.html","cf8fbc65cbaad72f498178baff66cc4f"],["/tags/包管理器/index.html","73a8cae0647bd504c51a2a30a64fa549"],["/tags/图论/index.html","6f3a28bce9f7f567a43ebba05794248d"],["/tags/字符集/index.html","05ea988460a8a4332cb8f6412af4afb1"],["/tags/应用/index.html","ce14e3f02f7713ce57bafc9690b28436"],["/tags/悦读/index.html","9e82ea6184ff4bc1ea6875efb506b0ab"],["/tags/操作系统/index.html","c7696d9e290e247a069f72fa9b916987"],["/tags/数据结构/index.html","19d9304c0fbcde47c9e594800342cc4c"],["/tags/数据结构与算法/index.html","9cec9045f903b928bdbc81b4a64e487e"],["/tags/新年/index.html","3ecd417a5967e06e8feb5d5d3569c5cd"],["/tags/杂谈/index.html","134da8d63379edc1755a9a004e7a7389"],["/tags/深搜/index.html","b606137753b1bad62b71517965955368"],["/tags/笔记/index.html","105affb11d479f71884059b224ac5352"],["/tags/算法/index.html","8a14e30648cce37d74304339bd447b04"],["/tags/线段树/index.html","3881c24632b6e5958b6c7abaa44d92fd"],["/tags/编码/index.html","3d45b3b81a05dd4967027cb8cca32e07"],["/tags/编程技巧/index.html","4c10700778cf9f5f214e59f7252d73a7"],["/tags/网络流/index.html","3acee6a343531841e90b0cc0c46a8c83"],["/tags/萌新/index.html","e16aaf8347093cdbe6af9a47c16c5c1a"],["/tags/计算几何/index.html","b3e2d7ff4cdbb208cff1922edef7fe47"],["/tags/计算机组成原理/index.html","19c73e8b0f595807e78f3a13b826b5ab"],["/tags/计算机网络/index.html","9d837c032e5a495e8f59cefb1d998069"],["/tags/质数筛/index.html","e469a51de660d0c8e2b92a974ddcdd48"],["/tags/软件/index.html","bf026d2cb444bbf920847a71c31a9633"],["/tags/输出流/index.html","78d687f49378aaecdebb8f7f3fa269d0"],["/tags/镜像源/index.html","f6e8875df32ceb4ff8b6fb947ff25e59"],["/tags/随机增量法/index.html","6ad0ffc05a75652a415b7e12eeac66d7"],["/tags/题解/index.html","3cc3ae39ce9678a2441b5eb61bcb0e6f"],["/theme-sakura/index.html","cd2fd75020857e8fe51fcbc37ffa9806"],["/video/index.html","c381f71cd231c5aa352ce5ec29984b1b"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-brands-400.woff2","8b0ddedbb27cbc9971c8667caa8a0cc1"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-regular-400.woff2","61f30b79daf5b31f0d254a31fba66158"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-solid-900.woff2","c64278386c2bbb5e293e11b94ca2f6d1"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"],["/webfonts/fa-v4compatibility.woff2","4bc58bc16bb05a05d3a47a4f7e143b75"]];
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
