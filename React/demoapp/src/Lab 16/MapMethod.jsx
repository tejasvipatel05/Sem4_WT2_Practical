const arr = ["Apple","Mango","Strawberry"]

function MapMethod(){        
        return (
        <div>
            {arr.map((Ele,index)=>{
                return <h1>{Ele} - {index}</h1>
            })}
        </div>
        )
}

export default MapMethod;