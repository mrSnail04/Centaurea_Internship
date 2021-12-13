import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import {API} from "../api/api";

export const EventPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [concert, setConcert] = useState(null);
    const [event, setEvent] = useState(null);
    console.log(event)
    console.log(concert.type)
    let {slug} = useParams(); //{slug: 'halloween'}

    const getEvent = async (slug) => {
        let result = await API.event(slug);
        if (result.status === 200) {
            return result.data[0];
        } else {
            console.log('Ошибка')
        }
    }
    const getParty = async (slug) => {
        let result = await API.party(slug);
        if (result.status === 200) {
            setEvent(result.data[0]);
            return result.data[0];
        } else {
            console.log('Ошибка')
        }
    }
    const getOpenAir = async (slug) => {
        let result = await API.openair(slug);
        if (result.status === 200) {
            console.log(result)
            setEvent(result.data[0]);
            return result.data[0];
        } else {
            console.log('Ошибка')
        }
    }
    const getClassicalConcert = async (slug) => {
        let result = await API.classicalconcert(slug);
        if (result.status === 200) {
            setEvent(result.data[0]);
            return result.data[0];
        } else {
            console.log('Ошибка')
        }
    }
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


    switch (concert.type) {
        case "Party": return <getParty slug={concert.slug} />
            break;
        case "OpenAir": return <getOpenAir slug={concert.slug} />
            break;
        case "ClassicalConcert": return <getClassicalConcert slug={concert.slug} />
            break;
        case "Other": return <getEvent slug={concert.slug} />
            break;
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <div className="col-md-3 service-image-left">
                        <right>
                            <img
                                height="400"
                                src={"https://res.cloudinary.com/hhp1uohee/"+ concert.image}
                                alt=""></img>
                        </right>
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
