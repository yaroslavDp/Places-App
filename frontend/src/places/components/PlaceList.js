import React from "react";
import Card from "../../shared/components/UI/Card";
import "./PlaceList.css";
import PlaceItem from "./PlaceItem";
import Button from "../../shared/components/FormElements/Button";
const PlaceList = ({ items, onDeletePlace }) => {
  if (!items || items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No places found! Maybe create one?</h2>
          <Button to='/places/new'>Share place</Button>
        </Card>
      </div>
    );
  }
  return (
    <ul className="place-list">
      {items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.image}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
          onDelete={onDeletePlace}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
