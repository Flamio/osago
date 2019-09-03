import React from 'react';
import Vehicle from './components/Vehicle'
import Title from './components/Title'
import Person from './components/Person'
import {connect} from 'react-redux'
import Driver from './components/Driver'

class App extends React.Component {

  constructor(props)
  {
    super(props);
  }

  state = {
    drivers: [],
    unlimited: false,
    ownerVisible: true,
  }

  ownerIsDriver = (event) => {
    if (event.target.checked) {
      this.setState({ drivers: [<Driver driverChanged={this.driverChanged} driver={this.props.persons.drivers[1]} number="1"  key="1"/>] });
      this.props.dispatch({
        type : "FILL_FIRST_DRIVER",
        data : {}
      })
    }
  }

  insurantIsOwner = (event) => {
    this.setState({ ownerVisible: !event.target.checked });
  }

  unlimitedDrivers = (event) => {
    if (event.target.checked)
      this.setState({ drivers: [], unlimited: true });
    else
      this.setState({ unlimited: false });
  }

  driverChanged = (driver) =>
  {
    this.props.dispatch({
      type : "DRIVER_CHANGED",
      data : driver
    })

    this.setState({drivers:this.state.drivers})
  }

  changeDriversCount = (event) => {
    let d = [];
    console.log(this.props.persons);
    for (let i = 1; i <= event.target.value; i++)
      d.push(<Driver driverChanged={this.driverChanged} driver={this.props.persons.drivers[i]} number={i} key={i}/>)

    this.setState({ drivers: d, unlimited: false });
  }

  render() {
    return (
      <div>
        <Title />
        <div className="container">
          <form className="form">
            <br />
            <br />
            <Vehicle />
            <Person type="insurant" />
            <br />
            <div className="form-group">
              <div className="form-check form-check-inline">
                <input className="form-check-input" onChange={this.insurantIsOwner} type="checkbox" />
                Страхователь является собственником
              </div>
            </div>
            {this.state.ownerVisible && <div> <Person type="owner" /> <br /> </div>}

            <div className="form-group">
              <div className="form-check form-check-inline">
                <input className="form-check-input" onChange={this.ownerIsDriver} type="checkbox" />
                Собственник является водителем
                </div>
            </div>

            <br />
            <select onChange={this.changeDriversCount} value={this.state.drivers.length} defaultValue="0" className="custom-select col-md-6">
              <option value='0'>Количество водителей</option>
              <option value='1'>1 водитель</option>
              <option value='2'>2 водителя</option>
              <option value='3'>3 водителя</option>
              <option value='4'>4 водителя</option>
            </select>
            <div className="form-check form-check-inline" style={{ margin: '5px' }}>
              <input className="form-check-input" checked={this.state.unlimited} type="checkbox" onChange={this.unlimitedDrivers} />
              <label className="form-check-label">Количество водителей без ограничений</label>
            </div>
            <Driver driverChanged={this.driverChanged} driver={this.props.persons.drivers[0]} number={0} key={0}/>
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

      persons: state
  };
};

export default connect(mapStateToProps)(App);
