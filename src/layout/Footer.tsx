import { Link } from 'react-router-dom';
import {
    Stackoverflow,
    Github,
    Medium,
    Discord,
    Telegram,
    Skype,
} from '@icons-pack/react-simple-icons';

function Footer() {
    return (
        <>
            <footer className='pt-5 bg-teal position-relative'>
                <div className='container'>
                    <div className='mb-5'>
                        <ul className="d-flex flex-wrap align-items-center fw-bold">
                            <li className="d-block me-3 me-sm-4"><Link to="/">Home</Link></li>
                            <li className="d-block me-3 me-sm-4"><Link to="/about">About</Link></li>
                            <li className="d-block me-3 me-sm-4"><Link to="/resume">Resume</Link></li>
                            <li className="d-block me-3 me-sm-4"><Link to="/service">Service</Link></li>
                            <li className="d-block"><Link to="/portfolio">Portfolio</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='py-5 bg-success text-dark'>
                    <div className='container'>
                        <div className="d-block d-md-flex justify-content-between align-items-center">
                            <div className='footer-link d-flex justify-content-center mb-3 mb-md-0'>
                                <a target="_blank" href='https://stackoverflow.com/users/16431842/sato-takeru' rel='noreferrer'><Stackoverflow /></a>
                                <a target="_blank" href='https://github.com/GeorgeLxL' rel='noreferrer'><Github /></a>
                                <a target="_blank" href='https://medium.com/@sato-takeru' rel='noreferrer'><Medium /></a>
                                <a target="_blank" href='https://discordapp.com/users/GeorgeLXL#0511' rel='noreferrer'><Discord /></a>
                                <a target="_blank" href='https://t.me/@TalentTalent6' rel='noreferrer'><Telegram /></a>
                                <a target="_blank" href='https://join.skype.com/invite/vVl5cxDTMFeB' rel='noreferrer'><Skype /></a>
                            </div>
                            <p className='text-white text-center'>© Copyright 2021 by Sato Takeru</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer