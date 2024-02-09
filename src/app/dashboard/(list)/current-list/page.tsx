'use client'

import {useEffect, useState} from "react";

interface TFace {
    code : number;
    message : string;
}

interface LFace{
    id : number;
    title : string;
    level : number;
}

const CurrentList = () => {
    const [data, setData] = useState<TFace>();
    const [lists, setLists] = useState<LFace[]>();

    useEffect(() => {
        fetch("/dashboard/current-list/api")
            .then(response => response.json())
            .then(data => setLists(data.lists));
    }, []);

    useEffect(() => {
        fetch("/dashboard/current-list/api", {method : "post", body : JSON.stringify({test : "asdf"})})
            .then(response => response.json())
            .then(data => {console.log(data)});
    }, []);

    return (
        <div>
            {lists && <div>
                {lists.map((list : LFace, index) => (<div key={index}>{list.id} {list.title} {list.level}</div>))}
            </div>}
        </div>
    )
}
export default CurrentList;