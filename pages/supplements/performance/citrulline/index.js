import Content from '@/components/Content'
import ContentPage from '@/components/ContentPage';

export default function PerformanceCitrulline({}) {
    const content = (
        <div className="w-full max-w-5xl flex-col">
            {/* First Topic */}
            <Content
                id="why"
                title="What is Citrulline?"
                content="Citrulline is a non-essential amino acid within the body. When taken, it increases nitric ocid production in the body, which can improve cardiovascular performance. It also gets converted into L-argenine in the liver once supplemented, which assists in the removal and recycling of ammonia, which improve metabolic health.-.-Since L-arginine is a precursor for nitric oxide production, supplementing citrulline increases production. Nitric oxide is a molecule that plays a significant role in regulating blood vessel dilation and improving blood flow. Nitric oxide acts as a vasodilator, meaning it helps relax and widen blood vessels, leading to improved blood flow. It is relevant in various physiological processes, including athletic performance, vascular health, and erectile function. Citrulline supplementation can support nitric oxide metabolism, potentially leading to improved athletic performance, better vascular health, and the treatment of erectile dysfunction.-.-However, it's worth noting that the extent of nitric oxide increase through citrulline supplementation may vary among individuals, and the specific dosage and duration of supplementation can also influence the results. As always, it is advisable to consult with a healthcare professional before starting any new supplementation regimen to ensure it is suitable for your individual needs and health conditions."
            ></Content>
            <Content
                id={"when-how"}
                title={"Timing/Dosage of Consumption"}
                content={'When supplementing citrulline, take 6,000 – 8,000 mg of citrulline about an hour before exercise. On days that you don\'t exercise, it can be broken up into smaller doses. Citrulline is often included in preworkouts, and is not necessary to supplement on top of your current preworkout. You can take citrulline at any time throughout the day, although as mentioned earlier, taking it around an hour before a workout provides the best results.'}
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
                            Creatine intake should always be accompanied by adequate hydration, as it can cause an increase in water retention. Additionally, consulting with a healthcare professional or a sports nutritionist is recommended to determine the most appropriate creatine supplementation plan for an individual's needs and goals.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <ContentPage title={"Citrulline"} description={<span className={"text-lg mb-2"}>L-Citrulline, or Citrulline, is an amino acid used in your body. It is non-essential, and is converted to L-argenine in the liver once supplemented. It increases nitric oxide production and matabolism in the body.</span>} content={content}></ContentPage>
    )
}