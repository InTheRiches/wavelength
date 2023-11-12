export default function Custom404() {
    return (
        <div className="h-screen text-center flex flex-col items-center justify-center text-white bg-neutral-900">
            <div className="line-height-48">
                <h1 className="next-error-h1 dark:border-right-0 inline-block m-0 pr-10 px-23 text-24 font-semibold align-top border-r-1 border-white border-opacity-30">404</h1>
                <div className="inline-block ml-10">
                    <h2 className="text-14 font-normal line-height-28 text-slate-50">This page could not be found.</h2>
                </div>
            </div>
        </div>
    );
}