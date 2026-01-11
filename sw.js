/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","904d945efdc12979560b0eef5544b2b5"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","04af00d7d8378fda84c4067351210193"],["/2023/02/06/C语言链表/index.html","9200046387f1713102dd2acab279cb42"],["/2023/02/06/书籍资源/index.html","b06ea9eb738e7ccc22a084df8c5efe14"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","b506cf9e23ba0a5f5897a628bab030da"],["/2023/02/07/为水而水（笑/index.html","15d03042cee95c7e3272a225a6f2682a"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","bda60dd72022fb7ac9b7cf623025aadc"],["/2023/03/09/Web前端笔记-Emmet/index.html","323dee84c45bb612c3e119bf4b9e7883"],["/2023/03/23/gitalk-评论/index.html","70bd4e11adcb29b552aa37d70f60a8c8"],["/2023/04/10/用C语言实现字符串全排列/index.html","c723b5a1a6e0581b5b2a2edb1c137051"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","ec54c08bb52933bdfacb0b93c7bfc201"],["/2023/05/15/C语言基础排序-demo/index.html","43e2400e7ea64c99b903b5d8b2af6acb"],["/2023/06/14/闲着没事干/index.html","8583c4f97bc7a334a1d372470e8633f5"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","a926ab45d01e9c8e050d4be3b0cc1622"],["/2023/08/01/javase-note/index.html","433f174ccd8e519ae2af1c0d2d94f6c6"],["/2023/09/14/vue-pure-admin/index.html","e761d625d81cd05488dcf195e652d77e"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","80f50c498a0eefc669aff4109dea1471"],["/2023/11/28/C-CPP-the-memset-function/index.html","1fff44880da027c1e1df7ef0af25ed5f"],["/2023/12/13/javaSwing-DynamicClock/index.html","d0dc8566f25e4702979ac86a48041c4a"],["/2024/01/24/builtin-系列函数/index.html","e92de698b5288ea85777d1cfccced2c0"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","c5345791f4bb776064a8bd0b57e0cfad"],["/2024/02/09/新年快乐/index.html","3b2216b206ebe56cc6456b43f3310836"],["/2024/04/07/转载-线段树专题-xyw813/index.html","dae2bad933b613618869b448732f4240"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","12bde49dbdc25981de54c5d6657fd2b4"],["/2024/05/06/cloudflare-display-issue/index.html","686783a8bdf885270f7489bbae00d440"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","2859249c1c9d0e9b5d637f1e1eee4f36"],["/2024/06/18/POI2011-WYK-Plot-Solved/index.html","34582e8db5da9e47902c93d18d20aef2"],["/2024/06/25/open-source-LinuxMirrors/index.html","a7e0172448c3b8d15b54ee9631c23b7e"],["/2024/09/02/Dinic-算法/index.html","fe490dafbff94ffb40b1a89c5e38cf00"],["/2024/10/08/黑题记录-2D-Geometry-110-in-1/index.html","c342ffaa9f44de1eaa956123b51ddf74"],["/2024/10/11/常用STL算法库/index.html","a07a3141734698e1e7c06705a97b5a65"],["/2024/11/28/在-Java-中设置输出流的字符集/index.html","325322e226a70cc9b7dedb57aba60600"],["/2024/12/05/JDK-18-以上使用标准输出流中文输出乱码问题/index.html","9986f805833e7e8a0c184910b629c957"],["/2024/12/09/Codeforces-Round-992-Div-2-解题报告/index.html","7fa7c0913cf96a18fdf5f077b5032205"],["/2024/12/17/Where-are-those-algorithms/index.html","e8f849190e7901508fa711c2445765ad"],["/2024/12/26/重构评论系统/index.html","2635e843e6a9b44040f8dbe2e24d7555"],["/2025/01/01/blacklist/index.html","238478ddff78273680d7c97246a3d1db"],["/2025/03/15/GitHub-Skills/index.html","992503ce6fcc7a1dd0b03c315ea91d20"],["/2025/03/16/lombok与delombok-在gradle上的配置方法/index.html","61e7f05b199ff280f3c977af1b9af6a9"],["/2025/04/09/Codeforces-Round-1016-Div-3-解题报告/index.html","63ba6f6b3d8ea5e84195da5c076b86a1"],["/2025/08/23/github-special-files-guide/index.html","01c505fb701a3d67d0762f3307a13bb9"],["/2025/09/28/408-route/index.html","33cf9401157f09db3087e080bc500b58"],["/2025/10/14/rvo/index.html","62bc6582fb55af687ecb0990a0feb228"],["/2025/11/13/What-is-OSINT/index.html","f0107463e859d92d704002875277023b"],["/2025/11/20/DDoS-and-CC/index.html","8e3850fbd8b86fd6171cf44c1bc98e3e"],["/2026/01/02/2025-summary/index.html","b7118b63ff9796598a19a09cdcdb2819"],["/404.html","edd5f4c87db88fbfd6dfed4ff9b11f64"],["/about/index.html","20aa423fea5681a5711d65edc2591070"],["/archives/2023/02/index.html","592d862f7dfb69b9ca3fa558799cb460"],["/archives/2023/03/index.html","6f543c27221c2fe499f6734cbce79cad"],["/archives/2023/04/index.html","7ca78ae091444ff04977b9b72416927a"],["/archives/2023/05/index.html","aadc6b8d3c8639060161fd0ac77802ee"],["/archives/2023/06/index.html","7dff5fbca0842a9dbb965ae313e5685a"],["/archives/2023/08/index.html","9370c132fb62b666fe857b0ca7a860e9"],["/archives/2023/09/index.html","42884d88302b4b990e37a1114733fa0e"],["/archives/2023/10/index.html","e642e46394f27bdef3522be84bf01ecf"],["/archives/2023/11/index.html","d1c73dc39c9b585b857e2c1f622d4138"],["/archives/2023/12/index.html","1973861587a2800e0d8b10f032023bda"],["/archives/2023/index.html","f9db096bd7a0c0e84e58ec43d2c55382"],["/archives/2023/page/2/index.html","f9db096bd7a0c0e84e58ec43d2c55382"],["/archives/2024/01/index.html","2f703f0d1afc56d4f9867747913e6586"],["/archives/2024/02/index.html","4af3ab1ac2870ef74168ee86feeeaa70"],["/archives/2024/04/index.html","9b0c794c5c0df5f36aad75ff75f1f986"],["/archives/2024/05/index.html","bae2fa95f25cf6e51d6942e9516cec68"],["/archives/2024/06/index.html","29394bf2d68a85785fc75f6c0b9b5b88"],["/archives/2024/09/index.html","11595a3ef8b7735f8883bcb8b41cebbc"],["/archives/2024/10/index.html","32c21d2881cfc333a9b88b319da1de3a"],["/archives/2024/11/index.html","bed90dab66be8ed96a78332546a04339"],["/archives/2024/12/index.html","101bba0c6088ab532cf61be2a23f2c5c"],["/archives/2024/index.html","d19e1b3e16bfd67b95558be1978f48bc"],["/archives/2024/page/2/index.html","d19e1b3e16bfd67b95558be1978f48bc"],["/archives/2025/01/index.html","1d53b20b3e4f4f790ea9ebff63244d0d"],["/archives/2025/03/index.html","004d669b6695252302d2da268213f056"],["/archives/2025/04/index.html","0f68d8fe94811e66fc2880801fe906ee"],["/archives/2025/08/index.html","098ddb9a9bc0796bae1280aaf1061b67"],["/archives/2025/09/index.html","3124e16c41552b8ff02d3087947cb00a"],["/archives/2025/10/index.html","e7595bfa387034f5fc54a85b4fe177aa"],["/archives/2025/11/index.html","593eb79d1ca361c53f13e4f20b2e7024"],["/archives/2025/index.html","f6a182db83fff93c048a1c5a6b86b6c2"],["/archives/2026/01/index.html","56fd921d74c9a5edde53ff9ede2c68ea"],["/archives/2026/index.html","a0556abbc6db52423a537ad194eda2bd"],["/archives/index.html","d22edeef8936e2bab77094d8b7a8ee53"],["/archives/page/2/index.html","d22edeef8936e2bab77094d8b7a8ee53"],["/archives/page/3/index.html","d22edeef8936e2bab77094d8b7a8ee53"],["/archives/page/4/index.html","d22edeef8936e2bab77094d8b7a8ee53"],["/archives/page/5/index.html","d22edeef8936e2bab77094d8b7a8ee53"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-FUXEtNSWPD.html","3e2eec0e5d15b2bea8faa7656ae0facf"],["/bangumi/index.html","6d05ac2f9f165896ceff9b89db896ca0"],["/bangumis/index.html","57384133f24f1e7f53d589d1fd9150de"],["/categories/技术/index.html","2c439db6b18761546a0827ce0c82d824"],["/categories/技术/page/2/index.html","152813f1454cee546aa280c9c40de42b"],["/categories/技术/page/3/index.html","a8f4a0d1c4c8961210bc2ffdbfcbf051"],["/categories/技术/page/4/index.html","ecf93b4b20f7e14c3d2cfd1b17dac97d"],["/categories/资源/index.html","69fe71d70a40a0e27e2d2989e05be4ce"],["/categories/转载/index.html","9a58f96a9747d3dd722709c0dcf0c326"],["/categories/随想/index.html","e9215e75bab92f536b90bbf848be552f"],["/comment/index.html","db67ba44356c573ab1a51a43d4797ebf"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/giscus.min.css","96c42b2029f44095aaf46f6dc0628ded"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","71cebc0cd666f182f1ab1dbe4a9f15c1"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","73bb864d038d4bb3d83361b8910786bb"],["/css/style.min.css","45b4cf23f077e45f4776fb3f47a7cdd6"],["/css/tags.css","eba03aebbf2f44113682d0ca1e19fcbb"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","28347794999a9cf2fa6ffcd33b3e95a2"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","6a1ba34391034354539f03e1dc604014"],["/index.html","38b30ab99139d714a3e1daf82e7e3d53"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","5132d9c9a907e42c82f678b7b58a7552"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/js/lib.js","65f02458a8e38579dac5594f252bd66f"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","202c751aef91535fd84ba360224674d1"],["/js/sakura-app.min.js","b0060bc00f258957442c264d7f0450ae"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","c757e76be80d1da11f5c02c68665312c"],["/js/wrapImage.js","4b4646b7e9ebf8781487aa57053fb59c"],["/js/wrapImage.min.js","f366dcba793c09c735153652842d92e6"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","462701db8334c18d1aef3e0bd8d616bf"],["/links/index.html","94c504c52ff52a839f98f1cf7a06cbd3"],["/music/index.html","449081075a82bd3dcf0772c6eda10633"],["/page/2/index.html","58371643105d0cbf6aa0a08e61412d1d"],["/page/3/index.html","e40299ece9067deb9acbaaf9a9f0e71d"],["/page/4/index.html","904be53e4bd4a4ec882179f742e8a6db"],["/page/5/index.html","dab0487baa4083f8fbe41c6dc9e76914"],["/rss/index.html","e779d8a1370d2928c1cbcd728bb6166d"],["/sw-register.js","cacf38c7a863ce891efd3d8583f86f24"],["/tags/408/index.html","1aa883e0fce704f39c1dae39471d1f38"],["/tags/C-C/index.html","5aafab14e9acd82d6a46f793f0eb511f"],["/tags/C-CPP/index.html","f80fb749d018543580f60d68271484ae"],["/tags/C/index.html","9ff3d0dc5d8a2cad9d0b30f83f1116c7"],["/tags/CC攻击/index.html","38e268326c782c66b28353fc52e882c8"],["/tags/CONTRIBUTING/index.html","d586c67e82813ae3f46663a10306271e"],["/tags/CPP/index.html","f5a9bd4d781187d1025d16968a7be446"],["/tags/CSS/index.html","36e420787690ffd26708144e325eaa78"],["/tags/CodeForces/index.html","78589d935d5afc173b7e645ded640e23"],["/tags/Color/index.html","2880d27fbe7584329e3c2db3a14e39c9"],["/tags/Comment/index.html","e163336fe51c4ceb7a1bf25dd0107d23"],["/tags/C语言/index.html","243fb7e2f450eb948472c08bce44c650"],["/tags/DDoS/index.html","8f5b2769af987bc779132ce4b439f851"],["/tags/Dinic/index.html","91a134abc63fe92dd770d4a2e41baae2"],["/tags/Div2/index.html","73a86118a0d2ea6687637b0bcf27c059"],["/tags/Div3/index.html","a75d79ffc6323a79b8978132e7b27d6c"],["/tags/GitHub-Actions/index.html","93a7bfa397fb7f172330e7deb209ede1"],["/tags/GitHub/index.html","e4afea9638726c19105d313cba4f22b7"],["/tags/Gradle/index.html","7d6776fae05016f890a7a07a11578d84"],["/tags/JDK/index.html","7a1ad4212a685b68dcf61590ec56ef0c"],["/tags/Java/index.html","7149a175645bd04460236c39a826b003"],["/tags/JavaScript/index.html","1ff818191196198cb74c147df435fcbd"],["/tags/LICENSE/index.html","a2e08fe96b7f50cf20d55f899abde132"],["/tags/LeetCode/index.html","f2fcb85a0caa33b8cea21f4ef8329e42"],["/tags/Linux/index.html","b3e95760515f4514b77ae09c85f1ae72"],["/tags/Lombok/index.html","3d7aeff7c78b1d9b6340765b7af2b08f"],["/tags/MSYS2/index.html","703c517c40ebfb3746008fa442076c1d"],["/tags/NoneBot/index.html","2b90276132fa691550c850f38c9cb38b"],["/tags/Note/index.html","fa1746f4e43b88ef228f7f634e5519dd"],["/tags/OSINT/index.html","dde02c50fcf1de7053cdb5b235aadb0a"],["/tags/PrintStream/index.html","6fef104e65cdc6f50f66f4a3149bf81b"],["/tags/Python/index.html","c11202393b9f88b79a814d23d4d19883"],["/tags/README/index.html","197a12c33724ab2c302b8d018803c9e1"],["/tags/RVO/index.html","73bde6f7c6bd175cb39b341c865a6214"],["/tags/Rocket-Loader/index.html","9111446267fbfbcc7a989b42c325db4a"],["/tags/STL/index.html","09bf88386118d5748d496e59c08f3da4"],["/tags/Scoop/index.html","c426d131ce30c688f8a5b129c3afa83b"],["/tags/Swing/index.html","f5de5fb8624b719e7257e7c570dfb7d3"],["/tags/Tomcat/index.html","228e0f2fca205cd840f9d30e8e6f283f"],["/tags/UTF-8/index.html","d5722c9de2fc08634fc90c4a50fe66ff"],["/tags/VSCode/index.html","70d425bb1fb1b6120fe33a57a1bfef94"],["/tags/blacklist/index.html","5ac566ae2c111ab30c00caabac2a348b"],["/tags/blog/index.html","fe58f7a8d160120d230709ce7f3914ec"],["/tags/builtin/index.html","29c877a7adedf49d190a6c72ba3b7413"],["/tags/cloudflare/index.html","56ef186a843539c5a5cfcfa8a73c056e"],["/tags/giscus/index.html","93979e9de756b35effa08b9aaceb9283"],["/tags/gitalk/index.html","56771859482c22b3977c830f16d831c1"],["/tags/index.html","c73bab9b2306c989943250af33ffb225"],["/tags/tools/index.html","f0d4d12b8bc3989cdf2a0adcbda0cc53"],["/tags/utteranc/index.html","0a68306dd6fb80cf7959ff099794b47e"],["/tags/vue/index.html","de7c5a5b7b315e54e2b7d7731b9507f5"],["/tags/web/index.html","939fec43643bcaf4fc7ac61014ee205c"],["/tags/乱码/index.html","6119d8ee642488f0b7d82e0913782d8d"],["/tags/二分套二分/index.html","b724b72b3a3e38688e620fcdc7dc338a"],["/tags/云计算/index.html","121e04ae1824a6b028cf5fb4884f6c60"],["/tags/仓库管理/index.html","dc278d8bc1db099efd72e71d7df7ed25"],["/tags/信息分析/index.html","44cd90b8da1c982688ea56607adecb11"],["/tags/划水/index.html","e5a7c65e2aeebb1d4865e9d61f4c4c23"],["/tags/包管理器/index.html","c48c886415421523af94ff30e587b0f2"],["/tags/图论/index.html","45e8b70b782f30db260b8f3a9cb67afb"],["/tags/字符集/index.html","4980f938ddc697cbfc52d9f67f393464"],["/tags/应用/index.html","651b8c5cd2d8ddc6e8b6b63b8a8b7954"],["/tags/开源/index.html","460c1f6a159ae762b131fe0249c10e9d"],["/tags/开源情报/index.html","b2da9cf868ca6154de214b5e73d10c0a"],["/tags/悦读/index.html","f9df44e0e22697809dd432a734051676"],["/tags/技术总结/index.html","a243ee80b2812ccf864f73d74b79c28c"],["/tags/操作系统/index.html","88823d1747c04a3396462b21f7c3f757"],["/tags/数据合规/index.html","d6f64d334717c82946cf8ae343e74676"],["/tags/数据结构/index.html","2e040f9d7dec9277326a22c8c4fe58b2"],["/tags/数据结构与算法/index.html","3ed64dac31f411589e12b247b268555d"],["/tags/新年/index.html","43a0be9485cfb9be99dfaa30f8f19ad9"],["/tags/服务器运维/index.html","2420976f39c5eee86249710a31578d51"],["/tags/杂谈/index.html","db92c08e6be609242aa2204b4101d390"],["/tags/笔记/index.html","aed62269c00125d35fdccc630edb6f1e"],["/tags/算法/index.html","f0ede842cf88ffb27b91c53c002fbc83"],["/tags/线段树/index.html","8dfc6bf5867af76beaee0307645c6fed"],["/tags/编码/index.html","ab2a6acd664d7f6a8540409820ed6824"],["/tags/编程技巧/index.html","d0ec530a5e61f8b86dd2f637a5b6a25e"],["/tags/网络安全/index.html","9afe0b0bb0c16cde796fd2052249acb6"],["/tags/网络流/index.html","9e303da4fc22826a3e8fb3309e9fc2cf"],["/tags/职业发展/index.html","63ff9a68b0eb43ef47b6fe60ca3cb04e"],["/tags/萌新/index.html","de2a6f8da5b4b9e61790acaac3ec1f7b"],["/tags/计算几何/index.html","58f60c65bc7c9f970049d3c8bf865d4e"],["/tags/计算机组成原理/index.html","b0f9bc248e69a2827a60219a5b443255"],["/tags/计算机网络/index.html","18245c44a9f13852d7a69bfddea4211a"],["/tags/课程/index.html","21047b9ed79202a93fe61cbd986d028a"],["/tags/软件/index.html","82d22bf2905f24e680ed76dde6378d84"],["/tags/输出流/index.html","22331ebc89b0cf2fea0f9d397b89192f"],["/tags/镜像源/index.html","77030a1502e7f3359ff0afe6b04ebeaf"],["/tags/随机增量法/index.html","30c36de4283dd30b15230065baf66991"],["/tags/隐私伦理/index.html","0ec6dc8883acdeb443feba4045433a00"],["/tags/题解/index.html","6f025533a52b9e846cfee8160c95b8da"],["/theme-sakura/index.html","d8c9156aaea1c9ca8b9b6f92a42231f4"],["/video/index.html","482ce80698bfd0333787784fc10b8097"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-brands-400.woff2","8b0ddedbb27cbc9971c8667caa8a0cc1"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-regular-400.woff2","61f30b79daf5b31f0d254a31fba66158"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-solid-900.woff2","c64278386c2bbb5e293e11b94ca2f6d1"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"],["/webfonts/fa-v4compatibility.woff2","4bc58bc16bb05a05d3a47a4f7e143b75"]];
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
