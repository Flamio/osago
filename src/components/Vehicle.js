import React from 'react'
import AdditionalVehicleInfo from './AdditionalVehicleInfo'

class Vehicle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            idName: "VIN"
        }
    }

    idChanged = (event) => {
        this.setState({ idName: event.target.value });
    };

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        <h2>Транспортное средство</h2>
                    </div>
                    <div className="card-body">

                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Гос. номер</label>
                                <div className="input-group">
                                    <input type="text" className="form-control" />
                                    <div className="input-group-append">
                                        <button className="btn btn-primary">Подгрузить</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Идентификатор</label>
                                <select className="custom-select" defaultValue="VIN" onChange={this.idChanged} id="identifier">
                                    <option>VIN</option>
                                    <option>Номер кузова</option>
                                    <option>Номер рамы</option>
                                </select>
                            </div>
                            <div className="form-group col-md-6">
                                <label id="identifier_label">{this.state.idName}</label>
                                <div className="input-group">
                                    <input id="identifier_data" type="text" className="form-control" />
                                    <div className="input-group-append">
                                        <button className="btn btn-primary">Подгрузить</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Мощность</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Цель</label>
                                <select className="custom-select">
                                    <option>Личные</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Марка</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Модель</label>
                                <select className="custom-select">
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Год выпуска</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Используется</label>
                                <select className="custom-select">
                                    <option>Без прицепа</option>
                                    <option>С прицепом</option>
                                </select>
                            </div>
                        </div>
                        <div className="custom-control custom-checkbox form-check">
                            <input type="checkbox" className="custom-control-input" />
                            <label className="custom-control-label">Новое ТС</label>
                        </div>

                    </div>
                </div>
                <br/>
                <br/>
                <AdditionalVehicleInfo />
            </div>
        )
    }
}

export default Vehicle