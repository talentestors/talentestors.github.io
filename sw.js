/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","adb6199c624bff92ddc96568e08f5cc1"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","6c36c0b334f627c57d211e6276da55b7"],["/2023/02/06/C语言链表/index.html","e975bef41bee4927233c84d7b0efc4d6"],["/2023/02/06/书籍资源/index.html","186db8b73c5a160181740b1e30f51726"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","bdbbb14d5ac3627f56d70f426b862761"],["/2023/02/07/为水而水（笑/index.html","dfde777354566560332fcf4fd1656d3f"],["/2023/02/08/洛谷主页源码/index.html","5b09c0d5f734cbfd37f5611f5b117da3"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","f666a2ddb8219e50d07048f58fcff777"],["/2023/03/09/Web前端笔记-Emmet/index.html","510599018d7d916de448e910b05aea1a"],["/2023/03/23/gitalk-评论/index.html","bd4d711f8ad6185dfdf6a22a7a36a54f"],["/2023/04/10/用C语言实现字符串全排列/index.html","df80c4a19a686e3e37e342f34e4713f9"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","e47811b6595361033d3d045eba7a309f"],["/2023/05/15/C语言基础排序-demo/index.html","2d54eae5aa0bdf95c6e3c37c7068f21f"],["/2023/06/14/闲着没事干/index.html","63eb369c739e5c3d3ba7df3d59b95d36"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","b80cce71e1e8368ede90dc422b944370"],["/2023/08/01/javase-note/index.html","87ee2bb20e2b94ee356ba85899b48007"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","9d30598da929042d4a843bb9de493bb4"],["/2023/09/14/vue-pure-admin/index.html","1da7d72f71e98af8734774ea1636cf2e"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","e1865c26f9c7b751b30149b8bdfe288c"],["/2023/11/28/C-CPP-the-memset-function/index.html","1fe52b6aa2ce9b035ae4cec4e99b4f94"],["/2023/12/13/javaSwing-DynamicClock/index.html","1c56ecab45da01b20efaeff47e4da707"],["/2024/01/24/builtin-系列函数/index.html","865882f21ea5207664dda3cb96bb05a5"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","d3b005f201c769bf353d2fd28dd295a5"],["/2024/02/09/新年快乐/index.html","18eb3b23813e173aa6edfd79ac9a2058"],["/2024/03/26/408-route/index.html","9547335a2b9c2076e6a1dd9960dd2d46"],["/2024/04/07/转载-线段树专题-xyw813/index.html","da402cc27a43890a313f634cbd0c1ebe"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","699219d4a362fa343d42622bc73784d0"],["/2024/05/03/Adobe-PS-2024-软件分享-torrent/index.html","0c105ecd9c50dbe270f8eb82108c64da"],["/2024/05/06/cloudflare-display-issue/index.html","bdbf6dde88cf5795940029450116abb4"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","a6ac726e99f184a3a5a00e87adff501c"],["/2024/06/18/P3517-POI2011-WYK-Plot/index.html","04017fe896a679efc11ffb758e70a5b8"],["/2024/06/25/open-source-LinuxMirrors/index.html","9b787b07f1f7e2a07380f42fcd716d48"],["/2024/09/02/Dinic-and-LuoGu-P1343/index.html","77cbf7b4c67f44a9bf85118e4221bae4"],["/2024/10/08/黑题记录-2D-Geometry-110-in-1/index.html","f975f1b9c98d909b2d23164716d2c14d"],["/2024/10/11/常用STL算法库/index.html","9f2d0050b947dfb617c3de89ae47b5b3"],["/2024/11/28/在-Java-中设置输出流的字符集/index.html","1ee053ec7c90df3573205610ada97e8f"],["/2024/12/05/JDK-18-以上使用标准输出流中文输出乱码问题/index.html","9a5a01c6dd9319ffa5837eee5810dc4b"],["/2024/12/09/Codeforces-Round-992-Div-2-解题报告/index.html","88673343705596761e468e5a7cc8fa1c"],["/2024/12/17/Where-are-those-algorithms/index.html","26f7df9e7fd7e4268903330eb1104b66"],["/404.html","7b7c2b12ef5e2b95eda92262d85e6cd6"],["/about/index.html","5125eb3256fc620c79b3a6000ea9f28a"],["/archives/2023/02/index.html","fc7668b9ee1edc033b85a4f752097448"],["/archives/2023/03/index.html","8de041e92b022db992ad660b68e1ab91"],["/archives/2023/04/index.html","b01ca26759210f8799cb03dde29460b7"],["/archives/2023/05/index.html","8f7605f1d8ecffde9db859ca2e54d4fc"],["/archives/2023/06/index.html","70959034b75eca494d7200fce7b79b2e"],["/archives/2023/08/index.html","8717ef5aedfc69ba1e4d4808b043ed45"],["/archives/2023/09/index.html","e5bbf07f6c6b19bfa6b20af62b0d14f3"],["/archives/2023/10/index.html","3625809f919c6776a767d587984d6eac"],["/archives/2023/11/index.html","8467cc5616de2602b955f429e608f0ad"],["/archives/2023/12/index.html","345fb0e2c8275aaefd45855c49156669"],["/archives/2023/index.html","432f0b5892b2afe42f5887573876ab92"],["/archives/2023/page/2/index.html","432f0b5892b2afe42f5887573876ab92"],["/archives/2023/page/3/index.html","432f0b5892b2afe42f5887573876ab92"],["/archives/2024/01/index.html","8c5400145ba33484d85010258c9cbe1f"],["/archives/2024/02/index.html","3c085b2aaa93276cb2f837996b6f608a"],["/archives/2024/03/index.html","b005e02e5b42205ecd9ef0cd5d2a0e9e"],["/archives/2024/04/index.html","fe4c9679cc76400377c9d09dc996ce94"],["/archives/2024/05/index.html","909d5d74674a1db0ff401ae3cfe5ccee"],["/archives/2024/06/index.html","ca01394effbb344f8acfb4d74071cb8b"],["/archives/2024/09/index.html","de0ea0e10b539554327e6f6d086a494e"],["/archives/2024/10/index.html","34c38824545259399a05764fce407b9a"],["/archives/2024/11/index.html","0e38d9b3f8cfc5dca69e77f7ad9e5872"],["/archives/2024/12/index.html","3ef7a60edd478ae6ce879e9366276913"],["/archives/2024/index.html","7670783c58438cff733c205bdba5ce2f"],["/archives/2024/page/2/index.html","7670783c58438cff733c205bdba5ce2f"],["/archives/index.html","714fab5b14c71c3f9b5f2636158bc0a7"],["/archives/page/2/index.html","714fab5b14c71c3f9b5f2636158bc0a7"],["/archives/page/3/index.html","714fab5b14c71c3f9b5f2636158bc0a7"],["/archives/page/4/index.html","714fab5b14c71c3f9b5f2636158bc0a7"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","1df613c95af7a9e73afad415aa884db2"],["/categories/技术/index.html","266f296e60407a1c2c5ba115201b0e74"],["/categories/技术/page/2/index.html","5e9a70b7bf51a15c30c76c61cc8d49d2"],["/categories/技术/page/3/index.html","9bcbd63ed57371462445775c11e78a0d"],["/categories/资源/index.html","f63a88483548005ecf7f4a689664b6ce"],["/categories/转载/index.html","429657b7ba68cfe292fd3c0f1cb9fa50"],["/categories/随想/index.html","71b2e7324dca12a941ea2080a408d639"],["/comment/index.html","55d36a2d693b32810f435b5624805424"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","71cebc0cd666f182f1ab1dbe4a9f15c1"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","ee18cd907c37f0971146c2648da3e1b9"],["/css/style.min.css","2a08992ea2f9646c8f6f476fd81a59d8"],["/css/tags.css","eba03aebbf2f44113682d0ca1e19fcbb"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","172214754942c2c76515d478f511a2f0"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","8cef803e424a7a78dc72ed2be40c378a"],["/index.html","1e20bf02d694f9f60189c6650a37f854"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/js/lib.min.js","65f02458a8e38579dac5594f252bd66f"],["/js/sakura-app.js","f1afa64bc2698ed86b55ab396a0c7ac3"],["/js/sakura-app.min.js","115ca9549a404cd11acd81cd31abe374"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","c757e76be80d1da11f5c02c68665312c"],["/js/wrapImage.js","5453d431d3342b41980220d8798c6749"],["/js/wrapImage.min.js","8c5f0ea74a2afd8a01006b7024d13735"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","193432e05dcce25f2cb8d5b58ee66402"],["/links/index.html","27f6c93667eb4727779609d079156250"],["/music/index.html","968311b07b982c4e464a99634453deca"],["/page/2/index.html","0d0192138c439757981bc8f72e9961e0"],["/page/3/index.html","3668f91e19dce2ce2396e4b9ca4c56c4"],["/page/4/index.html","c01bca94d7f6e8757d8391dab7983df5"],["/rss/index.html","75f7f91ed601280d78b36208f88d598c"],["/sw-register.js","fb2cdbf9a2edc3ecee11d77bca1a6656"],["/tags/408/index.html","9022244c60a19f13406502617e5c83f7"],["/tags/Adobe/index.html","6260e222e8744654201347decf40253f"],["/tags/C-C/index.html","a98d991babf9439aa82fa5debba73a55"],["/tags/C-CPP/index.html","96b7af1df72f8411c9440ae0fa41fbcb"],["/tags/C/index.html","3659c4916c762028967f9f884e25d9bd"],["/tags/CPP/index.html","0e820a7c222dbf65dca869e7a69aa943"],["/tags/CSS/index.html","4f3ebd2fe4245a7d0570ad4a5ec5543b"],["/tags/CodeForces/index.html","f0d15e52c969057401ba064f58238334"],["/tags/Color/index.html","576f29c70fb132a6516a636fe75c0129"],["/tags/C语言/index.html","9c023ba635de65d3cf5a34f399005e07"],["/tags/Dinic/index.html","406be4231e054d833cd0534ecb712502"],["/tags/Div-2/index.html","678f00f2e80f6e57ae2dbb10d1bcac4a"],["/tags/JDK/index.html","7006ec5fcab0d079a8e14a4e3d38f237"],["/tags/Java/index.html","4d00b5136efd688b1dab4c282d4382be"],["/tags/JavaScript/index.html","a1f4302c14047ef7dd3b489b6981164d"],["/tags/LeetCode/index.html","1f13b6823f1f7f88d4e0953cb3d75884"],["/tags/Linux/index.html","2f67fba73cbccc1815088f5501fadf32"],["/tags/MSYS2/index.html","e931502e43aaab64adef252ebe5d9b86"],["/tags/Note/index.html","346d82d078348810aa7e70a3261f0cbd"],["/tags/PS/index.html","a61828b9c411a54ce1124be3797ef679"],["/tags/PrintStream/index.html","5985a5e05660e30fbc4b6e10aaba246c"],["/tags/Rocket-Loader/index.html","7949060d0b7c189ec93dfe7a8cf2ecea"],["/tags/STL/index.html","38592dc34bf642d1717aabd6101d2d31"],["/tags/Scoop/index.html","46cc75783e9a757d81a856b878e0dd24"],["/tags/Software/index.html","bca17d7365d03bab74d5c1dd82ba9d76"],["/tags/Swing/index.html","287da169c150f4500275a16df9a8a8a8"],["/tags/Tomcat/index.html","a520c570970e67da32aad1f9293ef0a1"],["/tags/UTF-8/index.html","c651d23e3733fd60c63e9e2dbbf2241e"],["/tags/VSCode/index.html","cc2d70e351a5ed5c47a53742846b6260"],["/tags/Web/index.html","fcea4c74aed17c09769b6403519c59ff"],["/tags/blog/index.html","c4eb9d8d938c8c931fb7af70ef5253b6"],["/tags/builtin/index.html","f5d264b415415762773d1a2e272f2ea4"],["/tags/cloudflare/index.html","8374f47e183c695522aebe9ea48a4177"],["/tags/index.html","4ef624f041c60896b6909894b2a8d0d6"],["/tags/tools/index.html","22bea4ddd92a784ab6122bdc07c5590b"],["/tags/vue/index.html","7a79cae6e147e40f2ff21c76c220d631"],["/tags/乱码/index.html","a63676a127ff84984bad5569a7499576"],["/tags/二分套二分/index.html","73c077710b47eb77ee17e1aa833d0c08"],["/tags/划水/index.html","22aae4eda77bb2b0521fa05551506ec0"],["/tags/包管理器/index.html","cd0aa87831ac2becb1cc14c31d4b9b8b"],["/tags/图论/index.html","1d04f3870b453f518d64510fb988926f"],["/tags/字符集/index.html","d7234c67c1d447b525af0e4732159422"],["/tags/应用/index.html","30053948e9c1c471df29d7c0977232fe"],["/tags/悦读/index.html","d08f8777ede0302079ba56690897808d"],["/tags/操作系统/index.html","1515ff4104ff5701ba481bb8749affda"],["/tags/数据结构/index.html","b772706ece4f0f5ba2870260bb23b065"],["/tags/数据结构与算法/index.html","49b73c5fbdeb56764c7f032652cd63d1"],["/tags/新年/index.html","0bacb8383bda3b3925ceedee729cda75"],["/tags/杂谈/index.html","b5f81c84a1f6fbca1ddd4045b7ec6768"],["/tags/深搜/index.html","4fcf598cf5d0936cdbac5831b101fd98"],["/tags/笔记/index.html","457c1d79369eac2778e1913b9abf90dd"],["/tags/算法/index.html","bb5b02c24055136f6b4cdcb9d0a401c8"],["/tags/线段树/index.html","1ac3851fb6c15cf4cbab117c0dd48c4c"],["/tags/编码/index.html","e1cb7707d8a97ba6f5dedb0966387a1c"],["/tags/编程技巧/index.html","c48571e75d4a11fd3351abf4ce6bb2b5"],["/tags/网络流/index.html","b45938ea492c835b4605a587b1a31176"],["/tags/萌新/index.html","f83e567391fe06b1af3dc78e94501ea1"],["/tags/计算几何/index.html","4182cbb1ec934274231c21073093c723"],["/tags/计算机组成原理/index.html","e10d2409bb3a1ed1fc80ec0b8ca98373"],["/tags/计算机网络/index.html","0cf7cad66e8538770af3c67d7fe93f58"],["/tags/质数筛/index.html","45da275128d7b1cddb549e4fc73b8a71"],["/tags/软件/index.html","2c0adbf970e2823fd5a7fab07446997c"],["/tags/输出流/index.html","9e9e9c451b57ba3a0822f832bd530a85"],["/tags/镜像源/index.html","f84cc4ffae88831d54a18fc4726dde9b"],["/tags/随机增量法/index.html","9ebeca41a69172dd8de3ec5f46b16df8"],["/tags/题解/index.html","8f22d45f7b64c4212223d5540af29493"],["/theme-sakura/index.html","9011d2c98cb22c2870eb9a8eae84bc70"],["/video/index.html","19d736a33546013b6a01e3d8f4953ba4"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-brands-400.woff2","8b0ddedbb27cbc9971c8667caa8a0cc1"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-regular-400.woff2","61f30b79daf5b31f0d254a31fba66158"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-solid-900.woff2","c64278386c2bbb5e293e11b94ca2f6d1"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"],["/webfonts/fa-v4compatibility.woff2","4bc58bc16bb05a05d3a47a4f7e143b75"]];
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
