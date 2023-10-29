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
                content={`The flexor muscles are located on the **anterior** (inner) side of the forearm, running along the inner aspect. These muscles are responsible for **flexing the wrist and fingers**, enabling movements like bending the wrist downward and curling the fingers inward.-.-In contrast, the extensor muscles are situated on the **posterior** (outer) side of the forearm. They run along the outer aspect and are responsible for **extending the wrist and fingers**, allowing movements such as straightening the wrist and spreading the fingers apart.`}
            ></Content>
            <EntireBodyMap highlighted={"forearms"}></EntireBodyMap>
            <Content
                title="Flexor Muscles"
                id={"flexor-muscles"}
                content={"The flexor muscles in the forearm play a crucial role in hand and wrist movements, providing the ability to perform a variety of **gripping**, **grasping**, and **fine motor** actions. These muscles work together to flex the wrist and fingers, allowing us to perform tasks such as gripping objects, writing, typing, and manipulating tools.-.-The flexor muscles enable **flexion** of the wrist, which is the movement of **bending** the wrist downward. This action is essential for activities like bringing the palm closer to the forearm or positioning the hand for grasping objects. The flexor carpi radialis, flexor carpi ulnaris, and other flexor muscles contribute to this movement, providing strength and control.-.-In addition to wrist flexion, the flexor muscles are responsible for **flexing** the fingers. They enable movements such as curling the fingers inward and gripping objects firmly. The flexor digitorum superficialis and flexor digitorum profundus are among the key muscles involved in finger flexion, allowing us to perform tasks that require precise finger movements, such as typing on a keyboard or playing a musical instrument.-.-The flexor muscles are a complicated group of muscles, and you don’t need to know what each muscle does. Just remember, the flexor muscles flex the wrist and fingers downwards. Their coordination and strength contribute to our ability to manipulate objects and perform delicate tasks with precision."}
            ></Content>
            <Content
                title="Extensor Muscles"
                id={"extensor-muscles"}
                content={"The extensor muscles in the forearm play vital roles in the movement and control of the wrist and fingers. These muscles are responsible for **extension**, which involves straightening or moving the wrist and fingers away from the palm. Here are three key purposes of the extensor muscles:-.-Firstly, the extensor muscles enable **wrist extension**, allowing us to straighten the wrist and bring the back of the hand closer to the forearm. This movement is important for activities that involve pushing, lifting objects, or creating force with the hand in an extended position. It provides stability and strength to the wrist joint, supporting actions such as pushing a door open or lifting weights.-.-Secondly, the extensor muscles contribute to **finger extension**. They enable us to straighten and spread the fingers apart, allowing for tasks that require precision and control, such as playing musical instruments, typing, or pointing. Finger extension is essential for activities that involve fine motor skills, including precise finger movements and the ability to separate and control individual digits.-.-Lastly, the extensor muscles assist in **forearm supination**. Supination involves rotating the forearm to turn the palm upward, allowing actions such as holding a soup bowl or turning a doorknob. The extensor muscles contribute to this movement, providing the necessary strength and coordination to perform tasks that require a supinated hand position.-.-Overall, the extensor muscles in the forearm are crucial for wrist extension, finger extension, and forearm supination. They provide strength, stability, and control for a range of daily activities that involve pushing, lifting, extending the fingers, and rotating the forearm. These muscles work in conjunction with the [/muscles/functions/arms/forearms#flexor-muscles,flexor muscles] to maintain balance and coordination in the movement and control of the wrist and fingers."}
            ></Content>
        </div>
    )

    return (
        <ContentPage location={"Muscles • Functions • Arms"} title={"Flexor/Extensor Muscles (Forearms)"} description={<span>The forearm muscles enable wrist and finger movements for gripping, grasping, and fine motor tasks. They also facilitate forearm pronation and supination, allowing palm-down and palm-up rotations. Overall, these muscles provide dexterity, strength, and control for a wide range of manual activities.</span>} content={content} currentTopic={"Muscles-Functions-Arms-Forearms"}></ContentPage>
    )
}