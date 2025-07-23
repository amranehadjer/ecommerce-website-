import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {



    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
   
    const navigate = useNavigate()
    // const [chang, setchang] = useState('')




    const handleSubmit = (e) => {
        e.preventDefault()
        if (name.length > 0 && email.length > 0 && password.length > 0
            ) {

            console.log(name, email, password)
            setName('')
            setEmail('')
            setpassword('')
          
            // alert("hi")
            navigate('/')
        }
    }



    return (
        <div>

            <div className="d-flex justify-content-center align-items-center vh-100">


                <form className="p-4 border rounded shadow-sm bg-light" style={{ width: '100%', maxWidth: '500px' }}
                    onSubmit={handleSubmit}
                >
                    <h2 className='p-2 '>LOGIN</h2>

                    <div className="mb-3 input-group">
                        <span className="input-group-text"><i className="fa fa-user" aria-hidden="true"></i></span>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputName"
                            placeholder="Enter your name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3 input-group">
                        <span className="input-group-text"><i className="fa fa-envelope" aria-hidden="true"></i></span>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail"
                            placeholder="Enter your email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />


                      


                    </div>

                    <div className="mb-3 input-group">
                        <span className="input-group-text"><i className="fa fa-comment" aria-hidden="true"></i></span>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputMessage"
                            placeholder="Enter your password"
                            required
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                        />
                    </div>

                    <div className="mb-3 form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="exampleCheck1"
                        >
                            Check me out
                        </label>
                    </div>


                    <button type="submit" className="btn btn-primary w-100" >click me</button>


                </form>
            </div>



        </div>
    )
}

export default Login