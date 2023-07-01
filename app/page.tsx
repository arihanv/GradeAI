import "./page.css";
import Typing from "@/components/ui/typing";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Github } from "lucide-react";
import YoutubeVideo from "@/components/ytvid";

export default function page() {
  return (
    <div className="flex flex-col w-full items-start justify-center gap-10">
      <div className="py-10 flex flex-col">
        <div className="whitespace-pre">
          <Typing />
        </div>
        <div className="flex flex-col gap-4">
        <div className="flex px-3 gap-5">
          <Link href="/essay" className={buttonVariants()}>
            Get Started
          </Link>
          <Link href="https://github.com/orgs/GradeAI/repositories" target="_" className={buttonVariants()}>
            <Github size={20} />
          </Link>
        </div>
        <div className="px-3">
        <div className="px-2 py-0.5 font-semibold border bg-gray-800 w-fit rounded-xl">Made by Arihan, Neil, Ian, and Ibrahim</div>
        </div>
        </div>
      </div>
      <div className="w-full">
        <hr></hr>
      </div>
      <div className="w-full flex justify-center text-4xl font-bold tracking-tight flex-col items-center gap-5">
       Features
       <div className="flex gap-10">
        <div className="flex gap-8">
          <div className="text-base font-normal tracking-normal flex-1 border bg-darkpaco p-4 rounded-xl">
          It can accept rubrics provided by the teacher to guide the grading system. This not only makes it less unlikely for grades to be completely random but also helps stay true to the rubric when evaluating the paper.
          </div>
          <div className="text-base font-normal tracking-normal flex-1 border bg-darkpaco p-4 rounded-xl">
          It can accept rubrics provided by the teacher to guide the grading system. This not only makes it less unlikely for grades to be completely random but also helps stay true to the rubric when evaluating the paper.
          </div>
          <div className="text-base font-normal tracking-normal flex-1 border bg-darkpaco p-4 rounded-xl">
          It can accept rubrics provided by the teacher to guide the grading system. This not only makes it less unlikely for grades to be completely random but also helps stay true to the rubric when evaluating the paper.
          </div>
       </div>
       </div>
      </div>
      <div className="w-full">
        <hr></hr>
      </div>
      <div className="w-full flex justify-center text-4xl font-bold tracking-tight flex-col items-center gap-5">
        Demo Video
        <div className="overflow-hidden rounded-2xl border-4 border-white shadow-sm shadow-white">
          {/* <YoutubeVideo /> */}
        </div>
      </div>
    </div>
  );
}
