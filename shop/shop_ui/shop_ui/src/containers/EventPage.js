import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import {API} from "../api/api";

export const EventPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [concert, setConcert] = useState(null);
    let {slug} = useParams(); //{slug: 'halloween'}

    useEffect(async () => {
        setLoading(true);
        let result = await getEvent(slug)
        setConcert(result);
        setLoading(false);
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
                <div className="col-lg-9">
                    <div className="row">
                        {/*{props.compositor ? <div>{props.compositor}</div> : null}*/}
                        EVENT PAGE
                        <Concert concert={concert}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

const getEvent = async (slug) => {
        let result = await API.event(slug);
        if  (result.status == 200) {
            return result.data[0];
        } else {
            console.log('Ошибка')
        }
    }
const Concert = ({concert}) => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-9">
                    <div className="row">
                        {/*{props.compositor ? <div>{props.compositor}</div> : null}*/}
                        <div>{concert.name}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}