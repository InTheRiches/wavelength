import Content from '@/components/Content'
import ContentPage from '@/components/ContentPage';
import InformationBlock from "@/components/InformationBlocks";

export default function PerformancePreWorkout({}) {
    const content = (
        <div className="w-full max-w-5xl flex-col">
            <Content
                id="why"
                title="What is Pre-Workout?"
                content="Pre-workout supplements are **dietary** supplements that are taken before exercise to help improve athletic **performance**, **endurance**, and **focus**. They typically contain a combination of ingredients such as caffeine, beta-alanine, creatine, and nitric oxide precursors. They provide a series of nutrients that improved the pump, overall endurance, energy, and sometimes focus (euphoria)."
            ></Content>
            <InformationBlock title={"Note"} content={"It's important to note that pre-workout supplements can have side effects, especially if they contain high doses of stimulants like caffeine. These side effects may include jitters, anxiety, rapid heartbeat, and sleep disturbances. It's essential to speak with a healthcare professional before starting any new supplement regimen and to follow the recommended dosage to avoid negative side effects."}></InformationBlock>
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
                    "Electrolytes[/diet/basics#Electrolytes]": "Minerals such as sodium, potassium, and magnesium (what you sweat out) that can help improve hydration and reduce the risk of muscle cramps during exercise.",
                    "Citrulline[/supplements/performance/citrulline]": "An amino acid that can help improve blood flow by dilating blood vessel size and reduces fatigue during exercise.",
                    "Beta-Alanine[/supplements/performance/beta-alanine]": "An amino acid that helps reduce muscle fatigue and improve exercise endurance. Also has anti-aging effects.",
                    "Nitric Oxide (Nitrate)[/supplements/performance/nitrate]": "A gas that is produced naturally that relaxes blood vessels and improves blood flow and may temporarily reduce the body’s oxygen demand during exercise.",
                    "BCAAs[/supplements/performance/bcaas]": "Branched-chain amino acids (leucine, isoleucine, and valine) that can help stimulate muscle protein synthesis and reduce muscle breakdown during exercise.",
                    "Tyrosine": "An amino acid that can help improve focus and mental performance during exercise. It helps with the production of dopamine, which is a neurotransmitter that plays a role in mood and motivation, along with the synthesis of pain relieving chemicals.",
                    "Taurine": "An amino acid that can help reduce muscle damage and improve exercise performance.",
                    "Betaine": "A compound that promotes cell hydration and resilience to stressors, similar to creatine.",
                    "Caffeine": "A stimulant that can help improve focus, alertness, and energy levels during exercise."
                }}>
            </Content>
        </div>
    );

    return (
        <ContentPage location={"Supplements • Performance"} title={"Pre-Workout"} description={"Pre-workout is a blend of numerous ingredients designed to increase blood flow (pump), energy, and recovery. They are often high in caffeine and other related stimulants, and some offer non-crash stimulants."} currentTopic={"Supplements-Performance-Pre Workout"} content={content}></ContentPage>
    )
}