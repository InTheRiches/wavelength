import Content from '@/components/Content'
import ContentPage from '@/components/ContentPage';
import {BackUpperBodySVG, EntireBodyMap, FrontUpperBodySVG} from '@/components/BodySVG';
import {WarningBlock} from "@/components/InformationBlocks";


export default function PecsFunction({}) {
    const content = (
        <div className="w-full max-w-5xl flex-col">
            <Content
                id={"location"}
                title="Location"
                content={"The pectoralis major is a large muscle located in the chest region of the body. It spans from the sternum (breastbone), clavicle (collarbone), and the upper ribs to the humerus (upper arm bone). It covers a significant portion of the anterior chest and is easily visible in well-developed individuals."}
            ></Content>
            <EntireBodyMap highlighted={"pecs"}></EntireBodyMap>
            <Content
                title="Pectoralis Major"
                id={"pectoralis-major"}
                content={"The pectoralis major is a large muscle located in the chest region and is divided into two portions: the **clavicular** (upper) and **sternocostal** (lower) heads. The pectoralis major has several important functions in upper body movements."}
                ></Content>
            <WarningBlock
                title={"Warning"}
                content={"A lot of fitness influencers talk about a third head, the middle head, which biologically doesn't exist. Ignore them, as it is only a waste of time and energy."}
                ></WarningBlock>
            <Content
                content={"Firstly, the pectoralis major is responsible for **shoulder flexion and horizontal adduction**. When the clavicular head contracts, it assists in flexing the shoulder joint, allowing you to raise your arm forward and upward. This motion is crucial for activities like throwing a ball or reaching overhead. Additionally, both the clavicular and sternocostal heads contribute to **shoulder horizontal adduction**, bringing the arm across the front of the body towards the midline. This action is involved in movements such as hugging, chest flies, and certain swimming strokes.-.-Another function of the pectoralis major is **shoulder adduction**. When both heads of the muscle contract simultaneously, they work together to bring the arm closer to the body from an abducted position. This movement is used in actions like performing push-ups, pressing weights, or holding objects close to the chest.-.-Additionally, the pectoralis major assists in **shoulder internal rotation**. When the muscle contracts, it helps rotate the arm inward towards the body. This movement is utilized in actions such as throwing a punch or reaching behind the back.-.-In summary, the primary function of the pectoralis major is to bring the elbow across the body, towards your sternum horizontally. It is also responsible for shoulder flexion, shoulder horizontal adduction, shoulder adduction, and shoulder internal rotation. Its actions are essential for various upper body movements, ranging from everyday tasks to athletic activities. Strengthening and conditioning the pectoralis major can improve upper body strength, stability, and overall functional performance."}
                ></Content>
        </div>
    )

    return (
        <ContentPage title={"Pectoralis Major"} description={<span>The pectoral muscles are large, fan shaped muscles that reside on either side of the upper chest. They have two heads: clavicular and sternocostal.</span>} content={content}></ContentPage>
    )
}