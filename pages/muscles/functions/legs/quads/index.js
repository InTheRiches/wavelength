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
                content={"The quadriceps muscles are located in the **anterior** (front) part of the thigh. They span the length of the femur bone and are positioned between the hip joint and the knee joint. The quadriceps are visible as a prominent muscle group on the front of the thigh, extending from the **pelvis** to the **knee**."}
            ></Content>
            <EntireBodyMap highlighted={"quads"}></EntireBodyMap>
            <Content
                title="Quadriceps"
                id={"quadriceps"}
                content={"The quadriceps, often referred to as the quads, are a group of muscles located at the front of the thigh. They serve several important purposes related to lower body movement, stability, and overall functional strength. Here are some key aspects of its function and purpose:-.-Firstly, the primary purpose of the quadriceps is **knee extension**. The four muscles that make up the quadriceps - the **rectus femoris, vastus lateralis, vastus medialis, and vastus intermedius** - work together to **straighten** the knee joint. This action is essential for movements such as walking, running, jumping, and kicking. The quadriceps generate the force needed to extend the knee, allowing individuals to perform these activities with strength and control.-.-Secondly, the quadriceps contribute to **lower body stability** and **balance**. These muscles provide support to the knee joint and help maintain proper alignment during weight-bearing activities. By strengthening the quadriceps, individuals can improve stability and reduce the risk of knee injuries. Well-developed quadriceps also play a role in stabilizing the hip joint and supporting overall lower body function.-.-Additionally, the quadriceps contribute to overall functional strength and endurance. They are among the **largest and strongest** muscles in the body. Strong quadriceps provide the force required for activities that involve pushing, lifting, or resisting against resistance. Whether it's climbing stairs, squatting, or participating in sports like cycling or weightlifting, the quadriceps play a vital role in generating endurance and force production for lower body movements.-.-In summary, the quadriceps have several important purposes related to lower body movement, stability, and functional strength. They are responsible for knee extension, provide stability to the knee joint, and contribute to overall lower body strength and endurance. Strengthening and conditioning the quadriceps can enhance performance in various physical activities, improve lower body stability, and support overall functional movement."}
            ></Content>
        </div>
    )

    return (
        <ContentPage title="Quadriceps (Quads)" description={<span>The quadriceps, also known as the quadriceps femoris, is a group of four muscles located in the front of the thigh. These muscles include the rectus femoris, vastus lateralis, vastus medialis, and vastus intermedius. The quadriceps is responsible for extending the knee joint and is actively involved in various movements such as walking, running, and jumping.</span>} content={content}></ContentPage>
    )
}