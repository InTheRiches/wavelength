export default function Footer({ darkBG = "neutral-900" }) {
    return <footer className={`bg-cyan-accent dark:bg-${darkBG} text-neutral-900 dark:text-slate-50 py-4`}>
        <div className="flex items-center justify-center text-center">
            <p>&copy; 2023 Wavelength. All rights reserved.</p>
        </div>
    </footer>
}