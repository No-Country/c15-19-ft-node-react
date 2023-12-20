import React from "react";
import Header from "../../layout/Header/Header";
import NavBarLower from "../../components/NavBarLower/NavBarLower";
import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function Wrapper(){

  const {auth, loading} = useAuth()

  console.log('Auth:', auth)

  console.log(auth._id)

  if(loading) return 'Cargando...'
  return (
    <>
      {auth._id ? (
        <>
              <Header />
              <Outlet />
              <NavBarLower />
        </>
        ) : <Navigate to='/'/>
      }

    </>
  );
};

export default Wrapper;
