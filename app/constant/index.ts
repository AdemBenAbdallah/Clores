export const products = [
  {
    id: "1",
    title: "Lavender",
    rate: 4.5,
    numOfRatings: 120,
    scientificName: "Lavandula angustifolia",
    commonNames: ["English Lavender", "True Lavender"],
    description:
      "Lavender is a popular aromatic herb known for its fragrant purple flowers and soothing properties.",
    mainImg:
      "https://nurserylive.com/cdn/shop/products/nurserylive-combo-packs-plants-5-best-fragrant-plants-16968509653132_600x600.jpg?v=1634209158",
    otherViews: [
      "https://nurserylive.com/cdn/shop/products/nurserylive-combo-packs-plants-5-best-fragrant-plants-16968509653132_600x600.jpg?v=1634209158",
      "/assests/img/shop/shop2.jpg",
      "/assests/img/shop/shop3.jpg",
    ],
    price: 12.99,
    type: "vegetal",
    inStock: true,
    createdAt: "2023-09-10T12:00:00Z",
  },
  {
    id: "2",
    title: "Rosemary",
    rate: 4.3,
    numOfRatings: 98,
    scientificName: "Rosmarinus officinalis",
    commonNames: ["Dew of the Sea", "Rosemary Bush"],
    description:
      "Rosemary is a woody herb with needle-like leaves, often used in cooking and for its pleasant scent.",
    mainImg:
      "https://nurserylive.com/cdn/shop/products/nurserylive-g-jasminum-sambac-mogra-arabian-jasmine_600x600.jpg?v=1634222612",
    otherViews: [
      "https://nurserylive.com/cdn/shop/products/nurserylive-g-jasminum-sambac-mogra-arabian-jasmine_600x600.jpg?v=1634222612",
      "https://nurserylive.com/cdn/shop/products/nurserylive-g-jasminum-sambac-mogra-arabian-jasmine-5_540x720.jpg?v=1662365418",
    ],
    price: 9.99,
    type: "vegetal",
    inStock: true,
    createdAt: "2023-09-11T13:30:00Z",
  },
  {
    id: "3",
    title: "Sunflower",
    rate: 4.8,
    numOfRatings: 215,
    scientificName: "Helianthus annuus",
    commonNames: ["Common Sunflower"],
    description:
      "The sunflower is known for its large, yellow flowers and edible seeds.",
    mainImg:
      "https://nurserylive.com/cdn/shop/products/nurserylive-peace-lily-spathiphyllum-plant-in-4-inch-10-cm-black-pot-230563_600x600.jpg?v=1685021926",
    otherViews: [
      "https://nurserylive.com/cdn/shop/products/nurserylive-peace-lily-spathiphyllum-plant-in-4-inch-10-cm-black-pot-230563_600x600.jpg?v=1685021926",
      "/assests/img/shop/shop1.jpg",
      "/assests/img/shop/shop2.jpg",
    ],
    price: 6.99,
    type: "vegetal",

    inStock: false,
    createdAt: "2023-09-12T14:45:00Z",
  },
  {
    id: "4",
    title: "Tulip",
    rate: 4.0,
    numOfRatings: 65,
    scientificName: "Tulipa",
    commonNames: ["Garden Tulip"],
    description:
      "Tulips are colorful spring-blooming flowers that come in various shapes and sizes.",
    mainImg:
      "https://nurserylive.com/cdn/shop/products/nurserylive-jade-plant-elephant-bush-green-succulent-plant-in-4-inch-10-cm-black-pot-434709_600x600.jpg?v=1684935612",
    otherViews: [
      "https://nurserylive.com/cdn/shop/products/nurserylive-jade-plant-elephant-bush-green-succulent-plant-in-4-inch-10-cm-black-pot-434709_600x600.jpg?v=1684935612",
    ],
    price: 5.49,
    type: "lorem",
    inStock: true,
    createdAt: "2023-09-13T16:15:00Z",
  },
  {
    id: "5",
    title: "Aloe Vera",
    rate: 4.6,
    numOfRatings: 150,
    scientificName: "Aloe barbadensis miller",
    commonNames: ["Medicinal Aloe", "Burn Plant"],
    description:
      "Aloe Vera is a succulent plant known for its healing properties, often used for skin conditions.",
    mainImg:
      "https://nurserylive.com/cdn/shop/products/nurserylive-syngonium-pink-plant-in-4-inch-10-cm-black-pot-188185_600x600.jpg?v=1685023242",
    otherViews: [
      "https://nurserylive.com/cdn/shop/products/nurserylive-syngonium-pink-plant-5-410852_540x720.jpg?v=1679751750",
    ],
    price: 7.99,
    type: "carote",

    inStock: true,
    createdAt: "2023-09-14T18:30:00Z",
  },
];

export const comments = [
  {
    id: "1",
    name: "Sarah Johnson",
    nbStart: 4,
    content: "This plant is amazing! It adds a touch of elegance to my garden.",
  },
  {
    id: "2",
    name: "David Smith",
    nbStart: 3,
    content: "Good plant overall, but it requires a lot of care and attention.",
  },
  {
    id: "3",
    name: "Emily Davis",
    nbStart: 2,
    content:
      "I'm a bit disappointed with this plant. It didn't meet my expectations.",
  },
  {
    id: "4",
    name: "Michael Wilson",
    nbStart: 4,
    content:
      "This plant has thrived in my indoor garden. I highly recommend it.",
  },
  {
    id: "5",
    name: "Linda Brown",
    nbStart: 1,
    content:
      "I wouldn't buy this plant again. It didn't survive more than a month.",
  },
  {
    id: "6",
    name: "Sophia Lee",
    nbStart: 5,
    content: "The best plant I ever had! It brings joy to my home every day.",
  },
  {
    id: "7",
    name: "Daniel Martinez",
    nbStart: 3,
    content:
      "A decent plant, but it could use some improvement in terms of maintenance.",
  },
];

export const blogPosts = [
  {
    title: "The Beauty of Indoor Plants",
    imageSrc: "/assests/img/blog/indoor-plants.webp",
    description:
      "Discover the benefits of having indoor plants and how they can transform your living space.",
  },
  {
    title: "Caring for Succulents: A Beginner’s Guide",
    imageSrc: "/assests/img/blog/succulents.webp",
    description:
      "Learn the basics of succulent care and keep your succulents thriving with our simple tips.",
  },
  {
    title: "Planting 101: Getting Started with Gardening",
    imageSrc: "/assests/img/blog/gardening.webp",
    description:
      "Get your hands dirty and start your gardening journey with our beginner-friendly guide.",
  },
];

type optionsType = {
  id: string;
  label: string;
  checked: boolean;
};

export type checkBoxOption = {
  category: string;
  options: optionsType[];
};

export const blurImgUrl =
  "data:image/webp;base64,UklGRtwCAABXRUJQVlA4WAoAAAAgAAAAgQAAgQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgg7gAAAHALAJ0BKoIAggA/OZC+WS8ppyOqVFqZ4CcJaW7ew998CpwBpbReRPBD3ZIvGXaQ/TV4RnzEH1dNOR/U2B1JRxuHkO/H6H63PSH6ESN9DbiH1/tn/sVWgx0lkHKpvtk9byYXpEAA/u8Qx5VF8duLv0dxVrxlVM3bAU75UfJGNyP0dx8fgabMEucbg8FMc6/jbns5I94WbhILRSxbIx+EXRkQEkDd4PV1QTgxopIGtvs5gUKQwp1YfW7/Ca809C3gBto85yeewqchG9Qay8sKPWhrCL06IN43Eh+4rqpCnQefRQ2rIpiiCTs6YK0AAAA=";
export const home2UrlBlur =
  "data:image/webp;base64,UklGRpYDAABXRUJQVlA4WAoAAAAgAAAAgQAAwgAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggqAEAAJASAJ0BKoIAwwA+7W6qUC0/saar1Ntz8B2JZ27gSjZMvX/lmO/AkkN2e7muuORsPhLjc1eFyGoV+DZjxglAn2ABU8HuaeA9a8vNw4duPpK8pzwwFYPVLlcCLqz8CWSyEG8BH5plGFUtjA5MpTPK+in9G7uOn3zfehNlRoeUIMKtPkQTcFZJaSUIAc/n561EF+jy7Wu3o23c+wyRp0gA/uwa2EHIB/WtSYAYm0M3T+Zvrwv4xu+UxZsKOOch/bPUw+SlJcfOjOAHwFd0pg2oGKXoJW3myUADOtX65hpx+LGusTOyqCZ0Q43N3c34oJ7w5lR8FEUD6CRn1YcgT2/NwIYJJx8iLqnY63cTbYB4ukFRxvF/VsBLNqnXknvZltlfBKTtLY6+zyWcpGrLxQHxGTIDJK15Tr/OrE5CmJBbvrp7OpozRTQnwzqxzgd4XBSVzJa24iPFIt9PVw8gGnf4DPomGPw2o9O5iT9HDh7KdP8qzsFvE94/8yPTQPG5AJE40dbmAKb0ogsuIsh+LyMRvdm6NPrOgX/qfvcnLoeItCwDfPDF1FGAAAA=";
export const home1UrlBlur =
  "data:image/webp;base64,UklGRvgCAABXRUJQVlA4WAoAAAAgAAAAgQAAwgAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggCgEAAPANAJ0BKoIAwwA+0WCrUigko6KhsrlxABoJaW7d1eDVhG6BZ8/ABYag+oIl3SQw1VVFKLaOI1OtIuu+hIGkKIu5mcGdIRh9L3jnXIaFKaEcYDoWR+tCaG8/AqEa6k5sN3x2zUVmHG2HKCMqmlDm2QbjffG5WpeXAAD+70d/ZkNtoyAVX9YUET57U4p6sqFQYu8OgSkf64ml9U9hzF3SR97WJ6BGsxAyxsg0UOy3KMS30T5+w7Mb16gEzV33dOQ3+NcdtrouMSziKrdW/rDluHjxpRjDWiZ6XgHGWJCbzMFnVAyyRq+++C/6zKkv6Q5IinDMuNV6+ALpSTscsRxJZyRUp03WHSFRQAAA";
export const aboutUrlBlur =
  "data:image/webp;base64,UklGRqADAABXRUJQVlA4WAoAAAAgAAAAgQAAwgAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggsgEAAFARAJ0BKoIAwwA+7XCvUy0sKaKm1HoZoB2JZ27gAvgVr8Y+THuA6kCF4zQqH2zEjH4Q3WWMt/s3B/pLcawHiQOFKzAbtQbSjeqVumahsoRuYCvzRH8T68J9ZvkjmcauubzXTTCmYoCSeztR7ACsJ7CGsJfz0/g1qGABnLR00ctnOIP/P2D9MaaX0Ig6jiL4lqPYAAD+6kFYIqm2x8Q7BxTvzWggnKm6KDmzbOzXCtqK78E51rsQt1mh9C5sq7Zr0W1MCTqldL/TSyNd5rG0HswtjiUbfvfSK6lVByvzypKQyWzWHB4veSqlbk7VZYNLhKFrxpY5BqklPMEdbmzjj8B2K9bnR+zeEnjP33g1HfqOWxh0obw8ALvDkcdAXjz+qN40HrokCfOY3btMDU8MWi00vY9jrDXcxdJWeLhRWkZZF7JToETvrriVkbBHAbRoD2PEpWunEUR/mhkD0D0FdNkRaqe5Vc0FpwwcjG5PHr7RcrBC7NEcQ/qLYfr/DlmyvX2q2g2nR+4Q9uCj+ulNTLmOZhEuDpa+UV/fAlxtY+l10LGu88+T8n2uzxhtczGbrKAA";
