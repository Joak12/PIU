import { carros_lista } from "./src/components/dados_carros"
export default function FilterCar(){
    const carrosvermelhos = carros_lista.filter(carro => carro.cor === "vermelho")

    return(
        <div className="carrosverm">
            {carrosvermelhos.map(carrovermelho => (
                <h1>{carrovermelho.modelo}</h1>
            ))}
        </div>
    )
}