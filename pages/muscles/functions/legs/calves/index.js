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
                content={"\n" +
                    "The calves are located in the posterior (back) region of the lower leg. They are positioned superficially and can be seen as the prominent bulge when the leg is flexed. The calf muscles originate from the posterior aspect of the femur (thigh bone) and merge into the Achilles tendon, which attaches to the heel bone (calcaneus)."}
            ></Content>
            <div className={"p-8 flex justify-around items-center"}>
                <FrontFullBodySVG highlighted="calves"/>
                <BackFullBodySVG highlighted="calves"/>
            </div>
            <Content
                title="Calves"
                id={"calves"}
                content={"The calves, composed of the **gastrocnemius** and **soleus** muscles, serve a vital purpose in our body's movement and stability. One of their primary functions is to facilitate **ankle plantar flexion**, which involves pointing and pushing the end of the foot downwards. This action is crucial in activities like walking, running, and jumping, as the calves generate the force needed to push off the ground and propel the body forward. They provide endurance and efficiency to these movements, helping us move with speed and agility.-.-Furthermore, the calves contribute to maintaining **balance** and **stability**. When standing, the calves help control the body's position by exerting a constant force on the ankles, keeping us upright. They work together with other leg muscles, such as the quadriceps and hamstrings, to provide stability during various weight-bearing activities. Strong and well-conditioned calves are especially important for activities that require balance, such as standing on one leg or maintaining equilibrium on uneven surfaces.-.-In addition to their functional role, the calves also play a role in **aesthetics**. Developed calf muscles can provide a sculpted and defined appearance to the lower legs. Many individuals focus on calf exercises to enhance the shape and size of their calves for cosmetic reasons. While the aesthetic aspect varies among individuals, the calves' appearance is influenced by genetics, training, and overall muscle development.-.-In summary, the calves have a **multifaceted purpose**. They are responsible for ankle plantar flexion, providing endurance and propulsion during locomotion. The calves contribute to balance and stability, playing a crucial role in maintaining an upright position. Additionally, they can contribute to the aesthetic appearance of the lower legs. Regular strength and conditioning exercises targeting the calves can improve their functionality, enhance athletic performance, and contribute to overall lower limb strength and stability."}
            ></Content>
        </div>
    )

    return (
        <ContentPage location="Muscles • Functions • Legs" title="Calves" description={<span className={"text-lg"}>The calves, otherwise known as the gastrocnemius and soleus muscles, are essential for lower limb movement and functionality. They play a significant role in activities such as walking, running, jumping, and standing. The primary function of the calves is to generate the force necessary for ankle plantar flexion, which involves pointing the foot downwards, enabling us to push off the ground and propel ourselves forward during locomotion.</span>} content={content} currentTopic={"Muscles-Functions-Legs-Quads"}></ContentPage>
    )
}