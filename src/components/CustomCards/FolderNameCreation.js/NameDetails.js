import React from 'react';
import { Link, useParams } from 'react-router-dom';
import CardCreationForm from '../../Final/CardCreationForm';

function NameDetails() {
  const { name } = useParams();
  console.log(name);

  return (
    <div>
      <Link to="/folder">Back to list</Link>
      <CardCreationForm currentFolder={name} />
    </div>
  );
}

export default NameDetails;
