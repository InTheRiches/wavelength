import Content from '@/components/Content'
import ContentPage from '@/components/ContentPage';
import {
    BackFullBodySVG,
    BackUpperBodySVG,
    EntireBodyMap,
    FrontFullBodySVG,
    FrontUpperBodySVG
} from '@/components/BodySVG';
import {scroll} from "@/components/ContentScroll";
import React from "react";


export default function QuadsFunction({}) {
    const content = (
        <div className="flex-col">
            <Content
                id={"location"}
                title="Location"
                content={"The hip adductors are a group of muscles located on the inner side of the thigh. They run along the **medial** (inner) aspect of the femur bone, connecting the pelvis to the inner part of the thigh. These muscles originate from the pubic bone and insert onto various points along the femur bone, forming a **strong muscular chain** on the inner side of the hip and thigh."}
            ></Content>
            <EntireBodyMap highlighted={"adductors"}></EntireBodyMap>
            <Content
                title="Hip Adductors"
                id={"hip-adductors"}
                content={"The hip adductors serve several important purposes in the body related to lower body movement, stability, and overall functional strength. Here are some key aspects of their function and purpose:-.-Firstly, the hip adductors are responsible for **hip adduction** (obviously), which involves bringing the leg inward toward the **midline** of the body. This movement is essential for activities such as walking, running, and side-to-side motions. The adductors work in coordination with other muscles to control the inward movement of the leg, providing stability and balance during these activities. They help maintain proper alignment of the lower body and ensure smooth and controlled movement.-.-Secondly, the hip adductors contribute to **pelvic stability and control**. These muscles play a crucial role in stabilizing the pelvis during weight-bearing activities and movements like squats. They work together with the muscles of the core ([/muscles/functions/core/abs,abs], [/muscles/functions/core/obliques,obliques] and the [/muscles/functions/core/lower-back,lower back]) and [/muscles/functions/legs/glutes,glutes] to maintain proper **pelvic alignment** and prevent excessive tilting or shifting. Strong and well-conditioned hip adductors can enhance overall lower body stability, improve posture, and reduce the risk of injuries related to pelvic instability.-.-In summary, the hip adductors play a vital role in hip adduction, pelvic stability, and force generation in the lower body. They contribute to controlled movement, stability, and balance during activities such as walking, running, and side-to-side motions. Strengthening and conditioning the hip adductors can improve lower body stability, enhance functional performance, and reduce the risk of injuries associated with pelvic instability or imbalances."}
            ></Content>
        </div>
    )

    return (
        <ContentPage title="Hip Adductor Muscles" description={<span>The hip adductors are a group of muscles located on the inner side of the thigh responsible for hip adduction, or bringing the leg inward toward the midline of the body. They play a key role in stabilizing the pelvis, controlling movement, and maintaining balance during activities such as walking, running, and side-to-side motions.</span>} content={content}></ContentPage>
    )
}