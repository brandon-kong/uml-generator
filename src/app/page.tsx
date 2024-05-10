import Hero from "@/components/layout/landing/hero";
import LoadingScreen from "@/components/screens/loading";
import { H2, LandingH1, P } from "@/components/typography";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <div
                className={
                    "absolute top-0 left-0 h-screen w-full -z-10 opacity-60"
                }
            >
                <Image
                    src={"/backgrounds/gradient.png"}
                    fill
                    alt="background"
                    className={"w-full"}
                />
            </div>

            <div className="flex items-start justify-center w-full gap-8">
                <div className={"flex flex-col gap-2 max-w-md w-full"}>
                    <LandingH1>UML Editor</LandingH1>
                    <P className={"text-muted-foreground"}>
                        Create and share UML diagrams with ease. All you need is
                        your code. No sign up required. Isn&apos;t that cool?
                    </P>

                    <div className={"flex gap-4 mt-6"}>
                        <Button variant={"default"}>Get Started</Button>
                        <Button variant={"secondary"}>Learn More</Button>
                    </div>
                </div>

                <div className={"max-w-lg space-y-2 w-full relative"}>
                    <div
                        className={
                            "w-full flex gap-4 bg-neutral-300 text-neutral-950 p-2 justify-center rounded-lg"
                        }
                    >
                        <P>
                            Paste your class code here to generate a UML
                            diagram.
                        </P>
                    </div>

                    <Hero />
                </div>
            </div>
        </main>
    );
}
