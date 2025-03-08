/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","99f9c261ed557b7c3ecd1ddd3a7cec25"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","386eae737f59866b969a15c7b6d9c106"],["/2023/02/06/C语言链表/index.html","790e245a1ae7c7e6de7eb5ff0b3ceaf6"],["/2023/02/06/书籍资源/index.html","ec96eb39fde2a3696a827b26baa5c196"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","6e763f1f13939bab8ebca7fbe74703dc"],["/2023/02/07/为水而水（笑/index.html","c2298a8281c25163557768d2a98c02d8"],["/2023/02/08/洛谷主页源码/index.html","390713129c32b99f8b1d56458db04fc1"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","c03166ac05c2396e5cd57b68b699deeb"],["/2023/03/09/Web前端笔记-Emmet/index.html","a9f48471559f4ab67fc7c61bcfd4764b"],["/2023/03/23/gitalk-评论/index.html","62ae32304f56908ebb881f95cc31cc63"],["/2023/04/10/用C语言实现字符串全排列/index.html","b31f41e4211adeee5c881aa8b1ebb670"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","9bb73180c7df1f2c74b313032321585b"],["/2023/05/15/C语言基础排序-demo/index.html","3f57cf8af93dbd954e1be169d7f0d219"],["/2023/06/14/闲着没事干/index.html","e99f4c2bc59c500acb2c2855be492dcd"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","0faf25ae6c940dac676d1defce219440"],["/2023/08/01/javase-note/index.html","3178c19d4bd6264ab21da39b7228f60d"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","c183efd845b3ec89f7825f5d085f6fc6"],["/2023/09/14/vue-pure-admin/index.html","aba6becb3c534170a9fb53b252004351"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","80350ed38c3eefd6a4d8ac8eec0ad127"],["/2023/11/28/C-CPP-the-memset-function/index.html","2577635ed10019972e0d7d4d8bdfb226"],["/2023/12/13/javaSwing-DynamicClock/index.html","9c259c3f8eff1b1efd159f649c9a7124"],["/2024/01/24/builtin-系列函数/index.html","bdbf2869fc4a24bd5eee8f0b283885c5"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","c56bd165c3832d7a79828e7c9bd37118"],["/2024/02/09/新年快乐/index.html","cafc70d18616a1d23240433afa4bf8dd"],["/2024/03/26/408-route/index.html","dd79e97434da671b585afc61f30b2ba0"],["/2024/04/07/转载-线段树专题-xyw813/index.html","28901a714131859e1987ff1c20db273d"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","3bbf759a6279ee054114266b513ca1e2"],["/2024/05/03/Adobe-PS-2024-软件分享-torrent/index.html","d58e608c3cce722a7dde1dfc3d1b8e20"],["/2024/05/06/cloudflare-display-issue/index.html","14e0543068531b8adfb63b67eb2bf843"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","3c5db727ea29fb03ad537c893afff1fa"],["/2024/06/18/P3517-POI2011-WYK-Plot/index.html","2fc807e6a000c9072fa4b35385f2721a"],["/2024/06/25/open-source-LinuxMirrors/index.html","f3ad40b2635611db424c4749ece4d8b9"],["/2024/09/02/Dinic-and-LuoGu-P1343/index.html","ff9b4a15dc9ced63a6233826ce05ff6c"],["/2024/10/08/黑题记录-2D-Geometry-110-in-1/index.html","20d48d14a21f72dec15327c90b265a1b"],["/2024/10/11/常用STL算法库/index.html","698e8d824f8a09453dc654866742da09"],["/2024/11/28/在-Java-中设置输出流的字符集/index.html","ce4b9fddb55c265acf4cb1106b1b85ed"],["/2024/12/05/JDK-18-以上使用标准输出流中文输出乱码问题/index.html","b2e4777104720829b85b1167b743b587"],["/2024/12/09/Codeforces-Round-992-Div-2-解题报告/index.html","87430452c4c45cf36ce600c263e70e76"],["/2024/12/17/Where-are-those-algorithms/index.html","a15b271e3e80bbe134e3064d596e7030"],["/2024/12/26/重构评论系统/index.html","e4b1c8332340f359d1a0ca860e17de03"],["/2025/03/08/follow/index.html","748eec65904c65d54404b342a8623d9a"],["/404.html","7b7c2b12ef5e2b95eda92262d85e6cd6"],["/about/index.html","e9fc2b363d2ab5d561a81bb0b01edc0f"],["/archives/2023/02/index.html","a62018fb8d8d7053e822bfabd5430b6a"],["/archives/2023/03/index.html","e2ecfcee8877102fae69964d00d11d86"],["/archives/2023/04/index.html","185de235a5e8f997c104b5907dee2644"],["/archives/2023/05/index.html","812e85be7293370e292fae0fbd8e48c5"],["/archives/2023/06/index.html","a8130649155f143805070a5b21017163"],["/archives/2023/08/index.html","d40bc5ae11e298ea68154d458b176830"],["/archives/2023/09/index.html","8ab12081839a16ada7f10d87055bf574"],["/archives/2023/10/index.html","5a4171e4582c13552f2c2e3bea666d09"],["/archives/2023/11/index.html","d51c9765269f4532235c7f252a4dbb61"],["/archives/2023/12/index.html","641e1ee8d5d8374998ac2f827de9e7f6"],["/archives/2023/index.html","4780258a4ccde6fba0e7d7275d649743"],["/archives/2023/page/2/index.html","4780258a4ccde6fba0e7d7275d649743"],["/archives/2023/page/3/index.html","4780258a4ccde6fba0e7d7275d649743"],["/archives/2024/01/index.html","07ed314533bb08df2e446a617b4363f5"],["/archives/2024/02/index.html","d3452c14421d0bc69bcf7e615bc975d6"],["/archives/2024/03/index.html","7be883c98425541ea2a4be6c668630c0"],["/archives/2024/04/index.html","29c45505029b6ddfac65fb311efdd6ea"],["/archives/2024/05/index.html","d6d5b07818af54821f74d988cf84ef45"],["/archives/2024/06/index.html","0deea587bca610a93743ce94ad54da7c"],["/archives/2024/09/index.html","526ecc94292ccda58eb998cd5044158a"],["/archives/2024/10/index.html","9efa878be8100511bc92ce24a47cbad7"],["/archives/2024/11/index.html","f75827f17b5eff96ae75f817c1e75372"],["/archives/2024/12/index.html","7115afe4e01786bda23a862489e8dc64"],["/archives/2024/index.html","9268c9078360fc335320e4e3380d88ce"],["/archives/2024/page/2/index.html","9268c9078360fc335320e4e3380d88ce"],["/archives/2025/03/index.html","0078191014b59f465e4742951d22c62c"],["/archives/2025/index.html","d90816e60911a133f9ae49f255018ad6"],["/archives/index.html","f3bdf8f7c90eadf96c52666eddad3df5"],["/archives/page/2/index.html","f3bdf8f7c90eadf96c52666eddad3df5"],["/archives/page/3/index.html","f3bdf8f7c90eadf96c52666eddad3df5"],["/archives/page/4/index.html","f3bdf8f7c90eadf96c52666eddad3df5"],["/archives/page/5/index.html","f3bdf8f7c90eadf96c52666eddad3df5"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","b4ee85535044434b66b61211d924d59a"],["/categories/技术/index.html","e273c7e0ac7fad67639a966f8bdbab1d"],["/categories/技术/page/2/index.html","08dc5536a2e1f6a3e6aa5fbe7b5ebd03"],["/categories/技术/page/3/index.html","5fdc1eb01ce78357f176d46fe565cfd4"],["/categories/资源/index.html","7d73e855041a1f876c89c2a740db7cb1"],["/categories/转载/index.html","0e0f6f13c3d6358df3cbf96f47eaf4ba"],["/categories/随想/index.html","e2c1feda8ef7821274ad78d5eaee93e0"],["/comment/index.html","8357858b909c22acead567369bd0d660"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","71cebc0cd666f182f1ab1dbe4a9f15c1"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","2fee6f3b0b16c3663f93f8e9c193d256"],["/css/style.min.css","5c69036f827bff149d075d5f26850d2b"],["/css/tags.css","eba03aebbf2f44113682d0ca1e19fcbb"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","03ec2f538beef2d55a76adb7b97a142a"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","a2a45e0851c3c49f57123e67a7ec0ffa"],["/index.html","29256796488d42d15a0de56e847bd3f7"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/js/lib.min.js","65f02458a8e38579dac5594f252bd66f"],["/js/sakura-app.js","f1afa64bc2698ed86b55ab396a0c7ac3"],["/js/sakura-app.min.js","115ca9549a404cd11acd81cd31abe374"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","c757e76be80d1da11f5c02c68665312c"],["/js/wrapImage.js","29007a235330279921b40783f3752c1c"],["/js/wrapImage.min.js","fa46e73ad4d52096338f455d716a71a2"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","eebb0246cf43661764316bce470f48e0"],["/links/index.html","41c2ba539cf68290083394ce4184c386"],["/music/index.html","ad7081b6795c91cffadcfc720d7d8f2a"],["/page/2/index.html","3b9e066c430655d87c163f34d2634a1e"],["/page/3/index.html","e243a96371a3efa610d7664bb6900a98"],["/page/4/index.html","1f88992f89d959feaed7131c73becec6"],["/page/5/index.html","6403febf96bd45199df06f8655039066"],["/rss/index.html","1ea0dbc73da0dd856732ef6441b30118"],["/sw-register.js","0b372b39b2a7f2f54a5b691bd8cc94b9"],["/tags/408/index.html","b330e6af92c6503b579bbf34f88f38a9"],["/tags/Adobe/index.html","77cd394d4eea404dfcc1971d1d2e1158"],["/tags/C-C/index.html","d7d42eafbec61315183c04dd42f2960c"],["/tags/C-CPP/index.html","689f8c36266d39a602437c22001782b3"],["/tags/C/index.html","18d7f54e9ea5541832f09bc22b586e2b"],["/tags/CPP/index.html","ed0953908c1adf8edd5eb353d5bac3ab"],["/tags/CSS/index.html","b40e62618b65b5edb27a4a8cfdcf0adc"],["/tags/CodeForces/index.html","464f777acbcc7a5cf50fcf024f76d832"],["/tags/Color/index.html","6f7c895eaf3d466621938a6c11fa13e6"],["/tags/Comment/index.html","4c59eba89949b8b664a82a90090b6975"],["/tags/C语言/index.html","12cd4465d941fc10383401fd28dd68b8"],["/tags/Dinic/index.html","320831cc377299b4689d470f0464ed09"],["/tags/Div-2/index.html","3cc922411cc28a0a576e8beeeea0a192"],["/tags/JDK/index.html","2d61528703e6c4fea88f567a8ee03ecf"],["/tags/Java/index.html","c56fb9d0f3bfb78c89e513d909be5479"],["/tags/JavaScript/index.html","72df87e7ed2f9a12876a560ce652ae43"],["/tags/LeetCode/index.html","1194da2a5447dd4d6706c8601e773bcd"],["/tags/Linux/index.html","1829765771331687484aab6c33b20789"],["/tags/MSYS2/index.html","10fe35b240db7727f764187ec224da88"],["/tags/Note/index.html","9c55d089042d3a820f8eb99b96642f0a"],["/tags/PS/index.html","fe0e2431503fdab07f4a0fe587f9c664"],["/tags/PrintStream/index.html","a6424a512ace1512e3e318be6145d15f"],["/tags/Rocket-Loader/index.html","38e2ebacb924716230792f170edeccfb"],["/tags/STL/index.html","9033d88bb9c1f52b177ab4078126934e"],["/tags/Scoop/index.html","c62be2d5e9da05a9987f8b593edf9cc1"],["/tags/Software/index.html","c65d9f23c57ade45693cae7b8c354de6"],["/tags/Swing/index.html","a2ae633c38898649551e3e87df6ac260"],["/tags/Tomcat/index.html","0d1354ee6b2d64c1401bef3b5c49d452"],["/tags/UTF-8/index.html","123718a0e5fcc64731d49852c5843099"],["/tags/VSCode/index.html","5868aff54257745c9c9d00481e691d14"],["/tags/blog/index.html","4999563bd64b90bf0ced1b644a2c4581"],["/tags/builtin/index.html","5b5c5533a4eeb29a29b62cb67915643d"],["/tags/cloudflare/index.html","b0ab34ca0af6a4f30810b86b40cc6517"],["/tags/giscus/index.html","8c2eeee380e1f416e2efde847cfbad9d"],["/tags/gitalk/index.html","6f16db313ecb48f9ff17aaf28374667a"],["/tags/index.html","be3fa638f48231a2ecabf15f73a1d8e0"],["/tags/tools/index.html","5f5835f0c8f6c04030f747203945a6e9"],["/tags/utteranc/index.html","32da06346757e652ba636d3ba1a66b0d"],["/tags/vue/index.html","40f252745d7fc3559aaf3c534bd9f96e"],["/tags/web/index.html","fef3b16bfcccae6e126bad45f4cf455a"],["/tags/乱码/index.html","edfdc585e64505aa33f98b8cf4659699"],["/tags/二分套二分/index.html","a114093d4c21efd398becc11a0208fe3"],["/tags/划水/index.html","0299ebeb3e1f0d372fc4f9507d84f6b2"],["/tags/包管理器/index.html","0dbc3ceb7fa7ee582f1b1c50a8794cb1"],["/tags/图论/index.html","122cd4cdc6bff62712be3485f9895c9b"],["/tags/字符集/index.html","3289f735395807309baac106c4b97f8c"],["/tags/应用/index.html","1f10f4316feb7d52b281b43493d5f630"],["/tags/悦读/index.html","7398bfc8a31062c445c42c5179a76233"],["/tags/操作系统/index.html","d9acaf37107c2326d73b88db9c9f6cb3"],["/tags/数据结构/index.html","10e51dd8be1f7fdd615fd5efd466c48d"],["/tags/数据结构与算法/index.html","f20f830f65de9e1eb20e64ba43586375"],["/tags/新年/index.html","c0daf5d4b2e0be084c5ac6e68ffef1a6"],["/tags/杂谈/index.html","edf97073ba0780b2bb8df96c9081eff2"],["/tags/深搜/index.html","8efa3f7e634e34bd04908a525be08a01"],["/tags/笔记/index.html","7f76e179b81258fcb5d777aefd604257"],["/tags/算法/index.html","34335ed69d10d314f6130ebaa09e9838"],["/tags/线段树/index.html","2c74b750a11a1460e0e41d36a854aa3e"],["/tags/编码/index.html","436d1db07be149c356eb5d3e495cb2ae"],["/tags/编程技巧/index.html","399f05b6a9b7e174993438297e8ff076"],["/tags/网络流/index.html","19c0e93b532b88bc97b10ed1d7c72f0a"],["/tags/萌新/index.html","c92f8002fc9a9bad15015a452adba175"],["/tags/计算几何/index.html","be638dfa3fb5a31c115d3c8163a92614"],["/tags/计算机组成原理/index.html","19ddec695230a116424853269b3e5ead"],["/tags/计算机网络/index.html","ba1c1303cccdaf20cbd18745de7c73e4"],["/tags/质数筛/index.html","f9a034e0ae5b67eaf2a0c51f0ae9f4ad"],["/tags/软件/index.html","7b6e4e77d45dcf2ce9c46e4b53174511"],["/tags/输出流/index.html","b1f982ad1b69366410dc2b5331508f57"],["/tags/镜像源/index.html","6024fba2d0d9a2dcf9c268fa3e426f1c"],["/tags/随机增量法/index.html","d5649baeaef2d23ed226915fa0700dce"],["/tags/题解/index.html","87c39dcf76d1d1348823543946186ec1"],["/theme-sakura/index.html","859b571d4fb300d2357226570d688397"],["/video/index.html","27016687dcdb7174a477eb0cc64fe21d"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-brands-400.woff2","8b0ddedbb27cbc9971c8667caa8a0cc1"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-regular-400.woff2","61f30b79daf5b31f0d254a31fba66158"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-solid-900.woff2","c64278386c2bbb5e293e11b94ca2f6d1"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"],["/webfonts/fa-v4compatibility.woff2","4bc58bc16bb05a05d3a47a4f7e143b75"]];
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
