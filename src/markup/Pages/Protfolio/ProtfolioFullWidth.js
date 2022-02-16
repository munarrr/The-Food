import React, {Component,useState,useEffect,Fragment } from 'react';
import { Link } from 'react-router-dom';
import SimpleReactLightbox from 'simple-react-lightbox';
import {SRLWrapper, useLightbox} from 'simple-react-lightbox'; 
import Header from './../../Layout/Header1';
import Footer from './../../Layout/Footer1';
import PageTitle from './../../Layout/PageTitle';
import Masonry from 'react-masonry-component';

//images
import bnr1 from './../../../images/banner/bnr1.jpg';
import box1 from './../../../images/portfolio/image_1.jpg';
import box2 from './../../../images/portfolio/image_2.jpg';
import box3 from './../../../images/portfolio/image_3.jpg';
import box4 from './../../../images/portfolio/image_4.jpg';
import box5 from './../../../images/portfolio/image_5.jpg';
import box6 from './../../../images/portfolio/image_6.jpg';
import box7 from './../../../images/portfolio/image_7.jpg';
import box8 from './../../../images/portfolio/image_8.jpg';
import box9 from './../../../images/portfolio/image_9.jpg';
import box10 from './../../../images/portfolio/image_10.jpg';
import box11 from './../../../images/portfolio/image_11.jpg';
import box12 from './../../../images/portfolio/image_12.jpg';

const imageBlog = [
	{  Large: box1 , tag: ['Все','Экскурсия',] , },
	{  Large: box2 , tag: ['На уроке', 'Сертификаты', ] , }, 
	{  Large: box3 , tag: ['Экскурсия', 'Все', ] , }, 
	{  Large: box4 , tag: ['Сертификаты', ], },
	{  Large: box5 , tag: ['На уроке', ], }, 
	{  Large: box6 , tag: ['Отдых' ],  }, 
	{  Large: box7 , tag: ['Все', 'Отдых'	] , }, 
	{  Large: box8 , tag: ['Сертификаты','Экскурсия',] , }, 
	{  Large: box9 , tag: ['На уроке','На уроке','Все'] , }, 
	{  Large: box11 , tag: [ 'Экскурсия', 'Сертификаты'] , }, 
	{  Large: box10 , tag: [ 'Экскурсия', 'Сертификаты','Отдых',] , }, 
	{  Large: box12 , tag: ['Все','Отдых', 'Экскурсия', 'Сертификаты'] , }, 
	
]

//Light Gallery on icon click 
const Iconimage = props => {
	const { openLightbox } = useLightbox()
	return (
    <Link  to={"#"} onClick={() => openLightbox(props.imageToOpen)} className="mfp-link portfolio-fullscreen" >
      <i className="ti-fullscreen icon-bx-xs"></i>
    </Link>
  )
}

// Masonry section
const masonryOptions = {                                          
    transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }
// Masonry section end

const TagLi = ({name, handlesettag, tagActive}) => {                                                               
	return ( 
			
		<li className={` tag ${tagActive ? 'btn active' : 'btn'}` } onClick={() => handlesettag(name)} >
			<input type="radio" />
			<Link to={"#"} className="site-button-secondry radius-sm" ><span>{name} {''}</span> </Link>
		</li> 
	);
};


class ProtfolioFullWidth extends Component{
	render(){
		return(
			<Fragment>	
			<Header />
				<div className="page-content bg-white  ">
				{/*  banner  */}
				<div className="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt" style={{ backgroundImage: "url(" + bnr1 + ")" }}>
					<PageTitle motherMenu="Галерея"  activeMenu="Галерея"  />
				</div>
				{/*  Section-1 Start  */}
				<PortfolioItem />
				
			</div>	
			<Footer />
			</Fragment>			
		)
	}
} 
function PortfolioItem(){
	const [tag, setTag] = useState('All');
	const [filteredImages, setFilterdImages] = useState([]);
	
	useEffect( () => {
		tag === 'All' ? setFilterdImages(imageBlog) : setFilterdImages(imageBlog.filter( image => image.tag.find(element => element === tag)))
	}, [tag])	
	
	return(
		<>
			<div className="section-full content-inner-1 portfolio text-uppercase  mb-4">		
				<div className="site-filters clearfix center  m-b40">
					<ul className="filters" data-toggle="buttons">
						<TagLi name="Все"  handlesettag={setTag} tagActive={ tag === 'Все' ? true : false }	/>
						<TagLi name="На уроке"  handlesettag={setTag} tagActive={ tag === 'Все' ? true : false }	/>
						<TagLi name="Экскурсия" handlesettag={setTag} tagActive={ tag === 'Экскурсия' ? true : false }	 />
						<TagLi name="Сертификаты"  handlesettag={setTag} tagActive={ tag === 'На уроке' ? true : false }	/>
						<TagLi name="Отдых"  handlesettag={setTag} tagActive={ tag === 'Сертификаты' ? true : false }	/>
						
					</ul>
				</div>
				<SimpleReactLightbox>
					<SRLWrapper >
						<div className="clearfix">
							<ul id="masonry" className="dlab-gallery-listing gallery-grid-4 gallery mfp-gallery port-style1">
								<Masonry
									className={'my-gallery-class'} // default ''
									options={masonryOptions} // default {}
									disableImagesLoaded={false} // default false
									updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
									imagesLoadedOptions={imagesLoadedOptions} // default {}
								>
									{filteredImages.map((item, index)=>(
										<li className="web design card-container col-lg-3 col-md-6 col-xs-12 col-sm-6 p-a0" key={index}>
											<div className="dlab-box dlab-gallery-box">
												<div className="dlab-media dlab-img-overlay1 dlab-img-effect"> 
													<img src={item.Large} alt="" />
													<div className="overlay-bx">
														<div className="overlay-icon align-b text-white text-left">
															<div className="text-white text-left port-box">
																<h5>Herbal Beauty Salon</h5>
																<p>Branding and Identity</p>
																<Iconimage />
															</div>
														</div>
													</div>
												</div>
											</div>
										</li>
									))}	
								</Masonry>	
							</ul>
						</div>
					</SRLWrapper>
				</SimpleReactLightbox>	
				
			</div>
		</>
	);
}
export {box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12,imageBlog};
export default ProtfolioFullWidth;
