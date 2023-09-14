export default function Footer({ darkBG = "neutral-900" }) {
    return <footer className={`bg-cyan-accent rounded-3xl dark:bg-${darkBG} text-slate-50 py-1 px-3 mb-4 shadow-button dark:shadow-none`}>
        <div className="flex items-center justify-center text-center">
            <p>&copy; 2023 Wavelength. All rights reserved.</p>
        </div>
    </footer>
}