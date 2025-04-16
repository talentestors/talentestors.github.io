/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","8b4cb6ee0ba446a413bb40f69dc245ab"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","33d36adc07d2b7c0538819c659670bfe"],["/2023/02/06/C语言链表/index.html","bfdb17bbae5ccef2d61a568daa8a6049"],["/2023/02/06/书籍资源/index.html","22db948fd7b3b1e86616d33777fb6c05"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","c178d0b7792372382491e3e79b5673a3"],["/2023/02/07/为水而水（笑/index.html","06628ce8b8d0e1bc2f9291995e0a8f07"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","af0fb4b0fe0f4ed5df049f58b3df2e8b"],["/2023/03/09/Web前端笔记-Emmet/index.html","cfe4885098670bf0424ec5fe0cce82e7"],["/2023/03/23/gitalk-评论/index.html","7383bd7c759c645db000d4af70c9ef6b"],["/2023/04/10/用C语言实现字符串全排列/index.html","99e4e6111cc124899b73a867bb2dd587"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","ac0760b22c41d6affdfe41574b906a96"],["/2023/05/15/C语言基础排序-demo/index.html","7e474cf9e867a1a009bdf6702e34147e"],["/2023/06/14/闲着没事干/index.html","fbf3489219d85fb52640c976b9b87d66"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","a315ef1df9baf3fe30f53c060028f06a"],["/2023/08/01/javase-note/index.html","20cee3c375a7271060e4f3def5524f95"],["/2023/09/14/vue-pure-admin/index.html","7562da120a776da35367370f9c9d3f37"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","15cc7bfe939254eb28e99f7d3b585042"],["/2023/11/28/C-CPP-the-memset-function/index.html","43214c366b44a7bf1f3862d420ed44dc"],["/2023/12/13/javaSwing-DynamicClock/index.html","0584ea90263b25add39d2e34305ba28b"],["/2024/01/24/builtin-系列函数/index.html","addbde2b9fbe806ac2a59fca9182990f"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","7e3bf3c73d138684166fe8537fc6a033"],["/2024/02/09/新年快乐/index.html","42e73336f1610fa425c0e11f19f0006b"],["/2024/03/26/408-route/index.html","b1c56bcbbded0cfdf7e8124b0d92f94d"],["/2024/04/07/转载-线段树专题-xyw813/index.html","3631c2380f4295a91dad8d7ae93aba73"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","2f02fc83a63d283f419a5e16c86b0bb4"],["/2024/05/06/cloudflare-display-issue/index.html","37fa8c4c1de9438d7da1547b0dc93e29"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","92655d117a23b3642aa006c553087b01"],["/2024/06/18/POI2011-WYK-Plot-Solved/index.html","14e9516e3e0eb5e2c9c8187accd4917c"],["/2024/06/25/open-source-LinuxMirrors/index.html","060d28fd5d2796eee4ac7961ef7d1a6c"],["/2024/09/02/Dinic-算法/index.html","e627fcde1c4957d1ff6c7d2eb59b1104"],["/2024/10/08/黑题记录-2D-Geometry-110-in-1/index.html","fd38b0d7032851fc223c5cfbd1767707"],["/2024/10/11/常用STL算法库/index.html","b150db37c1dd3ccf65cb461f615014ff"],["/2024/11/28/在-Java-中设置输出流的字符集/index.html","0ed847b994a6d807623f25da8f34593a"],["/2024/12/05/JDK-18-以上使用标准输出流中文输出乱码问题/index.html","2ae0089a3e316ebff732765f91e167d1"],["/2024/12/09/Codeforces-Round-992-Div-2-解题报告/index.html","8fa64aed5250cee7f2260bf0fa4a9a9e"],["/2024/12/17/Where-are-those-algorithms/index.html","e6fc99b1d9aedf1ddabf0b3c0d8b8592"],["/2024/12/26/重构评论系统/index.html","99581f4f6683d535dca2a75018f65a2e"],["/2025/03/15/GitHub-Skills/index.html","0f9c73561389aa7beaeff35260a9027f"],["/2025/03/16/lombok与delombok-在gradle上的配置方法/index.html","dbe21728f647f40077151ec2bb2fa5d1"],["/2025/04/09/Codeforces-Round-1016-Div-3-解题报告/index.html","6eb147f1d8c72288f54590f88c825a0a"],["/404.html","7b7c2b12ef5e2b95eda92262d85e6cd6"],["/about/index.html","822dd7911944adf2facc6083d352ed77"],["/archives/2023/02/index.html","453a64fa5ed2445279281b5a530022d7"],["/archives/2023/03/index.html","2c234f28192eabb9e7e5e7cfb0ab311b"],["/archives/2023/04/index.html","dc2bec7b463b6305b57d1b8c3b1edc49"],["/archives/2023/05/index.html","5c2c95a7b6c4921e946c8ffa256bd162"],["/archives/2023/06/index.html","89ddf803f9da98764c8d18f3529e4923"],["/archives/2023/08/index.html","7f3cdfc58a481339715d085ea5915419"],["/archives/2023/09/index.html","52490542cdf1fc9c1449c93d8633bc79"],["/archives/2023/10/index.html","6bcfb22d572e039a3633fabb0b1f7021"],["/archives/2023/11/index.html","98f5972c2f2d104e7c23b88595390c13"],["/archives/2023/12/index.html","5eba8f4f9ade3102d3eeae011cce3965"],["/archives/2023/index.html","b38407d305f6fb9275ee293d39d4ca33"],["/archives/2023/page/2/index.html","b38407d305f6fb9275ee293d39d4ca33"],["/archives/2024/01/index.html","f4a9f293785f227645c1754197ae7f61"],["/archives/2024/02/index.html","ad5b337e7ea8e8f5134a95c82a41ba59"],["/archives/2024/03/index.html","2572761a1581f17ad413f9686af5b755"],["/archives/2024/04/index.html","daef237d93962b0c7411ba2907222ffd"],["/archives/2024/05/index.html","e75fcdd6e2114081836eaa5dce4f0864"],["/archives/2024/06/index.html","98d89b18cc4ebf76aca0914697d792d5"],["/archives/2024/09/index.html","9d1ea3f6a8cbcd7b6732a8c752d0f70c"],["/archives/2024/10/index.html","522c26cc6e208c2b52815460f2904575"],["/archives/2024/11/index.html","de8d6395cc689efd2ab3b02f00473d9a"],["/archives/2024/12/index.html","458ccbaeb984c19a65059201f4e892f6"],["/archives/2024/index.html","3e55f6b94fef94fcf4503364273e57b5"],["/archives/2024/page/2/index.html","3e55f6b94fef94fcf4503364273e57b5"],["/archives/2025/03/index.html","97cfea5952a4388e4812adaef983250e"],["/archives/2025/04/index.html","a68a4edb72907bd26cf48ec76dd269fc"],["/archives/2025/index.html","857e13d2c7c68a4fe8605be290de97e8"],["/archives/index.html","8940fdb4a249fa591ddffb0cbcd0334c"],["/archives/page/2/index.html","8940fdb4a249fa591ddffb0cbcd0334c"],["/archives/page/3/index.html","8940fdb4a249fa591ddffb0cbcd0334c"],["/archives/page/4/index.html","8940fdb4a249fa591ddffb0cbcd0334c"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","2f7edbafd882448d81af793f37991a45"],["/bangumis/index.html","ac8aa929d6e882e9459e0511a897df5f"],["/categories/技术/index.html","4a874d7de5a2f15827dbe6700683d77c"],["/categories/技术/page/2/index.html","e59a2e34be9d853a3a99ab9a090c7869"],["/categories/技术/page/3/index.html","64eb065dcb32076965ff643cf0291f7e"],["/categories/资源/index.html","29072dfaa818209164ddea9aa8d5977e"],["/categories/转载/index.html","4ee4884b177f9e6abc6744540704cf7c"],["/categories/随想/index.html","8845d69efaa66e490708798ededf2a61"],["/comment/index.html","d14cb251be726142a6c070972c757b28"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/giscus.min.css","96c42b2029f44095aaf46f6dc0628ded"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","71cebc0cd666f182f1ab1dbe4a9f15c1"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","73bb864d038d4bb3d83361b8910786bb"],["/css/style.min.css","45b4cf23f077e45f4776fb3f47a7cdd6"],["/css/tags.css","eba03aebbf2f44113682d0ca1e19fcbb"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","b8a611c28da828e85b4ea5c1115d7f0c"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","8c937bb31e6549a561b809ba0cd1b28b"],["/index.html","d17db1ca9588c91520a3cf47ff260003"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/js/lib.js","65f02458a8e38579dac5594f252bd66f"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","f1afa64bc2698ed86b55ab396a0c7ac3"],["/js/sakura-app.min.js","115ca9549a404cd11acd81cd31abe374"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","c757e76be80d1da11f5c02c68665312c"],["/js/wrapImage.js","29007a235330279921b40783f3752c1c"],["/js/wrapImage.min.js","fa46e73ad4d52096338f455d716a71a2"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","92340864a05b8cca753e1eb133729c53"],["/links/index.html","3ebaafa81ce4bfc1c0ffe09f616f1bf8"],["/music/index.html","96bf52063a2e7d13d51bf89523b1a458"],["/page/2/index.html","01813c7a3f681c6a29bb7f077124e053"],["/page/3/index.html","1bb14e8ba90088230270271b46490818"],["/page/4/index.html","7513c808b2d5d822ca69a2345016db28"],["/rss/index.html","7dccda5fec750aa6a7f64551ebef7e57"],["/sw-register.js","959858694c846aade427f376e143d868"],["/tags/408/index.html","e0a2e804d012b3822a6281171c80e55d"],["/tags/C-C/index.html","277d7fb0e609e7d861b473852896efbd"],["/tags/C-CPP/index.html","cdb4fe69e3142d8432ecb2abd3d320f3"],["/tags/C/index.html","8c8da226de0d127d344763f6106f97f4"],["/tags/CPP/index.html","344e5aa325be78449277971d633a32ca"],["/tags/CSS/index.html","a4675cb9c0a32f56a964a26b8db3580e"],["/tags/CodeForces/index.html","648b63a8305291af3b4d930166cc87a6"],["/tags/Color/index.html","990fe2a7a7f77b169c52420af13a72f9"],["/tags/Comment/index.html","79ce9839e6d2de8c717d30467fb5d905"],["/tags/C语言/index.html","b798e4cf0b38272f4509d47409aac053"],["/tags/Dinic/index.html","d223e820606966d2443a0d9665c0ae41"],["/tags/Div2/index.html","db53910235e5344b081b92c64884fc4f"],["/tags/Div3/index.html","6694415badc3a907a6d65af9659d15b3"],["/tags/GitHub-Actions/index.html","4dcee483fb2dc19cd2d82ca3a2ea2521"],["/tags/GitHub/index.html","d7371044aa9dfee58783cac0c415c3bb"],["/tags/Gradle/index.html","5d76c0b8f792749f4a8c0f62bd499822"],["/tags/JDK/index.html","3cf93b906e2ccdf78078b4d2af21e670"],["/tags/Java/index.html","0cea8e425a1a23f93724d36921f98b7b"],["/tags/JavaScript/index.html","774eb8ad9f65b1de8eafb801a891f8c7"],["/tags/LeetCode/index.html","919e79ecff9242e8ecd00da1aea27b99"],["/tags/Linux/index.html","cf879b6c4709f0954ffd0d14b24cde03"],["/tags/Lombok/index.html","634add596eb8c53638694bce59dc73d3"],["/tags/MSYS2/index.html","e75d773bf683b31bc6e283cdb9881742"],["/tags/Note/index.html","7f5cf3428308b6baf3398571f89c66f8"],["/tags/PrintStream/index.html","7dbde3c25188ed2893ac92cce88f3da5"],["/tags/Rocket-Loader/index.html","34644b4ccf9ab67d4253e886563f125b"],["/tags/STL/index.html","9a5a5167fd060e2e973ed5722e102584"],["/tags/Scoop/index.html","2fb642d19e976b53e2d76d428f703094"],["/tags/Swing/index.html","1308cbf31c05e95e607de1c24c25e2cc"],["/tags/Tomcat/index.html","98dc0b30e230147b3f4a308bfea4de9d"],["/tags/UTF-8/index.html","898d06d6a9c382cf5fbf1276d7d91def"],["/tags/VSCode/index.html","98626cca2b9215561c069512afb29427"],["/tags/blog/index.html","be0b061bc43511a132506653697bc529"],["/tags/builtin/index.html","751567d63d9191c9e6737503df723eb6"],["/tags/cloudflare/index.html","d09d70c175c177e15bdd7a211cdd5db5"],["/tags/giscus/index.html","649eb2abc668e07bbedecc282accf54f"],["/tags/gitalk/index.html","d4b4d3da09e634683f77417dbe921515"],["/tags/index.html","3be104c60715df7e64071f940e0ccdc8"],["/tags/tools/index.html","d38eb71b3da37a9dc8d545fddb1cb868"],["/tags/utteranc/index.html","6a884e0299d3a755a9361705f7e7827d"],["/tags/vue/index.html","27b9a991d109b4c3b4941f6822659031"],["/tags/web/index.html","b32af51792828f152fe78740e83daff5"],["/tags/乱码/index.html","f9a83b17a38e202ec176502bfc0e7ca4"],["/tags/二分套二分/index.html","b5bf284d1122a6b9d7a22090edf7de71"],["/tags/划水/index.html","4e6e2c1ace18f5b3c3fe83e7f8e1d4b0"],["/tags/包管理器/index.html","5b06a8eaace33245a9039ac02cea8a6d"],["/tags/图论/index.html","e7e466bdc298737a49f236a9fe5753cd"],["/tags/字符集/index.html","1e36f376e32a12ef8d4083278f85a973"],["/tags/应用/index.html","a3f63400c20c6b72938a35b643cc65d0"],["/tags/悦读/index.html","a7e6aee60ea19e1eb2104232afa10e9e"],["/tags/操作系统/index.html","dd022b280f3bafb22579d6e72f4d136d"],["/tags/数据结构/index.html","d64fd64c446eaf3a871ce0f1a055c616"],["/tags/数据结构与算法/index.html","c7490b15485da4d5f6e8f1171c6e9aa2"],["/tags/新年/index.html","efeea22e6a6d712bdb3309dc9c2ae6e9"],["/tags/杂谈/index.html","9f86a73ea7465440e3fcec4c1b7e6ef3"],["/tags/笔记/index.html","722d51519b7a46d95c336f7aad12c7e4"],["/tags/算法/index.html","24e865b5b2ed2f273c0e8f214579991c"],["/tags/线段树/index.html","bdc62a520a8dd636095020b65c752e78"],["/tags/编码/index.html","60d54fb10294e343f07c83d7606ea277"],["/tags/编程技巧/index.html","5dda0b28bec9bc2ac03e0280b2b38c23"],["/tags/网络流/index.html","9f3413828e2fee06e25120dece4763cd"],["/tags/萌新/index.html","5ab9d5dc02da8ee9aa5836b49c3f8ba4"],["/tags/计算几何/index.html","450fc42fcb3c430685093ca1555debe0"],["/tags/计算机组成原理/index.html","ead492e63eaefdcc1709d4c9e68bee07"],["/tags/计算机网络/index.html","853b07ee9a82a287ba4c66a56651767c"],["/tags/课程/index.html","a8d62045b4ef0f01d2c5dc69b62df6e6"],["/tags/软件/index.html","a0eb84ccd07a75325941d367e187dd60"],["/tags/输出流/index.html","deece322d2dd31551e08f2891dc62921"],["/tags/镜像源/index.html","45207f6f785cbbfc39cb657386aad331"],["/tags/随机增量法/index.html","d05dd0a7d7eb0a15119b6af5e16c3461"],["/tags/题解/index.html","2ea33422a22b7bf2d247c20fb99789e3"],["/theme-sakura/index.html","0969fd18d22c8047e8ac5761cb56f177"],["/video/index.html","250310e1319016b43c2325e0948c9ada"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-brands-400.woff2","8b0ddedbb27cbc9971c8667caa8a0cc1"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-regular-400.woff2","61f30b79daf5b31f0d254a31fba66158"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-solid-900.woff2","c64278386c2bbb5e293e11b94ca2f6d1"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"],["/webfonts/fa-v4compatibility.woff2","4bc58bc16bb05a05d3a47a4f7e143b75"]];
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
