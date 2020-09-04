import React, { useState, useEffect } from "react";
import firebaseDb from "../firebase";
const { default: CaresForm } = require("./Caresform")

const Cares = () => {

    var [caresObjects,setCaresObjects] = useState({})
    var [currentId, setCurrentId] = useState()

    useEffect(() =>{
        firebaseDb.child('careserv').on('value', snapshot => { 
            if(snapshot.val() != null)
               setCaresObjects({
                ...snapshot.val()
            })
            else
            setCaresObjects({})
        })      
    },[])

    const addOrEdit = obj => {
        if(currentId =='')
            firebaseDb.child('careserv').push (
                obj,
                err =>  {
                    if (err)
                    console.log(err)
                }
            )
        else
            firebaseDb.child(`careserv/${currentId}`).set(
                obj,
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')    
                }
            )  
      } 
    
    const onDelete = key => {
        if (window.confirm ('Are you sure to delete this record?')) {
            firebaseDb.child(`careserv/${key}`).remove(
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')    
                }
            )             
        } 
    }  
   
    return (
      <>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4 text-center">Car Reservation</h1>
            </div>      
         </div>
         <div className = "row">
             <div className = "col-md-5">
                    <CaresForm {...({ addOrEdit,currentId, caresObjects})}/>   
            </div>
            <div className = "col-md-10">
                <table className="table table-borderless table-stripped">
                  <thead className="thead-light">
                      <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th>Car Category</th>
                          <th>Car Model</th>
                          <th>Actions</th>
                      </tr>
                  </thead>  
                  <tbody>
                      {
                        Object.keys(caresObjects).map(id => {
                            return <tr>
                                <td>{caresObjects[id].name}</td>
                                <td>{caresObjects[id].email}</td>
                                <td>{caresObjects[id].phone}</td>
                                <td>{caresObjects[id].carCategory}</td>
                                <td>{caresObjects[id].carModel}</td> 
                                <td>
                                     <a className="btn text-primary" onClick={()=> {setCurrentId(id)}}>
                                         <i className="fas fa-pencil-alt"></i>                                         
                                     </a>
                                     <a className="btn text-danger" onClick={() => {onDelete(id)}}>
                                         <i className="far fa-trash-alt"></i>
                                     </a>
                                </td>                      
                            </tr>
                        })
                      }  
                  </tbody>
                </table>               
            </div>
        </div> 
      </>      
    );
} 

export default Cares;