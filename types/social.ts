import { ReactNode } from "react";

export type SocialConnection = {
    name: string;
    link: {
        href: string;
        name: string;
    };
    icon: ReactNode;
}