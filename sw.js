/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","63f4213fae555d0732ad1d84221b01d4"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","32f4511ef8dd932a5a0d376e03e40a43"],["/2023/02/06/C语言链表/index.html","e12d64b2223f2e64bf5901aa2771eb30"],["/2023/02/06/书籍资源/index.html","514e9ba031ec592ec5d022a6e809b947"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","14ec82ab4acb5aef5debadea481374e4"],["/2023/02/07/为水而水（笑/index.html","9e75b26778a517df60e92d27543a48cf"],["/2023/02/08/洛谷主页源码/index.html","22a0bdf866ec8f762163f0fa5406992d"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","dbe8803b96fee941d466d8f90739846a"],["/2023/03/09/Web前端笔记-Emmet/index.html","ae81c66232c6b2ef2b38103ab96146c4"],["/2023/03/23/gitalk-评论/index.html","82f63c68b4a66c44d326811fbc78368e"],["/2023/04/10/用C语言实现字符串全排列/index.html","e9e33582b08ba24e4410b31e077680dc"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","2eda69e661f894a4ebd682b221ef4e41"],["/2023/05/15/C语言基础排序-demo/index.html","008d8a26e653a9cae1de99d93765ec52"],["/2023/06/14/闲着没事干/index.html","56db54e7b3bc0b2db170674a366ed424"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","0a509c75ccb422e81c30b6ed96bf66a0"],["/2023/08/01/javase-note/index.html","e5f7fe428436f9ecfec1713918b3b148"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","17fabe0555dffa357bbf47bf52a688de"],["/2023/09/14/vue-pure-admin/index.html","0ad0f51096296586e027a1b1c901b009"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","77909785815c0bed83825858f8b6875b"],["/2023/11/28/C-CPP-the-memset-function/index.html","ac21d053eaff22f373eb25610e5633ab"],["/2023/12/13/javaSwing-DynamicClock/index.html","19bde5737a03a397e68863cb4ca97102"],["/2024/01/24/builtin-系列函数/index.html","8e6a916a9b1a4429b64944e2753cb401"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","6b13d11b3eaeff5ce2897258b54a291c"],["/2024/02/09/新年快乐/index.html","e9e8e7cbbca675f072159a0a0195e3dd"],["/2024/03/26/408-route/index.html","a2055f2f797037f72861f00f727546fb"],["/2024/04/07/转载-线段树专题-xyw813/index.html","002d55a30f7743f4c52072c10a4a234e"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","9b35b7da1d5d6932a2bb4988154152eb"],["/2024/05/03/Adobe-PS-2024-软件分享-torrent/index.html","bc1a1e0ba357a05b76c7d22d1bf97b57"],["/2024/05/06/cloudflare-display-issue/index.html","c771754e341ec04a952df8e4c471ce7d"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","77a466463026dc5ca777cb2fd8e83203"],["/2024/06/18/P3517-POI2011-WYK-Plot/index.html","dc2f6656ebb930b04ba2c7ad1a2d3ef5"],["/2024/06/25/open-source-LinuxMirrors/index.html","9c4ee15e9dee9445b9bd05da1694dcad"],["/2024/09/02/Dinic-and-LuoGu-P1343/index.html","8366a8db908a25618dd328810c7b66c5"],["/2024/10/08/黑题记录-2D-Geometry-110-in-1/index.html","cf808e88fcdc09a55b52fdaf9bff63bd"],["/2024/10/11/常用STL算法库/index.html","8159ff25d949bee273cf6e9b15c43630"],["/2024/11/28/在-Java-中设置输出流的字符集/index.html","c986c7f0702806b3ef1151ef8ad474df"],["/2024/12/05/JDK-18-以上使用标准输出流中文输出乱码问题/index.html","1b535a6bfe88eb4caea31c8be36f7944"],["/2024/12/09/Codeforces-Round-992-Div-2-解题报告/index.html","332b44754a92300f881afda2e5a01a10"],["/2024/12/17/Where-are-those-algorithms/index.html","2ef7a13aa041a7f9662f601b5e9d2f70"],["/2024/12/26/重构评论系统/index.html","1ea2bf49783c7a8cb1255862ea563bd4"],["/2025/03/15/GitHub-Skills/index.html","e7cdbbe9ca9f36b2f44e5bc22bdd70a8"],["/2025/03/16/lombok与delombok-在gradle上的配置方法/index.html","2fc77ee3b60b59b17337f0d48352a3a2"],["/404.html","7b7c2b12ef5e2b95eda92262d85e6cd6"],["/about/index.html","d89ed27eb0befe0fe311283962081edc"],["/archives/2023/02/index.html","cedcc0193f56829d4ef4baf03e8b405b"],["/archives/2023/03/index.html","5efabb45706a36c7db6b6ba6ce5a2cd0"],["/archives/2023/04/index.html","2c193c5a9648da2572f9b38e0439dd15"],["/archives/2023/05/index.html","065b4288aa50dcf6c41257aa26bfbb23"],["/archives/2023/06/index.html","9f60fc9a343aeecb1daa33f273972fbe"],["/archives/2023/08/index.html","e7385b4049c511665c704a57391651c6"],["/archives/2023/09/index.html","77867e1ae2e1ad2a158098fb1b1207cb"],["/archives/2023/10/index.html","49d2172eb41e6ce7267376f195a9c04e"],["/archives/2023/11/index.html","a1464dc946d3896e028ea108fadf9dda"],["/archives/2023/12/index.html","3cb51cd9ae2116d375cbf9b3ab2a6acc"],["/archives/2023/index.html","4d186039f3fa88716015dc25d0bbcddc"],["/archives/2023/page/2/index.html","4d186039f3fa88716015dc25d0bbcddc"],["/archives/2023/page/3/index.html","4d186039f3fa88716015dc25d0bbcddc"],["/archives/2024/01/index.html","79d0d6e2650b2a8d4ccd1ba4af31c3bb"],["/archives/2024/02/index.html","9915365d9b126d2eeefebfb88aa1a836"],["/archives/2024/03/index.html","bf52963306166eca4660ae7b22b12ad7"],["/archives/2024/04/index.html","e977b096a8c08a7dd50997faeded23fc"],["/archives/2024/05/index.html","4f268cb2ecbae2a447c48c2570659610"],["/archives/2024/06/index.html","c85360e05c7ec3e26d37ff1869b8a1e7"],["/archives/2024/09/index.html","99dad65f9519c2178afca4257a63979e"],["/archives/2024/10/index.html","26bd556981c626b02f86d8fca91259ab"],["/archives/2024/11/index.html","2fba37b88138e9bed6833580f69ebdbc"],["/archives/2024/12/index.html","acd4d09cf1702a18558380463b5ad027"],["/archives/2024/index.html","6125de3c685c0af6d906df47d2b16c84"],["/archives/2024/page/2/index.html","6125de3c685c0af6d906df47d2b16c84"],["/archives/2025/03/index.html","53ecdacb395d8f7625e930a04f0f1245"],["/archives/2025/index.html","dbd7375d68b9e3dd78b729464596e498"],["/archives/index.html","bd2d12a6db6f56a47147244a6f3747d2"],["/archives/page/2/index.html","bd2d12a6db6f56a47147244a6f3747d2"],["/archives/page/3/index.html","bd2d12a6db6f56a47147244a6f3747d2"],["/archives/page/4/index.html","bd2d12a6db6f56a47147244a6f3747d2"],["/archives/page/5/index.html","bd2d12a6db6f56a47147244a6f3747d2"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","7be4f34c00418c499f77c10b0559a893"],["/categories/技术/index.html","e2189776d1e9845ad316f7fb7cd56a2f"],["/categories/技术/page/2/index.html","ade47855353ac5a6233aeca9600e40a0"],["/categories/技术/page/3/index.html","5b15ad427b1cf0a931a3d05d9a81be41"],["/categories/资源/index.html","90721da1c4125a61224fc5a3e520c5b0"],["/categories/转载/index.html","b3ddb5387b632f0236dda60da1c94560"],["/categories/随想/index.html","04c356aae95f1207ee2b92de9b6e4f57"],["/comment/index.html","0c1a713f92cac31af8ecc5241d510b6a"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","71cebc0cd666f182f1ab1dbe4a9f15c1"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","2fee6f3b0b16c3663f93f8e9c193d256"],["/css/style.min.css","5c69036f827bff149d075d5f26850d2b"],["/css/tags.css","eba03aebbf2f44113682d0ca1e19fcbb"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","d6a85cc8c391f645983aa188244ec751"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","4a28cf2c3beb83d2530ab89d4365cb03"],["/index.html","cfff2f2b5d9ae097796b41661d622bfb"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/js/lib.js","65f02458a8e38579dac5594f252bd66f"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","f1afa64bc2698ed86b55ab396a0c7ac3"],["/js/sakura-app.min.js","115ca9549a404cd11acd81cd31abe374"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","c757e76be80d1da11f5c02c68665312c"],["/js/wrapImage.js","29007a235330279921b40783f3752c1c"],["/js/wrapImage.min.js","fa46e73ad4d52096338f455d716a71a2"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","a5ba67e153593494638bdd23177242c1"],["/links/index.html","a289fe7e1a7355f71df5c2ae8801c2da"],["/music/index.html","3ee6354a8ddb10a1754d141b39c07286"],["/page/2/index.html","4533dfa7b456ec380896315d33b30ca8"],["/page/3/index.html","650ecde20cf106458162c1b83040e3cc"],["/page/4/index.html","752e956d99016b5be9966f5af1d21bdf"],["/page/5/index.html","401c999829368fbc4fb6a58e6fa857e1"],["/rss/index.html","cbf5112e149c62afdadb62bd320ac3b8"],["/sw-register.js","a4c59c61be8c22248d8b551ca1091510"],["/tags/408/index.html","e20bbb79e669f81fb23de9390297253a"],["/tags/Adobe/index.html","7ada7604d4f15670a74fef9003dfd217"],["/tags/C-C/index.html","c12b82d18cf6e8d5c2be7f0489948e04"],["/tags/C-CPP/index.html","32facc9f584132227452985c0dbbb431"],["/tags/C/index.html","fbe4adf57bead947d811dfa2845bd0cf"],["/tags/CPP/index.html","b7483737017f4b81280175c8fa638d56"],["/tags/CSS/index.html","0ea2117b292429e29ed8bed2ff1d573f"],["/tags/CodeForces/index.html","4143a5d6220fa56543ff4fad56330741"],["/tags/Color/index.html","c75ecac7c4065e8e2989d13b4ab5d4bc"],["/tags/Comment/index.html","b7eed09af5a96aa065b57170ef4dd6cc"],["/tags/C语言/index.html","d4c3d713af1282820ef25a69c9dd40d0"],["/tags/Dinic/index.html","b43774b58687c3fce3fb996fe3754f24"],["/tags/Div-2/index.html","0787fed0aa12226be6c3771a3a678785"],["/tags/GitHub-Actions/index.html","2f9e176155dfef4202e9d096a0e81ebb"],["/tags/GitHub/index.html","0d6b01190c9854795db42c4500aa515d"],["/tags/Gradle/index.html","11c883f533cd7f1eb6cf35971bef64f1"],["/tags/JDK/index.html","e3d958c1b066fbd1c4ed17432913447f"],["/tags/Java/index.html","6e4281305e449c7968925300e3322bf1"],["/tags/JavaScript/index.html","a55d58b6c5934256748be65cd9b53d09"],["/tags/LeetCode/index.html","22733426e7cd4d1f58a5220aed61ba27"],["/tags/Linux/index.html","1c60eac17617f964a65d6b530c59bcd5"],["/tags/Lombok/index.html","703014a3635e68548384a9a8f0b68f34"],["/tags/MSYS2/index.html","59474daaf05f0151ad16c3be2fdf45ee"],["/tags/Note/index.html","b71104b853dde1d1b78d093a097d7475"],["/tags/PS/index.html","f97415dea61c15368b568ae9d91ba686"],["/tags/PrintStream/index.html","49be3d21bb10c1455001cd53db09ca16"],["/tags/Rocket-Loader/index.html","ba2682e8751df95c98fc31a1f675e357"],["/tags/STL/index.html","1143f4b51558634ca83e77502aa354ac"],["/tags/Scoop/index.html","f85896c9767e2411d4a808405c7196b3"],["/tags/Software/index.html","c54f4c8a90bbcc317a804e8ebeff0ea0"],["/tags/Swing/index.html","a6abc57854ca6aa05e57e354122fec19"],["/tags/Tomcat/index.html","802bb11b88099458ba09c8531471935d"],["/tags/UTF-8/index.html","c7bd3d0bc9ba73c4806a5f44a547ad5b"],["/tags/VSCode/index.html","019a629ae73c3177558ddff5b6231ab8"],["/tags/blog/index.html","aa10840f17eb1f7ca13bedcc2761bea5"],["/tags/builtin/index.html","e1307d025ced666b5a532496db330927"],["/tags/cloudflare/index.html","14898f60c12a1ba49634c6368f4ab7b8"],["/tags/giscus/index.html","6cb49d7ac6e369b07caa16bfc1163ec0"],["/tags/gitalk/index.html","7d24bf5ce2c329404190e7b45b0c1bae"],["/tags/index.html","0a237d1918f04bb1edccd52a3d559b48"],["/tags/tools/index.html","2598d268fb961fee70eeb7640a415030"],["/tags/utteranc/index.html","7aca11f670cc508360c59bc742c60850"],["/tags/vue/index.html","fb57d65777cee896451946c63779dc56"],["/tags/web/index.html","27cf012a059ad80944e7fd3c584da6de"],["/tags/乱码/index.html","794495a3c3d2afe05df11728aa5532e3"],["/tags/二分套二分/index.html","0aa25ce9cc250fc1fdecbcb7f0421389"],["/tags/划水/index.html","42980768de700345171ae4052b68b39d"],["/tags/包管理器/index.html","803638292dcd46eb59297aee9a60ea23"],["/tags/图论/index.html","43c1b34e22afd0298ac08473d5323e78"],["/tags/字符集/index.html","806bbcc19917add2e9687a6d05d193e7"],["/tags/应用/index.html","29ce57cf34efe9069d0604b03fba08dc"],["/tags/悦读/index.html","71dec1947dc48f18d614bfea52d4dda9"],["/tags/操作系统/index.html","b9e27d1e64178460c0c28719a0f2dfa8"],["/tags/数据结构/index.html","a440f6058df8e1979e4a24d85e809f22"],["/tags/数据结构与算法/index.html","9d5b6734ce3719df3036a0743f03a1c2"],["/tags/新年/index.html","0983fa43fe8b174e8c1446e813f763ed"],["/tags/杂谈/index.html","d4674760cafa9d36837b5b8ef843a7de"],["/tags/深搜/index.html","7ab2feb760599ca8c3b2e5501c55b24c"],["/tags/笔记/index.html","4dcacb3c5c6477c432a6f44857b853f1"],["/tags/算法/index.html","493f823b0066db89394ef0c9a43311eb"],["/tags/线段树/index.html","bb16c9322799576887bea7a36b13c330"],["/tags/编码/index.html","0deb163638059c73eb4c6e69533194a6"],["/tags/编程技巧/index.html","22ee8060bd9c9aba0427d8d91f840508"],["/tags/网络流/index.html","521a822ae82f6cf9728e2d96048a8e4f"],["/tags/萌新/index.html","c0a1504da56256bdc5dd05924b6f5e91"],["/tags/计算几何/index.html","74542c892f3af87635373c54cc3ea3dd"],["/tags/计算机组成原理/index.html","9409b166f774e789679b3c6846650eca"],["/tags/计算机网络/index.html","85aba24c95767b224a765c74e8e7fc2e"],["/tags/课程/index.html","a16effd3b1ff514d0071555639f94051"],["/tags/质数筛/index.html","42a9816a5e85e938ebb445a010f13d0a"],["/tags/软件/index.html","33c6a538e2320ca97f6776563bbbc1c5"],["/tags/输出流/index.html","497415df0948614246c4bc45682335ef"],["/tags/镜像源/index.html","d5612d893fb6b064d56b59575433185a"],["/tags/随机增量法/index.html","0ede4dd7534e080c4c7243c3f9caa4cc"],["/tags/题解/index.html","ce04aa8a1900500d2f1c554b437362d2"],["/theme-sakura/index.html","6e2dc41cd563ff1244a710c55bca5d51"],["/video/index.html","b4a1dd8dd65817ccc278baa4e7b4a083"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-brands-400.woff2","8b0ddedbb27cbc9971c8667caa8a0cc1"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-regular-400.woff2","61f30b79daf5b31f0d254a31fba66158"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-solid-900.woff2","c64278386c2bbb5e293e11b94ca2f6d1"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"],["/webfonts/fa-v4compatibility.woff2","4bc58bc16bb05a05d3a47a4f7e143b75"]];
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
