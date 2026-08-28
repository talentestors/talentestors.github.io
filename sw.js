/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","33a1bc4237a78f92f74feafd12ff5e89"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","97f0ff2180176606b0499042d064f959"],["/2023/02/06/C语言链表/index.html","30a35b3431bdd691d319ecfe73b4f871"],["/2023/02/06/书籍资源/index.html","a43b41ad75c6c057658b1a14d2af4778"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","1ac1e960c8e05e8d8370ec2869ba9dfc"],["/2023/02/07/为水而水（笑/index.html","49f13c3c81952a64da69e55cfeed8382"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","d2e9eb5bf5e325cd22b3aa65c7caa7be"],["/2023/03/09/Web前端笔记-Emmet/index.html","4d6f41a95077ef4bd4da96aa9d0edfa5"],["/2023/03/23/gitalk-评论/index.html","7e925917dee630930b463ef77efc0229"],["/2023/04/10/用C语言实现字符串全排列/index.html","db079a43dbadd8557447a6c121097c7a"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","a8f3644026d6d73cf43a783820464bd3"],["/2023/05/15/C语言基础排序-demo/index.html","9106b3d1148b1e942626a37106784791"],["/2023/06/14/闲着没事干/index.html","f72ed343797900e97b57f9cacfa50d1d"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","02556d21ed6f8a4ecad798ee705200d0"],["/2023/08/01/javase-note/index.html","2275bf918e335e9b33c0b8ef9b2aeb19"],["/2023/09/14/vue-pure-admin/index.html","7f6a6f1a63a5f1afe90eafba166c3dbe"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","7241dd25f73d432dbde8edb93243375b"],["/2023/11/28/C-CPP-the-memset-function/index.html","805696620cec902d065f89890824db50"],["/2023/12/13/javaSwing-DynamicClock/index.html","d6da0eb0acc828118c486f2712fbdd19"],["/2024/01/24/builtin-系列函数/index.html","ea8cbf18bb0bedc74a043486443b8da4"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","832d898a42bc69378437ba095333c036"],["/2024/02/09/新年快乐/index.html","bbe5de33a8924835765087a3e5eebb8a"],["/2024/04/07/转载-线段树专题-xyw813/index.html","25ecc7fd6f64ceba512bb7e972b0012c"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","48e2a129999261046d6344ac348263aa"],["/2024/05/06/cloudflare-display-issue/index.html","a5b81d54671106239d05fd16ac72eac1"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","70b80a35773de2964ca5f640c6d85d65"],["/2024/06/18/POI2011-WYK-Plot-Solved/index.html","2b318f1221e82c9c66af161252283954"],["/2024/06/25/open-source-LinuxMirrors/index.html","7ef20199445356bb14d9890dd2a79c69"],["/2024/09/02/Dinic-算法/index.html","c1e10deb34676998d3466d00109a2876"],["/2024/10/08/黑题记录-2D-Geometry-110-in-1/index.html","de2178c89169ee5a114eb44151954d97"],["/2024/10/11/常用STL算法库/index.html","d0c84612ee8ff7f52c18da75d73c45fa"],["/2024/11/28/在-Java-中设置输出流的字符集/index.html","f55722c82382a4c79b985dc2c0898316"],["/2024/12/05/JDK-18-以上使用标准输出流中文输出乱码问题/index.html","bd144ee668da73df68f89898f507dc89"],["/2024/12/09/Codeforces-Round-992-Div-2-解题报告/index.html","b2a90d161c4d6f29898751abe93c9458"],["/2024/12/17/Where-are-those-algorithms/index.html","7da1447840480176e28b3bd10954540d"],["/2024/12/26/重构评论系统/index.html","c43c5a7d00db8f69ea8dd8cd4d7c95b8"],["/2025/01/01/blacklist/index.html","bbd8777be06a9f99731904aaf5658cb6"],["/2025/03/15/GitHub-Skills/index.html","a537e9333443602894ecee64fe544cdb"],["/2025/03/16/lombok与delombok-在gradle上的配置方法/index.html","ed7ec6699a93b31d9e96238d376b701c"],["/2025/04/09/Codeforces-Round-1016-Div-3-解题报告/index.html","9f7cff780dd170b382f904cd50a48bdd"],["/2025/08/23/github-special-files-guide/index.html","4f52150d693eddcf4fce521f8d1e4493"],["/2025/09/28/408-route/index.html","896d7aa94566a6e6c6d18c0a03a49c6b"],["/2025/10/14/rvo/index.html","2c53b8fb6e1f3ff9419ea7a1ae8f0053"],["/2025/11/13/What-is-OSINT/index.html","d2deb7c753492841f9c158e93e1c5fce"],["/2025/11/20/DDoS-and-CC/index.html","ad66195bd5d88de4995e219f6fa41c73"],["/2026/01/02/2025-summary/index.html","1fa803b1b695eb668faa5065b3e635e8"],["/2026/07/26/reincarnation/index.html","31f9f240e9065110f29e8ce75b59ac27"],["/404.html","edd5f4c87db88fbfd6dfed4ff9b11f64"],["/about/index.html","2a6294e21d6ed2408ebb69620d9858d0"],["/archives/2023/02/index.html","813cb9d8664b8b8cb2945030fbb36f9f"],["/archives/2023/03/index.html","5a3667eb5ecb735a537050a14ab7c705"],["/archives/2023/04/index.html","5a49090995e38e0923d55ca33098e119"],["/archives/2023/05/index.html","979f2b2c072098988ea70fa58cafa87d"],["/archives/2023/06/index.html","e8a50dd2a681429b52ef6fb24b59d3dd"],["/archives/2023/08/index.html","7b79dbc1b48d76b2ef78819b9fc5060f"],["/archives/2023/09/index.html","7b25282b2e561b2a4ee626da40a91953"],["/archives/2023/10/index.html","c71975ed70e77c5bc5502337a7d14886"],["/archives/2023/11/index.html","f22549d5e133f961060f223480bbfc48"],["/archives/2023/12/index.html","3f17e13afba3c7890a7493604cf1e688"],["/archives/2023/index.html","5b1c001b076af23ab262491dbc745749"],["/archives/2023/page/2/index.html","5b1c001b076af23ab262491dbc745749"],["/archives/2024/01/index.html","addad419f40e08d03093a36af52091d2"],["/archives/2024/02/index.html","72322e5ebfb10809d2c207a89fb056d4"],["/archives/2024/04/index.html","4d7195e6c2e035b336ddfd47796f4833"],["/archives/2024/05/index.html","6e343fdcc63603f5f05c329158247496"],["/archives/2024/06/index.html","020462949662f59998606467b5b6f913"],["/archives/2024/09/index.html","26aee0241158f15359e869d68055fc8b"],["/archives/2024/10/index.html","f244865292b587ec8491b0a6c97b6ac6"],["/archives/2024/11/index.html","457e6cdeb58420e0edc11e3cb0c0f266"],["/archives/2024/12/index.html","f3628e52b019a6afa4fd3e56b11bf404"],["/archives/2024/index.html","89d7ae1b7b7055e4d1c436c56d2a02a3"],["/archives/2024/page/2/index.html","89d7ae1b7b7055e4d1c436c56d2a02a3"],["/archives/2025/01/index.html","2a5bfe2feb68da210780385c90b3058f"],["/archives/2025/03/index.html","bb4a968d46c4e1704febd911ac78f7da"],["/archives/2025/04/index.html","dd769515305b2a5f9a9d125737c292a9"],["/archives/2025/08/index.html","7d3627ec15aea3599dccbe05b3f970c7"],["/archives/2025/09/index.html","8b57ce53876273ac7ce15a03c81b1fea"],["/archives/2025/10/index.html","46d95a3aeceaa3a381e12dc6b01f6230"],["/archives/2025/11/index.html","30b5e1d1b98e0f04d433dea27bbd5008"],["/archives/2025/index.html","b43d95122a4ee586f1ff7747f7803e9e"],["/archives/2026/01/index.html","fe383053bdb938d37e881df79a1593d1"],["/archives/2026/07/index.html","0d4318523598701bd9c02265865732c0"],["/archives/2026/index.html","fe72754ed1556ec80c5032f2525a80d0"],["/archives/index.html","336929c928eac4ea31019d9c1fa64de6"],["/archives/page/2/index.html","336929c928eac4ea31019d9c1fa64de6"],["/archives/page/3/index.html","336929c928eac4ea31019d9c1fa64de6"],["/archives/page/4/index.html","336929c928eac4ea31019d9c1fa64de6"],["/archives/page/5/index.html","336929c928eac4ea31019d9c1fa64de6"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-FUXEtNSWPD.html","3e2eec0e5d15b2bea8faa7656ae0facf"],["/bangumi/index.html","b2af3dfdb5df7b2035e355f4d9117cbd"],["/bangumis/index.html","367b8f49a9ab0963bc84e6e6372b8610"],["/categories/技术/index.html","395654718fa2f377d11e6e20d20a823a"],["/categories/技术/page/2/index.html","2c6af5ce94c6b4e5ad56702149a57afe"],["/categories/技术/page/3/index.html","c16162a2aacaba17ac2fcb93aaf26fc6"],["/categories/技术/page/4/index.html","a2187658ae84df25f70eadd8e64c2e7b"],["/categories/资源/index.html","e39204cd4eca4485e66ecc8fcecd15cf"],["/categories/转载/index.html","02349abddd7e405050757ae373af5737"],["/categories/随想/index.html","2cbcdf0843e763fd403a7c45c5a2e9c1"],["/comment/index.html","75cc163db798395afac34315d05c039b"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/giscus.min.css","96c42b2029f44095aaf46f6dc0628ded"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","71cebc0cd666f182f1ab1dbe4a9f15c1"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","73bb864d038d4bb3d83361b8910786bb"],["/css/style.min.css","45b4cf23f077e45f4776fb3f47a7cdd6"],["/css/tags.css","eba03aebbf2f44113682d0ca1e19fcbb"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","62856abb60e83e1e0a9606b0e0151fbc"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","2146b9304c1399f2b97d56a20fc8a362"],["/index.html","3a206fd0a30ede5fc3c5f3d8b75a5605"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","5132d9c9a907e42c82f678b7b58a7552"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/js/lib.js","65f02458a8e38579dac5594f252bd66f"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","202c751aef91535fd84ba360224674d1"],["/js/sakura-app.min.js","b0060bc00f258957442c264d7f0450ae"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","c757e76be80d1da11f5c02c68665312c"],["/js/wrapImage.js","4b4646b7e9ebf8781487aa57053fb59c"],["/js/wrapImage.min.js","f366dcba793c09c735153652842d92e6"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","eb1cd26e4a55853f6fdde208b7b68e6e"],["/links/index.html","e2679caf7e85db64b00d38ec9f3b7b5e"],["/music/index.html","c6d662eff87f8bc58ee2136b0b1fc67d"],["/page/2/index.html","f2ccbcca809b21d17c0384449d507eb5"],["/page/3/index.html","8666235632f077250c43171e79ad9e02"],["/page/4/index.html","36bffacf6604692d2b07d2899799be05"],["/page/5/index.html","92c550c901181cb231e889eb7689d38e"],["/rss/index.html","960188c428338329109b75a57928cdea"],["/sw-register.js","0391fff9cf89966541290d2791c3c22c"],["/tags/408/index.html","46033eae1000568a8401bafad5e530d2"],["/tags/C-C/index.html","60b2a06d767583abfbcfc3d351770ce1"],["/tags/C-CPP/index.html","1f8377ae323e0ddf1c012d117dcad937"],["/tags/C/index.html","b7e1d7124ec8f3a51ec5f8946523666d"],["/tags/CC攻击/index.html","e50aaa801a52672a52b6ae9696bbf118"],["/tags/CONTRIBUTING/index.html","12c001b1917ea6beb9bcdb27af9cb54f"],["/tags/CPP/index.html","8a2fbf7de7aa9c4b1547d9ecebf7dfae"],["/tags/CSS/index.html","2c9e67a8a8ff5bd1d73eba90f0b59ba8"],["/tags/CodeForces/index.html","29b329043b72f18dfec21ac5ac342009"],["/tags/Color/index.html","864f5d56d18689df77e7e16e62a034a4"],["/tags/Comment/index.html","de232b1ace6fc6bec907cfccd8e7aff0"],["/tags/C语言/index.html","2e1b557fb4f7306c9bd93db31dee722d"],["/tags/DDoS/index.html","2a4850de9886230efa82a6725d96bae2"],["/tags/Dinic/index.html","a157df3ebecf45390a391f4d48be7db3"],["/tags/Div2/index.html","c27f0ea51fdd9faa3a5b668d2d6f3c76"],["/tags/Div3/index.html","0b53241979283d027144a49caccac3d2"],["/tags/GitHub-Actions/index.html","01d61aa3e23ca535adb91dc25db831f1"],["/tags/GitHub/index.html","009b2c92d8f1e5e9895d7dd9eec6af06"],["/tags/Gradle/index.html","bb4bca7532c997ba2ddc75c5d4b99f21"],["/tags/JDK/index.html","10f16a59bccd1fa04c3892e0a556bd55"],["/tags/Java/index.html","39e528b903a0488268c21e078764179a"],["/tags/JavaScript/index.html","d51e8b19a95fae91b074ef5d197aa2d1"],["/tags/LICENSE/index.html","98041e9a9e708079d25d26be7f222cb4"],["/tags/LeetCode/index.html","b0bcb48a05e1acb300d4b86fdaf53b01"],["/tags/Linux/index.html","aad3a480501df00b89c511d244d99b0b"],["/tags/Lombok/index.html","14d089ff343a107f597bbe5c8a99b461"],["/tags/MSYS2/index.html","708b0ea64e505ee23c9e6f411bf3e78e"],["/tags/NoneBot/index.html","48fb4789adad872b4e36a61dd889b4c0"],["/tags/Note/index.html","e25556922ff044d54ccea2aae08bd6a4"],["/tags/OSINT/index.html","353b1b853c3225f8be2c7e17482d759e"],["/tags/PrintStream/index.html","3b2e32519151f7e1b1ad92231248cbfb"],["/tags/Python/index.html","bf0baff7ac5450cdf0681877c0c32f6b"],["/tags/README/index.html","00bf810d50d1136c9ff1637f8179b6be"],["/tags/RVO/index.html","b5124c898e43bf6f866538acf47fe4c3"],["/tags/Rocket-Loader/index.html","cdb9099f2699e88c89b1a1780eb8f402"],["/tags/STL/index.html","194448ee65a494a64c1a704ed558a9d7"],["/tags/Scoop/index.html","4a54b1b3518c7af395683353219c5b8d"],["/tags/Swing/index.html","b4b405af6e5dc160bd635a3f845c83fc"],["/tags/Tomcat/index.html","bbb27e9ea8449b7b208a79deefe3385f"],["/tags/UTF-8/index.html","9d14bc306869708f4061e0b4e264fcbf"],["/tags/VSCode/index.html","160df0a7774dbaa4c7d6713d33615243"],["/tags/blacklist/index.html","3adc7337665a180406c9d5c4b9765d96"],["/tags/blog/index.html","8db8b67d3800c0f50584aa276f666b9c"],["/tags/builtin/index.html","7d54a6004e3061f03241d1c53155df68"],["/tags/cloudflare/index.html","ee99337f97450198a8b52ce45391e5dc"],["/tags/giscus/index.html","b33d7201523698c86d242739fefc4a61"],["/tags/gitalk/index.html","1760a7730318583c6e3c52fbd3588180"],["/tags/index.html","cc21de2401b8e8a801ab1f4e5c4a9d08"],["/tags/tools/index.html","b4cf87f5c9b7aec4adcb2928dd640c56"],["/tags/utteranc/index.html","eb9d20646a0856c80ef5683876fd0304"],["/tags/vue/index.html","4dd03b33957e9cdbd8dfc4330ac207fa"],["/tags/web/index.html","28b6db1a9ac1068e0f532762fdff0e4c"],["/tags/乱码/index.html","c76710b46d44298b7ce0f70d386989fd"],["/tags/二分套二分/index.html","53ac51ff53a4de982b552fd14e42ee89"],["/tags/云计算/index.html","94e164ffb5c3cb322c8a2c216849a7cd"],["/tags/仓库管理/index.html","4059a762c635004de91a8cba5aa47c82"],["/tags/信息分析/index.html","aa99e7110899707a5c1d394789b79c0c"],["/tags/划水/index.html","1cfc13900808a9d1aa8ee07f58e3de9d"],["/tags/包管理器/index.html","a73a0af43693a1560540595a7a215895"],["/tags/图论/index.html","3e105004bc3418ac948644b5dc6b3eab"],["/tags/字符集/index.html","a1a98a264b9474089cbbb0ea8167ab41"],["/tags/应用/index.html","277ef74ff5fbd3ea08ed8a3743678e48"],["/tags/开源/index.html","b0b945df5d01a2a3b6a2df09b14e965f"],["/tags/开源情报/index.html","7fa9bc25d974a353e7398ffa4bbfcdba"],["/tags/悦读/index.html","62d9eac6c9b078c2f3b57dc59e1cd072"],["/tags/技术总结/index.html","2ce5b11c91a54cfa9906c5cae1ed24a9"],["/tags/操作系统/index.html","17aa4575b632240f5181dc48d8dd4675"],["/tags/数据合规/index.html","1cb04ac12bbbcd5c00d42aa08a02f311"],["/tags/数据结构/index.html","f46392c88b89e6ec1bdab988e608322b"],["/tags/数据结构与算法/index.html","be3b031587eb975206149d6115a53f7d"],["/tags/新年/index.html","73e41d1fc96a073866556648e42025d6"],["/tags/服务器运维/index.html","817259538a6bdd25374f4fb385b8c071"],["/tags/杂谈/index.html","848d3cf5ad0947059d1822bfe12b01c8"],["/tags/笔记/index.html","d487f920fcb9946d8322633ed546b472"],["/tags/算法/index.html","c71b6925763c01cc949f98f906028c3d"],["/tags/线段树/index.html","86fc88a2b2a363117e7896adda9788fb"],["/tags/编码/index.html","c1fc4e394c19f446084f28fbdab4fc32"],["/tags/编程技巧/index.html","c1e86ed5be5a69a0c3a49c8078f4f781"],["/tags/网络安全/index.html","64442379cf7d6060441c4c9e6c25a877"],["/tags/网络流/index.html","d1633250f93af2a628f066dfcd66740c"],["/tags/职业发展/index.html","0ddfbc2614cdc7ccbdddf9e1b717aff3"],["/tags/萌新/index.html","de94f50d38e38d9bed4e030e9675c1b8"],["/tags/计算几何/index.html","7a0a6e7509b3d410d504ffa0050c6ebc"],["/tags/计算机组成原理/index.html","b37694f12d49f86958904b2321b3ceae"],["/tags/计算机网络/index.html","dcfc48dac278cdaf228f9d7f4172220a"],["/tags/课程/index.html","5850cf1d035b0fd8f2cc3c0f2dca2fd6"],["/tags/软件/index.html","eded2096a2503d497822512de565fa11"],["/tags/输出流/index.html","61f3e2db6a755216aaeeb8f34777c938"],["/tags/镜像源/index.html","886e8d38e8d094b0a99ac5071c5633ff"],["/tags/随机增量法/index.html","d2eaeeeea533022474f56ca4a6b243cc"],["/tags/隐私伦理/index.html","6da3beddd23866a6874b1fdb4ca238cc"],["/tags/题解/index.html","8f661ecf493efb4e9e60475779c377f5"],["/theme-sakura/index.html","cce68ae0714db0742f57c66233e7ea00"],["/video/index.html","ea65ec600f89efa3e39accadf5fdc84e"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-brands-400.woff2","8b0ddedbb27cbc9971c8667caa8a0cc1"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-regular-400.woff2","61f30b79daf5b31f0d254a31fba66158"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-solid-900.woff2","c64278386c2bbb5e293e11b94ca2f6d1"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"],["/webfonts/fa-v4compatibility.woff2","4bc58bc16bb05a05d3a47a4f7e143b75"]];
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
