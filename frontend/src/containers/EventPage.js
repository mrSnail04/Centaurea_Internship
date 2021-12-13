import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import {API} from "../api/api";

export const EventPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [concert, setConcert] = useState(null);
    let {slug} = useParams(); //{slug: 'halloween'}

    useEffect(() => {
        let currentSlug = slug;
        async function fetchEvent() {
            console.log(currentSlug)
            setLoading(true);
            let result = await getEvent(currentSlug)
            console.log(result)
            setConcert(result);
            setLoading(false);
        }
        fetchEvent();
    }, [slug])

    if (loading) {
        return <div>Loading...</div>
    }

    if (!concert) {
        return <div>Concert not found</div>
    }


    // switch (concert.type) {
    //     case "concert": return <Concert age={18} compositor={"Mozart"} />
    //         break;
    //     case "show": return <Show />
    //         break;
    //     default:
    // }

    // const [events, setEvents] = useState(props.events);
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <div className="col-md-3 service-image-left">
                        <center>
                            <img
                                height="400"
                                src={"https://res.cloudinary.com/hhp1uohee/"+ concert.image}
                                alt=""></img>
                            {console.log(concert)}
                        </center>
                    </div>
                </div>
                <div className="col-sm">
                    <h1>{concert.name}</h1>
                    <hr/>
                    <span className="badge badge-light">{concert.date}</span>
                    <div className="btn-group">
                        <button type="button" className="btn btn-success">
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

const getEvent = async (slug) => {
    console.log(slug)
    let result = await API.event(slug);
    if (result.status === 200) {
        return result.data[0];
    } else {
        console.log('Ошибка')
    }
}
