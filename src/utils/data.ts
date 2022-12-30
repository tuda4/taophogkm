export type food = {
  name: string;
  price?: number;
  isBestSaler: boolean;
  isSoldOut?: boolean 
};


type category = {
  name: string;
  price?: number;
  index?: number
};

export const taophoCategory: category[] = [
  {
    name: "Món truyền thống",
    price: 12.000,
  },
  {
    name: "Món biến tấu",
    price: 15.000,
  },
  {
    name: "Món biến tấu",
    price: 18.000,
  },
  {
    name: "Món biến tấu",
    price: 20.000,
  },
  {
    name: "Món biến tấu",
    price: 25.000,
  },
];

export const Category: category[] = [
    {name: "Món bán chạy", index: 0},
    {name: "Tào phớ", index: 1},
    {name: "Chè", index: 2},
    {name: "Sữa chua", index: 3},
    {name: "Korean fast food", index: 4},
    {name: "Đồ ăn", index: 5},
    {name: "Hotdog", index: 6},
    {name: "Món ăn vặt", index: 7},
    {name: "Đồ uống", index: 8},
]

export const tpTruyenThong: food[] = [
  { name: "Tào phớ nước đường trân châu thạch",price: 12.000, isBestSaler: true },
  { name: "Tào phớ nước đậu nành",price: 12.000, isBestSaler: false },
  { name: "Thạch găng trân châu thạch",price: 12.000, isBestSaler: true },
];

export const tpBienTau15k: food[] = [
  { name: "Tào phớ đậu nành", price: 15.000, isBestSaler: false },
  { name: "Tào phớ đậu đỏ", price: 15.000, isBestSaler: false },
  { name: "Tào phớ long nhãn", price: 15.000, isBestSaler: false },
  { name: "Tào phớ hạt sen", price: 15.000, isBestSaler: false },
  { name: "Tào phớ nha đam", price: 15.000, isBestSaler: true },
  { name: "Tào phớ thạch găng", price: 15.000, isBestSaler: false },
  { name: "Thạch găng nha đam", price: 15.000, isBestSaler: false },
];

export const tpBienTau18k: food[] = [
  { name: "Tào phớ hạt sen long nhãn",price: 18.000, isBestSaler: false },
  { name: "Tào phớ hạt sen đậu đỏ", price: 18.000,isBestSaler: false },
  { name: "Tào phớ long nhãn đậu đỏ",price: 18.000, isBestSaler: false },
];

export const tpBienTau20k: food[] = [
  { name: "Tào phớ hạt sen đậu đỏ long nhãn",price: 20.000, isBestSaler: true },
  { name: "Tào phớ thạch găng nha đam đậu đỏ",price: 20.000, isBestSaler: false },
  { name: "Tào phớ caramen",price: 20.000, isBestSaler: true },
  { name: "Tào phớ cafe",price: 20.000, isBestSaler: false },
  { name: "Tào phớ trà thái",price: 20.000, isBestSaler: false },
  { name: "Tào phớ sữa ngô",price: 20.000, isBestSaler: false },
  { name: "Tào phớ sầu riêng",price: 20.000, isBestSaler: false },
];

export const tpBienTau25k: food[] = [
  { name: "Tào phớ caramen cafe", price: 25.000, isBestSaler: false },
  { name: "Tào phớ caramen hạt sen đậu đỏ long nhãn", price: 25.000, isBestSaler: true },
  { name: "Tào phớ thạch găng nha đam đậu đỏ long caramen", price: 25.000, isBestSaler: true },
  {
    name: "Tào phớ thạch găng nha đam hạt sen đậu đỏ long nhãn nha đam",price: 25.000,
    isBestSaler: true,
  },
  { name: "Tào phớ matcha caramen",price: 25.000, isBestSaler: true },
];

export const che : food[] = [
    {
        name: "Chè sầu Đà Nẵng",
        price: 30.000,
        isBestSaler: true,
    },
    {
        name: "Tàu hũ sầu riêng",
        price: 25.000,
        isBestSaler: false,
    },
    {
        name: "Tàu hũ sầu riêng Caramen",
        price: 30.000,
        isBestSaler: false,
    },
    {
        name: "Sâm dứa phomai",
        price: 25.000,
        isBestSaler: false,
    },
    {
        name: "Chè dừa non",
        price: 30.000,
        isBestSaler: false,
    },
    {
        name: "Chè dừa dầm",
        price: 30.000,
        isBestSaler: true,
    },
    {
        name: "Chè thốt nốt",
        price: 30.000,
        isBestSaler: false,
    },
]

export const yakult : food[] = [
    {
        name: "Sữa chua dâu tây",
        price: 20.000,
        isBestSaler: false,
    },
    {
        name: "Sữa chua nha đam",
        price: 20.000,
        isBestSaler: false,
    },
    {
        name: "Sữa chua thạch lá nếp trân châu",
        price: 20.000,
        isBestSaler: false,
    },
    {
        name: "Sữa chua mít",
        price: 20.000,
        isBestSaler: true,
    },
    {
        name: "Sữa chua mít caramen",
        price: 25.000,
        isBestSaler: false,
    },
    {
        name: "Sữa chua nếp cẩm",
        price: 20.000,
        isBestSaler: false,
    },
    {
        name: "Sữa chua nếp cẩm caramen",
        price: 25.000,
        isBestSaler: false,
    },
]

export const junkFood : food[] = [
    {
        name: "Nem chua rán",
        price: 55.000,
        isBestSaler: true,
    },
    {
        name: "Nem chua phô mai (6c)",
        price: 50.000,
        isBestSaler: false,
    },
    { 
        name: "Khoai tây chiên lắc phomai",
        price: 40.000,
        isBestSaler: true,
    },
    {
        name: "Khoai lang kén",
        price: 30.000,
        isBestSaler: false,
    },
    {
        name: "Bánh gà (6c)",
        price: 40.000,
        isBestSaler: false,
    },
    {
        name: "Bánh gà phô mai (6c)",
        price: 50.000,
        isBestSaler: true,
    },
    {
        name: "Xúc xích rán",
        price: 10.000,
        isBestSaler: false,
    },
    {
        name: "Bò khô",
        price: 25.000,
        isBestSaler: false,
    },
    {
        name: "Khô gà lá chanh",
        price: 25.000,
        isBestSaler: false,
    },
    {
        name: "Heo khô cháy tỏi",
        price: 25.000,
        isBestSaler: false,
    },
    {
        name: "Caramen",
        price: 8.000,
        isBestSaler: false,
    },
    {
        name: "Bánh kẹp phô mai sữa",
        price: 12.000,
        isBestSaler: false,
    },
    {
        name: "Bánh kẹp phô mai thịt nguội",
        price: 12.000,
        isBestSaler: false,
    },
    {
        name: "Bánh kẹp phô mai xúc xích",
        price: 12.000,
        isBestSaler: false,
    },
]

export const koreanFastFood : food[] = [
    {
        name: "Gà popcorn lắc phô mai",
        price: 50.000,
        isBestSaler: false,
    },
    {
        name: "Gà popcorn sốt Hàn Quốc",
        price: 50.000,
        isBestSaler: true,
    },
    {
        name: "Gà sốt phô mai",
        price: 55.000,
        isBestSaler: false,
    },
    {
        name: "Bánh gạo lắc phomai",
        price: 30.000,
        isBestSaler: false,
    },
    {
        name: "Kimbap chiên",
        price: 35.000,
        isBestSaler: false,
    },
    {
        name: "Sotoksotok (xiên bánh gạo, chả cá, xúc xích)",
        price: 15.000,
        isBestSaler: true,
    },
    {
        name: "Set gà sốt 4 vị",
        price: 90.000,
        isBestSaler: false,
    },
    {
        name: "Set gà hộp (gà sốt, khoai lắc, xúc xích, trà chanh)",
        price: 90.000,
        isBestSaler: false,
    },
]

export const hotDog : food[] = [
    {
        name: "Basic hotdog",
        price:  15.000,
        isBestSaler: false,
    },
    {
        name: "Potato hotdog",
        price:  20.000,
        isBestSaler: false,
    },
    {
        name: "Mì hotdog",
        price:  20.000,
        isBestSaler: false,
    },
    {
        name: "Mogga hotdog",
        price:  20.000,
        isBestSaler: true,
    },
    {
        name: "Allcheese hotdog",
        price:  25.000,
        isBestSaler: false,
    },
]

export const drinks : food[] = [
    {
        name: "Trà sữa ô long Đà Lạt",
        price: 35.000,
        isBestSaler: false,
    },
    {
        name: "Trà dứa mật",
        price: 35.000,
        isBestSaler: false,
    },
    {
        name: "Trà trái cây nhiệt đới",
        price: 35.000,
        isBestSaler: true,
    },
    {
        name: "Socola nóng",
        price: 35.000,
        isBestSaler: false,
    },
    {
        name: "Trà chanh",
        price: 20.000,
        isBestSaler: false,
    },
    {
        name: "Trà dâu",
        price: 30.000,
        isBestSaler: false,
    },
    {
        name: "Trà đào",
        price: 25.000,
        isBestSaler: false,
    },
    {
        name: "Trà đào cam sả",
        price: 30.000,
        isBestSaler: false,
    },
    {
        name: "Trà nhài chanh leo",
        price: 30.000,
        isBestSaler: false,
    },
    {
        name: "Trà ô long kem soy",
        price: 35.000,
        isBestSaler: true,
    },
    {
        name: "Nước chanh tươi",
        price: 20.000,
        isBestSaler: false,
    },
    {
        name: "Nước cam tươi",
        price: 30.000,
        isBestSaler: false,
    },
    {
        name: "Sữa chua lắc (việt quất, dâu tây,...)",
        price: 25.000,
        isBestSaler: false,
    },
    {
        name: "Sữa đậu nành",
        price: 15.000,
        isBestSaler: false,
    },
    {
        name: "Coca",
        price: 15.000,
        isBestSaler: false,
    },
]

export const otherFood: food[] = [
    {
        name: "Cháo sườn",
        price: 25.000,
        isBestSaler: true,
    },
    {
        name: "Phở cuốn",
        price: 70.000,
        isBestSaler: false,
    },
    {
        name: "Phở chiên phồng",
        price: 70.000,
        isBestSaler: true,
    },
    {
        name: "Phở/Bún trộn bò",
        price: 40.000,
        isBestSaler: false,
    },
    {
        name: "Ngô chiên",
        price: 35.000,
        isBestSaler: false,
    },
] 