import React from "react";
import {useRouter} from "next/router";

export default function useReactPath() {
    const router = useRouter();

    const [path, setPath] = React.useState(router.pathname);
    const listenToPopstate = () => {
        const winPath = router.pathname;
        setPath(winPath);
    };
    React.useEffect(() => {
        window.addEventListener("popstate", listenToPopstate);
        return () => {
            window.removeEventListener("popstate", listenToPopstate);
        };
    }, []);
    return path;
};