const categories = [
  {
    title: "Technology",
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=384&h=240&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=384&h=240&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=384&h=240&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=384&h=240&fit=crop&auto=format&q=80",
    ],
    badges: ["Google", "Microsoft", "Apple", "Amazon", "Meta", "Netflix"],
  },
  {
    title: "Health",
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=384&h=240&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=384&h=240&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=384&h=240&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=384&h=240&fit=crop&auto=format&q=80",
    ],
    badges: [
      "Pfizer",
      "Johnson & Johnson",
      "Moderna",
      "Fitbit",
      "Peloton",
      "Abbott",
    ],
  },
  {
    title: "Finance",
    images: [
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=384&h=240&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=384&h=240&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=384&h=240&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=384&h=240&fit=crop&auto=format&q=80",
    ],
    badges: [
      "Goldman Sachs",
      "J.P. Morgan",
      "PayPal",
      "Visa",
      "Mastercard",
      "Revolut",
    ],
  },
  {
    title: "Education",
    images: [
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=384&h=240&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=384&h=240&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=384&h=240&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?w=384&h=240&fit=crop&auto=format&q=80",
    ],
    badges: [
      "Khan Academy",
      "Coursera",
      "Udemy",
      "Duolingo",
      "edX",
      "Skillshare",
    ],
  },
  {
    title: "Food & Beverage",
    images: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=384&h=240&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=384&h=240&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=384&h=240&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=384&h=240&fit=crop&auto=format&q=80",
    ],
    badges: ["Starbucks", "McDonald's", "Coca-Cola", "Pepsi", "Subway", "KFC"],
  },
  {
    title: "Fashion",
    images: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=384&h=240&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=384&h=240&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=384&h=240&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=384&h=240&fit=crop&auto=format&q=80",
    ],
    badges: ["Gucci", "Louis Vuitton", "Nike", "Adidas", "Zara", "H&M"],
  },
  {
    title: "Beauty",
    images: [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=384&h=240&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=384&h=240&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=384&h=240&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=384&h=240&fit=crop&auto=format&q=80",
    ],
    badges: [
      "Sephora",
      "L'Oréal",
      "Estée Lauder",
      "Maybelline",
      "Clinique",
      "Fenty Beauty",
    ],
  },
  {
    title: "Consulting",
    images: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=384&h=240&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=384&h=240&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=384&h=240&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=384&h=240&fit=crop&auto=format&q=80",
    ],
    badges: [
      "McKinsey & Company",
      "Boston Consulting Group",
      "Deloitte",
      "PwC",
      "EY",
      "Accenture",
    ],
  },
  {
    title: "Real Estate",
    images: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=384&h=240&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=384&h=240&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=384&h=240&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=384&h=240&fit=crop&auto=format&q=80",
    ],
    badges: [
      "Keller Williams",
      "Century 21",
      "RE/MAX",
      "Coldwell Banker",
      "Zillow",
      "Redfin",
    ],
  },
  {
    title: "Pet Services",
    images: [
      "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=384&h=240&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1415369629372-26f2fe60c467?w=384&h=240&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=384&h=240&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=384&h=240&fit=crop&auto=format&q=80",
    ],
    badges: ["PetSmart", "Petco", "Rover", "Chewy", "Whistle", "Purina"],
  },
  {
    title: "Art",
    images: [
      "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=384&h=240&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1499892477393-f675706cbe6e?w=384&h=240&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=384&h=240&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?w=384&h=240&fit=crop&auto=format&q=80",
    ],
    badges: ["Adobe", "Canva", "Pixar", "Behance", "DeviantArt", "ArtStation"],
  },
  {
    title: "Travel",
    images: [
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=384&h=240&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=384&h=240&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=384&h=240&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=384&h=240&fit=crop&auto=format&q=80",
    ],
    badges: [
      "Airbnb",
      "Expedia",
      "Booking.com",
      "TripAdvisor",
      "Skyscanner",
      "Kayak",
    ],
  },
];

export default categories;
