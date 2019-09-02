import React from "react"

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import ru from 'date-fns/locale/ru'
import InputMask from 'react-input-mask';

class Person extends React.Component {
    state =
        {
            passportDate: "",
            person: {
                firstName: "",
                name: "",
                lastName: "",
                birthday: "",
                gender: ""
            }
        }

    birthdayChanged = date =>{
        let p = this.state.person;
        p.birthday = date;
        this.setState({ person: p });
    }    

    onChangePassportDate = date => {
        this.setState({ passportDate: date });
    }

    changeGender = event => {
        let p = this.state.person;
        p.gender = event.currentTarget.value;
        this.setState({ person: p });
    }

    getPerson = () => {
        return this.state.person;
    }

    textChanged = (name, event) =>
    {
        let p = this.state.person;
        p[name] = event.currentTarget.value;
        this.setState({person: p});
    }

    render() {
        return (
            <div>
                <br />
                <div className="card">
                    <div className="card-header">
                        {this.props.type === "insurant" && <h2> Страхователь </h2>}
                        {this.props.type === "owner" && <h2> Собственник </h2>}
                        {this.props.type === "driver" && <h2> Водитель {this.props.number} </h2>}
                    </div>
                    <div className="card-body">

                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Фамилия</label>
                                <input type="text" onChange={this.textChanged.bind(this, "firstName")} value={this.state.person.firstName} className="form-control" />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Имя</label>
                                <input type="text" value={this.state.person.name} onChange={this.textChanged.bind(this, "name")} className="form-control" />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label>Отчество</label>
                                <input type="text" value={this.state.person.lastName} onChange={this.textChanged.bind(this, "lastName")}   className="form-control" />
                            </div>
                            <div className="form-group col-md-2">
                                <label>Дата рождения</label>
                                <br/>
                                <DatePicker selected={this.state.person.birthday}
                                    onChange={this.birthdayChanged}
                                    dateFormat="dd.MM.yyyy"
                                    locale='ru'
                                    className='form-control' />
                                
                            </div>
                            <div className="form-group col-md-4">
                                <label>Пол</label>
                                <br />
                                <div className="form-check form-check-inline">
                                    <input value="male" checked={this.state.person.gender == "male"} onChange={this.changeGender} className="form-check-input" type="radio" />
                                    <label className="form-check-label">Муж</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input value="female" checked={this.state.person.gender == "female"} onChange={this.changeGender} className="form-check-input" type="radio" />
                                    <label className="form-check-label">Жен</label>
                                </div>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Город постоянной регистрации</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Улица</label>
                                <div className="input-group">
                                    <input type="text" className="form-control" />
                                    <div className="input-group-append form-check-inline">
                                        <input type="checkbox" style={{ margin: '5px' }} />
                                        <label className="form-check-label" style={{ margin: '2px' }}>Отсутствует в
                                        списке</label>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="form-row">
                            <div className="form-group col-md-3">
                                <label>Номер дома</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group col-md-3">
                                <label>Номер корпуса</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="form-group col-md-6">
                                <label>Индекс</label>
                                <input type="text" className="form-control" />
                            </div>

                        </div>


                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Номер квартиры</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group col-md-3">
                                <label>Серия паспорта</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group col-md-3">
                                <label>Номер паспорта</label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>


                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Дата выдачи паспорта</label>
                                <br />
                                <DatePicker selected={this.state.passportDate}
                                    onChange={this.onChangePassportDate}
                                    dateFormat="dd.MM.yyyy"
                                    locale='ru'
                                    className='form-control' />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Кем выдан паспорт</label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                        {this.props.type === "insurant" && <PhoneAndEmail />}
                    </div>
                </div>
            </div>
        )
    }
}

class PhoneAndEmail extends React.Component {
    render() {
        return (
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label>Телефон</label>
                    <br></br>
                    <InputMask mask="+7 (999) 999-99-99" maskChar=" " />
                </div>
                <div className="form-group col-md-6">
                    <label>Электронная почта</label>
                    <input type="email" className="form-control" />
                </div>
            </div>
        )
    }
}

export default Person