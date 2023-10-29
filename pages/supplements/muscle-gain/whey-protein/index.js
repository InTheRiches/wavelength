import Content from '@/components/Content'
import ContentPage from '@/components/ContentPage';

export default function PerformanceBCAAs({}) {
    const content = (
        <div className="w-full max-w-5xl flex-col">
            {/* First Topic */}
            <Content
                id="why"
                title="What is Whey Protein?"
                content="Whey protein is a type of protein derived from milk. It is typically in powder form, and is a easy way to supplement your protein intake. It contains all essential amino acids, and is a complete protein. It is a very common resource for [/dieting/bulking,bulking] and building muscle. Whey protein is also a very common ingredient in protein bars and other protein supplements.-.-Whey protein is easily digestible and absorbed by the body quickly, making it a popular choice for athletes and fitness enthusiasts to consume before or after exercise to help with muscle recovery and growth. Additionally, it may help to support weight management goals, as it can help to reduce appetite and promote feelings of fullness.-.-In addition to its potential benefits for muscle growth and weight management, some studies have also suggested that whey protein may have immune-boosting and anti-inflammatory properties, as well as potential benefits for heart health and blood sugar control. However, more research is needed to fully understand these potential benefits."
            ></Content>
            <Content
                id={"when-how"}
                title={"Timing/Dosage of Consumption"}
                content={'The amount of whey protein an individual should take per day can vary depending on factors such as age, weight, gender, activity level, and overall health status. It is important to speak with a healthcare provider or a registered dietitian to determine the optimal amount of whey protein for your individual needs.-.-As a general guideline, research suggests that most adults can benefit from consuming 20-30 grams of whey protein per serving, with up to three servings per day. This amount of protein can help to support muscle growth and recovery, as well as promote feelings of fullness and reduce appetite.-.-The timing of when to consume whey protein can also be important. Many people choose to consume whey protein either before or after exercise, as this is when the body is most primed to absorb and utilize the protein. However, consuming whey protein at other times throughout the day can also be beneficial, such as in between meals or as a snack.'}
            ></Content>
            <div className="">
                <div className="flex rounded-md border-1 border-sky-500 p-4 dark:bg-blue-500 dark:bg-opacity-10 text-lg text-sky-600 bg-blue-50">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                         className="mr-3 mt-1 h-5 w-5 flex-shrink-0">
                        <path fillRule="evenodd"
                              d="M19 10.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0zM8.25 9.75A.75.75 0 019 9h.253a1.75 1.75 0 011.709 2.13l-.46 2.066a.25.25 0 00.245.304H11a.75.75 0 010 1.5h-.253a1.75 1.75 0 01-1.709-2.13l.46-2.066a.25.25 0 00-.245-.304H9a.75.75 0 01-.75-.75zM10 7a1 1 0 100-2 1 1 0 000 2z"
                              clipRule="evenodd"/>
                    </svg>
                    <div className={"w-full"}>
                        <h4 className="font-bold">Note</h4>
                        <div className="mt-1">
                            It is important to remember that whey protein is a supplement. If you eat a well balanced diet full of high-quality lean meats, the additional protein is not necessary.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <ContentPage title={"Whey Protein"} description={<span className={"text-lg mb-2"}>Whey protein is a type of protein derived from milk, which is commonly used as a dietary supplement to support muscle growth and recovery. It contains all of the essential amino acids, which are the building blocks of protein that cannot be produced by the body and must be obtained through food or supplements.</span>} content={content}></ContentPage>
    )
}