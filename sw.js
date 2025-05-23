/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","800736fe9b0554f557f3a79791318d48"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","61181c696277188448e2f83079abde13"],["/2023/02/06/C语言链表/index.html","a48370591f0ed05adadf9ac7301e5e60"],["/2023/02/06/书籍资源/index.html","0521595faf582a665185b2862fbe07da"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","13d26d0c1dc42ebdf6cd251a85457bc0"],["/2023/02/07/为水而水（笑/index.html","d3c68c480ad814c04223b7d539d59567"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","ce73271f14c8e012908f5eab3921df3a"],["/2023/03/09/Web前端笔记-Emmet/index.html","70b79b5e6c08881bf979eb66cbeb0b15"],["/2023/03/23/gitalk-评论/index.html","c8b2b3b5c259bb63d3d82cfbb5216f2c"],["/2023/04/10/用C语言实现字符串全排列/index.html","d3c4796bac194e678a85670327777eb3"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","a9c54bbb8765de58cd4f3f5f0d77cf12"],["/2023/05/15/C语言基础排序-demo/index.html","7456fd6625aec03222379fa0d553b2c6"],["/2023/06/14/闲着没事干/index.html","3786fd8bce4b2282e71b4f2459fa7f4c"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","8a85bea2a89f9cc6d752e36f9c68b11d"],["/2023/08/01/javase-note/index.html","68a2361aaea82c1654fee398f563e456"],["/2023/09/14/vue-pure-admin/index.html","1024ad4a6b7a178c28699e9650a831c4"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","927f1b43c28b84b2c1134fb82326a9ce"],["/2023/11/28/C-CPP-the-memset-function/index.html","561b0b7755f6a93266fae1a92c746603"],["/2023/12/13/javaSwing-DynamicClock/index.html","e2bfa3d1c450c3add8387f93ccc75fbc"],["/2024/01/24/builtin-系列函数/index.html","e2a42f0a81c766c90f833d8dfb9d4032"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","856831f94f086d507d132d8d9a38fd23"],["/2024/02/09/新年快乐/index.html","56a9afcab931e72bf9e2cff617bf76e8"],["/2024/03/26/408-route/index.html","f689eb0f6087bfa89ea5a5798a0ddcd5"],["/2024/04/07/转载-线段树专题-xyw813/index.html","a9b8cf32c4292c4194cda1dfdd378ef9"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","4fda028d1fbaf078fac27b6952c1cb5f"],["/2024/05/06/cloudflare-display-issue/index.html","ef1f98e63b1dfbb179135771ba5d8039"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","a9f9e78cd9c1323a472b3c7eeb35986a"],["/2024/06/18/POI2011-WYK-Plot-Solved/index.html","1b57c1ff1c397337d3efd94fcedec450"],["/2024/06/25/open-source-LinuxMirrors/index.html","35b3758d80f604e235213a82d1eb5b80"],["/2024/09/02/Dinic-算法/index.html","893b129d3c34ca2b1080c68c52e464f2"],["/2024/10/08/黑题记录-2D-Geometry-110-in-1/index.html","4711f465b6287b9fea87b591e3f12165"],["/2024/10/11/常用STL算法库/index.html","c72c3f8099b088677558ea5421bb24f0"],["/2024/11/28/在-Java-中设置输出流的字符集/index.html","48d5cdef40d99c25338c5133cbe57dba"],["/2024/12/05/JDK-18-以上使用标准输出流中文输出乱码问题/index.html","c5a4c111e77262b113d48a75393a57c7"],["/2024/12/09/Codeforces-Round-992-Div-2-解题报告/index.html","f2d2b37866e715fa14518a01e3f71f0a"],["/2024/12/17/Where-are-those-algorithms/index.html","1781236ab8b1c0c4b97a54e3aaf0c02b"],["/2024/12/26/重构评论系统/index.html","0814ce19ac9a207862723088cbca37a7"],["/2025/03/15/GitHub-Skills/index.html","99688afc2b78470b6cc9b64bb4103b57"],["/2025/03/16/lombok与delombok-在gradle上的配置方法/index.html","953f0a92d6f98b563e280ea8e201aa6b"],["/2025/04/09/Codeforces-Round-1016-Div-3-解题报告/index.html","bf066d4f46569d8a4fbbdf406062740b"],["/404.html","7b7c2b12ef5e2b95eda92262d85e6cd6"],["/about/index.html","9fd268bd1f7a2fad3c1e28ab1ff3b158"],["/archives/2023/02/index.html","fbf1825550330f1db67730483bce7de3"],["/archives/2023/03/index.html","b10920a6c1ab4dcb7f0ca2907ca8ab66"],["/archives/2023/04/index.html","40a3203447c120be01b0f84ff866d1cf"],["/archives/2023/05/index.html","c51a1a15a356973024c42746ddec1a2f"],["/archives/2023/06/index.html","dbcad8e52897833e7f7720977bda18a5"],["/archives/2023/08/index.html","e1c9ace018cc2990b3f1c72996e098b0"],["/archives/2023/09/index.html","9e244846f7177be83940363ff1117c70"],["/archives/2023/10/index.html","6c24feeb6db3989636edfd653e5fa440"],["/archives/2023/11/index.html","ab5c0e001e743ddb3ea2631d13b48f7a"],["/archives/2023/12/index.html","52c3caa5ad410b1031f8688bc414e44e"],["/archives/2023/index.html","e46338adc46834caff7bebc3e72ed692"],["/archives/2023/page/2/index.html","e46338adc46834caff7bebc3e72ed692"],["/archives/2024/01/index.html","585fb201cc0ee258a3c1c9d72087216d"],["/archives/2024/02/index.html","f59440a33d3cae6b4b17e9033645188c"],["/archives/2024/03/index.html","2b3d0668858c647f0faf7f76b502fea7"],["/archives/2024/04/index.html","85d846199d9f016b66e2c81dc99f495b"],["/archives/2024/05/index.html","a11b014e655b27dfab02e7297a32c489"],["/archives/2024/06/index.html","4d7e18ea05a4d164339470501179cc3a"],["/archives/2024/09/index.html","b523902eaec1d500d4821bde0faf84f3"],["/archives/2024/10/index.html","6b9c14ac427faf3e56f87c685bec0ddb"],["/archives/2024/11/index.html","3ffbf7d39b4c784a5b829b5fea598144"],["/archives/2024/12/index.html","88930139e7364126792a7b78e53bf02d"],["/archives/2024/index.html","444187507bf4221de457d3e7b2bcbf4f"],["/archives/2024/page/2/index.html","444187507bf4221de457d3e7b2bcbf4f"],["/archives/2025/03/index.html","2441969c4ddb807086a3a850739e9128"],["/archives/2025/04/index.html","631b5cf022ed9d99a0f5962e4d5b962e"],["/archives/2025/index.html","0c882be4247946b3efca7b5631757ed0"],["/archives/index.html","dbee82575653bc925036aba152009041"],["/archives/page/2/index.html","dbee82575653bc925036aba152009041"],["/archives/page/3/index.html","dbee82575653bc925036aba152009041"],["/archives/page/4/index.html","dbee82575653bc925036aba152009041"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","abc7cfa7c32a491ef17dd4a2a6c136b6"],["/bangumis/index.html","54fbce54a7a40929383f28b3084d5132"],["/categories/技术/index.html","525937279315afce7329e18fbfb8691b"],["/categories/技术/page/2/index.html","54df3b85ab2c991a55d3f960aa44fd19"],["/categories/技术/page/3/index.html","70532656ca6008bb1d886c1c1714de1a"],["/categories/资源/index.html","f6a03ca7c6ed7fbdd013c50df80554f5"],["/categories/转载/index.html","240907f4bc725dd1ad4aee19e0fe929e"],["/categories/随想/index.html","1154a852d9ff0b17837d9a5f79ee9ff1"],["/comment/index.html","4954a03eae8ccda71bdcd145db517515"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/giscus.min.css","96c42b2029f44095aaf46f6dc0628ded"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","71cebc0cd666f182f1ab1dbe4a9f15c1"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","73bb864d038d4bb3d83361b8910786bb"],["/css/style.min.css","45b4cf23f077e45f4776fb3f47a7cdd6"],["/css/tags.css","eba03aebbf2f44113682d0ca1e19fcbb"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","5fd187265165034c3885cfb6f96d02c4"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","33fe80791a92932961caf3a5dd428136"],["/index.html","b9caf5611abe227827aaea6f2cec21c0"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/js/lib.js","65f02458a8e38579dac5594f252bd66f"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","f1afa64bc2698ed86b55ab396a0c7ac3"],["/js/sakura-app.min.js","115ca9549a404cd11acd81cd31abe374"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","c757e76be80d1da11f5c02c68665312c"],["/js/wrapImage.js","29007a235330279921b40783f3752c1c"],["/js/wrapImage.min.js","fa46e73ad4d52096338f455d716a71a2"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","47052733707ec6b067936a521bf489e5"],["/links/index.html","b26eb48095e817ef1d3341c01f7be9d3"],["/music/index.html","34d4b676b3a792b0b76f4673ab484c52"],["/page/2/index.html","1c8291832856ffa4c6cf8bfb8df433a3"],["/page/3/index.html","32b8ab20a152827c8a7f47c544e36525"],["/page/4/index.html","e545a44969509c597194ae8c8f765a06"],["/rss/index.html","80642f8a19e20329822b12feaab7d451"],["/sw-register.js","5d6dac3e6786ca400d519400feedded0"],["/tags/408/index.html","bc1898fa7a8d2973e2c6d29c045b8fa3"],["/tags/C-C/index.html","421275a5eec823feab402e0c1c7a3268"],["/tags/C-CPP/index.html","d51863c2885aa3cfb0ac37402e43d866"],["/tags/C/index.html","67d40d6208d8951929136f3bbe02e77d"],["/tags/CPP/index.html","7a87f5cc6564d91f18d3e7cd4b030a6e"],["/tags/CSS/index.html","a72d82f4615d5404f10f4e84b963d9dd"],["/tags/CodeForces/index.html","8103d6686d99694ec1f3d9821766b53c"],["/tags/Color/index.html","7b8eba3ffe38df6dd2a902f605eccd12"],["/tags/Comment/index.html","8427512eff4f927820dfe0b7759b7dd7"],["/tags/C语言/index.html","f23c10a4b3b15fbf783baeafe9f8b25e"],["/tags/Dinic/index.html","ffba1d7af950bbc67b8ffcafa311b6b6"],["/tags/Div2/index.html","828c6da737a9b40b13133ac92ba63397"],["/tags/Div3/index.html","3d86b414507852e580ae942e458e5423"],["/tags/GitHub-Actions/index.html","267e5e21ecbda62c65a72bfe45c5cf02"],["/tags/GitHub/index.html","56cce8e95199d342cf4af769fe602816"],["/tags/Gradle/index.html","7fab9844c0f21b2dd7d7e35e9830c2ff"],["/tags/JDK/index.html","83d22137fe70bdb5eabefd8216eb7b57"],["/tags/Java/index.html","7f0bd4b201763df5dee2892c23229b42"],["/tags/JavaScript/index.html","70cbf413a5c59af1b81e967726d69d8e"],["/tags/LeetCode/index.html","f5f1c12e63859b5054712e89ed517ea5"],["/tags/Linux/index.html","c327cc5544bcc361623278d167f34dfc"],["/tags/Lombok/index.html","02ead17eb1f3aa866b51260332f01606"],["/tags/MSYS2/index.html","f381e1ec31326b6df95a7d18effc2315"],["/tags/Note/index.html","61520f0b9a2e413618f1d0508082c408"],["/tags/PrintStream/index.html","b19bfef5fc3511645bc4682debcc6b1e"],["/tags/Rocket-Loader/index.html","6e3473cb52aeb218d1c0d9b982bb3a2a"],["/tags/STL/index.html","5128085594c70a71a32e0cb37dd711eb"],["/tags/Scoop/index.html","ef1a8aea90e61002a7b1fbd4616b81b1"],["/tags/Swing/index.html","385ef0b60c140d7aa5717ce6eca36d05"],["/tags/Tomcat/index.html","32814ca15357b3814b1da26dedde53d4"],["/tags/UTF-8/index.html","87fb572cab5959423987bc6dc4e04776"],["/tags/VSCode/index.html","7458eae16398eb1313a7d8c4de3a587f"],["/tags/blog/index.html","3c33f12b6d883824452dded0bf1297d2"],["/tags/builtin/index.html","d54139d4c7ce22673a87e269320ab888"],["/tags/cloudflare/index.html","498a3529de5526649419dc731d975c20"],["/tags/giscus/index.html","6635d9bc93e7859dd6f88132f4c6f22b"],["/tags/gitalk/index.html","c14ce68642561859a57efad06bf2dae6"],["/tags/index.html","02abe2a208050122e6857955b6dc8784"],["/tags/tools/index.html","83efb761c44246d588d70f4e6c0733bd"],["/tags/utteranc/index.html","7b415785d6bb63e6e83459d83bcc3480"],["/tags/vue/index.html","ad92b21066acd81a76da092e0d3d96a3"],["/tags/web/index.html","07b01c27f0295228ca276e94f89674ac"],["/tags/乱码/index.html","1756e9156b9bd21f3db64193f7ab2e4c"],["/tags/二分套二分/index.html","62dc8e5d7d69ad15ce78d51ab7853317"],["/tags/划水/index.html","5838c735f7ff3fc46f6b470542218ecf"],["/tags/包管理器/index.html","e344156a92ff1d8dad9e4aa5ca3dd56a"],["/tags/图论/index.html","55d0e6b8698b2a94d1cc928a87d024c7"],["/tags/字符集/index.html","c7143d2bc7c3feb3eeb688ef73480ed6"],["/tags/应用/index.html","c58d27e4f0d9a6fc905e3e2ed058201b"],["/tags/悦读/index.html","ba90a7c1ce092ec414fc29f135aa922d"],["/tags/操作系统/index.html","b0ba2b4a1529c347d59ae79bbbcc10c5"],["/tags/数据结构/index.html","1f05cb948aa0dc1135289e33ac67fc81"],["/tags/数据结构与算法/index.html","4884bb0dbc163e49fb0eb187df5b04fe"],["/tags/新年/index.html","aa7978c6d81deed0f9e0cd47f74bc4be"],["/tags/杂谈/index.html","d71879ba428e4d674a3267b5f136e9de"],["/tags/笔记/index.html","bbda2e67ea851037495d764869e570a3"],["/tags/算法/index.html","3efeb7b3641d5e60734378ec3a97b71c"],["/tags/线段树/index.html","00a4505f8df2a1c0fdd4c246c5abbdbe"],["/tags/编码/index.html","5293a571ab917348731e07cfffff8102"],["/tags/编程技巧/index.html","f67a8c5e1f89ff2bef464fef035684b5"],["/tags/网络流/index.html","fee9feaedc8a5d9a01a7d60faa2d9a77"],["/tags/萌新/index.html","91eb2ede616854bad3c34ae43d810f1f"],["/tags/计算几何/index.html","8b4c0ebac7c284e6bf3da53a7441eb88"],["/tags/计算机组成原理/index.html","9456cba7b1ed839acc55014831dca7e3"],["/tags/计算机网络/index.html","4cc634e0e45b34c69dd54791e71962f4"],["/tags/课程/index.html","765db4658edd93f91a85b051c6dd4b93"],["/tags/软件/index.html","ec2f7322de4b25fac27942d3512d6861"],["/tags/输出流/index.html","867a8113e4ad71ce5fb59a286a002e4a"],["/tags/镜像源/index.html","b3aa375b3307f4f5f2053e61f1dc0d59"],["/tags/随机增量法/index.html","9837490736b73743e15df785a7443bbf"],["/tags/题解/index.html","5241171544dbfa2da34fb4fcb04fbb60"],["/theme-sakura/index.html","5d0b647d47d1fcb9183cf74e5e4bef9f"],["/video/index.html","39fe0196603b8bbfacf74be8283eff42"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-brands-400.woff2","8b0ddedbb27cbc9971c8667caa8a0cc1"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-regular-400.woff2","61f30b79daf5b31f0d254a31fba66158"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-solid-900.woff2","c64278386c2bbb5e293e11b94ca2f6d1"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"],["/webfonts/fa-v4compatibility.woff2","4bc58bc16bb05a05d3a47a4f7e143b75"]];
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
