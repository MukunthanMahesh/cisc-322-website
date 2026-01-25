import Layout from './components/Layout';
import Hero from './components/Hero';
import Documentation from './components/Documentation';
import Deliverables from './components/Deliverables';
import Footer from './components/Footer';

function App() {
  return (
    <Layout>
      <Hero />
      <Documentation />
      <Deliverables />
      <Footer />
    </Layout>
  );
}

export default App;
