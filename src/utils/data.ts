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
  { name: "1. Tào phớ nước đường trân châu thạch",price: 12.000, isBestSaler: true },
  { name: "2. Tào phớ nước đậu nành",price: 12.000, isBestSaler: false },
  { name: "3. Thạch găng trân châu thạch",price: 12.000, isBestSaler: true },
];

export const tpBienTau15k: food[] = [
  { name: "4. Tào phớ đậu nành", price: 15.000, isBestSaler: false },
  { name: "5. Tào phớ đậu đỏ", price: 15.000, isBestSaler: false },
  { name: "6. Tào phớ long nhãn", price: 15.000, isBestSaler: false },
  { name: "7. Tào phớ hạt sen", price: 15.000, isBestSaler: false },
  { name: "8. Tào phớ nha đam", price: 15.000, isBestSaler: true },
  { name: "9. Tào phớ thạch găng", price: 15.000, isBestSaler: false },
  { name: "10. Thạch găng nha đam", price: 15.000, isBestSaler: false },
];

export const tpBienTau18k: food[] = [
  { name: "11. Tào phớ hạt sen long nhãn",price: 18.000, isBestSaler: false },
  { name: "12. Tào phớ hạt sen đậu đỏ", price: 18.000,isBestSaler: false },
  { name: "13. Tào phớ long nhãn đậu đỏ",price: 18.000, isBestSaler: false },
];

export const tpBienTau20k: food[] = [
  { name: "14. Tào phớ hạt sen đậu đỏ long nhãn",price: 20.000, isBestSaler: true },
  { name: "15. Tào phớ thạch găng nha đam đậu đỏ",price: 20.000, isBestSaler: false },
  { name: "16. Tào phớ caramen",price: 20.000, isBestSaler: true },
  { name: "17. Tào phớ cafe",price: 20.000, isBestSaler: false },
  { name: "18. Tào phớ trà thái",price: 20.000, isBestSaler: false },
  { name: "19. Tào phớ sữa ngô",price: 20.000, isBestSaler: false },
  { name: "20. Tào phớ sầu riêng",price: 20.000, isBestSaler: false },
];

export const tpBienTau25k: food[] = [
  { name: "21. Tào phớ caramen cafe", price: 25.000, isBestSaler: false },
  { name: "22. Tào phớ caramen hạt sen đậu đỏ long nhãn", price: 25.000, isBestSaler: true },
  { name: "23. Tào phớ thạch găng nha đam đậu đỏ long caramen", price: 25.000, isBestSaler: true },
  {
    name: "24. Tào phớ thạch găng nha đam hạt sen đậu đỏ long nhãn nha đam",price: 25.000,
    isBestSaler: true,
  },
  { name: "25. Tào phớ matcha caramen",price: 25.000, isBestSaler: true },
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
        name: "Đùi gà, cánh gà KFC",
        price:35.000,
        isBestSaler: true,
    },
    {
        name: "Xúc xích rán",
        price: 10.000,
        isBestSaler: false,
    },
    {
        name: "Kim bắp chiên (thường)",
        price: 35.000,
        isBestSaler: false,
    },
    {
        name: "Ngô chiên",
        price: 35.000,
        isBestSaler: false,
    },
    {
        name: "Bò khô, gà khô, heo khô",
        price: 25.000,
        isBestSaler: false,
    },
    {
        name: "Bánh kẹp",
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
        name: "Tokbokki xào cay",
        price: 30.000,
        isBestSaler: false,
    },
    {
        name: "Tokbokki xào cay phủ phô mai",
        price: 40.000,
        isBestSaler: false,
    },
    {
        name: "Tokbokki thập cẩm phủ pho mai",
        price: 50.000,
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
        name: "Hồng trà sữa",
        price: 35.000,
        isBestSaler: false,
    },
    {
        name: "Trà nhài sữa",
        price: 35.000,
        isBestSaler: false,
    },
    {
        name: "Sữa tươi trân châu đường đen",
        price: 35.000,
        isBestSaler: true,
    },
    {
        name: "Trà thạch đào",
        price: 35.000,
        isBestSaler: false,
    },
    {
        name: "Trà vải cam dâu",
        price: 35.000,
        isBestSaler: false,
    },
    {
        name: "Trà sen dâu",
        price: 35.000,
        isBestSaler: false,
    },
    {
        name: "Trà vải dưa hấu",
        price: 35.000,
        isBestSaler: false,
    },
    {
        name: "Dưa hấu hoa đậu biếc",
        price: 35.000,
        isBestSaler: true,
    },
    {
        name: "Trà trái cây multi Juice",
        price: 35.000,
        isBestSaler: true,
    },
    {
        name: "Trà đào cam sả",
        price: 35.000,
        isBestSaler: true,
    },
    {
        name: "Trà ổi hồng",
        price: 35.000,
        isBestSaler: false,
    },
    {
        name: "Trà hoa đậu biếc cream",
        price: 35.000,
        isBestSaler: true,
    },
    {
        name: "Nước cam tươi",
        price: 35.000,
        isBestSaler: false,
    },
    {
        name: "Socola nóng",
        price: 35.000,
        isBestSaler: false,
    },
    {
        name: "Sữa chua lắc (việt quất, dâu tây, dâu tây, kiwi)",
        price: 30.000,
        isBestSaler: false,
    },
    {
        name: "Sữa đậu nành, coca",
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
        name: "Phở chiên trứng",
        price: 80.000,
        isBestSaler: true,
    },
    {
        name: "Phở/Bún trộn bò",
        price: 40.000,
        isBestSaler: false,
    },
    {
        name: "Cơm trộn",
        price: 40.000,
        isBestSaler: false,
    },
    {
        name: "Cơm gà",
        price: 45.000,
        isBestSaler: false,
    },
    {
        name: "Mỳ ý",
        price: 40.000,
        isBestSaler: false,
    },
] 