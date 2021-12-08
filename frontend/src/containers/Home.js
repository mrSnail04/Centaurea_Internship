import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';


export const Home = (props) => {
    const [events, setEvents] = useState(props.events);

    useEffect(() => {
        if (props.filter) {
            let filtredEvents = events.filter(e => {
                return e.type === props.filter
            })

            setEvents(filtredEvents);
        }

    }, [events, props.filter])


    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-9">
                    <div className="row">
                        {events?.map(event => <Event event={event} key={event.id} slug={event.slug} name={event.name}
                                                     img={event.image}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
};

const Event = ({slug, name, img, event}) => {
    return (

        <div key={event.id} className="col-lg-4 col-md-6 mt-4">
            <div className="card h-100">
                <Image cloudName="centaurea" publicId="halloween_st7r9p" /></Image>
                {/*<Link to={img}>*/}
                {/*    {console.log(img)}*/}

                {/*    <img height="400" className="card-img-top" src={img} alt="pic"/>*/}
                {/*</Link>*/}
                <div className="card-body text-center">
                    <h5 className="card-title">
                        <Link style={{textDecoration: 'none'}} to={`event/${slug}`}>
                            <span className="nav-link">
                                {name}
                            </span>
                        </Link>
                    </h5>
                </div>
            </div>
        </div>
    );
}