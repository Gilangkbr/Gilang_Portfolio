import CV from "../../assets/mycv.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href="#portfolio" className="btn btn-primary">
        View my work
      </a>
      <a href={CV} download className="btn">
        Download CV
      </a>
    </div>
  );
};

export default CTA;
