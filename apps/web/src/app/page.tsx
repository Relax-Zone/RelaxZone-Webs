"use client";

import { Button } from "@/components/ui/button";
import { User2 , DoorOpen } from "lucide-react"
import Link from "next/link";

export default function Home() {
	return (
		<div className="relative h-dvh w-dvw">
			<div className="absolute top-0 left-0 w-full h-full overflow-hidden">
				<div className="w-full h-full relative">
					<div className="bg-white/5 absolute top-0 left-0 w-full h-full z-10 backdrop-blur-2xl" />
					<div className="absolute -right-10 top-10 w-50 h-50 rounded-full bg-red-500" />
					<div className="absolute -bottom-10 -left-10 w-100 h-100 rounded-full bg-red-500" />
				</div>
			</div>
			<div className="absolute z-10 h-full w-full flex items-center justify-center">
				<div className="flex flex-col items-center">
					<h1 className="uppercase text-6xl font-bold mb-2"><span className="text-red-500">R</span>elax<span className="text-red-500">Z</span>one</h1>
					<p className="font-geist-mono uppercase py-1 px-2 rounded-sm bg-white border border-zinc-300 mb-6">Website is construction 🚧</p>
					<div className="flex items-center gap-2">
						<Button variant={"secondary"} size={"lg"} className="hover:cursor-not-allowed"><User2 /> Login to Website</Button>
						<Link href={"https://discord.gg/DcFpttB"} target="_blank">
						 <Button className="bg-red-500" size={"lg"}><DoorOpen /> Join Server!</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
