"use client";
import React from 'react'
import {Provider} from "react-redux"
import store from './Store';

function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export default Providers;
 