import { useEffect, useRef, useState } from 'react';
import ParticleBackground from './ParticleBackground'; // Import the ParticleBackground component

const classes = {
  backgroundContainer: 'relative w-full h-screen overflow-hidden flex items-center justify-center',
  article: 'relative z-10 skills-article transition-transform duration-1000 ease-out opacity-100 transform translate-x-0',
  title: 'text-3xl font-bold mb-4 text-center text-black-800',
  subtitle: 'text-lg mt-2 mb-8 italic text-center font-bold text-black',
  skillsContainer: 'skills-class grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-8 lg:px-16 mx-auto max-w-screen-xl',
  skillCard: 'bg-transparent text-white border border-rgb rounded-lg p-4 min-h-[300px] max-h-[400px] shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:border-rgb',
  cardTitle: 'text-2xl font-semibold mb-4 text-center',
  cardContainer: 'card-container flex flex-wrap gap-2 justify-center items-center',
  card: 'card bg-white text-gray-800 p-2 rounded-lg flex items-center opacity-80',
  scrollContainer: 'overflow-y-auto max-h-[400px]',
};

const Skills = () => {
  const articleRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 640);

  const handleScroll = () => {
    requestAnimationFrame(() => {
      if (articleRef.current) {
        const rect = articleRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setHasAnimated(true);
          window.removeEventListener('scroll', handleScroll);
        }
      }
    });
  };

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 640);
  };

  useEffect(() => {
    const debouncedHandleScroll = debounce(handleScroll, 100);
    window.addEventListener('scroll', debouncedHandleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={classes.backgroundContainer}>
      <ParticleBackground /> {/* Add the ParticleBackground component here */}
      <article ref={articleRef} className={`${classes.article} ${hasAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-100%]'}`}>
        <h1 className={classes.title}>SKILLS</h1>
        <h3 className={classes.subtitle}>Here are some of my skills on which I have been working on</h3>
        <div className={`${classes.skillsContainer} ${isSmallScreen ? classes.scrollContainer : ''}`}>
          <div className={classes.skillCard}>
            <h1 className={classes.cardTitle}>Front-End</h1>
            <div className={classes.cardContainer}>
              <span className={classes.card}>
                <img src="" alt="" className="mr-1" />
                JavaScript
              </span>
              <span className={classes.card}>
                <img src="" alt="" className="mr-1" />
                HTML
              </span>
              <span className={classes.card}>
                <img src="" alt="" className="mr-1" />
                CSS
              </span>
              <span className={classes.card}>
                <img src="" alt="" className="mr-1" />
                React
              </span>
              <span className={classes.card}>
                <img src="" alt="" className="mr-1" />
                Redux
              </span>
            </div>
          </div>
          <div className={classes.skillCard}>
            <h1 className={classes.cardTitle}>Back-End</h1>
            <div className={classes.cardContainer}>
              <span className={classes.card}>
                <img src="" alt="" className="mr-1" />
                Node.js
              </span>
              <span className={classes.card}>
                <img src="" alt="" className="mr-1" />
                PHP
              </span>
              <span className={classes.card}>
                <img src="" alt="" className="mr-1" />
                Java Servlets
              </span>
              <span className={classes.card}>
                <img src="" alt="" className="mr-1" />
                Spring
              </span>
              <span className={classes.card}>
                <img src="" alt="" className="mr-1" />
                Spring Boot
              </span>
              <span className={classes.card}>
                <img src="" alt="" className="mr-1" />
                ASP.NET
              </span>
            </div>
          </div>
          <div className={classes.skillCard}>
            <h1 className={classes.cardTitle}>Others</h1>
            <div className={classes.cardContainer}>
              <span className={classes.card}>
                <img src="" alt="" className="mr-1" />
                Docker
              </span>
              <span className={classes.card}>
                <img src="" alt="" className="mr-1" />
                Git
              </span>
              <span className={classes.card}>
                <img src="" alt="" className="mr-1" />
                Kubernetes
              </span>
              <span className={classes.card}>
                <img src="" alt="" className="mr-1" />
                Selenium
              </span>
              <span className={classes.card}>
                <img src="" alt="" className="mr-1" />
                Jenkins
              </span>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

// Debounce function
const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

export default Skills;
