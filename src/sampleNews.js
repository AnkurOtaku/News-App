const sampleNews = [
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "gglover@insider.com (George Glover)",
      "title": "These are the 2 main takeaways for investors from a year where stocks popped and the economy dodged a recession, according to UBS",
      "description": "Growth, inflation, and headline-grabbing datapoints will carry on driving returns next year, the Swiss bank said.",
      "url": "https://markets.businessinsider.com/news/stocks/stock-market-outlook-investing-lessons-growth-inflation-unemployment-rate-ubs-2023-12",
      "urlToImage": "https://i.insider.com/65798f8350edbc52a863a43d?width=1200&format=jpeg",
      "publishedAt": "2023-12-16T10:00:01Z",
  },
  {
      "source": {
          "id": null,
          "name": "NPR"
      },
      "author": "Suzanne Nuyen",
      "title": "Up First briefing: Top U.S. officials visit Mexico; 'Parasite' actor Lee Sun-kyun dies",
      "description": "U.S. officials travel to Mexico to talk immigration enforcement. South Korean actor Lee Sun-kyun, who played a rich entrepreneur in the Oscar-winning film Parasite, was found dead.",
      "url": "https://www.npr.org/2023/12/27/1221782480/up-first-briefing-top-u-s-officials-visit-mexico-parasite-actor-lee-sun-kyun-die",
      "urlToImage": "https://media.npr.org/assets/img/2023/12/27/ashcumba_wide-790011894acdb7a8d7c2153c5cea2d106823801f-s1400-c100.jpg",
      "publishedAt": "2023-12-27T13:02:20Z",
  },
  {
      "source": {
          "id": null,
          "name": "NPR"
      },
      "author": "Daniel Estrin",
      "title": "The shadowy Hamas leader behind the war against Israel",
      "description": "Yahya Sinwar, the leader of Hamas in the Gaza Strip, is widely believed to have helped mastermind the unprecedented Hamas attack that changed the course of Israeli-Palestinian history.",
      "url": "https://www.npr.org/2023/12/03/1216138367/hamas-gaza-leader-yahya-sinwar",
      "urlToImage": "https://media.npr.org/assets/img/2023/11/30/gettyimages-1251823752_wide-ade7939a617803c67468da69cc9fb89176560b15-s1400-c100.jpg",
      "publishedAt": "2023-12-03T11:01:22Z",
  },
  {
      "source": {
          "id": null,
          "name": "NPR"
      },
      "author": "Ari Daniel",
      "title": "Ndelika Mandela on 'climate apartheid,' how to stay hopeful and her granddad's legacy",
      "description": "The eldest grandchild of Nelson Mandela had a busy week — speaking at the climate summit COP28 about the need to aid the Global South and throwing a party to mark the 10th anniversary of his passing.",
      "url": "https://www.npr.org/sections/goatsandsoda/2023/12/08/1217823960/ndelika-mandela-nelson-mandela-climate-apartheid-hope-legacy",
      "urlToImage": "https://media.npr.org/assets/img/2023/12/08/ndilekamandeka_zoom_wide-42fa29d5e6e386b33157ede260c89ae2de2e11ef-s1400-c100.jpg",
      "publishedAt": "2023-12-08T16:44:48Z",
  },
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "Jennifer Sor",
      "title": "Collapsed US money supply is a threat to employment, growth, and inflation, Wharton professor Jeremy Siegel says",
      "description": "\"Zero percent growth of money supply means unemployment, recession, and deflation,\" Wharton professor Jeremy Siegel warned.",
      "url": "https://www.businessinsider.com/money-supply-recession-unemployment-inflation-us-economy-outlook-jeremy-siegel-2023-12",
      "urlToImage": "https://i.insider.com/61bc7956b126d50018864c22?width=1200&format=jpeg",
      "publishedAt": "2023-12-04T15:28:10Z",
  },
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "Madison Hoff",
      "title": "The job market got a little hotter in November",
      "description": "The unemployment rate fell from 3.9% to 3.7% in November. November's job growth was greater than October's.",
      "url": "https://www.businessinsider.com/unemployment-rate-job-growth-november-labor-market-2023-12",
      "urlToImage": "https://i.insider.com/6570da347a3c8094d5da6469?width=1200&format=jpeg",
      "publishedAt": "2023-12-08T13:37:31Z",
  },
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "Jennifer Sor",
      "title": "Fed rate cuts will be even more aggressive than expected in 2024 as unemployment surges past 5%, economist says",
      "description": "The Fed will slash interest rates \"much more\" than expected as the economy will weaken faster in 2024, Pantheon Macro said.",
      "url": "https://www.businessinsider.com/fed-rate-cuts-2024-outlook-us-economy-unemployment-inflation-recession-2023-12",
      "urlToImage": "https://i.insider.com/658048e4a79e5746976a6961?width=1200&format=jpeg",
      "publishedAt": "2023-12-18T14:28:42Z",
  },
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "Neil Dutta",
      "title": "After 3 years of pain, America has finally achieved economic nirvana",
      "description": "With the job market holding up and inflation cooling off, 2024 is set to be a great year for the stock market.",
      "url": "https://www.businessinsider.com/2024-outlook-us-economy-stock-market-jobs-inflation-interest-rates-2023-11",
      "urlToImage": "https://i.insider.com/656a336747f9ecb37d893b08?width=1200&format=jpeg",
      "publishedAt": "2023-12-03T11:22:01Z",
  },
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "Eliza Relman",
      "title": "The nation's capital is struggling more than any state in the country to recover pandemic job losses",
      "description": "Many remote workers have left cities like Washington, San Francisco, and New York and moved to more affordable, warmer locales.",
      "url": "https://www.businessinsider.com/dc-hawaii-rhode-island-lag-nation-pandemic-job-gains-losses-2023-12",
      "urlToImage": "https://i.insider.com/6581c94f1c5c7b8c9a09b959?width=1200&format=jpeg",
      "publishedAt": "2023-12-24T11:23:01Z",
  },
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "Beatrice Nolan",
      "title": "The best states to find a job, ranked",
      "description": "Job-seekers in some states may have it easier than others, according to a new study.",
      "url": "https://www.businessinsider.com/the-best-and-worst-states-to-find-a-job-ranked-2023-11",
      "urlToImage": "https://i.insider.com/6568725847f9ecb37d888bf7?width=1200&format=jpeg",
      "publishedAt": "2023-12-04T13:14:05Z",
  },
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "Jacob Zinkula,Madison Hoff",
      "title": "It's not just you. It's getting harder to switch jobs.",
      "description": "It can be tough finding a job right now, especially in corporate or for work that could be done remotely.",
      "url": "https://www.businessinsider.com/job-search-switch-harder-to-get-job-hiring-labor-market-2023-12",
      "urlToImage": "https://i.insider.com/6571f9fe0ec98e92f74d28b2?width=1200&format=jpeg",
      "publishedAt": "2023-12-10T10:22:02Z",
  },
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "Polly Thompson",
      "title": "Chinese garlic is a threat to US national security and a 'severe public health concern,' senator says",
      "description": "Florida Senator Rick Scott urged the Department of Commerce to open an investigation into the security risk posed by all forms of Chinese-imported garlic.",
      "url": "https://www.businessinsider.com/rick-scott-chinese-garlic-grown-sewage-threatens-national-security-2023-12",
      "urlToImage": "https://i.insider.com/6575a20f58e7c0c29a2b7261?width=1200&format=jpeg",
      "publishedAt": "2023-12-10T14:49:27Z",
  },
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "Aruni Soni",
      "title": "The US economy is in a Goldilocks period, and the Fed has a 'loaded gun' it can use if conditions worsen, Apollo co-president says",
      "description": "Apollo Asset Management's James Zelter said the \"Fed put\" is back, as markets are betting that the central bank will step in if the economy worsens.",
      "url": "https://www.businessinsider.com/fed-rate-cuts-outlook-us-economy-policy-inflation-great-recession-2023-12",
      "urlToImage": "https://i.insider.com/656f341d0ec98e92f74c19e1?width=1200&format=jpeg",
      "publishedAt": "2023-12-05T15:17:29Z",
  },
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "John L. Dorman",
      "title": "A frustrated Biden asked close aides what his campaign was doing to combat his low poll numbers and grumbled that his economic message wasn't boosting him: report",
      "description": "A recent NYT/Siena poll revealed that 62% of voters in six key swing states described the economy as either \"fair\" or \"poor,\" a challenge for Biden.",
      "url": "https://www.businessinsider.com/biden-reelection-low-poll-numbers-economy-trump-swing-voters-2023-12",
      "urlToImage": "https://i.insider.com/65806c5d1c5c7b8c9a093bd0?width=1200&format=jpeg",
      "publishedAt": "2023-12-18T16:29:33Z",
  },
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "Phil Rosen",
      "title": "RBC says these 6 reasons explain why a recession will strike in the first half of 2024",
      "description": "The Wall Street firm assigned a 70% probability for a downturn next year, and it's \"expected to inflict very real pain on businesses and households.\"",
      "url": "https://www.businessinsider.com/recession-outlook-economy-markets-rbc-capital-investors-2024-finance-2023-12",
      "urlToImage": "https://i.insider.com/658325bccefc010bea25a700?width=1200&format=jpeg",
      "publishedAt": "2023-12-26T12:24:01Z",
  },
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "Phil Rosen",
      "title": "Russia's central bank pushes interest rates to 16% to try and cool war-time inflation",
      "description": "The central bank said bringing inflation to its target in 2024 means \"tight monetary conditions will be maintained in the economy for a long period.\"",
      "url": "https://www.businessinsider.com/russia-economy-central-bank-hikes-interest-rates-war-inflation-markets-2023-12",
      "urlToImage": "https://i.insider.com/657c54200ec98e92f74fdeec?width=1200&format=jpeg",
      "publishedAt": "2023-12-15T14:22:45Z",
  },
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "Phil Rosen",
      "title": "The Fed will spark a 'seismic moment' if it cuts rates, and should wait for overwhelming evidence the economy is slowing, Larry Summers says",
      "description": "While it looks a bit more likely the US can avoid a recession, the former Treasury chief said he isn't confident a soft landing will happen in 2024.",
      "url": "https://www.businessinsider.com/fed-interest-rate-cuts-larry-summers-treasury-economy-recession-investors-2023-12",
      "urlToImage": "https://i.insider.com/657351a87a3c8094d5db179e?width=1200&format=jpeg",
      "publishedAt": "2023-12-08T18:30:31Z",
  },
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "George Glover",
      "title": "'The great disinflation' will set the stage for 5 Fed rate cuts in 2024, Goldman Sachs says",
      "description": "The bank's latest prediction comes after central bank chair Jerome Powell's dovish comments sparked a stock-market surge.",
      "url": "https://www.businessinsider.com/stock-market-outlook-disinflation-federal-reserve-rate-cuts-goldman-sachs-2023-12",
      "urlToImage": "https://i.insider.com/65802c9e50edbc52a8652499?width=1200&format=jpeg",
      "publishedAt": "2023-12-18T13:33:55Z",
  },
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "Noah Sheidlower",
      "title": "9 things that will define the economy in 2024",
      "description": "Inflation is almost at the Fed's 2% inflation target, and interest rates are expected to fall in 2024: These will define the economy in 2024.",
      "url": "https://www.businessinsider.com/2024-economic-outlook-forecast-state-of-the-economy-recession-inflation-2023-12",
      "urlToImage": "https://i.insider.com/64c15cdb9440b70019266b37?width=1200&format=jpeg",
      "publishedAt": "2023-12-24T10:52:01Z",
  },
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "Noah Sheidlower",
      "title": "Here's why wealthy Americans say it's getting harder for them to get richer",
      "description": "Two-thirds of wealthy Americans with investable assets over $500,000 don't feel wealthy thanks to inflation, climate change, and economic uncertainty.",
      "url": "https://www.businessinsider.com/how-to-get-rich-wealthy-americans-inflation-climate-change-investments-2023-12",
      "urlToImage": "https://i.insider.com/658b093bab6f2ebb11f6e5e8?width=1200&format=jpeg",
      "publishedAt": "2023-12-26T18:21:37Z",
  },
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "Ayelet Sheffey,Madison Hoff",
      "title": "The Fed's last big decision of 2023 could set Americans up for some relief next year",
      "description": "The Federal Reserve is expected to continue its pause on interest rate hikes this week as Americans hope for rate cuts going into 2024.",
      "url": "https://www.businessinsider.com/interest-rates-will-fed-cut-or-pause-inflation-recession-outlook-2023-12",
      "urlToImage": "https://i.insider.com/64b119599751e300192a1221?width=1200&format=jpeg",
      "publishedAt": "2023-12-12T14:31:58Z",
  },
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "Phil Rosen",
      "title": "4 reasons why China's economy will keep struggling in 2024",
      "description": "An ongoing property-sector crisis, weakening domestic demand, and an eroding labor market all pose headwinds to the world's second-largest economy.",
      "url": "https://www.businessinsider.com/china-economy-outlook-2024-beijing-investors-real-estate-property-markets-2023-12",
      "urlToImage": "https://i.insider.com/6581a1dba79e5746976ad978?width=1200&format=jpeg",
      "publishedAt": "2023-12-25T10:17:01Z",
  },
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "Jacob Zinkula",
      "title": "The AI boom could force you to enter the gig economy",
      "description": "Generative AI's adoption could lead to even more Americans working in the gig economy.",
      "url": "https://www.businessinsider.com/generative-ai-future-work-gig-economy-chatgpt-artificial-intellgience-jobs-2023-12",
      "urlToImage": "https://i.insider.com/657b66f550edbc52a8646b4d?width=1200&format=jpeg",
      "publishedAt": "2023-12-26T11:03:01Z",
  },
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "Cork Gaines",
      "title": "Young people are flocking to Florida. It's boosting the state's economy, but living there comes with hidden costs.",
      "description": "Young people are being lured to Florida by weather, no state income tax, and job opportunities. However, the state can also be a financial burden.",
      "url": "https://www.businessinsider.com/why-are-people-moving-florida-home-prices-cost-of-living-2023-12",
      "urlToImage": "https://i.insider.com/65807e0da79e5746976a8548?width=1200&format=jpeg",
      "publishedAt": "2023-12-19T11:03:01Z",
  },
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "Tim Paradis,Alex Nicoll",
      "title": "ESG backlash dominated headlines in 2023, but it's still 'quietly' reshaping industries behind the scenes",
      "description": "Many companies are still tackling environmental, social, and governance issues despite criticism. The efforts can help attract and keep workers.",
      "url": "https://www.businessinsider.com/companies-still-doing-esg-work-despite-politics-criticism-2023-11",
      "urlToImage": "https://i.insider.com/656a314f58e7c0c29a28dd5c?width=1200&format=jpeg",
      "publishedAt": "2023-12-06T15:01:45Z",
  },
  {
      "source": {
          "id": null,
          "name": "ReadWrite"
      },
      "author": "Rachael Davis",
      "title": "New EU gig worker rules would see millions receive employment benefits",
      "description": "The European Union (EU) has provisionally approved rules to improve protections and benefits for gig economy workers, largely aimed at […]\nThe post New EU gig worker rules would see millions receive employment benefits appeared first on ReadWrite.",
      "url": "https://readwrite.com/new-eu-gig-worker-rules-would-see-millions-receive-employment-benefits/",
      "urlToImage": "https://readwrite.com/wp-content/uploads/2023/12/Food-Delivery-Gig-Workers.jpg",
      "publishedAt": "2023-12-14T16:34:58Z",
  },
  {
      "source": {
          "id": "time",
          "name": "Time"
      },
      "author": "CHRISTOPHER RUGABER / AP",
      "title": "Federal Reserve Keeps Key Interest Rate Unchanged",
      "description": "Policymakers also signaled that they expect to make three quarter-point cuts to their benchmark interest rate next year.",
      "url": "https://time.com/6461016/federal-reserve-keeps-key-interest-rate/",
      "urlToImage": "https://api.time.com/wp-content/uploads/2023/12/interest.jpg?quality=85",
      "publishedAt": "2023-12-13T19:27:30Z",
  },
  {
      "source": {
          "id": "time",
          "name": "Time"
      },
      "author": "Calvin Schermerhorn / Made by History",
      "title": "Ronald Reagan’s Policies Continue to Exacerbate the Racial Wealth Gap",
      "description": "Ronald Reagan's economic policies exacerbated the racial wealth gap— and they've guided all his successors.",
      "url": "https://time.com/6334291/racial-wealth-gap-reagan-history/",
      "urlToImage": "https://api.time.com/wp-content/uploads/2023/11/reagan.jpg?quality=85",
      "publishedAt": "2023-12-04T16:57:00Z",
  },
  {
      "source": {
          "id": null,
          "name": "HuffPost"
      },
      "author": "AP",
      "title": "Federal Reserve On Cusp Of What Some Thought Impossible",
      "description": "It was the most painful inflation Americans had experienced since 1981, when “The Dukes of Hazzard” and “The Jeffersons” were topping the TV charts.",
      "url": "https://www.huffpost.com/entry/ap-us-federal-reserve-inflation-beaten_n_657e0abbe4b0e142c0bde3e1",
      "urlToImage": "https://img.huffingtonpost.com/asset/657e0aeb2200005500ad39fe.jpeg?ops=1200_630",
      "publishedAt": "2023-12-16T20:40:23Z",
  },
  {
      "source": {
          "id": "abc-news",
          "name": "ABC News"
      },
      "author": "PAUL WISEMAN AP economics writer",
      "title": "Weekly US unemployment claims rise slightly but job market remains strong as inflation eases",
      "description": "The number of Americans applying for unemployment benefits rose slightly last week but still remained at historically low levels despite high interest rates",
      "url": "https://abcnews.go.com/Business/wireStory/us-unemployment-claims-rise-slightly-remain-low-levels-105838130",
      "urlToImage": "https://i.abcnewsfe.com/a/450eb0f7-7f14-4f3a-a2fa-de5bf806bdbc/wirestory_50517b44ab237e81376d9c5b3872309d_16x9.jpg?w=992",
      "publishedAt": "2023-12-21T14:18:45Z",
  },
  {
      "source": {
          "id": "abc-news",
          "name": "ABC News"
      },
      "author": "CHRISTOPHER RUGABER AP economics writer",
      "title": "Federal Reserve may shed light on prospects for rate cuts in 2024 while keeping key rate unchanged",
      "description": "Will the Federal Reserve cut its key interest rate sometime next year — and, if so, by how much",
      "url": "https://abcnews.go.com/Business/wireStory/federal-reserve-shed-light-prospects-rate-cuts-2024-105611342",
      "urlToImage": "https://i.abcnewsfe.com/a/65f4172f-6ca0-4641-8be2-d14bc7b6da50/wirestory_d95b976ef2194cea8516f21c98f62ded_16x9.jpg?w=992",
      "publishedAt": "2023-12-13T05:20:27Z",
  },
  {
      "source": {
          "id": "abc-news",
          "name": "ABC News"
      },
      "author": "Max Zahn",
      "title": "Where is the US economy headed in 2024?",
      "description": "Forecasters offered reasons for optimism but risks abound.",
      "url": "https://abcnews.go.com/Business/economy-defied-warnings-disaster-headed-2024/story?id=105916947",
      "urlToImage": "https://i.abcnewsfe.com/a/9b6618fa-f5a9-4e59-b19c-880d1fa9902e/shopping-economy-gty-lv-231226_1703625678217_hpMain_16x9.jpg?w=992",
      "publishedAt": "2023-12-27T11:32:51Z",
  },
  {
      "source": {
          "id": null,
          "name": "The New Yorker"
      },
      "author": "John Cassidy",
      "title": "The Lessons of Pandemic Inflation",
      "description": "John Cassidy writes about how inflation, which was partly caused by supply-chain disruptions during the pandemic, continues to improve and what we can learn from it.",
      "url": "https://www.newyorker.com/news/our-columnists/the-lessons-of-pandemic-inflation",
      "urlToImage": "https://media.newyorker.com/photos/656f5acb810176153b41c722/16:9/w_1280,c_limit/Cassidy-Inflation-Dec-2023.jpg",
      "publishedAt": "2023-12-05T19:31:11Z",
  },
  {
      "source": {
          "id": null,
          "name": "The New Yorker"
      },
      "author": "Kathryn Schulz",
      "title": "Am I One of the Last Living Relatives of a Literary Legend?",
      "description": "Earlier this year, Kathryn Schulz picked up “Bruno Schulz: An Artist, a Murder, and the Hijacking of History,” a new biography by Benjamin Balint about a brilliant artist murdered by the Nazis in 1942. In it, she found connections to her own family history an…",
      "url": "https://www.newyorker.com/magazine/2023/12/25/bruno-schulz-an-artist-a-murder-and-the-hijacking-of-history-benjamin-balint-book-review",
      "urlToImage": "https://media.newyorker.com/photos/6579fd267c2be827930bc14b/16:9/w_1280,c_limit/231225_r43051_rd.jpg",
      "publishedAt": "2023-12-18T11:00:00Z",
  },
  {
      "source": {
          "id": null,
          "name": "The Atlantic"
      },
      "author": "Hussein Ibish",
      "title": "Why Trump Won’t Win",
      "description": "His threats to democracy make him dangerous. They also make him a weak candidate.",
      "url": "https://www.theatlantic.com/ideas/archive/2023/12/trump-2024-win-why-unlikely/676354/?utm_source=feed",
      "urlToImage": null,
      "publishedAt": "2023-12-15T12:00:00Z",
  },
  {
      "source": {
          "id": null,
          "name": "MarketWatch"
      },
      "author": "Jeremy Binckes",
      "title": "Remote work offers less scope for advancement but also less stress, survey finds",
      "description": "In-office and hybrid workers saw more raises and promotions than remote workers in 2023, but also reported less job satisfaction.",
      "url": "https://www.marketwatch.com/story/remote-work-offers-less-scope-for-advancement-but-also-less-stress-survey-finds-4f33e982",
      "urlToImage": "https://images.mktw.net/im-67081962/social",
      "publishedAt": "2023-12-22T14:58:00Z",
  },
  {
      "source": {
          "id": null,
          "name": "MarketWatch"
      },
      "author": "Louis Goss",
      "title": ": Markets now expecting 100 basis points of U.K. rate cuts next year, as economy slows unexpectedly",
      "description": "Fresh data showing a U.K. growth slowdown has money markets pricing in 100 basis points of cuts next year.",
      "url": "https://www.marketwatch.com/story/markets-now-expecting-100-basis-points-of-u-k-rate-cuts-next-year-as-economy-slows-unexpectedly-6d32a94e",
      "urlToImage": "https://images.mktw.net/im-217724/social",
      "publishedAt": "2023-12-13T14:51:00Z",
  },
  {
      "source": {
          "id": null,
          "name": "MarketWatch"
      },
      "author": "MarketWatch",
      "title": "U.S. inflation falls by more than expected in November, bolsters case for lower interest rates from the Fed",
      "description": "The U.S. inflation rate, based on the Federal Reserve’s preferred personal consumption expenditure index, fell in November for the first time since 2020 and indicated that price pressures continue to subside.",
      "url": "https://www.marketwatch.com/story/u-s-inflation-falls-by-more-than-expected-in-november-bolsters-case-for-lower-interest-rates-from-the-fed-1acd14de",
      "urlToImage": "https://images.mktw.net/im-28172751/social",
      "publishedAt": "2023-12-22T21:29:00Z",
  },
  {
      "source": {
          "id": null,
          "name": "MarketWatch"
      },
      "author": "Vivien Lou Chen",
      "title": "Resurgent ‘animal spirits’ in financial markets may undermine Fed’s inflation battle, Nomura says",
      "description": "A contrarian viewpoint is emerging that challenges investors' recent optimism over the Federal Reserve's ability to bring inflation down to 2% without a U.S. recession or a big rise in unemployment.",
      "url": "https://www.marketwatch.com/story/resurgent-animal-spirits-in-financial-markets-may-undermine-feds-inflation-battle-nomura-says-6c8f78b6",
      "urlToImage": "https://images.mktw.net/im-269212/social",
      "publishedAt": "2023-12-15T19:08:00Z",
  },
  {
      "source": {
          "id": null,
          "name": "MarketWatch"
      },
      "author": "Jeffry Bartash",
      "title": "Jobless claims inch up to 205,000. Layoffs in the U.S. hover near record low.",
      "description": "The number of Americans who applied for unemployment benefits last week inched up to 205,000, indicating layoffs remain low during the holiday season and jobs aren't especially hard to find.",
      "url": "https://www.marketwatch.com/story/jobless-claims-inch-up-to-205-000-layoffs-in-the-u-s-hover-near-record-low-8bcce19f",
      "urlToImage": "https://images.mktw.net/im-70379145/social",
      "publishedAt": "2023-12-21T13:36:00Z",
  },
  {
      "source": {
          "id": null,
          "name": "MarketWatch"
      },
      "author": "Jamie Chisholm",
      "title": "Bond Report: Ten-year Treasury yields trade around 4.20% ahead of ADP jobs report",
      "description": "Bond yields moved higher early Wednesday as traders awaited another update on the U.S. jobs market.What’s happening The yield on the 2-year Treasury added...",
      "url": "https://www.marketwatch.com/story/ten-year-treasury-yields-trade-around-4-20-ahead-of-adp-jobs-report-203ee271",
      "urlToImage": "https://mw3.wsj.net/mw5/content/logos/mw_logo_social.png",
      "publishedAt": "2023-12-06T11:47:00Z",
  },
  {
      "source": {
          "id": null,
          "name": "Cracked.com"
      },
      "author": "Tara Ariano",
      "title": "The 35 Greatest Holiday Sitcom Episodes Ever",
      "description": "By Tara Ariano Published: December 04th, 2023",
      "url": "https://www.cracked.com/article_40392_the-35-greatest-holiday-sitcom-episodes-ever.html",
      "urlToImage": "https://s3.crackedcdn.com/phpimages/article/4/3/8/975438.jpg",
      "publishedAt": "2023-12-04T16:00:00Z",
  }
];

export default sampleNews;