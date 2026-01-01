/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","37ed9b8b812351c8692a77847d89e5d1"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","ce911180e0835c11334f25f947c8fcb3"],["/2023/02/06/C语言链表/index.html","da2129ed163ff3e4c179c56d4fbe5c8c"],["/2023/02/06/书籍资源/index.html","cd934bf9220c5ef87d95691f4f618359"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","a793e1c4fabfb80c653edcb92f613778"],["/2023/02/07/为水而水（笑/index.html","312eca87dc7380569221cbc1a4ad1159"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","5d7575106f81546b925e24a58f18990f"],["/2023/03/09/Web前端笔记-Emmet/index.html","0436fad8294be563b0afc0247ba74770"],["/2023/03/23/gitalk-评论/index.html","ff2f8be574ef0a38812c415e23127d09"],["/2023/04/10/用C语言实现字符串全排列/index.html","e5baec784d3cfa2237cfcaa0d4dea89d"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","9a603e81ba130a18bf833a1b9d896b7b"],["/2023/05/15/C语言基础排序-demo/index.html","0da64440532d85e052502cd668e98935"],["/2023/06/14/闲着没事干/index.html","b931555777a067b270dd0e89da7c2f51"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","48213bb994cbf5aea2b60627f20b04fd"],["/2023/08/01/javase-note/index.html","3053e389ac46b424007eb25e75b0ebbe"],["/2023/09/14/vue-pure-admin/index.html","0f4e2697f4dd4f7e434f6eb5675274b6"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","e4d039304f65f00c637052148e7a228a"],["/2023/11/28/C-CPP-the-memset-function/index.html","fc7a3f69087ad1b3b6e2b19c7f318bac"],["/2023/12/13/javaSwing-DynamicClock/index.html","d0171cb155e9e2f76cc57026558400c6"],["/2024/01/24/builtin-系列函数/index.html","b46a2da23713fff3a916c006b1959e3c"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","9d4210065a879fa43322d2de607f80f3"],["/2024/02/09/新年快乐/index.html","4b21932a4716fb24a21916ec08064b21"],["/2024/04/07/转载-线段树专题-xyw813/index.html","cd63a3c46f0c483a473380fbfa953909"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","71d99511908fcfe7b9960622f7e4e42c"],["/2024/05/06/cloudflare-display-issue/index.html","c9a2e8d6b13e416b66b6bd0432ead397"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","88c1fb47c161afe9b85336d1cbb3037b"],["/2024/06/18/POI2011-WYK-Plot-Solved/index.html","c51d426dbbd13fcf60e32b6df25f735b"],["/2024/06/25/open-source-LinuxMirrors/index.html","2a10db0259f8410fce4c4af878f75340"],["/2024/09/02/Dinic-算法/index.html","69fff26cc3f17662310d1f3128a505e3"],["/2024/10/08/黑题记录-2D-Geometry-110-in-1/index.html","87a9e1f8c85760759707949d9d49d10e"],["/2024/10/11/常用STL算法库/index.html","fce8ee2d38f2c1ae9fded6388a4f62ae"],["/2024/11/28/在-Java-中设置输出流的字符集/index.html","3a6c44a4729c04f281934eb156e4080c"],["/2024/12/05/JDK-18-以上使用标准输出流中文输出乱码问题/index.html","d4e64bfe1724aec077c146af2d1919d8"],["/2024/12/09/Codeforces-Round-992-Div-2-解题报告/index.html","1287b6b1b44cefffe9375c5508ff115f"],["/2024/12/17/Where-are-those-algorithms/index.html","147010e6375e2e3a859ec69b4755d516"],["/2024/12/26/重构评论系统/index.html","6c7d0bb0e8c7e16347ba7d199bd229d3"],["/2025/01/01/blacklist/index.html","9f96a8d60db0d3a174485c46680ced05"],["/2025/03/15/GitHub-Skills/index.html","adf48f867984b8104ee53a49b8adefd3"],["/2025/03/16/lombok与delombok-在gradle上的配置方法/index.html","85db40a50c73c1b6ee4e9c934ddb1905"],["/2025/04/09/Codeforces-Round-1016-Div-3-解题报告/index.html","9e7eed9e307a1bafb26088aca861d81a"],["/2025/08/23/github-special-files-guide/index.html","89d6de952093ae9394166106b119d2cc"],["/2025/09/28/408-route/index.html","a14c501a1370ee1857362361539a8937"],["/2025/10/14/rvo/index.html","b2b89c8bb3ad8c8e185227f0cb8a717e"],["/2025/11/13/What-is-OSINT/index.html","07963869caa81d2bbf0b0eb72f669990"],["/2025/11/20/DDoS-and-CC/index.html","bb9d8fa9c705bf47ce9fcb34c35efb6d"],["/2026/01/02/2025-pass/index.html","ff8c879c3eb22645abb93959a1a73030"],["/404.html","7b7c2b12ef5e2b95eda92262d85e6cd6"],["/about/index.html","2a2ae12675dc7c10da4d7980caa88e16"],["/archives/2023/02/index.html","cfd1f6699fda9edd0a2f9d618925f0c0"],["/archives/2023/03/index.html","174db12dfad674ea396d7314280b3363"],["/archives/2023/04/index.html","1d4e2b3be70a7054204a5a7783940430"],["/archives/2023/05/index.html","77cce5a8d76caec8d0c542aa26b22485"],["/archives/2023/06/index.html","a815c10e1d30c89513f29d0c410334ad"],["/archives/2023/08/index.html","207e58bab6a7e0ddee1de51b8d932605"],["/archives/2023/09/index.html","80040f03d7d9d54aa1b8f10a7ad9cbd0"],["/archives/2023/10/index.html","c828a7d6b3d8b2970d2c99c19ed8245a"],["/archives/2023/11/index.html","b8be04985d2c2ee3a7cecad5b3f60372"],["/archives/2023/12/index.html","387e0be107c5524060b3ce7d28e4ae74"],["/archives/2023/index.html","4822f8f861590e7bb50ba7f534756ffd"],["/archives/2023/page/2/index.html","4822f8f861590e7bb50ba7f534756ffd"],["/archives/2024/01/index.html","d06e53d3b329b350958ba75effdd1878"],["/archives/2024/02/index.html","ad64cf0fdefb3f86585b0774df4fa2bf"],["/archives/2024/04/index.html","bab15b57b5c88073e00ca4b50c76d521"],["/archives/2024/05/index.html","fb7560dea4113990c8178a6c48648abb"],["/archives/2024/06/index.html","e8a226ee6002348bd06cc43fa2da1e15"],["/archives/2024/09/index.html","4382fd9747d61fdf1273b9406bca468c"],["/archives/2024/10/index.html","5d0f209cb0bd932a3d0273b229aeed7d"],["/archives/2024/11/index.html","b373d4136c466a84e11b38997f874879"],["/archives/2024/12/index.html","354a4ea8a34848f441d69ea53d3c1127"],["/archives/2024/index.html","60cd0b515de419fbed1bae6bd5d260f5"],["/archives/2024/page/2/index.html","60cd0b515de419fbed1bae6bd5d260f5"],["/archives/2025/01/index.html","dbccf0dc962ad861034824b540097149"],["/archives/2025/03/index.html","c465c957aebda5736de3e3783a95f056"],["/archives/2025/04/index.html","a8130cb00ca6917529caa18d819c7999"],["/archives/2025/08/index.html","0940ad525b6eac8230812d87901a1320"],["/archives/2025/09/index.html","24c4ee004e50df87ce2d0bd41811471a"],["/archives/2025/10/index.html","f473706421fca70520dcb2f9e65d97e7"],["/archives/2025/11/index.html","62054600a4e52722af43b072c6f0865c"],["/archives/2025/index.html","e78fcd996c3c8998a1840dabf74ef17e"],["/archives/2026/01/index.html","be789ce7b3c3f162fa82b63597deb255"],["/archives/2026/index.html","d1abe7ff02539950817081b5f2c5482e"],["/archives/index.html","e0c75ad128b973e87f8b5d160a6342ac"],["/archives/page/2/index.html","e0c75ad128b973e87f8b5d160a6342ac"],["/archives/page/3/index.html","e0c75ad128b973e87f8b5d160a6342ac"],["/archives/page/4/index.html","e0c75ad128b973e87f8b5d160a6342ac"],["/archives/page/5/index.html","e0c75ad128b973e87f8b5d160a6342ac"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","5725f78be8fe0a0fca10a530cf949c23"],["/bangumis/index.html","f7a09f235e72cffb8d862e2874bf47dc"],["/categories/技术/index.html","ad901fa54315d0b8c8b9513a89249d23"],["/categories/技术/page/2/index.html","0b57eccdb4d228522195611af7a8c12c"],["/categories/技术/page/3/index.html","62cc0fa30119630c75be1f3232247dc9"],["/categories/技术/page/4/index.html","0c489528aea125e2e8f08d621fb5c254"],["/categories/资源/index.html","e8fd05a0ed74be85c798417667d81af6"],["/categories/转载/index.html","8414a03cc8f230b874a41d9729f3dd7f"],["/categories/随想/index.html","b7c4b362aa86d9d6b74b91640451247d"],["/comment/index.html","1f6aa49b1c8ecc695d7b9736f51dee1e"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/giscus.min.css","96c42b2029f44095aaf46f6dc0628ded"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","71cebc0cd666f182f1ab1dbe4a9f15c1"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","73bb864d038d4bb3d83361b8910786bb"],["/css/style.min.css","45b4cf23f077e45f4776fb3f47a7cdd6"],["/css/tags.css","eba03aebbf2f44113682d0ca1e19fcbb"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","8fe436429cb29654a80bdcf500ecdc75"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","c518e239079ee4596454897f4a2c4b9a"],["/index.html","1bda687e5c70442b0a427c6a2012656e"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/js/lib.js","65f02458a8e38579dac5594f252bd66f"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","f1afa64bc2698ed86b55ab396a0c7ac3"],["/js/sakura-app.min.js","115ca9549a404cd11acd81cd31abe374"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","c757e76be80d1da11f5c02c68665312c"],["/js/wrapImage.js","29007a235330279921b40783f3752c1c"],["/js/wrapImage.min.js","fa46e73ad4d52096338f455d716a71a2"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","236b9af20a6c206d2233ce900afeb166"],["/links/index.html","a3f91a2f3c1052ed33efd654877975f7"],["/music/index.html","b1f9d050220dffcd268441e5dc8240c0"],["/page/2/index.html","6567574ce1390002de8cd0937c4b297f"],["/page/3/index.html","1bc6e9a0933d45cbfe256ad85e49672d"],["/page/4/index.html","b9166538b8c53bff6b231960705fd46b"],["/page/5/index.html","199faa42a683eb6777a8ee915012eac8"],["/rss/index.html","ab58c3dfd9155573bd2e5679978339b6"],["/sw-register.js","3ee75280542f550389b905a37cb3d977"],["/tags/408/index.html","c1b4d2c1fcf554069c492ba6551bafa1"],["/tags/C-C/index.html","7cfd0af9403e9fa510eeee01b5b11443"],["/tags/C-CPP/index.html","531c52a60045fbc32b9d0fcb1f2d4bc4"],["/tags/C/index.html","cdeaa2546a9881dcf401d8f217610af4"],["/tags/CC攻击/index.html","51f419a2962283c26c8657f4850bc469"],["/tags/CONTRIBUTING/index.html","a1581d7b42eae7300dc8d2c09e900e97"],["/tags/CPP/index.html","4e636973dc5d5ee5d70667ea954764a1"],["/tags/CSS/index.html","24de26c29531f86c9e2a806b9ba4c37f"],["/tags/CodeForces/index.html","7d505dd2a239e4c8f7cfbd1f7042735e"],["/tags/Color/index.html","7887bec561fd4c4df1693e88b9d71c3b"],["/tags/Comment/index.html","28061a8cbd81b738dc979dc1023b0acb"],["/tags/C语言/index.html","101c00beef4102f8e1786487edb46f2d"],["/tags/DDoS/index.html","3365be57605dc19f35535e7d7a864995"],["/tags/Dinic/index.html","35904952aa1566f4c31ab39d6b542268"],["/tags/Div2/index.html","71d695763e82c61b77aaac42d367c27a"],["/tags/Div3/index.html","535a5a99345288d7067ac943303c6ba9"],["/tags/GitHub-Actions/index.html","34a60a9661bb0f5d31b029d2789363e2"],["/tags/GitHub/index.html","dfe12acba563f70bb1aa4b8b2fce4ee2"],["/tags/Gradle/index.html","8a3a5a731848dcf6cfec5acff1342921"],["/tags/JDK/index.html","ee51efe8a01f20dc12d47d03a94fe449"],["/tags/Java/index.html","c232e8a8c2b08d46b56c70b2a07c6955"],["/tags/JavaScript/index.html","284d0ac5da96b0ff70148acb4816e964"],["/tags/LICENSE/index.html","f52e46e0dd88793f4f065d0cd6f4a773"],["/tags/LeetCode/index.html","71353b34985f0c4d3264c94660f813f0"],["/tags/Linux/index.html","270c89578803aa0f29a0cad593b25ec0"],["/tags/Lombok/index.html","d5778055c8b8ee81d2847190a15ec8af"],["/tags/MSYS2/index.html","12fb7b8443f585453209e8e4a0c421af"],["/tags/Note/index.html","fcc2759ea37a8ba8e461d706bffad4df"],["/tags/OSINT/index.html","40e936136bab598000bb896c2a8f17cc"],["/tags/PrintStream/index.html","b940a41e8b17a852e5afacc59e27e790"],["/tags/README/index.html","90bab5a90ab0e1432e34acf88252ddaa"],["/tags/RVO/index.html","a4e0dcbb9353e9fe13a2028af3574762"],["/tags/Rocket-Loader/index.html","bb4968dd97ec59e26d3e9121877cc852"],["/tags/STL/index.html","7b05efb6219eb264744f53bd4131ed2e"],["/tags/Scoop/index.html","106efe868e5c1f9e178731a7d8a2b682"],["/tags/Swing/index.html","45e80c9cf5f5fbff8d0f360d6ebd611e"],["/tags/Tomcat/index.html","00a597fe6ecfdfa49bf169f030233c74"],["/tags/UTF-8/index.html","fd817a3c7dd92e99f1e1e32bb28752d2"],["/tags/VSCode/index.html","ac742d09ffdf5a69f20286699aaacc80"],["/tags/blacklist/index.html","56060357bd029c6756d12a98fe797212"],["/tags/blog/index.html","5401404faaa69ba3a6ccedfca4ce6f52"],["/tags/builtin/index.html","5dcfb967a24a117aaea803f626094e0f"],["/tags/cloudflare/index.html","63c2a811cd4c8111a708b7803a7113ec"],["/tags/giscus/index.html","4933294e63362dd190d334cd292fecea"],["/tags/gitalk/index.html","0a0560cb0dfbbbceb58714d1a136de9e"],["/tags/index.html","199bfea649a239add905bb4d9ead5d8e"],["/tags/tools/index.html","3120b11e57552fca5b0a9ca497775947"],["/tags/utteranc/index.html","3d0b1cc46f1085f7425c52a0f1b201db"],["/tags/vue/index.html","a42b601dd815b15aa5de3fafc1b18942"],["/tags/web/index.html","ff026b4503fbc5afef68198b707e484c"],["/tags/乱码/index.html","550e4831df7f0cd70d29b71c2285d452"],["/tags/二分套二分/index.html","0f044cb14f3d6a94bc393987bd710fc6"],["/tags/仓库管理/index.html","3ae1de68f764809337be28c41cf22a35"],["/tags/信息分析/index.html","89db3ad9941df377d7cf7998653e13dc"],["/tags/划水/index.html","bd4b7bc2be9acc9b5b917db0a6ebfb3d"],["/tags/包管理器/index.html","0ed709dd03fef027c860129e32847f83"],["/tags/图论/index.html","2ecf7debb28e74da0470d54b6c1aeb7d"],["/tags/字符集/index.html","cbc8943037a1b0e92af13ef098ad8650"],["/tags/应用/index.html","74c1ecf607dd65a6eaf777b6caac688f"],["/tags/开源/index.html","43ec625424d31b156370fbaea068772d"],["/tags/开源情报/index.html","44db4263bd160bd0f618eec18cd4ca01"],["/tags/悦读/index.html","6dbfb7442a45c8f55cbbf1a6b2e066c0"],["/tags/操作系统/index.html","0190fa1a730fbdbe308a4bc979bafac7"],["/tags/数据合规/index.html","82c4d7070edd165e2d0890590e1d1e42"],["/tags/数据结构/index.html","de7bfe6d7593612fbfc4471a091d7158"],["/tags/数据结构与算法/index.html","7ccaa1774385e53624f6a594b95e175f"],["/tags/新年/index.html","b9ec15bd181280341da13bceacd44fed"],["/tags/杂谈/index.html","bee427bca0aae97844ecd709a0dcbc8f"],["/tags/笔记/index.html","89b47d7c778c1de2e4940f6287d91edf"],["/tags/算法/index.html","939fe6a8b6cdb4896e224b0ba839c475"],["/tags/线段树/index.html","0c1d79f522027400b3f38119d7fe88c9"],["/tags/编码/index.html","383d29409f4974768788c7ab92e21631"],["/tags/编程技巧/index.html","6a8c9468b4fe88351ca56a3b9ebc4dbe"],["/tags/网络安全/index.html","a9895d9ca4c026f94772005306528b21"],["/tags/网络流/index.html","fd41754a8b6c014e380b295d87c7a1ec"],["/tags/萌新/index.html","5bf50243ff51151cf0bd77c839cd8bc4"],["/tags/计算几何/index.html","821d89d54a1f6d1ce415bbde3858bcda"],["/tags/计算机组成原理/index.html","6bd03b0ef1a4a1933a79e14027949187"],["/tags/计算机网络/index.html","6a81d87cf5164493d495c54a5dd2922e"],["/tags/课程/index.html","254022156a87281e36de8880c4ded4d4"],["/tags/软件/index.html","b86b27027429ff912cd0689fa3c319ce"],["/tags/输出流/index.html","ed95a5574b8f7a942d8251c2a78b4657"],["/tags/镜像源/index.html","3d1d5c69c57acedad0634e2ce401d8a0"],["/tags/随机增量法/index.html","cc224d26a9d070d48f0e226d5dd64d83"],["/tags/隐私伦理/index.html","f1463279cd213a33fefb7af9b4b1d17d"],["/tags/题解/index.html","cd9d17a78efb06cee59e7ae3da674cdb"],["/theme-sakura/index.html","c1a90f1f5816745025ab47ac60db0c5f"],["/video/index.html","cb4169a5dae5aebbe5f9d61fb597f3d0"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-brands-400.woff2","8b0ddedbb27cbc9971c8667caa8a0cc1"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-regular-400.woff2","61f30b79daf5b31f0d254a31fba66158"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-solid-900.woff2","c64278386c2bbb5e293e11b94ca2f6d1"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"],["/webfonts/fa-v4compatibility.woff2","4bc58bc16bb05a05d3a47a4f7e143b75"]];
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
