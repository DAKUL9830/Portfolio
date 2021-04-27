import React, {useState} from "react";
import emailjs from "emailjs-com";
import {useForm} from "react-hook-form";

const Contacts = () => {
    const[successMessage,setSuccessMessage]=useState("");

    const {register,handleSubmit,formState:{errors}}=useForm();

    const serviceID='service_ID';
    const templateID='template_ID';
    const userID='user_TTb4mKRr9YPVYdMcHADlW';
    const onSubmit=(data,r)=>{
        sendEmail(
            serviceID,
            templateID,
            {
                name:data.name,
                phone:data.phone,
                email:data.email,
                company:data.company,
                description:data.description
            },
            userID
        )
        r.target.reset();
        console.log(data)
    }
    const sendEmail=(serviceID, templateID, variables, userID)=> {
       // e.preventDefault()
       
         emailjs.send(serviceID, templateID, variables, userID)
          .then(() => {
              setSuccessMessage("Form sent successfully!");
        
          }).catch(err=> console.error(`Something went wrong ${err}`));
      }
    return (
        <div id='contacts' className='contacts'>
          <div className='text-center'>
              <h1>contact me</h1>
            <p>You may contact me anytime and I will responce as soon as possible</p>
                <span className='success-message'>{successMessage}</span>
          </div>
            <div className='container'> 
              <form onSubmit={handleSubmit(onSubmit)}>
               <div className='row'>
                    <div className='col-md-6 col-xs-12'>
                        
                       {/* name input */}
                       <input 
                       id='name'
                       type='text'
                       className='form-control'
                        placeholder='Name'
                        name='name'
                        // {
                        //     ...register('name',{
                        //         required:"Please enter your name",
                        //         maxLength:{
                        //             value:20,
                        //             message:"Please enter a name with less than 20 characters",
                        //         }
                        //     })
                        // }
                        {...register('name', { required: true, maxLength: 20 })}
                        />
                        <div className='line'></div>
                        {errors.name && errors.name.type === "required" && <span className='error-message'>Please enter your name</span>}
                        {errors.name && errors.name.type === "maxLength" && <span className='error-message'>Please enter a name with less than 20 characters</span> } 
                        
                        {/* <span className='error-message'>
                           {errors.name && errors.name.message} 
                         </span>  */}
                        {/* phone input*/}
                       <input 
                       id='phone'
                       type='text'
                       className='form-control'
                        placeholder='Phone Number'
                        name='phone'
                        {...register('phone', { required: true})}
                        />
                        <div className='line'></div>
                        {errors.phone && errors.phone.type === "required" && <span className='error-message'>Please enter your phone</span>}
                        
                        {/* email input */}
                       <input 
                       id='email'
                       type='email'
                       className='form-control'
                        placeholder='Email'
                        name='email'
                        {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
                        />
                        <div className='line'></div>
                        {errors.email && errors.email.type === "required" && <span className='error-message'>Please enter your email</span>}
                        {errors.email && errors.email.type === "pattern" && <span className='error-message'>invalid email</span> } 
                        
                        {/*company name input */}
                       <input 
                       id='company'
                       type='text'
                       className='form-control'
                        placeholder='Company Name'
                        name='company'
                        {...register('company', { required: true})}
                        />
                        <div className='line'></div>
                        {errors.company && errors.company.type === "required" && <span className='error-message'>Please enter your company</span>}
                    </div>
                
                    <div className='col-md-6 col-xs-12'>
                   
                        {/* description */}
                        <textarea
                        id='description'
                        type='text'
                        className='form-control'
                        placeholder='Description'
                        name='description'
                        {...register('description', { required: true})}
                        ></textarea>
                        <div className='line'></div>
                        {errors.description && errors.description.type === "required" && <span className='error-message'>Your suggestions?</span>}
                        <button className="btn btn-outline-danger" type="submit">contact me</button>
                    </div>
                </div>
              </form>
            </div>
        </div>
    )
}

export default Contacts
