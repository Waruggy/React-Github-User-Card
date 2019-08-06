import React from 'react';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css';
import { Segment, Card, Image } from 'semantic-ui-react';

class CardContent extends React.Component {
    constructor() {
        super()
        this.state = {
            data: []
        };
    }
    componentDidMount() {
        axios.get(`https://api.github.com/users/waruggy/followers`)
            .then(res => this.setState(res))
    }
    render() {
        console.log(this.state.login)

         return (

             this.state.data.map(i => {

                 return (
                    < Segment raised >

                         <Card>
                            <Image src={i.avatar_url} />
                            <Card.Content>
                                <Card.Header>
                                    {i.login}
                                </Card.Header>
                                <Card.Meta>{i.html_url}</Card.Meta>
                                <Card.Description>Site Type: {i.type}</Card.Description>
                            </Card.Content>
                        </Card>
                    </Segment >)
            })

         )
    }
}

 export default CardContent;