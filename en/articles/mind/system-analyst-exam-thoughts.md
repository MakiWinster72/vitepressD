---
title: 系统分析师备考心得
date: 2023年05月26日 06:29:09
tags: 
    - 系统分析师
    - 考试
    - 软考
categories: [经验]
description: 系统分析师备考心得
cover: https://img.makis-life.cn//images/20250526062909626.png
---

---
title: System Analyst Exam Preparation Experience
date: 2023-05-26 06:29:09
tags: [Software Qualification Exam, System Analyst, Experience]
categories: [Experience]
description: System Analyst exam preparation experience and insights
cover: https://img.makis-life.cn//images/20250526062909626.png
---

When I saw that half the people in the exam room had slightly balding heads, I already felt like I was half-doomed. Most of them were workplace veterans with years of experience, and many drove to the exam... 

Only another male student and I were so naive (I bet he was also a student) - we obediently arrived 40 minutes early.

Nearly ten people didn't even show up for the exam! That's what you call boss behavior - casually throwing 200 yuan to boost the national GDP.

As someone who once struggled to write 800 words in high school essays, I actually managed to produce over 2,700 words in today's thesis - quite a breakthrough indeed.

I've made it - sharing an exam room with the bosses. The difference is they're probably taking this exam for certification perks to enjoy life, while I'm still grinding away.
I hate embedded systems and databases.

---

Three months ago, with delusions of reaching the sky in one step, I directly registered for the advanced software qualification exam and embarked on the arduous journey of preparing for the System Analyst certification. Being someone with an extreme personality - either don't do it at all, or go big - I recklessly chose the advanced System Analyst exam (laughing-crying).

When I first read through the textbook's table of contents, I felt completely lost. This book was like a dictionary, and the contents even more so... A single subsection within a chapter of one part covers an entire course from this semester (smile) - specifically Operating Systems, Design Patterns, and Information Security.

![image.png](https://img.makis-life.cn//images/20250526062909626.png)
![image.png](https://img.makis-life.cn//images/20250526063554618.png)

And I happened to catch the System Analyst exam right when they updated to the new textbook for the first time! The first major revision in 16 years, holy sh*t. Great, now all the previous online courses and materials from predecessors were useless.

## A Brief Account of My Preparation Journey

Initially, I blindly attacked the textbook.
- Chapter 1 gave me a deep understanding of the System Analyst's professional positioning, recognizing their role in enterprises and the responsibilities and spirit of technical personnel.
- Chapter 2: Mathematics and Engineering Foundations. My God! Do you understand the feeling of seeing all the mathematics I've learned in my lifetime, plus knowledge I've explored beyond the curriculum, compressed into just a few pages!

![image.png](https://img.makis-life.cn//images/20250526063349780.png)

The practical value of mathematics was fully revealed here. At a glance, mathematics from elementary, middle, and high school all appeared before my eyes. At first sight, I felt somewhat emotional about the hardships of my academic journey.

From Chapter 3 onwards came my beloved computer science!!! I began to gain deep yet accessible understanding of computer principles, networks, systems, databases, software engineering, enterprise informatization...

Before even finishing the first section, I was getting tired, really. There was too much information, and school had started. I somewhat underestimated my course schedule - life as a transfer student is truly miserable.
Here's my course schedule this semester for everyone to see:

![IMG_2230.jpg|200](https://img.makis-life.cn//images/20250526072303818.jpg)

What to do? With almost no time on weekdays, not to mention coursework, experiments, reports, group projects, etc. As a bad kid, I naturally chose to pursue my passion~ Classes had to be attended, but for now I'd just record the weekly PPT topics (laughing-crying) to make it easier for the current me to catch up frantically... (crying)

At this point, I abandoned the textbook.

How could a novice like me try to master such a vast amount of knowledge? How could I feel, experience, and learn the thinking and mindset of a System Analyst? I was very confused at the time, fortunately my beloved girlfriend kept comforting and encouraging me.

I accidentally found predecessors' "learning insights" online, every word a pearl:
>"Fellow colleagues, let's encourage each other."
>"We are the people who minimize development risks."
>"Whether in large or small companies, we should all be our own System Analysts."

Seeing the efforts and achievements of these predecessors, my heart filled with passion. They were exactly the people I had always dreamed of becoming:

》》Technically skilled and capable, calm, steady, and responsible, willing to share knowledge for a better internet, offering advice for enterprise/team development, becoming someone who provides security.

---
【I began searching for my own solution, separating life from study, balancing my major with amateur exam preparation.】

AI is the tool of our generation, an advantage that our predecessors didn't have. *(The following briefly shares insights on tool usage, focusing on mindset inspiration rather than technical details -> technology progresses, thinking evolves. We should practice more and explore more, to feel the tools and feel ourselves)*

Initially, I tried deploying MaxKB on my computer, attempting to leverage LLM advantages by importing and analyzing textbooks, using text vectors and trying to connect with Claude for conversational learning of various sections. After using it for several days, honestly, I found Claude wasn't as useful as imagined. Following this line of thinking, I searched online for various tool platforms: Coze, ClickUp, AnythingLLM, NotebookLLM, and many others. It seemed AI hadn't evolved to the point where it could precisely match the knowledge I needed for novice tutoring (that was then; now there are indeed solutions available - just three months later, showing the speed of technological progress). Hallucinations are very fatal for novices, especially when discovering contradictions.

Eventually, I returned to ChatGPT and Claude (since they were sufficient for me, I didn't try Gemini, though I heard it's been good lately), and began building a personal knowledge base.

I mainly used Obsidian. When encountering new knowledge points, I relied on AI internet search and required output in my specified Markdown format, with templates already defined in system prompts. If you also use Obsidian, you can refer to my prompt below:

```Markdown
💡 Basic Format Requirements
① Content starts with "## Secondary Headings"
② All bullet points use ①②③ numbering
③ Output can use the following format markers to improve readability:
- **Bold**
- _Italic_
- ==Highlight==
- <u>Underline</u>
- ✅ [x] Checkbox
- 📌 Emoji icons for enhanced appearance
- > Quoted content uses quote format
- Clear logical hierarchy between headings and body text
④ Chinese with English in parentheses format: 中文（English）
⑤ Tables have empty lines above and below, content aligned and readable

🎯 Obsidian Output Requirements:
① If I request you to "organize into Obsidian format," output as Markdown code block, **without adding explanations or extra descriptions**.
② Merge each point into logical paragraphs as much as possible, **avoid making each small point independent** to prevent notes from being too long and fragmented.
③ Mathematical/formula content uses:
- Inline formulas use `$formula$`
- Standalone line formulas use `$$formula$$`
④ Symbols and terms should retain English originals in parentheses, such as 按钮（Button）, 设置（Settings）, etc.
⑤ Default system is Windows 11. For Linux operations, unless specifically mentioned, all based on Ubuntu 24.10.
```

For new knowledge points, I would send the topic analysis to GPT along with the question, requesting to "enrich the above knowledge, explain the knowledge point in depth and in simple terms, and output in Obsidian format," then copy-paste into Obsidian. (Requiring code block output has two major benefits: 1. Easy copying 2. Solves mobile copy without Markdown. The only downside is no rendered preview).

I obtained online course resources from the internet and downloaded them all locally via Baidu Cloud. For convenience in multiple states, positions, and locations to watch courses and documents anytime. I also used another computer as a server, starting Alist with Docker - using LAN in the dorm, and intranet penetration outside. I also bought a student discount server from Alibaba Cloud, putting small documents there for anytime reading.

This way, I continuously practiced questions, watched online courses, and constantly recorded new knowledge points.

![image.png](https://img.makis-life.cn//images/20250526071638521.png)

When pasting into notes, **you must definitely read through it once first**!!! Because like bookmarking, the probability of reviewing again is extremely low!

Continuously accumulating knowledge, constantly evolving thinking.
Later, the pressure was immense, I could barely sleep at night (still like this today after the exam), often tossing and turning until dawn, seeing 5 AM at Guangcai many times (laughing-crying).

![IMG_2037.JPG|200](https://img.makis-life.cn//images/20250526080222106.JPG)

I persisted until the day before yesterday, May 24th.

1. The exam room had a hospital smell, so nervous and depressing...
2. Help!!! Why was I so obedient arriving 40 minutes early? If I had reviewed a bit more, maybe I would have seen what the three layers of system architecture were (😭)
3. I memorized TCP/IP OSI for so long and you don't test it?
4. DFD you... why do I feel like all four English words in the options are wrong
5. Didn't anyone give up on the case study questions? Good job, masters
6. I'm a bit dead, three of the four case study questions had knowledge points I completely didn't understand. I know web! But what is SSM? Why does question 3 also have SSM... I should have listened carefully to database classes
7. Alright, the thesis didn't test requirements gathering, but fortunately I've written about software testing, but what is automated testing... Why didn't I have 7.12 million before, let me manage a 10-month development project, unfair (unhappy)
8. Time's up, hand in papers. I actually wrote over 2,700 words... My God, is this still the same language arts weakling? The word count showed 0 in the bottom left corner when submitting... Thankfully others had the same issue!

Because of this exam, I fell behind significantly in coursework and my life became somewhat chaotic. Even if I don't pass, I won't regret taking this System Analyst exam. **I will be grateful for the mental evolution it gave me, grateful for opening another door in the technical field. And once again letting me feel that when pursuing beloved knowledge and passionate fields, motivation is endless and requires no external discipline - this is true learning, education of oneself, and true education.**

Pure technical implementation cannot solve all problems. Only by **deeply understanding business requirements** and accurately grasping user pain points can we ensure our work - the system - truly meets users' actual needs and design systems of real value.

I will continue exploring and learning new technologies and methods on the path of informatization construction, trying to improve technical and even project management levels.
Steadfastly advancing toward the "one in ten thousand" goal, bearing in mind the social responsibility of technical personnel, striving to build a better Chinese internet environment~ Using the power of technology to contribute our generation's strength to building Digital China and Smart Society.

Let me end with the closing sentence from my thesis:
"Technology should serve people's livelihood and contribute to society."