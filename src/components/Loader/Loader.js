import { BiDotsHorizontalRounded } from "react-icons/bi";
import { Loading } from './Loader.styled';
export const Loader = () => {
    
    return (
        <Loading>
           <p> Зараз все буде</p>
            <BiDotsHorizontalRounded size='32'/>
        </Loading>
    )
}