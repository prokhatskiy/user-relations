import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';

export default class App {
    run() {
        const contentElem = document.getElementById('app');

        ReactDOM.render(
            <Router />,
            contentElem
        );
    }
}
