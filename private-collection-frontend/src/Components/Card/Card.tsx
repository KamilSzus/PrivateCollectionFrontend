import "./Card.css"

interface CardProps {
    name?: string
    description?: string
}

const Card: React.FC<CardProps> = (props: CardProps): JSX.Element => {
    return (
        <div className="card">
            <img
                src="https://cf.geekdo-images.com/JUAUWaVUzeBgzirhZNmHHw__imagepage/img/ZF-dta5ffawuKAkAt2LB-QTIv5M=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4254509.jpg"
                alt="Image"
            />
            <div className="details">
                <h2>{props.name}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Card