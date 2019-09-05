import React from 'react'
import PersonFio from './PersonFio'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import ru from 'date-fns/locale/ru'
import "../css/custom.css"

class Policy extends React.Component {

    state =
        {
            begin: new Date(),
            end: ""
        }

    dateChanged = (name, date) => {
        this.setState({ [name]: date })
    }

    render() {
        return (<div>
            <br />
            <div className="card">
                <div className="card-header">
                    <h2> Полис </h2>
                </div>
                <div className="card-body">

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Дата начала страхования</label>
                            <br />
                            <DatePicker selected={this.state.begin}
                                onChange={this.dateChanged.bind(this, "begin")}
                                dateFormat="dd.MM.yyyy"
                                locale='ru'
                                className='form-control' />
                        </div>
                        <div className="form-group col-md-6">
                            <label>Период страхования</label>

                            <select defaultValue='3' className="custom-select">
                                <option disabled value='3'>3 месяца</option>
                                <option disabled value='6'>6 месяцев</option>
                                <option disabled value='12'>12 месяцев</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Серия предыдущего полиса</label>
                            <input className="form-control" type='text' />

                        </div>
                        <div className="form-group col-md-6">
                            <label>Номер предыдущего полиса</label>
                            <input className="form-control" type='text' />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" />
                            Направляется к месту регистрации
                            </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Policy