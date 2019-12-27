+++
date = "2019-12-11T20:35:24-08:00"
title = "Administrivia"
description = "The admin view of this server, a quick review of the technology that makes this site work."
categories = [ "Web" ]
tags = [ "Hugo", "reStructuredText", "Github", "Netlify" ]
type = "post"
weight = 33

+++

Administrivia
#############

This site is implemented as a static web site.
The tools available today allow these sites to be rich in content,
and yet lightweight in infrastructure |--| and hence
very inexpensive and still easy to maintain.

All the themes and other technology locally developed for this site
are licensed under an open
`MIT License <https://opensource.org/licenses/MIT>`__
(the content is made available under
`Creative Commons Attribution-ShareAlike
<https://creativecommons.org/licenses/by-sa/4.0/>`__).


The Base
********

The fundamental technologies are
`Hugo <https://gohugo.io/>`__,
`Github <https://github.com/>`__,
and `Netlify <https://netlify.com>`__.

.. figure:: https://github.com/gohugoio/hugo/raw/master/docs/static/img/hugo-logo.png
   :align: right
   :width: 60%

Hugo is one of the more popular static site generator technologies,
it was selected for this site
because of its broad support and small footprint |--| a pair of features
that together make a compelling argument.

.. figure:: https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png
   :align: right
   :width: 60%

Github is possibly the most ubiquitous source safe system,
the service is easy to use with ``git``
and being so ubiquitous is hard to argue with.

.. figure:: https://www.netlify.com/img/press/logos/full-logo-light.png
   :align: right
   :width: 60%

Netlify is the newer part of this stack;
these folks really are a Content Delivery Network,
but what makes them exciting to me is
how they have turned Docker containers and a neat bit of IT savvy
into an easy-to-use automatic site deployment process |--| just
check the bits back into Github
and within a minute or so the new content
is pushed out to the production servers.
Simple and smooth.


The Tweaks
**********

A lot of static web sites look relatively similar, and that is fine |--|
`content, not chrome
<https://blog.chromium.org/2008/10/content-not-chrome.html>`__.
Many static sites are blogs running some 'skin' that changes
the colors and perhaps the typeface, but their layout is still mostly
full of one-page articles that are comprised of one long column.
This site had some different goals,
and some different tools were used to achieve those goals.

.. class:: titleless

.. sidebar:: B-Side

   .. image:: b-side-badge.png

   `Repository at Github <https://github.com/fisodd/hugo-b-side/>`__

   `Live Demonstration Site <https://hugo-b-side-demo.netlify.com/>`__

B-Side
======

This site is based on the
`B-side theme <https://github.com/fisodd/hugo-b-side/>`__
for Hugo.
This theme, inspired by the writings of Edward Tufte
and several related projects,
seeks to create a straightforward web-centric implementation
of much of what makes these books and materials beautiful and very readable.

reStructuredText
================

.. class:: titleless

.. sidebar:: reStructuredText

   .. image:: https://docutils.sourceforge.net/rst.png
      :width: 100%

   `Quickstart Primer
   <https://docutils.sourceforge.net/docs/user/rst/quickstart.html>`__

The other reason why many static-site based blogs look similar
is because the common markup is very simplistic and not designed
to be capable of a lot of variations.

This site, and the B-side theme, takes advantage of Hugo's
support for `reStructuredText <https://docutils.sourceforge.net/rst.html>`__.
While still a plaintext markup, reStructuredText is a more mature and robust
solution designed to be able to handle complex documentation publication needs.
For a sample of the features of this theme, see the
`Tufte example
<https://hugo-b-side-demo.netlify.com/post/tufte/>`__.

.. |--| unicode:: U+2013   .. en dash

