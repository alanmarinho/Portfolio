import { Routes, Route } from 'react-router-dom';
import Page404 from '@pages/page404';
import HomePage from '@pages/home';
import Layout from '@components/layout';
import Footer from '@components/footer';


function App() {
  return (
    <>
      <Routes>
        <Route
          path={'/'}
          element={
            <>
              <Layout>
                <HomePage />
              </Layout>

              <Footer />
            </>
          }
        />

        <Route path="*" element={<Layout><Page404 /></Layout>} />
      </Routes>
    </>
  );
}

export default App;