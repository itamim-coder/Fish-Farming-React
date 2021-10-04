import Header from './components/Header/Header';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Team from './components/Team/Team';
import ContactUs from './components/ContactUs/ContactUs';
import AboutUs from './components/AboutUs/AboutUs';
import NoResultField from './components/NoResultField/NoResultField';
import HomeService from './components/HomeService/HomeService';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
     <Router>
     <Header></Header>
     
       <Switch>
         <Route exact path="/">     
         <Home></Home> 
         <HomeService></HomeService>
         </Route>
         <Route  path="/home">     
         <Home></Home> 
         <HomeService></HomeService>
         </Route>
         <Route  path="/services">     
         <Services></Services>
         </Route>
         <Route  path="/team">     
         <Team></Team>
         </Route>
         <Route  path="/contactus">     
         <ContactUs></ContactUs> 
         </Route>
         <Route  path="/aboutus">     
         <AboutUs></AboutUs>
         </Route>
         <Route  path="*">     
        <NoResultField></NoResultField>
         </Route>
       </Switch>
       <Footer></Footer>
     </Router>
     
    </div>
  );
}

export default App;
