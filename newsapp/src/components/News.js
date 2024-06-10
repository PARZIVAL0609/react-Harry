import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: { id: "associated-press", name: "Associated Press" },
      author: "DEMETRIS NELLAS",
      title:
        "The family of missing British TV presenter Michael Mosley confirm his death - The Associated Press",
      description:
        "The family of missing British TV presenter Dr. Michael Mosley have confirmed his body has been found on a Greek island. Mosley’s wife said Sunday in a statement that her husband had gone for a hike and took the wrong route and collapsed in a place where his b…",
      url: "https://apnews.com/article/greece-mosley-presenter-missing-body-found-4bf0111220b0c283bbd2837a628555f7",
      urlToImage:
        "https://dims.apnews.com/dims4/default/a7ed967/2147483647/strip/true/crop/3500x1969+0+183/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Ff9%2F5a%2Fd26be312d087a4f28d87cb6dfdb5%2F18282b0d40c5448a9bba0d5feacef9d6",
      publishedAt: "2024-06-09T16:22:00Z",
      content:
        "ATHENS (AP) The body of missing British TV presenter and author Dr. Michael Mosley was found on a Greek island Sunday morning after a days-long search, his family said.\r\nMosley, who went missing on t… [+4055 chars]",
    },
    {
      source: { id: null, name: "CBS Sports" },
      author: "Isabel Gonzalez",
      title:
        "2024 French Open men's final: Live updates, scores as Carlos Alcaraz, Alexander Zverev battle at Roland Garros - CBS Sports",
      description:
        "Two of the top men in the sport will face off with a major title on the line",
      url: "https://www.cbssports.com/tennis/news/2024-french-open-mens-final-live-updates-scores-as-carlos-alcaraz-alexander-zverev-battle-at-roland-garros/live/",
      urlToImage:
        "https://sportshub.cbsistatic.com/i/r/2024/06/08/890692e3-7d5e-45ed-8783-715256c1aea9/thumbnail/1200x675/be4f3e2700fd344d39c8bbd11701bab5/carlos-alcaraz-fist-pump-french.jpg",
      publishedAt: "2024-06-09T16:09:37Z",
      content:
        "It's time to crown a major champion. The 2024 French Open men's final is set for Sunday afternoon in Paris with all eyes on a tasty matchup between Carlos Alcaraz and Alexander Zverev. Both men are l… [+787 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Betsy Klein",
      title:
        "Biden’s national security adviser calls for ceasefire deal after Israeli hostage rescue mission - CNN",
      description:
        "National security adviser Jake Sullivan on Sunday said an “enduring ceasefire” deal between Israel and Hamas is “the only credible path forward” after an Israeli hostage rescue mission that Gazan officials say killed at least 274 people.",
      url: "https://www.cnn.com/2024/06/09/politics/jake-sullivan-israeli-hostage-rescue-operation/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2153568573.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2024-06-09T15:51:00Z",
      content:
        "National security adviser Jake Sullivan on Sunday said an enduring ceasefire deal between Israel and Hamas is the only credible path forward after an Israeli hostage rescue mission that Gazan officia… [+2930 chars]",
    },
    {
      source: { id: null, name: "BBC News" },
      author: null,
      title: "Narendra Modi takes oath as India's prime minister - BBC.com",
      description:
        "Modi's NDA alliance won the Indian election with a reduced margin while the opposition saw a resurgence.",
      url: "https://www.bbc.com/news/articles/c3ggnm7r75yo",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/1210/live/60746820-2677-11ef-a13a-0b8c563da930.jpg",
      publishedAt: "2024-06-09T15:00:00Z",
      content:
        "Narendra Modi has been sworn in as India's prime minister for a third term in a grand ceremony at the presidential palace in Delhi.\r\nThe leader of the Bharatiya Janata Party took his oath, saying he … [+2776 chars]",
    },
    {
      source: { id: "al-jazeera-english", name: "Al Jazeera English" },
      author: "Maziar Motamedi",
      title:
        "Ghalibaf among six approved to run in Iran’s presidential election - Al Jazeera English",
      description:
        "Parliament speaker Mohammad Bagher Ghalibaf and five other conservatives approved to run in snap vote on June 28.",
      url: "https://www.aljazeera.com/news/2024/6/9/ghalibaf-among-six-approved-to-run-in-irans-presidential-election",
      urlToImage:
        "https://www.aljazeera.com/wp-content/uploads/2024/06/2024-06-03T132854Z_411258863_RC2P38ANXQC6_RTRMADP_3_IRAN-ELECTION-1717938312.jpg?resize=1920%2C1440",
      publishedAt: "2024-06-09T14:33:47Z",
      content:
        "Tehran, Iran Six people, including parliament speaker Mohammad Bagher Ghalibaf, have been approved to run for the snap presidential election on June 28 following the death of President Ebrahim Raisi … [+3657 chars]",
    },
    {
      source: { id: null, name: "Variety" },
      author: "Rebecca Rubin",
      title:
        "Box Office: ‘Bad Boys 4’ Rides to $56 Million in Opening Weekend - Variety",
      description:
        "Sony’s “Bad Boys: Ride or Die,” the fourth installment in the Will Smith and Martin Lawrence-led buddy cop series, opened to $56 million.",
      url: "https://variety.com/2024/film/box-office/box-office-bad-boys-4-opening-weekend-will-smith-1236029917/",
      urlToImage:
        "https://variety.com/wp-content/uploads/2024/05/BBROD-SPE-res.jpg?w=1000&h=563&crop=1",
      publishedAt: "2024-06-09T14:24:00Z",
      content:
        "Turns out, Bad Boys are good for ticket sales. \r\nSony’s “Bad Boys: Ride or Die,” the fourth entry in the Will Smith and Martin Lawrence-led buddy cop series, started strong with $56 million from 3,88… [+4817 chars]",
    },
    {
      source: { id: "nfl-news", name: "NFL News" },
      author: null,
      title:
        "Chiefs WR Rashee Rice vows to 'mature' after tumultuous offseason - NFL.com",
      description:
        'Chiefs receiver Rashee Rice spoke Saturday for the first time since his tumultuous offseason, vowing to "mature" after a spring full of off-the-field issues.',
      url: "https://www.nfl.com/news/chiefs-wr-rashee-rice-vows-to-mature-after-tumultuous-offseason",
      urlToImage:
        "https://static.www.nfl.com/image/upload/t_editorial_landscape_12_desktop/league/fxmxgd8u6zd1h9xs1zo1",
      publishedAt: "2024-06-09T12:59:00Z",
      content: null,
    },
    {
      source: { id: "bloomberg", name: "Bloomberg" },
      author: "Mark Gurman",
      title:
        "Apple WWDC: AI Announcements Will Enable Home Robot, AR Glasses, Camera AirPods - Bloomberg",
      description:
        "Apple’s push into artificial intelligence will go beyond software and help enable a wave of next-generation devices. Also: What to expect from iOS 18, macOS 15 and other new operating systems; the Vision Pro international launch approaches; Netflix will stop …",
      url: "https://www.bloomberg.com/news/newsletters/2024-06-09/apple-wwdc-ai-announcements-will-enable-home-robot-ar-glasses-camera-airpods-lx7jem9f",
      urlToImage:
        "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iV4TdxlSM9.8/v0/1200x799.jpg",
      publishedAt: "2024-06-09T12:45:18Z",
      content:
        "Apples push into artificial intelligence will go beyond software and help enable a wave of next-generation devices. Also: What to expect from iOS 18, macOS 15 and other new operating systems; the Vis… [+236 chars]",
    },
    {
      source: { id: null, name: "Decrypt" },
      author: "Sander Lutz",
      title:
        "This Week on Crypto Twitter: Roaring Kitty Shows His Face, Gets Rekt - Decrypt",
      description:
        "GameStop had a surprise of its own on Friday, making the on-camera return of the famed meme stock influencer even more chaotic than even he expected.",
      url: "https://decrypt.co/234518/this-week-on-crypto-twitter-roaring-kitty-shows-his-face-gets-rekt",
      urlToImage:
        "https://cdn.decrypt.co/resize/1024/height/512/wp-content/uploads/2024/06/roaring-kitty-jun7-2024-gID_7.png",
      publishedAt: "2024-06-09T12:01:05Z",
      content:
        "Illustration by Mitchell Preffer for Decrypt\r\nThe revived saga of Keith Gill, aka Roaring Kitty, hit a crescendo this week when the meme stock influencer last seen in 2021 finally showed his face on … [+3425 chars]",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title: "AI Headset Looks Like Normal Glasses - CNET",
      description:
        "Stanford scientists have designed a pair of AR glasses that can show the wearer moving images in 3D.Subscribe to CNET on YouTube: https://www.youtube.com/cne...",
      url: "https://www.youtube.com/watch?v=tOWIM4aWSGc",
      urlToImage: "https://i.ytimg.com/vi/tOWIM4aWSGc/maxresdefault.jpg",
      publishedAt: "2024-06-09T12:00:53Z",
      content: null,
    },
    {
      source: { id: null, name: "ScienceAlert" },
      author: "The Conversation",
      title:
        "Can a Healthy Lifestyle 'Beat' Alzheimer's Like Documentary Claims? - ScienceAlert",
      description:
        "Two people diagnosed with Alzheimer's claim to have conquered the disease through simple lifestyle changes.",
      url: "https://www.sciencealert.com/can-a-healthy-lifestyle-beat-alzheimers-like-documentary-claims",
      urlToImage:
        "https://www.sciencealert.com/images/2024/06/old_person_running.jpg",
      publishedAt: "2024-06-09T11:31:17Z",
      content:
        "Two people diagnosed with Alzheimer's claim to have conquered the disease through simple lifestyle changes.\r\nDementia and Alzheimer's have been the leading killers in the UK for the last ten years, a… [+5543 chars]",
    },
    {
      source: { id: "fortune", name: "Fortune" },
      author: "Sydney Lake",
      title:
        "Baby boomers' favorite credit card Amex is now the 'lifestyle' card of choice for Gen Zers - Fortune",
      description: "Gen Z can’t resist a good deal—even if it’ll cost them.",
      url: "https://fortune.com/2024/06/09/american-express-gen-z-favorite-credit-card/",
      urlToImage:
        "https://fortune.com/img-assets/wp-content/uploads/2024/06/GettyImages-1692319613-e1717791507246.jpg?resize=1200,600",
      publishedAt: "2024-06-09T11:22:00Z",
      content:
        "Theres always been something elitist about whipping out an American Express card. For one, they often come with an annual fee that can feel hefty for many Americansand theyve also long been associate… [+5776 chars]",
    },
    {
      source: { id: null, name: "mlive.com" },
      author: "Holiday Mathis",
      title: "Holiday Mathis horoscopes for June 09, 2024 - MLive.com",
      description:
        "Mars Change: See Zodiac signs and horoscopes on 06/09/24 for today’s birthday, celebrity profiles (Johnny Depp) and Aquarius, Pisces, Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn.",
      url: "https://www.mlive.com/advice/2024/06/daily-horoscopes-for-june-09-2024.html-2",
      urlToImage:
        "https://www.mlive.com/resizer/v2/UWAF5BJHNJDALCXJLFCHCXO6LY.jpg?auth=101a6a133868713ada2ddd659ff57ad18d19d028db402157d4123b6116de8bfe&width=1280&quality=90",
      publishedAt: "2024-06-09T11:01:00Z",
      content:
        "HOROSCOPES BY HOLIDAY\r\nMars Change\r\nIf you live in a city over a certain population, many faces you see along your daily path are faces you wont see again, which may inspire you to make sure youve gi… [+4020 chars]",
    },
    {
      source: { id: null, name: "Forbes" },
      author: "Richard J. Chang",
      title: "Top Colleges For Billionaires - Forbes",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      url: "https://www.forbes.com/sites/richardjchang/2024/06/09/top-colleges-for-billionaires/",
      urlToImage:
        "https://imageio.forbes.com/specials-images/imageserve/66637ea3a253d8210c3dde33/0x0.jpg?format=jpg&crop=1920,1080,x0,y0,safe&height=900&width=1600&fit=bounds",
      publishedAt: "2024-06-09T10:30:00Z",
      content:
        "You dont have to be an Ivy Leaguer to make Forbes billionaires listbut it sure helps.\r\nIowe Columbia a lot, says Robert Kraft, the billionaire owner of the New England Patriots, who announced in Apri… [+16024 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title.slice(0, 45)}
                  description={element.description.slice(0, 88)}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
