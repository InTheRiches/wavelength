import {getCookie, hasCookie} from "cookies-next";
import {useEffect, useState} from "react";

export function loginUser() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        if (!hasCookie("accessToken") || !hasCookie("id"))
            return;

        const loadUserData = async () => {
            const token = getCookie("accessToken");
            const id = getCookie("id");

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

                    // error, do whatever to signal wrong information
                    console.log("error")
                });
            }
        };

        loadUserData();
    }, []);

    return user;
}