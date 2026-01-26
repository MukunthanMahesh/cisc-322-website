import Layout from './components/Layout';
import Hero from './components/Hero';
import Deliverables from './components/Deliverables';
import Footer from './components/Footer';
import Resources from './components/Resources';
import Team from './components/Team';

function App() {
  return (
    <Layout>
      <Hero />
      <Deliverables />
      <Resources />
      <Team />
      <Footer />
    </Layout>
  );
}

export default App;
