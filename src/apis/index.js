import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const GET_DATA='GET_DATA';

export const  getListOfUsers=()=>{
  return (dispatch) => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
  
  .then(response=>{
    console.log(response);
    dispatch({
      type: GET_DATA,
      users: response.data
  })
})
  .catch(error => {
    throw (error);

})
.finally(() => {
    console.log('Its over')

})
  
}

}


export default getListOfUsers;

