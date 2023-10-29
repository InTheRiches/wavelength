import Navigation from '@/components/Navigation'
import Content from '@/components/Content'
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import ContentScroll from "@/components/ContentScroll";
import useDarkMode from 'use-dark-mode';
import ContentPage from '@/components/ContentPage';


export default function BackMuscleFunctions({}) {
    const content = (
        <div className="w-full max-w-5xl flex-col">
            {/* Page Header */}
            <div className="flex flex-col mb-12">
                 <h1 className="mb-10 inline-block text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight dark:text-slate-50">Muscle Functions - Back</h1>
                <div className={"border-cyan-accent border-1 flex flex-col p-4 bg-neutral-500 bg-opacity-5 rounded-md"}>
                    <span className={"text-lg mb-6"}>The back muscles are a group of muscles that are located in the <b>posterior</b> part of the body and are responsible for a wide range of functions, including posture, movement, and stabilization of the spine. These muscles can be divided into two main groups: the superficial and the deep back muscles.</span>
                    <span>Together, the back muscles work to support the spine, maintain proper alignment, and facilitate movements such as bending, twisting, and lifting. Strengthening the back muscles can help improve posture, reduce the risk of back pain and injury, and enhance overall upper body strength and mobility.</span>
                </div>
            </div>
            {/* Topics */}
            <Content
                title="Rhomboids"
                content="-.-The Rhomboids are responsible for pulling the **shoulder blades** together, which is an important movement for good posture. They also help to lift the shoulder blades up, which is necessary for activities such as **reaching overhead or carrying heavy objects**.-.-In addition to these movements, the Rhomboids also assist with **rotating** the shoulder blades downward and can help to stabilize the shoulder joint during arm movements.-.-Overall, the Rhomboids are important for maintaining good posture and facilitating a variety of arm and shoulder movements. Whether you're sitting at a desk, carrying groceries, or playing sports, the Rhomboids are working to keep your shoulders and arms moving smoothly and efficiently."
            ></Content>
            <Content
                title="Rotator Cuff"
                content={'The rotator cuff is a **group** of muscles and tendons in your shoulder that help to keep your arm bone (humerus) securely in place within the shoulder joint. Think of it as a set of "cables" or support structures that keep the **ball** of the shoulder joint in the socket while allowing for movement.-.-The rotator cuff is very important for everyday activities like **reaching**, **lifting**, and **throwing**, as well as more complex movements like swimming or playing sports. Without a properly functioning rotator cuff, these movements could be painful, difficult, or even impossible to perform.-.-The rotator cuff also helps to **protect** the shoulder joint from injury. Because the shoulder joint has a wide range of motion, it can be vulnerable to dislocation or other types of damage. The rotator cuff helps to stabilize the joint and prevent these types of injuries from occurring.-.-Overall, the rotator cuff is a vital group of muscles and tendons that help to support and protect the shoulder joint. By keeping the arm bone securely in place and allowing for smooth, pain-free movement, the rotator cuff allows us to perform a wide variety of activities and maintain our overall quality of life.'}
            ></Content>
            <div className="">
                <div className="flex rounded-md border-1 border-yellow-200 bg-yellow-50 dark:bg-black dark:bg-opacity-20 p-4 text-lg text-yellow-500 dark:text-yellow-200">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-3 mt-1.5 h-5 w-5 flex-shrink-0">
                        <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                    <div className={"w-full"}>
                        <h4 className="font-bold">Make sure to strengthen the rotator cuff as you increase load on shoulder bearing movements, as permanent damage can occur.</h4>
                        <div className="mt-1">
                            <ul className="list-inside list-disc lg:grid w-full">
                                <li>Shoulder pain</li>
                                <li>Weakness, loss of stability</li>
                                <li>Limited range of motion</li>
                                <li>Tendinitis</li>
                                <li>Bursitis</li>
                                <li>Rotator cuff tear, often permanent, requiring surgical intervention</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Content
                title={"Latissimus Dorsi"}
                content={"The Latissimus Dorsi muscle, also known as the \"lats\", is a large, flat muscle that covers a broad area of the back. It originates from the **lower spine** and **iliac crest** (the upper part of the hip bone) and attaches to the upper arm bone, or humerus.-.-The Latissimus Dorsi muscle is responsible for several movements of the arm and shoulder. It helps to **extend**, **adduct**, and **internally rotate** the arm, which means it brings the arm down and back, towards the body, and rotates it inward. These movements are important for activities such as rowing, pulling, and climbing.-.-In addition, the Latissimus Dorsi muscle is also involved in movements that require **raising** the body up, such as pull-ups and chin-ups. It helps to pull the body up towards a bar or other object by **extending** the arms and **retracting** the shoulder blades.-.-Overall, the Latissimus Dorsi muscle is an important muscle for many upper body movements, from everyday activities to sports and fitness activities. It helps to support the back and shoulders, and plays a key role in pulling and lifting movements."}
                ></Content>
            <Content
                title={"Posterior Deltoid"}
                content={"The Posterior Deltoid muscle is one of the three heads that make up the Deltoid muscle in the shoulder. It is located at the back of the shoulder and is responsible for several movements of the arm and shoulder.-.-The main function of the Posterior Deltoid muscle is to horizontally extend the arm, which means it moves the arm straight back, away from the body. This movement is important for activities such as **rowing** and **pulling** exercises, as well as for movements such as throwing a ball or swinging a racket.-.-The Posterior Deltoid muscle also helps to **externally rotate** the arm, which means it rotates the arm outward (left arm counter-clockwise, right arm clockwise). This movement is important for activities that involve reaching behind the body or twisting the arm.-.-In addition, the Posterior Deltoid muscle is involved in movements that require **raising** the arm up to the side, such as lateral raises. It helps to **stabilize** the shoulder joint during these movements, which is important for avoiding injury.-.-Overall, the Posterior Deltoid muscle is an important muscle for many upper body movements. It helps to support the back and shoulders, and plays a key role in pulling, lifting, and throwing movements.\n"}
                ></Content>
        </div>
    )

    return (
        <ContentPage title={""} content={content}></ContentPage>
    )
}