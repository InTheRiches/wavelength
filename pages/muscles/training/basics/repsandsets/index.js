import Content from '@/components/Content'
import {scroll} from "@/components/ContentScroll";
import ContentPage from '@/components/ContentPage';
import {useRouter} from "next/router";

export default function RepsAndSets({}) {
    const router = useRouter();

    const content = (
        <div className="w-full max-w-5xl flex-col">
            <div className={"w-full px-4 border-1 border-neutral-700 rounded-md"}>
                <table className="table-auto w-full">
                    <thead>
                    <tr className={"border-b-1 border-neutral-700"}>
                        <th className={"py-2 text-left"}>Training Type</th>
                        <th className={"py-2 text-left"}>Reps / Sets</th>
                        <th className={"py-2 text-left"}>Rest Times</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className={"border-b-1 border-neutral-700 py-2 flex flex-row items-center"}>Strength <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" className={"ml-2 hover:cursor-pointer"} onClick={() => router.push("/muscles/training/strength").then(() => scroll())}><path className={"fill-cyan-accent"} d="M400 255.4V240 208c0-8.8-7.2-16-16-16H352 336 289.5c-50.9 0-93.9 33.5-108.3 79.6c-3.3-9.4-5.2-19.8-5.2-31.6c0-61.9 50.1-112 112-112h48 16 32c8.8 0 16-7.2 16-16V80 64.6L506 160 400 255.4zM336 240h16v48c0 17.7 14.3 32 32 32h3.7c7.9 0 15.5-2.9 21.4-8.2l139-125.1c7.6-6.8 11.9-16.5 11.9-26.7s-4.3-19.9-11.9-26.7L409.9 8.9C403.5 3.2 395.3 0 386.7 0C367.5 0 352 15.5 352 34.7V80H336 304 288c-88.4 0-160 71.6-160 160c0 60.4 34.6 99.1 63.9 120.9c5.9 4.4 11.5 8.1 16.7 11.2c4.4 2.7 8.5 4.9 11.9 6.6c3.4 1.7 6.2 3 8.2 3.9c2.2 1 4.6 1.4 7.1 1.4h2.5c9.8 0 17.8-8 17.8-17.8c0-7.8-5.3-14.7-11.6-19.5l0 0c-.4-.3-.7-.5-1.1-.8c-1.7-1.1-3.4-2.5-5-4.1c-.8-.8-1.7-1.6-2.5-2.6s-1.6-1.9-2.4-2.9c-1.8-2.5-3.5-5.3-5-8.5c-2.6-6-4.3-13.3-4.3-22.4c0-36.1 29.3-65.5 65.5-65.5H304h32zM72 32C32.2 32 0 64.2 0 104V440c0 39.8 32.2 72 72 72H408c39.8 0 72-32.2 72-72V376c0-13.3-10.7-24-24-24s-24 10.7-24 24v64c0 13.3-10.7 24-24 24H72c-13.3 0-24-10.7-24-24V104c0-13.3 10.7-24 24-24h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H72z"/></svg></td>
                        <td className={"border-b-1 border-neutral-700 py-2"}>3-6 / 2-4</td>
                        <td className={"border-b-1 border-neutral-700 py-2"}>1-5m</td>
                    </tr>
                    <tr>
                        <td className={"border-b-1 border-neutral-700 py-2 flex flex-row items-center"}>Hypertrophy <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" className={"ml-2 hover:cursor-pointer"} onClick={() => router.push("/muscles/training/hypertrophy").then(() => scroll())}><path className={"fill-cyan-accent"} d="M400 255.4V240 208c0-8.8-7.2-16-16-16H352 336 289.5c-50.9 0-93.9 33.5-108.3 79.6c-3.3-9.4-5.2-19.8-5.2-31.6c0-61.9 50.1-112 112-112h48 16 32c8.8 0 16-7.2 16-16V80 64.6L506 160 400 255.4zM336 240h16v48c0 17.7 14.3 32 32 32h3.7c7.9 0 15.5-2.9 21.4-8.2l139-125.1c7.6-6.8 11.9-16.5 11.9-26.7s-4.3-19.9-11.9-26.7L409.9 8.9C403.5 3.2 395.3 0 386.7 0C367.5 0 352 15.5 352 34.7V80H336 304 288c-88.4 0-160 71.6-160 160c0 60.4 34.6 99.1 63.9 120.9c5.9 4.4 11.5 8.1 16.7 11.2c4.4 2.7 8.5 4.9 11.9 6.6c3.4 1.7 6.2 3 8.2 3.9c2.2 1 4.6 1.4 7.1 1.4h2.5c9.8 0 17.8-8 17.8-17.8c0-7.8-5.3-14.7-11.6-19.5l0 0c-.4-.3-.7-.5-1.1-.8c-1.7-1.1-3.4-2.5-5-4.1c-.8-.8-1.7-1.6-2.5-2.6s-1.6-1.9-2.4-2.9c-1.8-2.5-3.5-5.3-5-8.5c-2.6-6-4.3-13.3-4.3-22.4c0-36.1 29.3-65.5 65.5-65.5H304h32zM72 32C32.2 32 0 64.2 0 104V440c0 39.8 32.2 72 72 72H408c39.8 0 72-32.2 72-72V376c0-13.3-10.7-24-24-24s-24 10.7-24 24v64c0 13.3-10.7 24-24 24H72c-13.3 0-24-10.7-24-24V104c0-13.3 10.7-24 24-24h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H72z"/></svg></td>
                        <td className={"border-b-1 border-neutral-700 py-2"}>8-12 / 2-4</td>
                        <td className={"border-b-1 border-neutral-700 py-2"}>1-3m</td>
                    </tr>
                    <tr>
                        <td className={"py-2 flex flex-row items-center"}>Endurance <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" className={"ml-2 hover:cursor-pointer"} onClick={() => router.push("/muscles/training/endurance").then(() => scroll())}><path className={"fill-cyan-accent"} d="M400 255.4V240 208c0-8.8-7.2-16-16-16H352 336 289.5c-50.9 0-93.9 33.5-108.3 79.6c-3.3-9.4-5.2-19.8-5.2-31.6c0-61.9 50.1-112 112-112h48 16 32c8.8 0 16-7.2 16-16V80 64.6L506 160 400 255.4zM336 240h16v48c0 17.7 14.3 32 32 32h3.7c7.9 0 15.5-2.9 21.4-8.2l139-125.1c7.6-6.8 11.9-16.5 11.9-26.7s-4.3-19.9-11.9-26.7L409.9 8.9C403.5 3.2 395.3 0 386.7 0C367.5 0 352 15.5 352 34.7V80H336 304 288c-88.4 0-160 71.6-160 160c0 60.4 34.6 99.1 63.9 120.9c5.9 4.4 11.5 8.1 16.7 11.2c4.4 2.7 8.5 4.9 11.9 6.6c3.4 1.7 6.2 3 8.2 3.9c2.2 1 4.6 1.4 7.1 1.4h2.5c9.8 0 17.8-8 17.8-17.8c0-7.8-5.3-14.7-11.6-19.5l0 0c-.4-.3-.7-.5-1.1-.8c-1.7-1.1-3.4-2.5-5-4.1c-.8-.8-1.7-1.6-2.5-2.6s-1.6-1.9-2.4-2.9c-1.8-2.5-3.5-5.3-5-8.5c-2.6-6-4.3-13.3-4.3-22.4c0-36.1 29.3-65.5 65.5-65.5H304h32zM72 32C32.2 32 0 64.2 0 104V440c0 39.8 32.2 72 72 72H408c39.8 0 72-32.2 72-72V376c0-13.3-10.7-24-24-24s-24 10.7-24 24v64c0 13.3-10.7 24-24 24H72c-13.3 0-24-10.7-24-24V104c0-13.3 10.7-24 24-24h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H72z"/></svg></td>
                        <td className={"py-2"}>12-30 / 2-4</td>
                        <td className={"py-2"}>1-3m</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            {/* Topics */}
            <Content
                id={"reps-and-sets"}
                title="Reps And Sets"
                content='**Rep:** A repetition, or "rep" for short, is one **complete** movement of an exercise. For example, if you perform one bicep curl, that would be considered one rep of the exercise. Reps are typically numbered and tracked, and are often performed in a range of repetitions depending on the desired outcome. For example, lower reps (typically 1-5 reps) are often used for building [/muscles/training/strength,strength], while higher reps (10-15 reps or more) are used for achieving [/muscles/training/hypertrophy,hypertrophy] (muscle growth).-.-**Set:** A set on the other hand is a group of **consecutive** reps performed **without rest**. For example, if you do 10 bicep curls in a row without stopping, that would be considered one set of bicep curls. The number of sets performed for each exercise will depend on your fitness goals and training program. For example, if your goal is [/muscles/training/strength,strength], you may perform fewer sets of heavier weights, while if your goal is [/muscles/training/hypertrophy,hypertrophy], you may perform more sets of lighter weights.' // TODO - Add links for those styles of training (add links elsewhere, like for the supplements and diets for the training styles)
            ></Content>
            <Content
                id={"rest-times"}
                title="Rest Times"
                content={"Rest times are an important part of weight lifting. During rest times, your body has the opportunity to **recover** and **restore** its energy levels so that you can perform your next set with the appropriate level of **intensity**. The length of the rest time can vary based on the specific exercise being performed, your level of fitness, your goals, and the intensity of your workout.-.-During rest time, you can use techniques such as **deep breathing**, **stretching**, and **hydration** to help your body recover more quickly. It's important to use your rest time effectively to ensure that you're able to perform each set with proper **form** and **intensity**, without risking injury or **overtraining**.-.-Research ([https://doi.org/10.1519/00124278-200711000-00060,García-López et al., 2007]) found that there were significant differences in **fatigue** and **force produced** depending on rest times. **Shorter rests** (1-2min) showed to significantly decrease fatigue and increase force produced (average repetition velocity) in the succeeding set compared to a **longer set** (3-5min).-.-Another study ([https://www.proquest.com/scholarly-journals/effect-inter-set-rest-intervals-on-resistance/docview/1651368912/se-2,Henselmans et al., 2014]) found **no superior long term muscle growth** in the shorter compared with the longer rest interval. They also confirmed that you don't need different rest times for hypertrophy and strength, and there is no longer term benefit of either. In conclusion, shorter rest times can **decrease fatigue** and **increase velocity** of the succeeding movement, and provides no significant impact on muscle growth compared to longer rest times.-.-Rest time can be a critical component of your workout, as it can impact your performance and overall results. Proper rest time can help you avoid injury and achieve your desired fitness goals more efficiently. Remember to listen to your body and adjust your rest time as necessary to optimize your workouts."}
            ></Content>
        </div>
    )

    return (
        <ContentPage title={"Reps and Sets"} description={<span>The basics of weight training are simple and crucial to building muscle. Understanding the basics of tracking movements and learning how to consistently perform the exercise in a repeatable manner is extremely important.</span>} content={content}></ContentPage>
    )
}