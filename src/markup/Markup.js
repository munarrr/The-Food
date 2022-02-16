import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ThemeButton from './Element/ThemeButton/ThemeButton';

import Homepage from './Pages/Homepage1';
import Aboutus1 from './Pages/Aboutus/Aboutus1';
import Error403 from './Pages/Error/Error403';
import Error404 from './Pages/Error/Error404';
import Error405 from './Pages/Error/Error405';
import Expertise from './Pages/Expertise';

import Contact from './Pages/Contact';
import BlogClassicGrid from './Pages/BlogClassic/BlogClassicGrid';
import BlogDetails from './Pages/BlogDetail/BlogDetails';
import ProtfolioFullWidth from './Pages/Protfolio/ProtfolioFullWidth';


import ScrollToTop from './Element/ScrollToTop';

class Markup extends Component{
	render(){
		return(
			<BrowserRouter basename="/">
                <div className="page-wraper">
                    <Switch>
                        <Route path='/' exact component={Homepage} />
                        <Route path='/about-1' exact component={Aboutus1} />
                        <Route path='/error-403' exact component={Error403} />
                        <Route path='/error-404' exact component={Error404} />
                        <Route path='/error-405' exact component={Error405} />               
                        <Route path='/expertise' exact component={Expertise} />                     
                        <Route path='/contact' exact component={Contact} />                     
                        <Route path='/blog-classic-grid' exact component={BlogClassicGrid} />
                        <Route path='/blog-details' exact component={BlogDetails} />
                        <Route path='/portfolio-full-width' exact component={ProtfolioFullWidth} />					                       						
					</Switch>
                </div>
				<ScrollToTop />
			
            </BrowserRouter>	
		)
	}
	
}

export default Markup;