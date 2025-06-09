import "./Preloader.css";

function Preloader({}) {
  return (
    <div className="preloader">
      <div className="circle-preloader" />
      <p className="preloader__description">Searching for news...</p>
    </div>
  );
}

export default Preloader;
