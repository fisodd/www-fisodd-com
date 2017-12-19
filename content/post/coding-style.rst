+++
title = "Coding Style"
date = "2016-12-16T19:57:20-07:00"
description = "Recently I came across an insightful article on coding style and this triggered some good conversations about coding conventions.  The ensuing discussions made me appreciate that coding conventions are much more easily understood when viewed as part of the overall coding style. [...]"
categories = [ "Opinions" ]
tags = [ "coding", "style" ]

+++

####################################
Some (More) Thoughts on Coding Style
####################################

.. [*] `Strategic Scala Style: Conciseness & Names
   <http://www.lihaoyi.com/post/StrategicScalaStyleConcisenessNames.html>`_.
   In this article Li Haoyi raises the point:
   how you name something is based not just on what that thing is,
   but how you expect it to be used.

Recently I came across an insightful article on coding style\ [*]_
and this triggered some good conversations about coding conventions.
The ensuing discussions made me appreciate that
coding conventions are much more easily understood
when viewed as part of the overall coding style.

So, partly as an exercise
to ensure that my personal style is reasonably well fleshed out,
the following is a description of my own coding style
for projects that I lead.


Essential Elements
******************

There are a couple of points of style that are essential;
that is, they are both necessary and ubiquitous to all coding.


Code must be written to be readable
===================================

.. [*] Note: 'humans' is plural;
   the person who reads the code many not recall that much
   about the person who wrote that code |--| sometimes
   even within single-author projects |...|

Any code that lives to see the end of the day,
will live far longer than originally imagined.
Also any code that lasts longer than a day
is quite likely to be read by humans\ [*]_
more often than it will be parsed by compilers.
Choose the style to match the needs of the more important audience.

Compilers can make sense out of almost anything
that is syntatically correct, and more importantly
(so long as one adheres to the language definitions)
compilers will suffer in silence.
Yes, humans can puzzle out the logic in almost anything,
but humans are also fickle beasts that will complain
when tasks are made more difficult than necessary.

.. sidebar:: Obfuscated Code

   Of course, in days of old, some of us took pleasure in trying to
   `obfuscate code
   <https://en.wikipedia.org/wiki/International_Obfuscated_C_Code_Contest#Examples>`_
   by ridiculous use of whitespace
   and other ugly tricks of formatting and design |...|

Make the code easy to read,
and let the compilers do the work they were created to do.
Make the code easy to read,
so when, inevitably, you need to come back and fix up an update,
it will be a lot easier for you to do the work you need to do.


Understand and follow preexisting style
=======================================

.. epigraph::

   When in Rome, live as the Romans do.
   When elsewhere, live as they live elsewhere.
    
   -- St. Ambrose

Any time you are working with existing code,
be mindful of whatever style exists within that code;
you may not like it, you may want to work to improve it,
but you need to honor the style that is already there.

No matter how beautiful the poetry,
it does no good to throw down a Shakespearean sonnet
in the middle of a logic test.


Enhanced Elements
*****************

The remaining elements of coding style are still important to good code,
but rather than being essential to any code,
these elements can enhance the quality of the resulting code.


Whitespace is significant
=========================


.. sidebar:: Unbroken Code

   If everything is run together
   in one dense block of self similar stuff
   without spacing or indications of 
   where the content shifts focus from
   one part of the logic over to the next
   bit in the sequence then the whole
   large block becomes an impenetrable mess
   that just adds to the burden of the reader
   and forces that poor reader to focus scarce attention
   on detailed parsing of the content before
   even being able to begin to appreciate which
   part or parts of the material are even close
   to the stuff they are interested in reading.

   Seriously, don't do that.

Civilizations spent hundreds of years perfecting
the art of written communication in book form and newspapers.
One of the lessons learned was that the layout greatly affects
how the reader absorbs the content.
Do not forget this lesson just because the display is glass not paper.

The reader uses the visual cues of whitespace
to pick up patterns in the material.
The space between the parts sets up a rhythm
that the readers can recognize at a glance,
even before they focus to read the content.


Indentation is key
==================

The whitespace at the beginning of the lines of code
is just as important as any other whitespace,
but there is more to good indentation than just white space.

A good indentation scheme reveals the intended structure of the code.
The coding style should draw attention to that structure.
It should be clear from how the intentation is laid out
what is the intended stucture of the function.
Note: of course (other than Python and FORTRAN)
the specific details of indentation is not binding on the compilers
so it is possible that the source layout
does not actually match the actual structure
within the resulting executable,
but a clear layout should make it easier to recognize
when the executable does not behave as the source expects.


Use parentheses with purpose
============================

It is possible to just rely on the existing rules of associativity.
However, this would be an example of writing for the compiler
as opposed to writing for the reader.

.. sidebar:: Lots of Insidious Silly Parentheses

   But (of course) do be mindful of ((particularly) annoying) overuse
   (which when overdone reduces readability
   (because the reader is forced to shift focus
   away from the current material
   (in order to be sure that the (immediate) parentheses
   are (or are not) setting up breaks at the expected locations
   (and are not changing the flow
   (in ways that are surprising
   (to the reader)))))).

Use parenthesis to establish the order of operations you designed |--|
unless you really do intend to be careless about your calculations |...|
Remember, language standards may evolve over time
including order of operations whose ambiguities may be addressed,
and it is rare that the application code is truly agnostic.
Make your intentions clear in the original source, 
or risk a tricky troubleshooting session later when
subtle shifts in definition lead to differing results.

Where possible, use the indentation of parentheses
to make the underlying structure clear.
If it is not easy to fit everything on one line,
intent the closing parentheses just as you would
intent closing braces of code blocks.

:: 

   someFunction(
       withLotsOfLongArguments,
       thatCauseLinesToBeTooLong,
       soItMakesSenseToBreakIntoMultiLineForm
   )


Pay attention to layout
=======================

Pay attention to the tools the readers will use to view the code.
Strive to make the key elements for whatever the readers focus on
are readily found on the same "page" as the code.
In other words, where possible try to keep the reader from having to scroll.

Refactoring code can be a most effective tool
for maintaining useful degrees of modularization |--| whenever
the code stretches over several pages to read
then it is worth considering how to refactor.

The same thing is also as true horizontally as it is vertically |--|
long lines become especially difficult to read.


Write succintly
===============

The programmer is not writing a novel.
A readable program is not so much even a novella
with character development and plot twists,
but rather more like a set of terse poems
relying heavily on the readers' recognition of idioms and patterns.

The reader will use the code only to understand the program.
This source code is not the place the reader is looking
for an indepth critique of algorithms.
Keep the source files focused on making the current
implementation clear and easy to understand.
If there is a need for a deep dive into some topic of related interest,
that can live in its own, separate, piece of documentation.


End Thought
***********

Compilers may be arcane and picky, but they are patient.

Programmers' patience is a very rare commodity.
Be mindful to make good use of this essential resource.

.. |--| unicode:: U+2013   .. en dash
.. |...| unicode:: U+2026   .. horizontal ellipsis
   :ltrim:
