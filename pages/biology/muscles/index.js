import Content from "@/components/Content";
import ContentPage from "@/components/ContentPage";
import InformationBlock from "@/components/InformationBlocks";

export default function MuscleBiology({}) {
    const content = (
        <div className="w-full max-w-5xl flex-col">
            {/* Topics */}
            <Content
                id={"basics"}
                title={"Basics"}
                content={"Bulking is a popular dieting method used by athletes to gain muscle quickly. The goal of bulking is to consume **high-calorie** foods that provide excess fuel to the body. The idea behind it is that by providing more energy, the body will be able to grow more. Bulking is typically done in the winter, as your aesthetics don't matter since you are already covering up for the cold weather.-.-There are two ways to bulk: **dirty and clean**. Dirty bulking is unhealthier and won't provide as ideal of results, but it is far easier and cheaper. Clean bulking is the perfect scenario that will result in the best gains."}
            ></Content>
            <Content
                id={"dirty-bulking"}
                title={"Dirty Bulking"}
                content={"Dirty bulking is a style of dieting where the primary focus is consuming a surplus of calories without much concern for the **quality of the food**. It often involves indulging in high-calorie, often **junk** foods such as burgers, pizza, pastries, and fast food. The idea is to provide excess energy to support rapid muscle growth without caring about fat. While dirty bulking can be a quicker and more accessible approach, it comes with **health risks** and the downside of lacking proper nutrients. It's crucial for individuals who choose this method to consume fruits and vegetables to ensure they get essential vitamins and minerals. Dirty bulking can work for some, but it may not yield the best **long-term results** in terms of muscle-to-fat ratio and overall health."}
            ></Content>
            <Content
                id={"clean-bulking"}
                title={"Clean Bulking"}
                content={"Clean bulking, on the other hand, emphasizes **quality over quantity**. It is a more structured and health-conscious approach, focusing on balanced nutrient intake from whole, minimally processed foods. **Lean** proteins such as chicken and beef, [/dieting/basics#carbohydrates,complex carbohydrates], and essential fats are the focus, as they provide the necessary nutrition for muscle growth while minimizing fat gain. Clean bulking requires planning, discipline, and calorie control, and is a healthier and more sustainable approach to building muscle. Choosing whether to dirty or clean bulk should depend on your fitness goals, preferences, and overall health considerations. If you are unsure, consult with a **healthcare professional** or **registered dietitian**. Their advice is tailored to your specific situation."}
            ></Content>
            <Content
                id={"howto"}
                title={"How to Bulk"}
                content={`When bulking, it is recommended to consume 10-20% more calories than your **daily maintenance** amount, which is typically around 2000-2500 calories. This surplus of calories will result in an average weight gain of 0.25-0.5% of your body weight per week. For men, a 500-calorie surplus is recommended, while for women, a 350-calorie surplus is suggested. It is crucial to pair the calorie surplus with an effective exercise routine, or all the additional calories will be going straight to fat.`}
            ></Content>
            <InformationBlock
                title={"Note"}
                content={"Remember that your specific caloric needs and macronutrient ratios may vary based on factors such as your age, gender, activity level, and overall health. For personalized guidance, it's always advisable to consult with a healthcare professional or registered dietitian who can help create a bulking plan tailored to your individual needs and goals."}
            ></InformationBlock>
        </div>
    );

    return (
        <ContentPage location={"Dieting"} title={"Bulking"} currentTopic={"Dieting-Bulking"} description={<span className={"text-lg"}>Bulking is a style of dieting typically utilized during the winter to gain large amounts of muscle, not worrying about fat. There are multiple ways to achieve a bulk, typically dirty / clean.</span>} content={content}></ContentPage>
    )
}