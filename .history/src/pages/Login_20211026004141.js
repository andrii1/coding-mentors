import React, { useRef, useLayoutEffect } from 'react';
import { useIdentityContext } from 'react-netlify-identity';
import { navigate } from "@reach/router" // from login tutorial
import useLoading from '../useLoading';

import React from "react"

import {
  IdentityModal,
  useIdentityContext,
} from "react-netlify-identity-widget"
import "react-netlify-identity-widget/styles.css" // delete if you want to bring your own CSS

function Login() {
  const identity = useIdentityContext()
  const [dialog, setDialog] = React.useState(false)
  return (
    <>
      <h1>Log in</h1>
      <button onClick={() => setDialog(true)}>log in</button>

      <IdentityModal
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
        onLogin={user => navigate("/app/profile")}
        onSignup={user => navigate("/app/profile")}
      />
    </>
  )
}

export default Login
