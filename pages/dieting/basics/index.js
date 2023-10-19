import Content from "@/components/Content";
import ContentPage from "@/components/ContentPage";
import {openSansBold} from "@/components/Fonts";
import InformationBlock, {WarningBlock} from "@/components/InformationBlocks";

export default function DietBasics({}) {
    const content = (
        <div className="w-full max-w-5xl flex-col">
            {/* Topics */}
            <Content
                id={"calorie-surplus"}
                title={"Calorie Surplus"}
                content={"A **calorie surplus** is essential to muscle growth. Consuming more calories than you burn is vital, as it provides **extra-energy** required for muscle growth. By consuming an **additional 250-500 calories**, individuals can adequately support muscle development. During a calorie surplus you might get a little fat growth, but most will be muscular. If you want muscle gain and fat gain, consider [/dieting/bulking,bulking]. If you wish to lose fat at the slight cost of muscle growth, consider [/dieting/cutting,cutting]."}
            ></Content>
            <Content
                id={"protein"}
                title={"Protein Intake"}
                content={"Protein is the **building block** of muscles and its importance cannot be understated. When consumed, protein is broken down into **amino acids** and utilized to **repair** and **build muscle tissue**. It is recommended to consume around **0.7-1 gram** of protein per pound of body weight daily. **Lean** (low fat) meats like poultry, fish, and dairy are great sources of protein. There are also **plant based** options available such as peanuts and soy. The only thing to consider with plant based proteins is that they are most likely not **complete proteins**."}
            ></Content>
            <InformationBlock
                title={"Note"}
                content={"Food companies can manipulate the reported amount of protein by increasing nitrogen contents of the product. Make sure what you are eating truly has the amount of protein it says. Typically name brands and well known companies are more reliable."}
                ></InformationBlock>
            <Content
                id={"complete-proteins"}
                title={"Complete Proteins"}
                content={"Proteins are made up of **amino acids**. In total, there are **20**, and your body makes **11 of them on its own**. In order to acquire the other 9, you need to eat food that contains them. If a food does not contain all 9 essential amino acids, it is considered to have **incomplete** proteins, otherwise it is has **complete** proteins. Things like nuts, vegetables and whole grains have incomplete proteins. All meats contain complete proteins, as their bodies required all 20 amino acids to function as well."}
            ></Content>
            <InformationBlock
                title={"Note"}
                content={"If a food has incomplete proteins, that does not mean it should not be consumed as a source of protein. As long as the other missing proteins are consumed in other foods throughout the day, you are fine."}
                ></InformationBlock>
            <Content
                id={"carbohydrates"}
                title={"Carbohydrates (Carbs)"}
                content={`Carbohydrates are a vital **energy source** for intense workouts and play a crucial role in supporting muscle growth. They are your body's preferred energy source, and replenish glycogen stores in muscles, which are depleted during exercise. Additionally, carbohydrates help **spare protein** for muscle development, allowing it to be utilized for its primary purpose rather than as an energy source. There are two types of carbs, **simple** and **complex**.-.-Simple carbs (simple sugars) are composed up of **one or two sugar molecules**. They are typically found in **naturally sugary** foods, along with **processed** sweets. Simple sugars provide a **short release** of energy, but lack necessary nutrients such as **fiber**. Consuming excessive amounts of simple carbs can contribute to **weight gain** and an increased risk of chronic health conditions like **type 2 diabetes** and **heart disease**.-.-Complex carbohydrates are made up of longer chains of sugar molecules, and are **slower to digest**, providing a **steady and sustained** release of energy. They are often rich in dietary fiber, vitamins, minerals, and other nutrients, contributing to better overall health. Complex carbohydrates found in whole grains, fruits, vegetables, and legumes should be incorporated into the diet to ensure **optimal muscle-building potential**.`}
            ></Content>
            <Content
                id={"hydration"}
                title={"Hydration"}
                content={"Proper hydration is often overlooked, but is essential for muscle function and overall health. 75% of Americans are **chronically dehydrated**, drinking an average of 2.5 cups a day. The average adult male should consume a gallon (15.5 cups) of water a day, and the average adult female should consume .7 gallons (11.5 cups) a day. Water is involved in various physiological processes, including nutrient transport, waste removal, and temperature regulation.-.-Water is also a vital part in **energy expenditure**, the more energy exerted the more water consumed. In the most extreme scenario, the human body can consume half a gallon of water an hour during cardio. Staying adequately **hydrated** ensures optimal muscle performance, prevents muscle cramps, and supports the recovery process. Drinking enough water throughout the day, especially during intense exercise sessions, is vital for building muscle effectively."}
                ></Content>
            <Content
                id={"electrolytes"}
                title={"Electrolytes"}
                content={"Electrolytes are vital minerals that can carry **electric charges** in the form of ions. They include sodium (Na+), potassium (K+), calcium (Ca2+), magnesium (Mg2+), chloride (Cl-), bicarbonate (HCO3-), and phosphate (PO4-), among others. Each mineral has their own unique function. However, the overall function is the same. They can hold and release an electrical charge, allowing for the **movement of energy** within your body.-.-When working out, your body depletes its electrolyte supply when **sweating**, so it is important to have a diverse and rich diet that includes these minerals. Another common method of replenishing your electrolytes are **energy drinks** and [/supplements/performance/pre-workout,pre-workout] mixtures. Most true energy drinks and [/supplements/performance/pre-workout,pre-workouts] contain these vital minerals, and they can boost your **hydration** and make it easier to replenish your electrolyte supply."}
                ></Content>
            <WarningBlock
                title={"Note"}
                content={"Some sport drinks are better than others, as the more sugar and artificial chemicals the worse. Drinks like Gatorade are not the best options, and alternatives like Propel or Zoa are better for you. That does not mean you should cut Gatorade out of your life, but be weary of the sugar."}
                ></WarningBlock>
        </div>
    );

    return (
        <ContentPage location={"Dieting"} title={"Basics"} currentTopic={"Dieting-Basics"}  description={<span className={"text-lg"}>Exercising and building muscle is a multifaceted process that involves not only dedicated strength training but also <b className={openSansBold.className}>proper nutrition</b>. While exercise stimulates muscle growth, diet plays a fundamental role in providing the necessary nutrients and energy for this process.</span>} content={content}></ContentPage>
    )
}