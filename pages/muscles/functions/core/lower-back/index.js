import Content from '@/components/Content'
import ContentPage from '@/components/ContentPage';
import {BackUpperBodySVG, EntireBodyMap, FrontUpperBodySVG} from '@/components/BodySVG';
import {scroll} from "@/components/ContentScroll";
import React from "react";

export default function LowerBackFunction({}) {
    const content = (
        <div className="flex-col">
            <Content
                id={"location"}
                title="Location"
                content={"The lower back muscles, or erector spinae muscles, are located on the posterior side of the torso, running parallel to the spine. They extend vertically along the length of the spine, from the base of the skull down to the pelvis. These muscles are positioned on both sides of the spine, forming the prominent muscle mass in the lower back region."}
            ></Content>
            <EntireBodyMap highlighted={"lower-back"} backDefault={true}></EntireBodyMap>
            <Content
                title="Erector Spinae"
                id={"erector-spinae"}
                content={"The lower back muscles, or erector spinae muscles, are located on the **posterior side** of the torso, running parallel to the spine. They extend vertically along the length of the spine, from the base of the **skull** down to the **pelvis**. These muscles are positioned on both sides of the spine, forming the prominent muscle mass in the lower back region.-.-The lower back muscles, also known as the erector spinae muscles, have essential functions in supporting the spine, maintaining posture, and facilitating various movements. Firstly, they play a crucial role in providing stability and support to the spine. These muscles help maintain the natural curvature of the lower back and assist in keeping the spine upright and aligned. They work in coordination with other muscles and structures to distribute the load and forces acting on the spine during activities like lifting, carrying, and bending, thereby helping to prevent injuries and strain.-.-Secondly, the lower back muscles contribute to **trunk extension**. When these muscles contract, they assist in **straightening and extending** the spine. This action is particularly important for movements like standing up from a seated position, arching the back, or performing exercises such as back extensions. The lower back muscles help to generate and control the extension forces required for these movements, promoting stability and mobility in the lower back region.-.-Lastly, the lower back muscles also aid in **lateral flexion** and **rotation** of the trunk. They provide support and control during movements that involve **bending or twisting** the torso to the side. These actions are necessary for activities like reaching for objects, turning the body, or engaging in sports that require rotational movements. The lower back muscles work in coordination with other muscles, such as the [/muscles/functions/core/obliques,obliques], to facilitate these motions while maintaining proper spinal alignment and stability.-.-In summary, the lower back muscles, or erector spinae muscles, have vital functions in supporting the spine, maintaining posture, and facilitating movements. They provide stability to the spine, assist in trunk extension, and contribute to lateral flexion and rotation of the torso. Keeping these muscles strong, flexible, and properly conditioned is crucial for promoting a healthy back, reducing the risk of injury, and enabling efficient movement in daily activities and physical exercise."}
            ></Content>
        </div>
    )

    return (
        <ContentPage location="Muscles • Functions • Core" title="Erector Spinae (Lower Back)" description={<span>The lower back muscles, commonly known as the erector spinae, are a group of muscles that run along the length of the spine on the posterior side. These muscles provide support and stability to the spine, assist in maintaining an upright posture, and play a crucial role in movements such as extension, lateral flexion, and rotation of the trunk.</span>} content={content} currentTopic={"Muscles-Functions-Core-Lower Back"}></ContentPage>
    )
}