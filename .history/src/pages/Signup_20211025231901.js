import React, { Component } from 'react';
import { useIdentityContext } from 'react-netlify-identity';
import { navigate } from "@reach/router" // from login tutorial

function Login() {
  const { loginUser, signupUser } = React.useContext(IdentityContext)
  const formRef = React.useRef()
  const [msg, setMsg] = React.useState("")
  const [isLoading, load] = useLoading()
  const signup = () => {
    const email = formRef.current.email.value
    const password = formRef.current.password.value
    load(signupUser(email, password))
      .then(user => {
        console.log("Success! Signed up", user)
        navigate("/dashboard")
      })
      .catch(err => console.error(err) || setMsg("Error: " + err.message))
  }
  return (
    <form
      ref={formRef}
      onSubmit={e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        load(loginUser(email, password))
          .then(user => {
            console.log("Success! Logged in", user)
            navigate("/dashboard")
          })
          .catch(err => console.error(err) || setMsg("Error: " + err.message))
      }}
    >
      <div>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
      </div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <input type="submit" value="Log in" />
          <button onClick={signup}>Sign Up </button>
          {msg && <pre>{msg}</pre>}
        </div>
      )}
    </form>
  )
}

  export default Login;
