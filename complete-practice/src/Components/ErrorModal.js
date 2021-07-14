import React from 'react';
import Card from './Card.js';
import Button from './Button.js';

const ErrorModal = props => {
    return (
        <div className="modal">
            <Card>
                <header>
                    <h2>{props.title}</h2>
                </header>
                <div>
                    <p>{props.message}</p>
                </div>
                <footer>
                    <Button>Okay</Button>
                </footer>
            </Card>
        </div>
    );
}

export default ErrorModal;