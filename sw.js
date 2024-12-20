/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","984928bfe540fc6f020b9cc4b328bace"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","6a45385b68fd1d414a149a6e272edfa5"],["/2023/02/06/C语言链表/index.html","dc8fd643f024053f7bc76f67b4690008"],["/2023/02/06/书籍资源/index.html","2f49607eb3f4459ce0ea637c2e5442a2"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","7416700b3674b1b62f114da35857a923"],["/2023/02/07/为水而水（笑/index.html","5758ccb7f7dc15d5c7481e71e78d7a92"],["/2023/02/08/洛谷主页源码/index.html","52a1f85e5bafeb7ea63ed8bd5f47dec1"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","241a8483c92950d12147f13e6d9f842a"],["/2023/03/09/Web前端笔记-Emmet/index.html","00b5f4a6ca69a033cabad06590203d13"],["/2023/03/23/gitalk-评论/index.html","54c41a82252e8ef162c2b8779995769f"],["/2023/04/10/用C语言实现字符串全排列/index.html","d72afffa7db8f8e204d98476559e1361"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","b581e08765c5086549d1072384a70c54"],["/2023/05/15/C语言基础排序-demo/index.html","ca1fb8b331cc381c632b332b3f2104bc"],["/2023/06/14/闲着没事干/index.html","cf61cd3181722db47d54409e3b6c690c"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","f4c75d8eb3aa9f0ba3f41604e0bfa1ec"],["/2023/08/01/javase-note/index.html","cb88e005e0c42e8aab85e438ce967ac0"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","86e1dfa289531e22a0aeaf9dcded07e1"],["/2023/09/14/vue-pure-admin/index.html","23ffd47c9017ffb0b92f8c30131b6414"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","df6349f6ea676a8ec7164f44ec1e6157"],["/2023/11/28/C-CPP-the-memset-function/index.html","f0fbc6d40fbc231d68b2b719297b258c"],["/2023/12/13/javaSwing-DynamicClock/index.html","6aa6816caa11ac52260f93b5fc25fddc"],["/2024/01/24/builtin-系列函数/index.html","75137413088740d4010cd305193616da"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","ef9502c25ce988220d7944fdc97f351a"],["/2024/02/09/新年快乐/index.html","7eabd4167a5dfcde618ea67a7930b9d5"],["/2024/03/26/408-route/index.html","d27456ed34b70d6cacd3cd0fb9cce37d"],["/2024/04/07/转载-线段树专题-xyw813/index.html","d210fb16ac601bea3e88fe8aef123505"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","9fcfbd4f1fcc857374355511a672cdd2"],["/2024/05/03/Adobe-PS-2024-软件分享-torrent/index.html","155a3938019fb9814008e72f46c86dff"],["/2024/05/06/cloudflare-display-issue/index.html","dd14456f6e26f6746a69191c94bbc7dd"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","387dadf40afddbab1e23760fca7ee381"],["/2024/06/18/P3517-POI2011-WYK-Plot/index.html","4a2fdfa7ba224d7bff53a9e5d2116d5f"],["/2024/06/25/open-source-LinuxMirrors/index.html","475d59fe051ef64cfba1e60367875498"],["/2024/09/02/Dinic-and-LuoGu-P1343/index.html","3faf56af6ebc66b6861274c3742f7386"],["/2024/10/08/黑题记录-2D-Geometry-110-in-1/index.html","263454b7673baa6106d0a94711f4bf91"],["/2024/10/11/常用STL算法库/index.html","a1c02d2ee9c6621df01336882e1e0413"],["/2024/11/28/在-Java-中设置输出流的字符集/index.html","76328f811bacc797d8e9e3ce97053525"],["/2024/12/05/JDK-18-以上使用标准输出流中文输出乱码问题/index.html","2e89a9d3e57445fe236aab80f516f8ee"],["/2024/12/09/Codeforces-Round-992-Div-2-解题报告/index.html","39f4559001fa145abe4d2760e5bfda13"],["/2024/12/17/Where-are-those-algorithms/index.html","30c9bbc27c7525cc9b5824f932608c77"],["/404.html","7b7c2b12ef5e2b95eda92262d85e6cd6"],["/about/index.html","ed2282be080207cf75d2b286f9eb782b"],["/archives/2023/02/index.html","f495fed272d2247582169f0d57dfec9d"],["/archives/2023/03/index.html","e1af8e2cb7d655d009ff51cc4106a5d1"],["/archives/2023/04/index.html","8b2acdc6ed2b14b53396803dde0b5180"],["/archives/2023/05/index.html","07ae57222b40d02d3870b852346ddb47"],["/archives/2023/06/index.html","8357052e9a24181d510572f15a58725e"],["/archives/2023/08/index.html","d903844ad1a3c776ac03723f0a2ec974"],["/archives/2023/09/index.html","af6ae68fabf362296bbff338569c79cf"],["/archives/2023/10/index.html","920d65669579361f4f9d452837083054"],["/archives/2023/11/index.html","b4fca16a8a48d1511857b258c05e0b8b"],["/archives/2023/12/index.html","9ebb04ec5640304c1f9df76254bf97f3"],["/archives/2023/index.html","e3ea7aa0dea240a9260e37ef3864239d"],["/archives/2023/page/2/index.html","e3ea7aa0dea240a9260e37ef3864239d"],["/archives/2023/page/3/index.html","e3ea7aa0dea240a9260e37ef3864239d"],["/archives/2024/01/index.html","4b2fce2d929eb486c4d8124254ba198f"],["/archives/2024/02/index.html","65405381ce8003c930805c3095e3d045"],["/archives/2024/03/index.html","1021b63447656cd68a6109309467b17b"],["/archives/2024/04/index.html","ca7d337a87786b5aa9cd9c1df0557771"],["/archives/2024/05/index.html","dbde700c21a300e51c5dcbf6ff78c663"],["/archives/2024/06/index.html","95f265deab4867cdb5cc73d245dac4e2"],["/archives/2024/09/index.html","2e8a5d6583e2319c355d5e7f097c7aeb"],["/archives/2024/10/index.html","c39d6c74a975dcf941246ff0950399bb"],["/archives/2024/11/index.html","772d2f08d5e90caf6204fdd67625e651"],["/archives/2024/12/index.html","8e42757e236366f55ea28375ce2ef166"],["/archives/2024/index.html","51b7d8dccf29561bf570449d144d72d9"],["/archives/2024/page/2/index.html","51b7d8dccf29561bf570449d144d72d9"],["/archives/index.html","6c91b86a555ee3cd8d61852b9cec17e9"],["/archives/page/2/index.html","6c91b86a555ee3cd8d61852b9cec17e9"],["/archives/page/3/index.html","6c91b86a555ee3cd8d61852b9cec17e9"],["/archives/page/4/index.html","6c91b86a555ee3cd8d61852b9cec17e9"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","7ad3769dfb653a7a01ded1a12508b543"],["/categories/技术/index.html","73b9cd05b62f421eacd105145f1718ee"],["/categories/技术/page/2/index.html","6e40c594f084fc8f20fa566201dbe529"],["/categories/技术/page/3/index.html","bb0a2c4ee8ab9116fe2d632018fa6eea"],["/categories/资源/index.html","dd2edd266d5c59eeff580997ac3387c5"],["/categories/转载/index.html","a5336b8f87a17d8742b267b2ca111b6d"],["/categories/随想/index.html","97b52a0255211ac2425b7b8810d1f611"],["/comment/index.html","8034c62773ebf9be23ff013a0605709a"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","71cebc0cd666f182f1ab1dbe4a9f15c1"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","ee18cd907c37f0971146c2648da3e1b9"],["/css/style.min.css","2a08992ea2f9646c8f6f476fd81a59d8"],["/css/tags.css","eba03aebbf2f44113682d0ca1e19fcbb"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","5d8e3a53ec3a9023888775435ad0dd65"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","266b2f8d577c2940e05535d8c334acfc"],["/index.html","9010d79e4549e4b9b3f86df469e7ebf2"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/js/lib.min.js","65f02458a8e38579dac5594f252bd66f"],["/js/sakura-app.js","07d7135980aa3c06d16f5c57897435fb"],["/js/sakura-app.min.js","6465a294a95d0fb0863be1b62785c2f8"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","c757e76be80d1da11f5c02c68665312c"],["/js/wrapImage.js","ea7e88047de2088472a23789680071a4"],["/js/wrapImage.min.js","78c8f9e1510b68978f34fdcfbab9623e"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","0b30f5701b97bba4e009849334d04127"],["/links/index.html","73067beabe1cf9cca1c28c9a6f708b30"],["/music/index.html","4ba5192f222cb59e189ed23a230ba38f"],["/page/2/index.html","9e3a52d47d13c9df3a3be1e1685004b7"],["/page/3/index.html","862b17eeff1082175f86ee9a55cad648"],["/page/4/index.html","8ca7e7b7f357462ad2eec2034a8a9b79"],["/rss/index.html","e417a9d076fcb89c88eb5c1348fd8dee"],["/sw-register.js","5949183a601820e6a5ba1d03d0b00e2b"],["/tags/408/index.html","d5a2831f84dfe792a87fe52bf4ff881d"],["/tags/Adobe/index.html","7777af930a99d3b1d0934f68b75f7174"],["/tags/C-C/index.html","a1ab61dfa83a88efa8b79ee8510adaa9"],["/tags/C-CPP/index.html","458f8d1839da91e193e642d07e32dd77"],["/tags/C/index.html","89ab1d5b7c5157f1dc388de96d04cebb"],["/tags/CPP/index.html","cc1df65a5707b6e1e9c063e8341f4d05"],["/tags/CSS/index.html","fb24520c39b3f2336b80661a63594177"],["/tags/CodeForces/index.html","425dbf609c4994efdb831c0e3a34e8c6"],["/tags/Color/index.html","0707c7cc9d20354c455327f320a97a12"],["/tags/C语言/index.html","e5d5ff5637f39a97695416c68955f2d2"],["/tags/Dinic/index.html","b00e091c936a6f6f58dee9c2d88cf982"],["/tags/Div-2/index.html","e4fdbac899f5cdb1a5cad4334d0944e8"],["/tags/JDK/index.html","5f255d2c433dfea8b6b5f4c5c7c50a19"],["/tags/Java/index.html","0f81667dad43843f7ba3e408da8ee947"],["/tags/JavaScript/index.html","8d0e741c201721b0c9d7bef4a3b456f0"],["/tags/LeetCode/index.html","b51645bb7c0c94486389d1880b766e10"],["/tags/Linux/index.html","48a4a74707eb977ccc1a637ed185372b"],["/tags/MSYS2/index.html","5c414a23a181659e37ccb1712788074e"],["/tags/Note/index.html","7ebb11cf55939616aac0e4120823d092"],["/tags/PS/index.html","a83347be76f3044eb9c9eb133eaa6fbc"],["/tags/PrintStream/index.html","7379c71eb58c94129b3f0b7e54352fd5"],["/tags/Rocket-Loader/index.html","d99dad95e0751fc02ff660fc7b60aa29"],["/tags/STL/index.html","89e85e8356e78d5459872de3864e1475"],["/tags/Scoop/index.html","a7f2b84c0e96fb01c5248743fc6c834f"],["/tags/Software/index.html","4b7869c0b79bfa3afc5f142efe1c42a3"],["/tags/Swing/index.html","cb7c9bef4121caab0d73d04c7ba14516"],["/tags/Tomcat/index.html","8639977ad50ff9e920086a52e12c6389"],["/tags/UTF-8/index.html","132827bc5122af8255aed36565e2944b"],["/tags/VSCode/index.html","801df3f8f964b3cc6840cc481f110084"],["/tags/blog/index.html","b50e663210ce24cfafccc143484a8a8f"],["/tags/builtin/index.html","30193c083c64355c9a744f30615171b3"],["/tags/cloudflare/index.html","f968493c651e11e102b33cfbd46232dc"],["/tags/index.html","4609284d643994314d1ac6a2a662e893"],["/tags/tools/index.html","5efc1789771c84abd18d6e7fc2e1f19b"],["/tags/vue/index.html","9abaec41d5a84f77b453dc1ec3c96519"],["/tags/web/index.html","523e5b6503d6ed0b2f453a58d1a65fba"],["/tags/乱码/index.html","adfb158b114fdbb9ef40b2d814300973"],["/tags/二分套二分/index.html","93ea098ee45eefaa9da4f821d9b5711c"],["/tags/划水/index.html","8fa101ab811a6d2e25bb2226614dbf40"],["/tags/包管理器/index.html","6bcbdc8c02200167fb4e6302d751dca4"],["/tags/图论/index.html","7de978a1948854b4fccac1006d9df4b6"],["/tags/字符集/index.html","a9601ec176f2a719fbb453ed5b2eb4ee"],["/tags/应用/index.html","0b255317f3f7d9ac3ec590d3d56c1fe4"],["/tags/悦读/index.html","003a3c251abfb4cd6f2813d4d80b7015"],["/tags/操作系统/index.html","121119186182d6a43e7d07bfce108129"],["/tags/数据结构/index.html","8071c45806a358b27d9f1a7118ee7ed5"],["/tags/数据结构与算法/index.html","4e7c786e35060a6f6fde367ccc29dff8"],["/tags/新年/index.html","6726543b1a66ecec4ec691f11c21ca42"],["/tags/杂谈/index.html","9d8345d404763a193f8de9be5804a4a8"],["/tags/深搜/index.html","7947b5564d32033353e54786c7c0509b"],["/tags/笔记/index.html","ffe7f4916a389912b8bb8960eccc5347"],["/tags/算法/index.html","2ff6e68ad37a89ab0e03ab08470824ed"],["/tags/线段树/index.html","2140b235f74de9709d8f7b25570c4be4"],["/tags/编码/index.html","1b1cf9ac285c61d3be96a3f5bfd2330c"],["/tags/编程技巧/index.html","089a0f057e314f2de16f30cb799112c5"],["/tags/网络流/index.html","73122dd204b53fd05c2c41d1c99d6df9"],["/tags/萌新/index.html","a2e0f04bfe484530e7d5e63efa4e6f40"],["/tags/计算几何/index.html","108673f22f8570441fd4ddc5a72ddefd"],["/tags/计算机组成原理/index.html","159bc8e6b0c2d475094980709bb079aa"],["/tags/计算机网络/index.html","055655d7ef1052e23184756921a981a1"],["/tags/质数筛/index.html","b4ad52e5d1238213d1628c758a1ca60d"],["/tags/软件/index.html","87b5fd5564a4f015e1ce7cfcc0089ff2"],["/tags/输出流/index.html","2b9e0e9f4a2ff29edec172b98052955d"],["/tags/镜像源/index.html","7a222d5d3abb5841a2b94f76eb44e0ad"],["/tags/随机增量法/index.html","d1c1801c1ba38df504f23ab09e95a414"],["/tags/题解/index.html","4547eb90ff9b7d468e4ced6723c0a6c3"],["/theme-sakura/index.html","e51dc2d4c36ffb4e6a8741d5ccb93e6d"],["/video/index.html","39ce6a223df4d3ee8c7ea49801630383"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-brands-400.woff2","8b0ddedbb27cbc9971c8667caa8a0cc1"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-regular-400.woff2","61f30b79daf5b31f0d254a31fba66158"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-solid-900.woff2","c64278386c2bbb5e293e11b94ca2f6d1"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"],["/webfonts/fa-v4compatibility.woff2","4bc58bc16bb05a05d3a47a4f7e143b75"]];
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
