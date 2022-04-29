import Card from "../card/card.component";
import './card-list.styles.css'
const CardList=(props)=> {
    
    
        const {monsters} =props;
        return( 
            <div className="card-list">
                
                {monsters.map((monster)=>{
                   const {id,email,name}=monster
                    return <Card key={id} monsterId={id} MonsterEmail={email} MonsterName={name}/>
                })}
            </div>
        )
    }


export default CardList;