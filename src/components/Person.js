import React from "react"

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import ru from 'date-fns/locale/ru'
import InputMask from 'react-input-mask';
import { connect } from 'react-redux'
import PersonFio from './PersonFio'

class Person extends React.Component {
    data =
        {
            passportDate: "",
        }

    onChangePassportDate = date => {
        this.data.passportDate = date;
    }

    personChanged = p => {
        this.props.dispatch({
            type: "EDIT_PERSON",
            data: { key: this.props.type, person: p }
        })
    }

    render() {
        return (
            <div>
                <br />
                <div className="card">
                    <div className="card-header">
                        {this.props.type === "insurant" && <h2> Страхователь </h2>}
                        {this.props.type === "owner" && <h2> Собственник </h2>}
                    </div>
                    <div className="card-body">

                        <PersonFio person={this.props.persons[this.props.type]} personChanged={this.personChanged} />

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
                                <DatePicker selected={this.data.passportDate}
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
                    <InputMask mask="+7 (999) 999-99-99" maskChar=" " className="form-control" />
                </div>
                <div className="form-group col-md-6">
                    <label>Электронная почта</label>
                    <input type="email" className="form-control" />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        persons: state
    };
};

export default connect(mapStateToProps)(Person)