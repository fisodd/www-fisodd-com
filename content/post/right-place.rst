---
title: "Right Place, Right Time"
date: 2018-07-28T12:20:41-07:00
description: "A review of lessons learned from experiences earned."
type: post

---


#######################
Right Place, Right Time
#######################

Fortunate to be at the right place at the right time,
I have been an active participant in, or at least have a front row seat for,
many of the most dramatic transformations in computing.
Many of these transformations have shown some similar attributes,
notably the importance of people willing to question what is really valuable
and willing to dig for the hard data necessary to induce others to question
their existing assumptions.


Dawn of Personal Computing: What and Why?
#########################################

.. sidebar:: Wang 2200

   The `Wang 2200 <http://www.wang2200.org/>`__ was a very interesting device.
   It may have been one of the first "personal computers",
   but it was never a small device.
   Wang's
   `marketing brochure <Wang.Model2200.1973.102646199.pdf>`__
   provides a good overview, but for one illustrative example of
   this system's quirks note the keyboard layout (see page 6 of the brochure).

   .. figure:: Wang2200-terminal.jpg
      :width: 100%

      Image: `Wang2200.org <http://www.wang2200.org>`__

   Note: Brochure obtained from
   `Computer History Museum archives <http://www.computerhistory.org/revolution/minicomputers/11/364/1998>`__

I got my first exposure to computing in the mid '70s
when my middle school in one of Boston's tech suburbs
was gifted with one of the earliest "personal computers".
A storage closet was cleared out to become the computer lab
with an full sized table dedicated to hold this 60 pound
electronic beast and all of its various support units.
The only display was a small CRT with at most 16 lines of text
with a modified typewriter attached that could be used
to generate hardcopy, and all the "storage" was on cassette tapes.
And yet, this system was clearly 'personal', it booted in seconds,
and while the display was small it was immediate and interactive.

The question was what to do with this thing?  Our math teacher
got us all to go through the steps to display crude sinewaves and
other geometric shapes, and other extensions of our "new math" curriculum.
But for us, the answer was obvious: games!
The few cassette tapes with the BASIC games were very popular,
and even a simple animated horse race game that I wrote
got banned during school hours
because of distracting too many students during class.

A few years later my fancy high-school got a PDP-11 minicomputer,
and the experience was entirely different |--| a stereotypical example
of isolation.  The system was set up in the basement, in a locked room,
with access granted only after earning a science teacher's approval.
Only a very small number of students wanted to have anything to do
with that system, and even though I could already code and already
had some idea of what that system could do
I saw no benefit to working on anything that isolated.
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
and I managed to talk my way into using that computer after he went to bed.
Starting with `RobotWar <https://en.wikipedia.org/wiki/RobotWar>`__
and eventually making heavy use of the seriously detailed early Apple manuals,
I was able to recover my old coding skills
and even teach myself how to code in 6502 Assembly
completing a variety of little visual games
pushing the limits of that 16 color graphics system.

My roommate's father had very high hopes for what these personal systems
could do for small businesses like his, and I had to admit working with
VisiCalc was a breakthrough moment to appreciating how these systems
would change business computing.
Even in its most rudimentary form, there was undeniable power with VisiCalc's
flexible tables that automatically recalculated immediately.
Decades later, as I work with data visualizations, I still can hear
this man's wish: "If you could just write a good charting program that
could work with this stuff..."

However, at the time the circle of coders for these personal systems
was rather small and even in my university's backwaters I got
a chance to trade a few beers to hear Richard Garriott tell
his stories about his work to create the early Ultima games.
And even then while it was clear that these systems could
change the way business worked, it was even more clear that
there was an even larger audience beyond the business world that was
eager for the ever more immersive experiences that computer games could offer.

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

      Source: `CYOA <https://www.cyoa.com/pages/r-a-montgomery-1936-2014>`__

Bridging between worlds as an English Major spending inordinate amounts
of time in the CS department, I did manage some very interesting opportunities,
which later became
`the genesis of this site's name </post/f-is-odd>`__.
Ray Montgomery, a local author and early coder,
was at the leading edge of interactive fiction,
and working with him to squeeze book-length text and some graphical mini-games
to fit within the limits of
`early Atari consoles <https://en.wikipedia.org/wiki/Atari_2600>`__
was an excellent introduction to the decision processes
for how to successfully determine what to keep and what to drop
in order to satisfy a target audience.
Computers could do cool tricks, but in the end the only things that are
necessary are those that are serving the overall experience |--|
judicial editing is as important for any application on a computer
as it is for any published text.


Simpler is Better, Early Unix and RISC
######################################

Halfway through my years in college, the Computer Science department
broke away from the main core of the computing resources on campus and
switched their focus from FORTRAN, COBOL, and Pascal over to a new curriculum
focused on new paradigms such as Unix, RISC architecture,
and open source software.
This break was massively disruptive to the engineering college,
but the resulting chaos provided me just the break I needed
to go from an English major taking CS classes and skip through
a lot of prerequisites and waitlists to become not only a full-time CS student
but also a TA for some of the new higher level CS courses.
Before long, instead of just being a user of the common timesharing systems,
I had earned root login privileges on PDP-11s and VAXes running BSD Unix
and I jumped at an offer to stay for a masters degree
which offered me the opportunity to get deep hands-on experience
with source-code access across what proved to be a very wide range
of single and multi user systems
running several variants of BSD and System V Unix.

.. sidebar:: RISC vs CISC

   My thesis advisor, David Train, had recently been working on the
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
   in a clean streamlined design even if the instruction set was still
   complex).

   .. figure:: us__en_us__ibm100__risc_architecture__john_cocke__750x990.jpg
      :width: 100%

      Source: `IBM <http://www-03.ibm.com/ibm/history/ibm100/us/en/icons/risc/>`__

More interestingly, my work landed right in the middle of the RISC-vs-CISC
arguments.  While I had studied RISC architectures in school,
when I graduated I was hired into Hewlett-Packard
originally joining their core DBMS team and then the HP/UX kernel team
before settling into what became a lead role
in the system performance community.
At HP I was actively involved in a series of David-takes-on-Goliath battles
that was reshaping computing.  The battle that attracted me to HP was the
RISC-vs-CISC design argument, and HP's PA-RISC proved to be every bit as
interesting as I had hoped, especially the out-of-order execution capabilities
which echoed some of the DataFlow architecture issues my advisor had
discussed.

Soon I found myself involved in the arena of competitive performance
where the challenge was not just RISC versus CISC,
but was taking on mainframe computers and proving that minicomputers
could win business in core business computing accounts.
Here I was embedded right in the midst of the arguments between goals
and pragmatic delivery, and our business flourished because we did have
a visionary architecture but we also had the disciplined focus to
deliver features that our customers were willing to pay extra to have now.

.. sidebar:: Long days, wide arguments

   Our work in the performance teams was dependent upon the depth
   of our relationships across many facets of product development.
   It was not uncommon for a day to include
   a debate about optimal cache organizations at one end
   and at the other end a discussion of whether recently achieved
   marketing claims warranted increased advertising budgets
   |--| a very tight loop between the technical details of implementation
   and the realities of what were the differences that customers would pay for.
   The range of materials in these sessions was mind-stretching,
   but the ability to witness both cause and effect across a large business
   was inspiring.

By the time the
`"dot com boom" <https://en.wikipedia.org/wiki/Dot-com_bubble>`__
began to grow, what had been a relatively small group of people
was now a multi-billion dollar business,
and I was managing a team working on web-server performance
and analysis of new web technologies.
The base work was pushing systems and developing tests to highlight
that our servers could scale faster than our customer's desired growth plans.
The bonus work was projects assigned by our executives to evaluate a wide
variety of web technology that were being considered as potential
acquisitions or future competition |--| a fascinating stream of
wild ideas and even wilder expectations.
In a period where it seemed like everyone was being rewarded
for attempting an even more outlandish claim than the one before,
we were prospering precisely because we had earned a reputation
for identifying flaws and providing well reasoned criticisms.


Efficiency Rules
################

Once the "dot com" bubble burst, the industry's attention shifted
from 'biggest' and 'best' over to costs and efficiency.
And here again I ended up with a front-row seat to the next big transformation,
this time helping commodity servers (high volume, low cost, x86-based
servers) showcase their value proposition versus the existing solutions.
Where we had been proving HP/UX could overtake the proprietary systems,
now I was involved in showing that Linux and Microsoft's Windows Server were
just as capable and a whole lot cheaper to manage |--| matching the
performance results was easy, the work was in stripping marketing claims
down to bare facts and then reassembling a clearer picture of the real costs.
Once again, we were successful in proving the underdog could win,
and again the marketplace transformed the industry.

By the time that commodity servers had taken the drama out of the
competitive performance arena, I was offered a chance to analyze and
measure an entirely different transformation, the mobility revolution.
My transition to this space was with laptop PCs, becoming part of the
team working towards the vision of all day computing, figuring out the
steps to move from heavy laptop PCs that maybe lasted a few hours between
charges and instead deliver thin and light notebooks that could last all
day on a single charge.  The key was to put aside the grand statements
from the many participants and instead establish clear and verifiable
measurements of comparable battery life experience, and then working to
track everyone's progress towards the overall goals.

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
I was already embarked on a new assignment:
evaluating when, where, and how smartphones would threaten PCs.
Starting alone, creating a new lab out of a basement storeroom,
we built a team that will soon include a dozen people directly measuring
all sorts of phone and tablet devices, working with dozens of partners
across the country to generate some of the most reactive reports
to be presented to the executive team.  Our conclusions were controversial
but having done the work to make the measurements both robust and
representative, when the shouting started instead of the usual
shoot-the-messenger response
our messages were used to drive change across the company.

A common theme was that very few customers
ever care about technology for technology's sake.
The vast majority of the marketplace just wants solutions that provide
the desired experience with a minimum of cost and hassle.
If there are alternatives that satisfy these needs more easily,
then it will not take long before even the strongest products
suffer from the changing tides.
The key, as always, is having a good understanding
of the strengths of one's products
and at least as good understanding regarding
what the market is willing to pay for.


Observations
############

Today, with the freedom to work on the projects that most intrigue me,
I am playing in the deep waters of Data Science.  And yet, even in
these new areas of discovery, I find myself still watching again
how the heat and energy of hype is quickly lost, and that real progress
comes from the stable engineering of those who have a solid grip on
what is really necessary to address the problem at hand.

One of the few constants through all of these transformations has
been the value of those who are willing to provide clear and steadfast
advice in spite of pressure to go along and accept the current trends.
Management may not like it, but the executive decisions are only as good
as the information available at the time, and if key people are afraid to
speak up then these decisions will be made in an information vacuum.

To be successful in these situations takes a lot of preparation,
and often a bit of good fortune,
but they all start with a willingness to stand up
and draw attention to some well founded data
that reveals what others may not want to see.

.. |--| unicode::  U+2013  .. en dash
