import { motion } from 'framer-motion';
import Typography from '../ui/Typography';
import Container from '../ui/Container';

const Awards = () => {
  const awards = [
    { title: 'Best Digital Agency 2023', organization: 'Design Awards' },
    { title: 'Innovation in Web Design', organization: 'Webby Awards' },
    { title: 'Creative Excellence', organization: 'Awwwards' },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <Typography variant="h2" className="mb-4">
            Awards & Recognition
          </Typography>
          <Typography variant="body" className="text-lg max-w-2xl mx-auto">
            Our work has been recognized by industry leaders and award organizations
          </Typography>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 bg-white rounded-lg shadow-sm"
            >
              <div className="w-16 h-16 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">🏆</span>
              </div>
              <Typography variant="h4" className="mb-2">
                {award.title}
              </Typography>
              <Typography variant="caption">
                {award.organization}
              </Typography>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Awards;
