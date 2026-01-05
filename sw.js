/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","d07783a8f359f364e36a36f6d549fb1f"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","f76144f45e375aafadb86a4e732258f3"],["/2023/02/06/C语言链表/index.html","95894c7ae8071e07d2b9ba466c1dc7c7"],["/2023/02/06/书籍资源/index.html","2d100b50d95c11fff55693f2c6152769"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","235912171697a3b1a585b1f01b4e71a1"],["/2023/02/07/为水而水（笑/index.html","00143c8502447c05c748c565697a33c9"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","620376112e4399826301a807c1697cf8"],["/2023/03/09/Web前端笔记-Emmet/index.html","af35074a812df50eb28461a8107b4e76"],["/2023/03/23/gitalk-评论/index.html","0b07270812559e8fa029ba5efe896939"],["/2023/04/10/用C语言实现字符串全排列/index.html","edd15cfc64815d4f8a86de7bba4ddc34"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","42686e3062f574b2801d15e55464fc46"],["/2023/05/15/C语言基础排序-demo/index.html","a59946ea2a15cf9f9755281e8f2c4563"],["/2023/06/14/闲着没事干/index.html","0642dae3a0ac98e35b666a015358d20b"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","44b36e2f833566995a25dcddf520e8a4"],["/2023/08/01/javase-note/index.html","60d245302c4dcd43b256aea5b3d1f070"],["/2023/09/14/vue-pure-admin/index.html","cbbfde40bdacb32662925f93484a95ab"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","3aa6340ec3a3d4392410ff7821c938cd"],["/2023/11/28/C-CPP-the-memset-function/index.html","3836136dd857fc2d7f52606dff460b18"],["/2023/12/13/javaSwing-DynamicClock/index.html","761c2a528e2e15ef80f4024992710a4b"],["/2024/01/24/builtin-系列函数/index.html","a6c0fdbc77c6c0d54bdc01aee1118800"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","fa474f3c9049e6e36a65a14ceafeabb1"],["/2024/02/09/新年快乐/index.html","5806afa9ebf64a9326a4158e4a4e3e36"],["/2024/04/07/转载-线段树专题-xyw813/index.html","788f658f4bba11d46c87a91091b5bea5"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","9934fe66bd8dd8d62bcf96fa8dc038cb"],["/2024/05/06/cloudflare-display-issue/index.html","4fb157c4ead36eb07d2f7409747e9cab"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","2014f963f54d213192ef79521a62a9c3"],["/2024/06/18/POI2011-WYK-Plot-Solved/index.html","7cd5908e4d9ff0a7a62d3b138aa64c07"],["/2024/06/25/open-source-LinuxMirrors/index.html","e53e7b723ca5dd65f218fe5d74fe394e"],["/2024/09/02/Dinic-算法/index.html","dd07339b1ca2a1d3410762da7a4dbc68"],["/2024/10/08/黑题记录-2D-Geometry-110-in-1/index.html","b7acca73375688a7e336549cfe0b5b1c"],["/2024/10/11/常用STL算法库/index.html","ae601bb27c60e7bb31ba3fa27aa6e979"],["/2024/11/28/在-Java-中设置输出流的字符集/index.html","e776b1c9246a773f2b5567e38ff8b40c"],["/2024/12/05/JDK-18-以上使用标准输出流中文输出乱码问题/index.html","984a1ce6d5af3ce117fc64bd8941a8de"],["/2024/12/09/Codeforces-Round-992-Div-2-解题报告/index.html","2332e45602042290dd464aa3ba918cd5"],["/2024/12/17/Where-are-those-algorithms/index.html","71b2158089780956ad34c697ff9da962"],["/2024/12/26/重构评论系统/index.html","94d6719a41d64106194afc91f6a4b4a0"],["/2025/01/01/blacklist/index.html","4c16bf0a6b1f909a28cfabf25b17180e"],["/2025/03/15/GitHub-Skills/index.html","61030689993b03d98cc8d61d3bfe5f88"],["/2025/03/16/lombok与delombok-在gradle上的配置方法/index.html","8867a70882573356d94a72149a6a7f8c"],["/2025/04/09/Codeforces-Round-1016-Div-3-解题报告/index.html","17fa4b818a7ceb52b31022a7b587f9bf"],["/2025/08/23/github-special-files-guide/index.html","73d5b85d74fe2738e41f1cd217c62443"],["/2025/09/28/408-route/index.html","668d008494150c149ba04d4ba348b616"],["/2025/10/14/rvo/index.html","05ce7d5a8a0ba8deb40ceb3e7fda4c39"],["/2025/11/13/What-is-OSINT/index.html","72c4644b26de82f919b0855c254f179f"],["/2025/11/20/DDoS-and-CC/index.html","37f47e9bcd13d089f8f879d775ccf56a"],["/2026/01/02/2025-summary/index.html","67a9b42233cbaf4da294175070ef1962"],["/404.html","edd5f4c87db88fbfd6dfed4ff9b11f64"],["/about/index.html","7eb698319f364d567a932474be29235f"],["/archives/2023/02/index.html","7ec4e5be2123ca4d8398c5a8227bdae7"],["/archives/2023/03/index.html","dc9c7c2cede4625bc5552c324999ad6e"],["/archives/2023/04/index.html","1cbf844de4e776f1f7ae9fcfd4ac6595"],["/archives/2023/05/index.html","0869561b664cb78f653415847db4bd54"],["/archives/2023/06/index.html","eef879ca05b8f4dfb7f6cae02f27b097"],["/archives/2023/08/index.html","4541628cfc8129851acb73a6b8c7515d"],["/archives/2023/09/index.html","99f7fd76242468efd3935494b228b9ba"],["/archives/2023/10/index.html","e774e974027e6bdc645c51f5a642e736"],["/archives/2023/11/index.html","7f5f5a24a4d4463ee7751785a8970a62"],["/archives/2023/12/index.html","0a84f0e59eb9f07887006786dd4cd516"],["/archives/2023/index.html","23cdd566688e43933116d8c815dcd2a6"],["/archives/2023/page/2/index.html","23cdd566688e43933116d8c815dcd2a6"],["/archives/2024/01/index.html","007740098965e6cace407c58eddc698b"],["/archives/2024/02/index.html","f3c9f128c8ea9150a431eb73e1c438f5"],["/archives/2024/04/index.html","e7429b786785b1aa298bffb565438a39"],["/archives/2024/05/index.html","791bd98fc0143b393e42960eb0460667"],["/archives/2024/06/index.html","f9bb4d6b45ca471b762103f333b79e2c"],["/archives/2024/09/index.html","666f3c1dfbfef07bc440c0b394c05896"],["/archives/2024/10/index.html","b6c2f3c600cc7408d27297a44c5d37fa"],["/archives/2024/11/index.html","65728afb0ac5375fc73fb3a32da57cba"],["/archives/2024/12/index.html","e3574ceee93dafde98c7b908a1ece81f"],["/archives/2024/index.html","5fa0bf793f25fede95e621e4dda24bcc"],["/archives/2024/page/2/index.html","5fa0bf793f25fede95e621e4dda24bcc"],["/archives/2025/01/index.html","35819e4c5363de6415c5b1eb089b534e"],["/archives/2025/03/index.html","0f00271b1a3f716eb08e9534929f559f"],["/archives/2025/04/index.html","efe71a52bee6d9e06d6a7edf3f1e0979"],["/archives/2025/08/index.html","d757e6a0b63d0140f71f98ee1c278e19"],["/archives/2025/09/index.html","3efd6f43cc95f78b47f746aab2aad750"],["/archives/2025/10/index.html","77ff40a57c17a8e864f7a64c5c5f0744"],["/archives/2025/11/index.html","90603d75006fd4be5081c3219cfcea9b"],["/archives/2025/index.html","6a887135e024c8932747817347e559ec"],["/archives/2026/01/index.html","c2caf33549081e597e37213dbb900e30"],["/archives/2026/index.html","c514cace3069daabf5bfbf04b70132b9"],["/archives/index.html","ba187660262eb1402be61983ea885615"],["/archives/page/2/index.html","ba187660262eb1402be61983ea885615"],["/archives/page/3/index.html","ba187660262eb1402be61983ea885615"],["/archives/page/4/index.html","ba187660262eb1402be61983ea885615"],["/archives/page/5/index.html","ba187660262eb1402be61983ea885615"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","f3ca91bdc1f13566bf36f64ddfe39237"],["/bangumis/index.html","0642f1ed644b7ae7840780a2e947e8b7"],["/categories/技术/index.html","b1ff51ad7c02aba6bf44a952c9ac560b"],["/categories/技术/page/2/index.html","6ec3b2c5ed03f88e35d6f9262d84fe65"],["/categories/技术/page/3/index.html","f055abd7a61b3811f57198ebb9f64413"],["/categories/技术/page/4/index.html","12a2ece8ff726e17b89087bfa45f2031"],["/categories/资源/index.html","17edd2fba552d895a3ac65cdfb4eebd5"],["/categories/转载/index.html","cb2f36c7f50657f10a31970d66310681"],["/categories/随想/index.html","d4b8335bb89f7eb51f13e8db2f27bb0e"],["/comment/index.html","672454d2d3c11bfc455770d8024642ea"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/giscus.min.css","96c42b2029f44095aaf46f6dc0628ded"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","71cebc0cd666f182f1ab1dbe4a9f15c1"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","73bb864d038d4bb3d83361b8910786bb"],["/css/style.min.css","45b4cf23f077e45f4776fb3f47a7cdd6"],["/css/tags.css","eba03aebbf2f44113682d0ca1e19fcbb"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","1c6f4826846940780e198209539c5b0c"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","1e5776d28ce4b2ece8991eac8b49039b"],["/index.html","960f9b4647a17244d9ddaa5ae76b84a2"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","5132d9c9a907e42c82f678b7b58a7552"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/js/lib.js","65f02458a8e38579dac5594f252bd66f"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","202c751aef91535fd84ba360224674d1"],["/js/sakura-app.min.js","b0060bc00f258957442c264d7f0450ae"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","c757e76be80d1da11f5c02c68665312c"],["/js/wrapImage.js","4b4646b7e9ebf8781487aa57053fb59c"],["/js/wrapImage.min.js","f366dcba793c09c735153652842d92e6"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","3feb4a9ff6b20d7bd5726c7a9f7b411e"],["/links/index.html","6a2efc175e10bc584f5e7bd3831c7cf2"],["/music/index.html","d12324e81953323cbe893b7df15e47ea"],["/page/2/index.html","dc15038fc51db53666b6ad4487a1e84f"],["/page/3/index.html","d156ca31d36a0f63f4f4a297d7a3466f"],["/page/4/index.html","96ce0a12e1e4556dd8946b08df15ea12"],["/page/5/index.html","0b7909e09f7dcf08e89217d12de3e999"],["/rss/index.html","9ca8db8b0a7576b841d6156b633947be"],["/sw-register.js","2cbb11fbdf701c9c9607b15271ac7bb6"],["/tags/408/index.html","58ef84ac0c1501e943d7ab8e4a96c0d1"],["/tags/C-C/index.html","4099efdc77213eb04d95c0d1f131df59"],["/tags/C-CPP/index.html","5be4c763a8d90d0365582db47d6d8491"],["/tags/C/index.html","e0ff93af50ee650920b4f2b4cb93979f"],["/tags/CC攻击/index.html","d46b4c7becca7e9f1b6301ce91769546"],["/tags/CONTRIBUTING/index.html","4417613832daf7bab3c8a1bb4983ea38"],["/tags/CPP/index.html","4b59ead949c8f5bcb162792cb8393083"],["/tags/CSS/index.html","57f0ed210d2bd4cb480ba59ea0a9ec50"],["/tags/CodeForces/index.html","f844ef96a847ebe74bf78a06e0d8dbf6"],["/tags/Color/index.html","d1c637ad391a38316cf915c8e713b356"],["/tags/Comment/index.html","e9cb25b3f748bb6742f6c0acc0e710d3"],["/tags/C语言/index.html","f3c9902092bc635189cf7eb455e88dd5"],["/tags/DDoS/index.html","f08e1619aa56b885493295cacbc444fb"],["/tags/Dinic/index.html","354583c6e292686b4a5fda21ab1caed5"],["/tags/Div2/index.html","1d1704c7630c1e8ef925205304b2fd19"],["/tags/Div3/index.html","f27c1b9ebcb447a2703c31cdf7fb90a9"],["/tags/GitHub-Actions/index.html","8b2885b9690e9b667a4845a34460c6b4"],["/tags/GitHub/index.html","d2be7926ae6bc2cba9398a3cd9122963"],["/tags/Gradle/index.html","47621bb230d53120ea2fcca55f77ebba"],["/tags/JDK/index.html","7b36cf66be2e7c9f47ee7a98eddf80b2"],["/tags/Java/index.html","3b2dcaadfe104668065ab333968c01fd"],["/tags/JavaScript/index.html","94361b9250224b1e55e7df77a9d31f88"],["/tags/LICENSE/index.html","2e04c2aa1769f7a9a9539c360bc061ca"],["/tags/LeetCode/index.html","a015aa831b3439973cdad8511bf92e4e"],["/tags/Linux/index.html","15fc9abccc2561d8cbd3208cd766f6f3"],["/tags/Lombok/index.html","8defa77c68ec230572f0befce74813aa"],["/tags/MSYS2/index.html","b7f0376d631a1cfa9e1b1a9aa0a63f7e"],["/tags/NoneBot/index.html","542e322d77931c325f122e350675c54b"],["/tags/Note/index.html","85c6528309794019ac842d0bd4651c2a"],["/tags/OSINT/index.html","a86b427aa751bc0fcf4a19d2d66eb62e"],["/tags/PrintStream/index.html","ffea58dce2cd4f03485e2c4ce81752a4"],["/tags/Python/index.html","c489c6124053d4c7d02a4e6a8eddc1d1"],["/tags/README/index.html","bf78dc68747d14deba664a48505e9312"],["/tags/RVO/index.html","7ed70c80b2701eb595731e21e8d757ee"],["/tags/Rocket-Loader/index.html","16036e0e7b7301dcfa578a94fd1e0c2f"],["/tags/STL/index.html","dbb77dc28f93cfc4316c8cf3dcfbdf81"],["/tags/Scoop/index.html","5f6a01ceae50694fdee825b8774e2141"],["/tags/Swing/index.html","178d77817f15a6f40e01d5c1ce43315d"],["/tags/Tomcat/index.html","f84d79aec6d70b5d0c72881afda12f99"],["/tags/UTF-8/index.html","4bc834dbc833c009cc398de4391bb50c"],["/tags/VSCode/index.html","a0549b4bcbd707dbcfd48242f1ba48a0"],["/tags/blacklist/index.html","052b3e7e24e851450abc1db15d0779b7"],["/tags/blog/index.html","ec0eea43e90f0277e8bbdd1f9913fe70"],["/tags/builtin/index.html","ed9357c6ac1e0d5792048f3a8ebe1e8c"],["/tags/cloudflare/index.html","7b206b64aad2f112bebba7b4e1de0c42"],["/tags/giscus/index.html","9cc0bf71484e9a5fe92b1089550c8ce9"],["/tags/gitalk/index.html","8f01f164365fc8976ac8a08af75f7036"],["/tags/index.html","7fbf9ed7904efcbd919e58a8ba915c97"],["/tags/tools/index.html","ee34ca3c86ce1c02c070308daf39bd1e"],["/tags/utteranc/index.html","f6a9fc197333a0b5c33190b640877399"],["/tags/vue/index.html","15a48218cc6c6e4cea675ef7b5afbdf8"],["/tags/web/index.html","aa932283d5470459696b895bb9d2167f"],["/tags/乱码/index.html","3db931bcb454c8cd96e2f98eef26fad1"],["/tags/二分套二分/index.html","ba69e4b4a674b7daee4d427af8c59874"],["/tags/云计算/index.html","5ed14dfea0a674bcbdec12974ee95a8c"],["/tags/仓库管理/index.html","781de589265ada9c337cc19a4c703c86"],["/tags/信息分析/index.html","a06c37ef77866e0eeeb8a44938aa727a"],["/tags/划水/index.html","fa31abb46366fa21d933217090bc97f6"],["/tags/包管理器/index.html","299f6ac91f779b8e345f90e6e34a3e4f"],["/tags/图论/index.html","71c725d89eb916f7099a87ef70093064"],["/tags/字符集/index.html","a42e9452988c595d351a184c0270b080"],["/tags/应用/index.html","2f02e5e0e6622bdedd58bc3436d7d4f9"],["/tags/开源/index.html","b252ac2120d0b5d4331435b2e3792718"],["/tags/开源情报/index.html","eeffe6831aa8b91074d5d1647ed6ef37"],["/tags/悦读/index.html","e9542b6c32edf463ab13c14c7760fc3e"],["/tags/技术总结/index.html","db320951f20a0e6a3ce97a45d0c924de"],["/tags/操作系统/index.html","4ae798dc34d1d5cc6c6a23ef23ebe247"],["/tags/数据合规/index.html","7945146226918274fff6077218b3a372"],["/tags/数据结构/index.html","5e1703c22962dcbcd121c7b2410d02ff"],["/tags/数据结构与算法/index.html","33b62d3d57701bfadcd595a68308fdee"],["/tags/新年/index.html","717095a748767342b2b29ce23eff867b"],["/tags/服务器运维/index.html","239b370cbaf7b050a32ceaf49f224ed0"],["/tags/杂谈/index.html","d5707639bc52b76b00cfaa149bba7068"],["/tags/笔记/index.html","762d012153789bcb0d2fbc079298d92e"],["/tags/算法/index.html","57bc67412b3f2c5ecb19e19ccf03f2cf"],["/tags/线段树/index.html","efa174726fff029d4eef153be1f2be7d"],["/tags/编码/index.html","d78945252c0568b4d9c95567d51c6cc6"],["/tags/编程技巧/index.html","aa6d39799da18974f883e18f99e0e149"],["/tags/网络安全/index.html","b5257d4c96170f085eb8d214b2949f2a"],["/tags/网络流/index.html","8cdd9912a598e5ef1e2f49eb3304d731"],["/tags/职业发展/index.html","2a9f1f90bf62e733c4d2f9e6da572189"],["/tags/萌新/index.html","f247bfb7e6774b9e0f0a89e2b513c3a0"],["/tags/计算几何/index.html","b200ba9b74fadfb90503230314447cbd"],["/tags/计算机组成原理/index.html","32d5874dc21dbebf77a0ed5700c2133e"],["/tags/计算机网络/index.html","d928e269bb65a9bb7dee735ac1842a2d"],["/tags/课程/index.html","fddaddf39a90f75400c7b067258cf546"],["/tags/软件/index.html","d4a7333f564e4061acbf1e5a40474409"],["/tags/输出流/index.html","37c593bb7438dee2357a12dc086c58c0"],["/tags/镜像源/index.html","fe55fe5f19421088aad02c5a7c0bf10b"],["/tags/随机增量法/index.html","42f2770366274cb7d533b1ea3570f6b0"],["/tags/隐私伦理/index.html","1afc8941fab6bc266492b53fad776103"],["/tags/题解/index.html","e5f2368d51a2b19d8638bae2326f43e2"],["/theme-sakura/index.html","6828b5f8f1b8c9ed0660faed7921cf62"],["/video/index.html","d509c8e173389c1ca3782d2a1ed97865"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-brands-400.woff2","8b0ddedbb27cbc9971c8667caa8a0cc1"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-regular-400.woff2","61f30b79daf5b31f0d254a31fba66158"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-solid-900.woff2","c64278386c2bbb5e293e11b94ca2f6d1"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"],["/webfonts/fa-v4compatibility.woff2","4bc58bc16bb05a05d3a47a4f7e143b75"]];
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
