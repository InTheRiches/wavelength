import Content from "@/components/Content";
import ContentPage from "@/components/ContentPage";

export default function DietBasics({}) {
    const content = (
        <div className="w-full max-w-5xl flex-col">
            {/* Topics */}
            <Content
                id={"calorie-surplus"}
                title={"Calorie Surplus"}
                content={"A **calorie surplus** is essential to muscle growth. Consuming more calories than you burn is vital, as it provides **extra-energy** required for muscle growth. By consuming an **additional 250-500 calories**, individuals can adequately support muscle development. During a calorie surplus you might get a little fat growth, but most will be muscular. If you want muscle gain and fat gain, consider ---BULKING---. If you wish to lose fat at the slight cost of muscle growth, consider ---CUTTING---."}
            ></Content>
            <Content
                id={"protein"}
                title={"Protein Intake"}
                content={"Protein is the **building block** of muscles and its importance cannot be understated. When consumed, protein is broken down into **amino acids** and utilized to **repair** and **build muscle tissue**. It is recommended to consume around **0.7-1 gram** of protein per pound of body weight daily. **Lean** (low fat) meats like poultry, fish, and dairy are great sources of protein. There are also **plant based** options available such as peanuts and soy. The only thing to consider with plant based proteins is that they are most likely not **complete proteins**."}
            ></Content>
            <Content
                id={"complete-proteins"}
                title={"Complete Proteins"}
                content={"Proteins are made up of **amino acids**. In total, there are **20**, and your body makes **11 of them on its own**. In order to acquire the other 9, you need to eat food that contains them. If a food does not contain all 9 essential amino acids, it is considered **incomplete**, otherwise it is considered a **complete** protein. Things like nuts, vegetables and whole grains have incomplete proteins. All meats contain complete proteins, as their bodies required all 11 to function as well. "}
            ></Content>
            <Content
                id={"carbs"}
                title={"Carbohydrates (Carbs)"}
                content={`Carbohydrates are a vital **energy source** for intense workouts and play a crucial role in supporting muscle growth. They are your body's preferred energy source, and replenish glycogen stores in muscles, which are depleted during exercise. Additionally, carbohydrates help **spare protein** for muscle development, allowing it to be utilized for its primary purpose rather than as an energy source. There are two types of carbs, **simple** and **complex**.-.-Simple carbs (simple sugars) are composed up of **one or two sugar molecules**. They are typically found in **naturally sugary** foods, along with **processed** sweets. Simple sugars provide a **short release** of energy, but lack necessary nutrients such as **fiber**. Consuming excessive amounts of simple carbs can contribute to **weight gain** and an increased risk of chronic health conditions like **type 2 diabetes** and **heart disease**.-.-Complex carbohydrates are made up of longer chains of sugar molecules, and are **slower to digest**, providing a **steady and sustained** release of energy. They are often rich in dietary fiber, vitamins, minerals, and other nutrients, contributing to better overall health. Complex carbohydrates found in whole grains, fruits, vegetables, and legumes should be incorporated into the diet to ensure **optimal muscle-building potential**.`}
            ></Content>

        </div>
    );

    return (
        <ContentPage location={"Diet"} title={"Basics"} description={<span className={"text-lg"}>Exercising and building muscle is a multifaceted process that involves not only dedicated strength training but also <b>proper nutrition</b>. While exercise stimulates muscle growth, diet plays a fundamental role in providing the necessary nutrients and energy for this process.</span>} currentTopic={"Diet-Basics"} content={content}></ContentPage>
    )
}