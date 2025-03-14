/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","771ac8de5e3b5e0c48a5ad9c01a0f83a"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","87244c4e19013b4a256c4dd931db2cba"],["/2023/02/06/C语言链表/index.html","443c83107d6cac2d6d2bed2f6cc2e3f8"],["/2023/02/06/书籍资源/index.html","4bf3e5ea26b03fcee05f922f741002e1"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","e21fefaf730069036f440081a17cba65"],["/2023/02/07/为水而水（笑/index.html","f8cbab666d9613c05fc5d79621f30959"],["/2023/02/08/洛谷主页源码/index.html","691df64de1b961c2c70541c1924dbede"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","2516eca3bd1db4b46c9a8b5019766cc8"],["/2023/03/09/Web前端笔记-Emmet/index.html","ce60b20bbc8b7c7bc8f1d7db887515f8"],["/2023/03/23/gitalk-评论/index.html","0ed35b05498137f6bcbd9092c368bfc4"],["/2023/04/10/用C语言实现字符串全排列/index.html","362d5bc1fab9e55b43387364957b6020"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","231a9b301ba023407db464e5ed69aae5"],["/2023/05/15/C语言基础排序-demo/index.html","9decd4f079c6cf59e1b00e78d7fa4070"],["/2023/06/14/闲着没事干/index.html","169fe83e4f2a22b20b349b4fb973cead"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","c62479ef5a3e02437f1e065ded3eead3"],["/2023/08/01/javase-note/index.html","69dcc9f97afa1342a4a7a741a08b6f15"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","1a95805d3d207e1e8ed31c4080ab3f79"],["/2023/09/14/vue-pure-admin/index.html","09a716bf9e0f846ba48aa645e0607bbe"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","3b99eabf6fecaf8f9e6cef2f70ee90a0"],["/2023/11/28/C-CPP-the-memset-function/index.html","fe67663a988d3428fdae4d5ca4e0fa97"],["/2023/12/13/javaSwing-DynamicClock/index.html","b1d2e9b598a63dbada063175feee5250"],["/2024/01/24/builtin-系列函数/index.html","2e94d638c9f147fb633724d443c5500b"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","a2cdaa2d5b7b664fb74b0107682d6793"],["/2024/02/09/新年快乐/index.html","2487d18873702089ebcf906603a3b2d6"],["/2024/03/26/408-route/index.html","ff173d85168dcc6286a0f7491eaeda1e"],["/2024/04/07/转载-线段树专题-xyw813/index.html","fb9bc5062b39f2a7873e2911c2c43b61"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","ecf3bb3d34464c903a076c87b5a6340d"],["/2024/05/03/Adobe-PS-2024-软件分享-torrent/index.html","611cefa91aa0e34359cb3b2338c196a2"],["/2024/05/06/cloudflare-display-issue/index.html","f71e5ededbdade2c4347ed74a3cc9918"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","712467f0c0529b4201977b1a9978d02a"],["/2024/06/18/P3517-POI2011-WYK-Plot/index.html","c8eb5d1a8dda9b83dd5e911858f73232"],["/2024/06/25/open-source-LinuxMirrors/index.html","d907e8e7fea087f021bfd0bfa717c9d1"],["/2024/09/02/Dinic-and-LuoGu-P1343/index.html","b8cb53d7c46fcf6eb9d8a2af60ddb9ba"],["/2024/10/08/黑题记录-2D-Geometry-110-in-1/index.html","e3a4f633910857364aec872805ac226e"],["/2024/10/11/常用STL算法库/index.html","f677d688810ee8da607d48c17d2e71ef"],["/2024/11/28/在-Java-中设置输出流的字符集/index.html","50f9ffbd1bf8010eb05ea343e2957159"],["/2024/12/05/JDK-18-以上使用标准输出流中文输出乱码问题/index.html","f2d4cda3a3696833e49dd1ee028e3910"],["/2024/12/09/Codeforces-Round-992-Div-2-解题报告/index.html","be157f5cf05cca4530b8bcd711400ed8"],["/2024/12/17/Where-are-those-algorithms/index.html","29a3317775328f619cb192f0e9aee791"],["/2024/12/26/重构评论系统/index.html","4a823122dc9cf7f70f47f6480638e39f"],["/404.html","7b7c2b12ef5e2b95eda92262d85e6cd6"],["/about/index.html","4350e8696accf4981964449ee50d281d"],["/archives/2023/02/index.html","c2403ec132adc197ff013ea6a7d7c8f0"],["/archives/2023/03/index.html","ca96af19a8e04460cda9dd6e9d7c3f68"],["/archives/2023/04/index.html","439993dc7be03b74c60244440fc43dc0"],["/archives/2023/05/index.html","255211865e44664e4a157ccf2bfdb5a0"],["/archives/2023/06/index.html","ac088fee29411b721530b0e6ff444334"],["/archives/2023/08/index.html","2468474835a9ba73c2d7cc8d191f32d7"],["/archives/2023/09/index.html","b6a9e00abb87f53e3afc2d527f7217f7"],["/archives/2023/10/index.html","ca51a3d9390a348db7be59c093e28da2"],["/archives/2023/11/index.html","1cf89ef41d50a859d8d9bf503ecb1c96"],["/archives/2023/12/index.html","f15b2bc52202a9bdbdc55e60b69cc2c2"],["/archives/2023/index.html","2bd2570096c718097c9a1dc904545f42"],["/archives/2023/page/2/index.html","2bd2570096c718097c9a1dc904545f42"],["/archives/2023/page/3/index.html","2bd2570096c718097c9a1dc904545f42"],["/archives/2024/01/index.html","cce0989a7822a4c0d46328264b7ec2d0"],["/archives/2024/02/index.html","18193037bb4fbb4bc4e18785c73b4272"],["/archives/2024/03/index.html","5e11153504bd88377524da662e88e135"],["/archives/2024/04/index.html","35949af8daf9b69b34a56e214654e56d"],["/archives/2024/05/index.html","3eac4a4779f71f1baeea9f40db43efe0"],["/archives/2024/06/index.html","8d6ab9cc9cf60ce4ff85ff63d2f83e3c"],["/archives/2024/09/index.html","91fb8811c5cd67464f82e55f290352d8"],["/archives/2024/10/index.html","f0dba08f0a2d090926f4a0988e4a779e"],["/archives/2024/11/index.html","b4d29f92e6223eae1f2e38dffaa4e993"],["/archives/2024/12/index.html","cd8e394b4ef53e0180191fb3da8680dd"],["/archives/2024/index.html","ea250ec3c01f87dd61a728c19bde4741"],["/archives/2024/page/2/index.html","ea250ec3c01f87dd61a728c19bde4741"],["/archives/index.html","43752a0edfca78486a96fb09ac5c80cd"],["/archives/page/2/index.html","43752a0edfca78486a96fb09ac5c80cd"],["/archives/page/3/index.html","43752a0edfca78486a96fb09ac5c80cd"],["/archives/page/4/index.html","43752a0edfca78486a96fb09ac5c80cd"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","9bea203845c4cb5d07c35abc1847b5d4"],["/categories/技术/index.html","65b96d729ebc1eee41d3a2f76577363b"],["/categories/技术/page/2/index.html","38a538c503b8e08c390e8fbc9be4dfa9"],["/categories/技术/page/3/index.html","34592b511124b5f6dd6ff67917c058e2"],["/categories/资源/index.html","481d46b141d0dfb245e2997bb18c0a96"],["/categories/转载/index.html","d58bbf8935b7985cca626d0c58c400f5"],["/categories/随想/index.html","1a87fda674f77574c7358124a4b15b81"],["/comment/index.html","d7085ef80580b18ef718000dfbb47f17"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","71cebc0cd666f182f1ab1dbe4a9f15c1"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","2fee6f3b0b16c3663f93f8e9c193d256"],["/css/style.min.css","5c69036f827bff149d075d5f26850d2b"],["/css/tags.css","eba03aebbf2f44113682d0ca1e19fcbb"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","50d29c363975ab4b5ef323b22772673c"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","77f870d325e7726951f6b6bd08ea6124"],["/index.html","00f34305705e16c373cd30f243cdd02c"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/js/lib.min.js","65f02458a8e38579dac5594f252bd66f"],["/js/sakura-app.js","f1afa64bc2698ed86b55ab396a0c7ac3"],["/js/sakura-app.min.js","115ca9549a404cd11acd81cd31abe374"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","c757e76be80d1da11f5c02c68665312c"],["/js/wrapImage.js","29007a235330279921b40783f3752c1c"],["/js/wrapImage.min.js","fa46e73ad4d52096338f455d716a71a2"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","f3ea3898d4a9d4ca5e6b6785f49ef52c"],["/links/index.html","34643329c75180ae1d4b30c8b22cad69"],["/music/index.html","752ffc1836da257383ac2421763c8bc9"],["/page/2/index.html","323a4b572cf85f0e744187c73c204fd3"],["/page/3/index.html","ef6de2959c8fd877171cfc0c2120a7b3"],["/page/4/index.html","f58784e9e52e879f3b6c5b997349f93d"],["/rss/index.html","16ad3601f242f99b746e8785db4df0d6"],["/sw-register.js","726b9a6f8bf641b4b42d3a93c815a980"],["/tags/408/index.html","6475473c2060144a0a132dcdd6833f24"],["/tags/Adobe/index.html","59c3b02d6b2e880c39fac46c47660b36"],["/tags/C-C/index.html","a2ad064cb0785c29518318639ba797f3"],["/tags/C-CPP/index.html","445288cdff67975fd363bbfdaa2e15be"],["/tags/C/index.html","3471323b0d99f1322baef567627b5fc0"],["/tags/CPP/index.html","a1ae241abc70d457b20956cb6a2a2cbf"],["/tags/CSS/index.html","9da285715666e49fc49d12bc00f5fdb0"],["/tags/CodeForces/index.html","d528cb93d760a5488ced5228c783e570"],["/tags/Color/index.html","943bde4dd4e561ee28f0901c79db6071"],["/tags/Comment/index.html","86156e1e6bc8932c6b5fb6569fa60438"],["/tags/C语言/index.html","9a14929d5f29118b589757911e74e46f"],["/tags/Dinic/index.html","0dadb57ffb6df28257dae5cb50101740"],["/tags/Div-2/index.html","23b29e3a2bce36e14150e095d0f97f30"],["/tags/JDK/index.html","8e48ea3f0b0e38858a3df7165c6f5a61"],["/tags/Java/index.html","c7eeefc069451277ce9f5eb1e541ed5d"],["/tags/JavaScript/index.html","56af22d3e8c59349bbee92c3f26b226e"],["/tags/LeetCode/index.html","59f89950276e4784151e29784e6ba8eb"],["/tags/Linux/index.html","7886c07f24c4407995b26d7a5700025c"],["/tags/MSYS2/index.html","4b23709e717720d1387f8fb5fc7a737e"],["/tags/Note/index.html","320b4161c0cbd7b97d9fc9daa154ec34"],["/tags/PS/index.html","765b26b9f8d162eb8b8c8908b4ed8e5a"],["/tags/PrintStream/index.html","61dac025c5bd9bddd8be2afd3ef470c6"],["/tags/Rocket-Loader/index.html","927915f7b06881d75c64e51a460142e4"],["/tags/STL/index.html","437fdc797d1dffa9ec4eb864c51d511b"],["/tags/Scoop/index.html","305a5cc0ad4857f4a96a50298a94c852"],["/tags/Software/index.html","e99cbb7ef5752601402f4b35ec20906c"],["/tags/Swing/index.html","1c9938b9c7781f85e2b747adaeba2072"],["/tags/Tomcat/index.html","610becdbf8e24452cbf1cceac246284a"],["/tags/UTF-8/index.html","300a7f2ad5f8197268cc69e3bfe5f5cf"],["/tags/VSCode/index.html","8d418479b908e854a8675c895d1aede7"],["/tags/blog/index.html","dd039c85d5f70cbec14db544913a4770"],["/tags/builtin/index.html","f68a235c0e679ad9377a98f9fd25d8c8"],["/tags/cloudflare/index.html","7ae66ff89933030068c2e3ffe15d5b86"],["/tags/giscus/index.html","669ef38ec4c7797c6ac1c53362e00d90"],["/tags/gitalk/index.html","facd43c1fd9771cf869555729dd59f06"],["/tags/index.html","e2406cc6f2f280d9d0c34578f00970c9"],["/tags/tools/index.html","1a278dba772c2332674c949448a74a50"],["/tags/utteranc/index.html","e4092afd9668bc706b6e7e0fd18178ed"],["/tags/vue/index.html","69a8c0dfba22fddb1604add9b09a65bc"],["/tags/web/index.html","569a4b6e5ba9e5c1fddb86fdb8fc7b1e"],["/tags/乱码/index.html","11228ef703df43e3c9081f4620f511e0"],["/tags/二分套二分/index.html","3ad4180764e818d8f07f1808097f41ab"],["/tags/划水/index.html","bba910ea09203dca14409eca874b69b3"],["/tags/包管理器/index.html","07e4366812a3ce1cc539e4484d9a6e53"],["/tags/图论/index.html","360625a4cce8aadcb75ac020237aa023"],["/tags/字符集/index.html","428e0672ac2dcdfb4bf843c0b38e75f1"],["/tags/应用/index.html","1a6ea8c2a9f6b278660db1763a791c23"],["/tags/悦读/index.html","b46d5373ea9b4df31cc0c54c54209bfd"],["/tags/操作系统/index.html","a8533da86c40721bf10e8d3503e86c80"],["/tags/数据结构/index.html","3db78bcb610c7c89a5cf8e4bffc473c7"],["/tags/数据结构与算法/index.html","7dd0fca9bbaca49c33cc140f136f2848"],["/tags/新年/index.html","336cd9a3841cc63f52875245f992fefa"],["/tags/杂谈/index.html","13f228691bd345a78be3a2f73a2c2b24"],["/tags/深搜/index.html","9ad9e0423fa26e26b34880e09d7d9f12"],["/tags/笔记/index.html","188523569ad1a914ea8686750ea8a6d3"],["/tags/算法/index.html","79cf2d8bde276ae7ff03c9672a6274b4"],["/tags/线段树/index.html","43b885d6e28db913db4c0aa42567bb46"],["/tags/编码/index.html","001322084ba3f2ef0ee18fa2dc64419a"],["/tags/编程技巧/index.html","a248958ea8926f1886b001ea0f1f55b5"],["/tags/网络流/index.html","ffcf9237c3a8aaca066c09cde67d2a6b"],["/tags/萌新/index.html","0b93e77d7981543cf2c90dde43c5cf35"],["/tags/计算几何/index.html","72673dfd727d76a29f5dadd81454e012"],["/tags/计算机组成原理/index.html","4a08ed92ee7f1b6380b25fbb1467ecd9"],["/tags/计算机网络/index.html","7600b274e3507ed4dae07e149dd443f1"],["/tags/质数筛/index.html","4452c102635097bd91cbf7f3459e430c"],["/tags/软件/index.html","1d657b8ea3eeb695e2b623b1a0986f93"],["/tags/输出流/index.html","93337f235cc7cda566a664640f1cdf5f"],["/tags/镜像源/index.html","9384a88d23af28b5d8f0e862cc9c5842"],["/tags/随机增量法/index.html","7659054eb02c3c88ef72c932924c1b0c"],["/tags/题解/index.html","714c1b1413b22574bc80b2a19af94dbd"],["/theme-sakura/index.html","2559e5778cf66d28e3cef176e21737f7"],["/video/index.html","e43d42e9baed9049f315308ceb99b02d"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-brands-400.woff2","8b0ddedbb27cbc9971c8667caa8a0cc1"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-regular-400.woff2","61f30b79daf5b31f0d254a31fba66158"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-solid-900.woff2","c64278386c2bbb5e293e11b94ca2f6d1"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"],["/webfonts/fa-v4compatibility.woff2","4bc58bc16bb05a05d3a47a4f7e143b75"]];
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
