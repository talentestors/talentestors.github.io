/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","7fdb40487ed6e3465b2f8530c942fe0e"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","04b2543b5b6d1b901800c37003abbcfb"],["/2023/02/06/C语言链表/index.html","e2139d662d31544dcf529f05c9537a28"],["/2023/02/06/书籍资源/index.html","71cb0081efa4dadb8c2f6a9a98cd78c1"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","2946550d61172c3ed3d558d187eb486f"],["/2023/02/07/为水而水（笑/index.html","a2a7e8a8857e15e88178f43d3859410c"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","9461a1859713b5cbeb6e689a89fec6e2"],["/2023/03/09/Web前端笔记-Emmet/index.html","3ce4baa1fccd373d6f9a435499e02d1a"],["/2023/03/23/gitalk-评论/index.html","bced0524490d77e5083f7da4b7e2042c"],["/2023/04/10/用C语言实现字符串全排列/index.html","76abc3b5a450a49d7f1afc66870bd657"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","2bf7197bf0fee699f528ef55d1a9bb7e"],["/2023/05/15/C语言基础排序-demo/index.html","d2d5263edc6281b9febf59fd442b4957"],["/2023/06/14/闲着没事干/index.html","be432f14fca6ed4637fb4762fc66cb27"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","09b86dfa01d9f2f89c042701215054c2"],["/2023/08/01/javase-note/index.html","6c4f43454ac19d3f866524a19808239e"],["/2023/09/14/vue-pure-admin/index.html","c191414cef9ca3eace49a57623d0f7c5"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","9958ae5d5be8eed12ec6d50097a655c2"],["/2023/11/28/C-CPP-the-memset-function/index.html","2e0f81810614d479fef7838cb5b32421"],["/2023/12/13/javaSwing-DynamicClock/index.html","8de715b70f81d603eab64c939cab92e3"],["/2024/01/24/builtin-系列函数/index.html","bb21f8b8f7804c4e6b0501eb79bd5897"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","2216b8e11bb6ff623c770c5f0b297dad"],["/2024/02/09/新年快乐/index.html","9365cca39c17768733b3cd308a2add59"],["/2024/04/07/转载-线段树专题-xyw813/index.html","8e4a24b8681520c6d8de7d238e8c2151"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","561b04d6522fb158533a23208b351e7e"],["/2024/05/06/cloudflare-display-issue/index.html","2e06110f7385d6d866fa67660ec2ce7d"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","a46e55fef5978c5c3bf893fc5a37cf04"],["/2024/06/18/POI2011-WYK-Plot-Solved/index.html","6b4058c49c1c33ba564ce8a3681aef5c"],["/2024/06/25/open-source-LinuxMirrors/index.html","e3ad3aea446f776603435bf219a48db9"],["/2024/09/02/Dinic-算法/index.html","7a43d3efef8577745345d57a81a1c44e"],["/2024/10/08/黑题记录-2D-Geometry-110-in-1/index.html","a7563db37549f9f919ca2bf74af9d295"],["/2024/10/11/常用STL算法库/index.html","4cbd9bf7382e6baad40c05d333586b1a"],["/2024/11/28/在-Java-中设置输出流的字符集/index.html","ef731618badd8b4a662899e09a3b7446"],["/2024/12/05/JDK-18-以上使用标准输出流中文输出乱码问题/index.html","73fdfd2cfbbea64f53ee9892f25392d0"],["/2024/12/09/Codeforces-Round-992-Div-2-解题报告/index.html","4611e30510cbca73c4629e1a34c44dd8"],["/2024/12/17/Where-are-those-algorithms/index.html","76e1f872c8f5fee8e2c2ea319dc2c05b"],["/2024/12/26/重构评论系统/index.html","d31eeed9e6805439508895f9e9478155"],["/2025/01/01/blacklist/index.html","9f723c760bdc7ff129422314df372ae3"],["/2025/03/15/GitHub-Skills/index.html","086690851eff5403df22bff1e8299599"],["/2025/03/16/lombok与delombok-在gradle上的配置方法/index.html","f5e5a387c12b33467e90f966ff6b86b7"],["/2025/04/09/Codeforces-Round-1016-Div-3-解题报告/index.html","b584e6bf33214e6d6df4612478ed20e4"],["/2025/08/23/github-special-files-guide/index.html","86a77e776bfe3b97d8e827fabca22dd0"],["/2025/09/28/408-route/index.html","301a604d686236c9e79fe163d9532262"],["/2025/10/14/rvo/index.html","da802c5d0f532394bd9333cd5be135db"],["/2025/11/13/What-is-OSINT/index.html","61ed2b2b321d2e51cdf854d1f179630c"],["/2025/11/20/DDoS-and-CC/index.html","7a1f21e6a8ff30be14603661516fe1c5"],["/2026/01/02/2025-summary/index.html","8c92517251c9ce957462f679f00ec5d7"],["/404.html","edd5f4c87db88fbfd6dfed4ff9b11f64"],["/about/index.html","fe8ab1232c7619037646aa98c0c97f17"],["/archives/2023/02/index.html","81ee90ad8e6655f8686fbf13b9601411"],["/archives/2023/03/index.html","60f97cb9bc463948ce2f618c0e7d222b"],["/archives/2023/04/index.html","cec401ed76fcf7a5451df0314374f941"],["/archives/2023/05/index.html","210b1faa5ce630f84f87cc3fe26d385c"],["/archives/2023/06/index.html","1fd1efc6ac60479ba9ddf67cdb6df120"],["/archives/2023/08/index.html","aa8a559e2471fcb8f23694922c67fdca"],["/archives/2023/09/index.html","c06d02a0cc9fdbbc0ac47f7b24e66978"],["/archives/2023/10/index.html","bdbb10587aef0b4dfc165cc3c6448b8a"],["/archives/2023/11/index.html","d3f57f88acdaf38e03d9d1d2a9e9c00f"],["/archives/2023/12/index.html","f58626d8871efbf888c159ff8dd644f6"],["/archives/2023/index.html","2d0a040950563ca5c0e7a4840e78e67c"],["/archives/2023/page/2/index.html","2d0a040950563ca5c0e7a4840e78e67c"],["/archives/2024/01/index.html","3e2181bcae7bd170e3b11ff7eba10387"],["/archives/2024/02/index.html","852e91a123813cb6881c68064eaa44f9"],["/archives/2024/04/index.html","54d352fc9ec4f0d9c344e9ad57cea2da"],["/archives/2024/05/index.html","6e4ab5b81fe0ad163bc265d79a6d12cb"],["/archives/2024/06/index.html","7ee5343b2d8d4633f05d451daf036ad0"],["/archives/2024/09/index.html","8132e2779d584fda423fffba5e6fe564"],["/archives/2024/10/index.html","fb3b20ede8bb1fdf279236121f12d8b1"],["/archives/2024/11/index.html","8f4aae00369ac8440de0b2f3e44a3e49"],["/archives/2024/12/index.html","6273928e821a92c192afb6b4512950b3"],["/archives/2024/index.html","b1a5a1a372e3d5ae5481b5baa99fa946"],["/archives/2024/page/2/index.html","b1a5a1a372e3d5ae5481b5baa99fa946"],["/archives/2025/01/index.html","9fc3ea2464333f3cb1fab8fe6bac4c55"],["/archives/2025/03/index.html","8acbdded7bc69dae97ca3c86e52c5aa7"],["/archives/2025/04/index.html","24f05c81144e8f1f1b3f82e5f6428555"],["/archives/2025/08/index.html","4908cea3dd245b2887294efc03c75924"],["/archives/2025/09/index.html","3bf76300f1728832eb2475cc6a08844a"],["/archives/2025/10/index.html","66780bf195c549398442f01030db56d0"],["/archives/2025/11/index.html","5fc50b04b5de85faa26ec866a18b77e9"],["/archives/2025/index.html","1cfba5df88352453da71d8e67636fea0"],["/archives/2026/01/index.html","9d3a2d27a8a5a3c98ccdaf95f69642a9"],["/archives/2026/index.html","f86776ed246034e904992849f71d872c"],["/archives/index.html","d67d02b4622509507a8f5d353ed7096d"],["/archives/page/2/index.html","d67d02b4622509507a8f5d353ed7096d"],["/archives/page/3/index.html","d67d02b4622509507a8f5d353ed7096d"],["/archives/page/4/index.html","d67d02b4622509507a8f5d353ed7096d"],["/archives/page/5/index.html","d67d02b4622509507a8f5d353ed7096d"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","d478f49ba070bdea6c5f7c354746a5c6"],["/bangumis/index.html","fd3a04492be2724fdfb7c68421f71eb6"],["/categories/技术/index.html","058000983fc2fc29b2050b7a63c43a5a"],["/categories/技术/page/2/index.html","d5f9f146ccdb6e667562e064036076a8"],["/categories/技术/page/3/index.html","118fa71563fea41384dadb3140d0b9b2"],["/categories/技术/page/4/index.html","7cc8d641bfeb830476ef54f01efc380b"],["/categories/资源/index.html","af78fa76dd14ea1485c50f407109d64c"],["/categories/转载/index.html","4f3dc7f5244ef6bad4b34ae125385b23"],["/categories/随想/index.html","b33b1ac8c57d8e9aeb6a22a3b000a4f4"],["/comment/index.html","96663950eeb5b1c74ec4701b5c710213"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/giscus.min.css","96c42b2029f44095aaf46f6dc0628ded"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","71cebc0cd666f182f1ab1dbe4a9f15c1"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","73bb864d038d4bb3d83361b8910786bb"],["/css/style.min.css","45b4cf23f077e45f4776fb3f47a7cdd6"],["/css/tags.css","eba03aebbf2f44113682d0ca1e19fcbb"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","ed46c014059180cd100e19e3f15eb871"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","b7f37d3f5ad59b3664b1dbf184d14954"],["/index.html","d4aece872ebfdc560034a31666a5c529"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","5132d9c9a907e42c82f678b7b58a7552"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/js/lib.js","65f02458a8e38579dac5594f252bd66f"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","202c751aef91535fd84ba360224674d1"],["/js/sakura-app.min.js","b0060bc00f258957442c264d7f0450ae"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","c757e76be80d1da11f5c02c68665312c"],["/js/wrapImage.js","4b4646b7e9ebf8781487aa57053fb59c"],["/js/wrapImage.min.js","f366dcba793c09c735153652842d92e6"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","730509efcf1f940a1afb596e28bcc1fc"],["/links/index.html","289f69396b5700b8afca7640f0f6a4d3"],["/music/index.html","5d750969c5d4eaa269a7900a3a7e971c"],["/page/2/index.html","ac4353759c4946146cd3e54e0bfded9d"],["/page/3/index.html","62bf498a02f2dda7778e6fa8861b71e5"],["/page/4/index.html","64769c472cfda1ce02672eae7edd6613"],["/page/5/index.html","9ce18d3e3a8239b77ec6623367b6cdb7"],["/rss/index.html","a75e049c25ca8bf3f7ba659c097fb84f"],["/sw-register.js","5b13686fdf6d993a7bb4b405f533dcdb"],["/tags/408/index.html","b0d42265e6a7091608b436ac63c71312"],["/tags/C-C/index.html","893dc3a2f8a55dc90838aca48d54aa8c"],["/tags/C-CPP/index.html","b3399e0b3ed47acb6b07af418f5e61a8"],["/tags/C/index.html","2cf13ea49cd86546cdd33ae6f1b0ff87"],["/tags/CC攻击/index.html","d4e1cd0ac932ed17e1ad4367be6964e0"],["/tags/CONTRIBUTING/index.html","5d02175f00081d6d143a50d5cbba0c9c"],["/tags/CPP/index.html","70f5a6a2bc21fc3f1d030f71153504ce"],["/tags/CSS/index.html","5190d34d13fd970349f8d48229047838"],["/tags/CodeForces/index.html","56e6bf8fa45a087b88a27f97f4b145ce"],["/tags/Color/index.html","bb8a3da9d4f20724f0828ad84f3614b6"],["/tags/Comment/index.html","7d54fe0edd935f23f95c059b1060247d"],["/tags/C语言/index.html","4cd1d5100ee36000e05d89b36216dfdc"],["/tags/DDoS/index.html","c7c9772ece6554c05994e3e6f6dfb7eb"],["/tags/Dinic/index.html","7b2d20bf802fe468dffd2dd3fce37543"],["/tags/Div2/index.html","cc271c2f156f49baf61b3fcfee78b295"],["/tags/Div3/index.html","d04e30ebce7b5c2db599fa532aeeae6b"],["/tags/GitHub-Actions/index.html","fde1042ad12b526157c4ebe278e5d7cd"],["/tags/GitHub/index.html","f772af269384511b3db73fc9cbdfc51f"],["/tags/Gradle/index.html","dc3f1cd3009930fbcf9b742841676656"],["/tags/JDK/index.html","545d4fbbd267541cdde23d91e828fd97"],["/tags/Java/index.html","ecd3d3d90ec1930dac041581a1a2c8a2"],["/tags/JavaScript/index.html","af72a85d1bd739114f3ceecd6e0feddb"],["/tags/LICENSE/index.html","88bee166ea9d432d8a3613cf0500402d"],["/tags/LeetCode/index.html","eabcc1a7ed6e23a0b55ce71b6da58e75"],["/tags/Linux/index.html","1e796f54b5b8e2798c489bb12b4fb7f6"],["/tags/Lombok/index.html","b3e13989f630b3ed3ebdea639d43007f"],["/tags/MSYS2/index.html","7546837355a813fbb8aaee8e132f159f"],["/tags/NoneBot/index.html","d0b5a6b99c974212bf8c073f3d9d3962"],["/tags/Note/index.html","35e566f0362d4c052e9443d99ac2a512"],["/tags/OSINT/index.html","befa492903b1c046b615a1378a9e551e"],["/tags/PrintStream/index.html","a0ed64a07802eedb42fc84b87f261a00"],["/tags/Python/index.html","2046291536173559313962132012a5f0"],["/tags/README/index.html","b857b77d210e2feb85dfe4c3739e906c"],["/tags/RVO/index.html","ebac96d1f03b344335c03a9de510c712"],["/tags/Rocket-Loader/index.html","f284b9babb7f0b35c3ad2d7f8cc0e4e4"],["/tags/STL/index.html","7ce5eb6da4f362753ad9ee8b8c68c12f"],["/tags/Scoop/index.html","2420697aabc3136890408d987159188e"],["/tags/Swing/index.html","7cef500c411ea782c303145f83d4fd17"],["/tags/Tomcat/index.html","2cba069cc5dd6e589544c3d773b4b7ea"],["/tags/UTF-8/index.html","12a967da1983cd4e8e9de3edc7b1dcb0"],["/tags/VSCode/index.html","c15adf4fcca51976576e0466f34d1e5c"],["/tags/blacklist/index.html","a8f38e972ed720a4477f21f583ab998d"],["/tags/blog/index.html","1fa54e0cd14f8b3c48ef37616f782e2c"],["/tags/builtin/index.html","1d0aa3eab58e7e87ff3226846f0393c0"],["/tags/cloudflare/index.html","576a1a8d650d274eef59a2c70836c1a9"],["/tags/giscus/index.html","cac422a53e748f0f4c5cb0ca4ded8b3b"],["/tags/gitalk/index.html","a6b03310b5545bad9533727863f241ac"],["/tags/index.html","653df6549bba79c7aa60609faadabd9d"],["/tags/tools/index.html","e7e491f4fa3bdcc05af2d48d17051b96"],["/tags/utteranc/index.html","ac5c116d000177913aae1211af8b8671"],["/tags/vue/index.html","0519d0ec9f3c2dddea03e24c4ae1c482"],["/tags/web/index.html","e2220ca527d8436c744105bd9a9b043f"],["/tags/乱码/index.html","6f04bed8217fce6edb0b415ead697741"],["/tags/二分套二分/index.html","e759079b4ada118232576e6dd49bb3be"],["/tags/云计算/index.html","3d45f8004df699591131401354fecf5c"],["/tags/仓库管理/index.html","c162e276772afd459e6b473e93425d24"],["/tags/信息分析/index.html","42856bc221679f300627c30179d93698"],["/tags/划水/index.html","29dca9b7f4e54b96ccdf116f4a182c87"],["/tags/包管理器/index.html","dfa38d2b6b621ef79833bd20268c72e7"],["/tags/图论/index.html","8d51e80686d4fa9df0fad529137e29dc"],["/tags/字符集/index.html","eb9ddf589628e0884f55bfd7ffed7b66"],["/tags/应用/index.html","bdb2f6d023d86408b066765a9836cecf"],["/tags/开源/index.html","ee9ddb6f0c2ea78ad66f80661a85d9a1"],["/tags/开源情报/index.html","37d428f417316c16f2f06c563fda39b5"],["/tags/悦读/index.html","e27b68faf36543d87adec3eaa650733b"],["/tags/技术总结/index.html","1e5889ff184f1cce59002d87f366ce13"],["/tags/操作系统/index.html","943cdc32685ef9d274f536c818b284ff"],["/tags/数据合规/index.html","d4e5723cb6147f60854d8dbfe971bad2"],["/tags/数据结构/index.html","a87f5bd2cc8242bfd51b5bc1f376bc9e"],["/tags/数据结构与算法/index.html","7a4deaae179708d1930452f92173b680"],["/tags/新年/index.html","5e397bc258f3fd7b5f407194361b4b5c"],["/tags/服务器运维/index.html","3fa8f797ca245711feebef597a1686b5"],["/tags/杂谈/index.html","00f282f1a0f70d7396d31ecbe61f9bf5"],["/tags/笔记/index.html","9bd0f970f5256e1d2001c2798246a5a8"],["/tags/算法/index.html","04382d5b6dc07ac69877df7dffdcb387"],["/tags/线段树/index.html","14479b2097ea94154bf0b55f5882ed4e"],["/tags/编码/index.html","6f06567736f73b95a3911ea0725e60d1"],["/tags/编程技巧/index.html","00f050b2dcfb35c0e9025aa3eae31f97"],["/tags/网络安全/index.html","58628abaed7cc038dc2b19537912158a"],["/tags/网络流/index.html","396975a15e7bff2ae23f3028bb7aa448"],["/tags/职业发展/index.html","91cc7d98bbb8e7d5d4a21e206bd068ca"],["/tags/萌新/index.html","de1b74eab420a788934766907b29e7ac"],["/tags/计算几何/index.html","73ef9fff59c9aefe4c77d05c9f4ebc0c"],["/tags/计算机组成原理/index.html","48189adca8ef59bc2ced4eeebe07ce30"],["/tags/计算机网络/index.html","6167a771741568370d314bc43c50e170"],["/tags/课程/index.html","1bbda256615d54bfb5019a6484b56e8b"],["/tags/软件/index.html","312ecd9cd67e7ae15e4884045eba269d"],["/tags/输出流/index.html","78a8b40df2e0b36d9c9813139515fac3"],["/tags/镜像源/index.html","ac43e285b1bf180cfcfb6ad2881951d3"],["/tags/随机增量法/index.html","285f3faad022539da97182caf26dfeb5"],["/tags/隐私伦理/index.html","ee546daff4882b210df59fba3f775eb6"],["/tags/题解/index.html","cade39c81d4beb6f1f2db0a9dbade7f0"],["/theme-sakura/index.html","d5307ba59e99b5e5182fa4bad854cbd4"],["/video/index.html","e08ba4c2c5fc68b491502e1b419eac54"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-brands-400.woff2","8b0ddedbb27cbc9971c8667caa8a0cc1"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-regular-400.woff2","61f30b79daf5b31f0d254a31fba66158"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-solid-900.woff2","c64278386c2bbb5e293e11b94ca2f6d1"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"],["/webfonts/fa-v4compatibility.woff2","4bc58bc16bb05a05d3a47a4f7e143b75"]];
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
