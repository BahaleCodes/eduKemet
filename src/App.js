import { Route } from 'react-router-dom';
// import HireUs from './components/HireUs/HireUs';
import Bahale from './components/Bahale/Bahale';
import Profile from './components/Profile';
// import Mern from './components/Skills/Mern';
// import AppDev from './components/Skills/App-Dev';
// import Api from './components/Skills/Api';
// import DBMS from './components/Skills/DBMS';
// import PenTest from './components/Skills/Pen-Test';
// import Blockchain from './components/Skills/Blockchain';

const App = () => {
  return (
    <div>
      {/* <Route path="/hire-us" component={HireUs} /> */}
      <Route path="/" exact component={Bahale} />
      <Route path="/profile" exact component={Profile} />
      {/* <Route path="/mern" exact component={Mern} />
      <Route path="/app-dev" exact component={AppDev} />
      <Route path="/api" exact component={Api} />
      <Route path="/dbms-dev" exact component={DBMS} />
      <Route path="/pen-test" exact component={PenTest} />
      <Route path="/blockchain" exact component={Blockchain} /> */}
      
    </div>
  )
}

export default App;
