+++
date = "2018-05-30T12:14:03-07:00"
title = "B-side Theme for Hugo"
description = "A Tufte-inspired theme for Hugo using reStructuredText to support margin notes and other features."
categories = [ "Tools" ]
tags = [ "hugo", "tufte", "theme" ]
type = "post"

+++

Hugo B-side
###########

.. sidebar:: Demo
   :class: titleless

   .. image:: b-side-badge.png
      :target: https://hugo-b-side-demo.netlify.com/

Hugo B-side is a theme for `Hugo <https://gohugo.io/>`__
using
`reStructuredText <http://docutils.sourceforge.net/rst.html>`__
markup to produce a clean column-and-sidenotes style
that follows many of the design ideas that have flowed from
`Edward Tufte's <https://www.edwardtufte.com/tufte/>`__ work.
This website is implemented using this B-side theme.

Full information about the theme can be found in the
`repository at Github <https://github.com/fisodd/hugo-b-side>`__.
A live demonstration site with more information about
features and techniques is
`available <https://hugo-b-side-demo.netlify.com/>`__.


.. sidebar:: B-side Features

   - Responsive 2-column page layout (scales from 300 to 1300 pixels wide)
   - Supports all reStructuredText markup features

   Including

   - `Images <https://hugo-b-side-demo.netlify.com/post/using-bside/#images>`__ and `figures <https://hugo-b-side-demo.netlify.com/post/tufte/#figures>`__

   - `Sidenotes <https://hugo-b-side-demo.netlify.com/post/tufte/#sidenotes>`__ and `citations <https://hugo-b-side-demo.netlify.com/post/hugo-and-rest/#citations>`__

   - `Pull-quotes <https://hugo-b-side-demo.netlify.com/post/hugo-and-rest/#pullquotes>`__ and `epigraphs <https://hugo-b-side-demo.netlify.com/post/tufte/#epigraphs>`__

   - `Sidebars <https://hugo-b-side-demo.netlify.com/post/using-bside/#sidebars>`__

   - `Admonitions <https://hugo-b-side-demo.netlify.com/post/using-bside/#admonitions>`__ and topics, notably including topics containing the `table of contents <https://hugo-b-side-demo.netlify.com/post/using-bside/#contents>`__

   - Support for `inline math <https://hugo-b-side-demo.netlify.com/post/using-bside/#math>`__ and `code directives <https://hugo-b-side-demo.netlify.com/post/tufte/#code>`__

   - `Tables <https://hugo-b-side-demo.netlify.com/post/using-bside/#tables>`__ including all forms of reStructuredText alternative table markup: `list-tables <http://docutils.sourceforge.net/docs/ref/rst/directives.html#list-table>`__ `field lists <http://docutils.sourceforge.net/docs/ref/rst/restructuredtext.html#field-lists>`__ even `bibliographic fields <http://docutils.sourceforge.net/docs/ref/rst/restructuredtext.html#bibliographic-fields>`__

   With

   - The ability to place any of these elements in a sidebar
     that runs the full length of the page.

   All of these features and some more are demonstrated in
   `the live demo <https://hugo-b-side-demo.netlify.com/>`__


Goals
*****

The intent of Hugo B-side is to provide a straight-forward method
for authoring content that takes advantage of Tufte's teachings;
clean, effective, with intelligent use of space.

The implementation seeks to take full advantage of reStructuredText
to enable many of Tufte's ideas in simple "markdown" without the
need for codewords or other complications.  reStructuredText's base
definitions already support many important features: notes and
citations, quotes and epigraphs, well featured sidebars,
simple and complex tables, code displayes,
as well as inline math notations without calling out to MathJax.

B-side was also implemented to take advantage of Hugo's flexibility.
For example, use of Hugo's page type variable allows for
different layout options
(e.g. one wide single column instead of the default main-plus-side
column layout).

Finally, the underlying CSS was crafted to provide responsive
display for all reStructuredText markup and directives,
specifically both tables as well as lists can have alternative
views that are tailored for narrow displays.
Additionally, the CSS has definitions that allow options to
customize the display to suit Tuftesque tastes, e.g. a "bulletless"
class for lists.


Recognition
***********

The layout and style of this theme was originally inspired by
`Tufte CSS <https://edwardtufte.github.io/tufte-css/>`__
and the other projects following the ideas of Edward Tufte.

The author learned most of what he has learned about Hugo themes
by studying the excellent example of the
`Ananke theme <https://github.com/budparr/gohugo-theme-ananke>`__.
I am very grateful for the clean implementation and the helpful comments.

Also, many, many thanks to
`all the folks <https://github.com/gohugoio/hugo/graphs/contributors>`__
who make Hugo rock.

