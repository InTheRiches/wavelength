import Content from '@/components/Content'
import ContentPage from '@/components/ContentPage';

export default function PerformanceBetaAlanine({}) {
    const content = (
        <div className="w-full max-w-5xl flex-col">
            {/* First Topic */}
            <Content
                id="why"
                title="What is Beta-Alanine?"
                content="Beta-alanine is a non-essential amino acid that is used by the body to produce carnosine, a dipeptide molecule found in high concentrations in muscle tissue. Carnosine helps to buffer the pH of muscle tissue, which can become acidic during exercise, leading to fatigue and decreased performance. By increasing the levels of carnosine in the muscles, beta-alanine supplementation may help to delay fatigue and improve exercise performance, especially during high-intensity, short-duration activities like sprinting or weightlifting. In other words, beta-alanine can help you work out harder and longer by reducing the acidity levels in your muscles. Beta-alanine is a nonproteinogenic amino acid (i.e., it is not incorporated into proteins during translation, meaning it does not construct proteins). It can be ingested through meats like chicken and beef, and is also produced in the liver."
            ></Content>
            <Content
                id={"when-how"}
                title={"Timing/Dosage of Consumption"}
                content={'The recommended dosage of beta-alanine supplements is typically between 2-5 grams per day, divided into two or three doses. Make sure to read the nutrition information on your specific supplement, as each brand does it differently. It\'s best to take beta-alanine with a meal or snack to help minimize any gastrointestinal side effects, such as stomach upset or nausea.-.-In terms of timing, there isn\'t necessarily a "best" time of day to take beta-alanine, as long as you are consistent with your dosing schedule. Some people prefer to take beta-alanine before exercise, as it may help improve muscular endurance and delay fatigue. Others prefer to take it throughout the day to maintain higher levels in the body.'}
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
                            Beta-alanine supplements can cause a tingling sensation in the skin, known as paresthesia. This sensation is harmless and temporary, but some people find it uncomfortable. If you experience paresthesia, you may want to spread out your doses of beta-alanine throughout the day, or decrease your dosage.                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <ContentPage title={"Beta-Alanine"} description={<span className={"text-lg mb-2"}>Beta-Alanine is the building block of carnosine, which buffers acid in muscles. Supplementing Beta-Alanine provides improved performance during high intensity training spanning 1-10 minutes.</span>} content={content}></ContentPage>
    )
}