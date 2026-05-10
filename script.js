let lastQuote = "";

async function getQuote() {
    const quoteText = document.getElementById("quote");
    const authorText = document.getElementById("author");

    quoteText.innerText = "Loading...";
    authorText.innerText = "";

    try {
        const response = await fetch("https://type.fit/api/quotes");
        const data = await response.json();

        let random;

        do {
            random = data[Math.floor(Math.random() * data.length)];
        } while (random.text === lastQuote);

        lastQuote = random.text;

        quoteText.innerText = `"${random.text}"`;
        authorText.innerText = `- ${random.author || "Unknown"}`;

    } catch (error) {
        const quotes = [
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Success is not final, failure is not fatal.", author: "Winston Churchill" },
    { text: "Do something today that your future self will thank you for.", author: "Unknown" },
    { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
    { text: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
    { text: "Great things never come from comfort zones.", author: "Unknown" },
    { text: "Don’t stop when you’re tired. Stop when you’re done.", author: "Unknown" },
    { text: "Wake up with determination. Go to bed with satisfaction.", author: "Unknown" },
    { text: "Little things make big days.", author: "Unknown" },
    { text: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
    { text: "Hard work beats talent when talent doesn’t work hard.", author: "Tim Notke" },
    { text: "Your limitation—it’s only your imagination.", author: "Unknown" },
    { text: "Sometimes later becomes never. Do it now.", author: "Unknown" },
    { text: "Don’t wait for opportunity. Create it.", author: "Unknown" },
    { text: "Success doesn’t just find you. You have to go out and get it.", author: "Unknown" },
    { text: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Unknown" },
    { text: "Dream it. Wish it. Do it.", author: "Unknown" },
    { text: "Stay focused and never give up.", author: "Unknown" },
    { text: "Discipline is the bridge between goals and accomplishment.", author: "Jim Rohn" },
    { text: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" }
];

        let random;

        do {
            random = quotes[Math.floor(Math.random() * quotes.length)];
        } while (random.text === lastQuote);

        lastQuote = random.text;

        quoteText.innerText = `"${random.text}"`;
        authorText.innerText = `- ${random.author}`;
    }
}
