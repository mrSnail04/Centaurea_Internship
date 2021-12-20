import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import {API} from "../api/api";


export const EventPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [concert, setConcert] = useState(null);
    const [count, setCount] = useState(1);
    let {slug} = useParams(); //{slug: 'halloween'}

    const increase = () => {
        let newcount = count + 1
        setCount(newcount);
    }
    const decrease = () => {
        let newcount = count - 1
        setCount(newcount);
    }
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
            return result.data[0];
        } else {
            console.log('Ошибка')
        }
    }
    const getOpenAir = async (slug) => {
        let result = await API.openair(slug);
        if (result.status === 200) {
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
        switch (result.type_event) {
            case "Party":
                let concParty = await getParty(result.slug)
                return concParty;
                break;
            case "OpenAir":
                let concOpenAir = await getOpenAir(result.slug)
                return concOpenAir;
                break;
            case "ClassicalConcert":
                let concClassical = await getClassicalConcert(result.slug)
                return concClassical;
                break;
            case "Other":
                let concOther = await getEvent(result.slug)
                return concOther;
                break;
        }
    }

    const submit = async () => {
        let event = await getEvent(slug);
        console.log(event.id)
        let result = await API.productAddToCart(event.id);
        console.log(result)
    }

    useEffect(() => {
        let currentSlug = slug;
        async function fetchEvent() {
            setLoading(true);
            let result = await getEvent(currentSlug)
            let additionEventProp = await getTrueEvent(result);
            setConcert(additionEventProp);
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
                    <h6><span className="label label-default">{concert.date}</span></h6>
                    <hr/>
                    <h5 className='text-center'>Исполнитель: {concert.actor}</h5>
                    <h5 className='text-center'>Адрес: </h5><p className='text-center'>{concert.address}</p>
                    <h5 className='text-left'>Описание: </h5><p>{concert.description}</p>
                    <hr/>
                    <table className="table">
                        <thead>
                            <th scope="col" >
                                <span style={{display: 'flex', justifyContent: 'flex-start'}}>Цена</span>
                            </th>
                            <th scope="col" >
                                <span style={{display: 'flex', justifyContent: 'center'}}>Количество</span>
                            </th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{concert.price}</td>
                                <td>
                                    <button type="button" className="btn btn-outline-info" disabled={count < 2} onClick={decrease}>-</button>
                                    <span style={{margin: '3px'}} className="btn btn-outline-secondary">{count}</span>
                                    <button type="button" className="btn btn-outline-info" disabled={count > 10} onClick={increase}>+</button>
                                </td>
                                <td>
                                    <button style={{display: 'flex', justifyContent: 'flex-end'}}
                                            type="button" className="btn btn-success" onClick={submit}>
                                        Добавить в корзину
                                    </button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
};
