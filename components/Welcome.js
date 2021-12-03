import styles from './Welcome.module.css'

function Welcome() {
    return (
        <div className='pt-5 pb-5'>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h1 className={styles.titleWelcome}>Hello, I'm Martin Vorm</h1>
                        <p className={styles.subtitleWelcome}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales consectetur ipsum eget fringilla.</p>
                    </div>
                    <div className="col-6">
                        <img className="img-fluid float-end circle" width="300px" src="https://bestwebcreator.com/martyn/demo/assets/images/my_image2.jpg"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome;