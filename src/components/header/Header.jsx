import { useDispatch, useSelector } from "react-redux";
import { increment,decrement } from "../../redux/counter";

export default function Header() {
    const { count } = useSelector((state) => state.counter);
    const dispatch = useDispatch();
     
    return (<div className="header">
        <span className="projectTitle">The Appx Project - {count}</span>
        <span> | Device - <span className="devices"><i className="bi bi-laptop" onClick={()=>dispatch(increment())}></i>  <i className="bi bi-tablet" onClick={()=>dispatch(decrement())}></i></span></span>
    </div>);
}