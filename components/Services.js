import Card from "./Card";

function Services() {
    return (
        <div className="bg-dark">
            <div className="container mt-5 mb-5 pt-5 pb-5">
                <div className="row justify-content-center">
                    <div className="col-6">
                    <h1 className="text-center">Serviços</h1>
                    <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </div>
    )
}

export default Services;