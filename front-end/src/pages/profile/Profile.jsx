import React, { useEffect, useState } from "react";
import "./profile.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useParams } from "react-router-dom";
import axios from "../../axios";
function Profile() {
  const [user, setUser] = useState({})
  const [err, setErr] = useState(false)
  const {id} = useParams()
  useEffect(() => {
    try {
     axios.get(`/users/${id}`).then((res)=>{
      setUser(res.data)
     }).catch((err)=>{
      setErr('something went wrong')
     })
    } catch (error) {
      setErr('something went wrong')
    }
  }, [])
  
  return (
    <div className="single">
      <div className="singleContainer">
        <div className="top">
          <div className="left">
            <Link to={"/"} className="link">
              <ArrowBackIcon />
            </Link>

            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src={user.picture}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{user.name}</h1>
                <div className="detailItem">
                  <span className="itemKey">Title:</span>
                  <span className="itemValue">{user.title}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Department:</span>
                  <span className="itemValue">{user.department}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Age:</span>
                  <span className="itemValue">{user.age}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{user.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Worked in:</span>
                  <span className="itemValue">
                    {user.emp_hist}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{user.phone_number}</span>
                </div>
             
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
