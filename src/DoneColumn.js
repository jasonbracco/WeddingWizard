import {useState} from 'react';
import Card from "./Card";

function DoneColumn(props) {

  const [cards, setCards] = useState(props.cards)

  return (
    <div className="column-content">
      <div className="scrollable-content">
        <div className="card">
          <Card />
        </div>
        <div className="card">
          <Card />
        </div>
        <div className="card">
          <Card />
        </div>
        <div className="card">
          <Card />
        </div>
        <div className="card">
          <Card />
        </div>
        <div className="card">
          <Card />
        </div>
        <div className="card">
          <Card />
        </div>
        <div className="card">
          <Card />
        </div>
        <div className="card">
          <Card />
        </div>
        <div className="card">
          <Card />
        </div>
        <div className="card">
          <Card />
        </div>
        <div className="card">
          <Card />
        </div>
        <div className="card">
          <Card />
        </div>
        <div className="card">
          <Card />
        </div>
        <div className="card">
          <Card />
        </div>
        <div className="card">
          <Card />
        </div>
        <div className="card">
          <Card />
        </div>
        <div className="card">
          <Card />
        </div>
      </div>
      <div className="column-price">Total Price in this column is: $0.00</div>
    </div>
  );
}

export default DoneColumn;
