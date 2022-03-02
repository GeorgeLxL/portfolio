import Particles from "react-tsparticles"

function Particle() {
    return(
        <>
            <Particles
                className='particle'
                params={{
                    particles: {
                    number: {
                        value: 100,
                        density: {
                        enable: true
                        }
                    },
                    color: {
                        value: '#696'
                    },
                    shape: {
                        type: 'star'
                    },
                    opacity: {
                        value: .3,
                        random: true,
                        anim: {
                        enable: true,
                        speed: .5,
                        opacity_min: 0,
                        }
                    },
                    size: {
                        value: 2,
                        random: true,
                        anim: {
                        speed: 4,
                        size_min: 0.3
                        }
                    },
                    links: {
                        enable: false
                    },
                    move: {
                        direction: "top-right",
                        enable: true,
                        outMode: "out",
                        random: false,
                        speed: .5,
                        straight: false,
                        bounce: false,
                    }
                    },
                    interactivity: {
                    events: {
                        onhover: {
                        enable: true,
                        mode: "bubble"
                        },
                        onclick: {
                        enable: true,
                        mode: "repulse"
                        }
                    },
                    modes: {
                        bubble: {
                        distance: 200,
                        duration: 2,
                        size: 0,
                        opacity: 0
                        },
                        repulse: {
                        distance: 100,
                        duration: 2
                        }
                    }
                    }
                }}
            />
        </>
    )
}

export default Particle