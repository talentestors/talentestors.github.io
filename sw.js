/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","cac3d7aa35995034293494d21a6f1b24"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","90ef02cf700f415447bc372880edfcc1"],["/2023/02/06/C语言链表/index.html","0ed1f478ba8547f297c6a9d0554ccbf9"],["/2023/02/06/书籍资源/index.html","316d3a0d38dad14a4d75a4c40b85b987"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","653620f909e235a734806625f3c4ee40"],["/2023/02/07/为水而水（笑/index.html","8b47271cd81d865a59ac2d586cd40c37"],["/2023/02/08/洛谷主页源码/index.html","b1ee3bc1e3a9c13db41b88d4918d90e9"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","e95c01c4e53a34e1f5da8e7ef912d6c1"],["/2023/03/09/Web前端笔记-Emmet/index.html","4f8b9041cfaa680bdba693a7b2770b3a"],["/2023/03/23/gitalk-评论/index.html","fb001a9f8c8f1afa30b10a8b983d337e"],["/2023/04/10/用C语言实现字符串全排列/index.html","7a1b1812c7b2f2b4a4fbd907335ea469"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","c18668ec730bf48d39d3601469dfd41c"],["/2023/05/15/C语言基础排序-demo/index.html","096c9dbfd6456b10edf1ab312071bd65"],["/2023/06/14/闲着没事干/index.html","21122526cd0d9e408b07bdb7da29bf5c"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","971838396f3effad0e6ff1d9df2a02b7"],["/2023/08/01/javase-note/index.html","2d1baab29d07bd6b14707a4d98f137e2"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","c0023c463d6db8c94c351e560c9a7931"],["/2023/09/14/vue-pure-admin/index.html","e00a0e314ef0ac28e5c00ae6aa9b50ea"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","8df79155be11b596907eba26cd5dd8c4"],["/2023/11/28/C-CPP-the-memset-function/index.html","ca9eb53133f6a8477e046f69db5b80b6"],["/2023/12/13/javaSwing-DynamicClock/index.html","5f544e104ac064207e2ecc6af3aa34f2"],["/2024/01/24/builtin-系列函数/index.html","dd2ef11d75353a336335fbe020d42eb2"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","f010492eca9178a0142da5e2fa8226ef"],["/2024/02/09/新年快乐/index.html","92088337540e6b7ea3951c99e3b9e0b9"],["/2024/03/26/408-route/index.html","13725bf9c1b1fbb486f17897df72f491"],["/2024/04/07/转载-线段树专题-xyw813/index.html","1568cea1e1525c3229c917125d8a565c"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","08ebcd8e59ab1ab9001d039679d0cd2a"],["/2024/05/03/Adobe-PS-2024-软件分享-torrent/index.html","32e3a3720e889d07cd602520ee3d7884"],["/2024/05/06/cloudflare-display-issue/index.html","6e5d01b5fda6137b265f3fbd80ec0288"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","b8f7acf9a688e2d6cf3c57f7e894f5a7"],["/2024/06/18/P3517-POI2011-WYK-Plot/index.html","bf7b50526a54dd22bd051b8ce4536818"],["/2024/06/25/open-source-LinuxMirrors/index.html","a45d46ef99b7df8e5dd8ed3d0d2864b4"],["/2024/09/02/Dinic-and-LuoGu-P1343/index.html","0826e8da4e7a30e4c12a2400f3a9cf48"],["/2024/10/08/黑题记录-2D-Geometry-110-in-1/index.html","f95beba376ceafc624abae8d1e1f6c62"],["/2024/10/11/常用STL算法库/index.html","fd89553327c4e00967baaa95f2765e6a"],["/2024/11/28/在-Java-中设置输出流的字符集/index.html","3db9bcb71b59c32c629ab4c09bdfefc8"],["/2024/12/05/JDK-18-以上使用标准输出流中文输出乱码问题/index.html","df737f74e0501e8ab21e402ddc32d5ac"],["/2024/12/09/Codeforces-Round-992-Div-2-解题报告/index.html","efdae7b43b15282e8ba178ac9ca7a934"],["/2024/12/17/Where-are-those-algorithms/index.html","661b22f8aa4e6ca46948b2a098907efb"],["/404.html","7b7c2b12ef5e2b95eda92262d85e6cd6"],["/about/index.html","6256823c8e0920e6bc1b16177aa58367"],["/archives/2023/02/index.html","fdb5b8ea6f0b98f80b31b3b01468f5f0"],["/archives/2023/03/index.html","3d863f4dbc88a39d116b493e6a09b0b1"],["/archives/2023/04/index.html","be885175194aeda094a4540bb3979f38"],["/archives/2023/05/index.html","2386aaf3cfefe76fd13519e27af95482"],["/archives/2023/06/index.html","40f30d7bf533bc4707c271c506c440c9"],["/archives/2023/08/index.html","4443d5625d805ca51c44edf1460d9fb6"],["/archives/2023/09/index.html","da5607654d8c22b70702320d3053b312"],["/archives/2023/10/index.html","d343d1e4538d55cbac1a69808902add7"],["/archives/2023/11/index.html","895088510cab3edd09aaad0dc7c96288"],["/archives/2023/12/index.html","0cc0dd933fb4548b421973714ff88ff9"],["/archives/2023/index.html","2e904d13b85214985f7912388fe3a0ce"],["/archives/2023/page/2/index.html","2e904d13b85214985f7912388fe3a0ce"],["/archives/2023/page/3/index.html","2e904d13b85214985f7912388fe3a0ce"],["/archives/2024/01/index.html","cbfadab0d3524d67240346ceb5eda32c"],["/archives/2024/02/index.html","bd867b6b57ebf33a486158e9bb944cf1"],["/archives/2024/03/index.html","76e2b2d7cedf2c27f0bf5c8bf009b8d2"],["/archives/2024/04/index.html","8c801e8f3103b67d9d52fd6892adc36c"],["/archives/2024/05/index.html","eae89d5cfe838b6291f22ca5b52b9431"],["/archives/2024/06/index.html","854a22e162f11258f780472411b6ef14"],["/archives/2024/09/index.html","8e757f9231ab30f9219f104f703de8bb"],["/archives/2024/10/index.html","4896740e8c81c3405ef0f26acb0f6294"],["/archives/2024/11/index.html","391987ec3b150afcf26fc8d84ec5aa63"],["/archives/2024/12/index.html","cde1363fd2018efd227def52c04b699b"],["/archives/2024/index.html","1c351a6d5216598de329f30ebe76159c"],["/archives/2024/page/2/index.html","1c351a6d5216598de329f30ebe76159c"],["/archives/index.html","b2b2c0872329ebaf7a1091a619a0b279"],["/archives/page/2/index.html","b2b2c0872329ebaf7a1091a619a0b279"],["/archives/page/3/index.html","b2b2c0872329ebaf7a1091a619a0b279"],["/archives/page/4/index.html","b2b2c0872329ebaf7a1091a619a0b279"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","cca3f0262841ef34ebc067b50963e2b0"],["/categories/技术/index.html","337d2640979e064488ac89ff8574acd5"],["/categories/技术/page/2/index.html","fc81dfe631fe32eed6590a6435007952"],["/categories/技术/page/3/index.html","be4958639905a66cdd40917c9cf609b2"],["/categories/资源/index.html","8e1b58b2f5369933bfcec48eb1bdebd5"],["/categories/转载/index.html","dac1c318ae2239666d06715ed5e6c196"],["/categories/随想/index.html","5e1bb37b1935c664039ec314e78b1a5e"],["/comment/index.html","6acacd005028d8ad0b54e4cb01d275fd"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","71cebc0cd666f182f1ab1dbe4a9f15c1"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","ee18cd907c37f0971146c2648da3e1b9"],["/css/style.min.css","2a08992ea2f9646c8f6f476fd81a59d8"],["/css/tags.css","eba03aebbf2f44113682d0ca1e19fcbb"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","84c503ee93faa18b3113388d11a26784"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","a482b3ca95b5cef82d15e6d8629156de"],["/index.html","be5fe9218dbb7b82214f80b47c6c1087"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/js/lib.min.js","65f02458a8e38579dac5594f252bd66f"],["/js/sakura-app.js","f1afa64bc2698ed86b55ab396a0c7ac3"],["/js/sakura-app.min.js","115ca9549a404cd11acd81cd31abe374"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","c757e76be80d1da11f5c02c68665312c"],["/js/wrapImage.js","c29a2f77c5aa3ba618ec389b270886c0"],["/js/wrapImage.min.js","fc743cae4be00ca6e80bf42d9b3bda32"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","73d3098d469aca5c9bd1486c8aba8b8f"],["/links/index.html","67159eeacdfef3253620bc421e239a00"],["/music/index.html","fd2ce17ee936b69d655cd7686a91216c"],["/page/2/index.html","be5be72253854bf4a6a3c51b2efade54"],["/page/3/index.html","0f9689b45d757e4f40c3304f96c70d61"],["/page/4/index.html","b714081ba730ce60e8669298d268058b"],["/rss/index.html","6982b86fd40096244e88173c6081b121"],["/sw-register.js","af2b69cadb1db49a66d3b6f4a56010e9"],["/tags/408/index.html","a198904027f418ce66219cd4eebe729a"],["/tags/Adobe/index.html","9764bc748c03222354c7659d613501c4"],["/tags/C-C/index.html","e51ea4dd23ca0ad17d778162af8f2f86"],["/tags/C-CPP/index.html","2bb5d5a3f007fe86f5b4f1c34aed1a61"],["/tags/C/index.html","764c3269dd15411158721d4c4fb3ed4d"],["/tags/CPP/index.html","0a44fb739c1bebebff65a5de64ef1c2a"],["/tags/CSS/index.html","72b8a8d1ae97c6c0bf387111b5afd2f4"],["/tags/CodeForces/index.html","ff1509db1a605abbe6ff54104a8c0de0"],["/tags/Color/index.html","f5d8cd4145afbf84aa6b4259b9d1ef1f"],["/tags/C语言/index.html","99413c5769ada221fb72396e4b8c011b"],["/tags/Dinic/index.html","c3f40b62972e7764e3b88c07f173aeec"],["/tags/Div-2/index.html","58b114b6a31d89afe3c1d4c41890fe1c"],["/tags/JDK/index.html","312ca1df431108b09bc9f2ac07475183"],["/tags/Java/index.html","89d26fcf251e74128e224adf5f506394"],["/tags/JavaScript/index.html","6b0a475b3f26ecc3c1dfabadfe93996f"],["/tags/LeetCode/index.html","4cb516fefc5813f2c39789e25c87a61b"],["/tags/Linux/index.html","ab7f1c80910231809f4e3feef25ee84c"],["/tags/MSYS2/index.html","c481c4dd50937a72b918aaecba23e58d"],["/tags/Note/index.html","92a62bc0363578825a1ec5a4aeb2684f"],["/tags/PS/index.html","681c2ac44960bffafbea79905580b890"],["/tags/PrintStream/index.html","a96f324d52b4ad8619021e6ea01906e9"],["/tags/Rocket-Loader/index.html","04c283767fbf859be26f3fc77317f8fe"],["/tags/STL/index.html","d217da6691645dc35f8106f8ca7bf293"],["/tags/Scoop/index.html","7d5700f4df05cf4c25fb20d16f3684c0"],["/tags/Software/index.html","ec34de3c93a6262226a9eca4d7250520"],["/tags/Swing/index.html","23675b32806e81ac79ad49b908cae837"],["/tags/Tomcat/index.html","c009e95b5a779493fcc60a4be06fc71a"],["/tags/UTF-8/index.html","1c9ee2d42b6e335b7c541d9472bf9577"],["/tags/VSCode/index.html","0d2eac5a216243bf3198d95cb0b75835"],["/tags/blog/index.html","dead491c72eed2fa8b40a46d91235adb"],["/tags/builtin/index.html","13d97f7061be322b61d00dbfea825f99"],["/tags/cloudflare/index.html","17a94894bd8245285f366a6782453baa"],["/tags/index.html","2d892844718f26e06d2d396a4b8857c3"],["/tags/tools/index.html","adf3b30b0b5e338d606fb1f489efff8b"],["/tags/vue/index.html","f22c568d3ef2fa20e2f6733e01723368"],["/tags/web/index.html","bc128b42956089e34b162dc15135f407"],["/tags/乱码/index.html","a948d035c55a85876b809f446d4dce02"],["/tags/二分套二分/index.html","15dd8e34537168e8aa38628fbe3df0c8"],["/tags/划水/index.html","a5305937f7839d29087d0cc48ff2afeb"],["/tags/包管理器/index.html","8a4f3a059693bf4e423caf2657260a74"],["/tags/图论/index.html","d5ad23ec8fadb421a5daa8b20f83d6ea"],["/tags/字符集/index.html","40168b315502eb4dac910d620634a6ff"],["/tags/应用/index.html","2cca373186549ad42f6c92fb34805062"],["/tags/悦读/index.html","49f6145110b4c263ff2443565c5a4173"],["/tags/操作系统/index.html","548938b0f0896c371c93ce4b6719ae00"],["/tags/数据结构/index.html","72f2f5f5565200bb7560ef091d700876"],["/tags/数据结构与算法/index.html","37ea2f093f7fad165a5e1892b515b9d9"],["/tags/新年/index.html","1f6a47d4bc968f79665ebc35009b5bc5"],["/tags/杂谈/index.html","39e8f494c6bf885c7b425f73ed20be2c"],["/tags/深搜/index.html","712ac32d8329abd4b28df3ffc4019a9f"],["/tags/笔记/index.html","6758a2b0d8eccd525055f11886616120"],["/tags/算法/index.html","cdc7025f85ccd0fdd421627d28ea9670"],["/tags/线段树/index.html","19bc98c791ffff69d37d985b3709d9a3"],["/tags/编码/index.html","0ceafe1e078ceca901253e325c041378"],["/tags/编程技巧/index.html","95768552009c9c795174f09fe1920ed3"],["/tags/网络流/index.html","e1b6d7c0ab4d432a966a1f9010a22bb8"],["/tags/萌新/index.html","e497bf5d31b693d0bae23e16dc61762d"],["/tags/计算几何/index.html","e853d69e85c272a4aece8d7cc84e2f1b"],["/tags/计算机组成原理/index.html","d7b2599fb87e35aeb719ae798ca283d4"],["/tags/计算机网络/index.html","9147dbb240ce9492098bd230afd52f02"],["/tags/质数筛/index.html","49f4d82caf514c78f90d98911ffc1a3c"],["/tags/软件/index.html","8c2f3874b4b028a67f45085e78ef6d22"],["/tags/输出流/index.html","d67006d8ffadd88a518fd46f96b122d0"],["/tags/镜像源/index.html","1b04d98bd570cd4ce925d0b175b02c64"],["/tags/随机增量法/index.html","5615c721d62c3e0a0a7c2586b4ee83e1"],["/tags/题解/index.html","923dcab1f44c77cdc48b51b234f5bd83"],["/theme-sakura/index.html","95c897dab37bf99813336b66beebe583"],["/video/index.html","3cca02602af85eef4e7b71d4029a1367"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-brands-400.woff2","8b0ddedbb27cbc9971c8667caa8a0cc1"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-regular-400.woff2","61f30b79daf5b31f0d254a31fba66158"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-solid-900.woff2","c64278386c2bbb5e293e11b94ca2f6d1"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"],["/webfonts/fa-v4compatibility.woff2","4bc58bc16bb05a05d3a47a4f7e143b75"]];
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
