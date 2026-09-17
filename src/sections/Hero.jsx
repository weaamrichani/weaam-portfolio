import { words } from '../constants/index.js'
import Button from '../components/Button.jsx'
import HeroExperience from '../components/HeroModels/HeroExperience.jsx'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';



const Hero = () => {
    
    // Shaping X into Real Projects that Deliver Results animation upon refresh using GSAP
    useGSAP(() => {
        gsap.fromTo('.hero-text h1',
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.3, 
                duration: 1,
                ease: 'power2.inOut'
            },
        )
    }, []);

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout">
        {/*LEFT: HERO CONTENT */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
            <div className="flex flex-col gap-7">
                <div className="hero-text">
                    <h1>Thinking it is easy.</h1>
                    <h1> Transforming
                        <span className="slide">
                            <span className="wrapper">
                                {words.map((word, index) => (
                                    <span 
                                        key={index} 
                                        className="flex items-center md:gap-3 gap-1 pb-2"
                                    >
                                    <img 
                                        src={word.imgPath} 
                                        alt="person" 
                                        className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                                        
                                    />
                                    <span>{word.text}</span>
                                    </span>
                                ))}
                            </span>
                        </span>
                    </h1>
                    <h1>into reality is the fun part.</h1>
                </div>

                <p className="text-white-50 md:text-xl  [word-spacing:2px] relative z-10 pointer-events-none">
                    Hi, I'm Weaam Richani. I build things, break things, and call it development.
                </p>
                
                <Button
                    className="md:w-80 md:h-60 h-12"
                    id="button"
                    text="See my Work"
                />

            </div>
        </header>

        {/*RIGHT: 3D MODEL */}
        <figure>
            <div className="hero-3d-layout">
                <HeroExperience />  
            </div>
        </figure>
      </div>

      
    </section>
  )
}

export default Hero
