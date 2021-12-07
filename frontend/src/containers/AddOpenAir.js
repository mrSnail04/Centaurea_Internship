import React, {useState} from 'react';
import {API} from "../api/api";
import 'bootstrap/dist/css/bootstrap.min.css';

export const AddOpenAir = () => {

    const [name, setName] = useState("");
    const [actor, setActor] = useState("");
    const [date, setDate] = useState("");
    const [slug, setSlug] = useState("");
    const [qty_ticket, setQtyTicket] = useState("");
    const [address, setAddress] = useState("");
    const [type_event, setTypeEvent] = useState("");
    const [image, setImage] = useState("");
    const [route, setRoute] = useState("");
    const [headliner, setHeadliner] = useState("");

    const changeHeadliner = (e) => {
        let newHeadliner = e.currentTarget.value;
        //validation
        setHeadliner(newHeadliner);
    }

    const changeRoute = (e) => {
        let newRoute = e.currentTarget.value;
        //validation
        setRoute(newRoute);
    }

    const changeImage = (e) => {
        let newImage = e.currentTarget.value;
        //validation
        setImage(newImage);
    }

    const changeAddress = (e) => {
        let newAddress = e.currentTarget.value;
        //validation
        setAddress(newAddress);
    }

    const changeTypeEvent = (e) => {
        let newTypeEvent = e.currentTarget.value;
        //validation
        setTypeEvent(newTypeEvent);
    }

    const changeName = (e) => {
        let newName = e.currentTarget.value;
        //validation
        setName(newName);
    }

    const changeActor = (e) => {
        let newActor = e.currentTarget.value;
        //validation
        setActor(newActor);
    }

    const changeDate = (e) => {
        let newDate = e.currentTarget.value;
        //validation
        setDate(newDate);
    }

    const changeSlug = (e) => {
        let newSlug = e.currentTarget.value;
        //validation
        setSlug(newSlug);
    }

    const changeQtyTicket = (e) => {
        let newQtyTicket= e.currentTarget.value;
        //validation
        setQtyTicket(newQtyTicket);
    }

    const submit = async () => {
        let result = await API.add_event(name, actor, date, slug, qty_ticket,
                                        address, type_event, image, route, headliner);
        if (result?.statusText === 'Created') {
            console.log(result.statusText)

        }
    }

    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <h3 className="text-center">Добавление Мероприятия</h3>
                <hr/>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span style={{width:'150px'}} className="input-group-text">Название</span>
                    </div>
                    <div>
                        <input className="form-control"
                               type="text" onChange={changeName}
                               placeholder={"Название"} value={name}/>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span style={{width:'150px'}} className="input-group-text">Артист/Группа</span>
                    </div>
                    <div>
                        <input className="form-control"
                               type="text" onChange={changeActor}
                               placeholder={"Артист/Группа"} value={actor}/>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span style={{width:'150px'}} className="input-group-text">Слаг</span>
                    </div>
                    <div>
                        <input className="form-control"
                               type="text" onChange={changeSlug}
                               placeholder={"Слаг"} value={slug}/>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span style={{width:'150px'}} className="input-group-text">Кол-во билетов</span>
                    </div>
                    <div>
                        <input className="form-control"
                               type="text" onChange={changeQtyTicket}
                               placeholder={"Кол-во билетов"} value={qty_ticket}/>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span style={{width:'150px'}} className=" input-group-text">Адрес</span>
                    </div>
                    <div>
                        <input className="form-control"
                               type="text" onChange={changeAddress}
                               placeholder={"Адрес"} value={address}/>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span style={{width:'150px'}} className=" input-group-text">Тип мероприятия</span>
                    </div>
                    <div>
                        <input className="form-control"
                               type="text" onChange={changeTypeEvent}
                               placeholder={"Тип концерта"} value={type_event}/>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span style={{width:'150px'}} className=" input-group-text">Дата мероприятия</span>
                    </div>
                    <div>
                        <input className="form-control"
                               type="text" onChange={changeDate}
                               placeholder={"Дата"} value={date}/>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span style={{width:'150px'}} className=" input-group-text">Маршрут</span>
                    </div>
                    <div>
                        <input className="form-control"
                               type="text" onChange={changeRoute}
                               placeholder={"Маршрут"} value={route}/>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span style={{width:'150px'}} className=" input-group-text">Хэдлайнер</span>
                    </div>
                    <div>
                        <input className="form-control"
                               type="text" onChange={changeHeadliner}
                               placeholder={"Хэдлайнер"} value={headliner}/>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span style={{width:'150px'}} className=" input-group-text">Изображение</span>
                    </div>
                    <div>
                        <input className="form-control"
                               type="text" onChange={changeImage}
                               placeholder={"Изображение"} value={image}/>
                    </div>
                </div>
                <button type="button" className="btn btn-primary" onClick={submit}>Добавить</button>
            </div>
        </div>
    );
}