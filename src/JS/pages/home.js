import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fpl from "./futureprojectList";
import fll from "./futureLearnList";
import { Link } from "react-router-dom";

const Home = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return(
        <div id="homepageWrapperId">
            <div id="futureProjectWrapperId">
                <Slider {...settings} className="futureProjectCarouselClass">
                    {fpl.map((item, index) => {
                        return(
                            <FutureBox className="futureProjectClass" id={"FutureProjectBoxId" + index} key={index} textName={item.title} desc={item.desc}/>
                        )})}
                </Slider>
            </div>
            <div id="futureToLearnWrapperId">
                <Slider {...settings} className="futureProjectCarouselClass">
                    {fll.map((item, index) => {
                        return <FutureBox className="futureLearnClass" id={"FutureToLearnBoxId" + index} key={index} desc={item.desc} textName={item.title}/>
                    })}
                </Slider>
            </div>
            <div id="chekcMyProjectWrapperId">
                <Link className="checkProjectClass" to={"/euside/project"}><button className="checkProjectBtnClass">Check my projects</button></Link>
            </div>
        </div>
    )
}

const FutureBox = (props) => {
    return(
        <div className="futureBoxClass" id={props.id}>
            <div>{props.textName}</div>
            <div>{props.desc}</div>
        </div>
    )
}

export default Home;