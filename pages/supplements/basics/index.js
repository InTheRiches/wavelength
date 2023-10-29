import Content from '@/components/Content'
import ContentPage from '@/components/ContentPage';

export default function SupplementBasics({}) {
    const content = (
        <div className="w-full max-w-5xl flex-col">
            {/* First Topic */}
            <Content
                title="Why Supplements?"
                content="Supplements are products, typically powders, that athletes consume to enhance their body's **performance**. Supplements are a easy and convient way to get nutrients and ingrediants that might be difficult to achieve through dieting. They also can also increase muscle **strength** and **endurance**, allowing athletes to push harder during their workouts."
            ></Content>
        </div>
    );

    return (
        <ContentPage title={"Basics"} description={<span className={"text-lg mb-2"}>Supplements are products that are designed to enhance physical performance throughout life, especially during exercise or athletic activities. There are several types of supplements available, each with its specific uses.</span>} content={content}></ContentPage>
    )
}