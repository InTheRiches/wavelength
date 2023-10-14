import Content from '@/components/Content'
import ContentPage from '@/components/ContentPage';

export default function PerformancePreWorkout({}) {
    const content = (
        <div className="w-full max-w-5xl flex-col">
            <Content
                id="why"
                title="What is Pre-Workout?"
                content="Pre-workout supplements are **dietary** supplements that are taken before exercise to help improve athletic **performance**, **endurance**, and **focus**. They typically contain a combination of ingredients such as caffeine, beta-alanine, creatine, and nitric oxide precursors. They provide a series of nutrients that improved the pump, overall endurance, energy, and sometimes focus (euphoria)."
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
                            It's important to note that pre-workout supplements can have side effects, especially if they contain high doses of stimulants like caffeine. These side effects may include jitters, anxiety, rapid heartbeat, and sleep disturbances. It's essential to speak with a healthcare professional before starting any new supplement regimen and to follow the recommended dosage to avoid negative side effects.
                        </div>
                    </div>
                </div>
            </div>
            <Content
                id={"when-how"}
                title={"Timing/Dosage of Consumption"}
                content={"First, it is important to note that **pre-workout supplements** should be taken **before exercise, typically 30-60 minutes** before your workout. This allows the ingredients to be absorbed and start working before you begin your exercise routine. Taking the supplement too soon before your workout may result in a **delay** in its effects and can cause **jitters** or other **negative side effects**.-.-The recommended dosage can vary depending on the specific product and your individual tolerance. It is important to carefully read the label and follow the manufacturer's instructions for dosage. If your pre-workout contains caffeine, you should make sure to introduce it to your body if you haven't already, as the high dosages can result in **jitters** and other unwanted side effects. In general, starting with a lower dosage and gradually increasing it as your tolerance builds (especially if it contains caffeine or something similar) is a good strategy to avoid potential negative side effects."}
                ></Content>
            <Content
                id="ingrediants"
                title="Ingrediants"
                content={"Pre-Workouts contain various ingredients and dosages, it all depends on the brand and what it is designed for. For example, certain pre-workouts are **stim-free**, meaning they dont have caffeine, and focus on other elements to improve your workout. However, these are the most common ingredients:"}
                bulletPoints={{
                    "Caffeine": "A stimulant that can help improve focus, alertness, and energy levels during exercise.",
                    "Citrulline": "An amino acid that can help improve blood flow and reduce fatigue during exercise. ([/supplements/performance/citrulline,Learn More])",
                    "Beta-Alanine": "An amino acid that can help reduce muscle fatigue and improve exercise endurance. Also has anti-aging effects. ([/supplements/performance/beta-alanine,Learn More])",
                    "Nitric Oxide Boosters": "Substances such as arginine and citrulline that can help improve blood flow and nutrient delivery to muscles.",
                    "BCAAs": "Branched-chain amino acids (leucine, isoleucine, and valine) that can help stimulate muscle protein synthesis and reduce muscle breakdown during exercise. ([/supplements/performance/bcaas,Learn More])",
                    "Tyrosine": "An amino acid that can help improve focus and mental performance during exercise.",
                    "Taurine": "An amino acid that can help reduce muscle damage and improve exercise performance.",
                    "Betaine": "A compound that can help improve muscle endurance and strength.",
                    "Electrolytes": "Minerals such as sodium, potassium, and magnesium that can help improve hydration and reduce the risk of muscle cramps during exercise."
                }}
                >
            </Content>
        </div>
    );

    return (
        <ContentPage location={"Supplements • Performance"} title={"Pre-Workout"} description={"Pre-workout is a blend of numerous ingredients designed to increase blood flow (pump), energy, and recovery. They are often high in caffeine and other related stimulants, and some offer non-crash stimulants."} currentTopic={"Supplements-Performance-Pre Workout"} content={content}></ContentPage>
    )
}