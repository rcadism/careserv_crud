import React,{useState, useEffect} from "react";
const CaresForm = (props) => {
const initialFieldValues = {
    name: '',
    email: '',
    phone: '',
    carCategory: '',
    carModel: ''  
} 

var [values, setValues] = useState(initialFieldValues)

useEffect(() => {
    if (props.currentId=='')
        setValues({
            ...initialFieldValues
        })
    else
        setValues({
            ...props.caresObjects[props.currentId]
           
        })    
}, [props.currentId, props.caresObjects])

const handleInputChange = e => {
    var {name, value} = e.target
    setValues({
        ...values,
        [name]: value
    })
}

const handleValidation = (e) => {
    let errors = {};
    let formIsValid = true;

    //Name
    if(values.name == '') {
        formIsValid = false;
        errors["name"] = "Cannot be empty";       
    }

    //Email
     if(values.email == ''){
        formIsValid = false;
        errors["email"] = "Cannot be empty"; 
     }
           
    //CarCategory
    if(values.carCategory == ''){
        formIsValid = false;
        errors["carCategory"] = "Cannot be empty";       
     }

     //CarModel     
     // const smallGroupArray = ["Opel Corsa","Toyota Yaris","Smart for Two"]
     //const smallGroup = smallGroupArray.filter (values.carCategory = smallGroupArray) 

    if(values.carModel == ''){
        formIsValid = false;
        errors["carModel"] = "Cannot be empty";
    }
    
    /*
    if (!smallGroup){ 
        formIsValid = false;
        errors["carModel"] = "Wrong Category of Car Model";
    } */ 
    
    return formIsValid;
}

const handleFormSubmit = e => {
    e.preventDefault();
    props.addOrEdit(values)
    if(handleValidation()){
        alert("Form submitted");
     }else{
        alert("Form has errors.");
        e.preventDefault();
        return;
     }
}

return (
          <form autoComplete="off" onSubmit = {handleFormSubmit}>
              <div className = "form-group input-group">
                  <div className = "input-group-prepend">
                      <div className="input-group-text">
                          <div className="fas fa-user">                              
                          </div>
                      </div>
                  </div>
                  <input className="form-control" placeholder="Name" name="name"
                      value={values.name}
                      onChange={handleInputChange}
                      onBlur={handleValidation}/>
              </div>              
              <div className = "form-group input-group">
                  <div className = "input-group-prepend">
                      <div className="input-group-text">
                          <div className="fas fa-envelope">                              
                          </div>
                      </div>
                  </div>
                  <input className="form-control" placeholder="E-mail" name="email"
                      value={values.email}
                      onChange={handleInputChange}
                      onBlur={handleValidation}/>
              </div>
              <div className = "form-group input-group">
                  <div className = "input-group-prepend">
                      <div className="input-group-text">
                          <div className="fas fa-mobile-alt">                              
                          </div>
                      </div>
                  </div>
                  <input className="form-control" placeholder="Phone" name="phone"
                      value={values.phone}
                      onChange={handleInputChange}
                      onBlur={handleValidation}/>             
              </div> 
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">Car Category</label>
                </div>
                <select class="custom-select" id="inputGroupSelect01" name="carCategory"
                  value={values.carCategory}
                  onChange={handleInputChange}
                  onBlur={handleValidation}>
                <option selected>Choose Car Category...</option>
                <option value="Small">Small</option>
                <option value="Premium">Premium</option>
                <option value="Van">Van</option>
                </select>
              </div>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect02">Car Model</label>
                </div>
                <select class="custom-select" id="inputGroupSelect02" name="carModel"
                  value={values.carModel}
                  onChange={handleInputChange}
                  onBlur={handleValidation}>
                 <option selected>Choose Car Model...</option>
                 <option value="Opel Corsa">Opel Corsa</option>
                 <option value="Toyota Yaris">Toyota Yaris</option>
                 <option value="Audi S8">Audi S8</option>
                 <option value="Jaguar XJR">Jaguar XJR</option>
                 <option value="BMW 750iL">BMW 750iL</option>
                 <option value="Volkswagen Touran">Volkswagen Touran</option>
                 <option value="Renault Espace">Renault Espace</option>
                 <option value="Fiat Talento">Fiat Talento</option>
                 </select>
              </div>                            
              <div className="form-group">
              </div>        
              <div className="form-group">         
                  <input type="submit" value="Submit" className="btn btn-primary btn-block"/> 
              </div>          
      </form> 
    );                       

} 

export default CaresForm;