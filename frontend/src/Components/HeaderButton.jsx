import { useRecoilState } from "recoil"
import { ContentAtom } from "../Atoms/ContentAtom"


export default function HeaderButton(props)
{

    const [contentpath, setContentpath] = useRecoilState(ContentAtom)

    return(<div className="hover:text-purple-300 transition duration-300">
        <button onClick={()=>{
            setContentpath(props.path)
        }}>
            {props.name}
        </button>
    </div>)
}