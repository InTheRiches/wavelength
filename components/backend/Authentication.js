import {getCookie, hasCookie} from "cookies-next";
import {useEffect, useState} from "react";

export function loginUser() {
    const [user, setUser] = useState({});

    useEffect(() => {
        if (!hasCookie("accessToken") || !hasCookie("id")) {
            setUser({"notSignedIn": true});
            return;
        }
        const loadUserData = async () => {
            const token = getCookie("accessToken");
            const id = getCookie("id");

            console.log("id: " + id)

            if (token && id) {
                await fetch('/api/user/login', {
                    method: 'POST',
                    body: JSON.stringify({id: id, accessToken: token}),
                }).then(res => {
                    if (res.ok || res.status !== 403) {
                        res.json().then(json => {
                            return setUser(json.user);
                        });

                        return;
                    }

                    setUser({"notSignedIn": true});

                    // error, do whatever to signal wrong information
                    console.log("error")
                });
            }
            if (user.length === 0)
                setUser({"notSignedIn": true});
        };

        loadUserData();
    }, []);

    return user;
}