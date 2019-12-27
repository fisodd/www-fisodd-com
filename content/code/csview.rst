---
title: "CSView"
date: 2018-09-02T21:19:51-07:00
description: "Customizable Summary View of CSV content, including dynamic tables and responsive charts."
categories: ["Tools"]
tags: ["CSV", "D3"]
type: "post"

---

.. sidebar:: Table Shot
   :class: titleless

   .. image:: csview-table.png
      :align: right
      :width: 100%


######
CSView
######

`CSView <https://github.com/fisodd/csview>`__
is a Customizable Summary Viewer for CSV content,
with support for dynamic tables and responsive charts.

The intent is to provide a quick and easy way
to get to see what is inside CSV content.

Live demo: `Use CSView online </work/csview/>`__.


Rationale
#########

You are probably better organized than I am,
but perhaps like me, sometimes you may find yourself
sorting through way too many different CSV files
unable keep straight which abbreviated filename goes with which case.

.. sidebar:: Chart Shot
   :class: titleless

   .. image:: csview-chart.png
      :align: right
      :width: 100%

Which dateset is without the column of labels?
Which dataset has the extraneous rows trimmed out?
Which dataset includes the recently updated data?
Which dataset was the one where the peak values were notably higher?

Also:
What does the data look like if we filter out last week's datapoints?
What is the minimum value of that Nth column?
Does that minimum change when we filter out last week's datapoints?
What are the details for the outlier datapoints?

CSV is easy enough to load into a text editor,
but editors can be awkward when the lines are long
and the content is not regular,
and sorting by the Nth column is not a simple operation in many editors.

Spreadsheets certainly can manage CSV files,
but these can be overkill just to check what columns are well populated,
and while spreadsheets can do almost anything
they can be cumbersome to throw up a quick chart
and often take more than a few clicks
to experiement with which columns to use as the axes in a chart.

CSView offers one way to quickly load a file
and then play around with the contents
either in a tabular view or in a chart graphic.
CSView provides simple controls to choose which columns to select,
what rows to filter out, how to sort/resort.
The chart view can easily change axes, color column values,
show full information by hovering over a datapoint,
and supports a brush feature to zoom in on areas of interest.

CSView is a quick data exploration tool.
It is not meant for generating presentation materials |--|
there are obviously much better tools for serious work.
However, for those times when a lightweight tool
can be more effective than a full-function system,
then it can be handy to have a quick CSView.

.. |--| unicode:: U+2013   .. en dash

