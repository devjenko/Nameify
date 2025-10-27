const categories = [
  {
    title: "Technology",
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=384&h=240&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1581091012184-5f157f182b46?w=384&h=240&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1555421689-25f0ef1d5e6c?w=384&h=240&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=384&h=240&fit=crop&crop=center&auto=format&q=80",
    ],
    badges: [
      "Software Engineer",
      "Security Analyst",
      "DevOps Engineer",
      "Data Scientist",
    ],
  },
  {
    title: "Health",
    images: [
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=384&h=240&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=384&h=240&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=384&h=240&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=384&h=240&fit=crop&crop=center&auto=format&q=80",
    ],
    badges: [
      "Medical Researcher",
      "Health Coach",
      "Nutritionist",
      "Personal Trainer",
    ],
  },
  {
    title: "Finance",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=384&h=240&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=384&h=240&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1493558103817-58b2924bce98?w=384&h=240&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=384&h=240&fit=crop&crop=center&auto=format&q=80",
    ],
    badges: ["Financial Analyst", "Investment Banker", "Accountant", "Auditor"],
  },
  {
    title: "Education",
    images: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=384&h=240&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=384&h=240&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=384&h=240&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=384&h=240&fit=crop&crop=center&auto=format&q=80",
    ],
    badges: [
      "Curriculum Developer",
      "Educational Consultant",
      "Instructional Designer",
      "Academic Advisor",
    ],
  },
  {
    title: "Food & Beverage",
    images: [
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=384&h=240&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=384&h=240&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=384&h=240&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=384&h=240&fit=crop&crop=center&auto=format&q=80",
    ],
    badges: [
      "Culinary Artist",
      "Food Critic",
      "Beverage Specialist",
      "Restaurant Manager",
    ],
  },
  {
    title: "Fashion",
    images: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=384&h=240&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1520975698514-91b7e2d3c546?w=384&h=240&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=384&h=240&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=384&h=240&fit=crop&crop=center&auto=format&q=80",
    ],
    badges: ["Fashion Designer", "Stylist", "Merchandiser", "Textile Expert"],
  },

  {
    title: "Beauty",
    images: [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=384&h=240&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=384&h=240&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=384&h=240&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=384&h=240&fit=crop&crop=center&auto=format&q=80",
    ],
    badges: [
      "Makeup Artist",
      "Skincare Specialist",
      "Hair Stylist",
      "Beauty Consultant",
    ],
  },
  {
    title: "Consulting",
    images: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=384&h=240&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=384&h=240&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=384&h=240&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=384&h=240&fit=crop&crop=center&auto=format&q=80",
    ],
    badges: [
      "Business Consultant",
      "Management Analyst",
      "Strategy Advisor",
      "Operations Specialist",
    ],
  },
  {
    title: "Real Estate",
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=384&h=240&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=384&h=240&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1580584122190-108e7eb1f151?w=384&h=240&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=384&h=240&fit=crop&crop=center&auto=format&q=80",
    ],
    badges: [
      "Property Manager",
      "Real Estate Agent",
      "Appraiser",
      "Leasing Consultant",
    ],
  },
  {
    title: "Pet Services",
    images: [
      "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=384&h=240&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=384&h=240&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=384&h=240&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=384&h=240&fit=crop&crop=center&auto=format&q=80",
    ],
    badges: ["Veterinarian", "Pet Groomer", "Animal Trainer", "Pet Sitter"],
  },
  {
    title: "Art",
    images: [
      "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=384&h=240&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=384&h=240&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1532634726-8b9fb99825b3?w=384&h=240&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=384&h=240&fit=crop&crop=center&auto=format&q=80",
    ],
    badges: ["Graphic Designer", "Illustrator", "Art Director", "Animator"],
  },
  {
    title: "Travel",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=384&h=240&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=384&h=240&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1493558103817-58b2924bce98?w=384&h=240&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=384&h=240&fit=crop&crop=center&auto=format&q=80",
    ],
    badges: [
      "Travel Agent",
      "Tour Guide",
      "Flight Attendant",
      "Travel Blogger",
    ],
  },
];

export default categories;
