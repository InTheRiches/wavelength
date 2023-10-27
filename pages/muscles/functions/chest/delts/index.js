import Content from '@/components/Content'
import ContentPage from '@/components/ContentPage';
import {BackUpperBodySVG, FrontUpperBodySVG} from '@/components/BodySVG';
import {scroll} from "@/components/ContentScroll";
import React from "react";

export default function PecsFunction({}) {
    const content = (
        <div className="flex-col">
            <Content
                id={"location"}
                title="Location"
                content={"The medial deltoid is located in the middle of the shoulder, on the **lateral** aspect of the upper arm. It forms the central portion of the deltoid muscle and is responsible for **abduction** of the arm at the shoulder joint.-.-The anterior deltoid is situated at the front of the shoulder, covering the **anterior** aspect of the upper arm. It originates from the outer third of the clavicle (collarbone) and inserts onto the deltoid tuberosity of the humerus. The anterior deltoid primarily functions to flex and internally rotate the arm at the shoulder joint."}
            ></Content>
            <div className={"p-8 flex justify-around items-center"}>
                <FrontUpperBodySVG highlighted="delts"/>
                <BackUpperBodySVG highlighted="delts"/>
            </div>
            <Content
                title="Anterior Deltoids"
                id={"anterior-deltoids"}
                content={"The anterior deltoid plays a crucial role in various upper body movements. One of its primary functions is **shoulder flexion**. When the anterior deltoid contracts, it assists in raising the arm forward, allowing you to perform actions such as reaching overhead, throwing a ball, or lifting objects in front of you. This movement is particularly important in activities that involve lifting or pushing motions in front of the body.-.-Additionally, the anterior deltoid contributes to **shoulder horizontal adduction**. This motion involves bringing the arm across the front of the body towards the midline. The anterior deltoid aids in this movement by working together with other muscles, such as the [/muscles/functions/chest/pecs,pectoralis major]. Shoulder horizontal adduction is utilized in exercises like chest flies, hugging motions, and certain swimming strokes.-.-Another function of the anterior deltoid is **internal rotation** of the arm at the shoulder joint. When the muscle contracts, it assists in turning the arm inward towards the body. This movement is involved in actions such as throwing a punch, performing a golf swing, or reaching behind the back. The anterior deltoid works **synergistically** (together) with other muscles, including the [/muscles/functions/chest/pecs,pectoralis major], to achieve this internal rotation of the arm.-.-Overall, the anterior deltoid is vital for shoulder flexion, shoulder horizontal adduction, and internal rotation of the arm. Its contributions to these movements enable a wide range of upper body actions, from basic daily tasks to sports-specific motions. Strengthening and conditioning the anterior deltoid can enhance shoulder stability, improve functional performance, and reduce the risk of certain shoulder injuries."}
            ></Content>
            <Content
                title="Medial Deltoids"
                id={"medial-deltoids"}
                content={"The medial deltoid, also known as the middle deltoid or lateral deltoid, plays a crucial role in the **movement and stability** of the shoulder joint. Its primary purpose is to assist in the **abduction** of the arm, which involves lifting the arm away from the body to the side. When the medial deltoid contracts, it helps to initiate and control this movement, allowing for a wide range of arm movements in various directions.-.-In addition to its role in arm abduction, the medial deltoid also contributes to other movements of the shoulder. It assists in the **flexion** and **extension** of the arm at the shoulder joint, allowing for actions such as raising the arm forward (flexion) or backward (extension). The medial deltoid also contributes to arm rotation, both **internally and externally**, enabling movements such as rotating the arm to reach behind the back or rotate it outward.-.-Furthermore, the medial deltoid provides stability and support to the shoulder joint during upper body activities. It works in conjunction with other muscles of the shoulder girdle to help stabilize the arm within the shoulder socket, preventing excessive movement and ensuring proper alignment of the joint during arm movements. This stability is essential for maintaining joint integrity and **preventing shoulder injuries** during everyday tasks, sports, and weightlifting exercises.-.-Overall, the medial deltoid is a vital muscle for shoulder function, contributing to arm abduction, flexion, extension, and rotation while providing stability to the shoulder joint. Its strength and conditioning are crucial for a wide range of upper body movements and activities."}
            ></Content>
        </div>
    )

    return (
        <ContentPage location="Muscles • Functions • Chest" title="Anterior & Medial Deltoid (Front/Middle Delt)" description={<span>The anterior and medial deltoids are muscle heads part of the deltoid, located at the front of the shoulder, the other being the <a onClick={() => router.push("/muscles/functions/back/rear-delt").then(() => scroll())} className={"text-link-text hover:underline hover:cursor-pointer"}>rear delt</a>. Its main function is to flex and internally rotate the arm at the shoulder joint, allowing for movements such as raising the arm forward and inward.</span>} content={content} currentTopic={"Muscles-Functions-Chest-Delts"}></ContentPage>
    )
}