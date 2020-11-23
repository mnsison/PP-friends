(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{104:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(54),o=a.n(s);a(62),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(4),l=a(5),c=a(7),u=a(6),d=a(2),m=a(3),h=a(16),p=a(1),f=(a(63),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={password:"",confirmPassword:"",error:""},n.handleInputChange=n.handleInputChange.bind(Object(p.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n}return Object(l.a)(a,[{key:"handleInputChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(h.a)({},n,a))}},{key:"handleSubmit",value:function(e){var t=this;if(e.preventDefault(),this.checkPasswords()){var a=document.getElementById("registerForm"),n=new Request("http://127.0.0.1:5000/register",{method:"POST",body:new FormData(a)});fetch(n).then((function(e){return e.json()})).then((function(e){"Success"===e.response&&t.props.history.push({pathname:"/createprofile",state:{id:e.id}}),t.setState({error:e.response})})).catch((function(e){t.setState({error:"Error connecting to backend"})}))}}},{key:"checkPasswords",value:function(){var e=this.state.password,t=this.state.confirmPassword;return 0===e.length?(alert("Please add password"),!1):t===e||(alert("Please make sure passwords match"),!1)}},{key:"render",value:function(){return r.a.createElement("div",{className:"Register"},r.a.createElement("h1",null," Join the Community"),r.a.createElement("form",{id:"registerForm",onSubmit:this.handleSubmit},r.a.createElement("div",{class:"form-group form in-line"},r.a.createElement("input",{name:"email",type:"email",placeholder:"Email Address"}),r.a.createElement("br",null),r.a.createElement("input",{name:"password",type:"password",value:this.state.password,placeholder:"Enter password",onChange:this.handleInputChange}),r.a.createElement("br",null),r.a.createElement("input",{name:"confirmPassword",type:"password",value:this.state.confirmPassword,placeholder:"Re-enter password",onChange:this.handleInputChange}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Join"}),r.a.createElement("br",null),r.a.createElement("text",null,this.state.error))),r.a.createElement(d.b,{to:"/"},"I Already Have an Account"))}}]),a}(r.a.Component)),v=Object(m.f)(f),g=(a(40),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleUpdate=function(e){if(e.preventDefault(),n.completedInput()){if(n.checkAge(),n.state.age>18&&n.state.age<100){var t,a,r,s=null===(t=n.props)||void 0===t||null===(a=t.location)||void 0===a||null===(r=a.state)||void 0===r?void 0:r.id,o=new FormData(document.getElementById("profileForm"));o.append("id",s),o.append("age",n.state.age);var i=new Request("http://127.0.0.1:5000/createprofile",{method:"POST",body:o});fetch(i).then((function(e){return e.json()})).then((function(e){"Success"===e.response?n.props.history.push({pathname:"/questionnaire",state:{id:s}}):n.setState({error:e.response})})).catch((function(e){n.setState({error:"Error connecting to backend"})}))}}else alert("Please fill in all fields")},n.completedInput=function(){for(var e=["name","birthday","bio","gender","genderPreference","education","interests"],t=0;t<e.length;t++)if(!n.state[e[t]])return!1;return!0},n.handleChange=function(e){var t=e.target,a=t.value,r=t.name;n.setState(Object(h.a)({},r,a))},n.checkAge=function(){var e=new Date(n.state.birthday),t=new Date,a=t.getFullYear()-e.getFullYear();(t.getMonth()<e.getMonth()||t.getMonth()===e.getMonth()&&t.getDate<e.getDate())&&(a-=1),a<18?alert("You need to be above 18 to register"):a>100?alert("Please make sure you have entered a valid birthday"):a>=18&&a<=100||alert("Please input valid birthday"),n.state.age=a},n.state={name:"",birthday:"",bio:"",gender:"Female",genderPreference:"Female",education:"",interests:"",error:"",maxDistance:10,age:0},n.handleUpdate=n.handleUpdate.bind(Object(p.a)(n)),n.handleChange=n.handleChange.bind(Object(p.a)(n)),n}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Profile"},r.a.createElement("form",{id:"profileForm",onSubmit:this.handleUpdate},r.a.createElement("h1",null,"My Profile"),r.a.createElement("p",null,"Name:"),r.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleChange,maxlength:"30"}),r.a.createElement("p",null,"Birthday:"),r.a.createElement("input",{type:"date",name:"birthday",value:this.state.birthday,min:"1920-01-01",placeholder:"YYYY-MM-DD",onChange:this.handleChange}),r.a.createElement("p",null,"Your Gender:"),r.a.createElement("select",{name:"gender",onChange:this.handleChange,value:this.state.gender},r.a.createElement("option",{value:"Female"},"Female"),r.a.createElement("option",{value:"Male"},"Male"),r.a.createElement("option",{value:"Other"},"Other")),r.a.createElement("p",null,"Your Preferred Gender for friends:"),r.a.createElement("select",{name:"genderPreference",fieldValue:this.state.genderPreference,onChange:this.handleChange,value:this.state.genderPreference},r.a.createElement("option",{value:"Female"},"Female"),r.a.createElement("option",{value:"Male"},"Male"),r.a.createElement("option",{value:"Both"},"Both")),r.a.createElement("p",null,"Education/Work:"),r.a.createElement("input",{type:"text",name:"education",value:this.state.education,onChange:this.handleChange,maxlength:"30"}),r.a.createElement("p",null,"Your interests:"),r.a.createElement("input",{type:"text",name:"interests",value:this.state.interests,onChange:this.handleChange,maxlength:"255"}),r.a.createElement("p",null,"Bio:"),r.a.createElement("input",{type:"text",name:"bio",value:this.state.bio,onChange:this.handleChange,maxlength:"255"}),r.a.createElement("p",null,"Max Distance:"),r.a.createElement("input",{type:"range",name:"maxDistance",value:this.state.maxDistance,onChange:this.handleChange,min:"1",max:"99999"}),r.a.createElement("text",null,this.state.maxDistance,"KM"),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Update"})),r.a.createElement("text",null,this.state.error))}}]),a}(r.a.Component)),E=Object(m.f)(g),b=(a(68),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={password:"",error:""},n.handleInputChange=n.handleInputChange.bind(Object(p.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n}return Object(l.a)(a,[{key:"handleInputChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(h.a)({},n,a))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=document.getElementById("loginForm"),n=new Request("https://pp-friends.herokuapp.com/login",{method:"POST",body:new FormData(a)});console.log("test"),console.log(n),fetch(n).then((function(e){return e.json()})).then((function(e){console.log(e),"Success"===e.response&&t.props.history.push({pathname:"/main",state:{id:e.id}}),t.setState({error:e.response})})).catch((function(e){console.log(e),t.setState({error:"Error connecting to backend"})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"Login"},r.a.createElement("div",{className:"logoBanner"},r.a.createElement("svg",{viewBox:"0 0 500 200"},r.a.createElement("path",{id:"curve",fill:"transparent",d:"M73.2,200.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"}),r.a.createElement("text",{width:"500"},r.a.createElement("textPath",{href:"#curve"},"Making friendly connections."))),r.a.createElement("img",{src:"ppFriendsLogo.png"})),r.a.createElement("h1",null," Purely Platonic"),r.a.createElement("form",{id:"loginForm",onSubmit:this.handleSubmit},r.a.createElement("input",{name:"email",type:"email",placeholder:"Email Address"}),r.a.createElement("br",null),r.a.createElement("input",{name:"password",type:"password",value:this.state.password,placeholder:"Enter password",onChange:this.handleInputChange}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Submit"}),r.a.createElement("br",null),r.a.createElement("text",null,this.state.error)),r.a.createElement(d.b,{to:"/register"},"Create a new Account"))}}]),a}(r.a.Component)),y=Object(m.f)(b),w=(a(69),function(e){return r.a.createElement("nav",null,r.a.createElement("div",{className:"div-header"},r.a.createElement("div",{class:"navbar"},r.a.createElement(d.c,{to:{pathname:"/main",state:{id:e.id}},className:"inactive",activeClassName:"active"},"Back to Swiping!"),r.a.createElement(d.c,{to:{pathname:"/matches",state:{id:e.id}},className:"inactive",activeClassName:"active"},"Matches"),r.a.createElement(d.c,{to:{pathname:"/viewprofile",state:{id:e.id}},className:"inactive",activeClassName:"active"},"View Profile"),r.a.createElement(d.c,{to:{pathname:"/editprofile",state:{id:e.id}},className:"inactive",activeClassName:"active"},"Edit Profile"),r.a.createElement(d.c,{to:{pathname:"/messages",state:{id:e.id}},className:"inactive",activeClassName:"active"},"Messages"),r.a.createElement(d.c,{to:{pathname:"/profile"},className:"inactive",activeClassName:"active"},"Settings")),r.a.createElement("div",{class:"navbar"},r.a.createElement(d.c,{to:{pathname:"/"},className:"inactive",activeClassName:"active"},r.a.createElement("button",{className:"button-header"},"Log Out")))))}),S=(a(70),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n,r,s,o;return Object(i.a)(this,a),(o=t.call(this,e)).state={id:null===(n=o.props)||void 0===n||null===(r=n.location)||void 0===r||null===(s=r.state)||void 0===s?void 0:s.id,age:"",firstName:"",description:"",interests:"",gender:"",workplace:"",potentialFriends:[],displayedUserId:"",error:""},o.getPotentialFriendList=o.getPotentialFriendList.bind(Object(p.a)(o)),o.displayProfile=o.displayProfile.bind(Object(p.a)(o)),o.handleSwipe=o.handleSwipe.bind(Object(p.a)(o)),o}return Object(l.a)(a,[{key:"getPotentialFriendList",value:function(){var e,t,a,n=this,r=null===(e=this.props)||void 0===e||null===(t=e.location)||void 0===t||null===(a=t.state)||void 0===a?void 0:a.id,s=new FormData;s.append("userId",r);var o=new Request("http://127.0.0.1:5000/getPotentialFriends",{method:"POST",body:s});fetch(o).then((function(e){return e.json()})).then((function(e){if("Success"===e.response){var t=e.potentialListId,a=t.pop();n.setState({potentialFriends:t,displayedUserId:a,error:""}),n.displayProfile()}else n.setState({error:e.response})})).catch((function(e){n.setState({error:"Error connecting to backend"})}))}},{key:"displayProfile",value:function(){var e=this,t=this.state.displayedUserId;if(t){var a=new FormData;a.append("userId",t);var n=new Request("http://127.0.0.1:5000/displayProfile",{method:"POST",body:a});fetch(n).then((function(e){return e.json()})).then((function(t){"Success"===t.response?e.setState({age:t.age,firstName:t.firstName,description:t.description,interests:t.interests,gender:t.gender,workplace:t.workPlace,error:""}):e.setState({error:t.response})})).catch((function(t){e.setState({error:"Error connecting to backend"})}))}else this.setState({error:"There are no current potential friends for you within the area."})}},{key:"handleSwipe",value:function(e){var t,a,n,r=this;console.log(e);var s=this.state.displayedUserId,o=null===(t=this.props)||void 0===t||null===(a=t.location)||void 0===a||null===(n=a.state)||void 0===n?void 0:n.id,i=new FormData;i.append("currentUserId",o),i.append("shownUserId",s),i.append("match",e);var l=new Request("http://127.0.0.1:5000/swipe",{method:"POST",body:i});fetch(l).then((function(e){return e.json()})).then((function(e){if("Success"===e.response){var t=r.state.potentialFriends,a=t.pop();r.setState({potentialFriends:t,displayedUserId:a,error:""}),r.displayProfile()}else r.setState({error:e.response})})).catch((function(e){r.setState({error:"Error connecting to backend"})}))}},{key:"render",value:function(){var e=this,t=this.state.potentialFriends,a=this.state.displayedUserId,n=this.state.error;return""===a&&0===t.length&&""===n&&this.getPotentialFriendList(),r.a.createElement("div",{className:"SwipeProfile"},r.a.createElement(w,{id:this.state.id}),r.a.createElement("br",null),r.a.createElement("header",{class:"pageTitle"},"Potential Friends!"),r.a.createElement("br",null),r.a.createElement("img",{src:"ppFriendsLogo.png"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),n?r.a.createElement("text",null,n):r.a.createElement("div",null,r.a.createElement("p",null,"Name: "),r.a.createElement("text",null,this.state.firstName),r.a.createElement("p",null,"Age: "),r.a.createElement("text",null,this.state.age),r.a.createElement("br",null),r.a.createElement("div",{class:"profileIntroSection"},r.a.createElement("br",null),r.a.createElement("p",null,"Gender: "),r.a.createElement("text",null,this.state.gender),r.a.createElement("p",null,"Description: "),r.a.createElement("text",null,this.state.description),r.a.createElement("p",null,"Interests: "),r.a.createElement("text",null,this.state.interests),r.a.createElement("p",null,"Education / Work: "),r.a.createElement("text",null,this.state.workplace),r.a.createElement("br",null)),r.a.createElement("br",null),r.a.createElement("button",{class:"button letsTalkButton",onClick:function(){return e.handleSwipe(!0)}},"Let's Talk!")," ",r.a.createElement("br",null),r.a.createElement("button",{class:"button notInterestedButton",onClick:function(){return e.handleSwipe(!1)}},"Not Interested.")))}}]),a}(r.a.Component)),I=Object(m.f)(S),C=(a(71),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n,r,s,o;return Object(i.a)(this,a),(o=t.call(this,e)).state={userId:null===(n=o.props)||void 0===n||null===(r=n.location)||void 0===r||null===(s=r.state)||void 0===s?void 0:s.id,userIds:[],matchesExist:"not set",firstnames:[],name:""},o.selectUser=o.selectUser.bind(Object(p.a)(o)),o}return Object(l.a)(a,[{key:"selectUser",value:function(e){var t=this,a=e.target.value.split("|"),n=new Request("http://127.0.0.1:5000/conversationId",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:this.state.userId,friendId:a[0]})});fetch(n).then((function(e){return e.json()})).then((function(e){t.props.history.push({pathname:"/messages",state:{id:t.state.userId,friendId:a[0],currentName:t.state.name,friendName:a[1],currentConvoId:e.currentConvoId,friendConvoId:e.friendConvoId}})})).catch((function(e){alert("Something went wrong"),console.error(e)}))}},{key:"get_matches",value:function(){var e=this,t=new Request("http://127.0.0.1:5000/matches",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:this.state.userId})});fetch(t).then((function(e){return e.json()})).then((function(t){return t.userIds&&0!=t.userIds.length?e.setState({matchesExist:"exists",userIds:t.userIds,firstnames:t.firstnames,name:t.currentName}):e.setState({matchesExist:"not exists"})})).catch((function(e){console.error(e)}))}},{key:"componentDidMount",value:function(){this.get_matches()}},{key:"componentDidUpdate",value:function(e,t){for(var a=0;a<this.state.userIds.length;++a)if(this.state.userIds[a]!=t.userIds[a]){this.get_matches();break}}},{key:"render",value:function(){var e;if("exists"==this.state.matchesExist){for(var t=[],a=0;a<this.state.userIds.length;a++){var n=this.state.userIds[a];t.push(r.a.createElement("button",{className:"pos-user",key:n,value:this.state.userIds[a]+"|"+this.state.firstnames[a],onClick:this.selectUser},this.state.firstnames[a]))}e=r.a.createElement("h3",{id:"Matches-congrats"},r.a.createElement("p",null,"Congratulations,"),r.a.createElement("p",null,"you have a match!"),r.a.createElement("p",null,t))}else e="not exists"==this.state.matchesExist?r.a.createElement("h2",{id:"Matches-none"},r.a.createElement("p",null,"Sorry, no one met the matching criteria you set."),r.a.createElement("p",null,"We suggest you to edit your profile, or wait for more users to join our community."),r.a.createElement("p",null,"Please try again later :(")):r.a.createElement("h2",null);return r.a.createElement("div",{id:"Matches-section"},e,r.a.createElement("div",{class:"swipingButton",id:"swipingButton"},r.a.createElement(d.b,{to:{pathname:"/main",state:{id:this.state.userId}}},"Keep Swiping")),r.a.createElement("div",{class:"viewProfileButton",id:"viewProfileButton"},r.a.createElement(d.b,{to:{pathname:"/viewprofile",state:{id:this.state.userId}}},"View Profile")))}}]),a}(r.a.Component)),O=Object(m.f)(C),j=[{question:"What is the most important thing about a friendship to you?",answers:["Have somebody to confide in","Have somebody to have fun with"],questionId:"1"},{question:"Would you rather...",answers:["Have a friend who enjoys doing the same things as you","Have a friend who feels the same way about life as you do"],questionId:"2"},{question:"Which statement below do you relate the most?",answers:["I like to be close to people","I like to keep my distance from people"],questionId:"3"},{question:"When you talk with friends on the phone, it is usually to?",answers:["Make arrangements or plans","Have a conversation or chat"],questionId:"4"},{question:"Which statement below do you relate the most?",answers:["I like to plan where I am going and who I am going with","I like to be spontaneous and just let fate decide"],questionId:"5"},{question:"You are going to the movies, which genre would you likely choose?",answers:["Action","Drama"],questionId:"6"},{question:"If you are meeting a friend, what activity would you prefer doing?",answers:["Shopping","Playing at the Arcade"],questionId:"7"},{question:"If you moved to a new city, which would you rather put more effort into?",answers:["Staying in touch with old friends","Making new friends"],questionId:"8"},{question:"As a friend, you are someone that?",answers:["Supports others","Is fun to be with"],questionId:"9"},{question:"What do you do when your friend has a problem",answers:["Discuss their feelings","Come up with practical solutions"],questionId:"10"},{question:"If your friend was having personal problems, what do you do?",answers:["Wait for them to contact you","Contact them to discuss the problem"],questionId:"11"},{question:"What do you do when you have a personal problem?",answers:["I work it out on my own","I share it with a friend"],questionId:"12"},{question:"When talking with friends, which of the topics below are you more interested to talk about?",answers:["Political and current affairs","Hobbies and interests"],questionId:"13"},{question:"When talking with friends, which of the topics below are you more interested to talk about?",answers:["Family and friends","Work or school"],questionId:"14"},{question:"When talking to someone you just met, which of the topics below are you more interested to talk about?",answers:["Political and current affairs","Hobbies and interests"],questionId:"15"},{question:"When talking to someone you just met, which of the topics below are you more interested to talk about?",answers:["Family and friends","Work or school"],questionId:"16"}],k=function(e){var t=e.question,a=e.options,n=e.ID,s=e.selected;return r.a.createElement("div",null,r.a.createElement("div",null,n,". ",t),a.map((function(e,t){return r.a.createElement("p",null,r.a.createElement("input",{type:"radio",value:e,name:n,onClick:function(){s(t)}}),e)})))},P=(a(72),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).getQuestions=function(){Promise.resolve(j).then((function(e){n.setState({questionBank:e})}))},n.storeAnswer=function(e,t){n.state.response[t-1]=e},n.state={questionBank:[],response:[]},n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n}return Object(l.a)(a,[{key:"handleSubmit",value:function(e){var t=this;if(e.preventDefault(),this.state.response.length>=16){var a,n,r,s=null===(a=this.props)||void 0===a||null===(n=a.location)||void 0===n||null===(r=n.state)||void 0===r?void 0:r.id,o=new Request("http://127.0.0.1:5000/questionnaire",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({responses:this.state.response,userId:s})}),i=new Request("http://127.0.0.1:5000/potentialMatch",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({responses:this.state.response,userId:s})});fetch(o).then((function(e){return e.json()})).then((function(e){"Success"===e.response?fetch(i).then((function(e){return e.json()})).then((function(e){"Success"===e.response?t.props.history.push({pathname:"/main",state:{id:s}}):t.setState({error:e.response})})):t.setState({error:e.response})})).catch((function(e){t.setState({error:"Error connecting to backend"})}))}else alert("Please answer all questions")}},{key:"componentDidMount",value:function(){this.getQuestions()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h1",null,"PP Friends Questionnaire"),r.a.createElement("h4",null,"Please answer all questions before submitting")),this.state.questionBank.length>0&&this.state.questionBank.map((function(t){var a=t.question,n=t.answers,s=t.questionId;return r.a.createElement(k,{question:a,options:n,ID:s,key:s,selected:function(t){return e.storeAnswer(t,s)}})})),r.a.createElement("div",null,r.a.createElement("button",{onClick:this.handleSubmit},"Submit")))}}]),a}(n.Component)),x=Object(m.f)(P),q=a(18),D=a(56),M=a.n(D).a.connect("".concat("http://localhost:5000")),F=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n,r,s,o,l,c,u,d,m,h,f,v,g,E,b,y;return Object(i.a)(this,a),(y=t.call(this,e)).componentDidMount=function(){var e,t,a,n=null===(e=y.props)||void 0===e||null===(t=e.location)||void 0===t||null===(a=t.state)||void 0===a?void 0:a.currentConvoId,r=new Request("http://127.0.0.1:5000/getMessages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({convoId:n})});fetch(r).then((function(e){return e.json()})).then((function(e){y.setState({messages:e.messages,messageSender:e.fromNames,timeStamps:e.timeStamps}),M.emit("room",n),M.on("message",(function(e){y.setState({messages:[].concat(Object(q.a)(y.state.messages),[e]),messageSender:[].concat(Object(q.a)(y.state.messageSender),[y.state.friendName]),timeStamps:[].concat(Object(q.a)(y.state.timeStamps),[(new Date).toUTCString()])})}))})).catch((function(e){console.error(e)}))},y.componentWillUnmount=function(){var e=y.state.currentConvoId;M.emit("leaveRoom",e)},y.onChange=function(e){y.setState({message:e.target.value})},y.onClick=function(){var e,t,a,n=y.state.message,r=y.state.currentName,s=y.state.room,o=null===(e=y.props)||void 0===e||null===(t=e.location)||void 0===t||null===(a=t.state)||void 0===a?void 0:a.currentConvoId;if(""!==n){M.emit("message",{msg:n,room:s});var i=new Request("http://127.0.0.1:5000/sendMessage",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({convoId:o,friendConvoId:y.state.room,currentId:y.state.userId,friendId:y.state.friendId,message:n})});fetch(i).then((function(e){return e.json()})).then((function(e){console.log(e),"Success"!=e.response&&alert("Something went wrong sending message")})).catch((function(e){console.error(e)}));var l=new Date;y.setState({messages:[].concat(Object(q.a)(y.state.messages),[n]),messageSender:[].concat(Object(q.a)(y.state.messageSender),[r]),timeStamps:[].concat(Object(q.a)(y.state.timeStamps),[l.toUTCString()]),message:""})}else alert("Please Add A Message")},y.onKeyPress=function(e){13===e.which&&y.onClick()},y.state={userId:null===(n=y.props)||void 0===n||null===(r=n.location)||void 0===r||null===(s=r.state)||void 0===s?void 0:s.id,messages:[],messageSender:[],timeStamps:[],message:"",room:null===(o=y.props)||void 0===o||null===(l=o.location)||void 0===l||null===(c=l.state)||void 0===c?void 0:c.friendConvoId,currentName:null===(u=y.props)||void 0===u||null===(d=u.location)||void 0===d||null===(m=d.state)||void 0===m?void 0:m.currentName,friendName:null===(h=y.props)||void 0===h||null===(f=h.location)||void 0===f||null===(v=f.state)||void 0===v?void 0:v.friendName,friendId:null===(g=y.props)||void 0===g||null===(E=g.location)||void 0===E||null===(b=E.state)||void 0===b?void 0:b.friendId},y.onChange=y.onChange.bind(Object(p.a)(y)),y.onClick=y.onClick.bind(Object(p.a)(y)),y}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.state.message,a=this.state.messages,n=this.state.timeStamps,s=this.state.messageSender;return r.a.createElement("div",null,r.a.createElement(d.b,{to:{pathname:"/matches",state:{id:this.state.userId}}},"Back to Matches matches"),a.length>0?a.map((function(e,t){return r.a.createElement("div",null,r.a.createElement("p",null,n[t]),r.a.createElement("p",null,s[t]," : ",e))})):r.a.createElement("header",null,"Start a conversation!"),r.a.createElement("input",{value:t,name:"message",onChange:function(t){return e.onChange(t)},onKeyPress:this.onKeyPress}),r.a.createElement("button",{onClick:function(){return e.onClick()}},"Send Message")," ",r.a.createElement("br",null))}}]),a}(r.a.Component),N=Object(m.f)(F),B=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n,r,s,o;return Object(i.a)(this,a),(o=t.call(this,e)).state={userId:null===(n=o.props)||void 0===n||null===(r=n.location)||void 0===r||null===(s=r.state)||void 0===s?void 0:s.id,name:"",birthday:"",age:0,bio:"",gender:"Female",genderPreference:"Female",education:"",interests:"",error:"",maxDistance:10},o}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=new Request("http://127.0.0.1:5000/viewprofile",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:this.state.userId})});fetch(t).then((function(e){return e.json()})).then((function(t){return e.setState({name:t.name,age:t.age,bio:t.bio,gender:t.gender,genderPreference:t.genderPreference,education:t.education,interests:t.interests,birthday:t.birthday,maxDistance:t.maxDistance})})).catch((function(e){console.error(e)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"Profile"},r.a.createElement(w,{id:this.state.userId}),r.a.createElement("form",{id:"profileForm"},r.a.createElement("h1",null,"View My Profile"),r.a.createElement("p",null,"Name:"),this.state.name,r.a.createElement("p",null,"Birthday:"),r.a.createElement("input",{type:"date",name:"birthday",value:this.state.birthday,placeholder:"YYYY-MM-DD"}),r.a.createElement("p",null,"Your Gender:"),r.a.createElement("select",{name:"gender",value:this.state.gender},r.a.createElement("option",{value:"Female"},"Female"),r.a.createElement("option",{value:"Male"},"Male"),r.a.createElement("option",{value:"Other"},"Other")),r.a.createElement("p",null,"Your Preferred Gender for friends:"),r.a.createElement("select",{name:"genderPreference",value:this.state.genderPreference},r.a.createElement("option",{value:"Female"},"Female"),r.a.createElement("option",{value:"Male"},"Male"),r.a.createElement("option",{value:"Both"},"Both")),r.a.createElement("p",null,"Education/Work:"),this.state.education,r.a.createElement("p",null,"Your interests:"),this.state.interests,r.a.createElement("p",null,"Bio:"),this.state.bio,r.a.createElement("p",null,"Max Distance:"),r.a.createElement("input",{type:"range",name:"maxDistance",value:this.state.maxDistance,min:"1",max:"99999"}),r.a.createElement("text",null,this.state.maxDistance,"KM"),r.a.createElement("br",null)),r.a.createElement("text",null,this.state.error))}}]),a}(r.a.Component),T=Object(m.f)(B),Y=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n,r,s,o;return Object(i.a)(this,a),(o=t.call(this,e)).handleUpdate=function(e){if(e.preventDefault(),o.completedInput()){if(o.checkAge(),o.state.age>18&&o.state.age<100){var t,a,n,r=null===(t=o.props)||void 0===t||null===(a=t.location)||void 0===a||null===(n=a.state)||void 0===n?void 0:n.id,s=new FormData(document.getElementById("profileForm"));s.append("id",r),s.append("age",o.state.age);var i=new Request("http://127.0.0.1:5000/editprofile",{method:"POST",body:s});fetch(i).then((function(e){return e.json()})).then((function(e){"Success"===e.response?o.setState({updatedMessage:"Successfully updated your profile!"}):o.setState({error:e.response})})).catch((function(e){o.setState({error:"Error connecting to backend"})}))}}else alert("Please fill in all fields")},o.completedInput=function(){for(var e=["name","birthday","bio","gender","genderPreference","education","interests"],t=0;t<e.length;t++)if(!o.state[e[t]])return!1;return!0},o.handleChange=function(e){var t=e.target,a=t.value,n=t.name;o.setState(Object(h.a)({},n,a))},o.checkAge=function(){var e=new Date(o.state.birthday),t=new Date,a=t.getFullYear()-e.getFullYear();(t.getMonth()<e.getMonth()||t.getMonth()===e.getMonth()&&t.getDate<e.getDate())&&(a-=1),a<18?alert("You need to be above 18 to register"):a>100?alert("Please make sure you have entered a valid birthday"):a>=18&&a<=100||alert("Please input valid birthday"),o.state.age=a},o.state={userId:null===(n=o.props)||void 0===n||null===(r=n.location)||void 0===r||null===(s=r.state)||void 0===s?void 0:s.id,name:"",birthday:"",age:0,bio:"",gender:"Female",genderPreference:"Female",education:"",interests:"",error:"",maxDistance:10,updateStatus:""},o.handleUpdate=o.handleUpdate.bind(Object(p.a)(o)),o.handleChange=o.handleChange.bind(Object(p.a)(o)),o}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=new Request("http://127.0.0.1:5000/viewprofile",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:this.state.userId})});fetch(t).then((function(e){return e.json()})).then((function(t){return e.setState({name:t.name,bio:t.bio,gender:t.gender,genderPreference:t.genderPreference,education:t.education,interests:t.interests,maxDistance:t.maxDistance,birthday:t.birthday,updatedMessage:""})})).catch((function(e){console.error(e)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"Profile"},r.a.createElement(w,{id:this.state.userId}),r.a.createElement("form",{id:"profileForm",onSubmit:this.handleUpdate},r.a.createElement("h1",null,"My Profile"),r.a.createElement("p",null,"Name:"),r.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleChange,maxlength:"30"}),r.a.createElement("p",null,"Birthday:"),r.a.createElement("input",{type:"date",name:"birthday",value:this.state.birthday,min:"1920-01-01",placeholder:"YYYY-MM-DD",onChange:this.handleChange}),r.a.createElement("p",null,"Your Gender:"),r.a.createElement("select",{name:"gender",onChange:this.handleChange,value:this.state.gender},r.a.createElement("option",{value:"Female"},"Female"),r.a.createElement("option",{value:"Male"},"Male"),r.a.createElement("option",{value:"Other"},"Other")),r.a.createElement("p",null,"Your Preferred Gender for friends:"),r.a.createElement("select",{name:"genderPreference",fieldValue:this.state.genderPreference,onChange:this.handleChange,value:this.state.genderPreference},r.a.createElement("option",{value:"Female"},"Female"),r.a.createElement("option",{value:"Male"},"Male"),r.a.createElement("option",{value:"Both"},"Both")),r.a.createElement("p",null,"Education/Work:"),r.a.createElement("input",{type:"text",name:"education",value:this.state.education,onChange:this.handleChange,maxlength:"30"}),r.a.createElement("p",null,"Your interests:"),r.a.createElement("input",{type:"text",name:"interests",value:this.state.interests,onChange:this.handleChange,maxlength:"255"}),r.a.createElement("p",null,"Bio:"),r.a.createElement("input",{type:"text",name:"bio",value:this.state.bio,onChange:this.handleChange,maxlength:"255"}),r.a.createElement("p",null,"Max Distance:"),r.a.createElement("input",{type:"range",name:"maxDistance",value:this.state.maxDistance,onChange:this.handleChange,min:"1",max:"99999"}),r.a.createElement("text",null,this.state.maxDistance,"KM"),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Update"}),this.state.updatedMessage))}}]),a}(r.a.Component),U=Object(m.f)(Y),W=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/createprofile"},r.a.createElement(E,null)),r.a.createElement(m.a,{path:"/viewprofile"},r.a.createElement(T,null)),r.a.createElement(m.a,{path:"/editprofile"},r.a.createElement(U,null)),r.a.createElement(m.a,{path:"/register"},r.a.createElement(v,null)),r.a.createElement(m.a,{path:"/main"},r.a.createElement(I,null)),r.a.createElement(m.a,{path:"/matches"},r.a.createElement(O,null)),r.a.createElement(m.a,{path:"/questionnaire"},r.a.createElement(x,null)),r.a.createElement(m.a,{path:"/messages"},r.a.createElement(N,null)),r.a.createElement(m.a,{path:"/"},r.a.createElement(y,null)))))}}]),a}(r.a.Component);o.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},40:function(e,t,a){},57:function(e,t,a){e.exports=a(104)},62:function(e,t,a){},63:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){}},[[57,1,2]]]);
//# sourceMappingURL=main.fb4b5b2b.chunk.js.map