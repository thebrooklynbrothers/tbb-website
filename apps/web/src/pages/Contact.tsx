import { Helmet } from 'react-helmet-async';
import Typography from '../components/ui/Typography';
import Container from '../components/ui/Container';
import ContactForm from '../components/sections/ContactForm';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - The Brooklyn Brothers</title>
        <meta name="description" content="Get in touch with The Brooklyn Brothers for your next creative project" />
      </Helmet>
      
      <div className="pt-20 section-padding">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="h1" className="mb-4">
              Contact Us
            </Typography>
            <Typography variant="body" className="text-lg max-w-2xl mx-auto">
              Ready to start your next creative project? Let's talk!
            </Typography>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <ContactForm />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Contact;
