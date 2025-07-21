<script setup lang="ts">
import { PLUGIN_NAME, SITE_BASE_URL } from "~/composable/constants";
import type { PolygonDataCollection } from "~/types/moduleTypes";

const config = useRuntimeConfig();

const baseUrl = config.app.siteUrl || SITE_BASE_URL;

const data: PolygonDataCollection[] = [
  {
    id: "82",
    key: "uitNFW19djYNaUJ7",
    type: "floor",
  },
  {
    id: "86",
    key: "ui7bo0I1J3RCRr8Y",
    type: "floor",
  },
  {
    id: "87",
    key: "uilIRGChJAJHCVXT",
    type: "floor",
  },
  {
    id: "88",
    key: "uiyCWSEOIc08b0PU",
    type: "floor",
  },
  {
    id: "89",
    key: "uiZ5M4ptuHjKKXAh",
    type: "floor",
  },
  {
    id: "90",
    key: "uiTgqOyZfQIEQxso",
    type: "floor",
  },
  {
    id: "91",
    key: "uiU27xJdKVZT1wKm",
    type: "floor",
  },
  {
    id: "92",
    key: "uisuJFn6T3mbWvZX",
    type: "floor",
  },
  {
    id: "104",
    key: "uiDMfF69oCDSukA6",
    type: "floor",
  },
  {
    id: "93",
    key: "uidjC9i3OBKFHHj4",
    type: "floor",
  },
  {
    id: "94",
    key: "ui1eLzWvQms0xO2w",
    type: "floor",
  },
  {
    id: "95",
    key: "uiEgBBlDxG81Hqx0",
    type: "floor",
  },
  {
    id: "96",
    key: "uiQvVcun3v9Z6JQ5",
    type: "floor",
  },
  {
    id: "97",
    key: "uinnUXjr07OzHMv6",
    type: "floor",
  },
  {
    id: "98",
    key: "uiNDQ7sDjREBQKpt",
    type: "floor",
  },
  {
    id: "99",
    key: "ui21gOk6w4rPiQq0",
    type: "floor",
  },
  {
    id: "100",
    key: "uiK2NN9Iupz6IadW",
    type: "floor",
  },
  {
    id: "101",
    key: "ui7mxiUnhfwVAlNg",
    type: "floor",
  },
  {
    id: "102",
    key: "uilWKGv33cBKHkkL",
    type: "floor",
  },
  {
    id: "103",
    key: "uiYA4PGoicbcUA1m",
    type: "floor",
  },
];
const polygonData = ref<PolygonDataCollection[]>(data);

const svgRef = ref();
const activeGroup = ref();

const svg = `

<svg viewBox="0 0 1720 860" style="transform: scale(1); transform-origin: center center;"><g id="uiyCWSEOIc08b0PU"><path fill="#cb443579" stroke="black" stroke-width="1" d="M 424.941162109375 698.3543090820312 L 423.3846130371094 723.2399291992188 L 1140.9592536639939 678.2274779786065 L 1240.5792078744676 703.1166510014639 L 1239.022691496706 665.7829473524421 L 1137.846220908471 631.5604881304898 Z"></path><circle cx="424.941162109375" cy="698.3543090820312" r="4" class="first-circle" fill="#00000000" style="cursor: default;"></circle><circle cx="423.3846130371094" cy="723.2399291992188" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1140.9592536639939" cy="678.2274779786065" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1240.5792078744676" cy="703.1166510014639" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1239.022691496706" cy="665.7829473524421" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1137.846220908471" cy="631.5604881304898" r="4" fill="#00000000" style="cursor: default;"></circle></g><g id="uidjC9i3OBKFHHj4"><path fill="#cb443579" stroke="black" stroke-width="1" d="M 431.1674470227415 545.9441053962202 L 431.1674470227415 572.3858828283469 L 1133.1764443799734 410.62462516090653 L 1234.3530460095178 497.72683326791423 L 1232.7964062987594 460.3973576281889 L 1130.063427041075 368.6289323058882 Z"></path><circle cx="431.1674470227415" cy="545.9441053962202" r="4" class="first-circle" fill="#00000000" style="cursor: default;"></circle><circle cx="431.1674470227415" cy="572.3858828283469" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1133.1764443799734" cy="410.62462516090653" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1234.3530460095178" cy="497.72683326791423" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1232.7964062987594" cy="460.3973576281889" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1130.063427041075" cy="368.6289323058882" r="4" fill="#00000000" style="cursor: default;"></circle></g><g id="uinnUXjr07OzHMv6"><path fill="#cb443579" stroke="black" stroke-width="1" d="M 432.7239685058594 458.8419189453125 L 432.7239990234375 469.7575988769531 L 1128.5067138671875 244.19723510742188 L 1231.2398681640625 337.52099609375 L 1231.2398976293105 300.1915111592341 L 1130.063427041075 202.2015229438095 L 432.7239685058594 446.39874267578125 Z"></path><circle cx="432.7239685058594" cy="458.8419189453125" r="4" class="first-circle" fill="#00000000" style="cursor: default;"></circle><circle cx="432.7239990234375" cy="469.7575988769531" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1128.5067138671875" cy="244.19723510742188" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1231.2398681640625" cy="337.52099609375" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1231.2398976293105" cy="300.1915111592341" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1130.063427041075" cy="202.2015229438095" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="432.7239685058594" cy="446.39874267578125" r="4" fill="#00000000" style="cursor: default;"></circle></g><g id="uiK2NN9Iupz6IadW"><path fill="#cb443579" stroke="black" stroke-width="1" d="M 437.39365689707114 368.6439244287023 L 435.8371276855469 393.53131103515625 L 1137.8461042783545 113.54856237050893 L 1228.126708984375 236.41392517089844 L 1226.570069656207 205.32065827382635 L 1136.289592760181 76.21752420560877 Z"></path><circle cx="437.39365689707114" cy="368.6439244287023" r="4" class="first-circle" fill="#00000000" style="cursor: default;"></circle><circle cx="435.8371276855469" cy="393.53131103515625" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1137.8461042783545" cy="113.54856237050893" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1228.126708984375" cy="236.41392517089844" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1226.570069656207" cy="205.32065827382635" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1136.289592760181" cy="76.21752420560877" r="4" fill="#00000000" style="cursor: default;"></circle></g><g id="ui7mxiUnhfwVAlNg"><path fill="#cb443579" stroke="black" stroke-width="1" d="M 438.9502258300781 343.756591796875 L 437.3936767578125 368.6439208984375 L 1136.289592760181 76.21752420560877 L 1226.570069656207 203.7652103980179 L 1226.570069656207 172.65601536947608 L 1136.2896728515625 35.77557373046875 Z"></path><circle cx="438.9502258300781" cy="343.756591796875" r="4" class="first-circle" fill="#00000000" style="cursor: default;"></circle><circle cx="437.3936767578125" cy="368.6439208984375" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1136.289592760181" cy="76.21752420560877" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1226.570069656207" cy="203.7652103980179" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1226.570069656207" cy="172.65601536947608" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1136.2896728515625" cy="35.77557373046875" r="4" fill="#00000000" style="cursor: default;"></circle></g><g id="uilWKGv33cBKHkkL"><path fill="#cb443579" stroke="black" stroke-width="1" d="M 438.7755126953125 321.6224365234375 L 438.1173400878906 343.56121826171875 L 1136.289592760181 35.77557221749812 L 1226.570069656207 171.10054684041782 L 1225.0135581380337 129.10314439484247 L 1136.289592760181 0 Z"></path><circle cx="438.7755126953125" cy="321.6224365234375" r="4" class="first-circle" fill="#00000000" style="cursor: default;"></circle><circle cx="438.1173400878906" cy="343.56121826171875" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1136.289592760181" cy="35.77557221749812" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1226.570069656207" cy="171.10054684041782" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1225.0135581380337" cy="129.10314439484247" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1136.289592760181" cy="0" r="4" fill="#00000000" style="cursor: default;"></circle></g><g id="uiNDQ7sDjREBQKpt"><path fill="#cb443579" stroke="black" stroke-width="1" d="M 434.2805480957031 418.4015808105469 L 432.723988452518 446.3987715029646 L 1130.063427041075 202.2015229438095 L 1231.2398976293105 298.63609996074854 L 1229.683257918552 269.08356565230537 L 1130.063427041075 158.6504516506329 Z"></path><circle cx="434.2805480957031" cy="418.4015808105469" r="4" class="first-circle" fill="#00000000" style="cursor: default;"></circle><circle cx="432.723988452518" cy="446.3987715029646" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1130.063427041075" cy="202.2015229438095" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1231.2398976293105" cy="298.63609996074854" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1229.683257918552" cy="269.08356565230537" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1130.063427041075" cy="158.6504516506329" r="4" fill="#00000000" style="cursor: default;"></circle></g><g id="uilIRGChJAJHCVXT"><path fill="#cb443579" stroke="black" stroke-width="1" d="M 423.3846130371094 723.2399291992188 L 421.82806396484375 749.67578125 L 1139.4026825900164 720.1054550234066 L 1240.5791531782518 735.65857374302 L 1240.5791531782518 702.9971659285645 L 1140.959227504934 678.1122568324588 Z"></path><circle cx="423.3846130371094" cy="723.2399291992188" r="4" class="first-circle" fill="#00000000" style="cursor: default;"></circle><circle cx="421.82806396484375" cy="749.67578125" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1139.4026825900164" cy="720.1054550234066" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1240.5791531782518" cy="735.65857374302" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1240.5791531782518" cy="702.9971659285645" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1140.959227504934" cy="678.1122568324588" r="4" fill="#00000000" style="cursor: default;"></circle></g><g id="uiDMfF69oCDSukA6"><path fill="#cb443579" stroke="black" stroke-width="1" d="M 431.1674208144796 572.3705622272948 L 429.6108703613281 598.7577514648438 L 1133.1764705882354 455.71897977941177 L 1234.3530497535553 525.7099672501212 L 1234.35302734375 499.2822570800781 L 1133.1763916015625 410.6246032714844 Z"></path><circle cx="431.1674208144796" cy="572.3705622272948" r="4" class="first-circle" fill="#00000000" style="cursor: default;"></circle><circle cx="429.6108703613281" cy="598.7577514648438" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1133.1764705882354" cy="455.71897977941177" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1234.3530497535553" cy="525.7099672501212" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1234.35302734375" cy="499.2822570800781" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1133.1763916015625" cy="410.6246032714844" r="4" fill="#00000000" style="cursor: default;"></circle></g><g id="uiTgqOyZfQIEQxso"><path fill="#cb443579" stroke="black" stroke-width="1" d="M 428.0542907714844 651.693603515625 L 426.4977722167969 675.0419921875 L 1137.846220908471 584.8934423971087 L 1237.4660633484164 628.4493554739486 L 1235.9095469706547 592.6712740384615 L 1137.8460693359375 544.370361328125 Z"></path><circle cx="428.0542907714844" cy="651.693603515625" r="4" class="first-circle" fill="#00000000" style="cursor: default;"></circle><circle cx="426.4977722167969" cy="675.0419921875" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1137.846220908471" cy="584.8934423971087" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1237.4660633484164" cy="628.4493554739486" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1235.9095469706547" cy="592.6712740384615" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1137.8460693359375" cy="544.370361328125" r="4" fill="#00000000" style="cursor: default;"></circle></g><g id="uiEgBBlDxG81Hqx0"><path fill="#cb443579" stroke="black" stroke-width="1" d="M 431.9403991699219 496.9944152832031 L 430.663818359375 522.0151977539062 L 1131.6199357105243 328.18863426919177 L 1232.7964062987594 418.401599252516 L 1231.2398976293105 376.40593915782495 L 1131.6199357105243 284.6375302156879 Z"></path><circle cx="431.9403991699219" cy="496.9944152832031" r="4" class="first-circle" fill="#00000000" style="cursor: default;"></circle><circle cx="430.663818359375" cy="522.0151977539062" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1131.6199357105243" cy="328.18863426919177" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1232.7964062987594" cy="418.401599252516" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1231.2398976293105" cy="376.40593915782495" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1131.6199357105243" cy="284.6375302156879" r="4" fill="#00000000" style="cursor: default;"></circle></g><g id="uisuJFn6T3mbWvZX"><path fill="#cb443579" stroke="black" stroke-width="1" d="M 429.6108597285068 598.811633908371 L 429.6108703613281 625.2694091796875 L 1133.1763916015625 500.837646484375 L 1234.35302734375 558.3872680664062 L 1234.35302734375 525.7239990234375 L 1133.1763916015625 455.7311706542969 Z"></path><circle cx="429.6108597285068" cy="598.811633908371" r="4" class="first-circle" fill="#00000000" style="cursor: default;"></circle><circle cx="429.6108703613281" cy="625.2694091796875" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1133.1763916015625" cy="500.837646484375" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1234.35302734375" cy="558.3872680664062" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1234.35302734375" cy="525.7239990234375" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1133.1763916015625" cy="455.7311706542969" r="4" fill="#00000000" style="cursor: default;"></circle></g><g id="ui21gOk6w4rPiQq0"><path fill="#cb443579" stroke="black" stroke-width="1" d="M 435.8371040723982 393.51531491969297 L 434.2805480957031 418.36456298828125 L 1130.063427041075 158.6504516506329 L 1229.683257918552 269.08356565230537 L 1228.126708984375 237.96926879882812 L 1137.8462324709392 113.54394458872532 Z"></path><circle cx="435.8371040723982" cy="393.51531491969297" r="4" class="first-circle" fill="#00000000" style="cursor: default;"></circle><circle cx="434.2805480957031" cy="418.36456298828125" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1130.063427041075" cy="158.6504516506329" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1229.683257918552" cy="269.08356565230537" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1228.126708984375" cy="237.96926879882812" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1137.8462324709392" cy="113.54394458872532" r="4" fill="#00000000" style="cursor: default;"></circle></g><g id="uiQvVcun3v9Z6JQ5"><path fill="#cb443579" stroke="black" stroke-width="1" d="M 432.7239990234375 469.7575988769531 L 431.9403991699219 496.22845458984375 L 1131.6199357105243 284.6375302156879 L 1231.2398976293105 374.850544339503 L 1229.683257918552 337.5210031791231 L 1128.5067873303167 244.1972485591551 Z"></path><circle cx="432.7239990234375" cy="469.7575988769531" r="4" class="first-circle" fill="#00000000" style="cursor: default;"></circle><circle cx="431.9403991699219" cy="496.22845458984375" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1131.6199357105243" cy="284.6375302156879" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1231.2398976293105" cy="374.850544339503" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1229.683257918552" cy="337.5210031791231" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1128.5067873303167" cy="244.1972485591551" r="4" fill="#00000000" style="cursor: default;"></circle></g><g id="ui1eLzWvQms0xO2w"><path fill="#cb443579" stroke="black" stroke-width="1" d="M 430.91912841796875 522.7811279296875 L 431.1674470227415 545.9441053962202 L 1130.063427041075 368.6289323058882 L 1232.7964062987594 460.3973576281889 L 1232.7964062987594 418.401599252516 L 1130.063427041075 328.18863426919177 Z"></path><circle cx="430.91912841796875" cy="522.7811279296875" r="4" class="first-circle" fill="#00000000" style="cursor: default;"></circle><circle cx="431.1674470227415" cy="545.9441053962202" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1130.063427041075" cy="368.6289323058882" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1232.7964062987594" cy="460.3973576281889" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1232.7964062987594" cy="418.401599252516" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1130.063427041075" cy="328.18863426919177" r="4" fill="#00000000" style="cursor: default;"></circle></g><g id="uiU27xJdKVZT1wKm"><path fill="#cb443579" stroke="black" stroke-width="1" d="M 429.6108703613281 625.2694091796875 L 428.0542907714844 651.693603515625 L 1137.846220908471 544.4487178620741 L 1235.909522804054 592.5860263544087 L 1232.7964417153296 558.3684789940535 L 1133.1765116714564 500.8206946694998 Z"></path><circle cx="429.6108703613281" cy="625.2694091796875" r="4" class="first-circle" fill="#00000000" style="cursor: default;"></circle><circle cx="428.0542907714844" cy="651.693603515625" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1137.846220908471" cy="544.4487178620741" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1235.909522804054" cy="592.5860263544087" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1232.7964417153296" cy="558.3684789940535" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1133.1765116714564" cy="500.8206946694998" r="4" fill="#00000000" style="cursor: default;"></circle></g><g id="uiZ5M4ptuHjKKXAh"><path fill="#cb443579" stroke="black" stroke-width="1" d="M 426.4977722167969 675.0419921875 L 424.941162109375 698.3543090820312 L 1137.846220908471 631.5604881304898 L 1239.022705078125 667.2650756835938 L 1237.4660633484164 628.4493554739486 L 1137.388427734375 584.8934326171875 Z"></path><circle cx="426.4977722167969" cy="675.0419921875" r="4" class="first-circle" fill="#00000000" style="cursor: default;"></circle><circle cx="424.941162109375" cy="698.3543090820312" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1137.846220908471" cy="631.5604881304898" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1239.022705078125" cy="667.2650756835938" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1237.4660633484164" cy="628.4493554739486" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1137.388427734375" cy="584.8934326171875" r="4" fill="#00000000" style="cursor: default;"></circle></g><g id="ui7bo0I1J3RCRr8Y"><path fill="#cb443579" stroke="black" stroke-width="1" d="M 418.7149353027344 777.6550903320312 L 1145.6290283203125 760.8525390625 L 1242.1357421875 765.2740478515625 L 1242.1357421875 737.3184204101562 L 1140.9592760180994 720.253388509851 L 421.82805429864254 749.8102198812218 Z"></path><circle cx="418.7149353027344" cy="777.6550903320312" r="4" class="first-circle" fill="#00000000" style="cursor: default;"></circle><circle cx="1145.6290283203125" cy="760.8525390625" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1242.1357421875" cy="765.2740478515625" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1242.1357421875" cy="737.3184204101562" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1140.9592760180994" cy="720.253388509851" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="421.82805429864254" cy="749.8102198812218" r="4" fill="#00000000" style="cursor: default;"></circle></g><g id="uitNFW19djYNaUJ7"><path fill="#cb443579" stroke="black" stroke-width="1" d="M 415.601806640625 804.3451538085938 L 418.5971374511719 778.549072265625 L 1142.5158716513267 760.7830496709173 L 1242.1357421875 765.2740478515625 L 1242.1357421875 805.7153930664062 L 1142.5158716513267 810.5684067770464 L 915.257901278409 807.4568219579135 L 698.8959621490642 804.3451939547126 Z"></path><circle cx="415.601806640625" cy="804.3451538085938" r="4" class="first-circle" fill="#00000000" style="cursor: default;"></circle><circle cx="418.5971374511719" cy="778.549072265625" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1142.5158716513267" cy="760.7830496709173" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1242.1357421875" cy="765.2740478515625" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1242.1357421875" cy="805.7153930664062" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1142.5158716513267" cy="810.5684067770464" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="915.257901278409" cy="807.4568219579135" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="698.8959621490642" cy="804.3451939547126" r="4" fill="#00000000" style="cursor: default;"></circle></g><g id="uiYA4PGoicbcUA1m"><path fill="#cb443579" stroke="black" stroke-width="1" d="M 437.3936767578125 292.3996887207031 L 438.33673095703125 320.96429443359375 L 1136.289592760181 0 L 1225.0135498046875 127.53601837158203 L 1226.5701357466064 94.9502262443439 L 1167.420814479638 0 L 1041.33935546875 0 Z"></path><circle cx="437.3936767578125" cy="292.3996887207031" r="4" class="first-circle" fill="#00000000" style="cursor: default;"></circle><circle cx="438.33673095703125" cy="320.96429443359375" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1136.289592760181" cy="0" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1225.0135498046875" cy="127.53601837158203" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1226.5701357466064" cy="94.9502262443439" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1167.420814479638" cy="0" r="4" fill="#00000000" style="cursor: default;"></circle><circle cx="1041.33935546875" cy="0" r="4" fill="#00000000" style="cursor: default;"></circle></g></svg>
`;

const deleteG = (key: string) => {
  activeGroup.value = null;
  polygonData.value = polygonData.value.filter((item) => item.key !== key);
  svgRef.value?.querySelector(`#${key}`)?.remove();
};

useSeoMeta({
  title: "Module" + " | " + PLUGIN_NAME,
  description:
    "Create interactive building images with our powerful module. Try demo now.",
  ogImage: `${baseUrl}/assets/module.webp`,
  ogImageAlt: "Interactive modile demo",
  twitterDescription:
    "Create interactive building images with our powerful module. Try demo now.",
  twitterImage: `${baseUrl}/assets/module.webp`,
  twitterImageAlt: "Interactive modile demo",
});
</script>

<template>
  <div>
    <ClientOnly>
      <Canvas
        projectImage="/assets/demo/hotel_2.webp"
        :polygon_data="polygonData"
        :svgRef="svgRef"
        :svg="svg"
        :activeGroup="activeGroup"
        :isFloorsCanvas="false"
        :isImageContain="false"
        @set-svg-ref="(svgContainer) => (svgRef = svgContainer)"
        @set-active-g="(gTag) => (activeGroup = gTag)"
        @add-polygon-data="
          (key: string) =>
            (polygonData = [...polygonData, { id: '', key, type: '' }])
        "
        @delete-g="(key) => deleteG(key)"
      />
    </ClientOnly>
  </div>
</template>
