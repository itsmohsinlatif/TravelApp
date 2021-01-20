import React from "react"
import NewPasswordForm from "./NewPasswordForm"


const NewPassword = (props)=>{
    return(
        <div className="loginContainer">
        <h1 className="brand"><span>Travel</span>Pakistan</h1>
        <div className="wrapper animated bounceInLeft">
          <div className="company-info">
            <h3>Travel Pakistan</h3>
            <ul>
              <li><i className="fa fa-road"></i> 44 Main Street, Lahore</li>
              <li><i className="fa fa-phone"></i> (92) 4235-3914</li>
              <li><i className="fa fa-envelope"></i> test@acme.test</li>
            </ul>
          </div>
           <NewPasswordForm token={props.match.params.token}/>
        </div>
      </div> 
    )
}

export default NewPassword