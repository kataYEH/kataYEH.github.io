import React from 'react'
import "./KnowMeDetail.css"
import InfoBoxWithCopy from './InfoBoxWithCopy';
import InfoBoxWithLink from './InfoBoxWithLink';

const KnowMeDetail = ({ myDeatilInfo }) => {
    const detailInfo = [
        { name: 'Gmail',  color: "#ea4236" ,component: <InfoBoxWithCopy infoValue={"xxszcvfh@gmail.com"}/>},
        { name: 'Linkedin',  color: "#0077b5" ,component:<InfoBoxWithLink infoValue={"https://www.linkedin.com/in/Johnny-Yeh-0a7448281"}/>},
        { name: 'Github',color: "#000000" ,component:<InfoBoxWithLink infoValue={"https://github.com/kataYEH"}/>},
        { name: 'Discord', color: "#5c6af3" ,component:<InfoBoxWithCopy infoValue={".katabeibei"}/>},
        { name: 'Bank104', color: "#ffa74e" ,component:<InfoBoxWithLink infoValue={"https://pda.104.com.tw/profile/share/i7YQ5XfA8tJgKsfCKiGYF7WXkHO54B64"}/>},

    ];
    const matchingDetail = detailInfo.find(info => info.name === myDeatilInfo);
    return (
        <main className='KnowMeDetail'>
            {matchingDetail && (
                matchingDetail.component
            )}
        </main>

    )
}

export default KnowMeDetail