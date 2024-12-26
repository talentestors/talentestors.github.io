/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","ada05a7e3d848cc94e1cf12dd57052c1"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","c0dec93c733755d8c7f481ee7d241980"],["/2023/02/06/C语言链表/index.html","a1cee845ad02009f07c25b089dd4f37a"],["/2023/02/06/书籍资源/index.html","d40acaa4c931cfbdfcb4846e2da12607"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","12b6524516445221abe04842f7897312"],["/2023/02/07/为水而水（笑/index.html","1064b8723e0bdc3e2d86cd41f65c2a05"],["/2023/02/08/洛谷主页源码/index.html","94e0cf9060da3d22071df42b57dadd85"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","cd3c1000e11649ff868e54940ee5fe95"],["/2023/03/09/Web前端笔记-Emmet/index.html","a65c23730a28f92ced6201d3353c67e0"],["/2023/03/23/gitalk-评论/index.html","5accbc5fcfcf301a99d338c2151f6986"],["/2023/04/10/用C语言实现字符串全排列/index.html","d41da11419323319e8b848f1e55731f6"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","bf4d56c41639c38c9d332491f896f365"],["/2023/05/15/C语言基础排序-demo/index.html","4fbd91446b71c04355c7d11254e096bd"],["/2023/06/14/闲着没事干/index.html","d489fd6df2a1b422dcc31eda67001e71"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","914275b05fdff638044751794e6f77ff"],["/2023/08/01/javase-note/index.html","4b61800fdfa2dd83f42744071a413d65"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","680f1903b260135228d57ddc5176603c"],["/2023/09/14/vue-pure-admin/index.html","eea29c70205c66bd67645718b13ad00a"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","c7a5870a2d4751e1b9b72a635d396929"],["/2023/11/28/C-CPP-the-memset-function/index.html","ec0b42d15477bfde3d1898bbae39e9d2"],["/2023/12/13/javaSwing-DynamicClock/index.html","d026298c72e5dc9a552fa01e0e05691e"],["/2024/01/24/builtin-系列函数/index.html","4ed99133922b8c7dd5744be5f4ebd975"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","afdbd7fd4ca169c7ce967d97ed9c8e7e"],["/2024/02/09/新年快乐/index.html","26c62d460300a46eb1e3bea7b72b35e9"],["/2024/03/26/408-route/index.html","c92ad0f97e85b60a521b62206cd861f1"],["/2024/04/07/转载-线段树专题-xyw813/index.html","5b7a1d76f7a33e2fcb7aa0b866e00797"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","581ea8516eaf89ccd9c506594a71c4a5"],["/2024/05/03/Adobe-PS-2024-软件分享-torrent/index.html","76794c0a45416c7481419077cec839a4"],["/2024/05/06/cloudflare-display-issue/index.html","9bee26237910f4feed4908a2b70bb85c"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","1fd2088c1376fb935caf22cdfbd686b0"],["/2024/06/18/P3517-POI2011-WYK-Plot/index.html","4536113e253d7458855e1a23ff7ac042"],["/2024/06/25/open-source-LinuxMirrors/index.html","d1e9f7db3510eb1d3fcc5273adfbabaa"],["/2024/09/02/Dinic-and-LuoGu-P1343/index.html","6c04e0a0777c24c25e897bdee164e537"],["/2024/10/08/黑题记录-2D-Geometry-110-in-1/index.html","c79be4bd976d8b1df57b60665244e21a"],["/2024/10/11/常用STL算法库/index.html","9ed86454f7205c126c6492d08e420061"],["/2024/11/28/在-Java-中设置输出流的字符集/index.html","63decbde3dce0f5beb607bc0b488a6ec"],["/2024/12/05/JDK-18-以上使用标准输出流中文输出乱码问题/index.html","ea0df0f39a761830775eb345e552a89e"],["/2024/12/09/Codeforces-Round-992-Div-2-解题报告/index.html","014ae0bd201c9c2f3bd160ca311437aa"],["/2024/12/17/Where-are-those-algorithms/index.html","59af91cc69c3cb2a1f427d6aa3917df5"],["/2024/12/26/重构评论系统/index.html","2b3f6577ef591f6b47ffd0086121a45e"],["/404.html","7b7c2b12ef5e2b95eda92262d85e6cd6"],["/about/index.html","f5a2c14196fe726adefe47fa8899660e"],["/archives/2023/02/index.html","a4bc441d0f76536927a2b98bbbc358f5"],["/archives/2023/03/index.html","27d50fbe95ee376802ead51c013d12f3"],["/archives/2023/04/index.html","931212c15ac0428fb6bc5b64ccde856e"],["/archives/2023/05/index.html","4a7a75ba0d228fc6607c6597f1515254"],["/archives/2023/06/index.html","a4439235f620090e07c2ea003c8dc4d0"],["/archives/2023/08/index.html","6083d33e78abe22334139ae26d513495"],["/archives/2023/09/index.html","753acf01e172958b30f8d85d03a1021d"],["/archives/2023/10/index.html","5de3396ce86360700d80f816c19dc2f2"],["/archives/2023/11/index.html","ab7c0954f5e667b035f805548e13476e"],["/archives/2023/12/index.html","7e88ce04030671d686fcb54522797e6a"],["/archives/2023/index.html","e0e65b73b3753bbfc844c4ac2b0ed205"],["/archives/2023/page/2/index.html","e0e65b73b3753bbfc844c4ac2b0ed205"],["/archives/2023/page/3/index.html","e0e65b73b3753bbfc844c4ac2b0ed205"],["/archives/2024/01/index.html","e3be5fd5cffc9290e637fe42b4345fef"],["/archives/2024/02/index.html","d62d6a3815c2103960a697e5dc144b3e"],["/archives/2024/03/index.html","9f18c909a37dabdccac0afed997e9169"],["/archives/2024/04/index.html","756aeba01c2044f9a7fcb2cce334a44a"],["/archives/2024/05/index.html","7b759e0c42281ec7c7c7a3ca278a092c"],["/archives/2024/06/index.html","cb39fa08b0df4dd2cc71a0baf1511fcc"],["/archives/2024/09/index.html","5978d6b1894725351c5a5a9165995dd4"],["/archives/2024/10/index.html","ecb1ba3ab820792f4b82785bcd9931ad"],["/archives/2024/11/index.html","c352d70f1a39dfcbfbaa2cc6b3d3f490"],["/archives/2024/12/index.html","b1a4b7f529fe014537e56c85f3b106e9"],["/archives/2024/index.html","55e01ce83d0b0084e06a39fda2ac1b4e"],["/archives/2024/page/2/index.html","55e01ce83d0b0084e06a39fda2ac1b4e"],["/archives/index.html","d3ccede295d3634bf26e0f5c903eb812"],["/archives/page/2/index.html","d3ccede295d3634bf26e0f5c903eb812"],["/archives/page/3/index.html","d3ccede295d3634bf26e0f5c903eb812"],["/archives/page/4/index.html","d3ccede295d3634bf26e0f5c903eb812"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","ff392bde8ea652edea40ff66d9f41c18"],["/categories/技术/index.html","b1840319103ac4beb038a3ad9a9c8354"],["/categories/技术/page/2/index.html","c4f42f49495206f63d91ced0c4291d75"],["/categories/技术/page/3/index.html","dc8f0a27bacbbebfaafbd8212a713c4f"],["/categories/资源/index.html","be35d3f3c9818bbae37ecb53bb6f05d6"],["/categories/转载/index.html","dc973c1cc53a32384fdab3fbbc4d8721"],["/categories/随想/index.html","75e6a9ee9cda18b188e3a0af695fb923"],["/comment/index.html","782edae990c8b48d2c520df0b9af6acd"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","71cebc0cd666f182f1ab1dbe4a9f15c1"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","2fee6f3b0b16c3663f93f8e9c193d256"],["/css/style.min.css","5c69036f827bff149d075d5f26850d2b"],["/css/tags.css","eba03aebbf2f44113682d0ca1e19fcbb"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","633e751cfc1a8d14009589ec108655d5"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","af699d7b639892dc3fa7262c298fc672"],["/index.html","4c009dca28fe96e9e88bdcc02f259f62"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/js/lib.min.js","65f02458a8e38579dac5594f252bd66f"],["/js/sakura-app.js","f1afa64bc2698ed86b55ab396a0c7ac3"],["/js/sakura-app.min.js","115ca9549a404cd11acd81cd31abe374"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","c757e76be80d1da11f5c02c68665312c"],["/js/wrapImage.js","29007a235330279921b40783f3752c1c"],["/js/wrapImage.min.js","fa46e73ad4d52096338f455d716a71a2"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","989d74c447ab88ff2f132d11fa38365a"],["/links/index.html","15bc86fb9082914ced15369568f1fd5f"],["/music/index.html","7e84db908fe685cef45d43cbe9bc0f14"],["/page/2/index.html","28c96dc5663ac29de0fe3aec96bf7638"],["/page/3/index.html","ad0e7e826908c18f7a1b11f16a97e75c"],["/page/4/index.html","e93f20d5a943b54f05ba9d8165d1fbaf"],["/rss/index.html","d5d6bb1a67f4ce9c72dd501231a3f72a"],["/sw-register.js","7d1b3557ae0ad62dee5701465552b2dc"],["/tags/408/index.html","85a7488918a24a2150a6f4ffc8636cdf"],["/tags/Adobe/index.html","db521e2da8a2efee078d9ad8138ad3de"],["/tags/C-C/index.html","f114e36879d52048e6dd890d356df9c8"],["/tags/C-CPP/index.html","7d7f1697781f9e88d4f7bbb246da5dbe"],["/tags/C/index.html","061d5442c6466b5c89db49820313e97b"],["/tags/CPP/index.html","4b1d3e30675af0b46512eaf58cc422b6"],["/tags/CSS/index.html","435744c1334e1e17d4107a2f4570cdf3"],["/tags/CodeForces/index.html","6f0bb2ba3e6429eb86dc10fc9415dcd4"],["/tags/Color/index.html","778abeab6138e830fe01bc36d0ec4561"],["/tags/Comment/index.html","960c44875e85db3781ebd575e7579c33"],["/tags/C语言/index.html","7b0d0405e4ac6137fe591aa89c3eb666"],["/tags/Dinic/index.html","d7b98033a97d794e2be33b7562cf9e5f"],["/tags/Div-2/index.html","f5ebc2256a96e066eefc83402f7213e3"],["/tags/JDK/index.html","8b18abd1c54f3aa4b5d8529b29e3e000"],["/tags/Java/index.html","a0ed881a72ab62c569ea3cd8d6f4ae44"],["/tags/JavaScript/index.html","96cb9829c134923caa7edefa37d7efa8"],["/tags/LeetCode/index.html","d42b2eecdb3cc766d0bd24e32c4bcc55"],["/tags/Linux/index.html","2584d12a3427b09c96d29efdb9888b11"],["/tags/MSYS2/index.html","fc28b757680f9fc75c1d3fa4caa51a24"],["/tags/Note/index.html","c6a577a8fb05bf84301e2682719d97f2"],["/tags/PS/index.html","7ef3683399aa3c8ccf958b6e8bc9f771"],["/tags/PrintStream/index.html","1caa0b70ffd274d0fa4dac0c907a4e0e"],["/tags/Rocket-Loader/index.html","d2d778ec67b472e513646b2c3613ed5d"],["/tags/STL/index.html","8e19db30a352c68353dd892bdeeae5e3"],["/tags/Scoop/index.html","5c2bca948d6a4dd7be792be2014c820b"],["/tags/Software/index.html","8224ef5af9da2c784d0d261504e0ffdb"],["/tags/Swing/index.html","fe076bf89026ee9fa799fe42929f9be4"],["/tags/Tomcat/index.html","89c1f8f3f30794d3b8f9b9e226c0fbf8"],["/tags/UTF-8/index.html","803fc0a8401b51d12bd6b28ee34c705c"],["/tags/VSCode/index.html","0906ed523dad14329dfa2e07c936c165"],["/tags/blog/index.html","bf885efcd29490498faa650b67451185"],["/tags/builtin/index.html","750dd75f3d6e13ab22d5727d788bf608"],["/tags/cloudflare/index.html","623a93c8d71190845e15483a8a8cb863"],["/tags/giscus/index.html","f0a1b34725e5e1a7d9c0f52968fe8b3d"],["/tags/gitalk/index.html","c0845df8b46fa44eb71e14da606eff62"],["/tags/index.html","d06317d96c460fb2377f98c268169728"],["/tags/tools/index.html","b806360706672783d187b39397f8b2c9"],["/tags/utteranc/index.html","c1ba8094fad6752c44e696a5a5caa29d"],["/tags/vue/index.html","c923cd0442abdb06e2f0a2ff1d8484f8"],["/tags/web/index.html","23b96df6c1081e259ec18cdde3ed7518"],["/tags/乱码/index.html","0b0f48f53963f2693ecb55360eb7ffc7"],["/tags/二分套二分/index.html","43d394099af632f4f8009364adda4afc"],["/tags/划水/index.html","7785d3bee12937223d0e62c8c7e2b83b"],["/tags/包管理器/index.html","1283de63f5644edffa580870502c8334"],["/tags/图论/index.html","ee714651d09af46c9b4ea02ee599956e"],["/tags/字符集/index.html","33a2ea2dcd502af00f77f73d2a3dcfe5"],["/tags/应用/index.html","a0bc81f175a3549c5b5eb1177d124820"],["/tags/悦读/index.html","c62b54478c2f3741f7e056e5f41357b0"],["/tags/操作系统/index.html","7579f46cb895840cf2e471a96396532e"],["/tags/数据结构/index.html","c016beffdd8a8efb724b38142a1b0f96"],["/tags/数据结构与算法/index.html","ab0feb58a85f4fcba0d44d5513eb15e0"],["/tags/新年/index.html","a5637866d786b1c11a9b42b64ac6cd18"],["/tags/杂谈/index.html","a06a05b218c038be9202760b3674b1d4"],["/tags/深搜/index.html","c590b278cab879abbd63747c48a28e15"],["/tags/笔记/index.html","b7bc358e092a36bc20dd95f319fe9a3a"],["/tags/算法/index.html","8a2ded541e51274279da41add35564ca"],["/tags/线段树/index.html","2b807948805ecef6c86f6138a5f3abf9"],["/tags/编码/index.html","e84b7df6076f351e9a5f7fece96afaec"],["/tags/编程技巧/index.html","e0af27a8603cea1bbf18e66a74f93293"],["/tags/网络流/index.html","8ea4a590c58592deefc567545e9ccae5"],["/tags/萌新/index.html","3700059dd55069569b334450ee679aa2"],["/tags/计算几何/index.html","39c547c7d01d6571b165d503794c88c9"],["/tags/计算机组成原理/index.html","19160a553f14ab086f42158137d19b0f"],["/tags/计算机网络/index.html","968c4218ba2959d064bd0a8d7fae740e"],["/tags/质数筛/index.html","597d867efa9ab2b9d7daa1d79c95ab0b"],["/tags/软件/index.html","d7331fe9df7f9555d107ddbbb4332573"],["/tags/输出流/index.html","c25f2289c99e81ae10fcdeaa84575726"],["/tags/镜像源/index.html","c1ee109f0b6ec00d07ef4ef16fcdc74b"],["/tags/随机增量法/index.html","23f961fe1eb93b90bcf36e9fe873bbeb"],["/tags/题解/index.html","e222e8da7e3a28b6dcb45b1b050e3308"],["/theme-sakura/index.html","cb246834c024d0b412ad961e3523afb4"],["/video/index.html","4f1a735605bf46c1137fc5012ce16b77"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-brands-400.woff2","8b0ddedbb27cbc9971c8667caa8a0cc1"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-regular-400.woff2","61f30b79daf5b31f0d254a31fba66158"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-solid-900.woff2","c64278386c2bbb5e293e11b94ca2f6d1"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"],["/webfonts/fa-v4compatibility.woff2","4bc58bc16bb05a05d3a47a4f7e143b75"]];
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
