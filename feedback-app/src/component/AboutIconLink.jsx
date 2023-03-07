import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function AboutIconLink() {
  return (
    <div className="about-link">
      <Link
        to={{
          pathname: "/about",
          search: "?sort=name",
          hash: "#hello",
        }}
      >
        <FontAwesomeIcon icon={faQuestion} size="40" />
        <i class="fa fa-question-circle" aria-hidden="true"></i>
      </Link>
    </div>
  );
}

export default AboutIconLink;
