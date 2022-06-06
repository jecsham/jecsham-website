import Image from "next/image";
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
      <div className="project-image">
        <Image
          draggable={false}
          className="project-image"
          width="80px"
          height="80px"
          layout="fixed"
          src={imageUrl}
          alt="image"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mMsjgMAAUoA0y8aVxAAAAAASUVORK5CYII="
        />
      </div>
      <div className="project-description-container">
        <div>
          <strong>
            <a
              className="project-name"
              target="_blank"
              rel="noopener noreferrer"
              href={projectUrl}
            >
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
          <div key={i} className="badge">
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
