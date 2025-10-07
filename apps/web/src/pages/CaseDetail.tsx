import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import Typography from '../components/ui/Typography';
import Container from '../components/ui/Container';

const CaseDetail = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <Helmet>
        <title>Case Detail - The Brooklyn Brothers</title>
        <meta name="description" content="Detailed view of our creative project" />
      </Helmet>
      
      <div className="pt-20 section-padding">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="h1" className="mb-4">
              Case Detail
            </Typography>
            <Typography variant="body" className="text-lg">
              Case ID: {id}
            </Typography>
          </div>
          
          <div className="text-center py-16">
            <Typography variant="body" className="text-gray-500">
              Case detail content coming soon...
            </Typography>
          </div>
        </Container>
      </div>
    </>
  );
};

export default CaseDetail;
