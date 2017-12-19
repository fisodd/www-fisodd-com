+++
date = "2017-12-08T20:25:24-08:00"
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


The Base
********

The fundamental technologies are
`Hugo <https://gohugo.io/>`__,
`Github <https://github.com/>`__,
and `Netlify <https://netlify.com>`__.

Hugo is one of the more popular static site generator technologies,
it was selected for this site
because of its broad support and small footprint |--| a pair of features
that together make a compelling argument.

Github is possibly the most ubiquitous source safe system,
the service is easy to use with ``git``
and ubiquitous is hard to argue with.

Netlify is the newest part of this stack;
these folks really are a Content Delivery Network,
but what makes them exciting to me is
how they have turned Docker containers and a fair bit of IT savvy
into an easy to use automatic site deployment process |--| just
check the bits back into Github
and within a minute or two the new content
is pushed out to the production servers.


The Tweaks
**********

Most static web sites look relatively similar.
There is a class of single-page "here is the info you need" sites,
but many static sites are blogs running some 'skin' that changes
the colors and perhaps the typeface, but still are mostly
full of one-page articles that are comprised of one long column.

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

The other reason why many static-site based blogs look similar
is because the common markup is very simplistic and not designed
to be capable of a lot of variations.

This site, and the B-side theme, takes advantage of Hugo's
support for `reStructuredText <http://docutils.sourceforge.net/rst.html>`__.
While still a plaintext markup, reStructuredText is a more mature and robust
solution designed to be able to handle complex documentation publication needs.
For a taste, take a look at the `Tufte example </demo/tufte/>`__.

.. |--| unicode:: U+2013   .. en dash

