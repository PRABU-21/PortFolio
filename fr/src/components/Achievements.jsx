import ScrollFloat from "./ScrollFloat";
import AchievementCard from "./AchievementCard";

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "1st Place - KEC Techno Fest Project Expo 2025",
      description:
        "Won first place in the prestigious annual technology festival's project exhibition competition.",
      technologies: ["Competition", "Innovation", "Presentation"],
      impact: "Recognition of technical excellence and innovative thinking",
      accuracy: "First Position",
      imageUrl: "/achievement-images/technofest.JPG",
    },
    {
      id: 2,
      title: "2nd Place - KEC Hacknovate Hackathon 2024",
      description:
        "Secured second position in the competitive hackathon event focusing on innovative solutions.",
      technologies: ["Hackathon", "Teamwork", "Problem Solving"],
      impact:
        "Demonstrated rapid prototyping and collaborative development skills",
      accuracy: "Second Position",
      imageUrl: "/achievement-images/hacknovate.jpg",
    },
    {
      id: 3,
      title: "1st Place - Paper Presentation at KEC New Wells 2024",
      description:
        "Won first place in the technical paper presentation competition for research excellence.",
      technologies: ["Research", "Presentation", "Technical Writing"],
      impact: "Showcased research capabilities and communication skills",
      accuracy: "First Position",
      imageUrl: "/achievement-images/paperpresentation.png",
    },
    {
      id: 4,
      title: "1st Place - Project Presentation at eareyes2k25",
      description:
        "Secured first prize in project presentation competition at eareyes2k25 event.",
      technologies: ["Innovation", "Presentation", "Project Demo"],
      impact: "Excellence in project development and presentation skills",
      accuracy: "First Prize",
      imageUrl: "/achievement-images/placeholder.txt",
    },
    {
      id: 5,
      title: "1st Place - Project Presentation at Vision 3.0",
      description:
        "Won first prize in the Vision 3.0 project presentation competition.",
      technologies: ["Innovation", "Teamwork", "Technical Excellence"],
      impact: "Recognition for innovative project development and delivery",
      accuracy: "First Prize",
      imageUrl: "/achievement-images/placeholder.txt",
    },
    {
      id: 6,
      title: "Winners - Next Hackathon by Startup-TN",
      description:
        "Won the Next Hackathon organized by Startup-TN, showcasing innovative startup solutions.",
      technologies: ["Hackathon", "Innovation", "Startup"],
      impact:
        "Recognition for entrepreneurial thinking and innovative solutions",
      accuracy: "Winner",
      imageUrl: "/achievement-images/placeholder.txt",
    },
  ];

  return (
    <section
      id="achievements"
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Title */}
        <ScrollFloat
          containerClassName="text-center mb-16"
          textClassName="text-4xl md:text-5xl font-bold text-[#E8E3B1]"
          scrollStart="top bottom-=10%"
          scrollEnd="center center"
        >
          Achievements
        </ScrollFloat>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
