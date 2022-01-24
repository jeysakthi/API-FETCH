import react from 'react';
import '../../App.css'
const CardItem = (props) => {
    return(
        <div className="card example-1 scrollbar-ripe-malinka " className="cardbackground" >
                 < div className='col-sm-12'>
                 <div className="card">
                     <div className="card-body">
                         <h5 className="card-title">{props.id}</h5>
                         <p className="card-text">{props.title}</p>
                         <p className="card-text">{props.body}</p>
                    </div>
                  </div>
                </ div>
        </div>
    )
}

export default CardItem;