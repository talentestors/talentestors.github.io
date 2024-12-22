/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","3ef0210931f270c24b0bfee2d0380686"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","7a8c43e01a92503015725b67449f6555"],["/2023/02/06/C语言链表/index.html","8a49d7fee55f6eb1bc4454b80d324f9c"],["/2023/02/06/书籍资源/index.html","c2d461fdf0f5e036ec8de65e15b3b0a7"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","cf42e0c886bc62761a2a53d16d0b7156"],["/2023/02/07/为水而水（笑/index.html","d36bf5effa132fe08a747a2805b581b0"],["/2023/02/08/洛谷主页源码/index.html","0439a7dc662abcbba07c3ca3e387fb61"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","55bd05717af0537a3e5220104206a20e"],["/2023/03/09/Web前端笔记-Emmet/index.html","867b81e822770aedc5254f4299e62a6c"],["/2023/03/23/gitalk-评论/index.html","8402be3ac8dda59d2fe8b619df186bfe"],["/2023/04/10/用C语言实现字符串全排列/index.html","7d0da961d930f2a3152a5409f3e36d9c"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","78fac8c8133f50288f2b356b4d35bb29"],["/2023/05/15/C语言基础排序-demo/index.html","ac90e82156280e9c0c2f552e18a0d163"],["/2023/06/14/闲着没事干/index.html","3eaa261ed9e1f53778dfe4446b4395b1"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","23c152fe192da092cb93ebff42f8db93"],["/2023/08/01/javase-note/index.html","04932430ad6b755abb446b6294a46a47"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","da82eba73983a1ba8e618d0fc0192d54"],["/2023/09/14/vue-pure-admin/index.html","662f03e13513507e8e01e98da11f9b76"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","9177aa646280f48079f36fcab815d5e2"],["/2023/11/28/C-CPP-the-memset-function/index.html","e5ea4745484ad018900b2e08ae57a570"],["/2023/12/13/javaSwing-DynamicClock/index.html","8ddb26b9e4df04b5ec6e69d9befbbc51"],["/2024/01/24/builtin-系列函数/index.html","5f6da73648da8fe0f95d955afd0a0c33"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","0cecd0a129385c726604e4d173e24702"],["/2024/02/09/新年快乐/index.html","f772010d542fa7aa98c68094e755d3fe"],["/2024/03/26/408-route/index.html","18168b605b5eb6b4bc9e6100affc23b8"],["/2024/04/07/转载-线段树专题-xyw813/index.html","04a1b4f9d7e7af2382785a0706111025"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","a513ac10a7a57a8f344e0390c0d87af3"],["/2024/05/03/Adobe-PS-2024-软件分享-torrent/index.html","8cdfc56aa2eca394aad0b543b9c04dd9"],["/2024/05/06/cloudflare-display-issue/index.html","f64e762aa148f5ee5c7422769e6c29c6"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","a68d6349eb4ebcde0cc2cfcd8c6a0e30"],["/2024/06/18/P3517-POI2011-WYK-Plot/index.html","831d9726d0ab860449a3b96e377235f5"],["/2024/06/25/open-source-LinuxMirrors/index.html","f496bc98e9d9be882607dc735520333b"],["/2024/09/02/Dinic-and-LuoGu-P1343/index.html","75f7ad9e6aa8fa82cfd1d97cb5908451"],["/2024/10/08/黑题记录-2D-Geometry-110-in-1/index.html","944313ed3222a1148e9f2746d804eae5"],["/2024/10/11/常用STL算法库/index.html","2e90ccdbbf2354d2be538666b40c99e2"],["/2024/11/28/在-Java-中设置输出流的字符集/index.html","65ddec847b4c722fa6c8bb331d6b911e"],["/2024/12/05/JDK-18-以上使用标准输出流中文输出乱码问题/index.html","8415669e17bacece9f1ceb9e7dc6db8d"],["/2024/12/09/Codeforces-Round-992-Div-2-解题报告/index.html","a520a0364eccd7a3ff8096e89576c281"],["/2024/12/17/Where-are-those-algorithms/index.html","c2f121d5b20029ac606387c4c1c2378a"],["/404.html","7b7c2b12ef5e2b95eda92262d85e6cd6"],["/about/index.html","b51cab396fc78bbbdd7e155fb281b4e9"],["/archives/2023/02/index.html","c22983c8895df67b6bc15d80eca592f7"],["/archives/2023/03/index.html","f702b19ccdb993036501578db2abb6ee"],["/archives/2023/04/index.html","e49e2a90b67c940940f5c1c5e392a2e7"],["/archives/2023/05/index.html","8258fd916fdf9cbeed6a2299c2d49162"],["/archives/2023/06/index.html","b768c2c15cfc009b01e6754a8f6c2216"],["/archives/2023/08/index.html","0a788d0e88ff5ecb93c66eb2e9275ddc"],["/archives/2023/09/index.html","19dd2994d9cd54b1dc487d05b1f026fd"],["/archives/2023/10/index.html","4c07ece03c6020640e50af6dcc3f300c"],["/archives/2023/11/index.html","838c51e0ab417c6216a394c7e48ec4ce"],["/archives/2023/12/index.html","f390340988d648310a7f79b40c8981e6"],["/archives/2023/index.html","ec41bc457b433fcca13bbb825f64a08e"],["/archives/2023/page/2/index.html","ec41bc457b433fcca13bbb825f64a08e"],["/archives/2023/page/3/index.html","ec41bc457b433fcca13bbb825f64a08e"],["/archives/2024/01/index.html","0262048c6657684b62f2d7e95deae188"],["/archives/2024/02/index.html","1caa7a8b0b43852ca4814e3fbd7c50ea"],["/archives/2024/03/index.html","5009c2b0ea419e95f781b4fb45989416"],["/archives/2024/04/index.html","8cb62453de3c568067b89782828b9328"],["/archives/2024/05/index.html","9c227894327d5ef8e117d4106904dbbd"],["/archives/2024/06/index.html","fc4a22f0d93216ef5e36048aca897d28"],["/archives/2024/09/index.html","3e1018d37494d696b1367b4b335a7b76"],["/archives/2024/10/index.html","01701582b95aac052de7c95c2d442dff"],["/archives/2024/11/index.html","3ec1d6e850da7195704758f930226209"],["/archives/2024/12/index.html","5ecd0c396cec7bcdbc9afb8b3b454fc9"],["/archives/2024/index.html","9a5e8f2f7d16f0fcc5baf0689ca8474e"],["/archives/2024/page/2/index.html","9a5e8f2f7d16f0fcc5baf0689ca8474e"],["/archives/index.html","299794efac028c83f877b976c979b69a"],["/archives/page/2/index.html","299794efac028c83f877b976c979b69a"],["/archives/page/3/index.html","299794efac028c83f877b976c979b69a"],["/archives/page/4/index.html","299794efac028c83f877b976c979b69a"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","59175b0bac07928ad6722b6291909140"],["/categories/技术/index.html","a0f0035a52bb5fa104ae0eb447a1e0da"],["/categories/技术/page/2/index.html","4047b8911500b03b9018f281e31e9ac4"],["/categories/技术/page/3/index.html","e8377f92db32a81ebee9bbf30339cd49"],["/categories/资源/index.html","97ee4a477e51c662364184363b08144e"],["/categories/转载/index.html","63ae042ac8b5540f4881ed2590df3be6"],["/categories/随想/index.html","d9142809f08a4b3b2f3cf75e6fbd1fbe"],["/comment/index.html","91fedb4de4a89f6b96fb4d9d34f7530c"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","71cebc0cd666f182f1ab1dbe4a9f15c1"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","ee18cd907c37f0971146c2648da3e1b9"],["/css/style.min.css","2a08992ea2f9646c8f6f476fd81a59d8"],["/css/tags.css","eba03aebbf2f44113682d0ca1e19fcbb"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","d6608d5b42ee60382b3f05a5219dbb4c"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","6d1cf199df1ebe54a1b9cf716d593785"],["/index.html","e13431bbbba504923fa487763b10a48a"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/js/lib.min.js","65f02458a8e38579dac5594f252bd66f"],["/js/sakura-app.js","f1afa64bc2698ed86b55ab396a0c7ac3"],["/js/sakura-app.min.js","115ca9549a404cd11acd81cd31abe374"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","c757e76be80d1da11f5c02c68665312c"],["/js/wrapImage.js","f9e15116d23ab9ad9218be6b3f952e30"],["/js/wrapImage.min.js","7b928d1716e58eabdefcf36958e73a35"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","156125592eb5c384695b4623a2b86e43"],["/links/index.html","70a6f38ce768005c795ac64edfaa1528"],["/music/index.html","d404c687d8c2c3a81920c26f00f4e4a4"],["/page/2/index.html","4a321377403819e5e74e935cd16e7c15"],["/page/3/index.html","832b2bcd169487049dbf93a9b9034973"],["/page/4/index.html","93d0259704596bd60026abac5c7ca9ef"],["/rss/index.html","b03ceb3b736958b2a9b751793cd7ddb4"],["/sw-register.js","63a6b1644dc43f1b559a8755f02d4524"],["/tags/408/index.html","542341025f56affca7a67776d1773581"],["/tags/Adobe/index.html","7dd8cf3d78fdf84514640ff060bfa949"],["/tags/C-C/index.html","15cda0175f4443d585b5157e3787f8b2"],["/tags/C-CPP/index.html","25ccda4ec82b7e5f108e1f2bf90ec6e2"],["/tags/C/index.html","d999f72f028185cacf0a27af9aa0d3d5"],["/tags/CPP/index.html","4957c809b8016f49716e76f8dec5b370"],["/tags/CSS/index.html","db46246e1624df82f6b9cdd0097bbfa1"],["/tags/CodeForces/index.html","08d7752069a0691bfee692f4ca9a15a1"],["/tags/Color/index.html","99e0bdb3d816a19a7ac25bd262a8fdb7"],["/tags/C语言/index.html","2d1810f0898fb973107fc520d3180efb"],["/tags/Dinic/index.html","6357767ed6985206ed2963131cf2604c"],["/tags/Div-2/index.html","9801993bc733f6a8a4599501560f6eca"],["/tags/JDK/index.html","228dc6a7abc67956a40864dd2f592c40"],["/tags/Java/index.html","1dd54e7507994b622fe2b25c53b43182"],["/tags/JavaScript/index.html","5ae65d0b079ad00b020be5a88ed4c3f2"],["/tags/LeetCode/index.html","6fb5292a9b98b62c6643c149396a8ddd"],["/tags/Linux/index.html","67bf3d6d13f93de5b0c04214344a8b25"],["/tags/MSYS2/index.html","9bc3b4b22505b7be1ed8a8fe0a63f9be"],["/tags/Note/index.html","d4765d43ef620847d811d005e7de5704"],["/tags/PS/index.html","0c12265491ef8d82658f7a875c4cb831"],["/tags/PrintStream/index.html","6ee2b83085dc4ca6b8fa8e22c4fe08bf"],["/tags/Rocket-Loader/index.html","c2afa5c4e2d9a1a90bc7091d755b38e5"],["/tags/STL/index.html","5b82f61321d69ddc2e4f8aac07f5c321"],["/tags/Scoop/index.html","bb5dfc828f62f00101dec67b6c100b05"],["/tags/Software/index.html","faf337404d3df295d6dc3b61d05533b7"],["/tags/Swing/index.html","9dd146ae7a1ed4a313fef34b6efd4a2d"],["/tags/Tomcat/index.html","916583778b5b2dd0a4d8fd4293d40f83"],["/tags/UTF-8/index.html","fc1e156a75aad1b2d5bf02e6725c2e6e"],["/tags/VSCode/index.html","58b8f4ab57e2a728190b5d65df2ccfd8"],["/tags/blog/index.html","40ee210ec8c1a1c0c9c1a5bf3293b5e8"],["/tags/builtin/index.html","4f7bfd1a5318bcc718e711bf35e2abc2"],["/tags/cloudflare/index.html","9e0d92d04b08fb80d317264a207eb785"],["/tags/index.html","1d04e55f27006075fe7ee6ac4c27bd90"],["/tags/tools/index.html","f6f88db7da6074314ee27143e3993b1a"],["/tags/vue/index.html","9651dfd209eab02f30e6d38d32108af6"],["/tags/web/index.html","886905172d2bca0b019fe1e754395fa2"],["/tags/乱码/index.html","2ba613908a33bea19e11cfd6d62c9e5d"],["/tags/二分套二分/index.html","c53f2bd6beecbb5fc64f47970972cf23"],["/tags/划水/index.html","8c32d02228e7e743554d04d9d5d8b769"],["/tags/包管理器/index.html","69adf631cfd0aa6361339ce4fd8d6592"],["/tags/图论/index.html","13b6e9d19e893941d882cf43490554bf"],["/tags/字符集/index.html","6e80149b882173f541e62d4068dc533d"],["/tags/应用/index.html","92c0f6594bbee6af458d781b0bff8611"],["/tags/悦读/index.html","f9beeafdce694aab8fc126644ffc7120"],["/tags/操作系统/index.html","d35bafc8ff3b339f335af9fb3f0391c0"],["/tags/数据结构/index.html","e92389be32724c9149d474fedf5c85b1"],["/tags/数据结构与算法/index.html","880014111eaeb6eae678f20a4fe6aed2"],["/tags/新年/index.html","d6c45c9231807c2394a98fa1dd593e0e"],["/tags/杂谈/index.html","08c4989db4868683a2f7273fee33df64"],["/tags/深搜/index.html","24260e02ab81b1fb9b0da1ea57606a2b"],["/tags/笔记/index.html","91f9b947da7d1710d9eb0c51b651c6b0"],["/tags/算法/index.html","cc5d673133549f44759a76c18d1be371"],["/tags/线段树/index.html","bb9573f8a83ca3e5b091afe6f335d35a"],["/tags/编码/index.html","5050e68ff127130b426c5cbdea8f9fdf"],["/tags/编程技巧/index.html","614c4f441b237df82e8e4732a7098f74"],["/tags/网络流/index.html","8b7237d6d06e014a7bfc5c78acdd1e05"],["/tags/萌新/index.html","5c468f65f7d21a595e368a61201cb61d"],["/tags/计算几何/index.html","5b3faaceef355fe499cf73a91182ce45"],["/tags/计算机组成原理/index.html","d436e64409aebe872cea86c339340971"],["/tags/计算机网络/index.html","7c5b4542e66dbd8c33af13821fd9e63b"],["/tags/质数筛/index.html","bcf09148638060f18854c6d6c0afd045"],["/tags/软件/index.html","2b1016f36c1977ba40bb8375018d006b"],["/tags/输出流/index.html","fdec10c88ffab5f157a6b13c012a77c9"],["/tags/镜像源/index.html","a02bf5d3133b37cd6c59acc308859d20"],["/tags/随机增量法/index.html","f662d443f63696cfdc625dad1a18ad1a"],["/tags/题解/index.html","07d5e7e63a97f8f89d53848d9ad53342"],["/theme-sakura/index.html","a046b3177b5fe69124b105f095b616f1"],["/video/index.html","1d74552c8796d719b8f58d029545fd0a"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-brands-400.woff2","8b0ddedbb27cbc9971c8667caa8a0cc1"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-regular-400.woff2","61f30b79daf5b31f0d254a31fba66158"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-solid-900.woff2","c64278386c2bbb5e293e11b94ca2f6d1"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"],["/webfonts/fa-v4compatibility.woff2","4bc58bc16bb05a05d3a47a4f7e143b75"]];
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
