function Card(props) {

    if (!props.card) {
        return null;
      }

    console.log(props.card)


    return (
        <div className="card-container">
            <div className="card-title"><strong>{props.card.title}</strong></div>
            <ul className="card-content">
                <li>Update: {props.card.update_text}</li>
                <li>Cost: ${props.card.cost_associated}</li>
                <li>Due By Date: {props.card.due_date}</li>
                <li>Category: {props.card.category}</li>
                <li>Payment Status: {props.card.payment_status}</li>
                <li>Owner: {props.card.owner}</li>
            </ul>
        </div>
    )
}

export default Card