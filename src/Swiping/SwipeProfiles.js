import React from "react";
import Header from '../Header/Header';
import "./SwipeProfile.css";
import { withRouter, Link } from "react-router-dom";
import {getCookie, setCookie} from '../cookies';
import {getLocation} from '../GetLocation';

class SwipeProfiles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: getCookie("userId"),
      age: "",
      firstName: "",
      description: "",
      interests: "",
      gender: "",
      workplace: "",
      potentialFriends: [],
      displayedUserId: "",
      error: "",
    };

    this.getPotentialFriendList = this.getPotentialFriendList.bind(this);
    this.displayProfile = this.displayProfile.bind(this);
    this.handleSwipe = this.handleSwipe.bind(this);
  }

  getPotentialFriendList() {
    const id = this.state.id;
    var formData = new FormData();
    formData.append("userId", id);
    const myRequest = new Request("http://127.0.0.1:5000/getPotentialFriends", {
      method: "POST",
      body: formData,
    });
    fetch(myRequest)
      .then((res) => res.json())
      .then((res) => {
        if (res.response === "Success") {
          var potentialFriendsList = res.potentialListId;
          const displayProfileId = potentialFriendsList.pop();
          this.setState({
            potentialFriends: potentialFriendsList,
            displayedUserId: displayProfileId,
            error: "",
          });

          this.displayProfile();
        } else {
          this.setState({
            error: res.response,
          });
        }
      })
      .catch((error) => {
        this.setState({
          error: "Error connecting to backend",
        });
      });
  }

  displayProfile() {
    const displayId = this.state.displayedUserId;
    if (displayId) {
      var formData = new FormData();
      formData.append("userId", displayId);
      const myRequest = new Request("http://127.0.0.1:5000/displayProfile", {
        method: "POST",
        body: formData,
      });
      fetch(myRequest)
        .then((res) => res.json())
        .then((res) => {
          if (res.response === "Success") {
            this.setState({
              age: res.age,
              firstName: res.firstName,
              description: res.description,
              interests: res.interests,
              gender: res.gender,
              workplace: res.workPlace,
              error: "",
            });
          } else {
            this.setState({
              error: res.response,
            });
          }
        })
        .catch((error) => {
          this.setState({
            error: "Error connecting to backend",
          });
        });
    } else {
      this.setState({
        error: (
          <p>
            <br></br>
            There are no current potential friends for you within the area.{" "}
            <br></br>Try updating your profile or come back later!
          </p>
        ),
      });
    }
  }

  handleSwipe(choice) {
    const displayId = this.state.displayedUserId;
    const currentUserId = this.state.id;
    var formData = new FormData();
    formData.append("currentUserId", currentUserId);
    formData.append("shownUserId", displayId);
    formData.append("match", choice);
    const myRequest = new Request("http://127.0.0.1:5000/swipe", {
      method: "POST",
      body: formData,
    });
    fetch(myRequest)
      .then((res) => res.json())
      .then((res) => {
        if (res.response === "Success") {
          var potentialList = this.state.potentialFriends;
          var newPotentialUserId = potentialList.pop();
          this.setState({
            potentialFriends: potentialList,
            displayedUserId: newPotentialUserId,
            error: "",
          });
          this.displayProfile();
        } else {
          this.setState({
            error: res.response,
          });
        }
      })
      .catch((error) => {
        this.setState({
          error: "Error connecting to backend",
        });
      });
  }

  async componentDidMount(){
    const storedLocation = getCookie("location");
    const storedLongitude = storedLocation[0];
    const storedLatitude = storedLocation[1];

    var currentLocation = await getLocation();

    if (currentLocation != undefined){ 
    
      const currentLongitude = currentLocation?.coords?.longitude;
      const currentLatitude = currentLocation?.coords?.latitude;
    
      var checkValidLongitude = isFinite(currentLongitude) && Math.abs(currentLongitude) <= 180;
      var checkValidLatitude = isFinite(currentLatitude) && Math.abs(currentLatitude) <= 90;

      if(checkValidLongitude && checkValidLatitude){ 
      
        if(storedLongitude === currentLongitude && storedLatitude === currentLatitude){
        }
        else{
      
          const id = this.state.id;     
          setCookie("longitude", currentLongitude);
          setCookie("latitude", currentLatitude);
     

          const myRequest = new Request("http://127.0.0.1:5000/location", {
            method: "POST",
            body: JSON.stringify({"userID": id, "longitude": currentLongitude, "latitude": currentLatitude,})
          ,});
      
          fetch(myRequest)
          .then((res) => res.json())
          .then((res) => {
            if(res.response === "Success") {
              console.log("updated location")
            }
            else{
              console.log("error location update")
            };
          })
          .catch((error) => {
            this.setState({
              error: "Error connecting to backend",
            });
          });
        }     
      }
    }
    else{
      console.log("error getting user location")
    } 
  }

  render() {
    const id = this.state.id;
    const potentialFriends = this.state.potentialFriends;
    const displayedUserId = this.state.displayedUserId;
    const error = this.state.error;

    if (id === "") {
      this.props.history.push({
        pathname: "/login",
      });
      return null;
    }

    if (
      displayedUserId === "" &&
      potentialFriends.length === 0 &&
      error === ""
    ) {
      this.getPotentialFriendList();
    }

    return (
      <div className="SwipeProfile">
        <Header id={this.state.id} />

        <br></br>
        {error ? (
          <text>{error}</text>
        ) : (
          <div>
            <img src="ppFriendsLogo.png"></img>
            <h1>A potential Friend!</h1> 
           <div class = "row">
              <div class="column left">
                <div class = "profileLeft">
                  <img src = "profilepic.png" alt = "profilepic" width="150"></img>
                  <h1>{this.state.firstName}, ({this.state.age})</h1>
                  <button class="button letsTalkButton" onClick={() => this.handleSwipe(true)}>
                    Let's Talk
                  </button>
                  <br></br>
                  <button class="button notInterestedButton" onClick={() => this.handleSwipe(false)}>
                      Not Interested
                  </button>
                </div>                
              </div>
              <div class="column right">
                <div class="profileIntroSection">
                  <p>Gender 👫 </p>
                  <text>{this.state.gender}</text>
                  <p>Biography 😶 </p>
                  <text>{this.state.description}</text>
                  <p>Interests 🎨 </p>
                  <text>{this.state.interests}</text>
                  <p>Education / Work 💻 </p>
                  <text>{this.state.workplace}</text>
                </div>
              </div>
            </div> 
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(SwipeProfiles);