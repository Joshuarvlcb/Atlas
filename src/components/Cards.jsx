import CardItem from './CardItem'


const Cards = ({data,clicked}) => {

    return (
        <>
{
    data.map((curr,i) => {
        return (
            <CardItem key = {i} data = {curr}  clicked = {clicked}/>
        )
    })
    }</>
    )
}
export default Cards