---
created: 2025-06-07T09:47:27 (UTC +08:00)
---
I read an article and deeply agreed with it.
# Stop Using Fancy Tricks to Write "Elegant" Code!

In tech communities, we often see blogs promoting various "advanced features" and "advanced patterns" of programming languages, using these features to provide some "elegant" code. But do these fancy things really improve our coding efficiency? I'm afraid...

---

# Main Content

In tech communities, we often see blogs promoting various "advanced features" and "advanced patterns" of programming languages, using these features to provide some "elegant" code.

But do these fancy things really improve our coding efficiency?

## Showing Off Skills Doesn't Necessarily Indicate High Technical Proficiency

Many people take pride in using obscure features of languages and frameworks, demonstrating their familiarity with frameworks by utilizing various rare APIs.

They believe their programming and technical abilities are superior to those who write simple logic. They may even develop "arrogant" emotions.

This viewpoint is **completely wrong**.

Let's look at the following example:

When recruiting developers, there's an interesting phenomenon: higher-level applicants are less likely to be assessed on specific coding skills, and more likely to be evaluated on architectural capabilities, business understanding, and engineering quality.

**Please note** that understanding architecture, business, and engineering is not about soft skills like communication or management - these are solid professional capabilities of engineers.

On the other hand, the most popular content in tech communities is usually various "getting started guides" for frameworks and libraries.

From bestselling "XXX From Beginner to Expert" guides to "Step-by-Step Guide to Learning XXX," the hottest content still revolves around how to operate these APIs and apply certain technical knowledge patterns.

Considering these phenomena and some common sense, we can derive the following three conditions:

- The higher the programmer's level, the smaller the proportion of technical knowledge in their skill tree.
- The proportion of senior programmers is much smaller than junior programmers.
- In the programming world, most people care about technical knowledge.

Based on these conditions, we can make a loose inference: **Those who care most about and are obsessed with programming skills are likely mostly programmers at the junior level.** Therefore, showing off skills doesn't necessarily indicate high technical proficiency.

To clarify, we don't think programming skills are unimportant. On the contrary, senior programmers have a much deeper understanding of skills than junior programmers, and many skilled code can optimize and solve problems by orders of magnitude.

So how should we evaluate such code?

Students who can apply various advanced features are undoubtedly considered "smart." However, when and how to use them requires judgment based on so-called "wisdom."

This is similar to what we often see in Facebook and Google's coding standards:

> Use your best judgment.

While it sounds pleasing, this is a conceptual notion.

Below we'll have some more specific discussions and extract some common tricks.

## Common Tricks

> Happy families are all alike; every unhappy family is unhappy in its own way.
> 
> —Leo Tolstoy
> 
> Good code is like good literature; bad code has its own ways of being bad.

If we evaluate a piece of code using "clever tricks," then the quality of that code is probably not very good. For code that uses various techniques, we can also find many scenarios where these techniques are poorly applied to show their respective problems.

### Using Dangerous Semantics

Many people, after reading books like "Advanced Programming," apply their understanding of advanced features to actual projects to show off. In the frontend field, these behaviors include but are not limited to:

- Learning the difference between `==` and `===`, and using different symbols for logical judgment in different situations.
- After understanding variable hoisting (`var`) behavior, using it to implement special code execution sequences.
- Understanding `prototype` and `constructor`, and utilizing them to implement various inheritance relationships.
- Mastering various rules of `this` binding, and using special rules to bind context.
- ...

Code using these features can certainly run, but the problem here is that these semantics are all **dangerous**, or they are remnants caused by language design problems.

**Since we know they are difficult to use and mature alternative solutions are available, why use them to showcase technical skills?** However, such behavior occurs repeatedly in the frontend community.

For example:

- Just understanding various rules of `this binding` is enough to write a long article (this has been a boring topic in many tech communities).
- Surprisingly, features like `"=="` with countless pitfalls are something many people want to use "reasonably" after reading blogs.
- As for variable hoisting, this completely counter-intuitive design flaw has been used by some people to create various fancy interview questions.

Of course, this by no means prevents understanding how these so-called "advanced features" work and why they cause confusing behavior.

For every reliable student who wants to grow, learning them is important. The advice given here is:

- Understand them at least once, to the extent that you can point out problems.
- Know alternative solutions to these features and understand how to avoid pitfalls.
- Never use them in code under any circumstances unless maintaining underlying libraries.

Every programming language inevitably leaves legacy problems during its development process. For JS, a language born in a week with very high forward compatibility requirements, this problem is even more serious.

However, with the development of software engineering, the dangerous semantics brought by these design flaws have gradually faded into history. Now, like deeply studying IE6 compatibility issues, deeply learning, mastering, and using them has gradually become outdated.

### Applying Design Patterns

Design patterns are also very common topics in technical articles.

For example, many articles apply dozens of patterns from "Design Patterns" to JavaScript, using the various "advanced features" mentioned above to simulate this and implement that. Finally, they boast that these patterns are "must-know for excellent programmers," so adding "proficient in various design patterns" to the resume makes an impressive statement!

The original intention of design patterns was to compensate for the shortcomings of static languages like Java. With the development of programming languages, many "classic" design patterns have become part of language mechanisms.

For example: `export` has built-in support for the singleton pattern, wrapping content with function layers is the factory pattern, `yield` also implements the iterator pattern, etc.

Additionally, JS's dynamism makes JSON's flexibility far exceed reflection, and first-class citizen function design makes JS callback functions more flexible than Java's callback interfaces or patterns like Visitor.

Many articles advocating design patterns haven't spread widely because they artificially create unnecessary complexity, instead causing a misunderstanding: "If you don't use XX pattern, it means your skills are lacking."

At least from my personal reading of excellent open-source project source code, I haven't found instances of mechanical pattern application; instead, problems to be solved are clearly described, then readable abstractions are provided.

Of course, we can retrospectively identify certain implementation patterns in them; however, I prefer to believe that authors didn't code with the mindset of "here we need to use XX pattern."

Many inexperienced beginners lacking insight might end up following strictly prescribed methods due to lack of experience reading high-quality code or being influenced by old code in company legacy projects. In my view, this is quite regrettable.

### Reducing Lines of Code

We all know that lengthy and repetitive code generated through copy-paste is bad.

However, most copy-pasting occurs under tight deadlines with no time for optimization. Considering our work intensity, this is understandable.

On the other hand, there's another extreme behavior whose purpose is to "simplify" code by using various unconventional means to achieve "most concise" code.

For example:

- Students just starting to learn functional programming might be fond of code like `a(b(c(d, e(f, g))))`, believing that deep nesting of functions can greatly reduce intermediate variables, thus saving code volume;
- Some students like to connect various conditional logic with logical operators and write them all in one line, such as `a || b && c && d;`
- Equally common is when utility functions end up with more and more parameters until they're all passed at once in one line.

Let's consider again whether such code enhances readability:

1. Deeply nested function calls bring lots of closing parentheses, like: `))))))`, which has long been criticized in Lisp;
2. Single-line conditional logic is not conducive to debugging;
3. Functions with many parameters often exhibit complexity and are difficult to debug.

These coding practices can easily be replaced with forms having better readability without too much trouble. However, deliberately creating such code might make subsequent maintainers uncomfortable.

For specific practices regarding line breaks and indentation, tools like JavaScript Standard Style can effectively handle most cases automatically.

### Implicitly Overwriting Common Sense

Modern engineering frameworks usually provide many customizable interfaces, allowing developers to easily modify framework behavior.

For example: React exposes context, while libraries like Redux and MobX utilize this interface to greatly optimize the experience of deep prop passing.

However, within frameworks, there are many implicit conventions and specifications that, when unreasonably customized in typical business code, can lead to significant challenges. These types of modifications usually occur in inconspicuous places but can have large impacts.

For example: In a project we previously maintained, a clever modification was made, replacing the `React.Component` base class with their own `XXX.BaseComponent` behavior.

The customized component didn't involve any business logic-related changes, just added some inexplicable initialization code.

As a result, implicit common sense about React component bases became invalid. During maintenance, at first glance, the replaced component seemed ordinary. However, fixes would cause problems.

Additionally, these "black magic" codes had no comments or documentation, and it wasn't clear why they were introduced in the first place or what problems they were meant to solve. For such coding practices, perhaps there's no reasonable evaluation other than being overly clever.

Another example from this project involved another "clever" practice:

`window.fetch` was replaced with three to four different custom versions based on request paths. This means when maintainers write new fetch requests, they can't rely on any previous implicit knowledge about fetch, but must debug by tracking predecessors' custom versions!

There are also some implicit practices that cause problems due to side effects. For example: When seeing `user = getUser(id)`, people might not think that this `getUser` function not only queries users but also silently displays a prompt message when sending requests, then also clears current data.

Of course, in frontend development itself, managing large amounts of UI-related network side effects inherently adds complexity.

However, if calling a function causes many cascading results, further increasing complexity, many maintainers might choose to deprecate and rewrite.

### Reinventing the Wheel

In tech communities, collections like "Most Complete Frontend Utility Functions" can often be seen, and they often have high like counts. However, **Is a 500-in-1 Little Overlord game cartridge more fun than Super Mario?**

I've had the fortune to read some such articles and found that these encapsulated functions often don't even have fixed themes: "getCookie" on the left, "deepClone" on the right, "isEmail" above, "scrollTop" below. Each implementation has only a few lines of comments at the level of translating English function names to Chinese, with no test cases, dependency configurations, or documentation. They're called "small and beautiful."

Is such code worth copying into your project for reuse? Frankly, they're just products satisfying the impulse of "I can invent wheels."

Of course, I completely believe authors can effortlessly write elegant content. But projects aren't interviews; they're projects. For a stable and reliable library, besides simple implementation, many things unrelated to code are needed.

According to Brooks' Law in "The Mythical Man-Month," actual coding time in software projects accounts for only 1/6; the remaining majority is spent on testing, documentation, and communication. For library code with higher quality requirements - is hastily written or copied (oh no! let's call it inlined) code from online sources sufficient?

When using libraries in formal projects, if stable existing dependencies can satisfactorily meet requirements, then obviously this should be your first choice. If you encounter situations requiring reinventing wheels yourself, then please ensure that the 5/6 outside writing code left by reliable projects is also done well; don't unnecessarily duplicate inferior wheels.

### Pursuing High-Level Abstraction

The last point might be more niche, because for many people who can satisfy needs just through copy-paste, this goes against their habits. But precisely because of this, it's a more "advanced" form of "trickery."

"High-level" sounds like a purely positive term.

[Higher-order functions] and [Higher-order components] seem to be perfect matches for [Senior programmers].

But if you need to maintain such higher-order functions, what do you think?

```
() => () => () => () => 123
```

A function that returns 123, returned by a function, returned by another function, returned by yet another function - indeed very high-level. But doesn't this make you feel confused...