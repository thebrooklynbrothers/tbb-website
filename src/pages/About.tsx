import { Helmet } from 'react-helmet-async';
import Typography from '../components/ui/Typography';
import Container from '../components/ui/Container';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - The Brooklyn Brothers</title>
        <meta name="description" content="Learn about The Brooklyn Brothers creative agency and our team" />
      </Helmet>
      
      <div className="pt-20 section-padding">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="h1" className="mb-4">
              About Us
            </Typography>
            <Typography variant="body" className="text-lg max-w-2xl mx-auto">
              We are a creative agency passionate about digital innovation
            </Typography>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg mx-auto">
              <Typography variant="body" className="mb-6">
                The Brooklyn Brothers is a creative agency that specializes in digital development 
                and innovative solutions. We believe in the power of creativity to transform 
                businesses and create meaningful connections with audiences.
              </Typography>
              
              <Typography variant="body" className="mb-6">
                Our team combines technical expertise with creative vision to deliver projects 
                that not only look great but also perform exceptionally. We work closely with 
                our clients to understand their goals and create solutions that exceed expectations.
              </Typography>
              
              <Typography variant="body">
                Based in Brooklyn, New York, we serve clients worldwide and are always excited 
                to take on new challenges and push the boundaries of what's possible in digital design.
              </Typography>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default About;
