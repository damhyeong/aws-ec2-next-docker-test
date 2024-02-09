import {useParams} from "next/navigation";

interface ParamFace{
    params : {
        level : string;
    }
}

const LevelListPage = ({params} : ParamFace) => {


    return (
        <div>
            LevelListPage, param : level is , {params.level}
        </div>
    )
}
export default LevelListPage;