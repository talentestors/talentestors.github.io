/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","ed2d0c5c437b2dfa2aca622e10000a66"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","1952ce5501072367c6962b22cfd0b304"],["/2023/02/06/C语言链表/index.html","30c976642d0524c4552e5c170e7efbac"],["/2023/02/06/书籍资源/index.html","87a35dd98775cb916195031f21076c58"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","b695372916ba5d2125806db5ebb89737"],["/2023/02/07/为水而水（笑/index.html","fcc7807350eaffa8956318e7f45e7409"],["/2023/02/08/洛谷主页源码/index.html","7fcad16daa9bdc5e750cd1090a66200e"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","e8055a8b6de28383235ca3bab7897651"],["/2023/03/09/Web前端笔记-Emmet/index.html","f22f53ac0d73e95f1d80dfbcd1cf30c0"],["/2023/03/23/gitalk-评论/index.html","9b768563f3b95ac58e9ad3877abeb26d"],["/2023/04/10/用C语言实现字符串全排列/index.html","1dad9805f7995f8e29a5887b1eb4319f"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","f6eb1e3a00e0eb83caca22dc916d45e7"],["/2023/05/15/C语言基础排序-demo/index.html","796f00dceeaae55d4e19c7179ffa9c14"],["/2023/06/14/闲着没事干/index.html","2ecf73e0914d095c09342bcc0e111592"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","1fed5b77b94aceb4bfa7200e72b9598d"],["/2023/08/01/javase-note/index.html","5806eb5702e2df0971d63c81682a8edf"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","51a1b118edacdc0074315f21bbc9a973"],["/2023/09/14/vue-pure-admin/index.html","bfdc1fa9e1e1f43ff8240fe373f4583d"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","def14760c117d51cc97d45ded172d578"],["/2023/11/28/C-CPP-the-memset-function/index.html","058b6f0f95ceeffef27375284c7b40ca"],["/2023/12/13/javaSwing-DynamicClock/index.html","60db794fbf6f5bd69d47c9c3f94ebd82"],["/2024/01/24/builtin-系列函数/index.html","4a8b6cfc1b1cdb17eadfc1745a6deff6"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","63965409528945215ee4917b621f9250"],["/2024/02/09/新年快乐/index.html","37633990683c7c092a440d76294b8448"],["/2024/03/26/408-route/index.html","9481c63032d4ff65fb55c5bde7edd017"],["/2024/04/07/转载-线段树专题-xyw813/index.html","5f25132c7eed0c1283c27b218ecca32a"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","748b652d699d61e4191cc8ee0cc0e583"],["/2024/05/03/Adobe-PS-2024-软件分享-torrent/index.html","977bd651582ab095a5a703c6a856a84b"],["/2024/05/06/cloudflare-display-issue/index.html","4c8c3f84984db4b5cf2f318019aded00"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","f25d97d8e0dd84168905c5c341085e2e"],["/2024/06/18/P3517-POI2011-WYK-Plot/index.html","303114f122dfc31a7fe13e14a77d83ee"],["/2024/06/25/open-source-LinuxMirrors/index.html","97e70e34ea48172701e3b3b458ae7b42"],["/2024/09/02/Dinic-and-LuoGu-P1343/index.html","4f4fb519b8336fe77a31f959d50c4b2d"],["/2024/10/08/黑题记录-2D-Geometry-110-in-1/index.html","fa9df8500b89b92a6b12feed4b6c162b"],["/2024/10/11/常用STL算法库/index.html","355580982a729a010092562b0019941b"],["/2024/11/28/在-Java-中设置输出流的字符集/index.html","8179e896fe66bec2d00da167c0c96d31"],["/2024/12/05/JDK-18-以上使用标准输出流中文输出乱码问题/index.html","f81cbd798f3d2884106139d71af879af"],["/2024/12/09/Codeforces-Round-992-Div-2-解题报告/index.html","35729fa42fe92de08d8dd4cbd61b8396"],["/2024/12/17/Where-are-those-algorithms/index.html","1ef7a96beae63db9429b5d0686743eda"],["/404.html","7b7c2b12ef5e2b95eda92262d85e6cd6"],["/about/index.html","4a2ebc2d6dc72f3ed8f793f8adc05ccd"],["/archives/2023/02/index.html","322ae751586715387d7dce5281b4ad10"],["/archives/2023/03/index.html","97d8388b9d0e5fd3f62f2ff403b76a62"],["/archives/2023/04/index.html","fa7c2e21b3456ee272ee42005b1ccbd7"],["/archives/2023/05/index.html","841db9e9041d987c7584763aa144eeee"],["/archives/2023/06/index.html","04724d465cfbece6466fa7954075ec72"],["/archives/2023/08/index.html","7bd2d65ebfb1584de5b0e4fe671fcd0e"],["/archives/2023/09/index.html","d28d11f8830afcb60037c63e82d72d55"],["/archives/2023/10/index.html","8ae7f4f824468a511440b83cb9fa16a6"],["/archives/2023/11/index.html","f04ebd4762c11c45eda28974b8ed83a2"],["/archives/2023/12/index.html","91f3426141a491a8f3f2d37b026f9085"],["/archives/2023/index.html","9ec06a0515b14cbc6d21483339c88d5e"],["/archives/2023/page/2/index.html","9ec06a0515b14cbc6d21483339c88d5e"],["/archives/2023/page/3/index.html","9ec06a0515b14cbc6d21483339c88d5e"],["/archives/2024/01/index.html","b6a9eb79989b1b2f7d3f4e1d0ed46698"],["/archives/2024/02/index.html","10293a6c1f73328817f7998c20a486da"],["/archives/2024/03/index.html","12c3df052d97868aa8c223be3040c839"],["/archives/2024/04/index.html","4319440076d2a56b1023823c70164e72"],["/archives/2024/05/index.html","0c4371424010d39768eda4f84504042d"],["/archives/2024/06/index.html","8e16d1535ebb08d0b5a3d4103f95a205"],["/archives/2024/09/index.html","49b8d757e591c8fb49a630b147a7ec7f"],["/archives/2024/10/index.html","5661cccd59a1f946632c3e7e34e7bebe"],["/archives/2024/11/index.html","2fcbf7f5df2f6e03a29da60971b9c140"],["/archives/2024/12/index.html","8d70ef18f97b459997e0c7ff1bc62ce3"],["/archives/2024/index.html","2787aba20cd4ca94021d6c5ed80c3650"],["/archives/2024/page/2/index.html","2787aba20cd4ca94021d6c5ed80c3650"],["/archives/index.html","a4200cd34423b3dc5d75cf2de7f28c3a"],["/archives/page/2/index.html","a4200cd34423b3dc5d75cf2de7f28c3a"],["/archives/page/3/index.html","a4200cd34423b3dc5d75cf2de7f28c3a"],["/archives/page/4/index.html","a4200cd34423b3dc5d75cf2de7f28c3a"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","ed891149a833db10075d444ddabab738"],["/categories/技术/index.html","6ad4215675d3d46377e3c7b67f323a37"],["/categories/技术/page/2/index.html","a8bcac348e32945fe4cb5b9d21016d79"],["/categories/技术/page/3/index.html","9f4a6a4f8aaae0a8768ee8e21de08290"],["/categories/资源/index.html","fbaa6b4dbee5b1ec5f63ba4e66f5a9d0"],["/categories/转载/index.html","5fbb8fc3a880de963c08776cf20c6799"],["/categories/随想/index.html","34c6fbd80a4a2a5798134680b0ddcb6f"],["/comment/index.html","93d10d100eb126729319cccb0e5675fd"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","71cebc0cd666f182f1ab1dbe4a9f15c1"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","ee18cd907c37f0971146c2648da3e1b9"],["/css/style.min.css","2a08992ea2f9646c8f6f476fd81a59d8"],["/css/tags.css","eba03aebbf2f44113682d0ca1e19fcbb"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","778508b4f6fdd16ebb0d4610aaac3577"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","e604e7ce2cecda1d2301732cebe6328f"],["/index.html","3b7f63c9218d83e2940d481197608765"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/js/lib.min.js","65f02458a8e38579dac5594f252bd66f"],["/js/sakura-app.js","f1afa64bc2698ed86b55ab396a0c7ac3"],["/js/sakura-app.min.js","115ca9549a404cd11acd81cd31abe374"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","c757e76be80d1da11f5c02c68665312c"],["/js/wrapImage.js","c29a2f77c5aa3ba618ec389b270886c0"],["/js/wrapImage.min.js","fc743cae4be00ca6e80bf42d9b3bda32"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","a6b565b53d80c93450807107f33427eb"],["/links/index.html","ac2907312f0915afe9b56730efa88606"],["/music/index.html","fe99b536685ab34811b755037e1e7f07"],["/page/2/index.html","8c8cab0d6d40e3a078a5d5f82939d389"],["/page/3/index.html","32b2a3d07312c12819fdd3fc6cd19c83"],["/page/4/index.html","494d7553ab10efa4f9adb0a6244b2449"],["/rss/index.html","828b29ded884d1cd6024783f2c5dc9cc"],["/sw-register.js","5ed707057e3d7f95cdc7bf522c44046e"],["/tags/408/index.html","685d5252818d5bf1f21a8795996b97cf"],["/tags/Adobe/index.html","79d107afe9ae5bc73ae71b0c7ca7a542"],["/tags/C-C/index.html","9856d40ac1130a7d8cf619f9dec5d206"],["/tags/C-CPP/index.html","f6e8da83312ab48c05ef69d7577919d6"],["/tags/C/index.html","8e33005c23413aa2fdaf0b9eb8e3c1be"],["/tags/CPP/index.html","80b5ce993d33dc7cd0971e75a2dda962"],["/tags/CSS/index.html","77f87db0b1ec7233f530bb851d551581"],["/tags/CodeForces/index.html","86d8982a3c45ec2fbb434978eafef19f"],["/tags/Color/index.html","8ce7d5d806cdc8c9ef4365f75a663319"],["/tags/C语言/index.html","a72c35d9d9f057c7306a47b7a4d91a83"],["/tags/Dinic/index.html","7e5b13a2c12600ffdf314820279efa81"],["/tags/Div-2/index.html","33abbffb6d4b15695cc080ded22ee814"],["/tags/JDK/index.html","170e8d52e8dd30dec37a9966beb2a5eb"],["/tags/Java/index.html","d75d4f31612d101bf013dc53230124f3"],["/tags/JavaScript/index.html","589f7937bbaae58f8e76a87d624d8763"],["/tags/LeetCode/index.html","e6a3df6eef214061b35dfc27f025dc77"],["/tags/Linux/index.html","1f917114a3934bad3e182eb9218a034e"],["/tags/MSYS2/index.html","7e8f5e18d9786bea939b72e8b7b7c857"],["/tags/Note/index.html","179e03ef670e4e0c1b3de56c2420de63"],["/tags/PS/index.html","04453ead4f01279f165ccd61103d73c0"],["/tags/PrintStream/index.html","96853fd082c938e7ab34f814f9a20fd2"],["/tags/Rocket-Loader/index.html","042c788ca6fbb5abe0ffe019636c0069"],["/tags/STL/index.html","faa016b562a14f7493bf5199e596e1f6"],["/tags/Scoop/index.html","c6fc6e63b09d7bd4587330ce068859e8"],["/tags/Software/index.html","56e819f592cc01089a589c691bf3525d"],["/tags/Swing/index.html","37d9ac155b5d155fbbd756c0bd28ddf0"],["/tags/Tomcat/index.html","af6e5af9fc1bca57f970202d96c4173d"],["/tags/UTF-8/index.html","7499672a13128d10c2fee5a7ead80d28"],["/tags/VSCode/index.html","46b3ecc12b0db38af0184fb2b569099c"],["/tags/blog/index.html","fa168254b79205251d006ac2247fa7b8"],["/tags/builtin/index.html","6a61734ff43fc41899ddc62a2e6d2ecc"],["/tags/cloudflare/index.html","13eb74b2cd0c9d49fcb4c3b3c9f5a69b"],["/tags/index.html","c37fcd35d4c0e81497ce010b77a56cc4"],["/tags/tools/index.html","a885b301cacedf007b11a868a8213984"],["/tags/vue/index.html","f38560883396e0035a778b8ce8bb8c45"],["/tags/web/index.html","fb6b2ee1871800bd59a3001be4ff3204"],["/tags/乱码/index.html","b64d78052acafea7cfaf7bebbd17da68"],["/tags/二分套二分/index.html","e878950738d42d303d8e756bf01ac1e9"],["/tags/划水/index.html","cfb60c99c78ea7f3863a12344056d0aa"],["/tags/包管理器/index.html","cbb392dce1a0dcc4399647b295570ec3"],["/tags/图论/index.html","28a371d8d79850c2726ed42a1345d776"],["/tags/字符集/index.html","be3ae75c3cf2d83e98f62d46d6dba204"],["/tags/应用/index.html","bfb3c13f6562ce650c92f563ec8c2208"],["/tags/悦读/index.html","27e74b082b690910cb8040470fe9d757"],["/tags/操作系统/index.html","187ff0d8157bf6c2f83db6b4bb51c07b"],["/tags/数据结构/index.html","801eba0f9e56f2c21816052bb27fc954"],["/tags/数据结构与算法/index.html","00363fc0e346c14542e9b743a52eb1bb"],["/tags/新年/index.html","3e239051ce0863e0e29bcb598dbe2f96"],["/tags/杂谈/index.html","be9987dfce7135d09f17760552785573"],["/tags/深搜/index.html","730606eb9a54c2776aa6a2d6358232bd"],["/tags/笔记/index.html","1fb6884e2303380d3c7d0b0a4c1e0ee2"],["/tags/算法/index.html","b1855d4887c19f069e4ca0589310ec5d"],["/tags/线段树/index.html","ee2cc19a0dbe7234ea225322ea722475"],["/tags/编码/index.html","c036ad85ecc4ae96adeeb44eb5fd31c0"],["/tags/编程技巧/index.html","c64ccd8d8c413ed90aee5283e24bfbe7"],["/tags/网络流/index.html","c95e4cdb78785c75d6a3d6712dd303aa"],["/tags/萌新/index.html","0c8a6d44d9b9089f3c2e5597051eba20"],["/tags/计算几何/index.html","cdd84cb11e5135964c1262d1f8c697a9"],["/tags/计算机组成原理/index.html","e37f8e3bf243c8d9373ed6cc9886356e"],["/tags/计算机网络/index.html","c4306a5bd7a50c6fca360926864f9acd"],["/tags/质数筛/index.html","e348e7aaa0ea9725385b2db4b3ff3571"],["/tags/软件/index.html","b85f492f662d396c01514cf1bb18eb72"],["/tags/输出流/index.html","acc4859e7461c4e696092e75f7427cc9"],["/tags/镜像源/index.html","3fe713439807b7908b69082a52bc38a0"],["/tags/随机增量法/index.html","799ae8c777f7ed15b3f6e67e24640015"],["/tags/题解/index.html","f0a124af9ef4b09f513a7aa63e122d95"],["/theme-sakura/index.html","6914032872c5fe9d955729cec755e420"],["/video/index.html","d5586efad4b5e31449ea2b87a49467a7"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-brands-400.woff2","8b0ddedbb27cbc9971c8667caa8a0cc1"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-regular-400.woff2","61f30b79daf5b31f0d254a31fba66158"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-solid-900.woff2","c64278386c2bbb5e293e11b94ca2f6d1"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"],["/webfonts/fa-v4compatibility.woff2","4bc58bc16bb05a05d3a47a4f7e143b75"]];
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
