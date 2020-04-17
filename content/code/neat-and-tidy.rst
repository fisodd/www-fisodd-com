+++
date = "2020-04-14T13:24:13-07:00"
title = "Neat and Tidy"
description = "A look at how the Tidyverse in R can be effective, using the COVID-19 case data as an example."
categories = [ "Analyses" ]
tags = [ "R", "tidyverse". "COVID-19" ]
type = "post"
+++

.. epigraph::

   A good tool improves the way you work.
   A great tool improves the way you think.

   --- Jeff Duntemann


#############
Neat and Tidy
#############

"Neat and Tidy" is this author's attempt to pull together a collection of
notes and annotations about what has been called
`the Tidyverse <https://www.tidyverse.org/>`__ |--| a
set of libraries for the
`R language environment <https://www.r-project.org/>`__.

The codes discussed here are all available in a
`neat and tidy project <https://github.com/fisodd/neat-and-tidy>`__
in my GitHub.

Since
`entire books <https://r4ds.had.co.nz/>`__
and a lot more have already been written
about the tidyverse libaries, what is here may be
some of the (perhaps more obscure but still)
powerful and effective tools in
the `tidyverse` library for the R language environment.
"Tidy" because that is the label used for the underlying concept
that has since the very beginning motivated
`this approach to seeing and working with data
<https://vita.had.co.nz/papers/tidy-data.pdf>`__.
"Neat" because the resulting code is clean and concise,
but also because I do find much of this to be rather cool...

Hadley Wickham's work and the community that it engendered has changed
how I do most all of my analysis work, and probably has improved how I
even think about data in general.
I spent decades in the tech industry where many of my key successes
were in effect the results of beating spreadsheets into submission.
Then I stumbled upon Hadley Wickham's libraries for R,
and so much of what I had been hacking my way through started to make sense,
and my work became a whole lot more easily executed |--|
and much more easily understood, replicated,
and (perhaps most importantly) improved upon by my teammates.


Why Be "Tidy"?
##############

.. sidebar:: Tidy War

   Before we dive right in, I should note that,
   like just about every niche of Computer Science,
   there is a brewing religious war about which tools and methods are best.
   I've lived through
   `a bunch of these </post/right-place>`__ |--|
   enough so that I have learned there are good opinions on all sides.
   In the world of `R`, the Tidyverse is definitely generating
   `some <https://github.com/matloff/TidyverseSkeptic>`__
   `reactions <https://blog.ephorie.de/why-i-dont-use-the-tidyverse>`__
   |--| still I find the tidyverse to be one of the sanest approaches to use.

   There are a variety of techniques to stay sane with this stuff,
   and as with anything in the real world
   there are tradeoffs whichever way you go.
   The tidyverse is opinionated,
   which does mean that this approach may not work as well
   with other parts of the R ecosystem that are based on different
   approaches and assumptions.

   But there is a sweet spot of users |--|
   maybe those just a bit more comfortable
   with the concept of chaining functions together to achieve an effect,
   perhaps those just seeking a wordier syntax
   (or at least one that is less dense)
   |--| where the tidyverse can provide a rich ecosystem
   where powerful analyses can be developed quickly.

R can be a bit of a wierd environment to work in |--| not surprising
considering this is a flexible and powerful system with a syntax that
reaches back to the '90s with roots in hacking a better way to interface
to FORTRAN calculation libraries.  And R includes a number of quirks
involving typing shorthand that reveals a history of catering to
interactive work at the console level.
The result is a language that can come across as dense and cryptic.

.. code:: r

   cn <- paste(g[which(!is.na(str_locate(lines,"^[]*cn")[,"start"]))[1]:(abs_-1L)],collapse="")

The example above is borrowed (and adapted a bit) from
`a motivating example for a style guide
<https://github.com/matloff/R-Style-Guide>`__
(but is admitted to be adapted from production code).
Yeah, this stuff can be a bit difficult to parse
if you are not working with it every day...

To the uninitiated, any code can easily seem impossible to read,
especially with languages such as R which support function programming
and other lexical features not common in conversational languages.

.. code:: r

   report <- flights %>%
      group_by(year, month, day) %>%
      select(arr_delay, dep_delay) %>%
      summarise(
         arr = mean(arr_delay, na.rm = TRUE),
         dep = mean(dep_delay, na.rm = TRUE)
      ) %>%
      filter(arr > 30 | dep > 30)

The structure is not necessarily obvious |--| until one recognizes
the patterns.

.. code:: r

   subject <- object %>%
      verb() %>%
      verb() %>%
      verb()

This snippet above is an abuse of a language metaphor to show one way to
read tidyverse code: a "subject" is assigned the value of an "object"
after that object has been passed through each "verb" in sequence.

.. code:: r

   y <- x %>%
      assemble() %>%
      bake() %>%
      cut_and_serve()

In this case, the variable "y" is built by taking "x"
and passing it to "assemble()" and then "bake()" and then "cut_and_serve()".
[Yes, these function names are completely made up...]

This chain of function calls, one per line turns out to be a help to
how I do much of my debugging |--|
one place where I find a bit of an advantage working with tidyverse calls
rather than with some of the denser bits of R syntax.

.. code:: r

   y <- x %>%
      assemble() # %>%
   #   bake() %>%
   #   cut_and_serve()
   print(y)

When something unexpected happens, I just break the chain between two
of the verbs (comment out the rest, or when interactive perhaps just leave
the remaining bit as a dangling [but unreached] bit of syntax)
and then check if the partial chain produces results in line with
expectations |--| if not the problem is somewhere above,
otherwise the problem manifests itself somewhere further down the chain.


Some Neat Examples
##################

.. sidebar:: Source Data

   There are great datasets tracking COVID-19.
   For these exercises I was working with
   `the COVID-19 data from Johns Hopkins CSSE
   <https://github.com/CSSEGISandData/COVID-19>`__.

`Small Multiples </work/neat-and-tidy/small-multiples>`__

The first example I worked with was to see what I could learn with
`small multiples <https://en.wikipedia.org/wiki/Small_multiple>`__.
Small multiples are very cool ways of looking at data,
but the *neat* part was getting a chance to play with the
new `pivot functions <https://tidyr.tidyverse.org/articles/pivot.html>`__
in tidyverse.

`Choropleths </work/neat-and-tidy/choropleths>`__

The second example was playing with the mapping tools,
and set out to make an animation loop of how cases spread out across
all 50 states of the US.
The `gganimate` package is really powerful and very cool,
but the *neat* trick here was `urbnmapr`,
`a little package
<https://urbaninstitute.github.io/urbnmapr/articles/introducing-urbnmapr.html>`__
from the people at the Urban Institute
that provides a simple and sane way to display all 50 states at one time,
so that you can worry about your data rather than how to transform your
projections to re-arrange the entire Pacific Ocean.


.. |--| unicode:: U+2013  .. en dash
