import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Athletics.css";
import { articles } from "./data.js";

const Athletics = () => {
  const { name } = useParams();

  const article = articles.filter((article) => article.title === name);

  console.log(article);

  return (
    <div>
      <div className="center" id="athl">
        <div className="blog-card spring-fever">
          <div className="title-content">
            <h3>{name} Instructions</h3>
          </div>
          <div className="card-info">
            <ul>
              {article[0].description.map((desc) => (
                <li>{desc}</li>
              ))}
            </ul>
            
          </div>
          {article[0].buttons.map((button) => (
              <button id = "button" type="button" className="btn btn-success">
                <a href={button.url} rel="noreferrer" target="_blank">
                  {button.title}
                </a>
              </button>
            ))}
          <div className="gradient-overlay"></div>
          <div className="color-overlay"></div>
        </div>
      </div>
    </div>
  );
};

export default Athletics;
