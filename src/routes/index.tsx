import { BrowserRouter as Switch, Route } from 'react-router-dom';
import Layout from 'components/Layout';

import ScrollToTop from 'utils/scrollToTop';

import Home from 'containers/Home';
import Staking from 'containers/Staking';
import Mint from 'containers/Mint';
import ProductDetail from 'containers/ProductDetail';

const Routes = () => (
  <>
    <Switch>
      <Layout>
        <ScrollToTop />
        <Route exact path="/" component={Home} />
        <Route exact path="/staking" component={Staking} />
        <Route exact path="/nft" component={Mint} />
        <Route exact path="/products/:id" component={ProductDetail} />

      </Layout>
    </Switch>
  </>
);

export default Routes;
