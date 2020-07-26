import React, { Component, useState } from "react"
import {View,Text} from "react-native"
import {UserGuest} from "./userGuest";
import UserLogin from "./userLogin";

const Account  = (props) =>  {
  
      //  const [login, setLogin] = useState(null);
/*
        useEffect(() => {
          firebase.auth().onAuthStateChanged((user) => {
            !user ? setLogin(false) : setLogin(true);
          });
        }, []);
      */
      //  if (login === null) return <Loading isVisible={true} text="Cargando..." />;
      
        return  <UserGuest/>;
     
    
  }

  export {Account};
