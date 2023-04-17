export interface IPeople {
  id: number;
  vid: string;
  image: string;
  name: string;
  title: string;
  quote: string;
}

const people: IPeople[] = [
  {
    id: 1,
    vid: "https://youtu.be/PKm1IbLqoSA",
    image:
      "https://cdn.forbes.ru/files/story_images/gettyimages-672688262.jpg__1510063932__96765.jpg",
    name: "Бернар Арно",
    title: "Состояние: $211,8 млрд",
    quote:
      "Французский магнат предметов роскоши впервые возглавил список миллиардеров мира после знаменательного года в LVMH, которому принадлежат, среди прочего, Louis Vuitton, Christian Dior и Tiffany & Co.",
  },
  {
    id: 2,
    vid: "https://youtu.be/PKm1IbLqoSA",
    image:
      "https://iv.kommersant.ru/Issues.photo/NEWS/2023/02/04/KMO_162543_39812_1_t222_075024.jpg",
    name: "Илон Маск ",
    title: "Состояние: $180 млрд",
    quote:
      "Маск — крупнейший акционер Tesla. Ему принадлежит около 23% Tesla, но более половины акций находятся в залоге по кредитам. Ему также принадлежит доля в SpaceX, основанной в 2002 году.",
  },
  {
    id: 3,
    vid: "https://youtu.be/PKm1IbLqoSA",
    image:
      "https://businessxxl.ru/wp-content/uploads/c/a/e/cae3be0c59827bc225832a4033b0ef20.jpeg",
    name: "Джефф Безос",
    title: "Состояние: $114 млрд",
    quote:
      "Джефф Безос — основатель интернет-магазина Amazon. Он открыл его в 1994 году в своем гараже в Сиэтле. Сегодня это один из крупнейших онлайн-ретейлеров мира.",
  },
  {
    id: 4,
    vid: "https://youtu.be/PKm1IbLqoSA",
    image:
      "https://www.osp.ru/FileStorage/NEWS/Computerworld_Online/2013-09/0923_13/13149922/Computerworld_Online_Larri_(1070).jpg",
    name: "Ларри Эллисон",
    title: "Состояние: $107 млрд",
    quote:
      "Ларри Эллисон основал производителя программного обеспечения Oracle, первым клиентом которого стало ЦРУ, в 1977 году, чтобы закрыть растущую потребность в базах данных.",
  },
  {
    id: 5,
    vid: "https://youtu.be/PKm1IbLqoSA",
    image:
      "https://ftinvest.ru/wp-content/uploads/2015/07/0913_warren-buffett_650x455.jpg",
    name: "Уоррен Баффет",
    title: "Состояние: $106 млрд",
    quote:
      "Уоррен Баффет управляет инвестиционным домом Berkshire Hathaway, которому принадлежат доли более чем в 60 компаниях, включая страховщика Geico, производителя батареек Duracell и сеть ресторанов Dairy Queen.",
  },
  {
    id: 6,
    vid: "https://youtu.be/PKm1IbLqoSA",
    image:
      "https://gdb.voanews.com/6c16cf03-7ba5-4c70-87db-05a241b44031_w408_r1_s.jpg",
    name: "Билл Гейтс",
    title: "Состояние: $104 млрд",
    quote:
      "Вместе с женой Мелиндой Билл Гейтс возглавляет крупнейший в мире частный благотворительный фонд, на сегодняшний день Гейтс пожертвовал своему фонду более $59 млрд.",
  },
  {
    id: 7,
    vid: "https://youtu.be/PKm1IbLqoSA",
    image: "https://cdn-st1.rtr-vesti.ru/vh/pictures/xw/208/656/4.jpg",
    name: "Майкл Блумберг",
    title: "Состояние: $94,5 млрд",
    quote:
      "В 1981 году он основал компанию Innovative Market Systems, которая позже была переименована в Bloomberg LP, и остается ее основным владельцем. Сегодня бизнес приносит ежегодно до $10 млрд.",
  },
  {
    id: 8,
    vid: "https://youtu.be/PKm1IbLqoSA",
    image: "https://www.peoples.ru/undertake/media/carlos_slim/slim_445.jpg",
    name: "Карлос Слим Элу",
    title: "Состояние: $93 млрд",
    quote:
      "Миллиардеру принадлежит и 17% в американской газете The New York Times, Карлос Слим Элу — самый богатый человек Мексики, он контролирует America Movil, а также сферы розничной торговли.",
  },
  {
    id: 9,
    vid: "https://youtu.be/PKm1IbLqoSA",
    image: "https://s0.rbk.ru/v6_top_pics/media/img/1/43/755315193829431.jpg",
    name: "Мукеш Амбани",
    title: "Состояние: $83,4 млрд",
    quote:
      "В прошлом году нефтяной гигант Reliance Industries Амбани стал первой индийской компанией, выручка которой превысила $100 млрд.",
  },
  {
    id: 10,
    vid: "https://youtu.be/PKm1IbLqoSA",
    image: "https://s0.rbk.ru/v6_top_pics/media/img/2/29/754598875240292.jpeg",
    name: "Стив Балмер",
    title: "Состояние: $80,7 млрд",
    quote:
      "Стив Балмер — бывший гендиректор Microsoft. Он пришел в компанию в 1980 году по приглашению Билла Гейтса, с которым познакомился во время учебы в Гарварде.",
  },
];

export default people;
