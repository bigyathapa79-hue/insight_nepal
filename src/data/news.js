const news = [
  {
    id: 1,
    slug: "nepal-wins-cricket-series",
    title: "Nepal Wins Historic Cricket Series",
    image: "/images/news/news1.png",
    category: "Sports",
    author: "Bigya Thapa",
    date: "29 July 2026",
    description:
      "Nepal secured a memorable victory in the final match to win the series.",
    content:
      "Nepal's players delivered an outstanding performance, earning praise from fans across the country.",
  },
  {
    id: 2,
    slug: "new-tech-park-opens-kathmandu",
    title: "New Technology Park Opens in Kathmandu",
    image: "/images/news/news2.png",
    category: "Technology",
    author: "Aarav Sharma",
    date: "28 July 2026",
    description:
      "A modern technology park has been inaugurated to support startups and innovation.",
    content:
      "The new technology park offers coworking spaces, training centers, and research facilities for young entrepreneurs.",
  },
  {
    id: 3,
    slug: "government-announces-budget-plan",
    title: "Government Announces New Budget Plan",
    image: "/images/news/news3.jpeg",
    category: "Politics",
    author: "Sita Rai",
    date: "28 July 2026",
    description:
      "The government introduced a new budget focusing on infrastructure and education.",
    content:
      "Officials stated that the budget prioritizes roads, schools, healthcare, and employment opportunities.",
  },
  {
    id: 4,
    slug: "everest-tourism-sees-growth",
    title: "Everest Tourism Sees Record Growth",
    image: "/images/news/news4.webp",
    category: "Tourism",
    author: "Ram Gurung",
    date: "27 July 2026",
    description:
      "Tourist arrivals in the Everest region increased significantly this season.",
    content:
      "Hotels, trekking agencies, and local businesses reported strong visitor numbers and positive economic impact.",
  },
  {
    id: 5,
    slug: "nepal-launches-green-energy-project",
    title: "Nepal Launches Major Green Energy Project",
    image: "/images/news/news5.webp",
    category: "Business",
    author: "Prakash Adhikari",
    date: "27 July 2026",
    description:
      "A renewable energy project aims to increase clean electricity production.",
    content:
      "The initiative focuses on hydropower and solar energy to support sustainable development.",
  },
  {
    id: 6,
    slug: "national-football-league-begins",
    title: "National Football League Begins This Week",
    image: "/images/news/news6.svg",
    category: "Sports",
    author: "Rohan Karki",
    date: "26 July 2026",
    description:
      "Football clubs from across Nepal are ready for the new season.",
    content:
      "Fans are excited as teams prepare for competitive matches in the national league.",
  },
  {
    id: 7,
    slug: "students-win-robotics-competition",
    title: "Nepali Students Win International Robotics Competition",
    image: "/images/news/news7.png",
    category: "Education",
    author: "Nisha Shrestha",
    date: "26 July 2026",
    description:
      "A team of students earned first place with an innovative robotics project.",
    content:
      "The competition highlighted creativity, teamwork, and engineering skills among young participants.",
  },
  {
    id: 8,
    slug: "health-campaign-expands-rural-areas",
    title: "Health Campaign Expands to Rural Areas",
    image: "/images/news/news8.png",
    category: "Health",
    author: "Milan KC",
    date: "25 July 2026",
    description:
      "Healthcare teams are providing free medical checkups in remote communities.",
    content:
      "Doctors and volunteers aim to improve healthcare access through nationwide outreach programs.",
  },
  {
    id: 9,
    slug: "new-airport-terminal-opens",
    title: "New Airport Terminal Officially Opens",
    image: "/images/news/news9.webp",
    category: "Nepal",
    author: "Kiran Thapa",
    date: "25 July 2026",
    description:
      "The new terminal is expected to improve passenger services and capacity.",
    content:
      "Officials believe the expansion will strengthen tourism and international connectivity.",
  },
  {
    id: 10,
    slug: "local-art-festival-attracts-visitors",
    title: "Local Art Festival Attracts Thousands of Visitors",
    image: "/images/news/news10.jpg",
    category: "Culture",
    author: "Suman Lama",
    date: "24 July 2026",
    description:
      "Artists showcased paintings, sculptures, and traditional crafts.",
    content:
      "Visitors enjoyed cultural performances and exhibitions celebrating Nepal's artistic heritage.",
  },
  {
    id: 11,
    slug: "ai-startups-growing-nepal",
    title: "AI Startups Continue to Grow in Nepal",
    image: "/images/news/news11.jpg",
    category: "Technology",
    author: "Anisha Koirala",
    date: "24 July 2026",
    description:
      "Artificial intelligence startups are attracting investors and skilled professionals.",
    content:
      "Experts believe AI will play a major role in Nepal's digital transformation.",
  },
  {
    id: 12,
    slug: "basketball-championship-finals",
    title: "National Basketball Championship Reaches Finals",
    image: "/images/news/news12.jpg",
    category: "Sports",
    author: "Bibek Chaudhary",
    date: "23 July 2026",
    description:
      "The top two teams are preparing for an exciting championship match.",
    content:
      "Fans are expecting a competitive final after an impressive tournament.",
  },
  {
    id: 13,
    slug: "new-library-opens-city-center",
    title: "Modern Public Library Opens in City Center",
    image: "/images/news/news13.jpeg",
    category: "Education",
    author: "Sarita Bhandari",
    date: "23 July 2026",
    description:
      "The library offers digital resources, study areas, and community events.",
    content:
      "Students and researchers welcomed the new facility for learning and collaboration.",
  },
  {
    id: 14,
    slug: "mountain-cleanup-campaign-success",
    title: "Mountain Cleanup Campaign Collects Tons of Waste",
    image: "/images/news/news14.webp",
    category: "Environment",
    author: "Deepak Magar",
    date: "22 July 2026",
    description: "Volunteers removed waste from popular trekking routes.",
    content:
      "Environmental groups emphasized the importance of sustainable tourism and conservation.",
  },
  {
    id: 15,
    slug: "film-festival-premieres-new-movies",
    title: "Film Festival Premieres Award-Winning Movies",
    image: "/images/news/news15.png",
    category: "Entertainment",
    author: "Rita Tamang",
    date: "22 July 2026",
    description:
      "Filmmakers presented documentaries and feature films to enthusiastic audiences.",
    content:
      "The festival celebrated creativity and encouraged young filmmakers to share their work.",
  },
  {
    id: 16,
    slug: "agriculture-program-supports-farmers",
    title: "New Agriculture Program Supports Local Farmers",
    image: "/images/news/news16.jpeg",
    category: "Business",
    author: "Hari Pokharel",
    date: "21 July 2026",
    description:
      "Farmers will receive training, equipment, and financial assistance.",
    content:
      "The initiative aims to increase productivity and improve rural livelihoods.",
  },
  {
    id: 17,
    slug: "science-fair-highlights-innovation",
    title: "Science Fair Highlights Student Innovation",
    image: "/images/news/news17.webp",
    category: "Science",
    author: "Sneha Gautam",
    date: "21 July 2026",
    description:
      "Students displayed creative scientific projects and experiments.",
    content:
      "Teachers praised participants for their curiosity and practical problem-solving skills.",
  },
  {
    id: 18,
    slug: "city-marathon-draws-athletes",
    title: "City Marathon Draws Record Number of Athletes",
    image: "/images/news/news18.jpg",
    category: "Sports",
    author: "Roshan Bhatt",
    date: "20 July 2026",
    description:
      "Thousands of runners participated in the annual city marathon.",
    content:
      "The event promoted fitness, tourism, and community participation.",
  },
  {
    id: 19,
    slug: "fashion-show-promotes-local-designers",
    title: "Fashion Show Promotes Emerging Local Designers",
    image: "/images/news/news19.jpg",
    category: "Lifestyle",
    author: "Puja Khatri",
    date: "20 July 2026",
    description:
      "Designers presented modern collections inspired by Nepali culture.",
    content:
      "The event encouraged young designers to showcase their talent on a national platform.",
  },
  {
    id: 20,
    slug: "community-volunteers-plant-trees",
    title: "Community Volunteers Plant Thousands of Trees",
    image: "/images/news/news20.jpg",
    category: "Environment",
    author: "Aakash Joshi",
    date: "19 July 2026",
    description:
      "A nationwide campaign encouraged citizens to plant trees for a greener future.",
    content:
      "Volunteers from schools, organizations, and local communities participated in the environmental initiative.",
  },
  {
    id: 21,
    slug: "government-announces-new-economic-policy",
    title: "Government Announces New Economic Policy",
    image: "/images/news/news21.jpg",
    category: "Politics",
    author: "Bigya Thapa",
    date: "30 July 2026",
    description:
      "The government introduced a new economic policy aimed at boosting investment and creating employment opportunities.",
    content:
      "During a press conference in Kathmandu, government officials unveiled a comprehensive economic policy focused on attracting foreign investment, supporting local businesses, improving infrastructure, and generating new jobs. The policy also includes measures to strengthen Nepal's economy and encourage sustainable development.",
  },
  {
    id: 22,
    slug: "parliament-passes-education-reform-bill",
    title: "Parliament Passes New Education Reform Bill",
    image: "/images/news/news22.jpg",
    category: "Politics",
    author: "Sanjay Sharma",
    date: "28 July 2026",
    description:
      "Lawmakers approved a new education reform bill aimed at improving the quality of schools across Nepal.",
    content:
      "The new legislation focuses on curriculum modernization, teacher training, and better access to quality education in rural communities. Officials believe the reforms will strengthen the country's education system.",
  },
  {
    id: 23,
    slug: "election-commission-announces-local-election-date",
    title: "Election Commission Announces Local Election Date",
    image: "/images/news/news23.jpg",
    category: "Politics",
    author: "Rita Karki",
    date: "27 July 2026",
    description:
      "The Election Commission has officially announced the schedule for the upcoming local elections.",
    content:
      "Election officials urged political parties to begin preparations while encouraging citizens to participate in the democratic process. Security arrangements and voter awareness campaigns have also been planned.",
  },
  {
    id: 24,
    slug: "prime-minister-meets-provincial-leaders",
    title: "Prime Minister Meets Provincial Leaders",
    image: "/images/news/news24.jpeg",
    category: "Politics",
    author: "Anil Gautam",
    date: "26 July 2026",
    description:
      "Provincial leaders held discussions with the Prime Minister on development priorities and public services.",
    content:
      "The meeting focused on strengthening coordination between the federal and provincial governments, improving infrastructure projects, and addressing challenges faced by local administrations.",
  },
  {
    id: 25,
    slug: "government-launches-national-digital-governance-plan",
    title: "Government Launches National Digital Governance Plan",
    image: "/images/news/news25.png",
    category: "Politics",
    author: "Nisha Adhikari",
    date: "25 July 2026",
    description:
      "A new digital governance strategy aims to make public services faster, more transparent, and easier to access.",
    content:
      "The government announced plans to expand online public services, improve cybersecurity, and digitize administrative processes to increase efficiency and reduce paperwork for citizens.",
  },
];

export default news;
