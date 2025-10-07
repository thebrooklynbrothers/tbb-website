import { motion } from 'framer-motion';
import Typography from '../ui/Typography';
import Button from '../ui/Button';
import Container from '../ui/Container';

const Hero = () => {
  return (
    <section className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white">
      <Container>
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h1" className="mb-6">
              Creative Agency for the
              <span className="block text-accent">Digital Age</span>
            </Typography>
            
            <Typography variant="body" className="text-xl mb-8 max-w-2xl mx-auto">
              We create innovative digital solutions that transform businesses 
              and create meaningful connections with audiences.
            </Typography>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                View Our Work
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
