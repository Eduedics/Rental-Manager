import React from "react"


export default function Login() {
    const [formData,setFormData] =React.useState({email:"",password:''})
    function handleSubmit(e){
        e.preventDefault()
        console.log(formData)
    }
    function handleChange(e){
        const {name,value} = e.target
        setFormData(pre =>{
            return {
                ...pre,[name]:value
            }
        })
    }
    
    return (
        <div className="login-container">
            <h1>Sign in</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={formData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                />
                <button>Log in</button>
            </form>
        </div>
    )

}