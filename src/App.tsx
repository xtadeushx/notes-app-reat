import { Provider } from 'react-redux';
import { Footer } from './layout/footer/footer';
import { Header } from './layout/header/header';
import { HomePage } from './pages/home-page/home-page';
import { store } from './redux/store';

const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <HomePage />
        <Footer />
      </Provider>
    </>
  );
};

export { App };
