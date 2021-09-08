import React, { Fragment } from 'react';
import { GithubIcon } from './Icons';

const Footer = () => {

    return (
        <Fragment>
            <div className="footer_main">
                <div className="footer_icon">
                    <a href="https://github.com/SujithGunasekaran" target="_blank" rel="noreferrer">
                        <GithubIcon cssClass="footer_text" />
                    </a>
                </div>
            </div>

        </Fragment>
    )

}

export default Footer;
