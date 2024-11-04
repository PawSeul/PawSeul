import '@styles/global.css';
import { Global } from '@emotion/react';
import { globalStyle } from '@styles/globals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from '@components/common/Layout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import Main from '@/pages/Main';
import Home from '@pages/Home';
import Search from '@pages/Search';
import Store from '@pages/Store';
import Mypage from '@pages/Mypage';
import Detail from '@pages/Store/Detail';
import Payment from '@pages/Payment';
import Health from '@pages/Health';
import Cart from '@pages/Cart';
import { OrderHistoryPage } from '@pages/Mypage/Order';
import { ReviewHistoryPage } from '@pages/Mypage/Review';
import SignUp from './pages/Signup/SignUp';
import SignUpResult from './pages/Signup/Result';
import { PaymentFail } from './pages/Payment/Fail';
import { PaymentSuccess } from './pages/Payment/Success';

function App() {
  // const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <Layout>
        <Global styles={globalStyle} />
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signup/result" element={<SignUpResult />} />
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/health" element={<Health />} />
          <Route path="/search" element={<Search />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/mypage/order" element={<OrderHistoryPage />} />
          <Route path="/mypage/review" element={<ReviewHistoryPage />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/payment/success" element={<PaymentSuccess />} />
          <Route path="/payment/fail" element={<PaymentFail />} />"
          <Route path="/store/detail/:id" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
