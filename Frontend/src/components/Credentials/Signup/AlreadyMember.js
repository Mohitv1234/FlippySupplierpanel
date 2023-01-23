import React from 'react'
import { Link } from "react-router-dom";


const AlreadyMember = () => {
  return (
    <>
     <div className="userSinUpMain">
            <div className="userSinUp">
              <a href=" ">Alredy have a member?</a>
              <Link to="/">
                <button>
                  <i className="las la-user"></i>Sign in
                </button>
              </Link>
            </div>
          </div>
      
    </>
  )
}

export default AlreadyMember
