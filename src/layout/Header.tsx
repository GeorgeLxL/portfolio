import { useEffect, useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import _ from 'lodash';
import {
    Discord,
    Telegram,
    Skype,
    Gmail
} from "@icons-pack/react-simple-icons";

function Header() {

    const location = useLocation()

    const [menuOpen, setMenuOpen] = useState(false)
    const [y, setY] = useState(0)
    const [scrollUp, setScrollUp] = useState(false)
    const [activeTab, setActiveTab] = useState(1)

    useEffect(()=>{
        window.scrollTo(0, 0)
        if (window.location.pathname.split('/')[1] === '') {
            setActiveTab(1)
        }
        else if (location.pathname.split('/')[1] === 'about') {
            setActiveTab(2)
        }
        else if (location.pathname.split('/')[1] === 'resume') {
            setActiveTab(3)
        }
        else if (location.pathname.split('/')[1] === 'service') {
            setActiveTab(4)
        }
        else if (location.pathname.split('/')[1] === 'portfolio') {
            setActiveTab(5)
        }
        else {
            setActiveTab(0)
        }
    },[location.pathname])

    useEffect(()=>{
        if (menuOpen) document.body.style.overflow = 'hidden'
        else document.body.style.overflow = 'auto'
    }, [menuOpen])

    useEffect(() => {
        setY(window.scrollY);
        window.addEventListener('scroll', _.debounce(() => {
            if (window.scrollY>100) {
                setScrollUp(true)
            }
        }, 2000));
        return() =>{
            window.removeEventListener("scroll", _.debounce(() => {
                if (window.scrollY>100) {
                    setScrollUp(true)
                }
            }, 2000));
        }
    },[y]);

    const handleNavigation = useCallback((e) => {
        if (y > window.scrollY) {
            setScrollUp(false);
        } else if (y < window.scrollY) {
            setScrollUp(true);
        }
        setY(window.scrollY)
    }, [y]);

    useEffect(() => {
        window.addEventListener("scroll", handleNavigation);
        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);

    return (
        <>
            <header className={`${y<100? '' : 'header-scrolled'} ${scrollUp? 'header-scroll': ''} ${menuOpen? 'open':''}`}>
                <div className="container h-100 d-flex justify-content-between align-items-center">
                    <Link className="text-success text-nowrap" to="/" onClick={()=>(setMenuOpen(false))}><img src="/assets/img/logo.png" alt='logo' /><span>Sato Takeru</span></Link>
                    <div className="d-none d-md-flex align-items-center">
                        <ul className="d-flex align-items-center">
                            <li className="d-block me-4"><Link className={`${activeTab===1?'active':''}`} to="/">Home</Link></li>
                            <li className="d-block me-4"><Link className={`${activeTab===2?'active':''}`} to="/about">About</Link></li>
                            <li className="d-block me-4"><Link className={`${activeTab===3?'active':''}`} to="/resume">Resume</Link></li>
                            <li className="d-block me-4"><Link className={`${activeTab===4?'active':''}`} to="/service">Service</Link></li>
                            <li className="d-block me-5"><Link className={`${activeTab===5?'active':''}`} to="/portfolio">Portfolio</Link></li>
                        </ul>
                        <a className="bg-success rounded px-3 py-1" href="mailto:georgelxl6@gmail.com">Email Me</a>
                    </div>
                    <div className={`menu-btn d-flex d-md-none flex-column ${menuOpen? 'open': ''}`} onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="my-1"></span>
                        <span className="my-1"></span>
                        <span className="my-1"></span>
                    </div>
                </div>
            </header>
            <menu className={`d-flex d-md-none flex-column justify-content-center align-items-center text-success ${menuOpen? 'open': ''}`}>
                <ul>
                    <li className="mb-4"><Link to="/" onClick={()=>(setActiveTab(1), setMenuOpen(false), setScrollUp(false))}>Home</Link></li>
                    <li className="mb-4"><Link to="/about" onClick={()=>(setActiveTab(2), setMenuOpen(false), setScrollUp(false))}>About</Link></li>
                    <li className="mb-4"><Link to="/resume" onClick={()=>(setActiveTab(3), setMenuOpen(false), setScrollUp(false))}>Resume</Link></li>
                    <li className="mb-4"><Link to="/service" onClick={()=>(setActiveTab(4), setMenuOpen(false), setScrollUp(false))}>Serivce</Link></li>
                    <li><Link to="/portfolio" onClick={()=>(setActiveTab(5), setMenuOpen(false), setScrollUp(false))}>Portfolio</Link></li>
                </ul>
                <div className="mt-5 d-flex justify-content-center align-items-center">
                    <a className="d-flex me-4" target="_blank" href='https://discordapp.com/users/GeorgeLXL#0511' rel='noreferrer'><Discord height='32' width='32' /></a>
                    <a className="d-flex me-4" target="_blank" href='https://t.me/@TalentTalent6' rel='noreferrer'><Telegram height='32' width='32' /></a>
                    <a className="d-flex me-4" target="_blank" href='https://join.skype.com/invite/vVl5cxDTMFeB' rel='noreferrer'><Skype height='32' width='32' /></a>
                    <a className="d-flex" href='mailto:georgelxl6@gmail.com'><Gmail height='32' width='32' /></a>
                </div>
            </menu>
        </>
    )
}

export default Header