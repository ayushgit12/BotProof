import {React,useState } from 'react'

function SignUp(){

const [formData,setFormData] = useState({

username:'',
email:'',
password:'',
confirmPassword:''

})


const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
}

const handleSubmit=(e)=>{
      e.preventDefault();
      console.log(formData);      

}

return (
    <div>
        <form onSubmit={handleSubmit}>
   <h1>signUp</h1>
<div>
    <label htmlFor="username"></label>
<input 
type="text"
name="username"
id = "username"
value={formData.username}
placeholder='username'
required : true 
onChange={handleChange}


/>
<label htmlFor="email"></label>
<input 
type="email" 
id = 'email'
name="email"
value={formData.email}

placeholder='email'
required : true
onChange={handleChange}

/>
<label htmlFor="password"></label>
<input 
type="password" 
name="password" 
id="password" 
placeholder='password' 
required:true
 onchange={handleChange} 
 value ={formData.value} />

 <input 
 type="password"
 id='confirmPassword'
 name='confirmPassword'
 placeholder='confirm password'
 required : true
 onChange={handleChange}
 value={formData.confirmPassword}

  />
</div>


        </form>
    </div>
)

}
export default SignUp;