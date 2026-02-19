import { motion } from "framer-motion";

const works = [
  {
    image: `${import.meta.env.BASE_URL}1.png`,
    link: "https://www.behance.net/gallery/217897807/ZenTrade-Trading-App-Ui-Design"
  },
  {
    image: `${import.meta.env.BASE_URL}2.png`,
    link: "https://www.behance.net/gallery/213575215/Cafe-Mobile-App-Case-Study"
  },
  {
    image: `${import.meta.env.BASE_URL}3.png`,
    link: "https://www.behance.net/gallery/207380339/Simple-Real-Estate-Website-UI-Design"
  },
  {
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=260&fit=crop&q=80",
    link: "https://www.behance.net/gallery/204617717/ShivaPrati-Health-Healthcare-Platform-website-design"
  }
];

const SkillsSection = () => {
  return (
    <section className="jh-section">
      <div className="jh-wrap">
        <motion.p className="jh-label"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Other Work •
        </motion.p>

        <div className="jh-dark-grid">
          {works.map((w, i) => (
            <motion.a
              key={i}
              href={w.link}
              target="_blank"
              rel="noopener noreferrer"
              className="jh-dark-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <img src={w.image} alt="" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
