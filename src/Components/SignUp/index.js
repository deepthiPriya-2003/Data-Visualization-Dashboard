import {Component} from "react" 
import {Navigate} from "react-router-dom"; 
import Cookies from 'js-cookie' 
import "./index.css" 

class SignUp extends Component { 
      state={isLoggedIn:"", userName:"", password:"", email:"", isErr:false}
     
    onChangeName =(event)=>{ 
        this.setState({userName:event.target.value, isErr:false})
        


    }
    onChangeEmail =(event)=>{ 
        this.setState({email:event.target.value, isErr:false})
        

    } 
    onChangePassword =(event)=>{ 
        this.setState({password:event.target.value, isErr:false})
        

    } 
    onSubmitSuccess=(username, password)=>{
       Cookies.set("password", password, {expires: 30})
        Cookies.set("userName", username, {expires: 30})
        this.setState({isErr:false, isLoggedIn:true}) 
        
        
    }
    onSubmitFailure=()=>{ 
        this.setState({isErr:true, isLoggedIn:false})

    }
    userLogin=(event)=>{
        event.preventDefault() 
        const {userName, email, password}=this.state
        
        const isNameValid = userName.length > 0 
        const ispasswordValid = password.length >= 5 
        
        if (isNameValid && ispasswordValid){ 
            this.onSubmitSuccess(userName, password) 
          
        }
        else{
            this.onSubmitFailure() 
        }

    }

    render(){ 
      const {userName, password, isErr, isLoggedIn} = this.state
        if (isLoggedIn === true){
            return <Navigate to="/home" />
         }
        return (
            <div className="signIn-container">
                <h1>Sign Up</h1>
            <form onSubmit={this.userLogin} className="form-container">
                <div className="input-container">
                <lable htmlFor="name">UserName</lable>
                <input type="text" id="name" className="input-element" onChange={this.onChangeName} placeholder="Enter Your Name" value={userName}/> 
                </div> 
                <div className="input-container">
                <lable htmlFor="email">Email Id</lable>
                <input type="email" id="email" className="input-element" onChange={this.onChangeEmail} placeholder="Enter Your Email Id"/> 
                </div> 
                <div className="input-container">
                <lable htmlFor="password">Password</lable>
                <input type="password" id="password" className="input-element" onChange={this.onChangePassword} placeholder="Enter atleast 5 characters" /> 
                </div> 
                <button type="submit" className="submit-btn">Submit</button>
                <p>{isErr? "*Invalid input": ""}</p>

            </form> 
            </div>
        )
    }
}

export default SignUp 