import {scrollPageToContent} from "@/components/ContentScroll";
import {useRouter} from "next/router";
import handleClick from "@/components/HandleClick";

export default function BulletPoints({bulletPoints}) {
    const router = useRouter();
    // link regex
    const regex = /\[([^\]]+)\]\(([^)]+)\)/g;

    return (
        <ul className="markerColor sm:ml-0 ml-3 min-[424px]:text-lg text-md list-outside mt-6 list-disc lg:gap-x-16 lg:grid lg:grid-cols-2 h-min w-full">
            {
                bulletPoints.map((bulletPoint, index) => {
                    return (
                        <li key={index} className="mb-8 pl-2 h-min">
                            {bulletPoint.title && <strong className="block dark:text-slate-50 mb-1 min-[424px]:text-xl text-lg">{
                                bulletPoint.title.match(/\[([^\]]+)\]\(([^)]+)\)/g) ?
                                    <span className="inline">
                                        {bulletPoint.title.replace(regex, "")}
                                        <svg onClick={() => {
                                            handleClick(/\[([^\]]+)\]\(([^)]+)\)/g.exec(bulletPoint.title)[2], router);
                                        }} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" className="ml-2 hover:cursor-pointer inline mb-1">
                                            <path className="fill-cyan-accent"
                                                  d="M400 255.4V240 208c0-8.8-7.2-16-16-16H352 336 289.5c-50.9 0-93.9 33.5-108.3 79.6c-3.3-9.4-5.2-19.8-5.2-31.6c0-61.9 50.1-112 112-112h48 16 32c8.8 0 16-7.2 16-16V80 64.6L506 160 400 255.4zM336 240h16v48c0 17.7 14.3 32 32 32h3.7c7.9 0 15.5-2.9 21.4-8.2l139-125.1c7.6-6.8 11.9-16.5 11.9-26.7s-4.3-19.9-11.9-26.7L409.9 8.9C403.5 3.2 395.3 0 386.7 0C367.5 0 352 15.5 352 34.7V80H336 304 288c-88.4 0-160 71.6-160 160c0 60.4 34.6 99.1 63.9 120.9c5.9 4.4 11.5 8.1 16.7 11.2c4.4 2.7 8.5 4.9 11.9 6.6c3.4 1.7 6.2 3 8.2 3.9c2.2 1 4.6 1.4 7.1 1.4h2.5c9.8 0 17.8-8 17.8-17.8c0-7.8-5.3-14.7-11.6-19.5l0 0c-.4-.3-.7-.5-1.1-.8c-1.7-1.1-3.4-2.5-5-4.1c-.8-.8-1.7-1.6-2.5-2.6s-1.6-1.9-2.4-2.9c-1.8-2.5-3.5-5.3-5-8.5c-2.6-6-4.3-13.3-4.3-22.4c0-36.1 29.3-65.5 65.5-65.5H304h32zM72 32C32.2 32 0 64.2 0 104V440c0 39.8 32.2 72 72 72H408c39.8 0 72-32.2 72-72V376c0-13.3-10.7-24-24-24s-24 10.7-24 24v64c0 13.3-10.7 24-24 24H72c-13.3 0-24-10.7-24-24V104c0-13.3 10.7-24 24-24h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H72z"></path>
                                        </svg>
                                    </span>

                                    : bulletPoint.title }</strong>}
                            <span>{bulletPoint.description}</span>
                        </li>
                    )
                })
            }

            {/*<li className="mb-8 pl-2 h-min">*/}
            {/*    <strong className="text-xl dark:text-slate-50">*/}
            {/*        <span className="inline">*/}
            {/*            Repetition*/}
            {/*            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" className="ml-2 hover:cursor-pointer inline mb-1">*/}
            {/*               <path className="fill-cyan-accent"*/}
            {/*                     d="M400 255.4V240 208c0-8.8-7.2-16-16-16H352 336 289.5c-50.9 0-93.9 33.5-108.3 79.6c-3.3-9.4-5.2-19.8-5.2-31.6c0-61.9 50.1-112 112-112h48 16 32c8.8 0 16-7.2 16-16V80 64.6L506 160 400 255.4zM336 240h16v48c0 17.7 14.3 32 32 32h3.7c7.9 0 15.5-2.9 21.4-8.2l139-125.1c7.6-6.8 11.9-16.5 11.9-26.7s-4.3-19.9-11.9-26.7L409.9 8.9C403.5 3.2 395.3 0 386.7 0C367.5 0 352 15.5 352 34.7V80H336 304 288c-88.4 0-160 71.6-160 160c0 60.4 34.6 99.1 63.9 120.9c5.9 4.4 11.5 8.1 16.7 11.2c4.4 2.7 8.5 4.9 11.9 6.6c3.4 1.7 6.2 3 8.2 3.9c2.2 1 4.6 1.4 7.1 1.4h2.5c9.8 0 17.8-8 17.8-17.8c0-7.8-5.3-14.7-11.6-19.5l0 0c-.4-.3-.7-.5-1.1-.8c-1.7-1.1-3.4-2.5-5-4.1c-.8-.8-1.7-1.6-2.5-2.6s-1.6-1.9-2.4-2.9c-1.8-2.5-3.5-5.3-5-8.5c-2.6-6-4.3-13.3-4.3-22.4c0-36.1 29.3-65.5 65.5-65.5H304h32zM72 32C32.2 32 0 64.2 0 104V440c0 39.8 32.2 72 72 72H408c39.8 0 72-32.2 72-72V376c0-13.3-10.7-24-24-24s-24 10.7-24 24v64c0 13.3-10.7 24-24 24H72c-13.3 0-24-10.7-24-24V104c0-13.3 10.7-24 24-24h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H72z"></path>*/}
            {/*            </svg>*/}
            {/*        </span>*/}
            {/*    </strong>*/}
            {/*    <span>A repetition, or rep for short, is a single movement of an exercise. For example, a single push up is one repetition. A rep is the most basic form of measurement in weight lifting.</span>*/}
            {/*</li>*/}
            {/*<li className="mb-8 pl-2 h-min">*/}
            {/*    <strong className="text-xl dark:text-slate-50 mb-1">*/}
            {/*        <span className="inline">*/}
            {/*            Set*/}
            {/*            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"*/}
            {/*                 className="ml-2 hover:cursor-pointer inline mb-1">*/}
            {/*               <path className="fill-cyan-accent"*/}
            {/*                     d="M400 255.4V240 208c0-8.8-7.2-16-16-16H352 336 289.5c-50.9 0-93.9 33.5-108.3 79.6c-3.3-9.4-5.2-19.8-5.2-31.6c0-61.9 50.1-112 112-112h48 16 32c8.8 0 16-7.2 16-16V80 64.6L506 160 400 255.4zM336 240h16v48c0 17.7 14.3 32 32 32h3.7c7.9 0 15.5-2.9 21.4-8.2l139-125.1c7.6-6.8 11.9-16.5 11.9-26.7s-4.3-19.9-11.9-26.7L409.9 8.9C403.5 3.2 395.3 0 386.7 0C367.5 0 352 15.5 352 34.7V80H336 304 288c-88.4 0-160 71.6-160 160c0 60.4 34.6 99.1 63.9 120.9c5.9 4.4 11.5 8.1 16.7 11.2c4.4 2.7 8.5 4.9 11.9 6.6c3.4 1.7 6.2 3 8.2 3.9c2.2 1 4.6 1.4 7.1 1.4h2.5c9.8 0 17.8-8 17.8-17.8c0-7.8-5.3-14.7-11.6-19.5l0 0c-.4-.3-.7-.5-1.1-.8c-1.7-1.1-3.4-2.5-5-4.1c-.8-.8-1.7-1.6-2.5-2.6s-1.6-1.9-2.4-2.9c-1.8-2.5-3.5-5.3-5-8.5c-2.6-6-4.3-13.3-4.3-22.4c0-36.1 29.3-65.5 65.5-65.5H304h32zM72 32C32.2 32 0 64.2 0 104V440c0 39.8 32.2 72 72 72H408c39.8 0 72-32.2 72-72V376c0-13.3-10.7-24-24-24s-24 10.7-24 24v64c0 13.3-10.7 24-24 24H72c-13.3 0-24-10.7-24-24V104c0-13.3 10.7-24 24-24h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H72z"></path>*/}
            {/*            </svg>*/}
            {/*        </span>*/}
            {/*    </strong>*/}
            {/*    <span>A set is a group of repetitions. For example, a set would be 10 push ups performed in succession. If the reps were not performed in succession, it would typically not be a set.</span>*/}
            {/*</li>*/}
            {/*<li className="mb-8 pl-2 h-min">*/}
            {/*    <strong className="text-xl dark:text-slate-50 mb-1">Weight</strong>*/}
            {/*    <span>Weight refers to the amount of resistance used in an exercise. This can be in the form of dumbbells, barbells, or even body weight.</span>*/}
            {/*</li>*/}
            {/*<li className="mb-8 pl-2 h-min">*/}
            {/*    <strong className="text-xl dark:text-slate-50 mb-1">*/}
            {/*        <span className="inline">*/}
            {/*            Volume*/}
            {/*            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"*/}
            {/*                 className="ml-2 hover:cursor-pointer inline mb-1">*/}
            {/*               <path className="fill-cyan-accent"*/}
            {/*                     d="M400 255.4V240 208c0-8.8-7.2-16-16-16H352 336 289.5c-50.9 0-93.9 33.5-108.3 79.6c-3.3-9.4-5.2-19.8-5.2-31.6c0-61.9 50.1-112 112-112h48 16 32c8.8 0 16-7.2 16-16V80 64.6L506 160 400 255.4zM336 240h16v48c0 17.7 14.3 32 32 32h3.7c7.9 0 15.5-2.9 21.4-8.2l139-125.1c7.6-6.8 11.9-16.5 11.9-26.7s-4.3-19.9-11.9-26.7L409.9 8.9C403.5 3.2 395.3 0 386.7 0C367.5 0 352 15.5 352 34.7V80H336 304 288c-88.4 0-160 71.6-160 160c0 60.4 34.6 99.1 63.9 120.9c5.9 4.4 11.5 8.1 16.7 11.2c4.4 2.7 8.5 4.9 11.9 6.6c3.4 1.7 6.2 3 8.2 3.9c2.2 1 4.6 1.4 7.1 1.4h2.5c9.8 0 17.8-8 17.8-17.8c0-7.8-5.3-14.7-11.6-19.5l0 0c-.4-.3-.7-.5-1.1-.8c-1.7-1.1-3.4-2.5-5-4.1c-.8-.8-1.7-1.6-2.5-2.6s-1.6-1.9-2.4-2.9c-1.8-2.5-3.5-5.3-5-8.5c-2.6-6-4.3-13.3-4.3-22.4c0-36.1 29.3-65.5 65.5-65.5H304h32zM72 32C32.2 32 0 64.2 0 104V440c0 39.8 32.2 72 72 72H408c39.8 0 72-32.2 72-72V376c0-13.3-10.7-24-24-24s-24 10.7-24 24v64c0 13.3-10.7 24-24 24H72c-13.3 0-24-10.7-24-24V104c0-13.3 10.7-24 24-24h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H72z"></path>*/}
            {/*            </svg>*/}
            {/*        </span>*/}
            {/*    </strong>*/}
            {/*    <span>Volume refers to the total amount of work performed during a workout. It is a combination of the number of sets, repetitions, and weight or resistance used in an exercise.</span>*/}
            {/*</li>*/}
            {/*<li className="mb-8 pl-2 h-min">*/}
            {/*    <strong className="text-xl dark:text-slate-50 mb-1">1RM</strong>*/}
            {/*    <span>1RM, or one rep max, is the maximum amount of weight you can lift for a single repetition of an exercise. It is used to determine the amount of weight you should use for a given exercise. It is important you accurately track this, and make sure you are at true muscular failure.</span>*/}
            {/*</li>*/}
        </ul>
    )
}