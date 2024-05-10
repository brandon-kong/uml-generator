import { P } from "@/components/typography";

export default function Footer() {
    return (
        <div className={"absolute bottom-0 p-4"}>
            <div
                className={
                    "bg-background p-2 px-4 rounded-lg flex gap-6 items-center"
                }
            >
                <P className={"text-white text-center"}>© 2024 UML Editor</P>
                <P className={"text-white text-center"}>Terms of Service</P>
                <P className={"text-white text-center"}>Privacy Policy</P>
            </div>
        </div>
    );
}
