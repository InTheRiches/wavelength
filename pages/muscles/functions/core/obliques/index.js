import Content from '@/components/Content'
import ContentPage from '@/components/ContentPage';
import {BackUpperBodySVG, EntireBodyMap, FrontUpperBodySVG} from '@/components/BodySVG';
import {scroll} from "@/components/ContentScroll";
import React from "react";

export default function ObliquesFunction({}) {
    const content = (
        <div className="flex-col">
            <Content
                id={"location"}
                title="Location"
                content={"The obliques, consisting of the **external obliques** and **internal obliques**, are located on the sides of the abdomen. The external obliques run **diagonally** from the lower ribs to the pelvis, forming a **V-shape** with the lower portion pointing inward. The internal obliques lie beneath the external obliques and have a similar diagonal orientation, forming an inverted V-shape with the upper portion pointing inward. Together, these muscles contribute to core stability, trunk rotation, and side-bending movements."}
            ></Content>
            <EntireBodyMap highlighted={"obliques"}></EntireBodyMap>
            <Content
                title="Obliques"
                id={"obliques"}
                content={"The obliques, composed of the external obliques and internal obliques, serve multiple important purposes related to **core stability, movement, and posture**. Here are some key aspects of its function and purpose:-.-Firstly, the obliques play a significant role in **core stability**. They are key contributors to the complex network of muscles that support and stabilize the **spine**. By engaging the obliques, along with other core muscles, individuals can maintain proper alignment, resist excessive movement, and enhance overall stability of the trunk. Strong and well-conditioned obliques contribute to improved functional movement, reduced risk of lower back injuries, and increased efficiency in various physical activities.-.-Secondly, the obliques are responsible for **trunk rotation**. These muscles enable the twisting or rotation of the torso, allowing individuals to turn their upper body from side to side. Trunk rotation is essential for activities that involve swinging, throwing, or rotating movements, such as golf swings, baseball pitches, or dance routines. The obliques provide the necessary strength and control to generate **rotational force** and facilitate smooth, coordinated movements.-.-Additionally, the obliques contribute to **lateral flexion**, which involves bending the torso sideways. By contracting the obliques on one side while lengthening the muscles on the opposite side, individuals can achieve lateral flexion and **tilt** their upper body to one side or the other. Lateral flexion is important for tasks such as reaching sideways, leaning, or performing exercises that target the obliques directly. Well-developed and flexible obliques enhance range of motion, increase overall mobility, and provide stability during side-bending movements.-.-In summary, the obliques play a crucial role in **core stability, trunk rotation, and lateral flexion**. They support the spine, contribute to maintaining proper posture, and provide strength and control for rotational and side-bending movements. Incorporating exercises that target the obliques can improve core strength, enhance functional movement, and contribute to overall stability and efficiency in various physical activities."}
            ></Content>
        </div>
    )

    return (
        <ContentPage location="Muscles • Functions • Core" title="Obliques (External/Internal)" description={<span>The obliques, consisting of the external obliques and internal obliques, are muscles located on the sides of the abdomen. They contribute to core stability, trunk rotation, and lateral flexion. These muscles play a vital role in maintaining proper posture, supporting the spine, enabling rotational movements, and facilitating side-bending actions.</span>} content={content} currentTopic={"Muscles-Functions-Core-Obliques"}></ContentPage>
    )
}