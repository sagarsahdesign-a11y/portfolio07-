import { motion } from "framer-motion";

const otherWork = [
  {
    title: "ZenTrade Trading Platform",
    subtitle: "Product Led Growth | 2024",
    image: `${import.meta.env.BASE_URL}1.png`,
    link: "https://www.behance.net/gallery/217897807/ZenTrade-Trading-App-Ui-Design"
  },
  {
    title: "MountainBrew Café App",
    subtitle: "UX Case Study | 2024",
    image: `${import.meta.env.BASE_URL}2.png`,
    link: "https://www.behance.net/gallery/213575215/Cafe-Mobile-App-Case-Study"
  },
  {
    title: "Real Estate Property Platform",
    subtitle: "Web Design | 2023",
    image: `${import.meta.env.BASE_URL}3.png`,
    link: "https://www.behance.net/gallery/207380339/Simple-Real-Estate-Website-UI-Design"
  },
];

const SkillsSection = () => {
  return (
    <section className="jk-section">
      <div className="jk-container">
        <motion.p
          className="jk-section-label"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Other Work ⁕
        </motion.p>

        <div className="jk-gallery">
          {otherWork.map((work, index) => (
            <motion.a
              key={index}
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
              className="jk-gallery-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <img src={work.image} alt={work.title} />
              <div className="jk-gallery-info">
                <h4>{work.title}</h4>
                <p>{work.subtitle}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
