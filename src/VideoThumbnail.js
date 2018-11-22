import React, { Component } from 'react';
import {Grid, Card, Embed} from 'semantic-ui-react';
import { Video_Thumbnail } from './fixtures';

export default class VideoThumbNail extends Component {
    constructor(props){
        super(props);
        this.state = {
            'hide_embed': props.hide_embed || false
        }
    }
    render() {
        const data_point = this.props.datapoint
        return (
            <Grid.Column>
                <Card>
                    {
                        !this.state.hide_embed &&
                        <Embed
                            icon='right circle arrow'
                            placeholder={ Video_Thumbnail }
                            url={ data_point.url }
                        />
                    }
                    <Card.Content>
                        <Card.Header>{ data_point.id + ' - '+ data_point.title }</Card.Header>
                        <Card.Meta>
                            <span className='date'>{ data_point.captured_on.toDateString() }</span>
                        </Card.Meta>
                        <Card.Description>{ data_point.description }</Card.Description>
                    </Card.Content>
                </Card>
            </Grid.Column>
        )
    } 
}