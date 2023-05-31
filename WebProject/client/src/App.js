import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { observer } from "mobx-react-lite";
import { Context } from ".";
import { Spinner } from "react-bootstrap";
import { check } from "./http/userAPI";
import NavBar from "./components/NavBar";

const App = observer(() => {
  const { user } = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    check(user.user).then(data => {
      user.setIsAuth(true)
      user.setRole(data)
    })
    .catch((error) => user.setIsAuth(false))
    .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    check(user.user).then(data => {
      user.setRole(data)
    }).finally(() => setLoading(false))
  }, [user.isAuth, user.role])

  if (loading) {
    return <Spinner animation={"grow"} />
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
})

export default App; 
