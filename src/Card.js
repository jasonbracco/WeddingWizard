function Card() {

    return (
        <div className="card-container">
            <div className="card-title"><strong>TITLE</strong></div>
            <ul className="card-content">
                <li>Update:</li>
                <li>Cost:</li>
                <li>Due By Date:</li>
                <li>Category:</li>
                <li>Payment Status:</li>
                <li>Owner:</li>
            </ul>
        </div>
    )
}

export default Card