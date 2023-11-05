export default function InformationBlock({ title, content }) {
    if (!title)
        title = "Note";
    return (
        <div>
            <div className="flex rounded-md border-1 border-sky-500 p-4 dark:bg-blue-500 dark:bg-opacity-5 text-sky-600 dark:text-sky-500 bg-blue-50"> {/* dark:bg-blue-500 */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                     className="mr-3 mt-1 h-5 w-5 flex-shrink-0">
                    <path fillRule="evenodd"
                          d="M19 10.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0zM8.25 9.75A.75.75 0 019 9h.253a1.75 1.75 0 011.709 2.13l-.46 2.066a.25.25 0 00.245.304H11a.75.75 0 010 1.5h-.253a1.75 1.75 0 01-1.709-2.13l.46-2.066a.25.25 0 00-.245-.304H9a.75.75 0 01-.75-.75zM10 7a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"/>
                </svg>
                <div className={"w-full min-[424px]:text-lg"}>
                    <h4 className="font-bold text-left">{title}</h4>
                    <div className="mt-1 text-left" dangerouslySetInnerHTML={{__html: content}}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export function WarningBlock({ title, content }) {
    if (!title)
        title = "Warning";
    return (
        <div>
            <div className="flex rounded-md border-1 border-yellow-200 bg-yellow-50 dark:bg-black dark:bg-opacity-20 p-4 min-[424px]:text-md text-lg text-yellow-500 dark:text-yellow-200">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-3 mt-1.5 h-5 w-5 flex-shrink-0">
                    <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                <div className={"w-full"}>
                    <h4 className="font-bold text-left">{title}</h4>
                    <div className="mt-1 text-left">
                        {content}
                    </div>
                </div>
            </div>
        </div>
    )
}