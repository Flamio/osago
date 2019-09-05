import React from 'react';
import Vehicle from './components/Vehicle'
import Title from './components/Title'
import Person from './components/Person'
import { connect } from 'react-redux'
import Driver from './components/Driver'
import Policy from './components/Policy'

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  ownerIsDriver = (event) => {
    this.props.dispatch({
      type: "OWNER_IS_DRIVER",
      data: event.currentTarget.checked
    })
  }

  insurantIsOwner = (event) => {
    this.props.dispatch({
      type: "INSURANT_IS_OWNER",
      data: event.currentTarget.checked
    })
  }

  unlimitedDrivers = (event) => {
    this.props.dispatch({
      type: "UNLIMITED_DRIVERS",
      data: event.currentTarget.checked
    })
  }

  driverChanged = (driver) => {
    this.props.dispatch({
      type: "DRIVER_CHANGED",
      data: driver
    })
  }

  changeDriversCount = (event) => {
    this.props.dispatch({
      type: "DRIVER_COUNT_CHANGE",
      data: event.currentTarget.value
    })
  }

  getList = () => {
    var rows = [];
    for (var i = 0; i < this.props.store.drivers.length; i++) {
      rows.push(<Driver driverChanged={this.driverChanged} driver={this.props.store.drivers[i]} number={i} key={i} />);
    }
    return rows;
  }

  onFormSubmit = event => {
    event.preventDefault();
    console.log(this.props.store);
  }




  render() {
    return (
      <div>
        <Title />
        <div className="container">
          <form className="form" onSubmit={this.onFormSubmit}>
            <br />
            <br />
            <Vehicle />
            <Person type="insurant" />
            <br />
            <div className="form-group">
              <div className="form-check form-check-inline">
                <input className="form-check-input" onChange={this.insurantIsOwner} name="owner1" type="checkbox" />
                Страхователь является собственником
              </div>
            </div>
            {!this.props.store.insurantIsOwner &&
              <Person type="owner" />}
            <br />

            <div className="form-group">
              <div className="form-check form-check-inline">
                <input className="form-check-input" checked={this.props.store.ownerIsDriver} onChange={this.ownerIsDriver} type="checkbox" />
                Собственник является водителем
                </div>
            </div>

            <br />
            <select onChange={this.changeDriversCount} value={this.props.store.drivers.length} defaultValue="0" className="custom-select col-md-6">
              <option value='0'>Количество водителей</option>
              <option value='1'>1 водитель</option>
              <option value='2'>2 водителя</option>
              <option value='3'>3 водителя</option>
              <option value='4'>4 водителя</option>
            </select>
            <div className="form-check form-check-inline" style={{ margin: '5px' }}>
              <input className="form-check-input" checked={this.props.store.unlimitedDrivers} type="checkbox" onChange={this.unlimitedDrivers} />
              <label className="form-check-label">Количество водителей без ограничений</label>
            </div>
            {this.getList()}
            <Policy />
            <br />
            <br />
            <input type="submit" className='btn btn-success col-md-12' value="Оформить заявку" />
          </form>
        </div>
        <br />
      </div >
    );
  }
}


const mapStateToProps = state => {
  console.log(state);
  return {
    store: state
  };
};

export default connect(mapStateToProps)(App);
