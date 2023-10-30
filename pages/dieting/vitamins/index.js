import Content from '@/components/Content'
import ContentPage from '@/components/ContentPage';

export default function DietingVitamins({}) {
    const content = (
        <div className="w-full max-w-5xl flex-col">
            {/* Topics */}
            <Content
                id={"terminology"}
                title={"Terminology"}
                bulletPoints={{
                    "Macromineral": "A mineral that is required in relatively large quantities within the diet.",
                }}
                ></Content>
            <Content
                id={"metals"}
                title={"Metals"}
                content={"**Iron**: Iron is crucial for oxygen transport and energy production, both of which are vital for muscle function and growth. Iron-rich foods include lean meats, poultry, fish, legumes, spinach, and fortified cereals.-.-**Zinc**: Zinc plays a huge role in hundreds of different enzyme processes, including the immune system and brain function. Zinc provides support during **protein synthesis**, and is one of the materials used in the structure of important proteins. Adequate dietary intake of zinc is essential for proper growth throughout your life, and is required for the **development of immune cells**. Inside the brain, zinc ions inhibit N-methyl-D-aspartate (NMDA) receptors, which are related to  **feeling depressed**. This means that a lack of zinc can increase feelings of depression and other similar conditions.-.-**Magnesium**: Magnesium is essential for daily life, and is among the most abundant minerals in the body. It is required for energy (ATP) production, and helps maintain DNA and chromatin stability. Magnesium is an essential cofactor is almost every process relating to DNA processing. It is utilized to both synthesis and repair DNA bases, and is also used to remove mutated DNA, helping to fight cancer (before it starts). Inadequate intake of magnesium has been correlated to decreased brain function, increased susceptibility to cardiovascular disease, and accelerated aging. ([https://pubmed.ncbi.nlm.nih.gov/11295157/,Hartwig, 2001])"}
                ></Content>
            <Content
                id={"vitamins"}
                title={"Vitamins"}
                content={"**Vitamin D**: Vitamin D plays an important role in muscle function and growth. It helps regulate muscle strength and helps your body digest calcium, which is required for bone health. Sun exposure is a natural source of vitamin D, but it can also be obtained from fortified dairy products, fatty fish, and supplements.-.-**Vitamin C**: Vitamin C is a common and essential vitamin. The human body cannot synthesize vitamin C on its own, and requires dietary supplementation. Vitamin C is a critical component in the maintenance of collagen networks within tissues. This includes connective tissue which provide support for your muscles. It also has antioxidant properties that may aid in reducing exercise-induced muscle damage. Citrus fruits, berries, kiwi, and bell peppers are rich in vitamin C.-.-**Calcium**: Calcium, a **macromineral**, is used primarily to support bone health. Despite it's attachment to strong bones, it is essential for muscle contraction. When your brain sends the \"go\" signal to your muscles, calcium floods into strands of cells in your muscle fibers. The calcium reacts, and almost instantly causes the strand to contract, moving the whole muscle.[https://www.ncbi.nlm.nih.gov/books/NBK482128/,Yu et al., 2023]) Dairy products (like milk), leafy green vegetables, and fortified plant-based milk alternatives are good sources of calcium."}
                ></Content>
        </div>
    );

    return (
        <ContentPage title={"Vitamins"} description={<span>While there are tons of various vitamins, only a few are vital for muscle growth and activation. These include, Vitamin D and C, Calcium, Zinc, Iron, and Magnesium.</span>} content={content}></ContentPage>
    )
}