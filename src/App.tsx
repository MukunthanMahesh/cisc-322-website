import Layout from './components/Layout';
import Hero from './components/Hero';
import Deliverables from './components/Deliverables';
import Footer from './components/Footer';
import Resources from './components/Resources';

function App() {
  return (
    <Layout>
      <Hero />
      <Deliverables />
      <Resources />
      <Footer />
    </Layout>
  );
}

export default App;
