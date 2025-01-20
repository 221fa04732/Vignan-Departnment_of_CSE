import { useNavigate } from "react-router-dom"

export default function HeaderButton(props)
{

    const navigate = useNavigate();

    return(<div className="hover:text-purple-300 transition duration-300">
        <button onClick={()=>{
            navigate(props.path)
        }}>
            {props.name}
        </button>
    </div>)
}