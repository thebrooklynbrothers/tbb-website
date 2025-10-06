import { Helmet } from 'react-helmet-async';
import Typography from '../components/ui/Typography';
import Container from '../components/ui/Container';

const Cases = () => {
  return (
    <>
      <Helmet>
        <title>Our Cases - The Brooklyn Brothers</title>
        <meta name="description" content="Explore our portfolio of creative digital solutions and successful projects" />
      </Helmet>
      
      <div className="pt-20 section-padding">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="h1" className="mb-4">
              Our Cases
            </Typography>
            <Typography variant="body" className="text-lg max-w-2xl mx-auto">
              Discover the innovative digital solutions we've created for our clients
            </Typography>
          </div>
          
          {/* Cases grid will be implemented here */}
          <div className="text-center py-16">
            <Typography variant="body" className="text-gray-500">
              Cases coming soon...
            </Typography>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Cases;
