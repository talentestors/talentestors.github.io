/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","b9d31d9c998ae8296ccff7d8693713d4"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","527b4455348b5a13fc4f654b677bfef3"],["/2023/02/06/C语言链表/index.html","50df71cab0da4094b40041fecd826bd0"],["/2023/02/06/书籍资源/index.html","9cd795dcd8f6db7f5e135a665347b1f0"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","07ffa72ee90f72d4b3f75c3570d38ff2"],["/2023/02/07/为水而水（笑/index.html","71eba8723bf0aa0f2fed22b3d728df51"],["/2023/02/08/洛谷主页源码/index.html","bc885abb57f6e245972ee67e5eb93fd9"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","f7f4a89a80968621d48cda30f495b001"],["/2023/03/09/Web前端笔记-Emmet/index.html","99a7b0b728aaeb0e80b5f5a9116b5204"],["/2023/03/23/gitalk-评论/index.html","653345b88b2dcb4fd2c1d19ed19371d9"],["/2023/04/10/用C语言实现字符串全排列/index.html","875ab2dd08f6adc43274fb800196e1c1"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","b6d38b2cbdf96da3a19dc82a9863944c"],["/2023/05/15/C语言基础排序-demo/index.html","b073e5e0e3e1226da04ae0a4d2ff155d"],["/2023/06/14/闲着没事干/index.html","3388db695551625fe9d1b635328b96c7"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","898f213c93671f699e1a755325adebb4"],["/2023/08/01/javase-note/index.html","151118c21595a300459f20fcd5e49d1b"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","706f9f15cf4fdd7898722cb2a588e515"],["/2023/09/14/vue-pure-admin/index.html","65cab359f4c138cf22910b1c2eefcd23"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","6634a9b687f63e1362204dec74393530"],["/2023/11/28/C-CPP-the-memset-function/index.html","70b17081783e4a5c95ec135b0172f1ef"],["/2023/12/13/javaSwing-DynamicClock/index.html","69e2f444922ae63058d42dd3e86a015e"],["/2024/01/24/builtin-系列函数/index.html","7ba6ff59b791475641223aab877f2157"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","0cd5929c00e619088c3ddd7f4e6d3b8d"],["/2024/02/09/新年快乐/index.html","7679c2f59ad9076c4c1d70ddb68cb2f1"],["/2024/03/26/408-route/index.html","7c7488c138c110a2096f69b640d8d062"],["/2024/04/07/转载-线段树专题-xyw813/index.html","991880bebb8868ca0ad16955dfdc49b5"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","b4e1c402f642cf4214986a370df9493e"],["/2024/05/03/Adobe-PS-2024-软件分享-torrent/index.html","d8f17e78783c76c1a8f292180a334227"],["/2024/05/06/cloudflare-display-issue/index.html","60cf6898dbcc369cb67aa7cb919b123a"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","7abd7f8bec0fedff2f9bd5e1c40d2029"],["/2024/06/18/P3517-POI2011-WYK-Plot/index.html","02d0e9bc73ccd31a0e581fbfa5baba7b"],["/2024/06/25/open-source-LinuxMirrors/index.html","6b6c793d8a64cfa04dee6ec6365de8ba"],["/2024/09/02/Dinic-and-LuoGu-P1343/index.html","691defb1a500cf8d090b98f775d8929e"],["/2024/10/08/黑题记录-2D-Geometry-110-in-1/index.html","37a6216e715acf157aef9e7e3294c4d5"],["/2024/10/11/常用STL算法库/index.html","fd861de942f6f0bfa46abb5fda5dace4"],["/2024/11/28/在-Java-中设置输出流的字符集/index.html","fe1b0c2a12bcc068dde6f577b7022031"],["/2024/12/05/JDK-18-以上使用标准输出流中文输出乱码问题/index.html","baf28baba4530bdbffa5aa587e08b2fc"],["/2024/12/09/Codeforces-Round-992-Div-2-解题报告/index.html","b19bbd3bb651438e03db91abdf501056"],["/2024/12/17/Where-are-those-algorithms/index.html","169a63763511c3d8e7dadb042d1bf0ee"],["/404.html","7b7c2b12ef5e2b95eda92262d85e6cd6"],["/about/index.html","c030942493050f413c53b8f41256f654"],["/archives/2023/02/index.html","612a7548cd5826fff41b65bfa8f10075"],["/archives/2023/03/index.html","28106a1522792912bf7dc0da2beb0a2c"],["/archives/2023/04/index.html","7adc18b35a56de9bbeaa20888625fc5a"],["/archives/2023/05/index.html","c7e0418a5550937efeb074266d2c5234"],["/archives/2023/06/index.html","1bea36f460bbffd5de229c1737cef26b"],["/archives/2023/08/index.html","11e9c874f289f896d9b4f2577aa64959"],["/archives/2023/09/index.html","94006f34c7a6bb659165908831fc309f"],["/archives/2023/10/index.html","0aa42ea23d36d73a0050c58bfb9bbab6"],["/archives/2023/11/index.html","a8de8ff80cae3e5551cdf12ed267b573"],["/archives/2023/12/index.html","22e63171cdb2acca93eeb6a7159b205d"],["/archives/2023/index.html","5f3a33d40f57336568ae072e2d2d1517"],["/archives/2023/page/2/index.html","5f3a33d40f57336568ae072e2d2d1517"],["/archives/2023/page/3/index.html","5f3a33d40f57336568ae072e2d2d1517"],["/archives/2024/01/index.html","de88f723dccaa24faa088a884fbeffa4"],["/archives/2024/02/index.html","a49911e0bf8cf5cb3a6a97851c804db1"],["/archives/2024/03/index.html","1ad02628e4a6c65e70f9c43f3b192ff6"],["/archives/2024/04/index.html","e7ffb64e4062bf2d280ed62dbfab705b"],["/archives/2024/05/index.html","8aade52afdd490c918926ed9d585d38f"],["/archives/2024/06/index.html","8de605fdb65781abcb604ce1b516db61"],["/archives/2024/09/index.html","0f952d25bcf12ac6e70062e9b2a1d42b"],["/archives/2024/10/index.html","fd54649c8d8ee8ab632a2c6018bc3212"],["/archives/2024/11/index.html","ee676ee7a7365806ef1e390e0d75889b"],["/archives/2024/12/index.html","b4fcbdebeea65220eb156a53123e4672"],["/archives/2024/index.html","9c422228c9109abcb0b161f2a2742714"],["/archives/2024/page/2/index.html","9c422228c9109abcb0b161f2a2742714"],["/archives/index.html","a0071a48408f83caff20eee190f5a61f"],["/archives/page/2/index.html","a0071a48408f83caff20eee190f5a61f"],["/archives/page/3/index.html","a0071a48408f83caff20eee190f5a61f"],["/archives/page/4/index.html","a0071a48408f83caff20eee190f5a61f"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","15ee981496bfbd8948a2a5b8859c0062"],["/categories/技术/index.html","c7642f3e2b840c9ce605a0fb5c91cd8a"],["/categories/技术/page/2/index.html","b97a9a7df46c80f8494a92d71a979090"],["/categories/技术/page/3/index.html","332f4b23abc731ead50781885f789f84"],["/categories/资源/index.html","0eae98d513b770fc612b747917e7f685"],["/categories/转载/index.html","f4975e7d90d803d0054efe67e9277bd8"],["/categories/随想/index.html","b1c286f6533e311fb6d87b12cb4f4e02"],["/comment/index.html","8724d4bbeab378d0e85318d3bbd1890c"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","71cebc0cd666f182f1ab1dbe4a9f15c1"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","8933e2b3a24a0a8556f915d3952200e8"],["/css/style.min.css","999de03652f9cb9709e7b065d7f6b365"],["/css/tags.css","eba03aebbf2f44113682d0ca1e19fcbb"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","ba1e43f34d0980d080d15a4bef41b920"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","e6f1ef87c5aa37fa652e194541d4d75f"],["/index.html","cddc49ddcb3d241802d84775e768ebb6"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/js/lib.min.js","65f02458a8e38579dac5594f252bd66f"],["/js/sakura-app.js","f1afa64bc2698ed86b55ab396a0c7ac3"],["/js/sakura-app.min.js","115ca9549a404cd11acd81cd31abe374"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","c757e76be80d1da11f5c02c68665312c"],["/js/wrapImage.js","c29a2f77c5aa3ba618ec389b270886c0"],["/js/wrapImage.min.js","fc743cae4be00ca6e80bf42d9b3bda32"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","008ecc76f127e33ec52c0bf7aafda06f"],["/links/index.html","d59bf399fc4bda7dbb5f32839002be5c"],["/music/index.html","993056a4e7e358ead830f9474ed1939a"],["/page/2/index.html","67fa5a33d2a8eae410ac379d0a027136"],["/page/3/index.html","848f4dee5d797f56bdfe86cb54e74a98"],["/page/4/index.html","00cb34eb05d591a2929d933d56af4443"],["/rss/index.html","5a3108be1755f0d995e4a78a9bee302a"],["/sw-register.js","45ff3a170bec61a03239b0dadd539cf6"],["/tags/408/index.html","c7ca8d157f735fbcc9a18a0cba26bba5"],["/tags/Adobe/index.html","98e41f8e975d83863c33b778b168ca5b"],["/tags/C-C/index.html","6fab6e982a241b41e83dcb1f7e68f477"],["/tags/C-CPP/index.html","33e9e47195fde32e66ff61eb96eb6e88"],["/tags/C/index.html","eb86100c40240693ccfbca84c942938a"],["/tags/CPP/index.html","47a91ac418a94a9a0cb40657fb243138"],["/tags/CSS/index.html","2dfb3b97079a9535ffd6904140f720c6"],["/tags/CodeForces/index.html","4c496c903eaed24f143634eb42ab5f7b"],["/tags/Color/index.html","c361c73afa432828178207f8b0e19719"],["/tags/C语言/index.html","39b914b4a12a4390254fa1f84b1f5b73"],["/tags/Dinic/index.html","dc028f65e75fbc5f398e543be0022435"],["/tags/Div-2/index.html","f0ec3d87e1eaaa97ae36a9c2950a1f25"],["/tags/JDK/index.html","76fe0e4f70f106b79a3ddfc08f40c647"],["/tags/Java/index.html","034fe6095f001ba3393472293ecb79e9"],["/tags/JavaScript/index.html","385d250e6f1bd40ecc2fd7dcdb01e5fd"],["/tags/LeetCode/index.html","7be89efdebff1e053174593e2a54d273"],["/tags/Linux/index.html","7ad93830630b1d03b36bee0d97589c2f"],["/tags/MSYS2/index.html","ad3ce09b876d8e44b21557053e421159"],["/tags/Note/index.html","f6ee059b28595d3cce0c7760f2af0c9f"],["/tags/PS/index.html","e8e81ba80c2cbd6b4e17f326add2d8ae"],["/tags/PrintStream/index.html","a6ece7f4b8b3bda6f79690242c45ede8"],["/tags/Rocket-Loader/index.html","9a8dadcf734276674d298dc15f28e54a"],["/tags/STL/index.html","9212c212af6281db1ef612ef6cde632b"],["/tags/Scoop/index.html","c661ae114f7e0ce4c27d8bf150d8f568"],["/tags/Software/index.html","8ec2e7f9a018ab8a8c5a4761dd59f775"],["/tags/Swing/index.html","a419f7db68219b3e08804a9ebce59a50"],["/tags/Tomcat/index.html","e63fd7013709b6e4cb2ee0a8ebd382e5"],["/tags/UTF-8/index.html","eb13592d1989b3c829dfdea718560526"],["/tags/VSCode/index.html","a0fad750101cc8f4a17f1ad6fe7ef7c9"],["/tags/blog/index.html","3ab0fbc440996b4775f813776e444c90"],["/tags/builtin/index.html","02c1a2ba9bbd0d4bf796423c8da98982"],["/tags/cloudflare/index.html","29cef44d4d0c9245b5029c8ef38d0f89"],["/tags/index.html","6aa58d314bc24afa66f3e3bec7a408cd"],["/tags/tools/index.html","fd4516d54aa1dc1b5009abf29f7a4b63"],["/tags/vue/index.html","77dd6b57ee7a4e9327e48c7ce5939e3a"],["/tags/web/index.html","40451603b6468a91782346a23164b970"],["/tags/乱码/index.html","cd73b549fa036dd29ca62cd4dfdc3108"],["/tags/二分套二分/index.html","80782a6858b927d46613dff3fb8c2a4a"],["/tags/划水/index.html","543501945c138d50b6e8272fb15078ba"],["/tags/包管理器/index.html","80a7303622542806bb61a11e27b5ea02"],["/tags/图论/index.html","361ccdd18bdf6a193a189ebb77897475"],["/tags/字符集/index.html","4dca4e7e9686b2b39fed9c9cab73f3ae"],["/tags/应用/index.html","ee23535d140d6c571e1befad2f328226"],["/tags/悦读/index.html","336fa2be0739d437891bdfd8e7299829"],["/tags/操作系统/index.html","e45e58df9fa0e52c51def0fe42f2db0a"],["/tags/数据结构/index.html","d9e2c7c7a2e1ea74090a7740ebb97235"],["/tags/数据结构与算法/index.html","d134a4d42fcb057682ec8aff5ef15f53"],["/tags/新年/index.html","198e67ee5d5087dade537cf96f552705"],["/tags/杂谈/index.html","5cf1164b46b8bce79b8af2cfcafe43e1"],["/tags/深搜/index.html","6938deae8908f3789ea9d3113e9d43c8"],["/tags/笔记/index.html","d1aae211ee6efe7e920e2907365a613b"],["/tags/算法/index.html","4f6d9c0f6efc54fc11513bb709222cf7"],["/tags/线段树/index.html","dd08096ab4b72b38a3977532210f2894"],["/tags/编码/index.html","67caecf3c7f08e989cf59a1c45eb274f"],["/tags/编程技巧/index.html","8f20a9988a4fc5b01b62abeb923a8aed"],["/tags/网络流/index.html","b701fe77fe14e5143a9427f1c5997f38"],["/tags/萌新/index.html","6d331602284a7028a63feda3eec65043"],["/tags/计算几何/index.html","c0f0dc4cb01a6b25e785ee8ff8184a3d"],["/tags/计算机组成原理/index.html","2a9d385eb5e8388122e9e98bb77f5aa6"],["/tags/计算机网络/index.html","d36fcd70691cd1303b3a40b7a6f8792e"],["/tags/质数筛/index.html","74f5eb3700f2eeb44b848cf134015ece"],["/tags/软件/index.html","cf4588732c5d628c870b2d3e4e4bb3d5"],["/tags/输出流/index.html","19e00ba92c502616d4d602c434f94f9c"],["/tags/镜像源/index.html","e1191796c581d9a76faf4c2d497708ba"],["/tags/随机增量法/index.html","aeb5523e93ebbb28b495b433b9a995de"],["/tags/题解/index.html","b6a4d7f805e6ceb998aaca077c620478"],["/theme-sakura/index.html","d95f3a5691c725c7795ba628c03e5c95"],["/video/index.html","da9d75f3011eb434028fdd357cd2f3c1"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-brands-400.woff2","8b0ddedbb27cbc9971c8667caa8a0cc1"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-regular-400.woff2","61f30b79daf5b31f0d254a31fba66158"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-solid-900.woff2","c64278386c2bbb5e293e11b94ca2f6d1"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"],["/webfonts/fa-v4compatibility.woff2","4bc58bc16bb05a05d3a47a4f7e143b75"]];
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
