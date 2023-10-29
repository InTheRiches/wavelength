import Content from '@/components/Content'
import {BackUpperBodySVG, EntireBodyMap, FrontUpperBodySVG} from '@/components/BodySVG';
import ContentPage from '@/components/ContentPage';
import { useRouter } from 'next/router';


export default function TrapsFunction({}) {
    const router = useRouter();

    const content = (
        <div className="w-full max-w-5xl flex-col">
            <Content
                id={"location"}
                title="Location"
                content={"The Trapezius is a large muscle located in the upper back and neck region. It is a triangular-shaped muscle that is divided into three heads: the upper, middle, and lower trapezius."}
            ></Content>
            <EntireBodyMap highlighted={"traps"} backDefault={true}></EntireBodyMap>
            <Content
                title="Trapezius"
                id={"trapezius"}
                content={"The trapezius muscle has partial control over the shoulder blade, and assists in a lot of the basic shoulder blade movements. It plays a crucial role in various movements and postures of the upper body. When both sides of the trapezius contract simultaneously, it helps in elevating and retracting the shoulders, allowing for movements such as shrugging and maintaining an upright posture. Additionally, when one side contracts while the other side relaxes, the trapezius muscle assists in rotating and tilting the head and neck. Overall, the trapezius muscle contributes to the overall stability and mobility of the upper back and neck area. As mentioned previously, it has 3 heads, the upper, middle, and lower.-.-**Upper (superior) Trapezius:** This head helps to **elevate and rotate** the shoulder blades upward. It is responsible for movements such as **shrugging** the shoulders and reaching the arms overhead. The Upper trapezius head also helps to support the neck and head, particularly during movements that involve looking upward.-.-**Middle (transverse) Trapezius:** This head helps to **retract** the shoulder blades or pull them back. This head is important for maintaining **good posture** and is activated when we sit up straight or pull our shoulders back. It is also involved in movements such as **rowing or pulling** exercises.-.-**Lower (inferior) Trapezius:** This head helps to **depress** the shoulder blades or pull them downward. This head is important for stabilizing the shoulder joint during arm movements and is involved in movements such as pushing or pressing exercises.-.-Overall, the trapezius muscle and its heads plays an important role in a wide range of upper body movements. Whether you're lifting weights, reaching for something overhead, or simply maintaining good posture, the different parts of the Trapezius muscle work together to keep your upper back and neck strong and mobile."}
            ></Content>
        </div>
    )

    return (
        <ContentPage location={"Muscles • Functions • Back"} title={"Trapezius (Traps)"} description={<span>The trapezius muscle, located in the upper back and neck, plays a fundamental role in stabilizing and moving the shoulder girdle. It aids in elevating, retracting, and depressing the shoulders, allowing for movements like shrugging and maintaining posture. Additionally, it assists in rotating and tilting the head and neck when one side contracts while the other side relaxes. Overall, the trapezius muscle contributes to the overall stability, mobility, and proper functioning of the upper back, shoulder, and neck regions.</span>} content={content} currentTopic={"Muscles-Functions-Back-Trapezius"}></ContentPage>
    )
}