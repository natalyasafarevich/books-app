import {useSelector} from "react-redux";


export const withFavorites = (Component) => (props) => {

    const favorives = useSelector((state) => {
        const {favoritesReduser} = state;
        return favoritesReduser.favorites;
    });
    console.log(favorives)
    return (<Component onClick={favorives}
        {...props}/>)
}
