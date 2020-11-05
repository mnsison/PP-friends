import React from 'react';
import './Matches.css';
import {withRouter, Link} from 'react-router-dom'

class Matches extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userId: this.props?.location?.state?.id,
            userIds: [],
            matchesExist: "not set"
        }
    }
    get_matches(){
        const myRequest = new Request('http://127.0.0.1:5000/matches', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"userId": this.state.userId}),
            });
        fetch(myRequest)
            .then(response => response.json())
            .then(res => 
                (res.userIds && res.userIds.length != 0) ?
                    this.setState({
                        matchesExist: "exists", 
                        userIds: res.userIds,
                        conversationIds: res.conversationIds, 
                        firstnames: res.firstnames
                    })
                    :
                    this.setState({
                        matchesExist: "not exists"
                    })
            )
            .catch((error) => {
                console.error(error)
            })
    }
    componentDidMount() {
        this.get_matches()
    }
    componentDidUpdate(prevProps, prevState){
        for (var i = 0; i < this.state.userIds.length; ++i){
            if (this.state.userIds[i] != prevState.userIds[i]) {
                this.get_matches()
                break;
            }
        }
        
    }

    render(){
        let matchingSection;
        if (this.state.matchesExist == "exists"){
            let userItems = [];
            for (var i = 0; i < this.state.userIds.length; i++){
                var pos_user = this.state.userIds[i];
                userItems.push(
                    <tr className='pos-user' key={pos_user}>
                        {pos_user}
                        {this.state.firstnames[i]}
                    </tr>
                )
            }
            matchingSection = 
                <div>
                    <td id='Matches-congrats'>
                        Congratulations, these people want to be your friend!
                    </td>
                    {userItems}
                </div>
        }
        else if (this.state.matchesExist == "not exists") {
            matchingSection = <h2 id='Matches-none'>
                Sorry, No one wants to be your friend for now. Please try again later :(
            </h2>
        }
        else {
            matchingSection = <h2></h2>
        }
        return(
            <div id='Matches-section'>
                <h2 id='Matches-header'>Matches</h2>
                <div>{this.state.userId}</div>
                <Link to={{pathname: '/main', state: {id: this.state.userId}}}>Back to Swiping!</Link>
                <div id='Matches-section'>
                    {matchingSection}
                </div>
            </div>
        )
    }

}

export default withRouter(Matches)