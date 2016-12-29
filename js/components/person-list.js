import React from 'react';
import Person from './person';

export default function PersonList() {
  const people = [];
  for (var i = 0; i < 5; i++) {
    people.push(<Person />);
  }
  return (
    <div className="person-list">
      {people}
    </div>
  );
}