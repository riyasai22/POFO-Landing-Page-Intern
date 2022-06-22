import React from 'react';

import "./Function.css";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import ArticleTwoToneIcon from "@mui/icons-material/ArticleTwoTone";
import ContentCutTwoToneIcon from "@mui/icons-material/ContentCutTwoTone";
import PeopleAltTwoToneIcon from "@mui/icons-material/PeopleAltTwoTone";

const Function = () => {
  return (
    <div className="container function-container">
      <h2 className="function-header header">
        Beautiful and easy to use UI, professional animations and drag & drop
        feature
      </h2>
      <p className="function-desc desc">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <div className="function-card-list">
        <div className="function-card">
          <div className="function-icon">
            <EditTwoToneIcon />
          </div>

          <h3 className="subheader">Pixel Perfect Design</h3>
          <p className="desc">
            Lorem Ipsum is simply text of the printing and typesetting industry.
            Lorem Ipsum has been standard dummy.
          </p>
        </div>
        <div className="function-card">
          <div className="function-icon">
            <ArticleTwoToneIcon />
          </div>
          <h3 className="subheader">Pixel Perfect Design</h3>
          <p className="desc">
            Lorem Ipsum is simply text of the printing and typesetting industry.
            Lorem Ipsum has been standard dummy.
          </p>
        </div>
        <div className="function-card">
          <div className="function-icon">
            <ContentCutTwoToneIcon />
          </div>
          <h3 className="subheader">Pixel Perfect Design</h3>
          <p className="desc">
            Lorem Ipsum is simply text of the printing and typesetting industry.
            Lorem Ipsum has been standard dummy.
          </p>
        </div>
        <div className="function-card">
          <div className="function-icon">
            <PeopleAltTwoToneIcon />
          </div>
          <h3 className="subheader">Pixel Perfect Design</h3>
          <p className="desc">
            Lorem Ipsum is simply text of the printing and typesetting industry.
            Lorem Ipsum has been standard dummy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Function;
