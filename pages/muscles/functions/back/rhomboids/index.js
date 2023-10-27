import Content from '@/components/Content'
import ContentPage from '@/components/ContentPage';
import {BackUpperBodySVG, FrontUpperBodySVG} from '@/components/BodySVG';


export default function PecsFunction({}) {
    const content = (
        <div className="w-full max-w-5xl flex-col">
            <Content
                id={"location"}
                title="Location"
                content={"The rhomboid muscles, consisting of the rhomboid major and rhomboid minor, are located in the upper back region between the shoulder blades. They span from the medial border of the scapulae (shoulder blades) to the spinous processes of the vertebrae in the thoracic spine (essentially the spine). Positioned deep beneath other muscles, they form a diamond-shaped area in the middle of the back, contributing to the overall musculature and structure of the upper back."}
            ></Content>
            <div className={"p-8 flex justify-around items-center"}>
                <FrontUpperBodySVG highlighted="rhomboids"/>
                <BackUpperBodySVG highlighted="rhomboids"/>
            </div>
            <Content
                title="Rhomboids"
                id={"rhomboids"}
                content={"The rhomboid muscles, specifically the rhomboid major and rhomboid minor, are located in the upper back region between the shoulder blades. These muscles play important roles in stabilizing and controlling the movement of the scapulae (shoulder blades), contributing to various upper body movements and posture.-.-One of the primary functions of the rhomboid muscles is **scapular retraction**. When the rhomboids contract, they pull the shoulder blades together towards the spine. This action is involved in movements like squeezing the shoulder blades together, pulling back the shoulders, and maintaining **good posture**. Scapular retraction is important for maintaining stability in the upper back and facilitating movements that require a stable base, such as rowing exercises or activities that involve pulling motions.-.-The rhomboids also assist in **scapular downward rotation**. This motion involves the shoulder blades tilting downward and inward, towards the spine. When the rhomboid muscles contract, they help control and initiate this downward rotation of the scapulae. Scapular downward rotation is utilized in movements like lowering the arms from an overhead position or during the eccentric phase of certain pulling exercises.-.-Furthermore, the rhomboids contribute to **scapular elevation**. This movement involves lifting the shoulder blades towards the ears. While muscles like the [/muscles/functions/back/traps#trapezius,upper trapezius] primarily drive scapular elevation, the rhomboids assist in this action. Scapular elevation is involved in movements like shrugging the shoulders or raising the arms overhead.-.-In summary, the rhomboid muscles are responsible for **scapular retraction, scapular downward rotation, and assist in scapular elevation**. Their functions are crucial for maintaining proper posture, providing stability to the upper back, and enabling various upper body movements. Strengthening the rhomboids through targeted exercises can improve posture, shoulder stability, and overall upper body strength."}
            ></Content>
        </div>
    )

    return (
        <ContentPage location={"Muscles • Functions • Back"} title={"Rhomboids"} description={<span>The rhomboids are a pair of muscles located in the upper back, between the shoulder blades, underneath the middle trapezius. They are triangular in shape and help to move the shoulder blades and arms.</span>} content={content} currentTopic={"Muscles-Functions-Back-Rhomboids"}></ContentPage>
    )
}