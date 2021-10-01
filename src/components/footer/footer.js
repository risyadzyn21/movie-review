import React from 'react';
import styles from './footer.module.css';
import milanTVLogo from './../../MilanTVLogo.svg';
import googlePlayLogo from './../../googlePlay.svg';
import appStoreLogo from './../../appleStore.svg';
import facebookLogo from './../../fbLogo.svg';
import pinterestLogo from './../../pinterestLogo.svg';
import instagramLogo from './../../igLogo.svg';
// import copyrightLogo from './../../copyright.svg';


function Footer() {
    return(
        <div className={styles.homePage}>
            <footer>
            
            <div className={styles.footerGridContainer}>
                <ul className={styles.footer1Wrapper}>
                <li>
                    <div className={styles.milanTVLogo}>
                        <img src={milanTVLogo} alt="milanTVLogo" />
                        <span>MilanTV</span>
                    </div> 
                </li>
                <li>
                    <div className={styles.tagline}>
                        The Movie Review
                    </div>
                </li>
                </ul>
                <ul className={styles.footer2Wrapper}>
                    <li>Tentang Kami</li>
                    <li>Blog</li>
                    <li>Layanan</li>
                    <li>Karir</li>
                    <li>Pusat Media</li>
                </ul>
                <ul className={styles.footer3Wrapper}>
                    <li>Download</li>
                    <li className={styles.downloadImage}>
                        <span id={styles.googleLogo}><img src={googlePlayLogo} alt="Google Play Logo" /> </span> 
                        <span><img src={appStoreLogo} alt="Apple Store Logo" /> </span> 
                    </li>
                    <li className={styles.socialMediaText}>Social media</li>
                    <li className={styles.socialMediaImage}> 
                    <span id={styles.facebookLogo}><img src={facebookLogo} alt="Facebook Logo" /> </span> 
                    <span id={styles.pinterestLogo}><img src={pinterestLogo} alt="Pinterest Logo" /> </span> 
                    <span id={styles.instagramLogo}><img src={instagramLogo} alt="Instagram Logo" /> </span> 
                    </li>
                </ul>
            </div>
            <div className={styles.linesContainer}>
                <hr className={styles.lines} />
            </div>
            <div className={styles.milanCopyright}>
                   <p>Copyright 2002-202 MilanTV. All Rights Reserved </p> 
            </div>
            </footer>
        </div>
        
    )
}

export default Footer;