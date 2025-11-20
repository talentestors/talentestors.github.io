/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","beb2c4e2aefab2fa5f7c4762a1c38a00"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","b3566cc17bf6f7a23621e33eabe7b1cf"],["/2023/02/06/C语言链表/index.html","cc2fc19ab03b5782113bb27939ec271b"],["/2023/02/06/书籍资源/index.html","f6eb7be7f20698c5054b1e2cdbd408b3"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","df2993c88803aa2c20a53f49d0724362"],["/2023/02/07/为水而水（笑/index.html","6f835764718eda3dae60ee7a73856d3e"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","de77ee83c56c0e5c8a3565091ce65a56"],["/2023/03/09/Web前端笔记-Emmet/index.html","57d5fdf52fedd0e5bbcb7440516a955f"],["/2023/03/23/gitalk-评论/index.html","3f746a87d2f03e9fe2bdb7a3dea1232c"],["/2023/04/10/用C语言实现字符串全排列/index.html","a7937d47f10703f0ba6f6737c1ef9ec0"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","b05a743bd42d28c22872b22622bbe311"],["/2023/05/15/C语言基础排序-demo/index.html","a58f922da9058fd2dd7bb04e8d015f89"],["/2023/06/14/闲着没事干/index.html","2bc0f5733acd3fba48e99313255a0fb3"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","dda9f0cb9e1aaa6ec13799e22892d133"],["/2023/08/01/javase-note/index.html","271f44c5a8d7a5d547c3c7ab095f1d61"],["/2023/09/14/vue-pure-admin/index.html","410a86164dc04b7c05573ea4db20b8fe"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","ee5d24805a5e481877b214f832402f46"],["/2023/11/28/C-CPP-the-memset-function/index.html","d8e74792787e2e9da5ff95c41ee85d1e"],["/2023/12/13/javaSwing-DynamicClock/index.html","571ff3371714ec66758040b93a58db9d"],["/2024/01/24/builtin-系列函数/index.html","5732ac3cfccf1e62fea5e587a35eb9c0"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","ad3d1ea20a0cb1f187ad9fbc145c318e"],["/2024/02/09/新年快乐/index.html","656b9bb76da666b6aeafd65ea0f46f3e"],["/2024/04/07/转载-线段树专题-xyw813/index.html","e224353767ae1de55d879f62254cff14"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","0955e75a6d04fcc1531627248641161e"],["/2024/05/06/cloudflare-display-issue/index.html","cb8d8a30284573e99c1489ca1b3f9efd"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","c9811a50a3558bf1486457d646f9a3ac"],["/2024/06/18/POI2011-WYK-Plot-Solved/index.html","f7209f4bba689131a02892e5a779144d"],["/2024/06/25/open-source-LinuxMirrors/index.html","1c55d2bf37fbdb8a87fa41258b3246ca"],["/2024/09/02/Dinic-算法/index.html","5095092bb8f41300d202a09a74a8caed"],["/2024/10/08/黑题记录-2D-Geometry-110-in-1/index.html","85015c186a52bf7e0a8f0581c109942e"],["/2024/10/11/常用STL算法库/index.html","e33ba9633557a549199dd81ad5b4e33c"],["/2024/11/28/在-Java-中设置输出流的字符集/index.html","d1c6dc2bf2a2482098c1353e3d6d1a06"],["/2024/12/05/JDK-18-以上使用标准输出流中文输出乱码问题/index.html","aa1f1fd77b40bf6c96b9ab9307e79ca9"],["/2024/12/09/Codeforces-Round-992-Div-2-解题报告/index.html","f9d99cedff975af9f0fd642a3edf5205"],["/2024/12/17/Where-are-those-algorithms/index.html","79409dfefd48fe0c8705ab5b7b422e9f"],["/2024/12/26/重构评论系统/index.html","1e935a61a57b9d2060fbe86b6934dc4a"],["/2025/01/01/blacklist/index.html","1398fad8bd4559cfaafe32e791be6067"],["/2025/03/15/GitHub-Skills/index.html","394944c80073caf7aaec7b9f60bfc742"],["/2025/03/16/lombok与delombok-在gradle上的配置方法/index.html","3114ed392612e5825111e36cf6cb29ab"],["/2025/04/09/Codeforces-Round-1016-Div-3-解题报告/index.html","1f941936f5f7552f6aeb20b35e3be8d0"],["/2025/08/23/github-special-files-guide/index.html","28b256bd06ccd7c825a5391f0502c13f"],["/2025/09/28/408-route/index.html","650f7af7bc4161a13951f4ff6a655ad8"],["/2025/10/14/rvo/index.html","a51db33a542d7295171c65a05988f655"],["/2025/11/13/What-is-OSINT/index.html","a40e756b9be1400369798db0057a28ce"],["/2025/11/20/DDoS-and-CC/index.html","38720fab51a4cce1d99901823b035c0c"],["/404.html","7b7c2b12ef5e2b95eda92262d85e6cd6"],["/about/index.html","a3e39606bf2439a18c16b2683812d4d8"],["/archives/2023/02/index.html","81425c79b23aeabdc97f4ab63b4db499"],["/archives/2023/03/index.html","e958e956fb06565097ad1807aa546a28"],["/archives/2023/04/index.html","a1efda86ed1cc8b3b947a0c8ac1d3841"],["/archives/2023/05/index.html","550df87c349569be0ad7068e058a9489"],["/archives/2023/06/index.html","c34a5b817a07bd9ee2dadff973a304c9"],["/archives/2023/08/index.html","3033f905bf614b0b4e8097ffcf393cd3"],["/archives/2023/09/index.html","9d80e9c3774c957b89af3d0ff432b482"],["/archives/2023/10/index.html","de747f55c60c53d7ae5c13272e34b52b"],["/archives/2023/11/index.html","a16e5cf709a3a28d167a25c49cbe1795"],["/archives/2023/12/index.html","05fce54f9fce68148a9b235854bf5b8d"],["/archives/2023/index.html","f285c0268b59a581e5ee770d3314cac9"],["/archives/2023/page/2/index.html","f285c0268b59a581e5ee770d3314cac9"],["/archives/2024/01/index.html","10d7a3981f57e91490764356aa93051b"],["/archives/2024/02/index.html","931b8b2a4aefd48abc56a4b4e4509d38"],["/archives/2024/04/index.html","379a27928156e3adca15a638e888f8aa"],["/archives/2024/05/index.html","018bb270d995e4eba64680438322d6ea"],["/archives/2024/06/index.html","95e0605464dd232736b0c7bef9d92c5d"],["/archives/2024/09/index.html","108c138a63d747e3e522053607aaf565"],["/archives/2024/10/index.html","a198d6881210bcf08f5d6ab79f46d67f"],["/archives/2024/11/index.html","22ee3f61eeb0ee4307f60c7a4d2a1d52"],["/archives/2024/12/index.html","4af6b7969314453197aa07ced6c9ca9e"],["/archives/2024/index.html","ceb8f678fe5dcb7a809a22c946f30b65"],["/archives/2024/page/2/index.html","ceb8f678fe5dcb7a809a22c946f30b65"],["/archives/2025/01/index.html","b87a2401c9dac739cee8bfdb3a4baee2"],["/archives/2025/03/index.html","201b37c453b5eb569e4c0ac4bd09ac87"],["/archives/2025/04/index.html","7b3febc4e762877bb241f67c7bf50862"],["/archives/2025/08/index.html","62f8200ec84df181455ac4aecfd51735"],["/archives/2025/09/index.html","fa9936730d43326c735de76f2edb414d"],["/archives/2025/10/index.html","d082f0d6f2b1400376f0c27e43fbf55a"],["/archives/2025/11/index.html","2479c4202ba40713a48b6fe0e1f9c09e"],["/archives/2025/index.html","0ddc95899dd076b60b2bbd18abcc16ec"],["/archives/index.html","1b313852168d634ae9ee28b999f7ad7e"],["/archives/page/2/index.html","1b313852168d634ae9ee28b999f7ad7e"],["/archives/page/3/index.html","1b313852168d634ae9ee28b999f7ad7e"],["/archives/page/4/index.html","1b313852168d634ae9ee28b999f7ad7e"],["/archives/page/5/index.html","1b313852168d634ae9ee28b999f7ad7e"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","cafc91aa00539f16149a1a0eafe51190"],["/bangumis/index.html","0613a7ab7d67ae9cb7e6bd3feaf517ce"],["/categories/技术/index.html","0fd9d20e513bfd7edce26e469e84143e"],["/categories/技术/page/2/index.html","c07296f916e0eb9d91fa1d41bb4975ac"],["/categories/技术/page/3/index.html","59ea52ad315952f0edd35fe078952355"],["/categories/技术/page/4/index.html","c186cf641f3cf5e9db1ef15ab60e9f71"],["/categories/资源/index.html","b39cd147ff1a1f727691ff5c00168bf1"],["/categories/转载/index.html","c52ee6f48574171a50b69042610b635e"],["/categories/随想/index.html","b96be56efc5136e09b388d5e569ee42a"],["/comment/index.html","780befae47d123975d8c653f4065781c"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/giscus.min.css","96c42b2029f44095aaf46f6dc0628ded"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","71cebc0cd666f182f1ab1dbe4a9f15c1"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","73bb864d038d4bb3d83361b8910786bb"],["/css/style.min.css","45b4cf23f077e45f4776fb3f47a7cdd6"],["/css/tags.css","eba03aebbf2f44113682d0ca1e19fcbb"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","6af59a188b5273fd12aff95515d59c6f"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","5948a24766fa8495943a1953ed36c0ef"],["/index.html","8a781c4774944f85a3e17ef5934cb248"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/js/lib.js","65f02458a8e38579dac5594f252bd66f"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","f1afa64bc2698ed86b55ab396a0c7ac3"],["/js/sakura-app.min.js","115ca9549a404cd11acd81cd31abe374"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","c757e76be80d1da11f5c02c68665312c"],["/js/wrapImage.js","29007a235330279921b40783f3752c1c"],["/js/wrapImage.min.js","fa46e73ad4d52096338f455d716a71a2"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","297b83afff4cd773a93b727eea616297"],["/links/index.html","1b3e6345f0e10e05563b830b30f70f90"],["/music/index.html","d8f26a234817b2a303e95dec84c5b19b"],["/page/2/index.html","eb5c15a1c868960aaabd74e0d756cf86"],["/page/3/index.html","113c2c8739d3b108e42eab0a467bc1f9"],["/page/4/index.html","5f45b83a8efbaa24bef11380d70f840f"],["/page/5/index.html","3f85af30fba78a6a4d9e5666faadda06"],["/rss/index.html","f73dc739d9e62129a0122a0aba3e44f1"],["/sw-register.js","a292a818c0b42d32e8f9f99ce0454fb4"],["/tags/408/index.html","a41a8178b5b20fcff6dae7fad36655cc"],["/tags/C-C/index.html","bba049b9540d0068e6cf5defd4ffb8b7"],["/tags/C-CPP/index.html","f107d26c676f2e2ce6e1536b90770f85"],["/tags/C/index.html","0ae873ca7cd2a3c23656e581e7a38730"],["/tags/CC攻击/index.html","c4850edd3d62d35d6b9fb23514f53cf1"],["/tags/CONTRIBUTING/index.html","ef0bda975fa8c6f7d24625aa70b2b87f"],["/tags/CPP/index.html","a6ae47bbf50f2e20f601c7216d541130"],["/tags/CSS/index.html","1368bd4a396547c64e3f9982d1d16513"],["/tags/CodeForces/index.html","bf2a7f6d6089d7bc86e4b3faa4d36243"],["/tags/Color/index.html","ea019c77a598eadf8e2c61e94ace7a25"],["/tags/Comment/index.html","2f360e9c8135c1325ee1dd9aaf4706dd"],["/tags/C语言/index.html","b32c760a902766bdec0d31154ff19964"],["/tags/DDoS/index.html","567e923872ed651db56ca420f8fa4e5a"],["/tags/Dinic/index.html","85f652c6d0e1b50e54566f8e456d619c"],["/tags/Div2/index.html","fea637c17c8863d087f348130398a19a"],["/tags/Div3/index.html","5bd1c3864a4a758b1278e9cfc1adeac0"],["/tags/GitHub-Actions/index.html","586475e36e0ca4354d87ae928df33d66"],["/tags/GitHub/index.html","eee8e0abedc10bbb1a559b7eea42d941"],["/tags/Gradle/index.html","f7fec498e91d74c034f617b964251c8f"],["/tags/JDK/index.html","fdc2348bb5d2baf47d84f6de4d72c773"],["/tags/Java/index.html","57ecd67d991fab0064a4ef4e9168ee36"],["/tags/JavaScript/index.html","af56099d57b69520ce7425fc38c5de4c"],["/tags/LICENSE/index.html","6c2c84b74bd171f04adecf9c90f01002"],["/tags/LeetCode/index.html","d30118659059a2f0186caac3e52d37ea"],["/tags/Linux/index.html","71d0785d2bf79e08235b4586e67893ad"],["/tags/Lombok/index.html","9c2f52ba93114246a059994e20cf4644"],["/tags/MSYS2/index.html","93b0cf8fb2949149792625b49ea71237"],["/tags/Note/index.html","fc887480f83c6265281b68211d898a25"],["/tags/OSINT/index.html","8445f3111f553eadaf37ebdca2d65b26"],["/tags/PrintStream/index.html","3be1c79381ec1e283ecdccc62133b9fc"],["/tags/README/index.html","e37cc08def8dfab0523903da4bb60dab"],["/tags/RVO/index.html","db231ab61b9aba7a6d416d7c292e2128"],["/tags/Rocket-Loader/index.html","2524709fbe8b6ff476ac692d18345885"],["/tags/STL/index.html","5b8c5cbd67c457a88e0670a353a3455f"],["/tags/Scoop/index.html","c6f325cd2d5312bbd0502cc467af582e"],["/tags/Swing/index.html","eaf4253f4230c0ff23a9276d4a5615c1"],["/tags/Tomcat/index.html","aaf45be73452c6fee8d2b1050f4884b5"],["/tags/UTF-8/index.html","6ae8ee8b565ae2325bec2a90dc6cce02"],["/tags/VSCode/index.html","2ed011ae0db41e5512ba6c1fbf49076a"],["/tags/blacklist/index.html","a052f7c7173d0a0ecb10048a75bf7f08"],["/tags/blog/index.html","3d252abaa769f22815246471c8784f70"],["/tags/builtin/index.html","b9cef1efc47b14711f60ba1d272e98fa"],["/tags/cloudflare/index.html","5ba5128c6932da73125675727a9a39b0"],["/tags/giscus/index.html","949d4c3e904800331c8848c50df5b7b8"],["/tags/gitalk/index.html","b55c273656f94c833172fbc7c14da78b"],["/tags/index.html","a38ed8d7108cef2ef8b81ac322ebe909"],["/tags/tools/index.html","1ef4b421c4da96f27885e22deeb9579e"],["/tags/utteranc/index.html","ffc12d6e77088967f3aff07b24dbab92"],["/tags/vue/index.html","a447e7ce6f6aec2a0a4e1d88c0bad8fc"],["/tags/web/index.html","f6451368c4688edd77d71be836a4be79"],["/tags/乱码/index.html","302da044b973855424f548662595b71b"],["/tags/二分套二分/index.html","3dcd518ee2804b9e29b3daa31bc19927"],["/tags/仓库管理/index.html","9881352a2578e17b58123cd3c26b65b9"],["/tags/信息分析/index.html","4a50d4e9e1e25f31634073fa772d2413"],["/tags/划水/index.html","81b8dcf29e5e819c766fbd9199792393"],["/tags/包管理器/index.html","7ec42615bf7e0a0076c08f20c6c256e5"],["/tags/图论/index.html","05ae8f46fe3388542b4d874f25001e1e"],["/tags/字符集/index.html","c4e053da197e556cbd1cfc655beb9399"],["/tags/应用/index.html","529732d0e9377e424222845f2c66d29f"],["/tags/开源/index.html","713f5cf9a58c4c49887e5e5effcb9200"],["/tags/开源情报/index.html","bed6399a091741857984624dc4a48248"],["/tags/悦读/index.html","ec99ca55cf9cf9c0a9f2b2b962e3152d"],["/tags/操作系统/index.html","910fcb8539608e7fdfa44a5a4de6b30f"],["/tags/数据合规/index.html","839f0ba3d8e70caacc3d2d7e4a907f74"],["/tags/数据结构/index.html","e5185e4112b94ff829fcb955ad79ed87"],["/tags/数据结构与算法/index.html","245b59d9c2731ecdfdfcb3eb115ff057"],["/tags/新年/index.html","725b942098ac21562fc4f6cb88c7bc39"],["/tags/杂谈/index.html","681cb6715d54c65e5bc4de7e1af4b1d5"],["/tags/笔记/index.html","2792ecf78f09c6a6409e0cd68746c226"],["/tags/算法/index.html","8f1cbc6715c0241f20cd4884e8686a26"],["/tags/线段树/index.html","ac6aadbcf32fb31e2243657dc8e450c0"],["/tags/编码/index.html","fcfb2660688dd4c9135ad6df9abd5a8c"],["/tags/编程技巧/index.html","20c9aae9bb0ee714527b3190095da651"],["/tags/网络安全/index.html","e820b21f003957c5f3bc1a9396e353f0"],["/tags/网络流/index.html","f3af816b0b0f0923eac2c7ad8e00d4aa"],["/tags/萌新/index.html","a39a3959eea938b714750dfe33171625"],["/tags/计算几何/index.html","b51f809a51d81341a86a12f7fbd28f50"],["/tags/计算机组成原理/index.html","a21473f1a64e66f8f6b05e8c81a54152"],["/tags/计算机网络/index.html","2892b06f37d2bfcfb4abb7f8e71ce996"],["/tags/课程/index.html","407753a41d85d565283a0914b38e3330"],["/tags/软件/index.html","b14125858648e6dfb48ff4d720fb8bb7"],["/tags/输出流/index.html","944da0f9bfa078ed3d88b2bf926d8bdc"],["/tags/镜像源/index.html","3bfd49af76a57d9d491f2358e6881b00"],["/tags/随机增量法/index.html","633406628e06edb2f102981c1258ed41"],["/tags/隐私伦理/index.html","866b0be303262bf768f9d845c1566e37"],["/tags/题解/index.html","e980175e723f5e8763afc7fff48aacc9"],["/theme-sakura/index.html","2a3329a1f7609d5d5aba9f112b5f7742"],["/video/index.html","66d4fe9cc1a617ed12d9e4ba658a6fb6"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-brands-400.woff2","8b0ddedbb27cbc9971c8667caa8a0cc1"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-regular-400.woff2","61f30b79daf5b31f0d254a31fba66158"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-solid-900.woff2","c64278386c2bbb5e293e11b94ca2f6d1"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"],["/webfonts/fa-v4compatibility.woff2","4bc58bc16bb05a05d3a47a4f7e143b75"]];
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
