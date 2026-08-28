/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","05f3cdc1981e36c87e7ca83eca964fb1"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","d683c66359de0a82474b7a65ca06cb40"],["/2023/02/06/C语言链表/index.html","ec5e463c398e44307a26678d35e2809a"],["/2023/02/06/书籍资源/index.html","ceebed7daa048e5a724da137280045da"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","d4b53f9b53c6b19e16120ab538275c90"],["/2023/02/07/为水而水（笑/index.html","11bdb7c53a5323e27a4bb9507f7c7717"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","ee334d45f7ca25375024690b10d11447"],["/2023/03/09/Web前端笔记-Emmet/index.html","d1f2b76ac3e38f6acd3889ebfe44c5ce"],["/2023/03/23/gitalk-评论/index.html","c0214d1117cc74b7ce06c8c8edc07867"],["/2023/04/10/用C语言实现字符串全排列/index.html","b0bbd108a54afb7d830853f14930c65e"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","a911aeb123923f6e4e14fb091ad61ac4"],["/2023/05/15/C语言基础排序-demo/index.html","ab70c58c5222f949544f5ead17654436"],["/2023/06/14/闲着没事干/index.html","a7a84547b1601a2bf34399554318e7da"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","6b1f1c0449085953de7f1ad0c266c532"],["/2023/08/01/javase-note/index.html","364bd5d5eca5a2c109896e17c59acaeb"],["/2023/09/14/vue-pure-admin/index.html","9ad6b9145059028807732ff50b110210"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","4525865d169a0ce68f6a857410d5af49"],["/2023/11/28/C-CPP-the-memset-function/index.html","7be6240a8f45426b0f0aae179bbbc571"],["/2023/12/13/javaSwing-DynamicClock/index.html","cb684a5417f426f2a2fccf006668caee"],["/2024/01/24/builtin-系列函数/index.html","61924e9e3869370b3e955685f960bc93"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","b6372daf7fb7dd600d8fa58219e27fba"],["/2024/02/09/新年快乐/index.html","3b5bc58ae081bfd40ce0f28fb1519add"],["/2024/04/07/转载-线段树专题-xyw813/index.html","1f12995c3632e1fb0ca7ba18594cc991"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","bbdba47b13c74c97b14c862f5655e641"],["/2024/05/06/cloudflare-display-issue/index.html","6fb88c7857ffe902aea9fbe0f3c624cb"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","62e0a3d0a87e9e4f35d56c34bd3e7cbc"],["/2024/06/18/POI2011-WYK-Plot-Solved/index.html","695087902c0c98162cec0d5679855d58"],["/2024/06/25/open-source-LinuxMirrors/index.html","e9e5e146c91f57d1936e7733d0f17da5"],["/2024/09/02/Dinic-算法/index.html","a2d39495b4b8ef2d7e7360058ddfd253"],["/2024/10/08/黑题记录-2D-Geometry-110-in-1/index.html","fb8a886230e0c3fed69d02f12a7b652d"],["/2024/10/11/常用STL算法库/index.html","4310dbff0c9e5cbdeb37f0b7fd1b9bdc"],["/2024/11/28/在-Java-中设置输出流的字符集/index.html","64c340571fa15283b0eba0a24b8543c5"],["/2024/12/05/JDK-18-以上使用标准输出流中文输出乱码问题/index.html","d7b7372b2ebea2b7ca34213faec71163"],["/2024/12/09/Codeforces-Round-992-Div-2-解题报告/index.html","2409b6f4d91619c11d8e25e04a5c122c"],["/2024/12/17/Where-are-those-algorithms/index.html","040de86b5b0b5f1d794a80b949547a30"],["/2024/12/26/重构评论系统/index.html","5b8facc07159645d12e91c8f72b06d7d"],["/2025/01/01/blacklist/index.html","ba1fd5a3b90e93db02269b673c8067ec"],["/2025/03/15/GitHub-Skills/index.html","5eadaf399f3332a1b41004b7bc4e0ccb"],["/2025/03/16/lombok与delombok-在gradle上的配置方法/index.html","62f7c61670ed38bf92aefb1038f41d64"],["/2025/04/09/Codeforces-Round-1016-Div-3-解题报告/index.html","f3e1b549d105837ca55c4b9a8f2bce2c"],["/2025/08/23/github-special-files-guide/index.html","b8dcd29cb35e6d2a1a3f0499c256936a"],["/2025/09/28/408-route/index.html","161f046472c0983bef03765deae5788b"],["/2025/10/14/rvo/index.html","fea6b02591d8b7e32207fc9951df30dd"],["/2025/11/13/What-is-OSINT/index.html","f88115f6a0c070e4910f6dd12a9af081"],["/2025/11/20/DDoS-and-CC/index.html","a7d67afbde535740fdcb4dba51e48d1e"],["/2026/01/02/2025-summary/index.html","aaa9429fe0edb9f9b13f633576fa0e68"],["/2026/07/26/reincarnation/index.html","4cbd8fc8d5b52cb915a80559fd550b6a"],["/404.html","edd5f4c87db88fbfd6dfed4ff9b11f64"],["/about/index.html","eb1857ce073278b704cec864a0132588"],["/archives/2023/02/index.html","e8c6324ff3cb6b6f4e7f5d91c5e443de"],["/archives/2023/03/index.html","f67c9c18c72d38ecf4d5534f0deeb760"],["/archives/2023/04/index.html","ea3bd8b1cc7cd5e780706e71b07237b0"],["/archives/2023/05/index.html","eb2721ef2d944ab337ed34695bbdbc4b"],["/archives/2023/06/index.html","a88726c3c84d06a249cf95d80cf2760b"],["/archives/2023/08/index.html","d8ff847d2af96e8d58a4c03d3cddf308"],["/archives/2023/09/index.html","a420989639288fdedea68a83bd70c8da"],["/archives/2023/10/index.html","5ec19ec4bbf54bc1c5973a5b5b608f08"],["/archives/2023/11/index.html","d90d5d836f3e9073e9e4796542583ad8"],["/archives/2023/12/index.html","936d3b487fbf0849ebe90a4784aca1d9"],["/archives/2023/index.html","589b02e4b4f7d3936b06b79554028d29"],["/archives/2023/page/2/index.html","589b02e4b4f7d3936b06b79554028d29"],["/archives/2024/01/index.html","526663af4567b9514821e0904f1fc86d"],["/archives/2024/02/index.html","d594ca100bc7b915d145ffddc5e54661"],["/archives/2024/04/index.html","eaa467056a56677826de6bf570417dae"],["/archives/2024/05/index.html","efd57a98fef6e02667d02f70f89510fa"],["/archives/2024/06/index.html","83cff4ecdb1babae610259a333263b66"],["/archives/2024/09/index.html","50f8924911298d6f57c11f4419e2386a"],["/archives/2024/10/index.html","059c300529d16acefc10c0d8c40782f9"],["/archives/2024/11/index.html","87519a55574e79a9d011cf6c40957611"],["/archives/2024/12/index.html","7aa6b7b92dbca6a7d64adc39fcc60258"],["/archives/2024/index.html","13838d2d50238af9bc0bc75def218800"],["/archives/2024/page/2/index.html","13838d2d50238af9bc0bc75def218800"],["/archives/2025/01/index.html","25b0ef86c16daadb510d881032559733"],["/archives/2025/03/index.html","9c1c2e98e30333942032c30ca65bfb60"],["/archives/2025/04/index.html","131d21f0596e3d7be54a061270cbc7be"],["/archives/2025/08/index.html","67c89876853b3d13b1407af0aa8f72a8"],["/archives/2025/09/index.html","f345b70434c62a468c58ac8438e993b6"],["/archives/2025/10/index.html","af3f4f657187cc8854712442b3d054d1"],["/archives/2025/11/index.html","a271c98608814ab79035fbcdea20ad37"],["/archives/2025/index.html","39d144a30d747e2191dafe7e7608686c"],["/archives/2026/01/index.html","81e4a08e81209edb25fe3e28e45d074d"],["/archives/2026/07/index.html","9a21bde352bd4d3ade9c0acdd38804e5"],["/archives/2026/index.html","bcc4c16a46d71eaad27c6e2f86f47eb3"],["/archives/index.html","a24dd27da92da081af1bfe4dfaba0cb4"],["/archives/page/2/index.html","a24dd27da92da081af1bfe4dfaba0cb4"],["/archives/page/3/index.html","a24dd27da92da081af1bfe4dfaba0cb4"],["/archives/page/4/index.html","a24dd27da92da081af1bfe4dfaba0cb4"],["/archives/page/5/index.html","a24dd27da92da081af1bfe4dfaba0cb4"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-FUXEtNSWPD.html","3e2eec0e5d15b2bea8faa7656ae0facf"],["/bangumi/index.html","198a564f8ddfd47a783a7a7ac42ec404"],["/bangumis/index.html","0e8e0993ccd9a19a2b49fc41fffefb02"],["/categories/技术/index.html","f6c78875b9304fcaa4dc7e489d6edd9c"],["/categories/技术/page/2/index.html","71dd70abf01e0ead2c42eb2dc1bf2a40"],["/categories/技术/page/3/index.html","dad9d827dc70df728f7f34ba9ae6bc33"],["/categories/技术/page/4/index.html","6de36a2f9e5908cc73ee11362974afdd"],["/categories/资源/index.html","bf2b0943fb6996748303579646b53380"],["/categories/转载/index.html","bc58e91b3f92e1aa67ca4877521e2ef4"],["/categories/随想/index.html","706504b9adc08973d86c40614caf722c"],["/comment/index.html","95e5c1b499822c3e2dd1e99db3de863c"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/giscus.min.css","96c42b2029f44095aaf46f6dc0628ded"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","71cebc0cd666f182f1ab1dbe4a9f15c1"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","73bb864d038d4bb3d83361b8910786bb"],["/css/style.min.css","45b4cf23f077e45f4776fb3f47a7cdd6"],["/css/tags.css","eba03aebbf2f44113682d0ca1e19fcbb"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","c97a8b4978ab2107514f677f16a6382a"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","5bfc9922b47a2c8cf1cc47eba7d0e96b"],["/index.html","336096964cf6dea629fe6a412bacf8e2"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","5132d9c9a907e42c82f678b7b58a7552"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/js/lib.js","65f02458a8e38579dac5594f252bd66f"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","202c751aef91535fd84ba360224674d1"],["/js/sakura-app.min.js","b0060bc00f258957442c264d7f0450ae"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","c757e76be80d1da11f5c02c68665312c"],["/js/wrapImage.js","4b4646b7e9ebf8781487aa57053fb59c"],["/js/wrapImage.min.js","f366dcba793c09c735153652842d92e6"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","89900da1ef0e25b833e8f95192a64527"],["/links/index.html","aee46df10ee11618fb5ce6c92f77ed03"],["/music/index.html","51079c2a0bec46f45cdd814ef9f808ec"],["/page/2/index.html","4526216c1b8136e42a59a51306c60c6a"],["/page/3/index.html","a5842024004292cc2e2b7ff8fae6866e"],["/page/4/index.html","6bc70d961198c1e10eac6bfba6fe185d"],["/page/5/index.html","307aa9bb9c262ab525908dd179aab76f"],["/rss/index.html","657db20a9c623e1b0b4f7ef1fc2f52df"],["/sw-register.js","db741c088770923139878b009ae19bb6"],["/tags/408/index.html","2e676e7f00999e2259381a59520e3943"],["/tags/C-C/index.html","440cb0720653f5ed99d3e6a16c52f734"],["/tags/C-CPP/index.html","9dc1ef2911c770491a6cb264d2eaf932"],["/tags/C/index.html","b01593c9188045f7e7e06eea5359e99d"],["/tags/CC攻击/index.html","d528809bb9ba8261e8db54576dd0c281"],["/tags/CONTRIBUTING/index.html","99c3237661c4910855dc43f7e2f65c05"],["/tags/CPP/index.html","f4bbd49c6028a573b6ee0871de3ec946"],["/tags/CSS/index.html","ff2d2ca7d3ee7937192977377fc63adb"],["/tags/CodeForces/index.html","781dbf7dd5faa34c9d760d92af1c6023"],["/tags/Color/index.html","da228faa62b8ae8eef8551513614c74e"],["/tags/Comment/index.html","e2d7bd92b77b39fba61ef034e2f004d5"],["/tags/C语言/index.html","2d9a8216e2546ca0564c80b517b42f97"],["/tags/DDoS/index.html","aac099ee7c26e4a6f33310e0231160d2"],["/tags/Dinic/index.html","feffaa06aaa0dea32e49afa6e0931a15"],["/tags/Div2/index.html","c9398d9fcf523ca61ad51efac12e942d"],["/tags/Div3/index.html","3eb3e4f753fd7228aa2d787172b1fe8d"],["/tags/GitHub-Actions/index.html","71f5b182d1a02f15165e84832ecf4cb4"],["/tags/GitHub/index.html","7f1919191f94f9441f18a7deed9e5fa6"],["/tags/Gradle/index.html","899cf017477d9aa224d5a198d0ea4ced"],["/tags/JDK/index.html","cdca64cb3545eb677608d930bbaf4698"],["/tags/Java/index.html","492d299ad7fe4c3ffbc84182cf44369e"],["/tags/JavaScript/index.html","85f65026512377cf1a1c32e63bf96f8c"],["/tags/LICENSE/index.html","304fd1ba29137cf4038603f372d21659"],["/tags/LeetCode/index.html","4c4815626b76233ba91d2e10af95aa05"],["/tags/Linux/index.html","88ae6bcc113b1da1cbbfe5f2baa74aa6"],["/tags/Lombok/index.html","f19f61470493994aadab757a0329b27b"],["/tags/MSYS2/index.html","ef7f1569fde028899dbef3b499482c08"],["/tags/NoneBot/index.html","b8ad7158e5a74f1ad9828f121028a858"],["/tags/Note/index.html","1bab97fc53b7a9ee06b86ef4d35121e6"],["/tags/OSINT/index.html","c90e5eaab330246ff62d2c077235ab47"],["/tags/PrintStream/index.html","b848a3a7ea3a681decf603e0c61eebc3"],["/tags/Python/index.html","f3e238062fdf161311a304b2b4f5cb1e"],["/tags/README/index.html","8857e51e0350a6b12180ef0586e327b6"],["/tags/RVO/index.html","86b0bb2fd4047085138d747fb469a8ae"],["/tags/Rocket-Loader/index.html","95ca6e44d20c85f082048ab793f98104"],["/tags/STL/index.html","fc2895b201b714d35a34d30d0887ddc5"],["/tags/Scoop/index.html","3a2fe8d83dea294c110db58ea92407de"],["/tags/Swing/index.html","a4c6f5fb716fa56a307dd0f931578df1"],["/tags/Tomcat/index.html","3999e04d54b3ba173ae8a1c9b771307a"],["/tags/UTF-8/index.html","44727654d5098f3dacf68411ee70ecce"],["/tags/VSCode/index.html","412d17ba70ce6915a1f03f3e63926014"],["/tags/blacklist/index.html","e3646fe85fdfe42d0a78e33443d50cb6"],["/tags/blog/index.html","c88978a1fbc905e3547df346f378b6b7"],["/tags/builtin/index.html","a7c04ab95b926591b453f1c4a61a8b93"],["/tags/cloudflare/index.html","5916764c81d1ca024d765c61f47a4cf4"],["/tags/giscus/index.html","63f14e7430eebac5bcf53090f798cc01"],["/tags/gitalk/index.html","cf178a41887506d9b5f2ad6d56dac481"],["/tags/index.html","5051b985317707d2085711ec41c87823"],["/tags/tools/index.html","44a5c25baad7a45887f75e87d26e4ae7"],["/tags/utteranc/index.html","846825e241c0be2224045da6e55908ab"],["/tags/vue/index.html","20348d74762cffcce6940d9acce56b32"],["/tags/web/index.html","c1ce3b0ab322717ad155d3fa9e108c9c"],["/tags/乱码/index.html","376d9f544fbc58908646488d1584b8db"],["/tags/二分套二分/index.html","d20dd5aa7dc430630ba73453fe6c2f76"],["/tags/云计算/index.html","e6f9422aa31fa3f12c3f92ce50dbdcce"],["/tags/仓库管理/index.html","c602d9d5d84e9cdb829b1c8bfdc029d1"],["/tags/信息分析/index.html","272f057ed36fc7bebf4c88d58a423273"],["/tags/划水/index.html","6c936e0ddaf7474132f595010b94bc46"],["/tags/包管理器/index.html","0aeac36c6c414dafe11681a86d535009"],["/tags/图论/index.html","63ba4f92002a05211814cf6ef68e4aa1"],["/tags/字符集/index.html","4f2fdcb9a16fa848bc681cc96fae2570"],["/tags/应用/index.html","01d86a663a2956aa443fa4091cf31a7f"],["/tags/开源/index.html","11fe4d3f39190b48377cc9f91cdb934e"],["/tags/开源情报/index.html","1cbbaccd13a0100e6e3be66219951978"],["/tags/悦读/index.html","47134e464bad03b7667c1c111545e543"],["/tags/技术总结/index.html","e5c4ad122512b8617839beb57a56759d"],["/tags/操作系统/index.html","613b760c428fed1755c9ea303da34cac"],["/tags/数据合规/index.html","f88cb6efaba8067c0406905f29170000"],["/tags/数据结构/index.html","5b3d0a5528078536eeb855fa0e553069"],["/tags/数据结构与算法/index.html","bd34b14ecff14383adc68c02a35301ef"],["/tags/新年/index.html","5ad04ab88b9131617401a4e17aca19d0"],["/tags/服务器运维/index.html","c45827e0c30be88280213cbabb44747b"],["/tags/杂谈/index.html","ad8c845586b6e37984ef7972149eeeaf"],["/tags/笔记/index.html","c8cc2c717e970a776e142a0209f414e8"],["/tags/算法/index.html","5790d95ae8be7edf9393c866017c81d7"],["/tags/线段树/index.html","dc52ee34333b1f58a2c58b560aab4094"],["/tags/编码/index.html","86f2fa3cfb701ad32137c63577df1f25"],["/tags/编程技巧/index.html","f9184b82d827f6de581341f77e24cfe4"],["/tags/网络安全/index.html","2be42d36327824ed2b98b60bc3809829"],["/tags/网络流/index.html","311af6f388c4fcb2341f665eabe54f73"],["/tags/职业发展/index.html","e17a6dba253cd9ba246ef7ea588ec0cd"],["/tags/萌新/index.html","1bc39771c58a35da194f7081eeb6da6b"],["/tags/计算几何/index.html","7f506f4c43f33e6870dbf39f5c833a88"],["/tags/计算机组成原理/index.html","b732ebcf448468450174f0b359ddec47"],["/tags/计算机网络/index.html","ba3c46ea7d8ba3ef54e991c7eac18e6f"],["/tags/课程/index.html","32b508c255e7f4c05299167702a963db"],["/tags/软件/index.html","331dd38837533d0dc5846d99473f5f5a"],["/tags/输出流/index.html","ed9d946fc4e8e05e4bb22c342033b641"],["/tags/镜像源/index.html","a27682c3d0a8702679c51948bdbe465e"],["/tags/随机增量法/index.html","f243da893791ef3c32c9a9dff91ff5a0"],["/tags/隐私伦理/index.html","55fc2d0c41291f0bd0737eb6b836c439"],["/tags/题解/index.html","3143c795121b2070f136755d0c9aa6f3"],["/theme-sakura/index.html","92ba52f213e3943823f1107c8b9a9176"],["/video/index.html","640a057450bd9ea0218135d66265649c"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-brands-400.woff2","8b0ddedbb27cbc9971c8667caa8a0cc1"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-regular-400.woff2","61f30b79daf5b31f0d254a31fba66158"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-solid-900.woff2","c64278386c2bbb5e293e11b94ca2f6d1"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"],["/webfonts/fa-v4compatibility.woff2","4bc58bc16bb05a05d3a47a4f7e143b75"]];
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
