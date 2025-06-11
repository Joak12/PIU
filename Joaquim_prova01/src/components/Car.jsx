export default function Car({carro}){
    return(
        <div className="carro">
            <h1>{carro.modelo} : {carro.ano}</h1>
        </div>
    )
}