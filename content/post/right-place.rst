---
title: "Right Place, Right Time"
date: 2018-07-28T12:20:41-07:00
description: "Lucky enough to have learned a few lessons along the way."
categories: ["Opinions"]
tags: ["Wang 2200", "Apple II", "Unix", "RISC", "Dot Com", "smartphones"]
type: "post"

---


#######################
Right Place, Right Time
#######################

Fortunate to be at the right place at the right time,
I have been an active participant in, or at least had a front row seat for,
some of the most dramatic transformations in computing.
Many of these transformations have shown some similar attributes,
notably the importance of people willing to question what is really valuable
|--| especially those who are willing to dig for the hard data necessary
to induce others to question their assumptions and adjust their biases.

Today's world is implemented in the current technology and terminology;
nevertheless, sometimes someone with an understanding of history
can be useful to understand how we got where we are,
and to point out some of the more promising ways forward.


Dawn of Personal Computing: What and Why?
#########################################

.. sidebar:: Wang 2200

   The `Wang 2200 <http://www.wang2200.org/>`__ was a very interesting device.
   It may have been one of the first "personal computers",
   but it was never a small device.
   Wang's
   `marketing brochure <Wang.Model2200.1973.102646199.pdf>`__
   provides a good overview, but for one illustrative example of
   this system's quirks note the keyboard layout
   (shown on page 6 of the brochure linked above).

   .. figure:: Wang2200-terminal.jpg
      :width: 100%

      Image: `Wang2200.org <http://www.wang2200.org>`__

   Note: Brochure obtained from
   `Computer History Museum archives <http://www.computerhistory.org/revolution/minicomputers/11/364/1998>`__

I got my first exposure to computing in the mid '70s
when my middle school in one of Boston's tech suburbs
was gifted with one of the earliest "personal computers".
A storage closet was cleared out to become a "computer lab"
with an full sized table dedicated to hold this 60 pound
electronic beast and all of its various support units.
The only display was a small CRT with at most 16 lines of text
along with a modified typewriter attached that could be used
to dump out hardcopy, and all the "storage" was on cassette tapes.
And yet, this system was clearly personal in nature,
it booted in seconds into an interactive environment,
and even if the display was small the updates were immediate.

The question was what to do with this thing?  Our math teacher
got us all to go through the steps to display crude sinewaves and
other geometric shapes,
and work through other extensions of our "new math" curriculum.
But for us kids, the answer was obvious: games!
The system came with a few cassette tapes including some BASIC games,
and those were very popular.
My first taste of the power of programming was when
I hacked together something that could overwrite text on the screen
which quickly evolved into a game with several animated "horses"
running races across the screen |--|
and promptly got banned during school hours
because the game was distracting too many students during class times.

A few years later my upscale high-school was gifted a PDP-11 minicomputer,
and the experience was entirely different |--| a stereotypical example
of tech isolation.  That system was set up in the basement, in a locked room,
no access allowed without first earning a science teacher's approval.
Only a very small number of students wanted to have anything to do
with that system, and even though I could already code and already
had some idea of what that system could do
I saw no benefit to spending my time on anything that isolated.
The power of any tool is limited by its degree of separation
from its point of leverage.

.. sidebar:: Apple II Reference Manual

   Today it can be hard to believe there is any use in the "manuals"
   provided with recent high-tech gadgets, but there was a time when
   these were extremely useful sources of reliable information about
   the device, and the
   `Apple ][ Reference Manual <https://archive.org/details/Apple_II_Reference_Manual_1979_Apple>`__
   is a classic.
   Every aspect of the system is described in *plain* english, including
   debugging information, schematic diagrams, and yes, a handy guide
   to the 6502 Instruction Set in Appendix A.

   .. figure:: AppleIIReference-product-74199.jpg

      Image: `Centre for Computing History <http://www.computinghistory.org.uk/det/22097/Apple-II-Reference-Manual/>`__

   Manual hosted within the amazing collections at 
   `Archive.org <https://archive.org/>`__.

In college, my roommate had been loaned an Apple II by his father,
and, being the only night-owl in our apartment,
I managed to talk my way into using that computer after my roommate went to bed.
Starting with `RobotWar <https://en.wikipedia.org/wiki/RobotWar>`__
and eventually making heavy use of the seriously detailed early Apple manuals,
I was able to recover my early coding skills
and even teach myself how to code in 6502 Assembly,
eventually completing a variety of little visual games
pushing the limits of that 16 color graphics system.

My roommate's father had very high hopes for what these personal systems
could do for small businesses like his, especially with tools like
`VisiCalc <https://en.wikipedia.org/wiki/VisiCalc>`__.
Working with VisiCalc was a breakthrough moment
for appreciating how these systems would change business computing.
Even in its most rudimentary form,
there was undeniable power with VisiCalc's flexible tables,
and watching every value recalculate automatically and immediately
was impressibly close to magic.
Decades later, as I work with data visualizations, I still can hear
this man's wish: "If you guys could just write a good charting program that
could work with this stuff..."

At the time the circle of coders for these personal systems
was rather small (even way off in my university's backwaters)
and for nothing more than the cost of only a few beers
my friends and I got the chance to hear Richard Garriott
tell stories about all the challenges creating the early
`Ultima <https://en.wikipedia.org/wiki/Ultima_(series)>`__ games.
And even then, while it was clear that the little systems could
change the way business worked, it was even more clear that
there was an even larger audience beyond the business world that was
eager for the ever more immersive experiences that these personal computers
could offer.

.. sidebar:: Ray Montgomery

   `Ray Montgomery <http://www.cyoa.com/pages/r-a-montgomery-1936-2014>`__
   was the original publisher and author for the
   `Choose Your Own Adventure <https://www.cyoa.com/>`__
   series of children's books that used game theory and
   ideas from role-playing games to encourage children to learn to read.
   He was also a fun geek, an insightful critic, and an amazing person
   to have as one's first boss.

   .. figure:: RayMontgomery-ray_obit_large.jpg
      :width: 100%

      Ray Montgomery, source: `CYOA <https://www.cyoa.com/pages/r-a-montgomery-1936-2014>`__

Bridging between worlds as an English Major spending inordinate amounts
of time in the CS department,
I fell into an interesting opportunity (which later became
`the genesis of this website's name </post/f-is-odd>`__).
Ray Montgomery, a local author and early coder,
was at the leading edge of interactive fiction,
was working to squeeze his book-length text and some graphical mini-games
to fit within the limits of
`early Atari consoles <https://en.wikipedia.org/wiki/Atari_2600>`__.
Running up against deadlines, he hired me to help finish and test the project,
and I found myself deep in an excellent introduction to practical computing.
Key lessons came from supporting the decision processes
for how to successfully determine what to keep and what to drop
in order to satisfy the specific target audience.
Computers can do lots of cool tricks, but in the end the only ones that are
necessary are those that are serving the overall experience |--|
judicial editing is as important for every application on a computer
as it is for any published text.


Simpler is Better, Early Unix and RISC
######################################

Halfway through my years in college,
there was a serious rift that ripped through parts of our engineering faculty.
Several professors abruptly left the school,
and eventually the remaining Computer Science department broke away
from the main core of the computing resources on campus.
The new department switched their focus from FORTRAN, COBOL, and Pascal
over to a new curriculum focused on emerging paradigms such as
Unix, RISC architecture, and open source software.
This break was massively disruptive to the engineering college,
but the resulting chaos provided me just the break I needed
to go from being an English major taking some CS classes and skip past
a lot of prerequisites and waitlists to become not only a full-time CS student
but also a teaching assistant for some of the new higher level CS courses.

Before long, instead of just being yet another undergraduate programmer
seeking a terminal on the big timesharing systems,
I had earned root login privileges and a key to a new machine-room filled with
a variety of PDP-11s and VAXes and other systems all running BSD Unix.
Chaos had lead to opportunity,
including an offer to stay for a masters degree
giving me deep hands-on, source-level experience
across what proved to be a very wide range of single and multi user systems
running several variants of BSD and System V Unix.

.. sidebar:: RISC vs CISC

   My thesis advisor,
   `David Train <https://www.linkedin.com/in/david-train-7589024>`__,
   had recently been working on the
   `Manchester Dataflow Machine <https://en.wikipedia.org/wiki/Dataflow_architecture>`__
   and had some seriously different views on computer architecture.
   I was assigned a few projects of architecture analysis, including
   `Intel iAPX 432 <https://en.wikipedia.org/wiki/Intel_iAPX_432>`__
   and the `IBM 801 <https://en.wikipedia.org/wiki/IBM_801>`__.
   The i432's complexity and implementation tradeoffs appalled me,
   and instead I came away in awe of John Cocke's elegant approach for the 801,
   which led me to be a firm adherent of the RISC design philosophies
   even when I later came to work at Intel
   (though by then the key parts of the x86 architecture was implemented
   in relatively cleaner designs even if the instruction set was still
   complex).

   .. figure:: us__en_us__ibm100__risc_architecture__john_cocke__750x990.jpg
      :width: 100%

      John Cocke, source: `IBM <http://www-03.ibm.com/ibm/history/ibm100/us/en/icons/risc/>`__

More interestingly, my work landed right in the middle of the RISC-vs-CISC
arguments.  While I had studied RISC architectures in school,
when I graduated I was hired into Hewlett-Packard
originally joining their core DBMS team and then the HP/UX kernel team
before settling into what became a lead role
in the system performance community.
At HP I was actively involved in a series of David-takes-on-Goliath battles
that were reshaping computing.  The first battle that attracted me to HP
was the RISC-vs-CISC design argument,
and HP's PA-RISC proved to be every bit as interesting as I had hoped,
especially the out-of-order execution capabilities
which echoed a few of the DataFlow architecture ideas my advisor had
been championing.

But soon I found myself involved in the arena of competitive performance
where the challenge was not just RISC versus CISC,
but included taking on mainframe computers and proving that minicomputers
could win business in core business computing accounts.
Here I was embedded right in the midst of the arguments between design goals
versus pragmatic delivery, and our business flourished because we did have
a visionary architecture but importantly we also had the disciplined focus to
deliver features that our customers were willing to pay extra to have right now.

.. sidebar:: Long days, wide arguments

   Our work in the performance teams was dependent upon the depth
   of our relationships across many facets of product development.
   It was not uncommon for a day to start at one end with
   a debate about optimal cache organizations followed by debugging
   copy-avoidance changes before sitting down to find ways to budget another
   hundred load generators ahead of an evening  presentation regarding
   how much to rewrite the advertising plans because of recent performance
   breakthroughs
   |--| a very tight loop between the technical details of implementation
   and the realities of what were the differences that customers would pay for.
   The range of materials in these sessions was mind-stretching,
   but the ability to witness both cause and effect across a large business
   was inspiring.

By the time the
`"dot com bubble" <https://en.wikipedia.org/wiki/Dot-com_bubble>`__
began to heat up, what had been a relatively small skunkworks
was now a multi-billion dollar business,
and I was managing a team of engineers working on web-server performance
and analysis of new web technologies.
Our base work was stressing systems and developing tests to highlight
how our servers could scale faster than our customer's promised growth plans.
Our bonus work came from projects assigned by the company executives
to evaluate a wide variety of web technologies
that were being debated in the boardroom, either pitched as potential
acquisitions or tracked as expected competition |--| a fascinating stream of
wild ideas and even wilder expectations.
In a period where it seemed like everyone was being rewarded
for attempting an even more outlandish claim than the one before,
my team was prospering precisely because we had earned a solid reputation
for honestly identifying flaws and providing well reasoned criticisms.


Efficiency Rules
################

Once the "dot com" bubble burst, the industry's attention shifted
from hyping claims of 'biggest' and 'best' over to managing costs
and improving efficiency.
And here again I ended up with a front-row seat to the next big transformation,
this time helping commodity servers (high volume, low cost, x86-based
servers) showcase their value proposition versus the existing minicomputers.
Where we had been proving standard Unix could overtake the proprietary systems,
now now our challenge was showing that Linux and Microsoft's Windows Server
were just as capable and a whole lot cheaper |--| matching the performance
results was relatively easy, the harder task was stripping marketing claims
down to bare facts and then reassembling a clearer picture of the real costs.
Once again, with tactical analysis and robust engineering,
we were successful in proving the underdog could win,
and again our marketplace transformed the industry.

By the time that commodity servers had taken the drama out of the
competitive performance arena, I took a chance to leave HP and go to Intel
analyzing and measuring an entirely different transformation,
the mobility revolution.
My transition to this space was with laptop PCs, part of the
team working towards the vision of "all day computing" |--| figuring out the
steps to move from heavy laptop PCs that maybe lasted a few hours between
charges and instead deliver thin and light notebooks that could last all
day on a single charge.  The key was to put aside the grand statements
from the many participants and instead establish clear and verifiable
measurements of comparable battery life experience, and then working to
track everyone's progress towards those overall goals.

.. sidebar:: Crossover Point

   Horace Dediu was one of the earliest analysts to realize
   how disruptive smartphones would be to the computer industry.
   His blog at `Asymco.com <http://www.asymco.com/>`__
   is full of beautifully clear charts showing
   this disruption as it happens.

   .. figure:: Screen-Shot-2016-03-28-at-12.28.22-PM-617x620.png
      :width: 100%

      Source: `Aysmco: The Next 40 <http://www.asymco.com/2016/03/28/the-next-40/#identifier_0_7568>`__, 2016-03-28

Even as the market delivered this vision
with new laptops only a third of the weight
and yet still more than twice the battery life,
I had already embarked on a new assignment:
evaluating when, where, and how smartphones would threaten laptops.
Starting alone, creating a new lab out of a basement storeroom,
we built a team that would soon include a dozen people directly measuring
all sorts of phone and tablet devices, working with dozens of partners
across the country to generate some of the most reactive reports
to be presented to the executive team.  Our conclusions were controversial
but we had done the work to make our measurements both robust and
representative, so when the boardroom arguments erupted
instead of the usual shoot-the-messenger response
our data and our methods were used to drive change across the company.

A common theme was that very few customers
ever care about technology for technology's sake.
The vast majority of the marketplace just wants solutions that provide
the desired experience with a minimum of cost and hassle.
If there are alternatives that satisfy these needs more easily,
then it will not take long before even the strongest products
suffer from the changing tides.
The key, as always, is having a good understanding
of the strengths of one's products
and at least as good understanding of 
what the market is willing to pay for.


Observations
############

Today, with the freedom to work on the projects that most intrigue me,
I am playing in the deep waters of Data Science.  And yet, even in
these new areas of discovery, I find myself still watching again
how quickly over-hyped energy is dissipated, and that real progress
comes from the stable engineering of those who have a solid grip on
what is really necessary to address the problem at hand.

One of the few constants through all of these transformations has
been the value of those who are willing to provide clear and steadfast
advice in spite of pressure to just ride the current trends.
Management may not immediately appreciate the push-back, but executive
decisions will only be as good as the information available at the time,
and if key people are afraid to speak up
then these decisions will be made in an information vacuum.

To be successful in these situations takes a lot of preparation,
and often a bit of good fortune,
but all these situations start with a willingness to stand up
and draw attention to some well founded data
that reveals what others may not want but need to see.

.. |--| unicode::  U+2013  .. en dash
