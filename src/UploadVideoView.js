import React, { Component } from 'react';
import { Card, Embed, Button } from 'semantic-ui-react';
import { Video_Thumbnail } from './fixtures';

export default class UploadVideoView extends Component{
    render() {
        const data_point = this.props.data_point || {
            'url': null,
            'captured_on': new Date('01/01/1970'),
            'description': 'N/A',
            'title': 'N/A',
            'id': ''
        };
        return (
            <Card>
                {   data_point.url &&
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
                <Card.Content extra>
                    <Button.Group>
                        <Button size="big" secondary>
                            Browse
                        </Button>
                        <Button.Or text="and"/>
                        <Button size="big" primary>
                            Submit
                        </Button>
                    </Button.Group>
                </Card.Content>                
            </Card>
        )
    }
}