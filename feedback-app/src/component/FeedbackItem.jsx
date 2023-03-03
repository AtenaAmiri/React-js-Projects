import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faEdit } from "@fortawesome/free-solid-svg-icons";
import Card from "./shared/Card";
import propTypes from "prop-types";

function FeedbackItem({ item, handleDelete }) {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FontAwesomeIcon icon={faTimes} color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
      {/* <FontAwesomeIcon icon={faEdit} /> */}
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: propTypes.object.isRequired,
};

export default FeedbackItem;
