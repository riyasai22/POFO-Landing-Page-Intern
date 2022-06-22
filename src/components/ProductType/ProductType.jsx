import React from "react";
import Image5 from "../../assets/service.jpg";
import LaptopChromebookTwoToneIcon from "@mui/icons-material/LaptopChromebookTwoTone";
import ViewCompactTwoToneIcon from "@mui/icons-material/ViewCompactTwoTone";
import AccountBalanceWalletTwoToneIcon from "@mui/icons-material/AccountBalanceWalletTwoTone";
import CameraAltTwoToneIcon from "@mui/icons-material/CameraAltTwoTone";
import "./ProductType.css";
const ProductType = () => {
  return (
    <div className="product-type-container container">
      <div className="product-type-card">
        <h2 className="header">
          We are delivering beautiful digital products for you
        </h2>
        <div className="product-type-wrapper">
          <div className="product-type-sec">
            <LaptopChromebookTwoToneIcon />
            <div className="product-type-desc">
              <h3 className="subheader"> Powerful Website Builder</h3>
              <p className="desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since.
              </p>
            </div>
          </div>
          <div className="product-type-sec">
            <ViewCompactTwoToneIcon />
            <div className="product-type-desc">
              <h3 className="subheader"> Different Layout Type</h3>
              <p className="desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since.
              </p>
            </div>
          </div>
          <div className="product-type-sec">
            <AccountBalanceWalletTwoToneIcon />
            <div className="product-type-desc">
              <h3 className="subheader"> True Responsiveness</h3>
              <p className="desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since.
              </p>
            </div>
          </div>
          <div className="product-type-sec">
            <CameraAltTwoToneIcon />
            <div className="product-type-desc">
              <h3 className="subheader"> Elegant / Unique design</h3>
              <p className="desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="product-type-card background product-type-pic"
        style={{ backgroundImage: `url(${Image5})` }}
      ></div>
    </div>
  );
};

export default ProductType;
