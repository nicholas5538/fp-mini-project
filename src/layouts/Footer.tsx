import React from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';

type linkType = {
    text: string;
    href: string;
};

const Footer = () => {
    const externalLinks: linkType[] = [
        {
            text: 'Terms of Use',
            href: 'https://www.pepsico.com/legal/terms-of-use',
        },
        {
            text: 'Privacy',
            href: 'https://contact.pepsico.com/pepsi/privacy-policy',
        },
        {
            text: 'Accessibility Statement',
            href: 'https://www.pepsico.com/legal/accessibility-statement',
        },
    ];

    return (
        <div className='footer-container'>
            <Logo className='mb-4 md:mb-0' />
            <h4 className='mb-4 text-base tracking-wider md:mb-0 lg:tracking-widest'>
                Copyright &#169; 2023 PepsiCo, Inc.
            </h4>
            <div className='flex flex-row justify-between items-center'>
                {externalLinks.map(({ text, href }, index) => {
                    return (
                        <a
                            key={index}
                            target='_blank'
                            href={href}
                            rel='noreferrer'
                            className='footer-link'
                        >
                            {text}
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

export default Footer;
