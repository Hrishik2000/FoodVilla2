import React from 'react'
import { useRouteError } from 'react-router-dom';

export const ErrorPage = () => {

    
    const err = useRouteError();
    
  return (
    <>
    <h1>OOPS...</h1>
    <h2>Something Went Wrong..</h2>
    
    <div>{`Error Code : ${err.status} &  statusText
: ${err.statusText}` }</div>

    </>
  )
}
