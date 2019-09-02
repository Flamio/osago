import React from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import ru from 'date-fns/locale/ru'


class AdditionalVehicleInfo extends React.Component {

    constructor(props) {
        super(props)
        registerLocale('ru', ru);
    }

    state = {
        documentIssuanceDate: "",
        dkIssuanceDate: "",
        dkExpirationDate: ""
    }

    onChangePassportIssuance = date => {
        this.setState({ documentIssuanceDate: date });
    }

    onChangeDkIssuance = date => {
        this.setState({ dkIssuanceDate: date });
    }

    onChangeDkExpiration = date => {
        this.setState({ dkExpirationDate: date });
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h2>Дополнительные данные о ТС </h2>
                </div>
                <div className="card-body">

                    <div className="form-row">
                        <div className="form-group col-md-8">
                            <label>Тип документа</label>
                            <select defaultValue="Тип документа" className="custom-select">
                                <option disabled>Тип документа</option>
                                <option>ПТС</option>
                                <option>СРТС</option>
                            </select>
                        </div>
                        <div className="form-group col-md-2">
                            <label>Дата выдачи</label>
                            <br />
                            <DatePicker
                                selected={this.state.documentIssuanceDate}
                                onChange={this.onChangePassportIssuance}
                                dateFormat="dd.MM.yyyy"
                                locale='ru'
                                className='form-control' />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Серия документа</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group col-md-6">
                            <label>Номер документа</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-8">
                            <label>Номер ДК</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group col-md-2">
                            <label>Дата выдачи ДК</label>
                            <br />
                            <DatePicker
                                dateFormat="dd.MM.yyyy"
                                locale='ru'
                                selected={this.state.dkIssuanceDate} onChange={this.onChangeDkIssuance} className='form-control' />
                        </div>
                        <div className="form-group col-md-2">
                            <label>Дата окончания ДК</label>
                            <br />
                            <DatePicker
                                dateFormat="dd.MM.yyyy"
                                locale='ru'
                                selected={this.state.dkExpirationDate} onChange={this.onChangeDkExpiration} className='form-control' />
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default AdditionalVehicleInfo 