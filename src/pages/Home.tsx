import { Link } from "react-router-dom";
import { Parallax } from "react-parallax"
import { useEffect } from "react";
import Particle from "./Particles";

import { Progress, Googlecast, HiveBlockchain, Ios } from "@icons-pack/react-simple-icons";

function TxtRotate(el: any, toRotate: any, period: any) {
    let loopNum = 0;
    period = parseInt(period, 10) || 2000;
    let txt = '';
    let isDeleting = false;
    tick(el, toRotate, period, loopNum, txt, isDeleting)
};
function tick(el: any, toRotate: any, period: any, loopNum: number, txt: string, isDeleting: boolean) {
    var i = loopNum % toRotate.length;
    var fullTxt = toRotate[i];

    if (isDeleting) {
        txt = fullTxt.substring(0, txt.length - 1);
    } else {
        txt = fullTxt.substring(0, txt.length + 1);
    }

    el.innerHTML = '<span class="wrap">'+txt+'</span>';

    var delta = 200 - Math.random() * 100;

    if (isDeleting) { delta /= 2; }

    if (!isDeleting && txt === fullTxt) {
        delta = period;
        isDeleting = true;
    } else if (isDeleting && txt === '') {
        isDeleting = false;
        loopNum++;
        delta = 300;
    }

    setTimeout(function() {
        tick(el, toRotate, period, loopNum, txt, isDeleting);
    }, delta);
};

function Home() {

    useEffect(()=>{
        writeText()
    },[])

    const writeText = () => {
        var elements = document.getElementsByClassName('txt-rotate');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-rotate');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                TxtRotate(elements[i], JSON.parse(toRotate), period);
            }
        }
    }
      
    

    return (
        <>
            <section className="banner banner-home">
                <Particle />
                <div className="banner-home-main container h-100 d-flex flex-column justify-content-center align-items-start pb-5">
                    <h1 className="mb-5">I am a full stack web<br />&nbsp;&nbsp;&nbsp;&nbsp; & blockchain developer</h1>
                    <h2 className="pb-5">I am a&nbsp;
                        <span
                        className="txt-rotate"
                        data-period="2000"
                        data-rotate='[ "full stack developer",
                        "blockchain developer",
                        "mobile developer" ]'
                        >
                        </span>
                    </h2>
                    <div className="mb-5 d-flex fw-bold">
                        <a className="px-4 px-md-5 py-1 py-md-2 bg-success rounded d-block me-4 mb-5" href="mailto:georgelxl6@gmail.com">Hire Me</a>
                        <a className="px-4 px-md-5 py-1 py-md-2 bg-white border border-success text-success rounded d-block mb-5" style={{borderWidth: '2px'}} href="/assets/pdf/SatoTakeru_resume.pdf" download>Get CV</a>
                    </div>
                </div>
            </section>
            <section className="home-about bg-white py-5">
                <div className="container">
                    <h2 className="title">About me</h2>
                    <div className="mt-5 mx-auto col-12 col-lg-10 col-xl-8 col-xxl-7">
                        <p>I am a Full-stack Web & Blockchain developer who loves perfect work based on Kyoto, Japan.<br />I love to learn, develop, create new.</p>
                        <div className="view-more">
                            <Link className="bg-success text-white" to='/about'>View more</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-service bg-light">
                    <div className="py-5">
                        <div className="container my-4">
                            <div className="bg-white p-4 p-sm-5 rounded shadow-sm">
                                <h2 className="title">My Services</h2>
                                <div className="row pt-5">
                                    <div className="col-12 col-md-6 col-xl-3 mb-4">
                                        <div className="card bg-white h-100">
                                            <div className="card-body">
                                                <div className="card-image"><Progress /></div>
                                                <div className="card-title"><h6>Project Management</h6></div>
                                                <div className="card-text">
                                                    <p></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-xl-3 mb-4">
                                        <div className="card bg-white h-100">
                                            <div className="card-body">
                                                <div className="card-image"><Googlecast /></div>
                                                <div className="card-title"><h6>Web Development</h6></div>
                                                <div className="card-text"></div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-xl-3 mb-4">
                                        <div className="card bg-white h-100">
                                            <div className="card-body">
                                                <div className="card-image"><HiveBlockchain /></div>
                                                <div className="card-title"><h6>Blockchain Development</h6></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-xl-3 mb-4">
                                        <div className="card bg-white h-100">
                                            <div className="card-body">
                                                <div className="card-image"><Ios /></div>
                                                <div className="card-title"><h6>Mobile Development</h6></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
            </section>
            <Parallax className="home-service-back" bgImage="/src/assets/img/home/home-service.jpg" strength={500}>
                </Parallax>
        </>
    )
}

export default Home