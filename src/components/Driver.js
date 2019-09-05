import React from 'react'
import PersonFio from './PersonFio'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import ru from 'date-fns/locale/ru'

class Driver extends React.Component {

    driver = {

    }

    state = {
        issueDate: "",
        beginExperienceDate: ""
    }

    beginExperienceDateChanged = date => {
        this.setState({ beginExperienceDate: date });
    }

    issueDateChanged = date => {
        this.setState({ issueDate: date });
    }

    personChanged = (person) => {
        this.driver = {}
        this.driver.person = person;
        this.driver.number = this.props.number;
        this.props.driverChanged(this.driver);
    }

    render() {
        return (
            <div>
                <br />
                <div className="card">
                    <div className="card-header">
                        <h2> Водитель {Number(this.props.number) + 1} </h2>
                    </div>
                    <div className="card-body">
                        <PersonFio personChanged={this.personChanged} person={this.props.driver} /> {console.log(this.props.driver)}
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Серия в/у</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Номер в/у</label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="form-row" >
                            <div className="form-group col-md-6">
                                <label>Дата выдачи</label>
                                <br />
                                <DatePicker selected={this.state.issueDate}
                                    onChange={this.issueDateChanged}
                                    dateFormat="dd.MM.yyyy"
                                    locale='ru'
                                    className='form-control' />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Дата начала стажа</label>
                                <br />
                                <div>
                                    <DatePicker selected={this.state.beginExperienceDate}
                                        onChange={this.beginExperienceDateChanged}
                                        dateFormat="dd.MM.yyyy"
                                        locale='ru'
                                        className='form-control' />
                                    <br />
                                    <small class="text-muted">Если Вы не знаете точную дату начала стажа выберите 01.07. и правильный год начала стажа</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Driver