import {
    Stack,
    useBreakpointValue,
    Button,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook, FaLinkedin, FaAt, FaPhoneAlt } from 'react-icons/fa';
import color from '../color'
import { Fade } from 'react-awesome-reveal';
import { useState } from 'react'
import { useEffect } from 'react'
import SocialButton from './SocialButton'
import { PiArrowRightThin } from "react-icons/pi";

export default function NavBar_({ photo }) {
    const mobile = useBreakpointValue({ base: true, md: false });
    const styles = {
        //backgroundColor: "#030318",
        // backgroundColor: "#B6B6B6",
        //backgroundColor: 'rgb(23 39 47 / 16%)',
        backgroundColor: 'rgb(18 44 124 / 50%)',
        backgroundImage: `url('/projects/bg_up_.jpeg')`,
        backgroundBlendMode: "soft-light",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        //backgroundPosition: "center",
        overflow: "hidden",
        padding: mobile ? "100px 10px" : 200,
        width: '100%',
        height: '100vh',
        //backgroundRepeat: "no-repeat",
        backgroundAttachment: 'fixed'
    }

    const [direction, setDirection] = useState('row');

    useEffect(() => {
        const newDirection = mobile ? 'column' : 'row';
        setDirection(newDirection);
    }, [mobile]);

    return (
        <div className='bg-footer'>
            {photo &&
                <Stack
                    align='center'
                    //direction='column'
                    style={{ width: '100%', height: '100vh' }}
                >
                    <div
                        style={styles}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                                <Fade>
                                    <img
                                        src={`/logo-removebg.png`}
                                        style={{ height: 80, }}
                                    />
                                </Fade>
                            </div>
                        <Stack
                            direction={'column'}
                            alignContent={'center'}
                            style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}

                        >
                            <div>
                                <Fade>
                                    <h3 className="col-about-title text-shadow" style={{ fontWeight: '500', textAlign: 'center', fontSize: 35 }}>Continuamos trabajando en mejoras para nuestra página web y pronto implementaremos actualizaciones</h3>
                                    <p className="text-shadow" style={{ color: 'white', fontWeight: '300', textAlign: 'center', fontSize: 13 }}>Última actualización 24-04-2024</p>
                                </Fade>
                            </div>
                            <Stack style={{ alignContent: 'center' }}>
                                <section className="p-footer">
                                    <Fade damping={0.2} delay={0.2}>
                                        <Stack direction={direction} justifyContent={'space-between'} style={{ marginTop: 20, alignItems: mobile ? 'center' : 'initial' }}>
                                            <Stack direction={'row'}>
                                                <a href={'https://twitter.com/GRUPO_TICONSA'} target="_blank">
                                                    <SocialButton>
                                                        <FaTwitter />
                                                    </SocialButton>
                                                </a>
                                                <a href={'https://www.youtube.com/@GRUPOTICONSASADECV'} target="_blank">
                                                    <SocialButton>
                                                        <FaYoutube />
                                                    </SocialButton>
                                                </a>
                                                <a href={'https://www.instagram.com/grupo_ticonsa/'} target="_blank">
                                                    <SocialButton>
                                                        <FaInstagram />
                                                    </SocialButton>
                                                </a>
                                                <a href={'https://www.facebook.com/GrupoTiconsa/'} target="_blank">
                                                    <SocialButton>
                                                        <FaFacebook />
                                                    </SocialButton>
                                                </a>
                                                <a href={'mailto:info@grupoticonsa.com.mx'} target="_blank">
                                                    <SocialButton>
                                                        <FaAt />
                                                    </SocialButton>
                                                </a>
                                                <a href={'tel:+5554848355'}>
                                                    <SocialButton>
                                                        <FaPhoneAlt />
                                                    </SocialButton>
                                                </a>
                                                {/*<a href={'https://www.linkedin.com/company/grupo-ticonsa/'} target="_blank">
                                <SocialButton>
                                    <FaLinkedin />
                                </SocialButton>
        </a>*/}
                                            </Stack>
                                        </Stack>
                                    </Fade>
                                </section>
                            </Stack>
                        </Stack>
                    </div>
                </Stack>
            }

        </div >
    )
}