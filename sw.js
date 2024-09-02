/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","b04061d9db1c4eb79ceb7d1fb444fc79"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","e725ee5d5ae6716e2de440c8fc1c80d6"],["/2023/02/06/C语言链表/index.html","13f23ebf6d5bb32bccca4e3578d77681"],["/2023/02/06/书籍资源/index.html","2ab57b6763824caa421a547c43e94a3c"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","63824d67fb7b54f28e5777b934e1da5a"],["/2023/02/07/为水而水（笑/index.html","084176d9b0a2af7ee0755018ca63e5dc"],["/2023/02/08/洛谷主页源码/index.html","d5b56e07fbcd36f01fa3a4d508351a27"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","37f37412e18a0aca6e50db77f1897693"],["/2023/03/09/Web前端笔记-Emmet/index.html","229b982ac0e31b53d551fc18262cadc5"],["/2023/03/23/gitalk-评论/index.html","8264f70f1005a842c9fd6f32e62eeefa"],["/2023/04/10/用C语言实现字符串全排列/index.html","217753dc47c682a38244063230bc9769"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","0003aa0af81248f04cfa9d527ed445c8"],["/2023/05/15/C语言基础排序-demo/index.html","c5d1ff88d9edbda40772aab7aeb931e4"],["/2023/06/14/闲着没事干/index.html","39d6ecee46dc5f2f0575d7462ea167e3"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","e8543e71ea021bafb8807f792d8099eb"],["/2023/08/01/javase-note/index.html","592f74e0ef28a7d7003f9b9c538858eb"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","abd74101c7b1aaf32b776b680a614262"],["/2023/09/14/vue-pure-admin/index.html","9e54320c883191abf350d27e66035ee3"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","81890b70af3af392c6b0558ab2c3b66d"],["/2023/11/28/C-CPP-the-memset-function/index.html","bff99a78eb839e79da9449d1367ee4dd"],["/2023/12/13/javaSwing-DynamicClock/index.html","a27c55555a7e2f84844c3cff627b9761"],["/2024/01/24/builtin-系列函数/index.html","df806f5ecdee79e82b7a3437ac8d17fb"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","69c78ce12ea6f4775cdc4a5a72bda8ad"],["/2024/02/09/新年快乐/index.html","da935cb141a76825d0add02b2e2e1198"],["/2024/03/26/408-route/index.html","dc9169e77a28f3cd0c735d2a7389bca8"],["/2024/04/07/转载-线段树专题-xyw813/index.html","c69f1b11c4865ce4495237a164b6ef12"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","36e36c9da2aab877b4a71a3f77bb903e"],["/2024/05/03/Adobe-PS-2024-软件分享-torrent/index.html","8854970596b33ba780e10930197b0d75"],["/2024/05/06/cloudflare-display-issue/index.html","8a854b2d69b9f40456922d36db3c94e3"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","3522792d1899cabfb80d75ecb763e8ae"],["/2024/05/22/常用STL算法库/index.html","908c5f0f45c6b461d7eed8500c57d176"],["/2024/06/18/P3517-POI2011-WYK-Plot/index.html","90bd389288473fa3636bc102ba90a88a"],["/2024/06/25/open-source-LinuxMirrors/index.html","242bcd8ab7e770f760907e06fca2d935"],["/2024/09/02/Dinic-and-LuoGu-P1343/index.html","859497faec367acb526f9a5f0258a5ee"],["/404.html","7b7c2b12ef5e2b95eda92262d85e6cd6"],["/about/index.html","f097a90c60b3cdf4cac36599240a3943"],["/archives/2023/02/index.html","1412b8995033794a77ae367b5363817e"],["/archives/2023/03/index.html","89394b8d7780ea95778e6296f4126f44"],["/archives/2023/04/index.html","0b40fcc116e849851e37f76fe015f7a9"],["/archives/2023/05/index.html","a7932f776482d85b8a436fa13f13c96d"],["/archives/2023/06/index.html","72b1f451c0e3e6f2f1fd10e4c039b167"],["/archives/2023/08/index.html","f53afb193a2bf5ee19ffad9108fb47ff"],["/archives/2023/09/index.html","267643a4a8599903805afe1e7d5702f4"],["/archives/2023/10/index.html","4362aba4e4fc22185e22042529c10240"],["/archives/2023/11/index.html","e7f6edbd6927e480a828c14d4c99ec8e"],["/archives/2023/12/index.html","a6c36f1463ebe150c8f0c6e55f30aff9"],["/archives/2023/index.html","d5714d4bf845d44221e226cda4b9a181"],["/archives/2023/page/2/index.html","d5714d4bf845d44221e226cda4b9a181"],["/archives/2023/page/3/index.html","d5714d4bf845d44221e226cda4b9a181"],["/archives/2024/01/index.html","a598b19d9f247764cafb49d5aa259a9e"],["/archives/2024/02/index.html","75157a12d3364d2cbed68427819e1345"],["/archives/2024/03/index.html","8a81e0c46d7066ec7d0e1c7ebfb7e597"],["/archives/2024/04/index.html","20bd0ff772bdcce8c3c95e87825bffce"],["/archives/2024/05/index.html","a15dfe142c935ac50b5ccf16475f8bf8"],["/archives/2024/06/index.html","651a2c869baf9198fdb7e4e8a628130e"],["/archives/2024/09/index.html","fb345c2c5bdc0338e2fe5e7ffdddba88"],["/archives/2024/index.html","d0d42a0339e813bec123be7fe7d66ea8"],["/archives/2024/page/2/index.html","d0d42a0339e813bec123be7fe7d66ea8"],["/archives/index.html","03d35e530565d76ad48fd750caf8e282"],["/archives/page/2/index.html","03d35e530565d76ad48fd750caf8e282"],["/archives/page/3/index.html","03d35e530565d76ad48fd750caf8e282"],["/archives/page/4/index.html","03d35e530565d76ad48fd750caf8e282"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","a7539651d575511f2a45fe587232ee14"],["/categories/技术/index.html","bc0a1ebd7ee0489beca99d6e6675a693"],["/categories/技术/page/2/index.html","cb78da2993ef5879ce45500f1299911e"],["/categories/技术/page/3/index.html","1e7621a93083f609cac61c41411475bf"],["/categories/资源/index.html","36e0b062a12ca2077a8cd3748f76989f"],["/categories/转载/index.html","708f9faf93aa3fc81b3e3beaaa9a9d65"],["/categories/随想/index.html","8a4cf0d0277a1354466d6cac8218ad6a"],["/comment/index.html","f9f46cdfc12a7a721e7c790d7b88cd8f"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","1f09c3dd9fabab91ea957a1354098c1f"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","d92341cc69d90c5325ded1718ae9e7fa"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","ccd596e06f85d97701b321f3acca7e1c"],["/index.html","c22ed7c00dd1ee54ea351a9a22a79858"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","3bdfcef62390553b102cc9942def565c"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","bd288c24395ba5f78de9a6d2cb7ccff7"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","5251f52e0c33dd01b464c43c48789305"],["/links/index.html","9d4477bfea22097476cb9c915af99c00"],["/music/index.html","f379481add2c245ff3849156199c2092"],["/page/2/index.html","3592ffbaa265778524b8183d4dde3b94"],["/page/3/index.html","8a3fb4b3dba0ebbf70367b5a3b829828"],["/page/4/index.html","556f0d70c32802107ae346df9bea90d1"],["/rss/index.html","724d1e10df301faeccffbaa8e08e99e2"],["/sw-register.js","e3336349866e023817561112834b9ffd"],["/tags/408/index.html","25d5d5c302fc6b4da3120e092bdbab21"],["/tags/Adobe/index.html","e0dce1ac181e4a774f35830d976a8514"],["/tags/C-C/index.html","1bdd5d56d756fb43806d13e889dcc14c"],["/tags/C/index.html","4c69cb1c896898bed6e9fef0aa05dd4b"],["/tags/CPP/index.html","083d7938db76f3271f76e125d0286ee3"],["/tags/CSS/index.html","a6db5e743159a2e5a7b4d091e2de02ee"],["/tags/Color/index.html","db26fc878f4bf3d0abe1a091f38dd42f"],["/tags/C语言/index.html","7b30f40659c5815d6001f87cfad4bbbd"],["/tags/Dinic/index.html","9f5a5bd862ac095e6e8a0210f84d4557"],["/tags/Java/index.html","2bf8dcc3ce36bf41983e306daf85228b"],["/tags/JavaScript/index.html","2096befa49b4ae1ee9e9170f776653bf"],["/tags/LeetCode/index.html","90c437e4003d706388799fe0f93c44d8"],["/tags/Linux/index.html","f5a167401d92a041e0809eebe542b5c7"],["/tags/MSYS2/index.html","dd48f0577dfefe76dc6e4176963b3487"],["/tags/Note/index.html","1756cf8f5e57f4ce0ec425df343ee565"],["/tags/PS/index.html","fc7eed74cdf028839f419be04061788d"],["/tags/Rocket-Loader/index.html","856aafac293502d4f8cd22d5bb331d3b"],["/tags/STL/index.html","6dd4fc5bb4cc8b3729e6439ba75be45c"],["/tags/Scoop/index.html","1b02204e0a46d0975096ffbf35379f81"],["/tags/Software/index.html","9425647873fe9274dbdd384e99c6e5d7"],["/tags/Swing/index.html","62e523e883032c155c035f2cc9fe0597"],["/tags/VSCode/index.html","03e8e66cae16c0699609ac3d2bac4b1a"],["/tags/Web/index.html","3b4f8e1fa31366252a35f20c2ce7e3ee"],["/tags/blog/index.html","f2140f8ef7d6bfa4393f1e628c421320"],["/tags/builtin/index.html","159aa667d73e37d16a4a3fe1f0751ee8"],["/tags/cloudflare/index.html","744d94405e7812747dba68423e4c80af"],["/tags/index.html","21501bee1dcd64b9cc7e915d10be900d"],["/tags/tools/index.html","568bdbffc393509ab349b803d263c4f8"],["/tags/vue/index.html","e9dbf643160c2363f45cc3beece9feae"],["/tags/二分套二分/index.html","74fee5241b806751aa2c62af2d93b257"],["/tags/划水/index.html","6863b26cb567585e82f1672ec7333904"],["/tags/包管理器/index.html","92ac9bd6bab9e76439a49be4442c4a34"],["/tags/图论/index.html","9d4e51ab8d61cfca70adaa41f40719a2"],["/tags/悦读/index.html","afc870d1e01c61b4b3f638e83521a7f6"],["/tags/操作系统/index.html","c2231458f74ebf79b084bf0f2fabf01a"],["/tags/数据结构/index.html","ce93611b9f83b8c8cb687b37f7a658d0"],["/tags/数据结构与算法/index.html","fc50e155e79b58b3a124eb97684f5cd3"],["/tags/新年/index.html","3973ee738c3505ace13875585b385310"],["/tags/杂谈/index.html","05c535d821c174bb48eb478d19e49ab6"],["/tags/深搜/index.html","ab042870cc579f05e9c4801393f5cfdd"],["/tags/笔记/index.html","09fb36f8db8c4a509ed6b1792bd8e428"],["/tags/算法/index.html","46e2b74a89e5fd7d608761d9519ab1bc"],["/tags/线段树/index.html","93f8f80b3335736f4e75adcb3f0c5fcf"],["/tags/网络流/index.html","4f597e5a969aabac2fd11a4c9497c1af"],["/tags/萌新/index.html","11c3bb05d26ef9e1a299a186c47319ca"],["/tags/计算几何/index.html","b6cf0c0f363d963d5be7050a528fca56"],["/tags/计算机组成原理/index.html","a7268f1ebb5c23688e73b5f5f60345cb"],["/tags/计算机网络/index.html","079026fea55faec5689bdff9e0f87a15"],["/tags/质数筛/index.html","0fb51c933df9bd59df60097dee7edf55"],["/tags/软件/index.html","c9b777135a0cc5042eaeae3b3500190a"],["/tags/镜像源/index.html","626e8bfd4101abf51b0d9258fb877e05"],["/tags/随机增量法/index.html","62be621f10b8c299d54463c2615a0e10"],["/theme-sakura/index.html","bcb907325e712a58787d322b57e8e648"],["/video/index.html","00b769c4ec7640642c3b84a74a2d7484"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"]];
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









/* eslint-enable */
