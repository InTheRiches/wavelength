import Content from '@/components/Content'
import {scroll} from "@/components/ContentScroll";
import ContentPage from '@/components/ContentPage';
import {BackFullBodySVG, FrontFullBodySVG} from "@/components/BodySVG";
import {useRouter} from "next/router";
import React from "react";


export default function MuscleBasics({}) {
    const router = useRouter();

    const content = (
        <div className="w-full max-w-5xl flex-col">
            <Content
                id={"muscle-locations"}
                title="Muscle Locations Map"
            ></Content>
            <div className={"p-8 flex justify-around items-center"}>
                <FrontFullBodySVG/>
                <BackFullBodySVG/>
            </div>
            <Content
                id="muscle-activation"
                title="Muscle Activation"
                content={`Muscles are a dense tissue composed of anywhere from a **thousand to a million fibers**. Muscle fibers are groups of individual cells that make up muscles, and they have a unique ability to **contract** or **shorten**, resulting in movement. Think of muscle fibers as tiny "strings" that can pull on each other when they receive a signal to do so.-.-Muscles are activated by signals from our **nervous system**, which is like the body's electrical wiring. When we want to move, our brain sends a signal through our nervous system to the muscle that needs to contract. This signal triggers a series of **chemical reactions** inside the muscle fibers.-.-Your muscle fibers consist of "**strings**" (technically called filaments) of muscles that are overlapping and holding onto each other. At the most basic level, when a muscle receives a signal to contract from the nervous system, it tells all the "strings" to **pull on each other**, resulting in a **shortening** of the muscle, which pulls on the various tendons connected to bones, resulting in movement.-.-This process requires **energy** in the form of ATP, and it continues as long as the muscle is receiving the signal to contract. So, when you move a muscle, the tiny strings inside the muscle fibers are grabbing and pulling on each other to make the whole muscle get **shorter** and perform movement.`}
            ></Content>
            <Content
                id="muscle-growth"
                title={"Muscle Growth"}
                content={"Your body is built to adapt, and your muscles are no exception. When challenged through an activity like weightlifting, the muscles grow and strengthen to combat the new challenge and demand. When you exercise, your muscle fibers will often **tear** and break down.-.-This might sound bad, but it's actually a good thing! When these tiny fibers are damaged, it triggers a response from your body to **repair** and rebuild them **stronger** than before. This process is called muscle [/muscles/training/hypertrophy,hypertrophy] (hy·per·tro·phy), and it's how muscles grow.-.-To support muscle growth, you need to give your body the right fuel and rest. Eating a balanced diet that includes plenty of protein is important because protein helps to repair and build new muscle fibers. Getting enough sleep and rest is also crucial because it allows your body to **recover** and **rebuild** the muscles that were damaged during exercise."}
            ></Content>
            <Content 
                id="muscle-heads"
                title={"Muscle Heads"}
                content={'Some muscles are made up of multiple "heads". These parts of the muscle attach to different bones in your body and work together to perform **movement**. For example, the biceps muscle in your upper arm has two heads - the "long head" and the "short head". These heads attach to different parts of your shoulder blade and forearm bone, respectively.-.-Each head of a muscle can work independently or together with the other heads of the same muscle. This means that different heads can produce different movements or help to **stabilize** joints in different ways.-.-For example, let\'s go back to the biceps muscle. The long head of the biceps attaches to a part of the shoulder blade called the "supraglenoid tubercle". This attachment point allows the long head to help **stabilize the shoulder joint** when you lift your arm. Meanwhile, the short head of the biceps attaches to the forearm bone called the "radius". This attachment point allows the short head to help flex the elbow joint when you curl your arm.-.-By working together, the different heads of a muscle can produce complex movements that require multiple joints to move. For example, when you lift a heavy object towards your shoulder, you\'re using both the long and short heads of the biceps to stabilize your shoulder joint and flex your elbow joint.'}
            ></Content>
            <div className="">
                <div className="flex rounded-md border-1 border-sky-500 p-4 dark:bg-blue-500 dark:bg-opacity-10 text-lg text-sky-600 dark:text-sky-300 bg-blue-50">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                            className="mr-3 mt-1.2 h-5 w-5 flex-shrink-0">
                        <path fillRule="evenodd"
                                d="M19 10.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0zM8.25 9.75A.75.75 0 019 9h.253a1.75 1.75 0 011.709 2.13l-.46 2.066a.25.25 0 00.245.304H11a.75.75 0 010 1.5h-.253a1.75 1.75 0 01-1.709-2.13l.46-2.066a.25.25 0 00-.245-.304H9a.75.75 0 01-.75-.75zM10 7a1 1 0 100-2 1 1 0 000 2z"
                                clipRule="evenodd"/>
                    </svg>
                    <div className={"w-full"}>
                        <h4 className="font-bold">Muscles with multiple "heads" can provide some unique benefits to the body because the different heads can work together or independently to produce different movements and functions. Here are a few examples:</h4>
                        <div className="mt-1">
                            <ul className="list-inside list-disc lg:grid w-full"> {/*lg:grid-cols-2*/}
                                <li>Allow muscles to attach to different bones and produce complex movements</li>
                                <li>Can work together or independently to produce different movements</li>
                                <li>Help to stabilize joints in different ways</li>
                                <li>Provide a wider range of functional capabilities than a single muscle</li>
                                <li>Allow for greater precision in movement and force production</li>
                                <li>Can help to distribute force more evenly across a joint, reducing the risk of injury</li>
                                <li>Allow for greater muscle mass and strength in certain areas of the body where multiple heads are present.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Content
                id="soreness"
                title={"Soreness"}
                content={`**Muscle soreness** is the feeling of discomfort or pain in your muscles that you might experience after exercising or doing physical activities. It's like when you feel a bit achy or stiff in your muscles after playing sports or doing exercise.-.-There are multiple reasons why you might feel sore. As mentioned before, when your muscles are pushed during an activity like weight lifting, small **tears** in the fibers can occur. These tears can feel sore and achy while they are recovering. This often results in **Delayed Onset Muscle Soreness** (DOMS). It's called "delayed onset" because it doesn't happen right away. It's like when you eat something spicy, and your mouth feels fine at first, but a little while later, it starts to feel really hot. DOMS usually kick in **a day or two** after intense exercise, and only last a day or two.-.-Another reason is due to **lactic acid**. When your muscles contract, they require ATP. The most efficient way to get ATP requires oxygen (cellular respiration), which is not always available. Your body substitutes with fermentation, which does not require oxygen. As a compromise, it only partially breaks down **glucose** (your body’s main energy source), which produces lactic acid as a byproduct. Your body is really good at clearing this lactic acid out, but it often cannot keep up during high intensity activities. This results in a **buildup** of lactic acid, which can cause a burning sensation within the muscle. This lactic acid can also stay in the muscle for a few days as it is progressively cleared out, resulting in prolonged soreness.`}
                ></Content>
        </div>
    );

    return (
        <ContentPage location={"Muscles"} title={"Basics"} description={<span className={"text-lg mb-2"}>Muscles are a type of tissue in our bodies that allow us to <b>move</b> and <b>carry</b> out physical activities. Think of muscles like rubber bands or ropes that are attached to our bones and can <b>contract</b>, or shorten, to pull the bones closer together, allowing us to move our bodies. For example, when you bend your arm, your bicep muscle contracts, <b>pulling</b> your forearm towards your shoulder. When you straighten your arm, your tricep muscle contracts, <b>pushing</b> your forearm away from your shoulder.</span>} currentTopic={"Muscles-Basics"} content={content}></ContentPage>
    )
}