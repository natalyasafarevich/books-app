import {useSelector} from "react-redux";

export const withFavorites = (Component) => (props) => {

    const favorives = useSelector((state) => {
        const {favorite} = state;
  
        return favorite.favorites;
    });
  
    return (<Component onClick={favorives}
        {...props}/>)
}
