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
                                        src={"https://res.cloudinary.com/hhp1uohee/"+ concert.img}
                                        alt=""></img>
                                    {console.log(concert)}
                                </center>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div>Corsair GS600 600 Watt PSU</div>
                            <div>The Corsair Gaming Series GS600 is the ideal price/performance
                                choice for mid-spec gaming PC
                            </div>
                            <div>$ 1234.00</div>
                            <div>In Stock</div>
                            <div className="btn-group">
                                <button type="button" className="btn btn-success">
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="col-md-12 product-info">
                        <ul className="nav nav-tabs nav_tabs">
                            <li className="active"><a href="#service-one" data-toggle="tab">DESCRIPTION</a></li>
                            <li><a href="#service-two" data-toggle="tab">PRODUCT INFO</a></li>
                            <li><a href="#service-three" data-toggle="tab">REVIEWS</a></li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane fade in active">
                                <section className="container">
                                    The Corsair Gaming Series GS600 power supply is the ideal price-performance solution
                                    for building or upgrading a Gaming PC. A single +12V rail provides up to 48A of
                                    reliable, continuous power for multi-core gaming PCs with multiple graphics cards.
                                    The ultra-quiet, dual ball-bearing fan automatically adjusts its speed according to
                                    temperature, so it will never intrude on your music and games. Blue LEDs bathe the
                                    transparent fan blades in a cool glow. Not feeling blue? You can turn off the
                                    lighting with the press of a button.
                                    <h3>Corsair Gaming Series GS600 Features:</h3>
                                    <li>It supports the latest ATX12V v2.3 standard and is backward compatible with
                                        ATX12V 2.2 and ATX12V 2.01 systems
                                    </li>
                                    <li>An ultra-quiet 140mm double ball-bearing fan delivers great airflow at an very
                                        low noise level by varying fan speed in response to temperature
                                    </li>
                                    <li>80Plus certified to deliver 80% efficiency or higher at normal load conditions
                                        (20% to 100% load)
                                    </li>
                                    <li>0.99 Active Power Factor Correction provides clean and reliable power</li>
                                    <li>Universal AC input from 90~264V — no more hassle of flipping that tiny red
                                        switch to select the voltage input!
                                    </li>
                                    <li>Extra long fully-sleeved cables support full tower chassis</li>
                                    <li>A three year warranty and lifetime access to Corsair’s legendary technical
                                        support and customer service
                                    </li>
                                    <li>Over Current/Voltage/Power Protection, Under Voltage Protection and Short
                                        Circuit Protection provide complete component safety
                                    </li>
                                    <li>Dimensions: 150mm(W) x 86mm(H) x 160mm(L)</li>
                                    <li>MTBF: 100,000 hours</li>
                                    <li>Safety Approvals: UL, CUL, CE, CB, FCC Class B, TÜV, CCC, C-tick</li>
                                </section>
                            </div>
                            <div className="tab-pane fade">
                                <section className="container"></section>
                            </div>
                            <div className="tab-pane fade">ТАБ ПАНЕЛЬ</div>
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
