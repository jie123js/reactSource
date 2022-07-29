import React from 'react';
import { getMoment } from '@/utils/lazy';
function UserInfo(props){
    const [createdAt,setCreatedAt] = React.useState(props.user.createdAt);
    const changeTime = async function(){
        const moment = await getMoment();
        setCreatedAt(moment.fromNow());
    }
    return (
        <div>
            <p>name:{props.user.name}</p>
            <p>createdAt:{createdAt}</p>
            <button onClick={changeTime}>切换为相对时间</button>
        </div>
    )
}
export default UserInfo;