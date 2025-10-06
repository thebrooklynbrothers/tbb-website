import { motion } from 'framer-motion';
import Typography from '../ui/Typography';
import Button from '../ui/Button';
import Container from '../ui/Container';

const CaseShowcase = () => {
  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="text-center mb-16">
          <Typography variant="h2" className="mb-4">
            Featured Cases
          </Typography>
          <Typography variant="body" className="text-lg max-w-2xl mx-auto">
            Discover some of our most successful projects and creative solutions
          </Typography>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Placeholder for case cards */}
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: item * 0.1 }}
              className="bg-gray-100 rounded-lg h-64 flex items-center justify-center"
            >
              <Typography variant="body" className="text-gray-500">
                Case {item} - Coming Soon
              </Typography>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" size="lg">
            View All Cases
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default CaseShowcase;
