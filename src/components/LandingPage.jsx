import React from 'react';

import Base from './Base';
import Button from './Button';
import Icon from './Icon';

import setlife from '../scripts/setlife'

export default class LandingPage extends Base {
    handleStartCoding() {
        setlife.clearLandingPage();
    }
    render() {
        return (
            <div className='LandingPage'>
                <p>This is the LandingPage component</p>
                <p>How would you like to start building?</p>
                <div className='basic section'>
                    <h6>{'Pre-Coded'}</h6>
                    <span>{'Generate these features automatically and edit the code as needed'}</span>
                    <Button onClick={this.handleNewComponents}>
                        <p>Add a Contact Form</p>
                    </Button>
                    <Button onClick={this.handleNewComponents}>
                        <p>Add a Team Section</p>
                    </Button>
                </div>
                <div className='advanced section'>
                    <h6>{'Custom'}</h6>
                    <span>{'Clear this page and begin from scratch. Code-Generating CLI Tools are available to increase your development speed'}</span>
                    <Button onClick={this.handleStartCoding}>
                        <p>{'Clear this Landing Page and start with a fresh template'}</p>
                    </Button>
                    <span>{'Check out the Style Guide to use the pre-coded mixins and flexbox classes. Overwrite anything you want, it\'s your own code!'}</span>
                </div>
                
                
            </div>
        );
    }
}