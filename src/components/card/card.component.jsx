import './card.styles.css'
    
const Card=(props)=> {
    
        const {monsterId,MonsterEmail,MonsterName}=props
        return(
                <div className="card-container" >
                    <img src={`https://robohash.org/${monsterId}?set=set2&size=180x180`} alt={`Monster ${MonsterName}`}/>
                    <h2>{MonsterName}</h2>
                    <p>{MonsterEmail}</p>
                </div>



        )
    }

export default Card;