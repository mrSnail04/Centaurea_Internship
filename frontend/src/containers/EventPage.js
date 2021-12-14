import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import {API} from "../api/api";

export const EventPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [concert, setConcert] = useState(null);
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
            console.log(result)
            return result.data[0];
        } else {
            console.log('Ошибка')
        }
    }
    const getOpenAir = async (slug) => {
        let result = await API.openair(slug);
        if (result.status === 200) {
            console.log(result)
            return result.data[0];
        } else {
            console.log('Ошибка')
        }
    }
    const getClassicalConcert = async (slug) => {
        let result = await API.classicalconcert(slug);
        if (result.status === 200) {
            return result.data[0];
        } else {
            console.log('Ошибка')
        }
    }
    const getTrueEvent = async (result) => {
        console.log(result)
        switch (result.type_event) {
            case "Party":
                let conc = await getParty(result.slug)
                console.log(conc)
                return conc;
                break;
            case "OpenAir":
                let conc = await getOpenAir(result.slug)
                console.log(conc)
                return conc;
                break;
            case "ClassicalConcert":
                let conc = await getClassicalConcert(result.slug)
                console.log(conc)
                return conc;
                break;
            case "Other":
                let conc = await getEvent(result.slug)
                console.log(conc)
                return conc;
                break;
        }
    }
    useEffect(() => {
        let currentSlug = slug;
        async function fetchEvent() {
            setLoading(true);
            let result = await getEvent(currentSlug)
            console.log(result)
            let additionEventProp = await getTrueEvent(result);
            console.log(additionEventProp.data[0])
            setConcert(additionEventProp.data[0]);
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
