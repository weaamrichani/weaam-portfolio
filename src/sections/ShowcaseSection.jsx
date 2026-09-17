import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import projects from "../constants/projects.js";
import ProjectModal from "../components/ProjectModal.jsx";

gsap.registerPlugin(ScrollTrigger);

const [zefet, notify, snakesAndLadders] = projects;

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  const [activeProject, setActiveProject] = useState(null);

  useGSAP(() => {
    const cards = [project1Ref.current, project2Ref.current, project3Ref.current];
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom=-100",
          },
        }
      );
    });
  });

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  // Shared handler so a card opens its modal on click and on Enter/Space
  // (for keyboard users, since these divs act as buttons)
  const openProject = (project) => () => setActiveProject(project);
  const openProjectOnKey = (project) => (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActiveProject(project);
    }
  };

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT */}
          <div
            className="first-project-wrapper"
            ref={project1Ref}
            role="button"
            tabIndex={0}
            onClick={openProject(zefet)}
            onKeyDown={openProjectOnKey(zefet)}
          >
            <div className="image-wrapper">
              <img src={zefet.screenshots[0]} alt={zefet.title} />
              <div className="project-hover-overlay">
                <span>View Project →</span>
              </div>
            </div>

            <div className="text-content">
              <h2>{zefet.title}</h2>
              <div className="badges">
                {zefet.techStack.slice(0, 4).map((tech) => (
                  <span className="badge" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-white-50 md:text-xl">{zefet.tagline}</p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <div
              className="project"
              ref={project3Ref}
              role="button"
              tabIndex={0}
              onClick={openProject(notify)}
              onKeyDown={openProjectOnKey(notify)}
            >
              <div className="image-wrapper bg-[#242424]">
                <img
                  src={notify.screenshots[0]}
                  alt={notify.title}
                  className="!object-contain"
                />
                <div className="project-hover-overlay">
                  <span>View Project →</span>
                </div>
              </div>
              <h2>{notify.title}</h2>
              <div className="badges">
                {notify.techStack.slice(0, 4).map((tech) => (
                  <span className="badge" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div
              className="project"
              ref={project2Ref}
              role="button"
              tabIndex={0}
              onClick={openProject(snakesAndLadders)}
              onKeyDown={openProjectOnKey(snakesAndLadders)}
            >
              <div className="image-wrapper bg-[#ffefdb]">
                <img
                  src={snakesAndLadders.screenshots[0]}
                  alt={snakesAndLadders.title}
                />
                <div className="project-hover-overlay">
                  <span>View Project →</span>
                </div>
              </div>
              <h2>{snakesAndLadders.title}</h2>
              <div className="badges">
                {snakesAndLadders.techStack.slice(0, 4).map((tech) => (
                  <span className="badge" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};

export default ShowcaseSection;
