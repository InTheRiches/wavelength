import { useState } from 'react';

export default function Collapsible(normal = false) {
    const [isCollapsed, setIsCollapsed] = useState(normal);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return [isCollapsed, toggleCollapse];
}