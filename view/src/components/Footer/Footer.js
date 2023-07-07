import React from 'react';
import './Footer.css';

export function Footer() {
    return (
        <div className='footer-component'>
            <div className='footer-container'>
                <div className='footer-item'>
                    <p>Any branding/ logo/ themes/ colors used on this website are not affiliated or endorsed by <a href='https://www.amazon.com'>Amazon©</a> and are purely coincidental.</p>
                </div>
                <div className='footer-item'>
                    <p><a href='/about'>About</a></p>
                </div>
                <div className='footer-item'>
                    <p>Website developed and designed by <a href='https://github.com/jonathanferraro'>Jonathan Ferraro</a></p>
                </div>
            </div>
        </div>
    )
};

