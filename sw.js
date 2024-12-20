/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","ff4825b3f66d6816a4ebc99a35c01784"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","36ba3d2ddd0e6aa559eccfbac7373c28"],["/2023/02/06/C语言链表/index.html","153a4ef180129973f628e02a5b12c527"],["/2023/02/06/书籍资源/index.html","3a65bc22f926cc3cd1fc50571df47cda"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","1d146f20f4079be4696c1c3e49984505"],["/2023/02/07/为水而水（笑/index.html","6c31a2a5c12a0298299540cfd3085ba8"],["/2023/02/08/洛谷主页源码/index.html","4c5788d195cd8d272036bac9218e586e"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","33fb95c87196118ce25bddac19f26e7a"],["/2023/03/09/Web前端笔记-Emmet/index.html","a81ff8e25b5d5d622ab6dc6070197c69"],["/2023/03/23/gitalk-评论/index.html","12db65bf376fd9797130b69aeac5c6f9"],["/2023/04/10/用C语言实现字符串全排列/index.html","bdd4245d2b6acaeb55637526386450ae"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","965459f8c686f73e2cae27949303ed8e"],["/2023/05/15/C语言基础排序-demo/index.html","a67fe96fae87ab2e47b91369d0345cf2"],["/2023/06/14/闲着没事干/index.html","3d1e268d751f9a068f27750c7b2d28da"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","393e9f096258010d3f4bf62a3c1068dd"],["/2023/08/01/javase-note/index.html","d142c39a1bc24e165045dadef3eb805f"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","c2b21259d5aeef07bb1a531ae95bd767"],["/2023/09/14/vue-pure-admin/index.html","bdc4cadf0b7365a3a9db43fa1c69705f"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","8ae6835d2db60991eeb0818c3a2000fb"],["/2023/11/28/C-CPP-the-memset-function/index.html","3570580acd40efa9140a114f53b59195"],["/2023/12/13/javaSwing-DynamicClock/index.html","26ad367cf9ffcaab7e31a3ea4ed67b60"],["/2024/01/24/builtin-系列函数/index.html","09c5cace219959f78261387ba4973b53"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","481327bf749168ef8449bc31c57e15e6"],["/2024/02/09/新年快乐/index.html","ea6b44f00535f59522a77d508e5ae323"],["/2024/03/26/408-route/index.html","b73c70ab868a0953bb48ee40ce08cd34"],["/2024/04/07/转载-线段树专题-xyw813/index.html","77e1a86b5182625ea3da0fed7e5d9664"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","237c3c8755c10842b332de73e5e41ffd"],["/2024/05/03/Adobe-PS-2024-软件分享-torrent/index.html","cdd99594e2331fcf2e6a1cf12eb0df51"],["/2024/05/06/cloudflare-display-issue/index.html","fc229381a8ea2ff9f88c0c595947e27a"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","6e60dabeed357dff3a8feafb47148bf1"],["/2024/06/18/P3517-POI2011-WYK-Plot/index.html","76ebaba95c6d6e7f8ac7bbe5108839b4"],["/2024/06/25/open-source-LinuxMirrors/index.html","3e7f6af3205b378c3687d4a612870d99"],["/2024/09/02/Dinic-and-LuoGu-P1343/index.html","ab5562cf77b44378f1a3f63ba3fbc119"],["/2024/10/08/黑题记录-2D-Geometry-110-in-1/index.html","98d94e33b87f1dd9bd2b623c7a6ef57b"],["/2024/10/11/常用STL算法库/index.html","0e6320f9df648f3b52a5231f8e0cb3fd"],["/2024/11/28/在-Java-中设置输出流的字符集/index.html","8e25db591c7d6646c0800caa691f7e6a"],["/2024/12/05/JDK-18-以上使用标准输出流中文输出乱码问题/index.html","92f6876490f701b028de35bd225cf268"],["/2024/12/09/Codeforces-Round-992-Div-2-解题报告/index.html","082f3235b89a328fbb65879ffcf367da"],["/2024/12/17/Where-are-those-algorithms/index.html","06c5bb50358a5323257dd3aefefd7006"],["/404.html","7b7c2b12ef5e2b95eda92262d85e6cd6"],["/about/index.html","1b1968b03590b265314a35b909c7f797"],["/archives/2023/02/index.html","9359d9454e23fd8102ebd5a04fb966cc"],["/archives/2023/03/index.html","ac75b4dd0b027883986cb182c581e21e"],["/archives/2023/04/index.html","2e936859c3ef1c4ed6aefb53ca45b704"],["/archives/2023/05/index.html","647aef4ee693e2782a40d2cec2858db7"],["/archives/2023/06/index.html","3a9d9e103182ad89fc632d145af8737a"],["/archives/2023/08/index.html","70f1f44179f649ab11d76f598219ffa7"],["/archives/2023/09/index.html","bcbf986831b3fed21fcced103aa3f5ce"],["/archives/2023/10/index.html","b51aa41065c8cb1352692e7631700217"],["/archives/2023/11/index.html","b328ffb8bb3e357865eac27529e44ea3"],["/archives/2023/12/index.html","95da12b2c0aa3935540391cc38de2fc3"],["/archives/2023/index.html","ce80178e72706cd9a3297e486c04c71f"],["/archives/2023/page/2/index.html","ce80178e72706cd9a3297e486c04c71f"],["/archives/2023/page/3/index.html","ce80178e72706cd9a3297e486c04c71f"],["/archives/2024/01/index.html","f5b8f7efb672d51afdd8672673315107"],["/archives/2024/02/index.html","a4d408d36acb1d01e17bcab2b165427e"],["/archives/2024/03/index.html","70375e221ba5cc1c772e094bb70af2d4"],["/archives/2024/04/index.html","3ab52871136223b579776adfdcffe7c1"],["/archives/2024/05/index.html","b876f9870ccf9978592f3d1eae93b667"],["/archives/2024/06/index.html","7c36a288e80a2243bc13104a77cbf068"],["/archives/2024/09/index.html","ab227984383420ed82696cc7496dbb8f"],["/archives/2024/10/index.html","32e9976fdd1fde36ba4298011d7bd3fc"],["/archives/2024/11/index.html","87a013e18c51bc88e584242ce50397b9"],["/archives/2024/12/index.html","6502a41d67f589d9ae89f234b42d959c"],["/archives/2024/index.html","4dfdb0b32d213b5cd03cf918e76d5034"],["/archives/2024/page/2/index.html","4dfdb0b32d213b5cd03cf918e76d5034"],["/archives/index.html","33b03ed45d2c491871ddf5f5f003b2b9"],["/archives/page/2/index.html","33b03ed45d2c491871ddf5f5f003b2b9"],["/archives/page/3/index.html","33b03ed45d2c491871ddf5f5f003b2b9"],["/archives/page/4/index.html","33b03ed45d2c491871ddf5f5f003b2b9"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","6053dda9662b828c2ea24ac4d4155215"],["/categories/技术/index.html","a20c8b4d4b20afb491bb5a23bdafe2bf"],["/categories/技术/page/2/index.html","52f987c125430f31ef514729d866c378"],["/categories/技术/page/3/index.html","d5d7432e20aa7c7edc4bfe5799a7a195"],["/categories/资源/index.html","07ea83e7a1ab0aabaaa57dcb7df1c3de"],["/categories/转载/index.html","3a01a4bafff1220cd7aa285406d96167"],["/categories/随想/index.html","1ba19b2ab6a6febeefa63bb759c971ce"],["/comment/index.html","43bc006ae4b80a3a0a9b8c51f5d6def9"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","71cebc0cd666f182f1ab1dbe4a9f15c1"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","ee18cd907c37f0971146c2648da3e1b9"],["/css/style.min.css","2a08992ea2f9646c8f6f476fd81a59d8"],["/css/tags.css","eba03aebbf2f44113682d0ca1e19fcbb"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","7054c37255a794d9ae087991b52818d2"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","a6af2cbdb66ba716e9d18a021bd4fd85"],["/index.html","0849dfd015867caf4379e4fb8fb3d0e9"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/js/lib.min.js","65f02458a8e38579dac5594f252bd66f"],["/js/sakura-app.js","07d7135980aa3c06d16f5c57897435fb"],["/js/sakura-app.min.js","6465a294a95d0fb0863be1b62785c2f8"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","c757e76be80d1da11f5c02c68665312c"],["/js/wrapImage.js","ea7e88047de2088472a23789680071a4"],["/js/wrapImage.min.js","78c8f9e1510b68978f34fdcfbab9623e"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","6ff6dae513d3ee56c08378ddcde1d459"],["/links/index.html","a41879ef2d0530d39b68c5f104ee8f58"],["/music/index.html","d85fd41dfdd8de7d582a310831c7d5d8"],["/page/2/index.html","03c6e5b119a36b2132eedf000a1a0140"],["/page/3/index.html","e6015239a4a73f496933fd8c5dc38bc1"],["/page/4/index.html","89edf26302ba388a90029b6f59da06b6"],["/rss/index.html","581815a800abb788d2f382345ea972e9"],["/sw-register.js","67b446cc7ab0bc28c6b88dd0f6a26aa2"],["/tags/408/index.html","7f9b37ce65594e1393cefd1c3cacf257"],["/tags/Adobe/index.html","827cbdeb476629fd9f70c7a5ea4b975d"],["/tags/C-C/index.html","5b9b7d59d73a7419064326894dcdbcba"],["/tags/C-CPP/index.html","9acf2ec4e7a183240f3099727df4a22f"],["/tags/C/index.html","9f7d55590b1e68d2b7db86c5f317dbda"],["/tags/CPP/index.html","705fab15aab4ae294b74c3c35b8421e9"],["/tags/CSS/index.html","a546d9f17ce07cf5b096ff1c1cfe23b6"],["/tags/CodeForces/index.html","727d830facc051965b0105f4f7f6ef77"],["/tags/Color/index.html","9dcc3474ce817dd88239940e02ae07aa"],["/tags/C语言/index.html","fa72b1131c9640d3ee3820ed0a31ab0d"],["/tags/Dinic/index.html","1c6ffa3bfb1360fe7b74e4d0406081b5"],["/tags/Div-2/index.html","69a2e14e60fb472dea05199b94379567"],["/tags/JDK/index.html","dafe8eec838fcbe7cdff4e48a84a45d1"],["/tags/Java/index.html","0dfd287d951843cf57f420e5a215b01e"],["/tags/JavaScript/index.html","4db892306b66789b51eb166019e0ea2a"],["/tags/LeetCode/index.html","7e46cec1743419770d6654e3e222b0cf"],["/tags/Linux/index.html","38fe4847382cc762c4620fbc4b837d1e"],["/tags/MSYS2/index.html","f9db199fc2e0944df5920bd4ca9f977f"],["/tags/Note/index.html","96a2373f65a08fcf1a3d3886999100c0"],["/tags/PS/index.html","758e262cc1e1b2ef7a10577d90f806ff"],["/tags/PrintStream/index.html","00a1bbcde1c64c145fbb011831196429"],["/tags/Rocket-Loader/index.html","bb40e74cde08f1cdcbca62bd25b1fd47"],["/tags/STL/index.html","83f80060193196bc7179296a4f5f803c"],["/tags/Scoop/index.html","b07f2be5a93374c80c7f880f1de5b82c"],["/tags/Software/index.html","f33bf239b43b32f963b1baddbd8defd1"],["/tags/Swing/index.html","a0a7f38052c4b1e51bd5199c7b49b3df"],["/tags/Tomcat/index.html","d755b308909274cb0fa71ffa45b62c45"],["/tags/UTF-8/index.html","56e14d1cd5fc009e053038b9c6f22b47"],["/tags/VSCode/index.html","b7affe7c1fd21cd5d9f52a9eaffc02b5"],["/tags/blog/index.html","4896132c418514019ac74d80797e0e0e"],["/tags/builtin/index.html","3c4524e8d4c47085fa988f4a352c1493"],["/tags/cloudflare/index.html","acacaef4653685e8c0f86d744c16cddb"],["/tags/index.html","e426ff5d505f318c40826e49e22d43cc"],["/tags/tools/index.html","b3d483fc18cbd1ce68323c68ab0f4047"],["/tags/vue/index.html","7157d7bdd387298a95f2c79afd3dad0c"],["/tags/web/index.html","761402de08f44edcd429fb1fc40d70d7"],["/tags/乱码/index.html","e355d58926e42193d47f1288c42b5ec7"],["/tags/二分套二分/index.html","e2ba276bfc947c87cdbceed7596b23ef"],["/tags/划水/index.html","a001a883d68f62ba279780a50fd25ca9"],["/tags/包管理器/index.html","53f11b7c618754628d3c59656bb01bf0"],["/tags/图论/index.html","eb95e7c168e2b6043bb7df5b198bf676"],["/tags/字符集/index.html","88afb5ccb7caf034bd8d8236a70dfb1f"],["/tags/应用/index.html","15522ce8f6afc730002b1837b60257fc"],["/tags/悦读/index.html","dcbdfabe30655b4fbfde2e6ff87bfec8"],["/tags/操作系统/index.html","6365cee368e2bcd3fbe177e43a8d2513"],["/tags/数据结构/index.html","edcb1cb29729b98c516a60b7fff9743a"],["/tags/数据结构与算法/index.html","7bc4d7b3dfced97b8ad9ef535fda6104"],["/tags/新年/index.html","ab148f7cbde204e623e444521faa3cde"],["/tags/杂谈/index.html","4847bf7eb7eb7942e139c1f50a51f726"],["/tags/深搜/index.html","2a1dda047ffa80ce91ba84a538e2b9c6"],["/tags/笔记/index.html","74e59a271e4217110d34224062da1325"],["/tags/算法/index.html","b23c3786a3f09bbd642edb5fa052a5bf"],["/tags/线段树/index.html","6471a06bfeddd48b3d4f2c7cca4feef0"],["/tags/编码/index.html","b472ee2312b70707b7071297a60e11fb"],["/tags/编程技巧/index.html","03e5305679f19edac7ae6f3221d9d250"],["/tags/网络流/index.html","e8a8305960f44454d070204c68e395e8"],["/tags/萌新/index.html","b30f8d58ee92290818ce1bddaeaf4c64"],["/tags/计算几何/index.html","78c274cd13f9e09c15ed6522b666b029"],["/tags/计算机组成原理/index.html","f0d0a2dde5dcab5cdcbec423e1d9feaf"],["/tags/计算机网络/index.html","c49085d68d808655f553d6bd7dd2da1a"],["/tags/质数筛/index.html","c6f6bf366a4c7bab0efea659b44dc8b1"],["/tags/软件/index.html","10509df0903d0d3e4c0ee9ca8337fe3c"],["/tags/输出流/index.html","0e264214bfb149fb713049c983f6d035"],["/tags/镜像源/index.html","f90573f934628acc17ae6aae3bb20ccd"],["/tags/随机增量法/index.html","706140e8f7e86ec8a92447c3c645a05a"],["/tags/题解/index.html","4c3d3bfa5400fc24a458911b828a7ee7"],["/theme-sakura/index.html","28b515068cee3eb0a4b7d261fd893f77"],["/video/index.html","b76c47eea1248058c7956590bcd5cefa"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-brands-400.woff2","8b0ddedbb27cbc9971c8667caa8a0cc1"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-regular-400.woff2","61f30b79daf5b31f0d254a31fba66158"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-solid-900.woff2","c64278386c2bbb5e293e11b94ca2f6d1"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"],["/webfonts/fa-v4compatibility.woff2","4bc58bc16bb05a05d3a47a4f7e143b75"]];
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
