const books = {
    data: [
        {
            id: 1,
            name: "Harry Poter",
            description: "The best book ever",
            price: 12000,
            comments: [
                { userId: 1, comments: "I've read it before" },
                { userId: 1, comments: "It's good" },
            ],
        },
        {
            id: 2,
            name: "Marvel",
            description: "The best book ever",
            price: 22000,
            comments: [
                { userId: 1, comments: "I've read it before" },
                { userId: 1, comments: "It's nice" },
            ],
        },
    ],
};

module.exports = books;