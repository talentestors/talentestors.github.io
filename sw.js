/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","d116e02911b2c7136c899e257183fa3d"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","17011aa57c46fabe8cfdf566aa670ecf"],["/2023/02/06/C语言链表/index.html","07f3e01685c10d24bd56e0bb79141db6"],["/2023/02/06/书籍资源/index.html","d332dcd42fecc8aa2a8ac2a71cddd4d7"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","3937945a7fc72de178a363bf2311dce8"],["/2023/02/07/为水而水（笑/index.html","4e05741d0d40f22d4eec0c1166ae13b3"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","d6d47cc6d65a6c55a959a26e69c904be"],["/2023/03/09/Web前端笔记-Emmet/index.html","c620ae28ba903c5362bf1ac3a22d99b7"],["/2023/03/23/gitalk-评论/index.html","f84074ddd45927c264d62ca20ae72296"],["/2023/04/10/用C语言实现字符串全排列/index.html","30ed5593687e8eebf409d8cb9dc8ae6c"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","e212e0018266a5f66c2a4c5d4f6dfed7"],["/2023/05/15/C语言基础排序-demo/index.html","e99ea81ede88f9d26c0f00d13da110c5"],["/2023/06/14/闲着没事干/index.html","b6ef5505d54491307ba1f19d50e6efcc"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","6705082a6108525ebe62d0d60b3f4e37"],["/2023/08/01/javase-note/index.html","38bcf1fb24f367474429047a3d7ca568"],["/2023/09/14/vue-pure-admin/index.html","71a8c2448be994313f925ededa1e814f"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","f39a7592d008781048ded8a7021291c8"],["/2023/11/28/C-CPP-the-memset-function/index.html","75c049df3467dafd4a57065b2a7313e4"],["/2023/12/13/javaSwing-DynamicClock/index.html","4dc5b0cc6a0b6cf9dc6f61a6fb8bcd40"],["/2024/01/24/builtin-系列函数/index.html","96ad6a88f718ea9138703d37722366ad"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","ec08b2928cee7d7d53cf7ea6d2724094"],["/2024/02/09/新年快乐/index.html","7768ac4009ecd71f50703cf08d7329fc"],["/2024/03/26/408-route/index.html","787ebe533fccb36d87402e75a4e40035"],["/2024/04/07/转载-线段树专题-xyw813/index.html","d75c4363e0deba2f4acf593ff10ac5ee"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","25553b107a4b7c38607f931842333655"],["/2024/05/06/cloudflare-display-issue/index.html","61a09724ad6933f2e42f4c53a1268d1d"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","1f5c8717b10039bb9ac68fd737be287b"],["/2024/06/18/POI2011-WYK-Plot-Solved/index.html","d03acc6dc90246a8331d939611a52856"],["/2024/06/25/open-source-LinuxMirrors/index.html","113937e9906485ab07729df244388c26"],["/2024/09/02/Dinic-算法/index.html","5ad03357d70742b767c83c0c49d306c1"],["/2024/10/08/黑题记录-2D-Geometry-110-in-1/index.html","89208e1cafe557ea1a41671e2e6ffba8"],["/2024/10/11/常用STL算法库/index.html","2dd52634156f1e5c97c8485e16de63b2"],["/2024/11/28/在-Java-中设置输出流的字符集/index.html","e6287d7bba5c2d783ed8df3419932e30"],["/2024/12/05/JDK-18-以上使用标准输出流中文输出乱码问题/index.html","ee053279e5e583c041b524a7f13fe763"],["/2024/12/09/Codeforces-Round-992-Div-2-解题报告/index.html","196122854850dd1697ae82646443930d"],["/2024/12/17/Where-are-those-algorithms/index.html","60ebd18e640fed58dd48cf981234e526"],["/2024/12/26/重构评论系统/index.html","61a7d8850f3469d825714c99ebf072bb"],["/2025/01/01/blacklist/index.html","aaf2076947fee21ab90b5df6a382ce6c"],["/2025/03/15/GitHub-Skills/index.html","35d17eaec1a527b11e3b26ba1505fecc"],["/2025/03/16/lombok与delombok-在gradle上的配置方法/index.html","aeee629d424fb3ccf0d9fb60b256b8ab"],["/2025/04/09/Codeforces-Round-1016-Div-3-解题报告/index.html","723a2c5935fff83013a5bbf793a5094c"],["/2025/08/23/github-special-files-guide/index.html","09055ff0eb961124a6fe44316c3d378d"],["/404.html","7b7c2b12ef5e2b95eda92262d85e6cd6"],["/about/index.html","103eb6ea753d3e9f4b3da4e782e52881"],["/archives/2023/02/index.html","bc0b06a6833f16f8003a1232acbe6251"],["/archives/2023/03/index.html","ff73306cdf2ecf7cf5ee90c3f3cd792a"],["/archives/2023/04/index.html","d10a3a7ecfdc06b4f21ccf59b7fd9d1a"],["/archives/2023/05/index.html","15bd21f02c51a603ca11adf73e098fb3"],["/archives/2023/06/index.html","7a3cd5e289eb809f9ea0243f7ddb3ee8"],["/archives/2023/08/index.html","e9765e09a28931dec3360bc730eb443d"],["/archives/2023/09/index.html","d7db2371df037bf4932af13e6e388c7a"],["/archives/2023/10/index.html","2e652bf71281a345254a54164d6e3af2"],["/archives/2023/11/index.html","2e749fc4f41bc4c2b3108607ee6ed938"],["/archives/2023/12/index.html","46ee19508d320b68c8c8f77a1cd1834a"],["/archives/2023/index.html","1f5d04563ca478494936ce5d4dfe8876"],["/archives/2023/page/2/index.html","1f5d04563ca478494936ce5d4dfe8876"],["/archives/2024/01/index.html","9b82dbb85473d3c836639ce583d962b5"],["/archives/2024/02/index.html","bc254acaac9da41f3bece7560711de0b"],["/archives/2024/03/index.html","5a76919ecdef20cdce9f0fd6a100e58d"],["/archives/2024/04/index.html","44d52115e48abc3aee6af11b5cb44f79"],["/archives/2024/05/index.html","628f30f675a539e6f6bc5fb78efd0a72"],["/archives/2024/06/index.html","a7439652d8b6161b71aebece68f0395a"],["/archives/2024/09/index.html","b5dbda682686f84b7d55dc48e3ead88f"],["/archives/2024/10/index.html","c0af7128edf58cdb7d5fe105fca00898"],["/archives/2024/11/index.html","1fe1603b3b37b35cb95217ab6f0db42a"],["/archives/2024/12/index.html","3d553520e2b0736430ef3988aef041eb"],["/archives/2024/index.html","dd2fa086909683aaa997635a58fba796"],["/archives/2024/page/2/index.html","dd2fa086909683aaa997635a58fba796"],["/archives/2025/01/index.html","8f4a27b5175d6a9872e5902fcc1985a0"],["/archives/2025/03/index.html","98b9e79da7e4a5331c500702d1a5020b"],["/archives/2025/04/index.html","3684008ec1ea0739622a59e6fe8282e7"],["/archives/2025/08/index.html","6bb13e349b4e00de553522b2deef9823"],["/archives/2025/index.html","24bd2c16f296de13440e61ec802f19f8"],["/archives/index.html","206770e330bcd6e9fc394c2713b001ca"],["/archives/page/2/index.html","206770e330bcd6e9fc394c2713b001ca"],["/archives/page/3/index.html","206770e330bcd6e9fc394c2713b001ca"],["/archives/page/4/index.html","206770e330bcd6e9fc394c2713b001ca"],["/archives/page/5/index.html","206770e330bcd6e9fc394c2713b001ca"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","51a2edb40f77e7c9d710ee025415c03c"],["/bangumis/index.html","bdb7123d05e75e2f6203b7caea59af3e"],["/categories/技术/index.html","1218996156097b39101f2c6c44431085"],["/categories/技术/page/2/index.html","c886ed73875593423e60dfe2b6f14894"],["/categories/技术/page/3/index.html","7dbcf8cd7e2ed285f8fab707a9f4424f"],["/categories/资源/index.html","f871690a77b8764e90356c65d2d155a6"],["/categories/转载/index.html","5eff241599bfb9a6ef8710170b4ee6ed"],["/categories/随想/index.html","e741e2d8579189ad6dfa295e6e960b06"],["/comment/index.html","64e3e43e1d8f9128badfbd40b7742765"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/giscus.min.css","96c42b2029f44095aaf46f6dc0628ded"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","71cebc0cd666f182f1ab1dbe4a9f15c1"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","73bb864d038d4bb3d83361b8910786bb"],["/css/style.min.css","45b4cf23f077e45f4776fb3f47a7cdd6"],["/css/tags.css","eba03aebbf2f44113682d0ca1e19fcbb"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","8f269af02e7426a5fbc089e4803c6cb6"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","a119ee6a8f5e3a5affa661db508fe7b8"],["/index.html","ac1ccac97e8b17ae239e9ddc4a4d558e"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/js/lib.js","65f02458a8e38579dac5594f252bd66f"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","f1afa64bc2698ed86b55ab396a0c7ac3"],["/js/sakura-app.min.js","115ca9549a404cd11acd81cd31abe374"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","c757e76be80d1da11f5c02c68665312c"],["/js/wrapImage.js","29007a235330279921b40783f3752c1c"],["/js/wrapImage.min.js","fa46e73ad4d52096338f455d716a71a2"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","bdc0e9f24f4bee0c9ef19ee7c5c5b6d8"],["/links/index.html","b680883637c8dd33e941795e60e4066e"],["/music/index.html","2c245e0cd923619c97c07e5bf97ba7cd"],["/page/2/index.html","b372ea656be7bfd3a467f0d6d17de02c"],["/page/3/index.html","ddc6d5c95e4f40d7d6f334c0f8ac65e7"],["/page/4/index.html","f5b4bb611a3aa07c9d70c44c146585dc"],["/page/5/index.html","3f9fd2f4994d948d117d972f28a3045e"],["/rss/index.html","011112ab1ca2510b8547b28a7dee2f2f"],["/sw-register.js","55622a460f6e00654bb8944a3f23eba1"],["/tags/408/index.html","bc7d895de0ed953ce9ce0fffe7cfbe81"],["/tags/C-C/index.html","db789ba3cfbca6bb9dc6042a5f2ae0b0"],["/tags/C-CPP/index.html","818654e5b45b4be620b956e1d0aa11b1"],["/tags/C/index.html","437dc95e9117b6dd774e54b8573943cc"],["/tags/CONTRIBUTING/index.html","74d6ea6c00a1271dc4db866a983791c8"],["/tags/CPP/index.html","ad999e3eac7fef8ae14cfee8e463f925"],["/tags/CSS/index.html","e3211d8dca53e6dfaa1a296764cb4869"],["/tags/CodeForces/index.html","00e9f12e144118a944ec11ebfa1b712a"],["/tags/Color/index.html","8f1ee1ab3649f7c09699eaefd3a3b870"],["/tags/Comment/index.html","3c17341b4c7431ad194b419f5ad9a215"],["/tags/C语言/index.html","4395ad7c50842d86816055205f9c63fd"],["/tags/Dinic/index.html","4bfcfa37316f326954785e98f5dc6283"],["/tags/Div2/index.html","1c6600b16ffc47bfc25e8414c32f0a68"],["/tags/Div3/index.html","ca0517e2a561f121298a47c4b02240d5"],["/tags/GitHub-Actions/index.html","856205d45ec04af832479e752fdb9ba2"],["/tags/GitHub/index.html","50415177791c113b812efcb30dd62446"],["/tags/Gradle/index.html","b975e0f4b708c97e0c95af52eb6ed353"],["/tags/JDK/index.html","5e8de9fcd02dc1bb394a893f0bd971a4"],["/tags/Java/index.html","88e000cd855416563fecdf35a6a5983d"],["/tags/JavaScript/index.html","a006f88383ef0ef5d365bf640621ef64"],["/tags/LICENSE/index.html","04b5500514ec587419cddceba1aa79a5"],["/tags/LeetCode/index.html","a34b99fe7fbf88e6d3fd70f2e4fa6578"],["/tags/Linux/index.html","6d59b2699de4ea9f90308526fbfa1ee3"],["/tags/Lombok/index.html","10032bce8bb49d8e5f5bab2b1a75cb71"],["/tags/MSYS2/index.html","e87d2f86f6e58388d489b6df02ef8d9c"],["/tags/Note/index.html","c8828973283015fd1610efc4f1789fec"],["/tags/PrintStream/index.html","437a1c39cc332b6e0b14bec8b5afc35c"],["/tags/README/index.html","6f691f1feefcac52f459b213ec6f02e1"],["/tags/Rocket-Loader/index.html","d6252d7e92834cbe87860daf2cf4f506"],["/tags/STL/index.html","142476b6616800a45ab2c940e558c17b"],["/tags/Scoop/index.html","e66b2fdf31b078b8fbc583a88f9026f4"],["/tags/Swing/index.html","2993512f25a37cc6ecd54913097f21ef"],["/tags/Tomcat/index.html","a2a2bd528f6ea9c82bac81aa849563cd"],["/tags/UTF-8/index.html","44a69079cbcec67daf99b80c4f18df74"],["/tags/VSCode/index.html","43eae19487170fd490eff82f601b15bc"],["/tags/blacklist/index.html","684f29d04bd4b32332ad1e08a5d86f5e"],["/tags/blog/index.html","785cb4806f751e231f00cf4eaba07c1d"],["/tags/builtin/index.html","308c58a8cc9c465011882c38899449a2"],["/tags/cloudflare/index.html","0f5b461e4ed1f8ac11b6d802800ca580"],["/tags/giscus/index.html","7c175d81e292aa520ebc39c2473cc052"],["/tags/gitalk/index.html","0cb56fb97a13ad343d870b2712265f50"],["/tags/index.html","7e6d07047dbef46bd31793b8c466d28c"],["/tags/tools/index.html","4d5d5e96f514e150536279866c635297"],["/tags/utteranc/index.html","31140bf3dbe5cecbe4ec74a21a222a12"],["/tags/vue/index.html","dcc0b14822957ac67669edf614d16e69"],["/tags/web/index.html","058b700205986edad10757934f0265db"],["/tags/乱码/index.html","35900803ce8aed3ddcd6d3657b5e9c34"],["/tags/二分套二分/index.html","0147f2e13fe46912eed2685611c4b05d"],["/tags/仓库管理/index.html","b18b80f8c236a4613d4219d44d706c72"],["/tags/划水/index.html","2d509ea8b0fb527c1f664862163a452c"],["/tags/包管理器/index.html","c99032f0a7611eb9b41b2aac538082b3"],["/tags/图论/index.html","6c441ee75d8eb462e66351bab1041d27"],["/tags/字符集/index.html","3949b87c540d29974a0bf4e70e01c787"],["/tags/应用/index.html","0e6966fc22c6397d6c0b906a3d1652a6"],["/tags/开源/index.html","ce4f988697d526e88e2dfa4a9e97fb62"],["/tags/悦读/index.html","feb975b2526faa607d5d31624aeefe4e"],["/tags/操作系统/index.html","170ef2b9c81380d1387f41a67e8bc76e"],["/tags/数据结构/index.html","2c6a068f7a742dc4ba47b6012c1b5803"],["/tags/数据结构与算法/index.html","efcf51e78416feb89d28bb9b30b8e26b"],["/tags/新年/index.html","c03a40073f42da670b105a83ffd4ccb3"],["/tags/杂谈/index.html","253381bc5e84fb635df02f661c4a4026"],["/tags/笔记/index.html","b54004861d59caaeb78f5585d4468b3a"],["/tags/算法/index.html","df1aa8866c2ba5535acc87115b507bf1"],["/tags/线段树/index.html","8da1c2d5d96774e92ef1bcf6bf83e2e0"],["/tags/编码/index.html","d4ae5f213cf04e9bacb04bdd9b98b334"],["/tags/编程技巧/index.html","f7b1918363b12856b36598177034e725"],["/tags/网络流/index.html","105b1be31540e6373e1fa5305b58f1fe"],["/tags/萌新/index.html","1224316c415d1479f09ee1bdbb9efaad"],["/tags/计算几何/index.html","27f688e7a0740d02b29d31f66f437891"],["/tags/计算机组成原理/index.html","84e912f06b30ab039988990a983fb6d5"],["/tags/计算机网络/index.html","a460dbf28ca552422a9a0e12c0341f19"],["/tags/课程/index.html","ce2b89df2aee9565d861dc280ab4a4b8"],["/tags/软件/index.html","6c71e0e99d8ec32f9a45eb4bcf9606f6"],["/tags/输出流/index.html","efbcb4b9c532f9d9056f808291edc82e"],["/tags/镜像源/index.html","ce145ba5b5846486089a9dc1d2e76b85"],["/tags/随机增量法/index.html","e05d937dd26f39bd5e5be89144b83b8f"],["/tags/题解/index.html","adbb81427875884eab11e05be282811a"],["/theme-sakura/index.html","8c71cb00709d50a70281e14618a6157a"],["/video/index.html","67f9dfb7ee9d54dde10a7ea7938679b7"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-brands-400.woff2","8b0ddedbb27cbc9971c8667caa8a0cc1"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-regular-400.woff2","61f30b79daf5b31f0d254a31fba66158"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-solid-900.woff2","c64278386c2bbb5e293e11b94ca2f6d1"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"],["/webfonts/fa-v4compatibility.woff2","4bc58bc16bb05a05d3a47a4f7e143b75"]];
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
