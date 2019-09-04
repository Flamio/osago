import React from 'react'
import PersonFio from './PersonFio'

class Driver extends React.Component {

    driver = {

    }
    personChanged = (person) =>
    {
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
                        <PersonFio personChanged={this.personChanged}  person={this.props.driver} /> {console.log(this.props.driver)}
                    </div>
                </div>
            </div>
        )
    }
}

export default Driver