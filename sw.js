/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","5b5aa7a18c27584d0cbb8de052ac2141"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","7d2cbd804b03b11171152cf945c5f54a"],["/2023/02/06/C语言链表/index.html","95f36c30de29e2ac4666be3b1534336b"],["/2023/02/06/书籍资源/index.html","0dec710a23af4d99c6c8525c8004d445"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","2ae2f4f6f52975bea8cb93efbf5090b2"],["/2023/02/07/为水而水（笑/index.html","062ce2d7adf702999b3fdf0eabbc3410"],["/2023/02/08/洛谷主页源码/index.html","aceaf0841ac72f8ea5bdb406df6275c1"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","6aff5fcdcc49ce222542e264f0d575ae"],["/2023/03/09/Web前端笔记-Emmet/index.html","5a30b28ff6d1509b7d0f2474fd9fe1e2"],["/2023/03/23/gitalk-评论/index.html","788433b11a8b112f2caf9e1b2b0481e1"],["/2023/04/10/用C语言实现字符串全排列/index.html","33746deff4df6fe30a4777f74df0c9d3"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","6b6303c95c16f33355871241b46eb344"],["/2023/05/15/C语言基础排序-demo/index.html","c00a7b8151b8cb7ab08cc927c416176d"],["/2023/06/14/闲着没事干/index.html","be207a2d67d2d757cf25b6e69f83ef81"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","cf0f5951bbac5aaebe82605203decd40"],["/2023/08/01/javase-note/index.html","f88f233157d514b2753302a0f85f442b"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","ccefeb8e37f218fa611ffee189a39da5"],["/2023/09/14/vue-pure-admin/index.html","57bcbfde218820fd76c2fd8d6f056ff8"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","a36381efb11cfc2dee0cfd260a30a230"],["/2023/11/28/C-CPP-the-memset-function/index.html","66ab93ab724c84d86a42bc49bacc978f"],["/2023/12/13/javaSwing-DynamicClock/index.html","8de3308b698abbb738c3e5ef2daa4aac"],["/2024/01/24/builtin-系列函数/index.html","873b07d92232268ab31414b5fa81b3f0"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","0be162ce6715227759cbb00985ba89fc"],["/2024/02/09/新年快乐/index.html","f29591b9ad2e5f70f1d272ccdc198506"],["/2024/03/26/408-route/index.html","42c7fce93000004835217f79c1e39e3f"],["/2024/04/07/转载-线段树专题-xyw813/index.html","de34fadeb0a921a11e5e250e9674c546"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","456ec966bf8fd538b7564de5862806f9"],["/2024/05/03/Adobe-PS-2024-软件分享-torrent/index.html","5b3972a132f372dff6b053d25f7149b3"],["/2024/05/06/cloudflare-display-issue/index.html","70b7f7a55d2f82813fd3044b8372bdc5"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","936e694925f73e7b6074a30d6b0cf8b1"],["/2024/06/18/P3517-POI2011-WYK-Plot/index.html","00fbfc057f6614be7ae61cc8e44a4b16"],["/2024/06/25/open-source-LinuxMirrors/index.html","384504ee1ee53c1eda074582a4012c13"],["/2024/09/02/Dinic-and-LuoGu-P1343/index.html","19e4823f6267477a59cc6cd20cccdd9f"],["/2024/10/08/黑题记录-2D-Geometry-110-in-1/index.html","a09f576ac5728c65738dac058db6ae78"],["/2024/10/11/常用STL算法库/index.html","76e20cfa3e5b14ae7affdd57d718663f"],["/2024/11/28/在-Java-中设置输出流的字符集/index.html","d65655f5c253b89e1294b8b79cf9a9da"],["/2024/12/05/JDK-18-以上使用标准输出流中文输出乱码问题/index.html","7d2b26ecbe0bda0102bbca72acbabde8"],["/2024/12/09/Codeforces-Round-992-Div-2-解题报告/index.html","3c5a4812faafa2e90d7ce80a266f5d78"],["/2024/12/17/Where-are-those-algorithms/index.html","da90adf7d0a0ba798079e5b1de626563"],["/404.html","7b7c2b12ef5e2b95eda92262d85e6cd6"],["/about/index.html","3b61bae6bda6fa65b9e47ab9d6bde2a5"],["/archives/2023/02/index.html","cbfecc17b1d5e41ad0e5ca00c3ca691c"],["/archives/2023/03/index.html","dfa72f330a19f5abe8e90ebd82bc64d7"],["/archives/2023/04/index.html","48dc2baa5504992672b531c939df88d6"],["/archives/2023/05/index.html","1b362c739752324d6a3e98ac15294078"],["/archives/2023/06/index.html","1195a5af941a9b2f6d2635b16b55ad8d"],["/archives/2023/08/index.html","960288a6ae40088d1b411b9d10b0973e"],["/archives/2023/09/index.html","9bad597f0ffe16143a8345f1d73e56c8"],["/archives/2023/10/index.html","d6b3d92df4aa3540b7d8301ec7272231"],["/archives/2023/11/index.html","869f0a7ae8ff1ee4d179e1044fcf96b9"],["/archives/2023/12/index.html","3ea103ab772479880273fc38e726583e"],["/archives/2023/index.html","fcd138c8e2cb25ecbbd76c6a6b98ed20"],["/archives/2023/page/2/index.html","fcd138c8e2cb25ecbbd76c6a6b98ed20"],["/archives/2023/page/3/index.html","fcd138c8e2cb25ecbbd76c6a6b98ed20"],["/archives/2024/01/index.html","04dedd02afd5e18cdab1ed4b3028cb1d"],["/archives/2024/02/index.html","35541059003df3bcc9e14f961a313504"],["/archives/2024/03/index.html","8eb6bbe133afb98938b60d418d4e9c32"],["/archives/2024/04/index.html","d83f29a067f266277ae62e2464c2abdf"],["/archives/2024/05/index.html","b018794d562f360298e824de116270fc"],["/archives/2024/06/index.html","7b08d06dc81cc776d9455bfa7e44c2f8"],["/archives/2024/09/index.html","5d7167f067d16bc7f47195db8d0ab44a"],["/archives/2024/10/index.html","0d403c9b41e32f4acd88298cfac1a6f9"],["/archives/2024/11/index.html","c50e81da1cf3b4389c6392d8043cc2d4"],["/archives/2024/12/index.html","1084cea0d54d26959b97ab293db516c1"],["/archives/2024/index.html","689c4275fcdc5586d1200c1c4f4196b4"],["/archives/2024/page/2/index.html","689c4275fcdc5586d1200c1c4f4196b4"],["/archives/index.html","99de95a4799c6778c00893296b4d4f60"],["/archives/page/2/index.html","99de95a4799c6778c00893296b4d4f60"],["/archives/page/3/index.html","99de95a4799c6778c00893296b4d4f60"],["/archives/page/4/index.html","99de95a4799c6778c00893296b4d4f60"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","bcf9d301e09fc9d7a487288aaf4e0de9"],["/categories/技术/index.html","82016a9aea2048fc0e562ad1f46accb1"],["/categories/技术/page/2/index.html","2ef3be035214d527fc40a2a40ed8c48f"],["/categories/技术/page/3/index.html","1f20d643d996b85460f45627a4c1be44"],["/categories/资源/index.html","e8525dbad88eed88a06a7b11cdda95b0"],["/categories/转载/index.html","4285c6b795e8985cb84db984c86f6a14"],["/categories/随想/index.html","2831261b445ad5ae10b3e42cd1326c6c"],["/comment/index.html","ade884038b4c3b212ad5e639b91342ca"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","71cebc0cd666f182f1ab1dbe4a9f15c1"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","ee18cd907c37f0971146c2648da3e1b9"],["/css/style.min.css","2a08992ea2f9646c8f6f476fd81a59d8"],["/css/tags.css","eba03aebbf2f44113682d0ca1e19fcbb"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","1d14b960afba0593a07197d5ebc1db90"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","44d1c69dc7539485b8b86dbf32d4e8b5"],["/index.html","780781b08b9ae227cb315baa2fc974a5"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/js/lib.min.js","65f02458a8e38579dac5594f252bd66f"],["/js/sakura-app.js","f1afa64bc2698ed86b55ab396a0c7ac3"],["/js/sakura-app.min.js","115ca9549a404cd11acd81cd31abe374"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","c757e76be80d1da11f5c02c68665312c"],["/js/wrapImage.js","f9e15116d23ab9ad9218be6b3f952e30"],["/js/wrapImage.min.js","7b928d1716e58eabdefcf36958e73a35"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","10c5918f1f897713b77acafa3d1eaf6b"],["/links/index.html","15ec2656f5cef14db19db353e47a23e4"],["/music/index.html","0a8ee11cb31411990b3ab7ef6f8c03d2"],["/page/2/index.html","1f6c2f44ffa7cb7606543a8182ea6b95"],["/page/3/index.html","2241d9534448c5da6ed074a0f32e4226"],["/page/4/index.html","3a6f360af38af760e775806fa84b4d03"],["/rss/index.html","c36edd6baf8b54d6a38643a2ce4cef72"],["/sw-register.js","0b13659f2445f0dec9267571dc7671a8"],["/tags/408/index.html","19bd880e99435b387c5b9b673986b29b"],["/tags/Adobe/index.html","49de44d6af2dbef29fd46a8d383cbadb"],["/tags/C-C/index.html","c7ca356495fe7c3d96ced113b7a4083e"],["/tags/C-CPP/index.html","3e82c6c0bc28c161365b4d16c410d89b"],["/tags/C/index.html","be34af576d2aba85778a0d357513e08d"],["/tags/CPP/index.html","32063b23cb16b39abd2fd98f0c50db29"],["/tags/CSS/index.html","cf2861903153b409b91293b694adecbf"],["/tags/CodeForces/index.html","fbb756c6ebc3f69f2c91bd82074d2efe"],["/tags/Color/index.html","47173b8fbc53804951ea0fffc71f7884"],["/tags/C语言/index.html","d8402693bb7d4c5952e767863b1c2065"],["/tags/Dinic/index.html","60bd3bd9702b0c4e434266f6841d603a"],["/tags/Div-2/index.html","8f79f9f11ac6f5114d5cc29754ce3e88"],["/tags/JDK/index.html","903a289cd671366713de3cacff802966"],["/tags/Java/index.html","0b04d1991c1994a2b365b13592625df3"],["/tags/JavaScript/index.html","2ea3ba38a98f9b1df60b04f80670aa68"],["/tags/LeetCode/index.html","887d2631b5e0508cf759f2f14cd43f05"],["/tags/Linux/index.html","0f11595a25d2ef2fd9d7b473f50b4bb6"],["/tags/MSYS2/index.html","94efb931b260400bd79ad9174aa093ce"],["/tags/Note/index.html","c692547c57cdc3d0473a06dd5bffc758"],["/tags/PS/index.html","3d3014eaedcc1e17334d26e8dfa4ada7"],["/tags/PrintStream/index.html","94c2ae6b70ad95d71a6465447b022ae7"],["/tags/Rocket-Loader/index.html","3f0db58f78755c67fe7ec9e34312e3f4"],["/tags/STL/index.html","9a21c6f024d804b8f5e8e716746934e4"],["/tags/Scoop/index.html","169014ddd23310b7560b9170b8cf4437"],["/tags/Software/index.html","4a8748532c71e92c84545448548d91e6"],["/tags/Swing/index.html","dd734546bff26886647915c8f0d63a89"],["/tags/Tomcat/index.html","3781a40fb2b29dbaed396e9d1d7b195d"],["/tags/UTF-8/index.html","4ffdcb3aa44cadab051d3b54fef41b78"],["/tags/VSCode/index.html","410e22454aa721ec1d6f66c61294639e"],["/tags/Web/index.html","f70d03432ab378c306d5a74aa3fd50c3"],["/tags/blog/index.html","2ad64ab04da4cdd248a08fb0800da11a"],["/tags/builtin/index.html","ffd74b84f6af60ec2238b2f284047154"],["/tags/cloudflare/index.html","36d6a48ecc590369cfe0f87f1d35cfb2"],["/tags/index.html","531621d6890ebd0c4d680dea01f880f5"],["/tags/tools/index.html","a631791010597ab93db879e9e6c53724"],["/tags/vue/index.html","fec2c72bb19ca5227a1448944eab79ba"],["/tags/乱码/index.html","d08043d7bb0ec5cc70585641cf3ea750"],["/tags/二分套二分/index.html","c46766190989b475b14d382639a2e69a"],["/tags/划水/index.html","d1f47749626f79bf39767862c7c1a6f1"],["/tags/包管理器/index.html","06d4cfac8d44cdc0d52b03ef50fb0484"],["/tags/图论/index.html","5c76fcb5cbaa3dfc7b399cc659674192"],["/tags/字符集/index.html","4d3b32bfde4fa418d8e1b39c2812b3ec"],["/tags/应用/index.html","9ec16f51536a07383a07a283a560a8a2"],["/tags/悦读/index.html","eaeb662eff70e7640ca19ee5c86f7424"],["/tags/操作系统/index.html","b4553e6ce11afe1ab66377a9ab790b36"],["/tags/数据结构/index.html","517eed01cae5988c195d30deb228abc4"],["/tags/数据结构与算法/index.html","3aae7d5b574e8c2264ad16d1a6e07aa5"],["/tags/新年/index.html","4027b12ada2ccf0d9297e1a825d50399"],["/tags/杂谈/index.html","11e13cb58ad17900b863e24d522b1a8a"],["/tags/深搜/index.html","e0111fd95f7fc93c9cf50b909a0ce975"],["/tags/笔记/index.html","9a8a67b303e6d4b5365e48ec090cc934"],["/tags/算法/index.html","b90dbb846364a55c0d9b35750f70c5b1"],["/tags/线段树/index.html","144608667b38b17431ad76b513425255"],["/tags/编码/index.html","06fa34f0959f7421c54581da2774fa22"],["/tags/编程技巧/index.html","61d403786aeb31831cf2b37edd596e70"],["/tags/网络流/index.html","b7966c5bcb195c81df8d5e5e33f6c0b1"],["/tags/萌新/index.html","e73f3ee6712b18e2d33a1e02b18fd8cd"],["/tags/计算几何/index.html","2866d37a2e641111ec248b862bbc1b55"],["/tags/计算机组成原理/index.html","c9c235c79c7e7056994922044347285e"],["/tags/计算机网络/index.html","710400b3fdec819e3fc7157675638b2f"],["/tags/质数筛/index.html","6b1e7775c93bf840a125308897884323"],["/tags/软件/index.html","dea24410aa00925e8d92dde408f4c785"],["/tags/输出流/index.html","9b2401d7df534d2f3f0a8113196492b4"],["/tags/镜像源/index.html","626d0975c75c2bd122a4fd24f53327b8"],["/tags/随机增量法/index.html","84bc9555452911b35b468f3dc8e2aad3"],["/tags/题解/index.html","3dcecdcc1480127f7f90b4579911958c"],["/theme-sakura/index.html","105e6f5c4ef529e6f9830ea329b7aefc"],["/video/index.html","04aa40e2b9c2db102456a42d15af7496"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-brands-400.woff2","8b0ddedbb27cbc9971c8667caa8a0cc1"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-regular-400.woff2","61f30b79daf5b31f0d254a31fba66158"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-solid-900.woff2","c64278386c2bbb5e293e11b94ca2f6d1"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"],["/webfonts/fa-v4compatibility.woff2","4bc58bc16bb05a05d3a47a4f7e143b75"]];
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
