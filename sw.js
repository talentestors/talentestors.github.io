/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","063c84d9379f85e0119faad9af2a9895"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","14138f8cb878193dbbb184776c87c167"],["/2023/02/06/C语言链表/index.html","9a87da102584ee257cce3d666448267d"],["/2023/02/06/书籍资源/index.html","08ad6cfb57b78e147e1e0f66d277d055"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","42a35cc5b2d418027eb32649b82d0ade"],["/2023/02/07/为水而水（笑/index.html","cf3d6b9031201959600050905fe5a5a0"],["/2023/02/08/洛谷主页源码/index.html","7f6fba581e2f2d96dc5e2ec1b35dbd80"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","03999634cf24e21eed422ae4fe0ceafa"],["/2023/03/09/Web前端笔记-Emmet/index.html","f727c6e84b6018fee8712092cd9c9de1"],["/2023/03/23/gitalk-评论/index.html","12f6f0566b5ecf25c738347369d0e838"],["/2023/04/10/用C语言实现字符串全排列/index.html","eaf464d5d1c01092b22386e44c7218dc"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","202c518f2427e0a3a92ddda4a97591ce"],["/2023/05/15/C语言基础排序-demo/index.html","8ee4b10298009c52196c20766a50da5c"],["/2023/06/14/闲着没事干/index.html","d17ac352d8bb6de7defe5d510b71605e"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","b2d207a72b5699fc1d6cca0570a3a49f"],["/2023/08/01/javase-note/index.html","a9e3eb80253a09b680201861317e698d"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","1beba5c33e9ea8da9a0878b6ccfe0a8f"],["/2023/09/14/vue-pure-admin/index.html","0f8542adad9c439f98e48e3c25107d48"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","53614754923090de6cb7782d6d03e27e"],["/2023/11/28/C-CPP-the-memset-function/index.html","8a3337a45c6913ef748a05cf6afb4f8f"],["/2023/12/13/javaSwing-DynamicClock/index.html","9fe85e371eeac93ed3ed1e269354a540"],["/2024/01/24/builtin-系列函数/index.html","6a70775955f0aa47fd9b821607b5ffb7"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","602256bcdcfd953968eb27a9e341bef7"],["/2024/02/09/新年快乐/index.html","1f32504ceda07953000f146b9f481687"],["/2024/03/26/408-route/index.html","4c95475dffe4c59ffab8ecd29b5af68b"],["/2024/04/07/转载-线段树专题-xyw813/index.html","3d6e75552a598f90875738491317d3d1"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","7de38c33a20a5d97ff255e91d26af5e3"],["/2024/05/03/Adobe-PS-2024-软件分享-torrent/index.html","c6c138b28d8f1eda07d3ec847f202f95"],["/2024/05/06/cloudflare-display-issue/index.html","88a4a614c86df782f3287590216c3615"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","8a306f047e0de02a4f8cadefc4f69bc6"],["/2024/06/18/P3517-POI2011-WYK-Plot/index.html","27cd0ee9f3b223d02b225d74f832eee4"],["/2024/06/25/open-source-LinuxMirrors/index.html","6a945f0bc9d5bfa2b8f7d77b0e409bad"],["/2024/09/02/Dinic-and-LuoGu-P1343/index.html","25bdfb08338bb67a52a071dc10522f9c"],["/2024/10/08/黑题记录-2D-Geometry-110-in-1/index.html","5a53c7ae543db2056c899b6bcac6a411"],["/2024/10/11/常用STL算法库/index.html","894080f3283e879d68044f4aec0bf806"],["/2024/11/28/在-Java-中设置输出流的字符集/index.html","aff6c954ac3b366c6a05479439b68fdd"],["/2024/12/05/JDK-18-以上使用标准输出流中文输出乱码问题/index.html","6ceba2e70818e18bc394ea2e13b84577"],["/2024/12/09/Codeforces-Round-992-Div-2-解题报告/index.html","5416ef53541f88d9b1cf17cbef718973"],["/2024/12/17/Where-are-those-algorithms/index.html","16cf00c5e7f6820cc2a4e9a4b23a09ae"],["/404.html","7b7c2b12ef5e2b95eda92262d85e6cd6"],["/about/index.html","a720ab318910a25a1c56ceda81aa3ce0"],["/archives/2023/02/index.html","dc99f4428b46509b91c6ba91abc58143"],["/archives/2023/03/index.html","13e9b61d4459081acc0034bb677be5a4"],["/archives/2023/04/index.html","a30a8089de56b1ba50e9b1ff3a039c1e"],["/archives/2023/05/index.html","f52442be97950155132a7b8466eb7498"],["/archives/2023/06/index.html","4ff43d58afd825cc8982aa7d5f4907da"],["/archives/2023/08/index.html","35c672d984065827a83b02ba916bc7b1"],["/archives/2023/09/index.html","f5871c2ddf6d8da69f9d34bab603d4dc"],["/archives/2023/10/index.html","c8eb71124af6bc6bde0e2654356a2c28"],["/archives/2023/11/index.html","22415b48ac0f6e95dc67f979dea82d1d"],["/archives/2023/12/index.html","bd1de4282c1110563cbaba27bee0f47e"],["/archives/2023/index.html","df8480f8603a57bdcd4365f487ef35d7"],["/archives/2023/page/2/index.html","df8480f8603a57bdcd4365f487ef35d7"],["/archives/2023/page/3/index.html","df8480f8603a57bdcd4365f487ef35d7"],["/archives/2024/01/index.html","f8b064b424dd38c956d27fd9d430d82f"],["/archives/2024/02/index.html","66e16e901a847be1c40897874d682ce7"],["/archives/2024/03/index.html","84e03b43e6105d0c16274dbc47185bfc"],["/archives/2024/04/index.html","2520af2d340cd24be14cbcce03ea607d"],["/archives/2024/05/index.html","13cb8ec042c49c869d5107fdb2c88411"],["/archives/2024/06/index.html","58c82241823ddc2e3ceaa33a247bedde"],["/archives/2024/09/index.html","a55ba269f1dffb4a5946a1944baebec3"],["/archives/2024/10/index.html","00baea3d21236218729d6e3c982c4ae2"],["/archives/2024/11/index.html","8d3ebff4baa562c944ab69f084e4de51"],["/archives/2024/12/index.html","e2ea171f0077f0f55fa29caf44373902"],["/archives/2024/index.html","9fa93c8d4522ccbfa706a58fa1f2ffc0"],["/archives/2024/page/2/index.html","9fa93c8d4522ccbfa706a58fa1f2ffc0"],["/archives/index.html","87bd4328b649b0d71d7cf0bc5a610824"],["/archives/page/2/index.html","87bd4328b649b0d71d7cf0bc5a610824"],["/archives/page/3/index.html","87bd4328b649b0d71d7cf0bc5a610824"],["/archives/page/4/index.html","87bd4328b649b0d71d7cf0bc5a610824"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","8dfa63699106bf3beae7807762460502"],["/categories/技术/index.html","97702058cd11faca58e2648575ea0d79"],["/categories/技术/page/2/index.html","bdee8a1eb0dfd973700413259f5a3b9b"],["/categories/技术/page/3/index.html","1d73bc0d9d33761d1be9d81a9fea6a14"],["/categories/资源/index.html","faf0368a640a0fc2e6888196aaee7d44"],["/categories/转载/index.html","ca690472f803d3afc172bf5c197eef7b"],["/categories/随想/index.html","48e2641db792df917763a8f3d489154b"],["/comment/index.html","b6eb7f0509d7db60da56387d3cc94aa3"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","71cebc0cd666f182f1ab1dbe4a9f15c1"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","2fee6f3b0b16c3663f93f8e9c193d256"],["/css/style.min.css","5c69036f827bff149d075d5f26850d2b"],["/css/tags.css","eba03aebbf2f44113682d0ca1e19fcbb"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","0bb8f016f45019f744143f258acf8ce4"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","a6d63c1ae1f19410c6fdbbdacc422cbf"],["/index.html","2d8e645c9798cfcbe35819008fdc3aa4"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/js/lib.min.js","65f02458a8e38579dac5594f252bd66f"],["/js/sakura-app.js","f1afa64bc2698ed86b55ab396a0c7ac3"],["/js/sakura-app.min.js","115ca9549a404cd11acd81cd31abe374"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","c757e76be80d1da11f5c02c68665312c"],["/js/wrapImage.js","29007a235330279921b40783f3752c1c"],["/js/wrapImage.min.js","fa46e73ad4d52096338f455d716a71a2"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","9131ee65eb35ff973daa99f5ca716a61"],["/links/index.html","3647dc9e8ef2c19d30bfd6ef34cd3add"],["/music/index.html","2c01e50631f77982a9c408a61b108ead"],["/page/2/index.html","26186f79a4de9009b6b88306f8078a61"],["/page/3/index.html","8d967239fcb09c3f3f7457a698839c14"],["/page/4/index.html","85a798dc2f891e99fb30602883af096a"],["/rss/index.html","1b404861edbf69bd0f78c3651c0079b2"],["/sw-register.js","39dc89dac5e5415361b06849775c1348"],["/tags/408/index.html","f8e078daa371ed7f1a85b23925ef9b6e"],["/tags/Adobe/index.html","27a79643aae840fa85275a6117cee425"],["/tags/C-C/index.html","a6b6ef7e5205f9154811ceb591634524"],["/tags/C-CPP/index.html","f37bc22994e19cee6d550a241bb90144"],["/tags/C/index.html","7ea32471405d940caefa7e3fa78bd46e"],["/tags/CPP/index.html","54f21719f45e54eb65aca7e7ca9565ae"],["/tags/CSS/index.html","00f8160b5a0538d28c37d89a2ccf5dc6"],["/tags/CodeForces/index.html","04b23d986416f6ea33da5e0de277bff5"],["/tags/Color/index.html","3d85cac1d321856ace1db737eec8ed8e"],["/tags/C语言/index.html","db1eb4a67d8224e05d6462ac422f8a1b"],["/tags/Dinic/index.html","e0669a10244179e2f3a65c3927af727b"],["/tags/Div-2/index.html","59341594cdc1f7951828130b046bf380"],["/tags/JDK/index.html","e1e78a73e541afc70cd62cd6954d3e6c"],["/tags/Java/index.html","3194423e0cb1ba05ac9a118a0acfe79d"],["/tags/JavaScript/index.html","217cf2b9ca2ba1fb8182867ba6f880d6"],["/tags/LeetCode/index.html","550a49321961cc4d80f1c99287676df4"],["/tags/Linux/index.html","136b0b7cdc0ee04208e2d5b50d6fca50"],["/tags/MSYS2/index.html","c14e19911796921366b10b1ff0b9c0ba"],["/tags/Note/index.html","d00e1a9bd213c260a0fd81c4a8adf80c"],["/tags/PS/index.html","751a7bd81b1d75634a5a14fafe1ecbcc"],["/tags/PrintStream/index.html","778f2bde7ee52e0dbdfd9845c3df8787"],["/tags/Rocket-Loader/index.html","8a057e50c30acc53167500b2da4b07dc"],["/tags/STL/index.html","8cf4ea2d0b28b6a5bf140dff45a66b76"],["/tags/Scoop/index.html","675df4703e8a46c212429d3e7d15ea52"],["/tags/Software/index.html","87e8ff0bd612b387ab73fdb407f73de3"],["/tags/Swing/index.html","e4845231c38eda6030f94511a7a88ad5"],["/tags/Tomcat/index.html","553e00c27ea5bc5a791876d10cd73244"],["/tags/UTF-8/index.html","a54a28ba4a058829ffb53a70a2b81d8b"],["/tags/VSCode/index.html","59557a8f87051058fe39d3a9d36be74b"],["/tags/blog/index.html","f30085a864a89ccbf1a0d62fe35e501b"],["/tags/builtin/index.html","d8a5fdcd7cfa6ea5fe4e5a5ad03b317e"],["/tags/cloudflare/index.html","c67c20f21106fdf54cdd1b4b8d4007fe"],["/tags/index.html","d9af9b1aa858215aaf4b5f5da9f38426"],["/tags/tools/index.html","e518530398186c2b3605508292ba0da3"],["/tags/vue/index.html","f7ed4ccbd311848f1c38db7e85d8d218"],["/tags/web/index.html","cbd828a4523e33f314a694d56dc73c0c"],["/tags/乱码/index.html","9bf5d4ee5f9bebf31a5a98a38d0ac860"],["/tags/二分套二分/index.html","cb78a7df5291ea01a1f0db09a1d9a083"],["/tags/划水/index.html","4c586ecd8a9beab376ffd5d79f159ad4"],["/tags/包管理器/index.html","618da493a2188522363e60dc7bd0b1e9"],["/tags/图论/index.html","c06029a88ce383378f5bae7472987938"],["/tags/字符集/index.html","c42ad7ce7d5e45ad5d88a0da7a1ae98b"],["/tags/应用/index.html","1348385b6d2f75d58eeaea48890034ff"],["/tags/悦读/index.html","d23659c58e6ad8e75ed43665ece71f14"],["/tags/操作系统/index.html","e6ac6b8731017e3e1c529318ea64d7dd"],["/tags/数据结构/index.html","4d7c90127d9a9ad476cf9713fa497d71"],["/tags/数据结构与算法/index.html","a2d31c9bc20d91783d7b673394df6458"],["/tags/新年/index.html","477754124dd4adfb64ffb3d8cf832eba"],["/tags/杂谈/index.html","a37a54314ddaf46056f67490c8a7e25e"],["/tags/深搜/index.html","752d071c42aefb613f7bad9ecf900978"],["/tags/笔记/index.html","99f0b3d8b51ade5533798364db8b01e8"],["/tags/算法/index.html","a98c1470686070a08b55c8b8da4b80ba"],["/tags/线段树/index.html","662ce9f0ecc335dccc9f078989de1d1b"],["/tags/编码/index.html","9b881c4ab665cde38b36d00b03ceeb57"],["/tags/编程技巧/index.html","09902effe307835c5798a7967b4dc061"],["/tags/网络流/index.html","a23239e07d32c0ba099653819ef01fe8"],["/tags/萌新/index.html","484ce8e8072042fe8e12bb228be43ce9"],["/tags/计算几何/index.html","132fa564e4750a7cb08f1131da51d579"],["/tags/计算机组成原理/index.html","435818a4d755acc298eeaef8631446ba"],["/tags/计算机网络/index.html","fc877828857756c0da731a1784b7cf50"],["/tags/质数筛/index.html","92aeb6f618148a6d82fa9c27a82aa848"],["/tags/软件/index.html","bf0a4d40d5972bb869a7c46941afa3e5"],["/tags/输出流/index.html","c460ce58daddacbb430d9485c9bf376a"],["/tags/镜像源/index.html","5c3d39ac559ae7a72701807013ace712"],["/tags/随机增量法/index.html","d3d38964a178e13fd4b1108377e31433"],["/tags/题解/index.html","29fb8d046c389f7182fb1d7d9dc75613"],["/theme-sakura/index.html","5b0f7e9db423b185b8a1c322b2f58f36"],["/video/index.html","e2d52845f419676815d05b468f2bdc26"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-brands-400.woff2","8b0ddedbb27cbc9971c8667caa8a0cc1"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-regular-400.woff2","61f30b79daf5b31f0d254a31fba66158"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-solid-900.woff2","c64278386c2bbb5e293e11b94ca2f6d1"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"],["/webfonts/fa-v4compatibility.woff2","4bc58bc16bb05a05d3a47a4f7e143b75"]];
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
