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

   Try out the
   `B-side live demo <https://hugo-b-side-demo.netlify.com/>`__.

A theme for `Hugo <https://gohugo.io/>`__
using
`reStructuredText <http://docutils.sourceforge.net/rst.html>`__
markup to produce clean column-and-sidenotes article postings

Features
********

- Responsive 2-column page layout (scales from 300 to 1300 pixels wide)
- Supports reStructuredText markup features

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
  that runs the length of the page.

All of these features and some more are demonstrated in
`the live demo <https://hugo-b-side-demo.netlify.com/>`__

.. figure:: https://github.com/fisodd/hugo-b-side/raw/master/images/tn.png
   :class: fullwidth

   Screenshot of B-side


Installation
************

Installation is much like any other Hugo theme.

Use of the reStructuredText features will require the installation
of Docutils (and Pygments for code highlighting), but Hugo automatically
recognizes ReST files and will call these packages if installed.


Getting Started
---------------

Inside the folder of your Hugo site run::

    $ cd themes
    $ git clone https://github.com/fisodd/hugo-b-side.git

For more information read
`install and use themes <https://gohugo.io/themes/installing-and-using-themes/>`__
or begin with Hugo's
`get started <//gohugo.io/overview/installing/>`__ help page.


The Config File
---------------

Inside the
`exampleSite <https://github.com/fisodd/hugo-b-side/tree/master/exampleSite>`__
folder of this theme, there is a file called
`config.toml <https://github.com/fisodd/hugo-b-side/blob/master/exampleSite/config.toml>`__.
Use this configuration as an example,
and modify to suit your needs.


Create Your Content as ReST Files
---------------------------------

Create a piece of content with ".rst" as the suffix.

example::

    $ hugo new content/post/first-post.rst

Note: Hugo recognizes files ending with a ".rst" suffix as
`reStructuredText <http://docutils.sourceforge.net/rst.html>`__
and will call out to the `docutils <http://docutils.sourceforge.net/>`__
python package to process these files.


See the Results
---------------

In order to see your site in action, run Hugo's built-in local server.

::

    $ hugo server

Now enter `localhost:1313 <localhost:1313>`__
in the address bar of your browser.


License
*******

This theme is released under the MIT License.

The specifics can be found within the `License </LICENSE>`__


Recognition
***********

The layout and style of this theme was inspired by
`Tufte CSS <https://edwardtufte.github.io/tufte-css/>`__
and the other projects following the ideas of Edward Tufte.

The author learned most of what he has learned about Hugo themes
by studying the excellent example of the
`Ananke theme <https://github.com/budparr/gohugo-theme-ananke>`__.
I am very grateful for the clean implementation and the helpful comments.

Also, many, many thanks to
`all the folks <https://github.com/gohugoio/hugo/graphs/contributors>`__
who make Hugo rock.

