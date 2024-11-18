import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1 text-center">
              <div className="contant_box_404 gap-5">
                <span className="text-[#111111] font-bold text-[16px]">404</span>
                <span className="text-[#111111] font-normal text-[14px]">Page not found</span>
                <div className="link_404" onClick={() => navigate(`/`)}>Home
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
