import React, { useState } from 'react';
import './Footer.css';
import Links from '../data/Links.json';
import SocialInfo from '../data/Social_Info.json';
import ContactInfo from '../data/Contact_Info.json';

export default function Footer() {
    const [email, setEmail] = useState('');

    const handleSubscribe = () => {
        const isValidEmail = email.trim() !== '' && email.includes('@');
        const message = isValidEmail ? 'Subscribed!' : 'Please enter a valid email';
        alert(message); //Logic will be fixed soon.
    };

    return (
        <div className="footer">
            <div className="footer__content">
                <h2 className="footer__logo">LA PIAZZA</h2>

                {/* Footer Links */}
                <ul className="footer__item footer__links">
                    {Links.map((item, index) => (
                        <li key={index}>
                            <a href={item.url}>{item.title}</a>
                        </li>
                    ))}
                </ul>

                {/* Contact Information */}
                <div className="footer__item footer__contact-info">
                    {ContactInfo.contactInfo.map((contactItem, index) => (
                        <p key={index}>
                            <i className={contactItem.icon}></i>
                            <span>{contactItem.value}</span>
                        </p>
                    ))}
                </div>

                {/* Newsletter Subscription */}
                <div className="footer__item footer__social">
                    <div className="footer__subscription">
                        <h3>Newsletter Subscription</h3>
                        <div className="footer__subscription-field">
                            <input
                                type="email"
                                aria-label="subscribeInput"
                                placeholder="Your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button onClick={handleSubscribe}>Subscribe</button>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="footer__social-links">
                        {SocialInfo.social.map((socialItem) => (
                            <div key={socialItem.id}>
                                <a href={socialItem.link} title="Social" className="footer__social-item">
                                    <i className={socialItem.icon}></i>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="footer__copyright">Copyright © 2023 StV Company. All rights reserved.</div>
        </div>
    );
}
