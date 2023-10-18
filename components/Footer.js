export default function Footer({ darkBG = "neutral-900" }) {
    return <>
        <footer className={`bg-cyan-accent rounded-3xl dark:bg-${darkBG} text-slate-50 py-2 px-4 mb-8 shadow-button dark:shadow-none`}>
            <div className="flex items-center justify-center text-center">
                <p>&copy; 2023 Wavelength. All rights reserved.</p>
                
                <a href={"/privacy"} className={"hover:underline ml-2 text-cyan-accent dark:text-black"}>Privacy Policy</a>
            </div>
        </footer>
    </>
}