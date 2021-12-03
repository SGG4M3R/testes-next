const webIcon = require('../assets/website.svg');
function Card() {
    return (
        <div className="col-3">
            <div className="card bg-secondary text-center" style={{height: 250 + 'px'}}>
                <div className="card-body" style={{marginTop: 10 + 'px'}}>
                    {/* <img className="mb-2 bg-success circle" src={webIcon} width="50px"></img> */}
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                
            </div>
        </div>
    )
}

export default Card;