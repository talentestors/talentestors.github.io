/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","4d3da9d2644840a84af03a4082c1153a"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","4c46e720c4b0f817fca56962e5ad1d71"],["/2023/02/06/C语言链表/index.html","7a5796fae40757c33c1f32982580546b"],["/2023/02/06/书籍资源/index.html","258ed3a8c5b61449f167fcd5a7cdf5bb"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","c8c170bd5f29d60556d1c6c0e595f16d"],["/2023/02/07/为水而水（笑/index.html","3a42f1111031ee863f9a852abf7446a3"],["/2023/02/08/洛谷主页源码/index.html","d355719bb7d2ca1895def0422a6358cb"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","75581c0875b383a1351e249afa1bfb01"],["/2023/03/09/Web前端笔记-Emmet/index.html","ed12416f45f821d962a700759abc57e4"],["/2023/03/23/gitalk-评论/index.html","cdb406119706f02a2bece79621b59008"],["/2023/04/10/用C语言实现字符串全排列/index.html","8bff8436b69b46f976b4c53ecac8643a"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","79750f219c3cf511e3646dfff46a67e3"],["/2023/05/15/C语言基础排序-demo/index.html","fa11c1e6ee5d4fee0fbcdde9c74a59c2"],["/2023/06/14/闲着没事干/index.html","7cca985992cade16d83320e7af4796b2"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","af6b4844b64c4345f5a755ad7ceed226"],["/2023/08/01/javase-note/index.html","b481005c0f5b6f2d70236e8331d9a878"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","89d2d3cc252878654cbae7f6ccead987"],["/2023/09/14/vue-pure-admin/index.html","f976e553dbe6e4860661b2a6ee836176"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","65cfe3217ff19a5d331ff1f948d28f3c"],["/2023/11/28/C-CPP-the-memset-function/index.html","236104cb1b31e62f02b2a7aa4a0b942f"],["/2023/12/13/javaSwing-DynamicClock/index.html","25c6fabe04c5810e4bb236dcd3820665"],["/2024/01/24/builtin-系列函数/index.html","4f3eab4cb9df85fd09792e8075c8a004"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","47627523316713e1e3bc76a121494e0b"],["/2024/02/09/新年快乐/index.html","c72acea925ae1b8867c65325a3dbd6ab"],["/2024/03/26/408-route/index.html","7c34f65bf93b6363349ed26dab0342a1"],["/2024/04/07/转载-线段树专题-xyw813/index.html","6e6850cc509b0e6ebae5f07214c7a946"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","df2810b2b67371ae44cb2add398cb4c5"],["/2024/05/03/Adobe-PS-2024-软件分享-torrent/index.html","c479d84b71ee90b215ae913d730abcdc"],["/2024/05/06/cloudflare-display-issue/index.html","5739f435929a2fdf339924f68160b02b"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","10442847057b1973393c252534bad8f3"],["/2024/06/18/P3517-POI2011-WYK-Plot/index.html","0ffea15b667e83f95d6266222fdc574b"],["/2024/06/25/open-source-LinuxMirrors/index.html","79323c5dc0210969951a744bc5935325"],["/2024/09/02/Dinic-and-LuoGu-P1343/index.html","deb0748e5a92faf4782049ff4d0b3684"],["/2024/10/08/黑题记录-2D-Geometry-110-in-1/index.html","1a18f04e37f32cda1db2d740f09d8ccb"],["/2024/10/11/常用STL算法库/index.html","09173be9750c62b19549b56706ede19a"],["/2024/11/28/在-Java-中设置输出流的字符集/index.html","068971a14e117465e47337cfbd7331d4"],["/2024/12/05/JDK-18-以上使用标准输出流中文输出乱码问题/index.html","e88bd1d1e12072bc8ac4aa0f7ed6d89e"],["/2024/12/09/Codeforces-Round-992-Div-2-解题报告/index.html","0323244222a76bbdc9bcfa1321dc8566"],["/2024/12/17/Where-are-those-algorithms/index.html","74f318c77f5f68bc782ae6c28b5e5593"],["/2024/12/26/重构评论系统/index.html","daeeb8448b36bcec57b7f4ba1f1442e2"],["/2025/03/15/GitHub-Skills/index.html","3173d5f6b1c5d3ecf48f2529115cef2c"],["/2025/03/16/lombok与delombok-在gradle上的配置方法/index.html","05340decf02ae6794e6c271039e3d0ae"],["/404.html","7b7c2b12ef5e2b95eda92262d85e6cd6"],["/about/index.html","60307ef0254ff1146d64f3ca656214de"],["/archives/2023/02/index.html","e348137777352bed24a27a018347ac16"],["/archives/2023/03/index.html","afcc51eb1191d95d5546b00fbb19da63"],["/archives/2023/04/index.html","68cad8bfdf84e89ab165aee659fc8023"],["/archives/2023/05/index.html","b84d4465497546a9eb802813ce0c3f33"],["/archives/2023/06/index.html","2ccd65b5f593d300c20513c11bc62e0a"],["/archives/2023/08/index.html","8b9da1a34c2175d92687cff623548fa0"],["/archives/2023/09/index.html","200b2b86fdebc7b1f20ba65ea52c6027"],["/archives/2023/10/index.html","343f459fd41b483e0958751d4e9e63aa"],["/archives/2023/11/index.html","f0c9f40866fa6c51729c1a56babfd96f"],["/archives/2023/12/index.html","035fe07609286a7e8c79b0f68c407386"],["/archives/2023/index.html","a29f7c42f91bd8b658e9c8af25749061"],["/archives/2023/page/2/index.html","a29f7c42f91bd8b658e9c8af25749061"],["/archives/2023/page/3/index.html","a29f7c42f91bd8b658e9c8af25749061"],["/archives/2024/01/index.html","7af3a9c70c56101f74ba983aa6b419bc"],["/archives/2024/02/index.html","4e91b5f1c7adb4349752633c327d2ecb"],["/archives/2024/03/index.html","bf4e96a33f2b54fc794ce40241e7b23e"],["/archives/2024/04/index.html","9d563a5ff8179968f4827b07bd9702de"],["/archives/2024/05/index.html","d61aecfa338361ce3a0cedbb92b073e2"],["/archives/2024/06/index.html","1e9e7801c3a394feb8d820d278896fb3"],["/archives/2024/09/index.html","ea474e0cb6f7e4f852ae6ece86bc57aa"],["/archives/2024/10/index.html","f40b95bf57483f7af506c1d2ed4dc8e2"],["/archives/2024/11/index.html","4f838e5e5504a0a8422cdfe7169a3442"],["/archives/2024/12/index.html","21f2e04f7a387b1d5ee0c1b2f565ec44"],["/archives/2024/index.html","fa70ac3b4583f43bedb60352a187759e"],["/archives/2024/page/2/index.html","fa70ac3b4583f43bedb60352a187759e"],["/archives/2025/03/index.html","c361a225a9da779d9c60c5a94b8a134b"],["/archives/2025/index.html","9f36ce8bfddfd7ac3d28d942fba44533"],["/archives/index.html","b7d2d6dfa219025211e2f5ce9d0ce6d4"],["/archives/page/2/index.html","b7d2d6dfa219025211e2f5ce9d0ce6d4"],["/archives/page/3/index.html","b7d2d6dfa219025211e2f5ce9d0ce6d4"],["/archives/page/4/index.html","b7d2d6dfa219025211e2f5ce9d0ce6d4"],["/archives/page/5/index.html","b7d2d6dfa219025211e2f5ce9d0ce6d4"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","3f6a2a32e1e64311b1a690454c877ab1"],["/bangumis/index.html","94e89445f861815d8f553a9b5ae7055e"],["/categories/技术/index.html","957df676df8ed3ea0f2885d35b9b43a5"],["/categories/技术/page/2/index.html","edf58a4b4dab410cfc84038a9573b66c"],["/categories/技术/page/3/index.html","c115e59ff920886711fd475593e4298b"],["/categories/资源/index.html","dd95a2d0c733656c0d7672ce1da6caba"],["/categories/转载/index.html","f550992c440f6f7cb94276d6ac97afe3"],["/categories/随想/index.html","c108f1a3cb33a5be5d7e701614d1ed96"],["/comment/index.html","4b1c9ac8d19f4b712461d9a81212a19a"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","71cebc0cd666f182f1ab1dbe4a9f15c1"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","73bb864d038d4bb3d83361b8910786bb"],["/css/style.min.css","45b4cf23f077e45f4776fb3f47a7cdd6"],["/css/tags.css","eba03aebbf2f44113682d0ca1e19fcbb"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","8ea9b765a03a1b1f59c47ec769206147"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","77dc9dfec6b83600615c478d7bca5eae"],["/index.html","ecff3f599209b15c8882d9f9027cc6f5"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/js/lib.js","65f02458a8e38579dac5594f252bd66f"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","f1afa64bc2698ed86b55ab396a0c7ac3"],["/js/sakura-app.min.js","115ca9549a404cd11acd81cd31abe374"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","c757e76be80d1da11f5c02c68665312c"],["/js/wrapImage.js","29007a235330279921b40783f3752c1c"],["/js/wrapImage.min.js","fa46e73ad4d52096338f455d716a71a2"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","02be70fcacf51235a708bb25cd06b8a3"],["/links/index.html","89fff24843f6c06a0466086cddb1de7a"],["/music/index.html","7c609f62207c085fe7356418712b9df0"],["/page/2/index.html","f0616fb17f8835661118e403f17bcce5"],["/page/3/index.html","13013e32d65f6bf3d082fc987da2248d"],["/page/4/index.html","22be34a2f2ca3b81753aec70e12c3f3e"],["/page/5/index.html","90a5b30c94488df0307a3e887da26a25"],["/rss/index.html","c6c49e42ff718fac80b6adac52d99475"],["/sw-register.js","40b067c1a08a815352cc008278dde91e"],["/tags/408/index.html","dc0389b3a3b47389cefdbdd24c345889"],["/tags/Adobe/index.html","cc1b0d775861b5d7bab60e758684047f"],["/tags/C-C/index.html","49abd8c667aea74c191c11f8e7b6884c"],["/tags/C-CPP/index.html","b57e360cb1e8810a76fd84b0734e878a"],["/tags/C/index.html","6363e0ec55e921d4258469ff83fd99ab"],["/tags/CPP/index.html","e916d080b0227cfe7293eac6dd61ff84"],["/tags/CSS/index.html","47faeb9e3f5d4c97222646f8010360b9"],["/tags/CodeForces/index.html","46bb80984b7a1423e6a3f93932c2d73b"],["/tags/Color/index.html","0bcca168b026a22efa9b50afd02d462b"],["/tags/Comment/index.html","68d68ba38337fd9a2b320b9b6745dce9"],["/tags/C语言/index.html","d0fa9686d99422a94a184df34a1ba5ee"],["/tags/Dinic/index.html","b2dfd0c596e129333ea70c9e20172471"],["/tags/Div-2/index.html","265a78e9873fd1ab531c94f2be7e160d"],["/tags/GitHub-Actions/index.html","1c0c23ebb9c26a6b2c2949a65c07460f"],["/tags/GitHub/index.html","b952726fb4959bcd7929315573a2ae4b"],["/tags/Gradle/index.html","de411efba8cd9769c1085a5ce2736280"],["/tags/JDK/index.html","dac342c7b24daf10f185de04849dc3a9"],["/tags/Java/index.html","f622e60da551c27f683d298e5f5071a2"],["/tags/JavaScript/index.html","48fec9acababb53e6479d1bef5fbcdd7"],["/tags/LeetCode/index.html","aba1856be3ab7d4d8a8ea7f3b801959f"],["/tags/Linux/index.html","7842bb06d4a235f0e3a42ccedd2511e6"],["/tags/Lombok/index.html","f66e57443d74345fa00d5d5c89c4e857"],["/tags/MSYS2/index.html","49be29fa349b5ed764e38bb4f4330720"],["/tags/Note/index.html","7d703115401c2b3f522e34b9f8b5815e"],["/tags/PS/index.html","e30839a86474014b5412ffa1f23df2e2"],["/tags/PrintStream/index.html","376c77a6cf57546ee774dfed7d641440"],["/tags/Rocket-Loader/index.html","d0e4801e49398116b7c38a593bf1ba7a"],["/tags/STL/index.html","ee05e6db0116a409e9a5f7b7db87d808"],["/tags/Scoop/index.html","e5affaf6e28dc2a898bdb540ad10dd22"],["/tags/Software/index.html","da692545c3a2a6d78bf18a864758bf08"],["/tags/Swing/index.html","4e3f0bda88a1d0b599d9eb987f5c8566"],["/tags/Tomcat/index.html","24f602ea47678b126a497e58bf31e518"],["/tags/UTF-8/index.html","12cffad9331b576ce61cc645a441355d"],["/tags/VSCode/index.html","e6bfea4093382cb55dea5018d7e1d58c"],["/tags/blog/index.html","026d197fa2a5ba0b264d88c15cdac874"],["/tags/builtin/index.html","7466d7d451cbef3f0ac539744044a52f"],["/tags/cloudflare/index.html","51635582caa92bbeb6ef5416f81feeff"],["/tags/giscus/index.html","225630ac62129c6e8309d726556ce6db"],["/tags/gitalk/index.html","643c3b365fbb1dd30616cee8c50352d3"],["/tags/index.html","5ba6ec5da86f528474224f5febc9ee1c"],["/tags/tools/index.html","05a49b10938169d4f80e74280bbc5f94"],["/tags/utteranc/index.html","a1749faddaba4371a8cdf10c93299ad3"],["/tags/vue/index.html","181f4e78eb66c81a8f9b2ab7b5c41f5c"],["/tags/web/index.html","aabf3750c20b2f29c6d167dd9604934a"],["/tags/乱码/index.html","9b3c5e1474c9a3a9f313e2c694cbda8e"],["/tags/二分套二分/index.html","6e208897ef50024b610e3ffd317e1ecc"],["/tags/划水/index.html","6566fd194924594b1533bb92aaca3212"],["/tags/包管理器/index.html","2a2e0d88f5c8f357777eaf626056b63a"],["/tags/图论/index.html","ee6ccae0e3d1296b1a91c7c8ed06d42e"],["/tags/字符集/index.html","f6fd41793ffaf335d7158e30b42ae545"],["/tags/应用/index.html","3184a43969af40d8a953961c2dd6abcd"],["/tags/悦读/index.html","d9eae6fca68e122c2494483a51a75f04"],["/tags/操作系统/index.html","e2e41ec398de0b1d20ccf7afb2e85717"],["/tags/数据结构/index.html","480192592f0704d4fbccb76b002b2619"],["/tags/数据结构与算法/index.html","5505f6bc23a1e228679e7d8847436417"],["/tags/新年/index.html","931fdf8c94afa27f31894015910cf5b7"],["/tags/杂谈/index.html","704950bba132ef0f24ee7b548ea670e0"],["/tags/深搜/index.html","655815503e1858bc93458784050f7e96"],["/tags/笔记/index.html","5b7d3a665761fdc092734a1c749c931a"],["/tags/算法/index.html","03ca369350645cb967ea4d5cb2733f24"],["/tags/线段树/index.html","c921f425fc02f17d8aeabfa9e800dfcd"],["/tags/编码/index.html","a7430ecabbde7e56f948a8d3b3cd8546"],["/tags/编程技巧/index.html","026480de6aab5272dfeced042724f9ff"],["/tags/网络流/index.html","531531b05647019b957df511eb0eb56e"],["/tags/萌新/index.html","1cd7d58ba122f0b8655bbd6fdb5ce826"],["/tags/计算几何/index.html","d6984312dfa65b973a77121e01967c8d"],["/tags/计算机组成原理/index.html","65ab990947ecc8df4d00af0b4c992b61"],["/tags/计算机网络/index.html","9d952fd57751bb7074e5531eee7aa8f4"],["/tags/课程/index.html","7c28c4ccb2515c3c585501f491625d57"],["/tags/质数筛/index.html","8f5733ddba2229afe6d8db5bcba75675"],["/tags/软件/index.html","46033913a48e4c428927b5234b67da6f"],["/tags/输出流/index.html","30318fe22f723aac434ebf64bb7fb140"],["/tags/镜像源/index.html","6422cf1e61109bdd67ad808938575059"],["/tags/随机增量法/index.html","f1f4f082f2ee14acebaceeb74d6df5bc"],["/tags/题解/index.html","c4652016010ee655488f4e9ea677dbfa"],["/theme-sakura/index.html","bf257cad59e72ddab2fd8db586ccbe7d"],["/video/index.html","5392de09332da7e3f62882f7b4cd6354"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-brands-400.woff2","8b0ddedbb27cbc9971c8667caa8a0cc1"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-regular-400.woff2","61f30b79daf5b31f0d254a31fba66158"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-solid-900.woff2","c64278386c2bbb5e293e11b94ca2f6d1"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"],["/webfonts/fa-v4compatibility.woff2","4bc58bc16bb05a05d3a47a4f7e143b75"]];
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
