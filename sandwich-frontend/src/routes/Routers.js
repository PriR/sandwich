import React from 'react';
import { Route } from 'react-router-dom';

export default function Routers({isAuth, component: Component, ...rest}) {
  return (<Route exact {...rest} render={(props) => {
    if (isAuth) {
      return <Component />
    }
  }}>
  </Route>
  )
}
