import Content from "@/components/Content";
import ContentPage from "@/components/ContentPage";
import InformationBlock from "@/components/InformationBlocks";

export default function DietBulking({}) {
    const content = (
        <div className="w-full max-w-5xl flex-col">
            {/* Topics */}
            <Content
                id={"basics"}
                title={"Basics"}
                content={"Cutting involves creating a **caloric deficit** by consuming fewer calories than your body needs to maintain its current weight. By not consuming your bodies needs, it burns fat to cover to remaining energy needed. The primary goal is to shed body fat while preserving lean muscle mass. It is typically done during the warmer months when your body is more exposed, as cutting improves **aesthetics**. Unlike bulking, where you prioritize muscle gain, during a cut, you prioritize fat loss and achieving a more defined physique."}
            ></Content>
            <Content
                id={"dirty-cutting"}
                title={"Dirty Cutting"}
                content={"Dirty cutting is a less healthy approach to cutting, where the primary focus is solely on reducing calorie intake without much concern for the quality of the food. It often involves indulging in a **restrictive diet**, low in calories, and lacking in essential nutrients. People practicing dirty cutting might resort to extreme measures like **crash diets** or excessive cardio to lose weight rapidly. Often times people will go days without eating which is highly effective, but also extremely unhealthy. While it can lead to quick weight loss, dirty cutting can have adverse effects on your overall health and may result in muscle loss. It's crucial to consult with a **healthcare professional** or **registered dietitian** if you opt for this method to ensure you're still getting essential nutrients and not compromising your health."}
            ></Content>
            <Content
                id={"clean-cutting"}
                title={"Clean cutting"}
                content={"Clean bulking, on the other hand, emphasizes **quality over quantity**. It is a more structured and health-conscious approach, focusing on balanced nutrient intake from whole, minimally processed foods. **Lean** proteins such as chicken and beef, [/dieting/basics#carbohydrates,complex carbohydrates], and essential fats are the focus, as they provide the necessary nutrition for muscle growth while minimizing fat gain. Clean bulking requires planning, discipline, and calorie control, and is a healthier and more sustainable approach to building muscle. Choosing whether to dirty or clean bulk should depend on your fitness goals, preferences, and overall health considerations. If you are unsure, consult with a **healthcare professional** or **registered dietitian**. Their advice is tailored to your specific situation."}
            ></Content>
            <Content
                id={"howto"}
                title={"How to Cut"}
                content={`When cutting, it is recommended to consume around 300-500 calories less than your daily maintenance amount, which is typically around 2000-2500 calories for most individuals. This calorie deficit should result in an average weight loss of about 1-2 pounds per week, which is considered a safe and sustainable rate. It's crucial to combine this calorie reduction with a regular exercise routine that includes both cardiovascular workouts and strength training to preserve lean muscle mass.`}
            ></Content>
            <InformationBlock
                title={"Note"}
                content={"Remember that your specific caloric needs and macronutrient ratios may vary based on factors such as your age, gender, activity level, and overall health. For personalized guidance, it's always advisable to consult with a healthcare professional or registered dietitian who can help create a cutting plan tailored to your individual needs and goals."}
                ></InformationBlock>
        </div>
    );

    return (
        <ContentPage location={"Dieting"} title={"Cutting"} currentTopic={"Dieting-Cutting"}  description={<span className={"text-lg"}>Cutting is a dieting and fitness approach used to reduce body fat and achieve a leaner physique, typically during the spring and summer months when your body is more exposed. There are various methods to achieve a successful cut, and it's essential to focus on both your diet and exercise routine to maximize results.</span>} content={content}></ContentPage>
    )
}
