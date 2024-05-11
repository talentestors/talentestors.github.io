/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","6516113feeff954cc749853e5553d5d4"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","14da4dc3200359ee738b2885fa3c72a6"],["/2023/02/06/C语言链表/index.html","a18f715584297eb0f5a46ea9891204ba"],["/2023/02/06/书籍资源/index.html","a03e3d52247afad62b3decd74d04a664"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","da746378243bb295c74d85e973bb6d9a"],["/2023/02/07/为水而水（笑/index.html","0fe1b1cd2d7a5ecaf4df21df374187c0"],["/2023/02/08/洛谷主页源码/index.html","1f47f92e7f88ed6d0d4eb8d61cf39255"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","feae8ea266e5517b57e6809f264a743a"],["/2023/03/09/Web前端笔记-Emmet/index.html","012b64d5edd99e801cbbfc354c0be870"],["/2023/03/23/gitalk-评论/index.html","d7538ced78667699c33c8f007122821d"],["/2023/04/10/用C语言实现字符串全排列/index.html","c1c51ff777b6c2638e055ccec0e036b0"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","06d53d9a7873e1699e12cc6d9e435241"],["/2023/05/15/C语言基础排序-demo/index.html","c6a2805c84dc9802eb79873f7f7592bf"],["/2023/06/14/闲着没事干/index.html","b819958e4ca911af3b619ed3d13e8333"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","0d852367d65a79ba08992881b2c132f9"],["/2023/08/01/javase-note/index.html","28d49216509c2104fcdcf70c5adf416a"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","9a577a8a0dbf47e6282d1c4365fd9fae"],["/2023/09/14/vue-pure-admin/index.html","9cb1f21fd00e268a0d3c29efe6578032"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","6ac3a6adf6f769fd5f053005d610016a"],["/2023/11/28/C-CPP-the-memset-function/index.html","aa3ba129a7ce53f5fdbde9ea323401fa"],["/2023/12/13/javaSwing-DynamicClock/index.html","d437c3871d69563cfce6307688bacd3e"],["/2024/01/24/builtin-系列函数/index.html","2ea7736c437b07b40c86299f88cd31f7"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","84c0f079ec28fe281d7f9a151f00c1fa"],["/2024/02/09/新年快乐/index.html","a5e91472177f016fce9bef5f2608951e"],["/2024/03/26/408-route/index.html","e3cec977349b24b7b8235847faa924c5"],["/2024/04/07/转载-线段树专题-xyw813/index.html","f5d176cbc1495527ee5eeab4b97bf2ae"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","4c6b21af0bd9e0bfd93a7fffd11af04a"],["/2024/05/03/Adobe-PS-2024-软件分享-torrent/index.html","4d07c2a10a712abcea303bcee9a27eca"],["/2024/05/06/cloudflare-display-issue/index.html","6b85830a975d1e6fa206bbd7a82633e8"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","f89cfbe7b26f210c491c22935be23e05"],["/404.html","7b7c2b12ef5e2b95eda92262d85e6cd6"],["/about/index.html","a57bd3dfbc2fd92064be72fa134d76fd"],["/archives/2023/02/index.html","1b0fc4ca2a12347dd22e6c7a99fe8252"],["/archives/2023/03/index.html","99ea5481e2e4adf3e1d4ae40ca6770c7"],["/archives/2023/04/index.html","ece67f8005057084a5bc1f86ade402c7"],["/archives/2023/05/index.html","aea58253a10a30f9040cb8846edff3ca"],["/archives/2023/06/index.html","ba5d78cf224fd5270b7fea7d05e423de"],["/archives/2023/08/index.html","cf41f9fa96b1fc1e4f44f06ebd7a49d5"],["/archives/2023/09/index.html","5ff1783205ae6df266e85fd718385f68"],["/archives/2023/10/index.html","38b54eb143653129f46257efdeb469cd"],["/archives/2023/11/index.html","09473885d522ce9306900642e5bc9861"],["/archives/2023/12/index.html","aee7ece47047be8d4fc39cf4f59f2508"],["/archives/2023/index.html","5148eb9853cc709c69effa3ddd494eae"],["/archives/2023/page/2/index.html","5148eb9853cc709c69effa3ddd494eae"],["/archives/2023/page/3/index.html","5148eb9853cc709c69effa3ddd494eae"],["/archives/2024/01/index.html","b3e56b813ae823f3b31a53809e909244"],["/archives/2024/02/index.html","86edf02d26ef556034d536a6a96805c3"],["/archives/2024/03/index.html","25aff9ab85da208f728e5b919bd25b7e"],["/archives/2024/04/index.html","053e3094a6a7d0ea22443a175dfb45f1"],["/archives/2024/05/index.html","23bcc104f962b4592e220cf6fd75aea8"],["/archives/2024/index.html","4f508387ff203e9211829d403ba689e7"],["/archives/index.html","3e2f43285bc5d1704b2c2bb4103f9336"],["/archives/page/2/index.html","3e2f43285bc5d1704b2c2bb4103f9336"],["/archives/page/3/index.html","3e2f43285bc5d1704b2c2bb4103f9336"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","cbf57092e48e9b06b45450b9238d503b"],["/categories/技术/index.html","29c0aec942242cf8062b8ebb781cab42"],["/categories/技术/page/2/index.html","a1843f2ba10e20736294bf4d0a6ee441"],["/categories/资源/index.html","041128e451d6ac39f1f28725eea9c5b6"],["/categories/转载/index.html","25cc955d4cd6e262ef35bba9521762a9"],["/categories/随想/index.html","afb5540acf6d6b20123ab9c140fe8077"],["/comment/index.html","28ab1fe7c344bc9136e892001d8f63f4"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","38b4b5920488dd6461a63e4b42a4db23"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","1f09c3dd9fabab91ea957a1354098c1f"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","5c2015e3a06427128f1094067e0c1de3"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","d3c48fa5a3cc60f7cd93af672c983122"],["/index.html","860a85242c14e9134d68d9b2c1a2a852"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","3bdfcef62390553b102cc9942def565c"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","bd288c24395ba5f78de9a6d2cb7ccff7"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","a46059f4d1f6caf4ba107f856f6a7c1e"],["/links/index.html","58a1f72fd0ea0d59580e663b41c88928"],["/music/index.html","b6692ef039ca7e5e61d35b05153e6945"],["/page/2/index.html","ea892113897afb2890c5640075cdd406"],["/page/3/index.html","c50c153e85d2a89d70b12a7a8e98dffe"],["/rss/index.html","4759df506c274a0663150c16db054c7d"],["/sw-register.js","553a12e051a7e939f3b6d67dd6066253"],["/tags/408/index.html","fb71e2a3500a1c42dadc8f5acd3c2154"],["/tags/Adobe/index.html","5f25c2ccfc14f8793ef4e52ede851f4c"],["/tags/C-C/index.html","bdf41e4b4fd12cb0aea99f573a9248c7"],["/tags/C/index.html","a40504eda1b613fd934b4b3a37dabaec"],["/tags/CPP/index.html","3a4e87902f3259639016d674022035c5"],["/tags/CSS/index.html","d52cbb5ff01c88c2931552f7246a7032"],["/tags/Color/index.html","d799fcace278f59270cc447dec30ded6"],["/tags/C语言/index.html","ee966c654557119a35d69235e6b81d9d"],["/tags/Java/index.html","db228d1650e66407f759b36ffa7a5acd"],["/tags/JavaScript/index.html","7e193509f72a5da0f18f741cbdc56197"],["/tags/LeetCode/index.html","27f6889dd8eba904062bbc13f2d5f7cb"],["/tags/MSYS2/index.html","b2331c8865b648d9665bca4374b65261"],["/tags/Note/index.html","fc34136818a1f72c1534867bd9cedf86"],["/tags/PS/index.html","51aa799f23f0f6db2ee30bd3f0ab0459"],["/tags/Rocket-Loader/index.html","951cc9970a2653b5cc02068db7cd2a3a"],["/tags/Scoop/index.html","e8635c9debc145345b79268ae55eba8d"],["/tags/Software/index.html","de1b9c55a9c1f8e6e6446b7520e2d64c"],["/tags/Swing/index.html","f2fa492be2f271f16ab27af46e00c917"],["/tags/VSCode/index.html","b579e580a6dff1c779d06a8b31bb4e6c"],["/tags/Web/index.html","a4b99b05a4ed8d9e0af70a9b4f95a4b2"],["/tags/blog/index.html","547e7773c789db4364ddca214389c963"],["/tags/builtin/index.html","e3473ecdefa80cc6384684dcdec11b6a"],["/tags/cloudflare/index.html","2928f5619696460da91efb3c4f248cb9"],["/tags/index.html","b462dda7ea4288d62b43ca50e50f6f06"],["/tags/vue/index.html","29ff688fedb314fc1c6c840152728922"],["/tags/划水/index.html","2df9abce96552a6d04bf2e9600c4e852"],["/tags/包管理器/index.html","f8c48ddad2f87f94aed878671c13cf12"],["/tags/悦读/index.html","0d24738dfe2d2b14d342bdf32ca26153"],["/tags/操作系统/index.html","b3d6b90e9eeeffeb20447878d427da36"],["/tags/数据结构/index.html","1a465ed4fa9e8c79f736657c6f853ab2"],["/tags/数据结构与算法/index.html","b0c2f8421b641d8a75c0c6d7a05fb610"],["/tags/新年/index.html","28af1dfbc489b366a8a92ad607bd5803"],["/tags/杂谈/index.html","25bfc62fec519c413cf1d8b1289d3bed"],["/tags/深搜/index.html","714e23372f2725201196ed39a10c5c88"],["/tags/笔记/index.html","bc9b8831be46e49582ecea145d811c4b"],["/tags/算法/index.html","d9138140768c5226bfc1b1abaa336681"],["/tags/线段树/index.html","45442d0c2f68d633773c7394abd8dd5d"],["/tags/萌新/index.html","068dac455a87170037888673bc660a27"],["/tags/计算机组成原理/index.html","75fe1c773d0b01beced7ecbfc181280b"],["/tags/计算机网络/index.html","c2a51775a7df53345859d4280a02ccb2"],["/tags/质数筛/index.html","679be929a4a5e22cdd0e401ba4233e19"],["/tags/软件/index.html","2fd81eb785b1f82a0d7d047f95ec404b"],["/theme-sakura/index.html","af4ef73c14c6785c0ccc9fbb997094a0"],["/video/index.html","e08b05edb868726a67ab7ef33634e06e"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"]];
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
