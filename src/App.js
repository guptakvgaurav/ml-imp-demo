import React, { Component } from 'react';
import Experment1 from './Experiment1';
import Experment2 from './Experiment2';
import Experment3 from './Experiment3';
import SampleResult from './Result';
import { Container } from 'semantic-ui-react'
import { Menu } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

const ExpermientList = [{
  name: 'Experiment_1',
  displayName: 'Video Analysis',
  component: Experment1
},{
  name: 'Experiment_2',
  displayName: 'Experiment 2',
  component: Experment2
},{
  name: 'Experiment_3',
  displayName: 'Experiment 3',
  component: Experment3
},{
  name: 'Experiment_4',
  displayName: 'Sample Result',
  component: SampleResult
}]
class App extends Component {
  state = { 'activeItem': ExpermientList[0].name}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    const activeExperiment = ExpermientList.find(experiment => activeItem === experiment.name)
    const ActiveExperimentComponent = activeExperiment.component;
    return (
      <Container>
        <Menu>
          {
            ExpermientList.map(experiment => 
              <Menu.Item
                name={experiment.name}
                content={experiment.displayName}
                active={activeItem === experiment.name}
                onClick={this.handleItemClick}
              ></Menu.Item>)
          }
        </Menu>
        <ActiveExperimentComponent />
      </Container>
    );
  }
}

export default App;
