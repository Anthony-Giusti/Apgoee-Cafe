const quality = 'q_auto:eco';

const GridData = [
  {
    url: `https://res.cloudinary.com/diby2nljo/image/upload/c_fill,h_350,q_auto:eco,w_500/v1610403058/CoffeeShopProject/Coffee_Pattern.jpg`,
    alt: 'Coffee With Pattern',
  },
  {
    url: `https://res.cloudinary.com/diby2nljo/image/upload/c_fill,h_700,q_auto:eco,w_500/v1610403058/CoffeeShopProject/Iced_Coffee.jpg`,
    alt: 'Iced Coffee',
    className: 'galleryImg_Tall',
  },
  {
    url: `https://res.cloudinary.com/diby2nljo/image/upload/c_fill,h_700,q_auto:eco,w_500/v1610403058/CoffeeShopProject/Coffee_Pour.jpg`,
    alt: 'Coffee Being Poured Into Cup',
    className: 'galleryImg_Tall',
  },
  {
    url: `https://res.cloudinary.com/diby2nljo/image/upload/c_fill,h_350,q_auto:eco,w_500/v1610402870/CoffeeShopProject/Tea_With_Lemon.jpg`,
    alt: 'Tea With Lemon',
  },
  {
    url: `https://res.cloudinary.com/diby2nljo/image/upload/c_fill,h_700,q_auto:eco,w_500/v1610402800/CoffeeShopProject/Hand_Over_Coffee.jpg`,
    alt: 'Coffee With Hand Over It',
    className: 'galleryImg_Tall',
  },
  {
    url: `https://res.cloudinary.com/diby2nljo/image/upload/c_fill,h_350,q_auto:eco,w_500/v1610402065/CoffeeShopProject/Iced_Tea.jpg`,
    alt: 'Iced Tea',
  },
  {
    url: `https://res.cloudinary.com/diby2nljo/image/upload/c_fill,h_350,q_auto:eco,w_500/v1610402004/CoffeeShopProject/Various_Breakfast_Foods.jpg`,
    alt: 'Various Breakfast Foods On Table',
  },
  {
    url: `https://res.cloudinary.com/diby2nljo/image/upload/c_fill,h_350,q_auto:eco,w_500/v1610401909/CoffeeShopProject/Coffee_Small_Table.jpg`,
    alt: 'Coffee on Small Table',
  },
  {
    url: `https://res.cloudinary.com/diby2nljo/image/upload/c_fill,h_350,q_auto:eco,w_500/v1610401841/CoffeeShopProject/Bagel.jpg`,
    alt: 'Bagel inside a basket',
  },
  {
    url: `https://res.cloudinary.com/diby2nljo/image/upload/c_fill,h_350,q_auto:eco,w_500/v1610401762/CoffeeShopProject/Muffin.jpg`,
    alt: 'Muffin',
  },
  {
    url: `https://res.cloudinary.com/diby2nljo/image/upload/c_fill,h_700,q_auto:eco,w_500/v1610401668/CoffeeShopProject/Overnigtht_Oats.jpg`,
    alt: 'Overnight Oats',
    className: 'galleryImg_Tall',
  },
  {
    url: `https://res.cloudinary.com/diby2nljo/image/upload/c_fill,h_350,q_auto:eco,w_500/v1610401594/CoffeeShopProject/Chicken_Salad.jpg`,
    alt: 'Chicken Salad',
  },
  {
    url: `https://res.cloudinary.com/diby2nljo/image/upload/c_scale,h_700,q_auto:eco,w_500/v1610401516/CoffeeShopProject/Spinach_Salad.jpg`,
    alt: 'Spinach Salad',
    className: 'galleryImg_Tall',
  },
  {
    url: `https://res.cloudinary.com/diby2nljo/image/upload/c_fill,h_350,q_auto:eco,w_500/v1610401365/CoffeeShopProject/Oatmeal.jpg`,
    alt: 'Bowl of Oatmeal',
  },
  {
    url: `https://res.cloudinary.com/diby2nljo/image/upload/c_fill,h_350,q_auto:eco,w_500/v1610401026/CoffeeShopProject/Tomato_Soup.jpg`,
    alt: 'Bowl of Tomato Soup',
  },
  {
    url: `https://res.cloudinary.com/diby2nljo/image/upload/c_fill,h_350,q_auto:eco,w_500/v1610470967/CoffeeShopProject/Coffee_Being_Prepared.jpg`,
    alt: 'Coffee Being Prepared',
  },
  {
    url: `https://res.cloudinary.com/diby2nljo/image/upload/c_fill,h_700,q_auto:eco,w_500/v1610471189/CoffeeShopProject/Tea_Menu_On_Wall.jpg`,
    alt: 'Tea Menu Chalkboard On Wall',
    className: 'galleryImg_Tall',
  },
  {
    url: `https://res.cloudinary.com/diby2nljo/image/upload/c_fill,h_350,q_auto:eco,w_500/v1610471536/CoffeeShopProject/Cafe_Sitting_Area.jpg`,
    alt: 'Cafe Sitting Area',
  },
  {
    url: `https://res.cloudinary.com/diby2nljo/image/upload/c_fill,h_700,q_auto:eco,w_500/v1610471857/CoffeeShopProject/Cafe_Entrance.jpg`,
    alt: 'Cafe Entrance From Inside',
    className: 'galleryImg_Tall',
  },
  {
    url: `https://res.cloudinary.com/diby2nljo/image/upload/c_scale,h_350,q_auto:eco,w_500/v1610472089/CoffeeShopProject/Conversation_In_Cafe.jpg`,
    alt: 'Two People Having Seated Conversation In Cafe',
  },
  {
    url: `https://res.cloudinary.com/diby2nljo/image/upload/c_fill,h_350,q_auto:eco,w_500/v1610472313/CoffeeShopProject/Person_Holding_Hot_Chocolate.jpg`,
    alt: `Person Holding Hot Chocalte`,
  },
  {
    url: `https://res.cloudinary.com/diby2nljo/image/upload/c_fill,h_350,q_auto:eco,w_500/v1610472561/CoffeeShopProject/White_Foaming_Coffee.jpg`,
    alt: 'Cup Of Foaming Coffee',
  },
  {
    url: `https://res.cloudinary.com/diby2nljo/image/upload/c_fill,h_350,q_auto:eco,w_500/v1610472732/CoffeeShopProject/Green_Tea.jpg`,
    alt: 'Cup Of Green Tea',
  },
];

// const GridData = [
//   {
//     url: `https://res.cloudinary.com/diby2nljo/image/upload/c_scale,${quality},w_642/v1610403058/CoffeeShopProject/Coffee_Pattern.jpg`,
//     alt: 'Coffee With Pattern',
//     className: 'galleryImg',
//   },
//   {
//     url: `https://res.cloudinary.com/diby2nljo/image/upload/c_scale,${quality},w_500/v1610403058/CoffeeShopProject/Iced_Coffee.jpg`,
//     alt: 'Iced Coffee',
//     className: 'galleryImg_Tall',
//   },
//   {
//     url: `https://res.cloudinary.com/diby2nljo/image/upload/c_scale,${quality},w_500/v1610403058/CoffeeShopProject/Coffee_Pour.jpg`,
//     alt: 'Coffee Being Poured Into Cup',
//     className: 'galleryImg_Tall',
//   },
//   {
//     url: `https://res.cloudinary.com/diby2nljo/image/upload/c_scale,${quality},w_600/v1610402870/CoffeeShopProject/Tea_With_Lemon.jpg`,
//     alt: 'Tea With Lemon',
//   },
//   {
//     url: `https://res.cloudinary.com/diby2nljo/image/upload/c_scale,${quality},w_500/v1610402800/CoffeeShopProject/Hand_Over_Coffee.jpg`,
//     alt: 'Coffee With Hand Over It',
//     className: 'galleryImg_Tall',
//   },
//   {
//     url: `https://res.cloudinary.com/diby2nljo/image/upload/c_scale,${quality},w_500/v1610402065/CoffeeShopProject/Iced_Tea.jpg`,
//     alt: 'Iced Tea',
//   },
//   {
//     url: `https://res.cloudinary.com/diby2nljo/image/upload/c_scale,${quality},w_500/v1610402004/CoffeeShopProject/Various_Breakfast_Foods.jpg`,
//     alt: 'Various Breakfast On Table',
//   },
//   {
//     url: `https://res.cloudinary.com/diby2nljo/image/upload/c_scale,${quality},w_500/v1610401909/CoffeeShopProject/Coffee_Small_Table.jpg`,
//     alt: 'Coffee on Small Table',
//   },
//   {
//     url: `https://res.cloudinary.com/diby2nljo/image/upload/c_scale,${quality},w_500/v1610401841/CoffeeShopProject/Bagel.jpg`,
//     alt: 'Bagel inside a basket',
//   },
//   {
//     url: `https://res.cloudinary.com/diby2nljo/image/upload/c_scale,${quality},w_500/v1610401762/CoffeeShopProject/Muffin.jpg`,
//     alt: 'Muffin',
//   },
//   {
//     url: `https://res.cloudinary.com/diby2nljo/image/upload/c_scale,${quality},w_500/v1610401668/CoffeeShopProject/Overnigtht_Oats.jpg`,
//     alt: 'Overnight Oats',
//     className: 'galleryImg_Tall',
//   },
//   {
//     url: `https://res.cloudinary.com/diby2nljo/image/upload/c_scale,${quality},w_500/v1610401594/CoffeeShopProject/Chicken_Salad.jpg`,
//     alt: 'Chicken Salad',
//   },
//   {
//     url: `https://res.cloudinary.com/diby2nljo/image/upload/c_scale,${quality},w_500/v1610401516/CoffeeShopProject/Spinach_Salad.jpg`,
//     alt: 'Spinach Salad',
//     className: 'galleryImg_Tall',
//   },
//   {
//     url: `https://res.cloudinary.com/diby2nljo/image/upload/c_scale,${quality},w_500/v1610401365/CoffeeShopProject/Oatmeal.jpg`,
//     alt: 'Bowl of Oatmeal',
//   },
//   {
//     url: `https://res.cloudinary.com/diby2nljo/image/upload/${quality}/v1610401026/CoffeeShopProject/Tomato_Soup.jpg`,
//     alt: 'Bowl of Tomato Soup',
//   },
// ];

export default GridData;
