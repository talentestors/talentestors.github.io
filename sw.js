/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","b833b9c258b3bd83e301ccd89e3cec4e"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","bd3b2fbe0c84e6355033be1535753a0b"],["/2023/02/06/C语言链表/index.html","34eca408de12872d32edfc53dd5384bc"],["/2023/02/06/书籍资源/index.html","a097a3a98f485289347848eadc557195"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","b6cf07b1a1114bbd4e16b5762e719a0b"],["/2023/02/07/为水而水（笑/index.html","ff6d42b14da408578bc641b5c0ced68d"],["/2023/02/08/洛谷主页源码/index.html","d9f88ed68e434b02f9ac9f65b3618cf5"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","da9a5361ce8f9ccab7aaf9ea6a7156da"],["/2023/03/09/Web前端笔记-Emmet/index.html","ec020a8140adf929505747b2d8be64c2"],["/2023/03/23/gitalk-评论/index.html","9a38639b09f5dd96a33710ad7943f50d"],["/2023/04/10/用C语言实现字符串全排列/index.html","3d54a3f482ef1dbd7f6e93d4de02c6d5"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","d691e6d246661c01a466ede271c78255"],["/2023/05/15/C语言基础排序-demo/index.html","1a8d039b917aac10102eb3859fde3f8c"],["/2023/06/14/闲着没事干/index.html","fe4ec73dadf2edba3eda9cc467d79460"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","fc9afa4f886e5ec8d5c3dd6f396095db"],["/2023/08/01/javase-note/index.html","3b3687ee6acd1e2b7f7307508baad427"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","244d4997eac93234fa848dccd2bbc463"],["/2023/09/14/vue-pure-admin/index.html","62c43ce75f7381a1e55c11c402df26b3"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","2272f387df90a7aed62bc1ea5b48abe1"],["/2023/11/28/C-CPP-the-memset-function/index.html","1b0145b18b1f5b7291fa7d35f75a8dd3"],["/2023/12/13/javaSwing-DynamicClock/index.html","a0ffac8519f86ea6735f1b6ffa80ba3a"],["/2024/01/24/builtin-系列函数/index.html","4d50b6ecc3ee9ac43c9d89a13588e2dc"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","3f2802c0dad93f1c21591f7e6ed85365"],["/2024/02/09/新年快乐/index.html","18c5b422dffd4bbae6a1e072a26a8c04"],["/2024/03/26/408-route/index.html","c75d8c6a2a5babb13ce4ee25963a7cc8"],["/2024/04/07/转载-线段树专题-xyw813/index.html","cd588456e899bba5135846acdd4b1740"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","36327e5246778a77eb12703606914895"],["/2024/05/03/Adobe-PS-2024-软件分享-torrent/index.html","53acdb66df55a14bc89bab30ad2a18f9"],["/2024/05/06/cloudflare-display-issue/index.html","8652779d5f38123cdd2ea57363726880"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","6d15a77bac570e7afc95f612dab58bcb"],["/2024/06/18/P3517-POI2011-WYK-Plot/index.html","bbcf6e44e88ccf3791935a8a51d04577"],["/2024/06/25/open-source-LinuxMirrors/index.html","36558f516bfa4aeece7c0fcafff088d0"],["/2024/09/02/Dinic-and-LuoGu-P1343/index.html","26927e6c4d41a004ca2de639c9aab266"],["/2024/10/08/黑题记录-2D-Geometry-110-in-1/index.html","147fb00bb71fca3478054cc526c9e49d"],["/2024/10/11/常用STL算法库/index.html","2409b3f10e66949ce32bb2b577563053"],["/2024/11/28/在-Java-中设置输出流的字符集/index.html","e9ed0f33cb79f2bb633efc0dec8ee54c"],["/2024/12/05/JDK-18-以上使用标准输出流中文输出乱码问题/index.html","03ed6934b984cf61b87afcbed0779a8f"],["/2024/12/09/Codeforces-Round-992-Div-2-解题报告/index.html","837256fe3223c12807e02e7388c5954e"],["/2024/12/17/Where-are-those-algorithms/index.html","4c9723695da3c247e9c948bd93156257"],["/2024/12/26/重构评论系统/index.html","d9e62d1606d3b8cfe2188bb3ae77adb1"],["/404.html","7b7c2b12ef5e2b95eda92262d85e6cd6"],["/about/index.html","4820f6a256fa0d550f83092b99be7259"],["/archives/2023/02/index.html","945826711d4b18cec6f2661cb77c94ba"],["/archives/2023/03/index.html","5d2bba2c89b90017cd86657ecc6930c1"],["/archives/2023/04/index.html","1d1fc72aa99d861f47c4a9c7d7d0d51f"],["/archives/2023/05/index.html","c9ba858bbd243cb716705021a3155e5f"],["/archives/2023/06/index.html","aa9620dff2d1070bae0aae9b8b850a12"],["/archives/2023/08/index.html","7bed8a0306fda675d69a4f9918bef51d"],["/archives/2023/09/index.html","af4d8937fdbfe713d21e2f399b262e15"],["/archives/2023/10/index.html","f069a840bd36edf37aae24bd0daa3e3b"],["/archives/2023/11/index.html","bc2a0ff91dd14db66befedd96714c804"],["/archives/2023/12/index.html","b47276aa8fcb80554f8090a936a2973f"],["/archives/2023/index.html","fe8b3af23f755bf42651eb8f8f9dd35a"],["/archives/2023/page/2/index.html","fe8b3af23f755bf42651eb8f8f9dd35a"],["/archives/2023/page/3/index.html","fe8b3af23f755bf42651eb8f8f9dd35a"],["/archives/2024/01/index.html","1765d4a690e9e116e577030ad025050a"],["/archives/2024/02/index.html","1425b426376694e73620a81f0258dcdc"],["/archives/2024/03/index.html","e677fcf7452d1e78d67d3013b15f9b4a"],["/archives/2024/04/index.html","ec2b2f1f65694cb8a2d2fa1b506910e6"],["/archives/2024/05/index.html","28e3780358c27166ab0448d604c82cca"],["/archives/2024/06/index.html","efa2baf04098e545b3482726621194e0"],["/archives/2024/09/index.html","b785212a043fd68a4dc5ef60378024cb"],["/archives/2024/10/index.html","12f1dedf5e207f454c0dc516f8ea9c3c"],["/archives/2024/11/index.html","23968a1eddbdea682ea7206dfb71e9b8"],["/archives/2024/12/index.html","73f2f6a7d3f0a13a76fdf2e724ba7cc0"],["/archives/2024/index.html","79dc4316df58e69a0cdca6c8992a450c"],["/archives/2024/page/2/index.html","79dc4316df58e69a0cdca6c8992a450c"],["/archives/index.html","9d89d375b7638ce19851e7f6d78bbef2"],["/archives/page/2/index.html","9d89d375b7638ce19851e7f6d78bbef2"],["/archives/page/3/index.html","9d89d375b7638ce19851e7f6d78bbef2"],["/archives/page/4/index.html","9d89d375b7638ce19851e7f6d78bbef2"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","966ad36099617f7d84a0bf92d9f5ecbe"],["/categories/技术/index.html","6223a545e4948591d19649e5bb6261c2"],["/categories/技术/page/2/index.html","fe5166fde82a190fe2a2379c6281a5d7"],["/categories/技术/page/3/index.html","0c68c302e8ca44f3e508f66485d68a60"],["/categories/资源/index.html","72ea2a8c9d097cdceeb4b9fdf363759c"],["/categories/转载/index.html","377b6018bc3bd4d200c7af16d1c931f1"],["/categories/随想/index.html","45db4a72313cf3fc65a95298ccd9764a"],["/comment/index.html","d910bca61ec360abdc46a13f8dc10f48"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","71cebc0cd666f182f1ab1dbe4a9f15c1"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","2fee6f3b0b16c3663f93f8e9c193d256"],["/css/style.min.css","5c69036f827bff149d075d5f26850d2b"],["/css/tags.css","eba03aebbf2f44113682d0ca1e19fcbb"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","b3dd965e8c55d10145f62bcdaee11f69"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","a926663c32717e2a27a8c74c43daa877"],["/index.html","cdda22e8fbe86372c1f9f2bda6cb32d2"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/js/lib.min.js","65f02458a8e38579dac5594f252bd66f"],["/js/sakura-app.js","f1afa64bc2698ed86b55ab396a0c7ac3"],["/js/sakura-app.min.js","115ca9549a404cd11acd81cd31abe374"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","c757e76be80d1da11f5c02c68665312c"],["/js/wrapImage.js","29007a235330279921b40783f3752c1c"],["/js/wrapImage.min.js","fa46e73ad4d52096338f455d716a71a2"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","9c270c61aa0989e7ed38bbbd4825f286"],["/links/index.html","f812bfd5bd8477987d0d55ad2a0a670e"],["/music/index.html","7b41145855f75a820951b48324167ca9"],["/page/2/index.html","6cded0d3a9c815636cd378724a58a29a"],["/page/3/index.html","e1f6f88532f923c9b4207c3f6d9d97b8"],["/page/4/index.html","0b2535dbb07e09ace0f999971d8c4266"],["/rss/index.html","892c994e7e4033a3804f20dcb18ee565"],["/sw-register.js","b6ffcfab16b898bf290b1dcbe3fad1f9"],["/tags/408/index.html","2b2c450393e3f54a74f0d85acf29b1c0"],["/tags/Adobe/index.html","840522f5d5dfb5d6c6d12ac88fab0e8e"],["/tags/C-C/index.html","220a277f114f8b72055e8f39e4806652"],["/tags/C-CPP/index.html","06a9a89db469dd0031b3a769aba14b38"],["/tags/C/index.html","0dd84991ce0067c419c296ad8463e937"],["/tags/CPP/index.html","ec866d1a842f8621c1fcbce8f21263ab"],["/tags/CSS/index.html","0a82616a0a501b7164646dd856872968"],["/tags/CodeForces/index.html","4bf5e3a1b34ce453a94a80148116793a"],["/tags/Color/index.html","9357f64939994a2c5832cc31af3b7cb7"],["/tags/Comment/index.html","637fa09dbfd117b1c29d3f47f57657c3"],["/tags/C语言/index.html","e589dd3a7b1befb31ab0ff0706ecf584"],["/tags/Dinic/index.html","125c8da4ce770416a50e3453b53f6ab4"],["/tags/Div-2/index.html","1303fe96cfc9fd7d2e3d7f2559a7981b"],["/tags/JDK/index.html","2187bc7ec7ec2d733dded5c064077f59"],["/tags/Java/index.html","f44bea15856a5f47b92d2abb6d858f36"],["/tags/JavaScript/index.html","baa5e9925ab2dfbc83f75a995eb4d3cb"],["/tags/LeetCode/index.html","1246ddb8b3c74ec0b59416eac504c562"],["/tags/Linux/index.html","7166fb87f4413de8d8ac9786ab725a4a"],["/tags/MSYS2/index.html","b75feecca0356204cf1319f57733eb9d"],["/tags/Note/index.html","482fdbc768898729ea5f152c486c87da"],["/tags/PS/index.html","a4cc1e5e90da3cb3627549453deadf8b"],["/tags/PrintStream/index.html","e33a0541ff2eb0d9b2fd0480c1a2561c"],["/tags/Rocket-Loader/index.html","5b8b39c0e1bc633e06ec63d109d495de"],["/tags/STL/index.html","8cf4eeab2bf9914231acb11a2a629119"],["/tags/Scoop/index.html","015dcdafb7b85ec0c0011af4829c48f3"],["/tags/Software/index.html","bc107b39069cab16de816b9f24a8d9b2"],["/tags/Swing/index.html","7bbc6941b1195634663b21899ceb1aac"],["/tags/Tomcat/index.html","f03bee1f1b928513b0815eff348a4c1c"],["/tags/UTF-8/index.html","b90e03701d78df6b4d356c778518643a"],["/tags/VSCode/index.html","298d7c4e7c716d2db5cb6831723ae0a9"],["/tags/Web/index.html","7818b422405b41bf5499f8f0ff22e0f8"],["/tags/blog/index.html","479ebd23901d8ca1fd26489bf2f0b700"],["/tags/builtin/index.html","eef48302abb86a835af8934c9e3990f6"],["/tags/cloudflare/index.html","21e2848c891d4a5d9fe768c7eb097995"],["/tags/giscus/index.html","b8e5b2e6bc405f6a07c0c60a8370e685"],["/tags/gitalk/index.html","6e99bb6a31270a360c23ba9b48a2a935"],["/tags/index.html","9582b65b4e8d1764986c84a4cfd0b496"],["/tags/tools/index.html","451396193675fd391412aad897418c0f"],["/tags/utteranc/index.html","f9a1641caf28c441ce424112d58b46cb"],["/tags/vue/index.html","2faf7fe0afd7cce92fe2b4ca77ce4c13"],["/tags/乱码/index.html","02ff9cd967046ca88971acb8929cb10f"],["/tags/二分套二分/index.html","221a8c716ffef09a2c278ef48f76ba85"],["/tags/划水/index.html","9bbed01d478cdec006b17aa893020a98"],["/tags/包管理器/index.html","38661044199d6b2fa3049af670f19007"],["/tags/图论/index.html","69d1ae5672444e462bdb7ea9f2000129"],["/tags/字符集/index.html","9b0b4d0fa5383fdc91dc5ad7c263b50c"],["/tags/应用/index.html","661c719f3057f0fe2fc976a3877c74ec"],["/tags/悦读/index.html","b59eb13c3a327313cb9fc08e7b194fb9"],["/tags/操作系统/index.html","58e02c4adbb1868e1fb2c072efb0c111"],["/tags/数据结构/index.html","8567f38472254eaa3e0d8827dc5d5cc0"],["/tags/数据结构与算法/index.html","685bfcd0e1f8503232d4a10c7568469f"],["/tags/新年/index.html","f1c74cce7bb0fe982b86f712f53910a7"],["/tags/杂谈/index.html","f66b92c6cc58510e5805cc3728c21e97"],["/tags/深搜/index.html","2b1932939672afc095d96ef3bc507c64"],["/tags/笔记/index.html","a37ea10fbbf85b6b78a2285e911fc719"],["/tags/算法/index.html","0b9ebc24f26437949d400e437695bfe1"],["/tags/线段树/index.html","4e6ec030b1a6e985a6b1edf3dba0370a"],["/tags/编码/index.html","5cd63a28577fdd1a411274fa0231ffd8"],["/tags/编程技巧/index.html","aaadab0b16494113fccc5939369e15d2"],["/tags/网络流/index.html","4ba79cea837ca0a6990ae481ba015b7c"],["/tags/萌新/index.html","423b6c7021297c48e19744109e060e1e"],["/tags/计算几何/index.html","003e45b6e08a31269930cb8df39d8059"],["/tags/计算机组成原理/index.html","67ddcf2f0574b2bfb7c4b97f5fff4ea5"],["/tags/计算机网络/index.html","dd2c311a3150d69008cebb90c1d685ae"],["/tags/质数筛/index.html","57c675db12d4c1f74f745109448f4621"],["/tags/软件/index.html","df8f897bc34825b61e7bbfad65877983"],["/tags/输出流/index.html","267d884a0976b5fd10e42bd7e8e44fa8"],["/tags/镜像源/index.html","eed2cd2084c450891dd24c6518eea3df"],["/tags/随机增量法/index.html","2b37ccc6a9eb76649b6611bcaee7b094"],["/tags/题解/index.html","70f6a0da13386bf93bd495c485d0518b"],["/theme-sakura/index.html","def148dde6a2b5b2adbace355d81cdea"],["/video/index.html","2b77e55934655a4b7abcb6e6f14c8ab8"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-brands-400.woff2","8b0ddedbb27cbc9971c8667caa8a0cc1"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-regular-400.woff2","61f30b79daf5b31f0d254a31fba66158"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-solid-900.woff2","c64278386c2bbb5e293e11b94ca2f6d1"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"],["/webfonts/fa-v4compatibility.woff2","4bc58bc16bb05a05d3a47a4f7e143b75"]];
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
