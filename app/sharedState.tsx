import { atom } from "jotai";
//set processing for pdf and chat
export const rubricAtom = atom("");

export const feedbackAtom = atom("Submit Essay for Feedback");

export const instructionsAtom = atom(`
Select a topic: Choose a specific and engaging topic that aligns with the course objectives. Ensure that your topic is manageable and allows for in-depth analysis within the given word limit.

Conduct research: Gather relevant and reliable sources to support your arguments and provide evidence for your essay. Use a combination of academic journals, books, reputable websites, and other credible sources.

Develop a thesis statement: Craft a clear and concise thesis statement that presents your main argument or claim. This statement should guide the entire essay and provide a roadmap for your readers.

Outline your essay: Create a structured outline that includes an introduction, body paragraphs, and a conclusion. Organize your ideas logically and ensure smooth transitions between paragraphs.

Write the introduction: Begin with a captivating hook to grab the reader's attention. Provide background information on the topic and introduce your thesis statement in a compelling manner.

Compose body paragraphs: Present your arguments and supporting evidence in separate paragraphs. Start each paragraph with a topic sentence that relates to your thesis statement and provides a clear focus. Use appropriate examples and analysis to strengthen your arguments.

Write the conclusion: Summarize your main points and restate your thesis statement in a concise manner. Leave the reader with a lasting impression and potentially suggest avenues for further research or exploration.

Proofread and revise: Review your essay for grammatical, spelling, and punctuation errors. Ensure coherence and clarity in your writing. Revise your essay for content, structure, and argument strength. Consider seeking feedback from peers or instructors for further improvements.

Format and cite sources: Follow the specified formatting guidelines (e.g., MLA, APA) for your essay. Include accurate in-text citations and a comprehensive bibliography or works cited page to acknowledge all sources used.

Finalize and submit: Before submitting your essay, carefully review all requirements and instructions provided by your instructor. Make any necessary adjustments and ensure that your essay meets the specified criteria.
`);

export const courseAtom = atom("English 1325");

export const scoreAtom = atom(0);
