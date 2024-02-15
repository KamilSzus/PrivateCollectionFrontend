import Card from "../Card/Card"

interface CardListProps { }

const CardList: React.FC<CardListProps> = (props: CardListProps): JSX.Element => {
    return (
        <div>
            <Card description='Root is a game of adventure and war in which 2 to 4 (1 to 6 with the "Riverfolk" expansion) players battle for control of a vast wilderness. Like Vast: The Crystal Caverns, each player in Root has unique capabilities and a different victory condition. Now, with the aid of gorgeous, multi-use cards, a truly asymmetric design has never been more accessible.' name='Root' />
            <Card description='Root is a game of adventure and war in which 2 to 4 (1 to 6 with the "Riverfolk" expansion) players battle for control of a vast wilderness. Like Vast: The Crystal Caverns, each player in Root has unique capabilities and a different victory condition. Now, with the aid of gorgeous, multi-use cards, a truly asymmetric design has never been more accessible.' name='Root' />
            <Card description='Root is a game of adventure and war in which 2 to 4 (1 to 6 with the "Riverfolk" expansion) players battle for control of a vast wilderness. Like Vast: The Crystal Caverns, each player in Root has unique capabilities and a different victory condition. Now, with the aid of gorgeous, multi-use cards, a truly asymmetric design has never been more accessible.' name='Root' />
        </div>
    )
}

export default CardList