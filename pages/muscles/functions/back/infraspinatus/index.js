import Content from '@/components/Content'
import {BackUpperBodySVG, FrontUpperBodySVG} from '@/components/BodySVG';
import ContentPage from '@/components/ContentPage';
import { useRouter } from 'next/router';


export default function TrapsFunction({}) {
    const router = useRouter();

    const content = (
        <div className="w-full max-w-5xl flex-col">
            <Content
                id={"location"}
                title="Location"
                content={"The infraspinatus muscle is situated on the posterior side of the shoulder blade, specifically on its **external surface**. It occupies the region below the spine of the scapula and extends from the medial border of the scapula to the greater tubercle of the humerus. When viewing the back of the shoulder, the infraspinatus can be seen as part of the musculature that contributes to the rounded appearance of the shoulder."}
            ></Content>

            <div className={"p-8 flex justify-around items-center"}>
                <FrontUpperBodySVG highlighted="infraspinatus"/>
                <BackUpperBodySVG highlighted="infraspinatus"/>
            </div>
            <Content
                title="Infraspinatus"
                id={"infraspinatus"}
                content={"The infraspinatus, as part of the [/muscles/functions/back/rotator-cuff,rotator cuff] muscles, performs several important functions in the shoulder joint. Its primary function is to facilitate shoulder external rotation. When the infraspinatus **contracts**, it works together with the [/muscles/functions/back/teres,teres minor] muscle to rotate the upper arm bone outward, away from the body. This action is involved in various daily activities and sports movements such as throwing, swinging, and reaching motions. The infraspinatus provides stability and control during external rotation, allowing for precise and coordinated movements of the shoulder joint.-.-Another function of the infraspinatus is to assist in **shoulder abduction**. Shoulder abduction refers to lifting the arm sideways away from the body. The infraspinatus, along with the other [/muscles/functions/back/rotator-cuff,rotator cuff] muscles, helps stabilize the shoulder joint during this movement, preventing excessive upward displacement of the humeral head. This function is particularly important in maintaining proper alignment and smooth movement of the shoulder during activities like lifting objects overhead or performing lateral raises.-.-Additionally, the infraspinatus contributes to **shoulder joint stability** by working in conjunction with the other [/muscles/functions/back/rotator-cuff,rotator cuff] muscles. It helps keep the humeral head centered within the glenoid cavity of the scapula, preventing excessive translation or dislocation of the joint. The infraspinatus provides essential support and control during arm movements, especially in actions that involve forceful or repetitive motions. Strengthening and conditioning the infraspinatus through targeted exercises can improve shoulder stability, enhance functional movement, and reduce the risk of [/muscles/functions/back/rotator-cuff,rotator cuff] injuries.-.-In summary, the infraspinatus plays a crucial role in shoulder external rotation, shoulder abduction, and shoulder joint stability. It works together with other [/muscles/functions/back/rotator-cuff,rotator cuff] muscles to provide coordinated movement, control, and support for the shoulder joint. Strengthening the infraspinatus through appropriate exercises can enhance shoulder function, improve performance in sports and daily activities, and reduce the risk of shoulder injuries."}
            ></Content>
        </div>
    )

    return (
        <ContentPage location={"Muscles • Functions • Back"} title={"Infraspinatus"} description={<span>The infraspinatus is one of the four muscles that make up the [/muscles/functions/back/rotator-cuff,rotator cuff] in the shoulder. It is located on the **posterior** (back) aspect of the shoulder blade (scapula) and attaches to the greater tubercle of the humerus (upper arm bone). The infraspinatus works together with the other [/muscles/functions/back/rotator-cuff,rotator cuff] muscles to stabilize and control the movement of the shoulder joint.</span>} content={content} currentTopic={"Muscles-Functions-Back-Infraspinatus"}></ContentPage>
    )
}