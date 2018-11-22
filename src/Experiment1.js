import React, { Component } from 'react';
import { Grid, Segment, Header, Button } from 'semantic-ui-react'
import { Videos } from './fixtures';
import VideoThumbNail from './VideoThumbnail'
import UploadVideoView from './UploadVideoView';

class VideoUploadView extends Component {
    render() {
        const dps = this.props.data_points;
        return (
            <Segment.Group horizontal >
                <Segment placeholder >
                    <Grid  divided>
                        <Grid.Row columns={3}>
                            {
                                dps.map((dp, i) => <VideoThumbNail datapoint={ dp } key={i}/>)
                            }
                        </Grid.Row>
                    </Grid>
                    </Segment>
                    <Segment >
                        <Header as='h3'>Upload Section</Header>
                        <Grid>
                            <Grid.Row columns={1}>
                                <UploadVideoView />
                            </Grid.Row>
                        </Grid>
                </Segment>
            </Segment.Group>
        )
    }
}

/**
 * Video Analysis experiment includes two parts.
 * Part 1: Analysis of existing video.
 * Part 2: Uploading a video and analyze it.
 * Analysis part is business logic, hence not covered in presentation layer. 
 */
class VideoAnalysis extends Component {

    state = { 'analysing': false }
    onAnalyse = (e, status) => {
        this.setState({
            'analysing': status
        })
    }
    render() {
        const data_points = [ ...Videos ];
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <Header as="h5">
                            <p>Core objective is to detect the head count, detect faces and get to know about the
                            demographies of the subjects in the video.
                            </p>
                            <p>
                            If there is something extra being returned by vendors, then such results should be listed
                            in the result section.
                            </p>

                        </Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column columns={1}>
                        <VideoUploadView data_points={ data_points }/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1}>
                    <Grid.Column textAlign="center">
                        <Button.Group>
                            <Button 
                                size="massive"
                                disabled = { this.state.analysing === false}
                                negative 
                                onClick={(e, data) => this.onAnalyse(e, false)}>
                                Stop Analysis
                            </Button>
                            <Button.Or />
                            <Button 
                                size="massive"
                                disabled={ this.state.analysing === true}
                                positive 
                                onClick={(e, data) => this.onAnalyse(e, true)}>
                                Start Analysis
                            </Button>
                        </Button.Group>
                        
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default VideoAnalysis;