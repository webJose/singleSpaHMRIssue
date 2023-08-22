import React from 'react';
import ReactDOMClient from 'react-dom/client';
import rootComponent from './App.js';
// @ts-ignore
import singleSpaReact from 'single-spa-react';
import { cssLifecycle } from 'vite-plugin-single-spa/ex';

const lc = singleSpaReact({
    React,
    ReactDOMClient,
    rootComponent,
    errorBoundary(_err: any, _info: any, _props: any) {
        // https://reactjs.org/docs/error-boundaries.html
        return <div>This renders when a catastrophic error occurs</div>;
    },
});

export const bootstrap = [cssLifecycle.bootstrap, lc.bootstrap];
export const mount = [cssLifecycle.mount, lc.mount];
export const unmount = [cssLifecycle.unmount, lc.unmount];
