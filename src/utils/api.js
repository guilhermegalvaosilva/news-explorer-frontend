const getSavedArticles = (token) => {
  const url = `https://nomoreparties.co/news/v2/everything/saved-articles`;
  console.log(`Fetching saved articles from ${url}`);
  return Promise.resolve({ articles: [] });
};

const fetchNewsArticles = (query) => {
  const url = `https://nomoreparties.co/news/v2/everything?q=${encodeURIComponent(query)}&apiKey=${apiKey}}`;
  console.log(`Searching for articles with ${query}`);
  return fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Error fetching search results: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => data.articles);
};

export function getItems() {
  return new Promise((resolve, reject) =>
    resolve([
      {
        source: {
          id: "wired",
          name: "Wired",
        },
        author: "Makena Kelly",
        title: "Some news article",
        description:
          "ByteDance now has to show that it's making significant progress on a deal to sell TikTok to a US-based company.",
        url: "https://www.wired.com/story/trump-executive-order-tiktok-ban/",
        urlToImage:
          "https://media.wired.com/photos/678e7e3a51ec285221ab1b51/191:100/w_1280,c_limit/trump-tiktok-ban-1228803154.jpg",
        publishedAt: "2025-01-21T01:57:55Z",
        content:
          "Shortly after Mondays inauguration ceremony, President Donald Trump signed an executive order extending the deadline for ByteDance to sell TikToks US operations, preventing the app from going dark for...",
      },
      {
        source: {
          id: "techcrunch",
          name: "TechCrunch",
        },
        author: "Lauren Forristal",
        title: "Bye-bye bots...",
        description:
          "Autonomous, AI-based players are coming to a gaming experience near you, and a new startup, Altera, is joining the gray to build this new guard of AI Research company Altera raised $9 million to build AI ...",
        url: "https://techcrunch.com/2024/05/08/bye-bye-bots-alteras-game-playing-ai-agents-get-backing-from-eric-schmidt/",
        urlToImage:
          "https://techcrunch.com/wp-content/uploads/2024/05/Minecraft-keyart.jpg?resize=1200,720",
        publishedAt: "2024-05-08T15:14:57Z",
        content:
          "Autonomous, AI-based players are coming to a gaming experience near you, and a new startup, Altera, is joining the fray to build this new guard of AI agents. The company announces Wednesday that it ...",
      },
      {
        source: {
          id: "the-wall-street-journal",
          name: "The Wall Street Journal",
        },
        author: "Caitlin McCabe",
        title: "Bitcoin Hits Record",
        description:
          "The new peak above $109,000 was reached Monday, and stock futures edged higher. Since Trump was elected, bitcoin has surged more than 50%.",
        url: "https://www.wsj.com/finance/stocks/global-stocks-markets-dow-news-01-20-2025-d809dbee",
        urlToImage:
          "https://s.yimg.com/ny/api/res/1.2/dfwra7CyN_qJVCnDBHalMw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02MDA-/https://media.zenfs.com/en/the_wall_street_journal_hosted_996/ce1b3c7cd087166e522ef1e8c67ece37",
        publishedAt: "2025-01-20T14:49:00Z",
        content:
          "The new peak above $109,000 was reached Monday, and stock futures edged higher. Since Trump was elected, bitcoin has surged more than 50%...",
      },
      // and have however many you want to show on the saved-news page
      {
        source: {
          id: "wired",
          name: "Wired",
        },
        author: "Makena Kelly",
        title: "Some news article",
        description:
          "ByteDance now has to show that it's making significant progress on a deal to sell TikTok to a US-based company.",
        url: "https://www.wired.com/story/trump-executive-order-tiktok-ban/",
        urlToImage:
          "https://media.wired.com/photos/678e7e3a51ec285221ab1b51/191:100/w_1280,c_limit/trump-tiktok-ban-1228803154.jpg",
        publishedAt: "2025-01-21T01:57:55Z",
        content:
          "Shortly after Mondays inauguration ceremony, President Donald Trump signed an executive order extending the deadline for ByteDance to sell TikToks US operations, preventing the app from going dark for...",
      },
      {
        source: {
          id: "wired",
          name: "Wired",
        },
        author: "Makena Kelly",
        title: "Some news article",
        description:
          "ByteDance now has to show that it's making significant progress on a deal to sell TikTok to a US-based company.",
        url: "https://www.wired.com/story/trump-executive-order-tiktok-ban/",
        urlToImage:
          "https://media.wired.com/photos/678e7e3a51ec285221ab1b51/191:100/w_1280,c_limit/trump-tiktok-ban-1228803154.jpg",
        publishedAt: "2025-01-21T01:57:55Z",
        content:
          "Shortly after Mondays inauguration ceremony, President Donald Trump signed an executive order extending the deadline for ByteDance to sell TikToks US operations, preventing the app from going dark for...",
      },
    ]),
  );
}

const api = {
  getSavedArticles,
  fetchNewsArticles,
};

export default api;
