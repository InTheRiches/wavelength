import Content from '@/components/Content'
import ContentPage from '@/components/ContentPage';

export default function PerformanceBCAAs({}) {
    const content = (
        <div className="w-full max-w-5xl flex-col">
            {/* First Topic */}
            <Content
                id="why"
                title="What are BCAAs / EAAs?"
                content="BCAA (Branched Chain Amino Acids) and EAA (Essential Amino Acids) supplements provide vital amino acids. They are used for improving muscle endurance, recovery, and protein metabolism.-.-BCAAs refer to three essential amino acids: leucine, isoleucine, and valine. They are distinct from other essential amino acids as they possess a branched side chain and play a large role in the regulation of muscle mass. They are present in high amounts in muscle tissue in comparison to other essential amino acids. BCAAs cannot be synthesized in the body, so they are important to ingest daily. Daily protein sources, such as eggs and meat, typically provide an adequate amount.-.-The main benefit of BCAAs are their ability to enhance muscle growth and alleviate muscle fatigue. Studies found that supplementing with BCAAs alone does not provide an optimal muscle protein synthesis response, as all essential amino acids are required for muscle protein synthesis. There seems to be a role for BCAA supplementation in increasing muscle protein synthesis if they are taken along with a meal that has an adequate amount of essential amino acids. However, there is no evidence that BCAA supplementation enhances muscle [/muscles/training/strength,strength] or [/muscles/training/hypertrophy,hypertrophy] when adequate protein requirements are met. BCAA supplementation for fatigue may be beneficial, based on a meta-analysis of BCAA effects on markers of muscle damage. The results found that BCAA supplementation reduced muscle damage and muscle soreness after exercise, but may not speed up the recovery of muscle performance."
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
                            While BCAA + EAA supplements can provide benefits for athletes and fitness enthusiasts, it's worth noting that a well-balanced diet that includes protein-rich foods can provide all the essential amino acids the body needs to support muscle growth and recovery. BCAAs / EAAs are supplements, and are not required if your diet covers these amino acids.
                        </div>
                    </div>
                </div>
            </div>
            <Content
                id={"when-how"}
                title={"Timing/Dosage of Consumption"}
                content={"Firstly, it is important to read the nutrition information for the specific product. Each brand does it differently. Typically, one scoop a day should be sufficient. The timing of consumption does not effect the benefits.-.-Remember, the supplementation of BCAAs and EAAs are not necessary if you are consuming a balanced dieting."}
                ></Content>
        </div>
    );

    return (
        <ContentPage location={"Supplements • Performance"} title={"BCAAs / EAAs"} description={<span className={"text-lg mb-2"}>Branched-chain amino acids (BCAAs) are three essential amino acids that are frequently supplemented because of their role in muscle growth and development. These amino acids are naturally found in dietary protein sources. Studies show that supplementation of BCAAs alone does not increase muscle growth, as all essential amino acids must be present for muscle protein synthesis to occur.</span>} currentTopic={"Supplements-Performance-BCAAs"} content={content}></ContentPage>
    )
}