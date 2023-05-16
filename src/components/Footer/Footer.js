import SNlogo from '../../imgs/SN-Logo.jpg';
import LogoT from '../../imgs/LogoT.png';
import Wave from '../../imgs/wave.png';

export default function Footer() {
    return(
        <div className="footer" style={{backgroundImage: `url(${Wave})`}}>
                <span className="footer-left">
                <img className="small-logo" src={SNlogo} alt="designer logo" />
                <p>Developed by: S.Nelson</p>
                </span>
                <span className="footer-right">
                <img className="small-logo" src={LogoT} alt="Website Logo" />
                </span>
        </div>
    )
}