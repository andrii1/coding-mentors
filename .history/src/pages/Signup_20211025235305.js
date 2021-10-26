import React, { useRef, useLayoutEffect } from 'react';
import { useIdentityContext } from 'react-netlify-identity';
import { navigate } from "@reach/router" // from login tutorial
import useLoading from "../useLoading"

function Login({ }: MaybePathProps) {
  const {
    loginUser,
    signupUser,
    settings,
    loginProvider,
  } = useIdentityContext();
  const formRef = useRef < HTMLHeadingElement > (null);
  const [msg, setMsg] = React.useState('');
  const [isLoading, load] = useLoading();
  const signup = () => {
    const email = formRef.current.email.value;
    const password = formRef.current.password.value;
    load(
      signupUser(email, password, {
        data: 'signed up thru react-netlify-identity',
      })
    )
      .then(user => {
        console.log('Success! Signed up', user);
        navigate('/dashboard');
      })
      .catch(err => void console.error(err) || setMsg('Error: ' + err.message));
  };
  return (
    <form
      ref={formRef}
      onSubmit={e => {
        e.preventDefault();
        const email = formRef.current.email.value;
        const password = formRef.current.password.value;
        load(loginUser(email, password))
          .then(user => {
            console.log('Success! Logged in', user);
            navigate('/dashboard');
          })
          .catch(
            err => void console.error(err) || setMsg('Error: ' + err.message)
          );
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
      {settings && <pre>{JSON.stringify(settings, null, 2)}</pre>}
      {settings && settings.external.bitbucket && (
        <button className="btn" onClick={() => loginProvider('bitbucket')}>
          bitbucket
        </button>
      )}
      {settings && settings.external.github && (
        <button
          className="btn"
          style={{ background: 'lightblue' }}
          onClick={() => loginProvider('github')}
        >
          GitHub
        </button>
      )}
      {settings && settings.external.gitlab && (
        <button
          className="btn"
          style={{ background: 'darkgreen' }}
          onClick={() => loginProvider('gitlab')}
        >
          Gitlab
        </button>
      )}
      {settings && settings.external.google && (
        <button
          className="btn"
          style={{ background: 'lightsalmon' }}
          onClick={() => loginProvider('google')}
        >
          Google
        </button>
      )}
    </form>
  );
}

  export default Login;

function Spinner() {
  return (
    <div className="sk-folding-cube">
      <div className="sk-cube1 sk-cube" />
      <div className="sk-cube2 sk-cube" />
      <div className="sk-cube4 sk-cube" />
      <div className="sk-cube3 sk-cube" />
    </div>
  )
}
