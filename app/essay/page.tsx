"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import Submit from "./submit";
import { MouseEventHandler } from "react";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import {
  rubricAtom,
  courseAtom,
  instructionsAtom,
  essayAtom,
} from "@/app/sharedState";

export default function Home() {
  // const [essayAct, setEssayAct] = useState<any>(undefined);
  const [course, setCourse] = useAtom<string>(courseAtom);
  const [essayValue, setEssayValue] = useAtom<string>(essayAtom);
  const [instructions, setInstructions] = useAtom<string>(instructionsAtom);

  let rubric = `| Traits                                             | 1                                                                                                                                                                                       | 2                                                                                                                                                                                             | 3                                                                                                                                                                                               | 4                                                                                                                                                                                                 |
  |----------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
  | Focus & Details                                    | There is one clear, well- focused topic. Main ideas are clear and are well supported by detailed and accurate information.                                                              | There is one clear, well- focused topic. Main ideas are clear but are not well supported by detailed information.                                                                             | There is one topic. Main ideas are somewhat clear.                                                                                                                                              | The topic and main ideas are not clear.                                                                                                                                                           |
  | Organization                                       | The introduction is inviting, states the main topic, and provides an overview of the paper. Information is relevant and presented in a logical order. The conclusion is strong.         | The introduction states the main topic and provides an overview of the paper. A conclusion is included.                                                                                       | The introduction states the main topic. A conclusion is included.                                                                                                                               | There is no clear introduction, structure, or conclusion.                                                                                                                                         |
  | Voice                                              | The author’s purpose of writing is very clear, and there is strong evidence of attention to audience. The author’s extensive knowledge and/or experience with the topic is/are evident. | The author’s purpose of writing is somewhat clear, and there is some evidence of attention to audience. The author’s knowledge and/or experience with the topic is/are evident.               | The author’s purpose of writing is somewhat clear, and there is evidence of attention to audience. The author’s knowledge and/or experience with the topic is/are limited.                      | The author’s purpose of writing is unclear.                                                                                                                                                       |
  | Word Choice                                        | The author uses vivid words and phrases. The choice and placement of words seems accurate, natural, and not forced.                                                                     | The author uses vivid words and phrases. The choice and placement of words is inaccurate at times and/or seems overdone.                                                                      | The author uses words that communicate clearly, but the writing lacks variety.                                                                                                                  | The writer uses a limited vocabulary. Jargon or clichés may be present and detract from the meaning.                                                                                              |
  | Sentence Structure, Grammar, Mechanics, & Spelling | All sentences are well constructed and have varied structure and length. The author makes no errors in grammar, mechanics, and/or spelling.                                             | Most sentences are well constructed and have varied structure and length. The author makes a few errors in grammar, mechanics, and/or spelling, but they do not interfere with understanding. | Most sentences are well constructed, but they have a similar structure and/or length. The author makes several errors in grammar, mechanics, and/or spelling that interfere with understanding. | Sentences sound awkward, are distractingly repetitive, or are difficult to understand. The author makes numerous errors in grammar, mechanics, and/or spelling that interfere with understanding. |`;

  return (
    <div className="w-full">
      <div className="flex flex-col gap-2">
        <Textarea
          value={essayValue}
          //@ts-ignore
          onChange={(e) => setEssayValue(e.target.value)}
          className="min-h-[80vh] resize-noneg text-2xl"
          autoFocus
          placeholder="Start writing here..."
        ></Textarea>
        <Submit
          studentEssay={essayValue}
          rubricInformation={rubric}
          courseInformation={course}
          assignmentInstructions={instructions}
        />
      </div>
    </div>
  );
}
