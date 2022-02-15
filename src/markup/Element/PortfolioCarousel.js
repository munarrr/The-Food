import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Slider from "react-slick";
import SimpleReactLightbox from 'simple-react-lightbox';
import {SRLWrapper, useLightbox} from 'simple-react-lightbox';

//Images
import pic1 from './../../images/project/pic1.jpg';
import pic2 from './../../images/project/pic2.jpg';
import pic3 from './../../images/project/pic3.jpg';
import pic4 from './../../images/project/pic4.jpg';

const contentBlog =[
	{ images: "https://avatars.mds.yandex.net/i?id=f8df9200e0a4abbcc4a24b59a261df06-4220121-images-thumbs&n=13", },
	{ images: "https://avatars.mds.yandex.net/i?id=bcb45cf638856730a2b0adeeab32f0eb-3563662-images-thumbs&n=13https://avatars.mds.yandex.net/i?id=44438c51dbaefefe4620146afc1a4f1f-3713366-images-thumbs&n=13", },
	{ images: "https://avatars.mds.yandex.net/i?id=c0e54315a5cd47eac6c324e7b449187f-5598230-images-thumbs&n=13", },
	{ images: "https://p0.zoon.ru/0/8/5256862640c08891208b8ecb_57548cae4b96d.jpg", },
	{ images: "https://claso.ru/images/a/images/56f3804a7b3ee.jpg", },	
]
//Light Gallery on icon click 
const Iconimage = props => {
	const { openLightbox } = useLightbox()
	return (
    <Link  to={"#"} onClick={() => openLightbox(props.imageToOpen)} className="mfp-link" title="Title Come Here">
      <i className="ti-fullscreen icon-bx-xs"></i>
    </Link>
  )
}


class PortfolioCarousel extends Component{
	render(){
		var settings = {		
			arrows: false,
            slidesToShow: 4,	
			speed: 200,
			navSpeed: 200,
			autoplaySpeed: 1000,
            infinite: true,
			autoplay: true,
			responsive: [
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 4,
				  }
				},
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 3,
				  }
				},
				{
				  breakpoint: 768,
				  settings: {
					slidesToShow: 2,
				  }
				},
				{
				  breakpoint: 480,
				  settings: {
					slidesToShow: 1,
				  }
				}
			]
        };
		return(
			<>
				<SimpleReactLightbox>
					<SRLWrapper >
						<Slider className="img-carousel-content owl-carousel text-center text-white owl-none " {...settings}>
							{contentBlog.map((item, index)=>(
								<div className="item p-3" key={index}>
									<div className="dlab-box portfolio-box">
										<div className="dlab-media dlab-img-effect dlab-img-overlay1"> <img src={item.images} alt="" />
											{/* <div className="dlab-info-has p-a15 bg-primary">
												<Link to={"#"} className="site-button outline radius-xl white pull-left">Wordpress</Link>
												<Link to={"#"} className="site-button outline radius-xl white pull-right">Vist Site</Link>
											</div> */}
											<div className="overlay-bx">
												<div className="overlay-icon text-white"> 
													<h5>Посмотреть фото</h5>
													<p className="m-b10">Нажимая на кнопку вы можете посмотреть все фотки</p>
													{/* <a href={item.images} className="mfp-link" title="Title Come Here"> <i className="ti-fullscreen icon-bx-xs"></i> </a> */ }
													<Iconimage />
													
												</div>
											</div>
										</div>
									</div>
								</div>
							))}	
						</Slider>
					</SRLWrapper >
				</SimpleReactLightbox>
			</>
		)
	}
	
}

export default PortfolioCarousel;