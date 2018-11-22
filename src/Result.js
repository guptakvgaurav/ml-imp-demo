import React, { Component } from 'react';
import { Table, Label, Statistic } from 'semantic-ui-react'
import { SampleResult, Videos, Images, Genders } from './fixtures';
import VideoThumbNail from './VideoThumbnail';



class ResultRowView extends Component {
    render() {
        const dp = Videos.find(video => video.id === this.props.result.id)
        return (
            <Table.Row>
                <Table.Cell>
                    <VideoThumbNail datapoint={ dp } hide_embed={true}></VideoThumbNail>
                </Table.Cell>
                <Table.Cell>{ this.props.result.head_count}</Table.Cell>
                <Table.Cell>
                    <div>
                        <div>
                            {
                                this.props.result.demographics.map(demography => {
                                    const detected_gender = Images.find(image => image.type === demography.gender)
                                    if (!detected_gender){
                                        return null;
                                    }
                                    return (
                                        <Label as='a' image>
                                            <img src={ detected_gender.url} 
                                                alt={ demography.gender }
                                            />
                                            { `Age - ` + demography.age }
                                        </Label>
                                    )
                                })
                            }
                        </div>
                        <Statistic.Group>
                            <Statistic>
                                <Statistic.Value>
                                    { this.props.result.demographics.filter(d => d.gender == Genders.Male).length}
                                </Statistic.Value>
                                <Statistic.Label>Males</Statistic.Label>
                            </Statistic>
                            <Statistic>
                                <Statistic.Value>
                                    { this.props.result.demographics.filter(d => d.gender == Genders.Female).length}
                                </Statistic.Value>
                                <Statistic.Label>Female</Statistic.Label>
                            </Statistic>
                        </Statistic.Group>
                    </div>
                </Table.Cell>
            </Table.Row>
        )
    }
}

const TableExampleCollapsing = ({ results }) => (
    <Table basic='very' celled collapsing>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Video</Table.HeaderCell>
          <Table.HeaderCell>Head Count</Table.HeaderCell>
          <Table.HeaderCell>Demographics</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
  
      <Table.Body>
        {
            results.map((result, i) => <ResultRowView result={ result } key={i}/>)
        }
      </Table.Body>
    </Table>
  )
  
class SampleResultView extends Component {
    render() {
        return (
            <TableExampleCollapsing results= { SampleResult }/>
        )
    }
}

export default SampleResultView;