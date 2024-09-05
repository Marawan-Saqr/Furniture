import "./InteriorDesign.css";
import imageOne from "./modern-design1.jpg";


const InteriorDesign = () => {
  return (
    <div className="Interior-design mt-5">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-12 col-lg-5">
            <div className="left">
              <img src={imageOne} alt="modern-image" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-12 col-lg-5">
            <div className="right">
              <div className="content">
                <h2>We Help You Make Modern Interior <span style={{color: '#f9bf29'}}>Design</span></h2>
                <p>
                  Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                  odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
                  Aliquam vulputate velit imperdiet dolor tempor tristique.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada
                </p>
                <div className="bullets d-flex align-items-center">
                  <div className="left-bullet">
                    <ul>
                      <li>Donec vitae odio quis nisl dapibus malesuada</li>
                      <li>Donec vitae odio quis nisl dapibus malesuada</li>
                    </ul>
                  </div>
                  <div className="right-bullet">
                    <ul>
                      <li>Donec vitae odio quis nisl dapibus malesuada</li>
                      <li>Donec vitae odio quis nisl dapibus malesuada</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteriorDesign;
