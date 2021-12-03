import Item from './Item'
import styles from './Skills.module.css'

function Skills() {
    return (
        <div className="container mt-5 mb-5">
            <div className="row justify-content-center">
                <div className="col-6">
                  <h1 className="text-center">Habilidades</h1>
                    <ul className="list-group">
                        <Item title="HTML" percent="100"/>
                        <Item title="CSS" percent="70"/>
                        <Item title="JavaScript" percent="80"/>
                        <Item title="Node.js" percent="60"/>
                        <Item title="React" percent="50"/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills