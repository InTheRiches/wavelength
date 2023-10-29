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
                content={`The triceps is located on the posterior side of the upper arm. It runs from the shoulder down to the elbow and covers the back of the humerus bone. The three heads of the triceps merge together to form a tendon that attaches to the ulna bone in the forearm.`}
            ></Content>
            <EntireBodyMap highlighted={"triceps"} backDefault={true}></EntireBodyMap>
            <Content
                title="Triceps Brachii"
                id={"triceps-brachii"}
                content={"The triceps serve several important functions in the human body. Firstly, its primary function is to **extend** the elbow joint. When the triceps contracts, it straightens the arm by **pulling** the forearm away from the upper arm, allowing for movements like pushing, punching, or performing exercises like triceps dips. This extension action is crucial for activities that involve pushing or extending the arm, such as pushing a door open or performing a push-up.-.-Secondly, the triceps contribute to **shoulder stability**. While the primary responsibility for shoulder stability lies with the [/muscles/functions/back/rotator-cuff,rotator cuff] muscles, the long head of the triceps assists in stabilizing the shoulder joint during certain movements. It helps to prevent excessive movement of the humerus bone within the shoulder socket, particularly during pushing or overhead activities. This stabilizing function is vital for maintaining proper shoulder alignment and preventing injury during dynamic movements.-.-Lastly, the triceps play a role in overall arm strength and endurance. As one of the **largest** muscles in the upper body by overall [/muscles/training/basics/concepts#Volume,volume] (behind the [/muscles/functions/chest/delts,delts] and [/muscles/functions/chest/pecs,pecs]), the triceps is capable of generating significant force. It is involved in various functional and athletic activities, such as throwing, swinging a bat or racket, and performing weightlifting exercises like the bench press or overhead press. Strong triceps muscles are essential for generating endurance during pushing and extension movements, contributing to overall upper body strength.-.-In summary, the triceps is a multi-functional muscle that performs essential functions for arm movement, including extending the elbow joint, assisting in shoulder stability, and providing strength and endurance for various upper body activities. Its strength and flexibility are crucial for a wide range of daily tasks, sports, and exercises that involve arm extension and pushing motions."}
            ></Content>
        </div>
    )

    return (
        <ContentPage location={"Muscles • Functions • Arms"} title={"Triceps Brachii (Triceps)"} description={<span>The triceps, short for triceps brachii, is a large muscle located at the back of the upper arm. It consists of three heads—long head, lateral head, and medial head—and is responsible for extending the elbow joint, straightening the arm, and assisting in shoulder stability during certain movements.</span>} content={content} currentTopic={"Muscles-Functions-Arms-Triceps"}></ContentPage>
    )
}