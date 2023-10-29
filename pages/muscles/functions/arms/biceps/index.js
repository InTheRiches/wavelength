import Content from '@/components/Content'
import ContentPage from '@/components/ContentPage';
import {BackUpperBodySVG, EntireBodyMap, FrontUpperBodySVG} from '@/components/BodySVG';
import React from "react";
import {scroll} from "@/components/ContentScroll";
import {useRouter} from "next/router";


export default function TricepsFunction({}) {
    const router = useRouter();

    const content = (
        <div className="w-full max-w-5xl flex-col">
            <Content
                id={"location"}
                title="Location"
                content={`The bicep is located in the anterior compartment of the upper arm. It runs along the front surface of the humerus bone and attaches at the shoulder joint and the radial tuberosity of the forearm (a small bump on the bone near your elbow joint), forming the visible "bulge" when the arm is flexed.`}
            ></Content>
            <EntireBodyMap highlighted={"biceps"}></EntireBodyMap>
            <Content
                title="Biceps Brachii"
                id={"biceps-brachii"}
                content={"The bicep serves several important functions in the human body. Firstly, its primary function is to **flex** the elbow joint. When the bicep contracts, it brings the forearm **closer** to the upper arm, allowing for movements like lifting objects or performing a bicep curl. This flexion action is essential for activities involving the upper extremity, such as carrying groceries or performing tasks that require pulling or lifting.-.-Secondly, the bicep contributes to the **supination** of the forearm. Supination refers to the rotation of the forearm so that the palm faces upward or forward. This action is possible due to the bicep's attachment to the radial tuberosity in the forearm. When the bicep contracts, it helps to rotate the forearm and position the hand in a supinated position. This function is crucial for activities like turning a doorknob, using a screwdriver, or pouring a drink.-.-Lastly, the bicep plays a role in **stabilizing** the shoulder joint during certain movements. Although the primary responsibility for shoulder stability lies with the [/muscles/functions/back/rotator-cuff,rotator cuff] muscles, the long head of the bicep contributes to the **dynamic stabilization** of the shoulder joint. It helps prevent excessive movement and aids in keeping the humerus bone properly aligned within the shoulder socket, especially during overhead movements like lifting weights or throwing a ball.-.-Overall, the bicep is a versatile muscle that performs essential functions for arm movement, including flexion of the elbow joint, supination of the forearm, and assisting in shoulder stabilization. Its strength and flexibility are vital for numerous daily activities and sports that involve upper body movements."}
            ></Content>
        </div>
    )

    return (
        <ContentPage title={"Biceps Brachii (Biceps)"} description={<span>The bicep, or biceps brachii, is a large muscle in the upper arm that consists of two heads, the long head and the short head. It is responsible for flexing the elbow joint and supinating the forearm, which allows for movements like lifting, pulling, and curling. The biceps also plays a role in stabilizing the shoulder joint during certain movements.</span>} content={content}></ContentPage>
    )
}