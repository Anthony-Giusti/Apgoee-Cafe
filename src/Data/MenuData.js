/* eslint-disable import/prefer-default-export */
const MenuData = [
  {
    type: 'coffee',
    image: 'placeholder',
    description:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
    additions: [
      {
        type: 'Extra Milk',
        price: '.19',
      },
      {
        type: 'Alomond Milk',
        price: '.19',
      },
    ],
    items: [
      {
        name: 'Apogee Sigunature Blend',
        description: 'Nullam facilisis, leo sed pretium dignissim, arcu arcu viverra neque.',
        prices: {
          small: 3.89,
          large: 5.49,
        },
      },
      {
        name: 'Pour Over',
        description: 'Vestibulum interdum viverra turpis, sit amet ornare sapien.',
        prices: {
          small: 3.59,
          large: 5.39,
        },
      },
      {
        name: 'Café Au Lait',
        description: 'Fusce erat tortor, ornare in dapibus sit amet, sodales efficitur diam.',
        prices: {
          small: 3.99,
          large: 5.99,
        },
      },
      {
        name: 'French Press',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut.',
        prices: {
          small: 4.29,
          large: 6.29,
        },
      },
    ],
  },
  {
    type: 'espresso',
    image: 'placeholder.png',
    description:
      'Sagittis id consectetur purus ut faucibus. Quis enim lobortis scelerisque fermentum dui faucibus. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Erat pellentesque adipiscing commodo elit at. Etiam erat velit scelerisque in dictum non. ',
    additions: [
      {
        type: 'Add Vanilla Extract',
        price: '.39',
      },
    ],
    items: [
      {
        name: 'Espresso',
        description: 'Ut viverra ac eros tempus venenatis. Sed ullamcorper pretium auctor.',
        prices: {
          small: 3.89,
          large: 5.49,
        },
      },
      {
        name: 'Americano',
        description: 'Nullam efficitur, risus nec eleifend laoreet, mi justo aliquet lorem.',
        prices: {
          small: 3.89,
          large: 5.49,
        },
      },
      {
        name: 'Latte',
        description: 'Praesent ut consectetur urna, non luctus risus.',
        prices: {
          small: 3.89,
          large: 5.49,
        },
      },
      {
        name: 'Cappucino',
        description: 'Nam viverra neque elit, pretium condimentum leo vestibulum vel.',
        prices: {
          small: 3.89,
          large: 5.49,
        },
      },
      {
        name: 'Con Panna',
        description: 'Etiam tincidunt iaculis augue vitae scelerisque.',
        prices: {
          small: 3.89,
          large: 5.49,
        },
      },
    ],
  },
  {
    type: 'iced-drinks',
    image: 'placeholder.png',
    description:
      ' Eu scelerisque felis imperdiet proin fermentum leo vel orci. Nec feugiat nisl pretium fusce id velit ut. Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Sapien eget mi proin sed libero. ',
    items: [
      {
        name: 'Iced Coffee',
        description:
          'lass aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        prices: {
          small: 3.89,
          large: 5.49,
        },
      },
      {
        name: 'Iced Tea',
        description: 'In iaculis cursus volutpat. Sed fringilla urna eget fermentum scelerisque. ',
        prices: {
          small: 3.89,
          large: 5.49,
        },
      },
      {
        name: 'Latte',
        description: 'Donec egestas cursus magna. Nunc ac lacus tellus.',
        prices: {
          small: 3.89,
          large: 5.49,
        },
      },
      {
        name: 'Iced Latee',
        description: 'Nullam et nisl iaculis est rhoncus ornare. Nulla sed consectetur neque.',
        prices: {
          small: 3.89,
          large: 5.49,
        },
      },
    ],
  },
  {
    type: 'hot-drinks',
    image: 'placeholder.png',
    description:
      'Volutpat blandit aliquam etiam erat velit scelerisque. Eu mi bibendum neque egestas congue quisque. Elementum nibh tellus molestie nunc.',
    items: [
      {
        name: 'Green Tea',
        description: 'Phasellus tellus erat, hendrerit id purus vel, fermentum hendrerit eros.',
        prices: {
          small: 3.89,
          large: 5.49,
        },
        additions: [
          {
            type: 'Fresh Sliced Lemon',
            price: '0.29',
          },
        ],
      },
      {
        name: 'Black Tea',
        description: 'Ut tortor turpis, tempor a imperdiet sed, commodo eu dolor.',
        prices: {
          small: 3.89,
          large: 5.49,
        },
        additions: [
          {
            type: 'Fresh Sliced Lemon',
            price: '0.29',
          },
        ],
      },
      {
        name: 'Chai',
        description: 'Vivamus sagittis consectetur lacus vestibulum pulvinar.',
        prices: {
          small: 3.89,
          large: 5.49,
        },
      },
      {
        name: 'Hot Chocolate',
        description: ' Suspendisse ac nisl sed tortor convallis fermentum a eget erat.',
        prices: {
          small: 3.89,
          large: 5.49,
        },
        additions: [{ type: 'Marshmallows', price: '.59' }],
      },
    ],
  },
  {
    type: 'breakfast',
    image: 'placeholder.png',
    description:
      'Viverra orci sagittis eu volutpat odio facilisis. Risus sed vulputate odio ut. Tellus integer feugiat scelerisque varius morbi enim nunc. Orci eu lobortis elementum nibh tellus. Vulputate ut pharetra sit amet aliquam id diam maecenas ultricies.',
    items: [
      {
        name: 'Bagels',
        description: 'Morbi vulputate enim ac eleifend feugiat. Donec eu porttitor nibh. ',
        prices: {
          small: 3.89,
          large: 5.49,
        },
        additions: [
          {
            type: 'Avocado',
            price: '1.00',
          },
          {
            type: 'Vegan Cream Cheese',
            price: '0.59',
          },
        ],
      },
      {
        name: 'Muffin',
        description: 'Maecenas commodo nisi quis dolor ultrices suscipit.',
        prices: {
          small: 3.89,
          large: 5.49,
        },
        additions: [
          {
            type: 'Glutten Free',
            price: '0.39',
          },
        ],
      },
      {
        name: 'Oatmeal',
        description: 'Donec elementum eros non turpis consectetur aliquam.',
        prices: {
          small: 3.89,
          large: 5.49,
        },
      },
    ],
  },
  {
    type: 'lunch',
    image: 'placeholder.png',
    description:
      'Sed lectus vestibulum mattis ullamcorper velit sed. Venenatis urna cursus eget nunc. Morbi tristique senectus et netus et. Pellentesque habitant morbi tristique senectus et netus. ',
    items: [
      {
        name: 'Tuna Sandwich',
        description: 'In hac habitasse platea dictumst. Cras sollicitudin orci urna.',
        prices: {
          small: 3.89,
          large: 5.49,
        },
      },
      {
        name: 'Chicken Salad',
        description: 'Donec viverra luctus nulla, eget mattis lorem aliquet vitae.',
        prices: {
          small: 3.89,
          large: 5.49,
        },
      },
      {
        name: 'Spinach Salad',
        description: 'Mauris dictum leo nec sollicitudin condimentum. ',
        prices: {
          small: 3.89,
          large: 5.49,
        },
      },
      {
        name: 'Tomato Soup',
        description: 'Nam vulputate dolor in est volutpat, vitae cursus ante feugiat. ',
        prices: {
          small: 3.89,
          large: 5.49,
        },
      },
    ],
  },
];

export { MenuData };
