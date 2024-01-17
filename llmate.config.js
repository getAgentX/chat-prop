const llmateConfig = {
  home: {
    light_logo: "/images/full-logo.svg",
    dark_logo: "/images/full-logo-dark.svg",
    title: "Welcome to LLmate!",
    sub_title: "🤖 Build your AI workforce customized to your needs. We provide the tools to build, train, and deploy your AI assistants.",
    description:
      "Try out our AI assistants and see how they can help you. We have a variety of AI assistants that can help you with your business needs. You can also build your own AI assistant using our platform.",
  },
  apps: [
    {
      name: "ChatProp",
      slug: "chat-prop",
      images: {
        bot: "/images/bot.svg",
        botdark: "/images/bot-dark.svg",
        user: "/images/user.svg",
        userdark: "/images/user-dark.svg",
      },
      app_id: process.env.APP_CHATPROP_ID,
      api_key: process.env.CHATPROP_API_KEY,
      defaultMessage: [
        "Welcome to our Conversational-AI Real Estate Investment Consultant! Our AI is designed to assist you in finding the perfect property in Bangalore. Here's how it works: 💪🌟",
        "It follows a clear process: first, it seeks investment advice to align with financial goals, then explores nearby areas, and finally recommends properties with possession timelines extending to 2025 and beyond using the 'realestate-lookup' tool.",
      ],
      defaultQuestions: [
        "💸 Tell me about new launches in Bangalore after 2027.",
        "💡 What's a good upcoming project in Whitefield, Bangalore?",
        "🌱 Current trends in Bangalore's real estate market?",
      ],
      trendingQuestions: [
        "Any suggestions for a property in Bangalore with possession after 2025?",
        "Which areas near Electronic City have promising real estate?",
        "Recommend a property in HSR Layout with good appreciation potential.",
        "Brand recommendations for a 2026 possession in North Bangalore?",
        "Key factors to consider when investing in real estate?",
        "Average cost insights for BTM Layout?",
        "Any prelaunch projects in Indiranagar for 2027 possession?",
        "Up-and-coming neighborhoods for real estate investment in Bangalore?",
        "Affordable, appreciating property in South Bangalore?",
        "Top amenities for a future-ready property in Jayanagar?",
        "Advice on commercial real estate in Bangalore?",
        "Top three projects in Bangalore right now?",
        "Property recommendation near Bannerghatta Road after 2025?",
        "Impact of cost of living on real estate investment in Bangalore?",
        "Real estate near upcoming tech parks in Electronic City?",
        "Your take on the current state of Bangalore's real estate market?",
        "Investment advice for Bangalore's real estate considering recent developments?",
      ],
    },
    {
      name: "LimeseGPT",
      slug: "limese-gpt",
      images: {
        bot: "/images/bot.svg",
        botdark: "/images/bot-dark.svg",
        user: "/images/user.svg",
        userdark: "/images/user-dark.svg",
      },
      app_id: process.env.APP_LIMESEGPT_ID,
      api_key: process.env.LIMESEGPT_API_KEY,
      defaultMessage: [
        "Welcome to LimeseGPT! I'm an AI skincare assistant that can help you with your skincare routine. I can recommend products, give you personalized skincare advice, and answer your skincare questions. I'm here to help you achieve your skincare goals!",
      ],
      defaultQuestions: [
        "✨ What are the best products for acne?",
        "🌱 What is the recommended skincare routine for Oily Skin?",
        "💡What are your return and Refund policies?",
      ],
      trendingQuestions: [
        "What are the best skincare products for sensitive skin?",
        "How can I determine my skin type?",
        "What is the most effective way to treat acne?",
        "Can you recommend a daily skincare routine for combination skin?",
        "What are the signs of aging, and how can I address them?",
        "How often should I use a face mask, and what type should I use for my skin?",
        "What ingredients should I look for in a moisturizer for dry skin?",
        "How can I protect my skin from sun damage?",
        "What are some natural remedies for glowing skin?",
        "Can you provide tips for reducing under-eye circles and puffiness?",
      ],
    },
  ],
};

module.exports = llmateConfig;
