import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Projects from "./projectList"

const Project = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };

    return(
        <div>
            <div className="projectSliderWrapperClass">
                <Slider {...settings} className="projectCarouselClass">
                    {Projects.map((item, index) => {
                        return(
                        <div className="projectContentClass" key={index}>
                            <h5 className="projectTitleClass">{item.title}</h5>
                            <a className="projectLinkClass" href={item.link} target="_blank" rel="noopener noreferrer">
                                <img className="projectImgClass" src={item.img} alt={item.title} />
                            </a>
                        </div>
                    )})}
                </Slider>
            </div>
        </div>
    )
}

export default Project;