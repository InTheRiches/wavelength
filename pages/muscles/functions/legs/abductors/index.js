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
                content={"The hip abductors are a group of muscles located in the hip region. They are situated on the lateral (outer) aspect of the hip and thigh. Specifically, the primary hip abductor muscles include the gluteus medius, gluteus minimus, and tensor fasciae latae, which span from the pelvis to the femur (thigh bone). These muscles contribute to the overall shape and structure of the hip and play a crucial role in hip stability and movement."}
            ></Content>
            <EntireBodyMap highlighted={"glutes"} backDefault={true}></EntireBodyMap>
            <Content
                title="Hip Adbuctors"
                id={"hip-abductors"}
                content={"The hip abductor muscles serve a crucial purpose in our body's movement and stability. These muscles, primarily the [/muscles/functions/legs/glutes,gluteus medius], [/muscles/functions/legs/glutes,gluteus minimus], and tensor fasciae latae, play a significant role in **abducting** the hip joint, which involves moving the leg **away** from the **midline** of the body. Their main purpose is to provide stability, balance, and control during various activities.-.-One of the primary functions of the hip abductors is to **stabilize the pelvis** during gait and weight-bearing activities. As we walk or run, the hip abductors, particularly the gluteus medius and minimus, work to prevent excessive tilting or dropping of the opposite side of the pelvis. This action helps maintain proper alignment and balance, ensuring efficient and smooth movement of the lower limbs.-.-The hip abductors also contribute to the control of **hip and knee** movements during lateral motions. When we perform movements like side stepping, the hip abductor muscles engage to lift and control the leg's lateral movement. This function is important in activities such as dancing, sports that involve side-to-side movements, and maintaining balance on uneven surfaces.-.-Furthermore, the hip abductor muscles play a role in **stabilizing** the **hip joint** during single-leg support. When standing or performing activities on one leg, such as balancing or kicking, the hip abductors help maintain the level of the pelvis and prevent it from dropping on the unsupported side. This stability is vital in ensuring proper alignment of the body and minimizing the risk of injury.-.-In summary, the hip abductor muscles provide stability, balance, and control during various movements. They **stabilize the pelvis** during gait and weight-bearing activities, control lateral hip and knee motions, and contribute to the stability of the hip joint during single-leg support. Strengthening and conditioning these muscles through targeted exercises can enhance overall hip stability, improve functional movement, and reduce the risk of hip and lower limb injuries."}
            ></Content>
        </div>
    )

    return (
        <ContentPage title="Hip Abductor Muscles" description={<span>The hip abductors are a group of muscles responsible for moving the leg away from the midline of the body. They help with the lateral movement of the hip joint, allowing us to perform actions like side stepping, leg lifts to the side, and maintaining balance while standing on one leg.</span>} content={content}></ContentPage>
    )
}