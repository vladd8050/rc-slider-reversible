/* eslint react/no-multi-comp: 0, max-len: 0 */
import 'rc-slider/assets/index.less';

import React from 'react';
import ReactDOM from 'react-dom';
import Slider, { createSliderWithTooltip } from 'rc-slider';

const style = { width: 600, margin: 50 };

function log(value) {
  console.log(value); //eslint-disable-line
}


function percentFormatter(v) {
  return `${v} %`;
}

const SliderWithTooltip = createSliderWithTooltip(Slider);

class CustomizedSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 50,
    };
  }
  onSliderChange = (value) => {
    log(value);
    this.setState({
      value,
    });
  }
  onAfterChange = (value) => {
    console.log(value); //eslint-disable-line
  }
  render() {
    return (
      <Slider value={this.state.value}
        onChange={this.onSliderChange} onAfterChange={this.onAfterChange}
      />
    );
  }
}

class DynamicBounds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 0,
      max: 100,
    };
  }
  onSliderChange = (value) => {
    log(value);
  }
  onMinChange = (e) => {
    this.setState({
      min: +e.target.value || 0,
    });
  }
  onMaxChange = (e) => {
    this.setState({
      max: +e.target.value || 100,
    });
  }
  render() {
    return (
      <div>
        <label>Min: </label>
        <input type="number" value={this.state.min} onChange={this.onMinChange} />
        <br />
        <label>Max: </label>
        <input type="number" value={this.state.max} onChange={this.onMaxChange} />
        <br /><br />
        <Slider defaultValue={50} min={this.state.min} max={this.state.max}
          onChange={this.onSliderChange}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <div style={style}>
      <p>Basic Slider</p>
      <Slider onChange={log} />
    </div>
    <div style={style}>
      <p>Basic Slider，`step=20`</p>
      <Slider step={20} defaultValue={50} onBeforeChange={log} />
    </div>
    <div style={style}>
      <p>Basic Slider，`step=20, dots`</p>
      <Slider dots step={20} defaultValue={100} onAfterChange={log} />
    </div>
    <div style={style}>
      <p>Basic Slider，`step=20, dots, dotStyle={"{borderColor: 'orange'}"}, activeDotStyle={"{borderColor: 'yellow'}"}`</p>
      <Slider dots step={20} defaultValue={100} onAfterChange={log} dotStyle={{ borderColor: 'orange' }} activeDotStyle={{ borderColor: 'yellow' }} />
    </div>
    <div style={style}>
      <p>Inverted Basic Slider</p>
      <Slider inverted onChange={log} />
    </div>
    <div style={style}>
      <p>Inverted Basic Slider，`step=20`</p>
      <Slider inverted step={20} defaultValue={50} onBeforeChange={log} />
    </div>
    <div style={style}>
      <p>Inverted Basic Slider，`step=20, dots`</p>
      <Slider dots inverted step={20} defaultValue={100} onAfterChange={log} />
    </div>
    <div style={style}>
      <p>Inverted Basic Slider，`step=20, dots, dotStyle={"{borderColor: 'orange'}"}, activeDotStyle={"{borderColor: 'yellow'}"}`</p>
      <Slider dots inverted step={20} defaultValue={100} onAfterChange={log} dotStyle={{ borderColor: 'orange' }} activeDotStyle={{ borderColor: 'yellow' }} />
    </div>
    <div style={style}>
      <p>Slider with tooltip, with custom `tipFormatter`</p>
      <SliderWithTooltip
        tipFormatter={percentFormatter}
        tipProps={{ overlayClassName: 'foo' }}
        onChange={log}
      />
    </div>
    <div style={style}>
      <p>Slider with custom handle and track style.<strong>(old api, will be deperacete)</strong></p>
      <Slider
        defaultValue={30}
        maximumTrackStyle={{ backgroundColor: 'red', height: 10 }}
        minimumTrackStyle={{ backgroundColor: 'blue', height: 10 }}
        handleStyle={{
          borderColor: 'blue',
          height: 28,
          width: 28,
          marginLeft: -14,
          marginTop: -9,
          backgroundColor: 'black',
        }}
      />
    </div>
    <div style={style}>
      <p>Slider with custom handle and track style.<strong>(The recommended new api)</strong></p>
      <Slider
        defaultValue={30}
        trackStyle={{ backgroundColor: 'blue', height: 10 }}
        handleStyle={{
          borderColor: 'blue',
          height: 28,
          width: 28,
          marginLeft: -14,
          marginTop: -9,
          backgroundColor: 'black',
        }}
        railStyle={{ backgroundColor: 'red', height: 10 }}
      />
    </div>
    <div style={style}>
      <p>Basic Slider, disabled</p>
      <Slider onChange={log} disabled />
    </div>
    <div style={style}>
      <p>Controlled Slider</p>
      <Slider value={50} />
    </div>
    <div style={style}>
      <p>Customized Slider</p>
      <CustomizedSlider />
    </div>
    <div style={style}>
      <p>Slider with dynamic `min` `max`</p>
      <DynamicBounds />
    </div>
  </div>
  , document.getElementById('__react-content'));
