import Content from '@/components/Content'
import ContentPage from '@/components/ContentPage';
import {BackFullBodySVG, BackUpperBodySVG, FrontFullBodySVG, FrontUpperBodySVG} from '@/components/BodySVG';
import {scroll} from "@/components/ContentScroll";
import React from "react";


export default function QuadsFunction({}) {
    const content = (
        <div className="flex-col">
            <Content
                id={"location"}
                title="Location"
                content={"The gluteal muscles are located in the **posterior** (back) region of the hip and buttocks. The gluteus maximus, the largest of the three gluteal muscles, is positioned superficially and forms the bulk of the buttocks. The gluteus medius and gluteus minimus lie deeper and are situated on the lateral (outer) side of the hip, beneath the gluteus maximus. They play a larger role in the movement of the [/muscles/functions/abductors,abductors] of the hip, and perform different movements than the gluteus maximus."}
            ></Content>
            <div className={"p-8 flex justify-around items-center"}>
                <FrontFullBodySVG highlighted="glutes"/>
                <BackFullBodySVG highlighted="glutes"/>
            </div>
            <Content
                title="Gluteal Muscles"
                id={"gluteal-muscles"}
                content={"The glutes, or gluteal muscles, are a group of muscles located in the **buttocks**. They serve multiple important purposes in lower body movement, stability, and overall functional strength. Here are some key aspects of their function and purpose:-.-Firstly, the glutes are responsible for **hip extension**. The gluteus maximus, the largest muscle in the gluteal group, is primarily involved in extending the hip joint. Hip extension is crucial for activities such as running, climbing stairs, jumping, and standing up from a seated position. The glutes generate the force required to extend the hip, enabling powerful and efficient movements.-.-Secondly, the glutes contribute to **hip abduction** and **external rotation**. The gluteus medius and gluteus minimus, located on the side of the hip, assist in these movements. Hip abduction refers to moving the leg away from the midline of the body, while external rotation involves rotating the leg outward. The glutes play a vital role in stabilizing the pelvis during these movements, supporting proper alignment, and preventing excessive movement at the hip joint.-.-Additionally, the glutes are important for overall lower body stability and posture. They help maintain the **alignment of the pelvis**, spine, and lower extremities. Strong and activated glutes contribute to good posture, reduce the risk of lower back pain and injuries, and enhance overall movement efficiency. They provide stability and support during weight-bearing activities and help distribute forces evenly throughout the lower body.-.-Moreover, the glutes are involved in **endurance generation** and **force production**. As one of the largest and strongest muscle groups in the body, well-developed glutes can generate significant endurance for movements such as jumping, sprinting, and lifting heavy loads. Strengthening the glutes can enhance athletic performance, increase explosive endurance, and improve overall lower body strength.-.-In summary, the glutes have important purposes related to hip extension, hip abduction, external rotation, lower body stability, and endurance generation. They play a significant role in extending the hip, stabilizing the pelvis, supporting proper posture, and generating force during various lower body movements. Strengthening and activating the glutes through targeted exercises can improve overall lower body strength, enhance athletic performance, and contribute to efficient and functional movement."}
            ></Content>
        </div>
    )

    return (
        <ContentPage location="Muscles • Functions • Legs" title="Gluteal Muscles (Glutes)" description={<span className={"text-lg"}>The gluteal muscle refers to a group of muscles located in the buttocks region. It primarily includes the gluteus maximus, gluteus medius, and gluteus minimus. The gluteal muscles are responsible for hip movement, such as hip extension, abduction, and rotation, and they provide stability and support to the pelvis and lower body during various movements and activities.</span>} content={content} currentTopic={"Muscles-Functions-Legs-Glutes"}></ContentPage>
    )
}