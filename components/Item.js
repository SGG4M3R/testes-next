import styles from './Item.module.css'

function Item(props) {
    const percent = props.percent
    const title = props.title
    return (
        <li className="list-group-item fw-bold transparent text-light">
            <div className="d-flex w-100 justify-content-between">
                <h6 className="mb-1">{title}</h6>
                <small>{`${percent}%`}</small>
            </div>
            <div className="progress" style={{height: 5 + 'px'}}>
                <div className={`progress-bar ${styles.colorBar}`} role="progressbar" style={{width: percent + '%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </li>
    )
}

export default Item;