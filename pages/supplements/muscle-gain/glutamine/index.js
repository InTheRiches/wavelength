import Content from '@/components/Content'
import ContentPage from '@/components/ContentPage';

export default function Glutamine({}) {
    const content = (
        <div className="flex-1 w-full max-w-5xl flex-col">
            {/* First Topic */}
            <Content
                id="why"
                title="What is Glutamine?"
                content="Glutamine is an amino acid that is naturally produced in the body and is involved in several essential bodily functions. It is also found in protein-rich foods such as meat, fish, and dairy products.-.-As a workout supplement, glutamine has gained popularity among athletes and bodybuilders for its potential benefits in promoting muscle growth and recovery. Glutamine is a key component of muscle tissue, and supplementing with it may help promote muscle protein synthesis, reduce muscle breakdown, and improve muscle recovery after exercise. Additionally, glutamine has been shown to enhance glycogen resynthesis, which can help replenish energy stores after intense workouts.-.-Aside from its potential benefits for muscle growth and recovery, glutamine may also support overall immune function, gut health, and wound healing. Glutamine is essential for the proper functioning of immune cells, and supplementing with it may help strengthen the body's immune response. Additionally, glutamine is involved in the maintenance of the intestinal lining, which can help improve gut health and reduce inflammation. Moreover, glutamine is involved in the synthesis of collagen, a protein that is critical for wound healing and tissue repair."
            ></Content>
            <Content
                id={"when-how"}
                title={"Timing/Dosage of Consumption"}
                content={'The most common dosages of Glutamine are around 5-10g, but it depends on a variety of factors, including weight, age, and activity level.-.-As for timing, there is no specific time of day when glutamine should be taken. It can be consumed at any time, either with or without food. Some studies suggest that consuming glutamine immediately after a workout may help enhance muscle recovery and growth. However, other studies suggest that taking glutamine before bedtime may help improve protein synthesis and reduce muscle breakdown during the overnight fasting period.-.-Overall, the best approach is to follow the manufacturer\'s instructions for dosage and timing or consult with a healthcare professional for personalized recommendations based on individual needs and goals.'}
            ></Content>
            <div className="">
                <div className="flex rounded-md border-1 border-yellow-200 bg-yellow-50 dark:bg-black dark:bg-opacity-20 p-4 text-lg text-yellow-500 dark:text-yellow-200">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-3 mt-1.2 h-5 w-5 flex-shrink-0">
                        <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                    <div className={"w-full"}>
                        <h4 className="font-bold">Note</h4>
                        <div className="mt-1">
                            Glutamine supplements are generally safe for most people, but they may cause side effects such as nausea, diarrhea, and stomach cramps in some individuals. People with certain medical conditions such as liver or kidney disease, as well as pregnant or breastfeeding women, should consult their healthcare provider before taking glutamine supplements.                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <ContentPage title={"Glutamine"} description={<span className={"text-lg mb-2"}>Glutamine is a type of amino acid that is present in all proteins. It is classified as conditionally essential, which implies that it becomes necessary during certain circumstances such as injury, surgery or illness. Glutamine has the highest concentration among all amino acids in the blood serum. However, its levels tend to decrease relative to the severity of trauma experienced by the body.</span>} content={content}></ContentPage>
    )
}