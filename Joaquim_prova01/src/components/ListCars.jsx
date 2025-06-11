import { carros_lista } from "./src/components/dados_carros"
import Car from "./Car"
export default function ListCars(){
    return(
        <div className="listacarros">
        {carros_lista.map(carro => (
            <div key={carro.id}>
                <Car carro={carro}></Car>
            </div>
        ))}
        </div>
    )
}