import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup';

class Counter extends React.Component {
    state = {days: 0, states: 0, parks: 0, miles: 0};

    onVisibilityChanged = (isVisible) => {
        if (isVisible) {
            this.setState({days: 72, states: 30, parks: 14, miles: 8962});
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <VisibilitySensor onChange={this.onVisibilityChanged}>
                <div className="row align-items-center text-center justify-content-around mb-5 d-lg-none">
                    <div className="col-6 col-sm-3">
                        <h2><CountUp start={0} end={this.state.days}></CountUp></h2>
                        <h5>Days</h5>
                    </div>
                    <div className="col-6 col-sm-3">
                        <h2><CountUp start={0} end={this.state.states}></CountUp></h2>
                        <h5>States</h5>
                    </div>
                    <div className="col-6 col-sm-3">
                        <h2><CountUp start={0} end={this.state.parks}></CountUp></h2>
                        <h5><span className="d-none d-sm-inline">Nat'l</span>Parks</h5>
                    </div>
                    <div className="col-6 col-sm-3">
                        <h2><CountUp start={0} end={this.state.miles} separator=","></CountUp></h2>
                        <h5>Miles</h5>
                    </div>
                </div>
            </VisibilitySensor>
        );
    } 
}

export default Counter;