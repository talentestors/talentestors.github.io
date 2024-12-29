/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","9c7456ba9bbb2cdeb8047b527c4463f5"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","67bf441c39e31d8f2b3650b5bbfe08b3"],["/2023/02/06/C语言链表/index.html","55ba3b33279bd9159c61b4d301747bd7"],["/2023/02/06/书籍资源/index.html","1b02d67d143e0c0934706887188a5ea5"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","0935429e1f6d4d299ad1d645e3bda9ce"],["/2023/02/07/为水而水（笑/index.html","d5611b289d826a9ff3748d9a30398054"],["/2023/02/08/洛谷主页源码/index.html","16d474e28dbae4c7b3de7c66d37210a6"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","d3a71ffa0f3287368accb4a3bcaacfee"],["/2023/03/09/Web前端笔记-Emmet/index.html","c35fedd5513ff4f86867cb2d964c1aef"],["/2023/03/23/gitalk-评论/index.html","b892267684ba97bfacda97d87222acb6"],["/2023/04/10/用C语言实现字符串全排列/index.html","0a8e356ed2bb834937fefcb7528a6b37"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","ee6068b5cc0bb7bec7c9b6f633b4aa9d"],["/2023/05/15/C语言基础排序-demo/index.html","cf1fd355510d7ea65fb9cfcadcc9fecd"],["/2023/06/14/闲着没事干/index.html","9ba6920f781030fd761b2b6597888774"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","09abf4e62c7d5d035ab4b4b66e5e24ee"],["/2023/08/01/javase-note/index.html","6799212fbbcb16a203208754704dcde9"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","b16e6e4e8a14b002f23f3d75bfbbf160"],["/2023/09/14/vue-pure-admin/index.html","5b7e84bd625e9b10351fdb3ab25fb004"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","0fb927e7946f696219cbad21a48a412d"],["/2023/11/28/C-CPP-the-memset-function/index.html","912a01df3c6b13f71f41162d49ac162b"],["/2023/12/13/javaSwing-DynamicClock/index.html","653d3271bf3437620cba516ab7d4b994"],["/2024/01/24/builtin-系列函数/index.html","22724fe81877f05bf8d1d4d137f70dad"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","5052d5574a793a0f9006a15a5a6370a2"],["/2024/02/09/新年快乐/index.html","da7404c7a55f0b8769375e0d01407a30"],["/2024/03/26/408-route/index.html","8734143fd3889284aca4383e787ba66c"],["/2024/04/07/转载-线段树专题-xyw813/index.html","106167c8d254068245f6bb7f275dbfd6"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","ddc7ff409eeab7b3c20cd6b7c74f5fdf"],["/2024/05/03/Adobe-PS-2024-软件分享-torrent/index.html","9919fddcbbd849512e3eb98462c417c3"],["/2024/05/06/cloudflare-display-issue/index.html","81ed454f5a2d2ff660dca7cdd3b077b7"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","a103d11770be59b53c7750ba7c840193"],["/2024/06/18/P3517-POI2011-WYK-Plot/index.html","7597e0364f9581af001ca307c35f304d"],["/2024/06/25/open-source-LinuxMirrors/index.html","d2df1d9192231644d250f56675c58c0f"],["/2024/09/02/Dinic-and-LuoGu-P1343/index.html","6c7f2168be962673a5985f6ca6fffe7a"],["/2024/10/08/黑题记录-2D-Geometry-110-in-1/index.html","ff99fb65c50db5db40d54a43d43e06cc"],["/2024/10/11/常用STL算法库/index.html","5dc56040471beaa2e6e55b88ae1af635"],["/2024/11/28/在-Java-中设置输出流的字符集/index.html","9e5291e388ff0b0966db56334bf2d994"],["/2024/12/05/JDK-18-以上使用标准输出流中文输出乱码问题/index.html","3a325932c0ce06c2703807a65182ece3"],["/2024/12/09/Codeforces-Round-992-Div-2-解题报告/index.html","a278d3da1d014cfe71436ff9b1d3751f"],["/2024/12/17/Where-are-those-algorithms/index.html","5a1e03f5e4170e04da6ef635293887f7"],["/2024/12/26/重构评论系统/index.html","f1a946b39bba9107c9adf3fb5eb85327"],["/404.html","7b7c2b12ef5e2b95eda92262d85e6cd6"],["/about/index.html","f8a3c867c4f67797206f31de3a1cacd8"],["/archives/2023/02/index.html","d5543ad93ee0759af5381f1d7acf3aef"],["/archives/2023/03/index.html","2dfbb004d0d8726124bef055ffaeef2b"],["/archives/2023/04/index.html","070c355d93e60bf005ce51ea78e77486"],["/archives/2023/05/index.html","68b1167d02410a58016f151aa0e41501"],["/archives/2023/06/index.html","43c64d5a9f33ca4028a3490e8bb99950"],["/archives/2023/08/index.html","30d7a4d51b83ef46cdf915f38eb3de28"],["/archives/2023/09/index.html","ebeef363e0bee503ead2442c8ea42af1"],["/archives/2023/10/index.html","86b28a6cfefa9442551351cb100e0a6c"],["/archives/2023/11/index.html","8d0dd5a9a6511a3e7d907de84c26de91"],["/archives/2023/12/index.html","ffeddbd021c652cedfbc3468c63c9af3"],["/archives/2023/index.html","54576731cca6beca8a144ac77afc06e7"],["/archives/2023/page/2/index.html","54576731cca6beca8a144ac77afc06e7"],["/archives/2023/page/3/index.html","54576731cca6beca8a144ac77afc06e7"],["/archives/2024/01/index.html","ea1ccac8a73db65dc4e59d9f2464f075"],["/archives/2024/02/index.html","3c1949578e0e9da9e3d6c12d6909a4a0"],["/archives/2024/03/index.html","5800a88bbc37d7d31e6cdd30539af144"],["/archives/2024/04/index.html","a52e8a258f3e7ad9c713fd827b0c7a0b"],["/archives/2024/05/index.html","b372ea8e1508d5727f1777b85f18bbfb"],["/archives/2024/06/index.html","2183c60e2a05aff411525f9529410c81"],["/archives/2024/09/index.html","4e7c75ff0e77bfb7adbf4786b6dba6a3"],["/archives/2024/10/index.html","41f257607e5ea73bf85da370f49a5ce0"],["/archives/2024/11/index.html","bc6ae466f2cf06da33a34c83988a8129"],["/archives/2024/12/index.html","0f4535c5d68b5302aa0526af625db868"],["/archives/2024/index.html","984140eacfff0d2351fe34231fe63b76"],["/archives/2024/page/2/index.html","984140eacfff0d2351fe34231fe63b76"],["/archives/index.html","9cfe9269857f8da36adfc4991f7f4b78"],["/archives/page/2/index.html","9cfe9269857f8da36adfc4991f7f4b78"],["/archives/page/3/index.html","9cfe9269857f8da36adfc4991f7f4b78"],["/archives/page/4/index.html","9cfe9269857f8da36adfc4991f7f4b78"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","957dcd4dbecd00ed66d79ea515fa3f42"],["/categories/技术/index.html","af77dd347bb7f3dce59fbb9806395341"],["/categories/技术/page/2/index.html","e76903ae14e776903172cfbc1d6a4e04"],["/categories/技术/page/3/index.html","7c2f74b5e9affb626d41c7765bb5f62d"],["/categories/资源/index.html","85b049b4324122bb8ecf529a1d728d04"],["/categories/转载/index.html","7bf5ba60fbfcdb4512b6bf70353c923b"],["/categories/随想/index.html","0fe3eeb65959d2a5f7a871c7077907d9"],["/comment/index.html","9478e259062471b01a2f71c632c7bfef"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","71cebc0cd666f182f1ab1dbe4a9f15c1"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","2fee6f3b0b16c3663f93f8e9c193d256"],["/css/style.min.css","5c69036f827bff149d075d5f26850d2b"],["/css/tags.css","eba03aebbf2f44113682d0ca1e19fcbb"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","bad37c1fc076ce17f7bfd4a084057c25"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","e77e5f19bca15192f1cfd2d10f3a25bf"],["/index.html","cbc4dbfd439afa87d5c3b40a06333fb5"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/js/lib.min.js","65f02458a8e38579dac5594f252bd66f"],["/js/sakura-app.js","f1afa64bc2698ed86b55ab396a0c7ac3"],["/js/sakura-app.min.js","115ca9549a404cd11acd81cd31abe374"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","c757e76be80d1da11f5c02c68665312c"],["/js/wrapImage.js","29007a235330279921b40783f3752c1c"],["/js/wrapImage.min.js","fa46e73ad4d52096338f455d716a71a2"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","9429ef7310ea37ef410f67f96b7a19d8"],["/links/index.html","810e39032b240377b037a92d1d714eee"],["/music/index.html","3df9b34a003a79b5a56fdd98093528e5"],["/page/2/index.html","960698c2eb334a7b6ef92960ce7c0aa0"],["/page/3/index.html","d47b21bb7b1060baf56f24c78e864a34"],["/page/4/index.html","c964b713be8d6fe6ed672074075b5b21"],["/rss/index.html","0cbca95de6f553aff1dba22d96f83b9a"],["/sw-register.js","ca7a4361336469a7ec689fec9f24fd51"],["/tags/408/index.html","f1da19b250080383c706fe51b0e1c8fd"],["/tags/Adobe/index.html","01e87325b864a14d5c67b6e6489b834d"],["/tags/C-C/index.html","3c6dabe1d5b8bb075341b7311bc87b03"],["/tags/C-CPP/index.html","3f306d9855cf304f8f26f777b9c5d69f"],["/tags/C/index.html","fbd0083e9936c4a8a68867e7a81d974e"],["/tags/CPP/index.html","c3ef6904b71d9f1ee45425409d43ce95"],["/tags/CSS/index.html","e2c90f04ae1a0b455d2953e5ea344e11"],["/tags/CodeForces/index.html","aa92e230c55c17c696d171d0c29bdcc3"],["/tags/Color/index.html","d1a59161c47ec019c84a6edf62b85e63"],["/tags/Comment/index.html","3024ae6afabc8790f6c2380bbcb8f356"],["/tags/C语言/index.html","b58b51a1f8176d366971885b74ca4d9e"],["/tags/Dinic/index.html","ea4b30fb7e1d713b73c1e2cd0888ce12"],["/tags/Div-2/index.html","394145e8ffac6d3210acfb7b108201b9"],["/tags/JDK/index.html","89561960d8c3ed9c4545b26be5f25993"],["/tags/Java/index.html","e847a19788a7fbaf7cc9a613ec9585bc"],["/tags/JavaScript/index.html","4d5773eafe32638fb08971ceb88579f6"],["/tags/LeetCode/index.html","69443d0e80377b8aa24d32afbe92920a"],["/tags/Linux/index.html","01bd1f2c7654dbc2262d72077324f070"],["/tags/MSYS2/index.html","798294f11f44d88be810d5795279a811"],["/tags/Note/index.html","b96af789907e0431891445548d443cf3"],["/tags/PS/index.html","7704376bb51ecf1a2acf8d7b4be9b19a"],["/tags/PrintStream/index.html","82acbaa2dd097e4224c4bea803cdde63"],["/tags/Rocket-Loader/index.html","96f26d23658461d48cbce5148afc460f"],["/tags/STL/index.html","96ff17f7509420e97ad4c4dfdae3285a"],["/tags/Scoop/index.html","54f2cde6c0434081e6d6786fcdc19e4b"],["/tags/Software/index.html","cba1d3062cf5a7411f9003c9e8b6566c"],["/tags/Swing/index.html","498391beee734e5ebae2bbfa2010b1e6"],["/tags/Tomcat/index.html","528f7b8c236e48637c58b145de5cb1ab"],["/tags/UTF-8/index.html","36b35a621484d3da0c9aeacd93f2c533"],["/tags/VSCode/index.html","85398778056c9fba982bf5fd95e6ad9f"],["/tags/blog/index.html","f76d4ae49402d3f4bd9834a787fcb57e"],["/tags/builtin/index.html","a64ad65dd2c10c6396ce30dce71f1056"],["/tags/cloudflare/index.html","33443b178b48930e24a280d06533ae33"],["/tags/giscus/index.html","f895b45f40d63b49682e079dbc1759b7"],["/tags/gitalk/index.html","038dfc6035e768a86ff88d806183e3ad"],["/tags/index.html","98a15c2dcee1a5b23784c237a0738ee7"],["/tags/tools/index.html","6725c425f5d90f025f395ce43c71e02f"],["/tags/utteranc/index.html","786d16eab4bd546b4458b300288cbec0"],["/tags/vue/index.html","bf6c11f6855222dc532a08d6c6bdd5b3"],["/tags/web/index.html","66e032d13fac9fb5a8c3116e7d851488"],["/tags/乱码/index.html","a6540b740b68794d8b8a16b3a7d67227"],["/tags/二分套二分/index.html","db3e5a43bfee09960c203ee9366ef3af"],["/tags/划水/index.html","390053d778cf524d7b7566f9d403aa2c"],["/tags/包管理器/index.html","0d1a04ba1ab8053f3e4f317dc33c656b"],["/tags/图论/index.html","fed40ecb6429c1b890cae3afef9717c8"],["/tags/字符集/index.html","0333dff3f7030deacc8b7f23076e05fe"],["/tags/应用/index.html","1cb937652f3cd8e30ddcf580b86d9646"],["/tags/悦读/index.html","a024f0709c05b28a6cf82a677a24dd50"],["/tags/操作系统/index.html","80a8f9a2eac334cade72ce842d0881b7"],["/tags/数据结构/index.html","f783546288b65a257dcc645b88d31b55"],["/tags/数据结构与算法/index.html","5d4f04315a8241f2a10c69d1a4d98242"],["/tags/新年/index.html","f81c9990a96b96581bc7cbb5f0506564"],["/tags/杂谈/index.html","3a9b20ad456b320114fcdbee5eaa13ad"],["/tags/深搜/index.html","61022b1a01447cedd69b4868d7d78dda"],["/tags/笔记/index.html","4c21490d116ec6aac03af9c8bd60e07f"],["/tags/算法/index.html","a9cb6fcb98553513f07827b2bd569ef9"],["/tags/线段树/index.html","fddf7c0a67a25b0461c4bf0e15a1042e"],["/tags/编码/index.html","7fa88ddbc2c5b020797063d0c967a214"],["/tags/编程技巧/index.html","3fd29b1111f9756bbef5058d5bce8779"],["/tags/网络流/index.html","ef3c991938ac7e9f5c08c6c9da301536"],["/tags/萌新/index.html","27e43b51e721be1139e35b0718182dbe"],["/tags/计算几何/index.html","3d52691a62d5cc08b7cfd885978cadf1"],["/tags/计算机组成原理/index.html","d5f4f65f0c5495bbe80d7ebcf12b3776"],["/tags/计算机网络/index.html","c5620dc81c126aaeea47670b10976380"],["/tags/质数筛/index.html","e8f4e62a34ec731a5dcd7f421afcf303"],["/tags/软件/index.html","cb9e57ab9a756a7e07a2dc585689796c"],["/tags/输出流/index.html","d688873af5f55793a99bb4d1951a8a15"],["/tags/镜像源/index.html","06b36860101f0aec23cec3268054383b"],["/tags/随机增量法/index.html","62e2e2057aac0aee8a1954b71218487f"],["/tags/题解/index.html","1bfabc1aca1b5adcb6d4d012d738c194"],["/theme-sakura/index.html","6f9d2374229a24fb9e2974be95e6ca40"],["/video/index.html","0bb1775a792c34275fac483c3dfde9b7"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-brands-400.woff2","8b0ddedbb27cbc9971c8667caa8a0cc1"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-regular-400.woff2","61f30b79daf5b31f0d254a31fba66158"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-solid-900.woff2","c64278386c2bbb5e293e11b94ca2f6d1"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"],["/webfonts/fa-v4compatibility.woff2","4bc58bc16bb05a05d3a47a4f7e143b75"]];
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
