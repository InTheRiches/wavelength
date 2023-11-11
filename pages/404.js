export default function Custom404() {
    return (
        <div className="h-screen text-center flex flex-col items-center justify-center">
            <div className="line-height-48">
                <style>
                    {`
              body {
                color: #fff;
                background: #000;
              }
              .next-error-h1 {
                border-right: 1px solid rgba(255, 255, 255, 0.3);
              }
          `}
                </style>
                <h1 className="next-error-h1 dark:border-right-0 inline-block m-0 pr-10 px-23 text-24 font-semibold align-top">404</h1>
                <div className="inline-block ml-10">
                    <h2 className="text-14 font-normal line-height-28 text-slate-50">This page could not be found.</h2>
                </div>
            </div>
        </div>
    );
}