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
            setLoading(true);
            let result = await getEvent(currentSlug)
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
        <div className="container-fluid">
            <div className="content-wrapper">
                <div>
                    <div className="container">
                        <div className="col-md-12">
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
                        <div className="col-md-7">
                            <div>{concert.name}</div>
                            <div>{concert.address}</div>
                            <div>{concert.actor}</div>
                            <div>{concert.date}</div>
                            <div>{concert.qty_ticket}</div>
                            <div className="btn-group">
                                <button type="button" className="btn btn-success">
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

const getEvent = async (slug) => {
    let result = await API.event(slug);
    if (result.status === 200) {
        return result.data[0];
    } else {
        console.log('Ошибка')
    }
}
