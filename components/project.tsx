interface Props {
  title: string;
  description: string;
  projectUrl: string;
  sourceCodeUrl?: string;
  imageUrl: string;
  badges: string[];
}

const Project = ({
  title,
  description,
  sourceCodeUrl,
  projectUrl,
  imageUrl,
  badges,
}: Props) => {
  return (
    <div className="project-container">
      <img draggable={false} className="project-image" src={imageUrl} alt="image" />
      <div className="project-description-container">
        <div>
          <strong>
            <a className="project-name" href={projectUrl}>
              {title}
            </a>
          </strong>{" "}
          {sourceCodeUrl && (
            <small>
              [
              <a href={sourceCodeUrl} target="_blank" rel="noopener noreferrer">
                Source code
              </a>
              ]
            </small>
          )}
        </div>
        <p className="project-description">{description}</p>
        {badges.map((tag, i) => (
          <div key={i} className="badge">{tag}</div>
        ))}
      </div>
    </div>
  );
};

export default Project;
