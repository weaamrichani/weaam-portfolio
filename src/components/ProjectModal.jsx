import { useEffect, useState } from "react";

const ProjectModal = ({ project, onClose }) => {
  const [activeImage, setActiveImage] = useState(0);

  // Reset to the first screenshot whenever a different project is opened.
  // Adjusting state during render (rather than in an effect) avoids an
  // extra render pass — see https://react.dev/learn/you-might-not-need-an-effect
  const [renderedSlug, setRenderedSlug] = useState(project?.slug);
  if (project && project.slug !== renderedSlug) {
    setRenderedSlug(project.slug);
    setActiveImage(0);
  }

  // Close on Escape, and lock page scroll while the modal is open
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [project, onClose]);

  if (!project) return null;

  const hasMultipleImages = project.screenshots.length > 1;

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div
        className="project-modal card-border"
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="project-modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>

        <div className="project-modal-media">
          {project.video ? (
            <video
              src={project.video}
              controls
              loop
              autoPlay
              className="project-modal-video
              "
            />
          ) : (
            <>
              <img
                src={project.screenshots[activeImage]}
                alt={`${project.title} screenshot`}
              />
              {hasMultipleImages && (
                <>
                  <button
                    className="project-modal-nav prev"
                    onClick={() =>
                      setActiveImage(
                        (i) =>
                          (i - 1 + project.screenshots.length) %
                          project.screenshots.length
                      )
                    }
                    aria-label="Previous screenshot"
                  >
                    ‹
                  </button>
                  <button
                    className="project-modal-nav next"
                    onClick={() =>
                      setActiveImage(
                        (i) => (i + 1) % project.screenshots.length
                      )
                    }
                    aria-label="Next screenshot"
                  >
                    ›
                  </button>
                </>
              )}
            </>
          )}
        </div>

        <div className="project-modal-body">
          <h3>{project.title}</h3>
          <p className="project-modal-tagline">{project.tagline}</p>

          <div className="badges">
            {project.techStack.map((tech) => (
              <span className="badge" key={tech}>
                {tech}
              </span>
            ))}
          </div>

          <p className="project-modal-description">{project.description}</p>

          <ul className="project-modal-features">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          <div className="project-modal-actions">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="project-modal-btn"
            >
              View Source (GitHub)
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="project-modal-btn primary"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
