import React from 'react'

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import ru from 'date-fns/locale/ru'

class PersonFio extends React.Component
{

    data = {
        person: {}
    }
    
    textChanged = (name, event) => {
        this.data.person[name] = event.currentTarget.value;
        this.props.personChanged(this.data.person);
    }

    changeGender = event => {
        this.data.person.gender = event.currentTarget.value;
        this.props.personChanged(this.data.person);
    }

    birthdayChanged = date => {        
        this.data.person.birthday = date;
        this.props.personChanged(this.data.person);
    }

    render() 
    {
        return(
            <div>
                <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Фамилия</label>
                                <input type="text" onChange={this.textChanged.bind(this, "firstName")}
                                    value={this.props.person.firstName} className="form-control" /> 
                            </div>
                            <div className="form-group col-md-6">
                                <label>Имя</label>
                                <input type="text" value={this.props.person.name} onChange={this.textChanged.bind(this, "name")} className="form-control" />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label>Отчество</label>
                                <input type="text" value={this.props.person.lastName} onChange={this.textChanged.bind(this, "lastName")} className="form-control" />
                            </div>
                            <div className="form-group col-md-2">
                                <label>Дата рождения</label>
                                <br />
                                <DatePicker selected={this.props.person.birthday}
                                    onChange={this.birthdayChanged}
                                    dateFormat="dd.MM.yyyy"
                                    locale='ru'
                                    className='form-control' />

                            </div>
                            <div className="form-group col-md-4">
                                <label>Пол</label>
                                <br />
                                <div className="form-check form-check-inline">
                                    <input value="male" checked={this.props.person.gender == "male"} onChange={this.changeGender} className="form-check-input" type="radio" />
                                    <label className="form-check-label">Муж</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input value="female" checked={this.props.person.gender == "female"} onChange={this.changeGender} className="form-check-input" type="radio" />
                                    <label className="form-check-label">Жен</label>
                                </div>
                            </div>
                        </div>
            </div>
        )
    }
}


export default PersonFio