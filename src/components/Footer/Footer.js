import SNlogo from '../../imgs/SN-Logo.jpg';
import LogoT from '../../imgs/LogoT.png';
import Wave from '../../imgs/wave.png';

export default function Footer() {
    return(
        <div className="footer">
                <div className="footer-left">
                <img className="small-logo" src={SNlogo} alt="designer logo" />
                <p>Developed by: S.Nelson</p>
                </div>
                <div className="footer-right">
                <img className="small-logo" src={LogoT} alt="Website Logo" />
                </div>
        </div>
    )
}