/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","0b935e67f8f66873c6c628672cc2d3d2"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","3771579981da70214f64f368519c0772"],["/2023/02/06/C语言链表/index.html","a1d76491e3969feee8d297d06311fce0"],["/2023/02/06/书籍资源/index.html","4d75c1447b4b7c273f165257276e98b8"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","3464f3ecc04e778a84ce30407c9fc3ca"],["/2023/02/07/为水而水（笑/index.html","0ec9c57f3bad75ff330b3c163889a970"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","241ae3443bcbf8c9baf8d46404da6885"],["/2023/03/09/Web前端笔记-Emmet/index.html","e52ffca62779c6c74e548a0017c689ad"],["/2023/03/23/gitalk-评论/index.html","9070db46e3cc1993634f1f37e1c32e95"],["/2023/04/10/用C语言实现字符串全排列/index.html","91207810dd1ada1f20e25466568c86db"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","53a4b242a11474c17c3f7e33127d5873"],["/2023/05/15/C语言基础排序-demo/index.html","35ba33e8a5e3fbedd4ca28b8e7a02890"],["/2023/06/14/闲着没事干/index.html","1a3c1eabf4b89d6ac775c5988eb9543c"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","68826cf33e62d9ebc87f572a2cbf4b3e"],["/2023/08/01/javase-note/index.html","8d6b0699d6fe2a2a402b49a1ac428a2c"],["/2023/09/14/vue-pure-admin/index.html","fd8387110ad26984d4c3deaf011d6bfa"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","7413541e6143abd4b6b704bf11f35c48"],["/2023/11/28/C-CPP-the-memset-function/index.html","e8f17665b7f9c94d07da88d1828d64e9"],["/2023/12/13/javaSwing-DynamicClock/index.html","6bb5d8cd46315c5c9ac8979b57e14a69"],["/2024/01/24/builtin-系列函数/index.html","14b77800aa625e269c1ec38fa6619e75"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","e418ef333f41ff21fb2a8e4699f6c867"],["/2024/02/09/新年快乐/index.html","f855f1ed56cc698797a78c6cd2df5099"],["/2024/03/26/408-route/index.html","3f3fe3f49fd2b2f0e571e1e5036358ff"],["/2024/04/07/转载-线段树专题-xyw813/index.html","f119c671aedf3efa7181af73fc27fc63"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","7550d9346348e48bec74ec25d3a506d6"],["/2024/05/06/cloudflare-display-issue/index.html","d23bc77ddef9735fde95367967b053ba"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","20e817e9e610f1470baf93a3b9bf16f4"],["/2024/06/18/POI2011-WYK-Plot-Solved/index.html","ef49fbcf7ae8e3eb5cf5635b6743abc1"],["/2024/06/25/open-source-LinuxMirrors/index.html","58d77dc83ac22dee4efa1f20917e6e43"],["/2024/09/02/Dinic-算法/index.html","0a49675b57f5511b80a63637d9c7b61b"],["/2024/10/08/黑题记录-2D-Geometry-110-in-1/index.html","4f7ab09dc2eebd22f09ddcdddc84c7fd"],["/2024/10/11/常用STL算法库/index.html","77c98db6313088d35d5fa00215e7ca7a"],["/2024/11/28/在-Java-中设置输出流的字符集/index.html","c63df639063ef8fe87bc1b8a8ccb1904"],["/2024/12/05/JDK-18-以上使用标准输出流中文输出乱码问题/index.html","a4dc7a1d7c15675a646e01707c32762a"],["/2024/12/09/Codeforces-Round-992-Div-2-解题报告/index.html","77ce0260390dc8c6b5a3bfe6af4078bd"],["/2024/12/17/Where-are-those-algorithms/index.html","2613d8bd14d247bd77dc15bb1bff1a78"],["/2024/12/26/重构评论系统/index.html","dbbd29651b515dde5a3ed51e39b6c59e"],["/2025/01/01/blacklist/index.html","98de22c16d5c3817cb121396f0da1aff"],["/2025/03/15/GitHub-Skills/index.html","d276f336666e2cce815d3df75977a280"],["/2025/03/16/lombok与delombok-在gradle上的配置方法/index.html","b5afa5c2d53fcbe2ce7d5d7f59a8d2cc"],["/2025/04/09/Codeforces-Round-1016-Div-3-解题报告/index.html","fbf731c67429d7308559dcf8a2a608cf"],["/404.html","7b7c2b12ef5e2b95eda92262d85e6cd6"],["/README_zh.html","4a6dab5734b74fe4b6a0f5dfcfcdc22a"],["/about/index.html","e2cbcd557b7a7a3cc508cb4be88fa75b"],["/archives/2023/02/index.html","152dc3dd0a59c6eb0d73ed37842bca21"],["/archives/2023/03/index.html","cc483beee06c8254ee339c9608384015"],["/archives/2023/04/index.html","7a16b2d631df563a426e10d013ab0cbb"],["/archives/2023/05/index.html","8ca5a4d08aa74f4de6542857aec2bec4"],["/archives/2023/06/index.html","28178bef8f4e048d73ca2bcff8b4e3f0"],["/archives/2023/08/index.html","2faeced7ee8d8d706d33288c694ca99c"],["/archives/2023/09/index.html","415be5fac6171c95b0123e881d12824c"],["/archives/2023/10/index.html","c521401fca465373ddd0d7348f61c2d1"],["/archives/2023/11/index.html","933b8a299f9ca0395f74ca4c3b2c5c61"],["/archives/2023/12/index.html","21157db74c8343966ff5d1beadccb372"],["/archives/2023/index.html","30e3812d4d80d1a28a78ab2da4cc558b"],["/archives/2023/page/2/index.html","30e3812d4d80d1a28a78ab2da4cc558b"],["/archives/2024/01/index.html","c9c96031cf8d93d1c45f6254d1b6078c"],["/archives/2024/02/index.html","6a1fae7d7621284da7eb9990b728fe2c"],["/archives/2024/03/index.html","6a136f0a627a148f18140afeed6bfbd7"],["/archives/2024/04/index.html","c4539599af9283d218b895379779a8ce"],["/archives/2024/05/index.html","8521fe3478535e5d4453fb051e791ddd"],["/archives/2024/06/index.html","d22ba281c3a0d8f223d1864342c82aa4"],["/archives/2024/09/index.html","818502f649177fbeb5d268b81879cfff"],["/archives/2024/10/index.html","1a123b176c8de6393266d916fe7744b8"],["/archives/2024/11/index.html","cf2fe466b3992966d492fdb804e2d3e9"],["/archives/2024/12/index.html","01ba79d3f03c283c1bdd67f8963bbd0d"],["/archives/2024/index.html","9df868457e296940393597582a713185"],["/archives/2024/page/2/index.html","9df868457e296940393597582a713185"],["/archives/2025/01/index.html","bfe53ed27ce4d3d9f5889b8a84066c11"],["/archives/2025/03/index.html","ec615d76be41cfdc805984caf660402b"],["/archives/2025/04/index.html","6d0270b3247d62caac3f288d9c80c80a"],["/archives/2025/index.html","f094a9149f724111a5d059d6f7b3035a"],["/archives/index.html","815fa2db430a8c49ce41f94958bcaa5a"],["/archives/page/2/index.html","815fa2db430a8c49ce41f94958bcaa5a"],["/archives/page/3/index.html","815fa2db430a8c49ce41f94958bcaa5a"],["/archives/page/4/index.html","815fa2db430a8c49ce41f94958bcaa5a"],["/archives/page/5/index.html","815fa2db430a8c49ce41f94958bcaa5a"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","9bf1affa4324d48b56477ebf623e2cea"],["/bangumis/index.html","035daf330e7f8591b017a46d9aa9e264"],["/categories/技术/index.html","21bfc18a85eabc4b19f2943b7b75514d"],["/categories/技术/page/2/index.html","ca2a3bd99e038d56053f663a958c568d"],["/categories/技术/page/3/index.html","be92d84c1eae4f8c5092cf71d770f3e2"],["/categories/资源/index.html","7a1257965f887d48b2fc414fe42d8a48"],["/categories/转载/index.html","087af7ba92ed944c87aca1e99369ee7b"],["/categories/随想/index.html","9bbb112a37e7d10604cdb99e0b13ffe9"],["/comment/index.html","d626a304846c93c07a8751f4b2ccb0fa"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/giscus.min.css","96c42b2029f44095aaf46f6dc0628ded"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","71cebc0cd666f182f1ab1dbe4a9f15c1"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","73bb864d038d4bb3d83361b8910786bb"],["/css/style.min.css","45b4cf23f077e45f4776fb3f47a7cdd6"],["/css/tags.css","eba03aebbf2f44113682d0ca1e19fcbb"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","69c9093d06a9a53683cb3a21d672fb49"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","24e3329cd628ae8cc9c18b5003a9550b"],["/index.html","c882a439ee09ce7388ebef4ba3f5d7ac"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/js/lib.js","65f02458a8e38579dac5594f252bd66f"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","f1afa64bc2698ed86b55ab396a0c7ac3"],["/js/sakura-app.min.js","115ca9549a404cd11acd81cd31abe374"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","c757e76be80d1da11f5c02c68665312c"],["/js/wrapImage.js","29007a235330279921b40783f3752c1c"],["/js/wrapImage.min.js","fa46e73ad4d52096338f455d716a71a2"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","96bf3409be369c6e406053bf9f4ae532"],["/links/index.html","877d1b20fd7350bbd0e845742b4fa73d"],["/music/index.html","a7e9bfd35be4d11dd4f6cfc6d0d17523"],["/page/2/index.html","b7370f3a6b8af7e2003311548c8ccfdc"],["/page/3/index.html","88c4928a6b8a478c14bdb926f089829a"],["/page/4/index.html","3acbdeb109ba32626d44876c3f340012"],["/page/5/index.html","3d3e227f2f47d29c4d5a9b524b042933"],["/rss/index.html","7c15ef506fb70bde67f208fbf417e6b2"],["/sw-register.js","09455e234575ca61442de3b1c30dbce4"],["/tags/408/index.html","dc62734a4ddcd90ce66e0f419eddb772"],["/tags/C-C/index.html","184168aa1506bf9957c86cf1ad26eafc"],["/tags/C-CPP/index.html","95b6c546bd5aa1e936e6e50336242646"],["/tags/C/index.html","f280b5069e2922828daaff64da2b71eb"],["/tags/CPP/index.html","edb5df34fb86e1d739505f9965f60c4c"],["/tags/CSS/index.html","73318df42cf95b0456634283711c2a92"],["/tags/CodeForces/index.html","276f33890a33383ca0638fd42c993669"],["/tags/Color/index.html","d646817a4c57d1f36bc15bbddee69df4"],["/tags/Comment/index.html","05c28ea9e9cef8835836997305fb4132"],["/tags/C语言/index.html","7a3442942266db3196faef1ca0483a0c"],["/tags/Dinic/index.html","820a45fa29b773201416d79ffb8d8b70"],["/tags/Div2/index.html","edf9bd497731a1c3ea9a9ca9878fe06b"],["/tags/Div3/index.html","ae2cd79e7693013515bb02180519dff4"],["/tags/GitHub-Actions/index.html","b1b0c1b6cd7cfe5fc532558fa77a15c7"],["/tags/GitHub/index.html","89f31adccc157c985727b0e23709e773"],["/tags/Gradle/index.html","588670b86111536e9a3726a29271491c"],["/tags/JDK/index.html","44ed5f0619788da1a04526610a04e90e"],["/tags/Java/index.html","fbddfc31ce88c890028e488ce8e4d5f6"],["/tags/JavaScript/index.html","65294f4cb9a0917f39f2a9207b81bef3"],["/tags/LeetCode/index.html","e029f396f0555e5fd4c111e4375c8b59"],["/tags/Linux/index.html","b66ea3ceb7e0b74d680ac7f72011cab9"],["/tags/Lombok/index.html","3f5cac5312cd8c6b330eec5fb4eeceaf"],["/tags/MSYS2/index.html","92c1be0ba3ccbb92ed811c8cd077014b"],["/tags/Note/index.html","a25d6ba5e864a60734d478641ff02111"],["/tags/PrintStream/index.html","3c5835676929b50d7b8e1f2712b5e201"],["/tags/Rocket-Loader/index.html","4a729ded9a90e89878cfdb08e112b3b0"],["/tags/STL/index.html","83ab966b9ea0f53d716d3ba1c6e2dce3"],["/tags/Scoop/index.html","e63a427af253ca132f1def843f75c8de"],["/tags/Swing/index.html","d939c1400173f9cc8cd1601b0d974486"],["/tags/Tomcat/index.html","279441347c4f246c304a53fcc359f877"],["/tags/UTF-8/index.html","cb6c0cb8061ac78c162ad91b7da3f64b"],["/tags/VSCode/index.html","6493b3986fac0ad39fffcb39c3ecd04b"],["/tags/blacklist/index.html","30c79cc5eba7108f64dad6fdaa864362"],["/tags/blog/index.html","e121da4e8b10cb48c9285e24f44f20ae"],["/tags/builtin/index.html","c51293f8eefd826f29f68f33472165f9"],["/tags/cloudflare/index.html","318cb4b659a3ec18bda374c460bc4ea8"],["/tags/giscus/index.html","fbe49623dbcd55ae33ab1e8e70b70e66"],["/tags/gitalk/index.html","07ab8317e3603a9e5d79d893931ef85d"],["/tags/index.html","732ebd8cc88d6bb66319f74c828a0954"],["/tags/tools/index.html","e4f7a0c023abb2ff2752445722c8ea2d"],["/tags/utteranc/index.html","cd2f850c006c0cfc347e8df1fc851ae8"],["/tags/vue/index.html","d374e20df52f20bcc5342e447090f08b"],["/tags/web/index.html","72dd7a6cbebd0e8455c65ac1ede6ffd8"],["/tags/乱码/index.html","dfee768d9927bfd693acd572ca734acf"],["/tags/二分套二分/index.html","d45db159a2d19cb92869368c1a23b09d"],["/tags/划水/index.html","827c13f63e64c74b2b1d21c7ea135081"],["/tags/包管理器/index.html","d92fa1a905e2132d65e6ae8b48095f97"],["/tags/图论/index.html","e76f1eb1d5b0b7f47d78d7dcc8973a30"],["/tags/字符集/index.html","515f973cb40495fe79b980d37fbfc599"],["/tags/应用/index.html","6fca0b95881c198d1699954e7d5b12c1"],["/tags/悦读/index.html","4bfdafa06b8f87e1ae8fee62c5081ce8"],["/tags/操作系统/index.html","ab5793d69533f626d5a5e95d12c0f2c4"],["/tags/数据结构/index.html","ed07c47e5818d1e03eec757c2269969d"],["/tags/数据结构与算法/index.html","ef19ab9254762a0bbb6fd0b6cd3dc8cb"],["/tags/新年/index.html","d0da95496d2fdbdddd460c44d63b7f04"],["/tags/杂谈/index.html","a9d580b61dba18430db43426cab96267"],["/tags/笔记/index.html","316ad584df92516f297f56a8d173ecc5"],["/tags/算法/index.html","34ab18ee699ff9d24b6f9e66e328b6c5"],["/tags/线段树/index.html","70112e8028db6207e9b4129b59efb795"],["/tags/编码/index.html","42e8e3ceb6b4d5ab69443543146699cc"],["/tags/编程技巧/index.html","bfb3d5aba651876973fae2967d06c830"],["/tags/网络流/index.html","10cb63d8bc515f01f21ef8cfda01b38b"],["/tags/萌新/index.html","9ffc56c487c19b6c3aa386eefe13c185"],["/tags/计算几何/index.html","5ed0738a90182d31e3a8b67ed7e7aa7d"],["/tags/计算机组成原理/index.html","b85f94e13cddff73da332927dd9ca389"],["/tags/计算机网络/index.html","a23795ee91b409fc63db29d6e3dcec10"],["/tags/课程/index.html","de61b429ef1cf7eb93cb515e036adb6d"],["/tags/软件/index.html","b795d067db13922600b13f55c292b9b5"],["/tags/输出流/index.html","36e9fa09aacece62108152c8e7256b62"],["/tags/镜像源/index.html","3be33231fd0888f3ed0d703b18a474df"],["/tags/随机增量法/index.html","87d4ad00a50db704b8052d3b709e268d"],["/tags/题解/index.html","5a98b4bcb3b45e0243467efc92f5b859"],["/theme-sakura/index.html","88f645bee84ad97f090ed9640c7029a4"],["/video/index.html","ffc86355dcbf9c61d6a626de77e368b6"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-brands-400.woff2","8b0ddedbb27cbc9971c8667caa8a0cc1"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-regular-400.woff2","61f30b79daf5b31f0d254a31fba66158"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-solid-900.woff2","c64278386c2bbb5e293e11b94ca2f6d1"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"],["/webfonts/fa-v4compatibility.woff2","4bc58bc16bb05a05d3a47a4f7e143b75"]];
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
