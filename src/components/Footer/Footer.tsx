import { FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';
import { SocialIconWrapper } from '../styled/Wrappers';



export const Footer = () => {
    return (
        <>
            <span></span>
            <span>copyrights 2023</span>
            <div>
                <SocialIconWrapper>
                    <FaFacebook />
                </SocialIconWrapper>
                <SocialIconWrapper>
                    <FaInstagram />
                </SocialIconWrapper>
                <SocialIconWrapper>
                    <FaLinkedin />
                </SocialIconWrapper>
            </div>
        </>
    )
}