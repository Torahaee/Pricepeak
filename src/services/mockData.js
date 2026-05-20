export const MOCK_PRODUCT = {
    id: "p1",

    name: "Sony WH-1000XM5 Wireless Noise Canceling Headphones",

    image:
        "https://images.unsplash.com/photo-1670044565701-0599bf36709a?q=80&w=2070&auto=format&fit=crop",

    description:
        "Industry-leading noise cancellation with two processors, eight microphones, and precise voice pickup technology.",

    currentPrice: 348.0,

    originalPrice: 399.99,

    rating: 4.8,

    reviewCount: 12450,

    category: "Electronics",

    platform: "Amazon",

    url: "https://amazon.com/sony-wh1000xm5",

    /* Price History */
    priceHistory: [
        {
            date: "2024-01-01",
            price: 399,
            platform: "Amazon",
        },

        {
            date: "2024-02-01",
            price: 379,
            platform: "Amazon",
        },

        {
            date: "2024-03-01",
            price: 348,
            platform: "Amazon",
        },

        {
            date: "2024-03-15",
            price: 399,
            platform: "Amazon",
        },

        {
            date: "2024-04-01",
            price: 360,
            platform: "Amazon",
        },

        {
            date: "2024-05-01",
            price: 348,
            platform: "Amazon",
        },
    ],

    /* Predictions */
    predictions: [
        {
            date: "2024-06-01",
            price: 330,
            confidence: 0.85,
        },

        {
            date: "2024-07-01",
            price: 310,
            confidence: 0.92,
        },

        {
            date: "2024-08-01",
            price: 348,
            confidence: 0.75,
        },
    ],

    /* Comparisons */
    comparisons: [
        {
            platform: "Amazon",
            price: 348,
            url: "#",
            shipping: 0,
            inStock: true,
            deliveryDate: "Tomorrow",
        },

        {
            platform: "Best Buy",
            price: 349,
            url: "#",
            shipping: 0,
            inStock: true,
            deliveryDate: "In 2 days",
        },

        {
            platform: "Flipkart",
            price: 335,
            url: "#",
            shipping: 10,
            inStock: false,
            deliveryDate: "Out of stock",
        },

        {
            platform: "Tata Cliq",
            price: 342,
            url: "#",
            shipping: 5,
            inStock: true,
            deliveryDate: "In 3 days",
        },
    ],
};

export const TRENDING_DEALS = [
    {
        id: "d1",

        name: "Apple MacBook Air M2",

        oldPrice: 1199,

        newPrice: 899,

        discount: 25,

        image:
            "https://images.unsplash.com/photo-1611186871348-b1ec696e52c9?q=80&w=2070&auto=format&fit=crop",
    },

    {
        id: "d2",

        name: "Nintendo Switch OLED",

        oldPrice: 349,

        newPrice: 299,

        discount: 14,

        image:
            "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?q=80&w=2070&auto=format&fit=crop",
    },

    {
        id: "d3",

        name: "Samsung Galaxy S24 Ultra",

        oldPrice: 1299,

        newPrice: 1099,

        discount: 15,

        image:
            "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=2070&auto=format&fit=crop",
    },
];