/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","92d2947d586129bc3d14106513ccba1b"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","c670d846b58ecb72551f810a55cdf496"],["/2023/02/06/C语言链表/index.html","a97b9691a1cae25f5de7c2b8e1a42929"],["/2023/02/06/书籍资源/index.html","30a2f606913a723f2ed79b998f465497"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","69ec9ebede10d7e4dcbfc8a5a2197237"],["/2023/02/07/为水而水（笑/index.html","75ec0a6cfa9b933c93d85438d7d9df52"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","4747d19a86d2ce0a7e02eee2b5bc8d8c"],["/2023/03/09/Web前端笔记-Emmet/index.html","dca6af487973d8ff9c62f31545bd9da0"],["/2023/03/23/gitalk-评论/index.html","c59489184ac48fcddc475d87f53c8982"],["/2023/04/10/用C语言实现字符串全排列/index.html","2e0c761e9cd98be0e0e4d1b8b09c13f7"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","ca3e96e7a96477f75c289d54c3b7f5d3"],["/2023/05/15/C语言基础排序-demo/index.html","3776e952d602cb5ca6efc44f8ac61f18"],["/2023/06/14/闲着没事干/index.html","d3601010f6263d93a92de1454ceaf68d"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","a676b3b3a446faee9f074212f19ff718"],["/2023/08/01/javase-note/index.html","49745997f732ee69c8d903474833b6e9"],["/2023/09/14/vue-pure-admin/index.html","d88b174ea9b015d069631a40da0ca144"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","51f3168ff4e5c60bc5dd120cb2c7bb41"],["/2023/11/28/C-CPP-the-memset-function/index.html","87874176b1147f74f1ce9fe3fc11de5b"],["/2023/12/13/javaSwing-DynamicClock/index.html","cfb5c9c3848ecfdb5e69526d755cae76"],["/2024/01/24/builtin-系列函数/index.html","d63035a1efb59d9b7fc40c7af76e954f"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","9eaa8990cabacd52409e5a2ff4135b69"],["/2024/02/09/新年快乐/index.html","5507e62766de155df8c742bb8b72966b"],["/2024/04/07/转载-线段树专题-xyw813/index.html","2105ad14c930bca9414fe8c925c39528"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","78b45ac1d08f11765497e0918be6935b"],["/2024/05/06/cloudflare-display-issue/index.html","ded88007b61f5aaf01ba18351aef5426"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","9b0ff1fe622b3392f2a1a8a57883d36a"],["/2024/06/18/POI2011-WYK-Plot-Solved/index.html","89db10ab5ab97d3147153aedf3832967"],["/2024/06/25/open-source-LinuxMirrors/index.html","0f428a6efc93b4958f4f957779f29bd2"],["/2024/09/02/Dinic-算法/index.html","8888987adb21245d19099eaaf4942c53"],["/2024/10/08/黑题记录-2D-Geometry-110-in-1/index.html","b0fd265e543321d9679f03551918d5c5"],["/2024/10/11/常用STL算法库/index.html","4032ecdef02ae8008aa08bb36aebd1d1"],["/2024/11/28/在-Java-中设置输出流的字符集/index.html","5846080bf8699878129cf99c73e0897f"],["/2024/12/05/JDK-18-以上使用标准输出流中文输出乱码问题/index.html","0a75d5f16d5c539c2a4bc3dad756775e"],["/2024/12/09/Codeforces-Round-992-Div-2-解题报告/index.html","5c940f2d90e40a61c568d45bff815107"],["/2024/12/17/Where-are-those-algorithms/index.html","070832cde84a927d641ae1f84ba3c15c"],["/2024/12/26/重构评论系统/index.html","91190e5be9ee0a0271cee83258fc20b6"],["/2025/01/01/blacklist/index.html","eff4387f19367e7d407c05f106eff89f"],["/2025/03/15/GitHub-Skills/index.html","0eae45c41e8f0c298d3cc8cef7726cb4"],["/2025/03/16/lombok与delombok-在gradle上的配置方法/index.html","b5b81d5dee2ab47a7515cce80335a5f0"],["/2025/04/09/Codeforces-Round-1016-Div-3-解题报告/index.html","03457055118dd6dbe403aba427450b15"],["/2025/08/23/github-special-files-guide/index.html","baf91ed0ee4af89e18c591c1a189738c"],["/2025/09/28/408-route/index.html","c80291b10d6cfc2b904ae2bd233db38a"],["/2025/10/14/rvo/index.html","1bae77df5dc9120abfcfafa11923fc8b"],["/2025/11/13/What-is-OSINT/index.html","6e8386eccac8e12fb0a66a0f4e231557"],["/2025/11/20/DDoS-and-CC/index.html","2e2d532c555ff4a66b9a993631f86f48"],["/2026/01/02/2025-summary/index.html","45b19a8c41565dd4d5fc923daf6bf8a5"],["/404.html","edd5f4c87db88fbfd6dfed4ff9b11f64"],["/about/index.html","fd5ba5e3869114ac831f204e81a2c9f1"],["/archives/2023/02/index.html","2220d6b4dcd62f12ac7bdb0535cf2936"],["/archives/2023/03/index.html","05679d36abc83613683f8e9f634ef023"],["/archives/2023/04/index.html","05f4c974f14e4b08110899f1bf2596ba"],["/archives/2023/05/index.html","5dd3bb1fc24844cd0cfd6420238cf3f4"],["/archives/2023/06/index.html","343b18cd28d91b8b27711f0393c4c2b6"],["/archives/2023/08/index.html","435233a1b75aecf1b084e7fa9f400dbd"],["/archives/2023/09/index.html","4bd7990c221f73e7848e46faf8f81310"],["/archives/2023/10/index.html","439575a99dc762fe61dabf8468584354"],["/archives/2023/11/index.html","e0a0d45e07507ab05f5c9acc167edab5"],["/archives/2023/12/index.html","c1462f0bd37bd02bb3f0bfcb984b1688"],["/archives/2023/index.html","ecf13d50e57c95b56f1df8d454623451"],["/archives/2023/page/2/index.html","ecf13d50e57c95b56f1df8d454623451"],["/archives/2024/01/index.html","f0facf3bdc3dd8eb8f5ffe42401eb248"],["/archives/2024/02/index.html","422fadceaf0654ce3571b63e1a2f5096"],["/archives/2024/04/index.html","002c1873eb13fc2e390b61dafa36fd6c"],["/archives/2024/05/index.html","8601242e1ed2e38b5fc1a55036ae59e5"],["/archives/2024/06/index.html","e085762fc32dac7b20997cdde052d9de"],["/archives/2024/09/index.html","92ea6035a4975e9e29d9a319b70ed5b7"],["/archives/2024/10/index.html","5a2ecc7c925c09cc0db6fcf6e30642ce"],["/archives/2024/11/index.html","65cff1a7c8bb550fbc8c100d10693c77"],["/archives/2024/12/index.html","def20db93797adf9e90526bfdfc3d225"],["/archives/2024/index.html","ecda38406e8b868e6e11f1cd95732ba5"],["/archives/2024/page/2/index.html","ecda38406e8b868e6e11f1cd95732ba5"],["/archives/2025/01/index.html","b6168869e8d97eb75d4ce23a4c87f393"],["/archives/2025/03/index.html","9959f1c37c60fe8c14854bded7d68c64"],["/archives/2025/04/index.html","786ed0416f6343e4b68cde7f45f7f730"],["/archives/2025/08/index.html","cf8ee0f063840fe34147a234b64c76ef"],["/archives/2025/09/index.html","e312700ea94f4ff95fdcae66c4646dd8"],["/archives/2025/10/index.html","598cb9727cf8b3eb7ef6c656520bd9e5"],["/archives/2025/11/index.html","0e2592a0d51bd643b1727fabaa81e2ec"],["/archives/2025/index.html","2b0f37c36ce950932589d894c894f56d"],["/archives/2026/01/index.html","046c612bc1420b14fffb8d6f0b2be219"],["/archives/2026/index.html","89c9ab3c6df7ba6011313b4eaa5f538b"],["/archives/index.html","76f6ec5dfbfc33c741c402ab3174711d"],["/archives/page/2/index.html","76f6ec5dfbfc33c741c402ab3174711d"],["/archives/page/3/index.html","76f6ec5dfbfc33c741c402ab3174711d"],["/archives/page/4/index.html","76f6ec5dfbfc33c741c402ab3174711d"],["/archives/page/5/index.html","76f6ec5dfbfc33c741c402ab3174711d"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-FUXEtNSWPD.html","3e2eec0e5d15b2bea8faa7656ae0facf"],["/bangumi/index.html","f0695c0ecf2c81b6843213e19fa87b02"],["/bangumis/index.html","ffb309ce19ac31a87c9774042fb32cd0"],["/categories/技术/index.html","e749618a0f45cd43a8e7a23b3901bc94"],["/categories/技术/page/2/index.html","2b77745bb52593eb62475f471d4a6395"],["/categories/技术/page/3/index.html","fe6c716d6910792a00b826e01727ebcc"],["/categories/技术/page/4/index.html","073c02c474072363f8aa9924e1ee0a99"],["/categories/资源/index.html","a8ac6612c679fa095dc90fc9ea89e0ae"],["/categories/转载/index.html","4d4235da72cab285e8ca2b71aa785604"],["/categories/随想/index.html","317166f4063425762615b29e12755899"],["/comment/index.html","51932c166155f9d70b3b9758a73265a8"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/giscus.min.css","96c42b2029f44095aaf46f6dc0628ded"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","71cebc0cd666f182f1ab1dbe4a9f15c1"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","73bb864d038d4bb3d83361b8910786bb"],["/css/style.min.css","45b4cf23f077e45f4776fb3f47a7cdd6"],["/css/tags.css","eba03aebbf2f44113682d0ca1e19fcbb"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","32c2a60029896474e48c7fe91e27daaa"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","cac9aa34ff5069e4e926e9e3f52b8dca"],["/index.html","e998631343dc957ec4a5d461f3ec48ff"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","5132d9c9a907e42c82f678b7b58a7552"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/js/lib.js","65f02458a8e38579dac5594f252bd66f"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","202c751aef91535fd84ba360224674d1"],["/js/sakura-app.min.js","b0060bc00f258957442c264d7f0450ae"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","c757e76be80d1da11f5c02c68665312c"],["/js/wrapImage.js","4b4646b7e9ebf8781487aa57053fb59c"],["/js/wrapImage.min.js","f366dcba793c09c735153652842d92e6"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","425f730f134613028314380a3b8aef31"],["/links/index.html","b57c5d0277da9759a1aa6daa469f61f5"],["/music/index.html","a7793ea9787aed4903a51e080f26d738"],["/page/2/index.html","ff4edceeccf7327117d0eb59c9cb1d8b"],["/page/3/index.html","b54d1c26f5a2ef04b46f1685937f4990"],["/page/4/index.html","f3b3f92f14b75ada514563db1dd54879"],["/page/5/index.html","1bd6f4dbec5310dd0e9f9ee7fcaec6e9"],["/rss/index.html","058085c4d0e2efa99b8b8d5198232fe4"],["/sw-register.js","03c547f17b61acd8231b73b1071176f6"],["/tags/408/index.html","76be291e102f5f6d846859ed6f2524a8"],["/tags/C-C/index.html","5bfd70a177eaaf9b59732c97f8ecd3da"],["/tags/C-CPP/index.html","0e29f41f1b9c3e67e0d3fb98baad4bdb"],["/tags/C/index.html","7c07bc274d0ceb8b248c4be57e4bccc8"],["/tags/CC攻击/index.html","f5357465ce0e8344ad503994360e57ca"],["/tags/CONTRIBUTING/index.html","72e98a044fa480008cb89ae4b96221de"],["/tags/CPP/index.html","d1cb142cdb045353befc5163de4c1f39"],["/tags/CSS/index.html","40b8a5991ce0cc4ff446908038d802c9"],["/tags/CodeForces/index.html","c065b1f1da0328087cb94fd5d1cba6a0"],["/tags/Color/index.html","3d85c47f96bef6fed89b6df98106dbe8"],["/tags/Comment/index.html","c5bcb61640c916ec8aaf49e055b2343f"],["/tags/C语言/index.html","41dae85de723d11e2b888d018a64cce2"],["/tags/DDoS/index.html","b34fce7ea817eaf3c005a7cbe38a5b27"],["/tags/Dinic/index.html","5f936696856b75b61eef7729f009248a"],["/tags/Div2/index.html","efa8cb874df41f4b142b9ba87dd677bb"],["/tags/Div3/index.html","daafda14957f9b78840edabd895511e3"],["/tags/GitHub-Actions/index.html","a3242d35485fdf23f132171f43cc2fb9"],["/tags/GitHub/index.html","aba480aad0f9f3b6b571cd230b52dbcb"],["/tags/Gradle/index.html","e39d7b6f674c662965efce5764c50ea7"],["/tags/JDK/index.html","b9dee2d7eee4b860df5f93cf83bc142c"],["/tags/Java/index.html","01c8724c9fbcd05d84023cfa3d16efab"],["/tags/JavaScript/index.html","909b06647f33442e857004b753a3829c"],["/tags/LICENSE/index.html","7e84e8909ac412db3cdc2e1468314e90"],["/tags/LeetCode/index.html","29a6806bf6740d501993b7e951a6e9ab"],["/tags/Linux/index.html","b97038b44ae93719acbd14317f0ee6d6"],["/tags/Lombok/index.html","e4d953bad7186374db83a7a3831c3c64"],["/tags/MSYS2/index.html","041a804109d85326dfb300367b5ebb32"],["/tags/NoneBot/index.html","82b4921ff22b98a44ccd0d4503157f71"],["/tags/Note/index.html","288d8d5044bc7f3a443a3d7ca49e8593"],["/tags/OSINT/index.html","d5d50cc92af713e40a979d98445d1ece"],["/tags/PrintStream/index.html","f97cba16fea4fe983ac204d6ed015a3c"],["/tags/Python/index.html","a9d56537135af22cbcbf8e0b95c74769"],["/tags/README/index.html","4fda0d53053266e6ff3fbba6063c59b7"],["/tags/RVO/index.html","7d9471c350f09044bb5a594e5f0e51ca"],["/tags/Rocket-Loader/index.html","707de7ec0dd97783ea1d8fe641d329f5"],["/tags/STL/index.html","dca44f4a2255ccbea01b0f7b3de1aa53"],["/tags/Scoop/index.html","0b1931cca84fd312dbda766d761f5996"],["/tags/Swing/index.html","941ae6d0cf599a819626c6bfe2e1f87b"],["/tags/Tomcat/index.html","a15cb1d6626a192afc0a22a0728effca"],["/tags/UTF-8/index.html","a892fb42692a7a837d8b8dd1fa553fbc"],["/tags/VSCode/index.html","191e158c3e2bd9810ffa0b657a344594"],["/tags/blacklist/index.html","1f840d7a622179322480cc068c8fb2dc"],["/tags/blog/index.html","5c7d86409f6bb9b72d1add71425805fd"],["/tags/builtin/index.html","dbbc6515cd6aa86ab4387651d95f3f02"],["/tags/cloudflare/index.html","dc9ec3a8aa431d8617e569ee611d623a"],["/tags/giscus/index.html","9fde8c347107f8ea8a6dd11364b1db56"],["/tags/gitalk/index.html","d19d62950cc1904aae52cf6f6f093f64"],["/tags/index.html","750ae18790fb2304bc3291a4330248d9"],["/tags/tools/index.html","feab85a79ffd8f549ead1667a41cac1e"],["/tags/utteranc/index.html","b89252217c3da11e0f9ae9494d839850"],["/tags/vue/index.html","bf030cb354a28105dd7864392a8d3416"],["/tags/web/index.html","8b971523a32449db68c449faa5da2163"],["/tags/乱码/index.html","53b2a7467f8d849a35c6abf5ec224daf"],["/tags/二分套二分/index.html","4029ab168896dc2df5d8cca7d281f409"],["/tags/云计算/index.html","a19a4557643ea249b23899fc043cf951"],["/tags/仓库管理/index.html","a7b2b6c4f68886bf645c3287f8e87966"],["/tags/信息分析/index.html","53055e1e04f0cf1c270a0cf349a71f49"],["/tags/划水/index.html","8369616106de9773073f81339f7ea8f4"],["/tags/包管理器/index.html","72a9812fd6da589b326bcdef74e988dc"],["/tags/图论/index.html","18bac4f31205392f8f9ef289f7f38706"],["/tags/字符集/index.html","a569a65c535650874234b42d7210dff1"],["/tags/应用/index.html","d6fa0256a3b477d884eead46726e1264"],["/tags/开源/index.html","72937f25731219cf879bdba0df6886be"],["/tags/开源情报/index.html","2fec829a08d2d7f7fe171bdac37d7f7d"],["/tags/悦读/index.html","622b8239379777b4ee2d4cfc64f3a769"],["/tags/技术总结/index.html","32aa75fd592033c78a741d72820ba15b"],["/tags/操作系统/index.html","b9b1d381bf198e99061717d5bc2ee4d5"],["/tags/数据合规/index.html","d346deaace5f4671e09d710733c9c7fa"],["/tags/数据结构/index.html","7de3986be01b7faf510f097357f822a6"],["/tags/数据结构与算法/index.html","383721c0e6b8b40d1f3fde5c0873443a"],["/tags/新年/index.html","a329f8ee80c41a657cd94a19257a5b17"],["/tags/服务器运维/index.html","e40de54ed95e09eb9cd293925c00078d"],["/tags/杂谈/index.html","013a84363e411424c1cce85434d803cc"],["/tags/笔记/index.html","13e7a826c33febea3ef1074dcb172e48"],["/tags/算法/index.html","b2043b47845c4adfdda3508db9664760"],["/tags/线段树/index.html","40faa535b5f7dd7541b6bbeaaff619b6"],["/tags/编码/index.html","7ce7eb154aad8ed86d09a5032dd501c7"],["/tags/编程技巧/index.html","cc4863e4f10decfdfc0487d7a1a94ca7"],["/tags/网络安全/index.html","14b489d176ea9d8b508ee0b13ca02381"],["/tags/网络流/index.html","d2a4e235787731ee0b4613aaeca990eb"],["/tags/职业发展/index.html","26b5f194724d6d1ac04c05231a0edd47"],["/tags/萌新/index.html","b466b75c604e10d74b703b4e8aa61743"],["/tags/计算几何/index.html","571070d731a2e6eb5eb03995d234bfcd"],["/tags/计算机组成原理/index.html","f65be5d8ad7313a2d3017bc12d9e327d"],["/tags/计算机网络/index.html","b2b936adbccac998ffa07ee42e942236"],["/tags/课程/index.html","92c7b04fcae11611b74b7f7d12c0a307"],["/tags/软件/index.html","acb2a3108cfa21b37f1995a13abb0a22"],["/tags/输出流/index.html","b51faff7aafa10471cefe928089fc8fc"],["/tags/镜像源/index.html","4de9a73e3459bc6f58e3db9e81846d33"],["/tags/随机增量法/index.html","02d6d8dabe688b4da68e3274775967fb"],["/tags/隐私伦理/index.html","d18e68e88a21eb9900bdcb5a526870df"],["/tags/题解/index.html","4367e53aa88b84f3686577a6a5f4cd3b"],["/theme-sakura/index.html","e46ec7fab0c4b38911cb0394d45c835c"],["/video/index.html","306ca677b8c55fad16c468a4da3778dc"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-brands-400.woff2","8b0ddedbb27cbc9971c8667caa8a0cc1"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-regular-400.woff2","61f30b79daf5b31f0d254a31fba66158"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-solid-900.woff2","c64278386c2bbb5e293e11b94ca2f6d1"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"],["/webfonts/fa-v4compatibility.woff2","4bc58bc16bb05a05d3a47a4f7e143b75"]];
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
