// DataView.js
// -- D3 interface code for looking at a CSV input

/* global d3 */

(function() {        // Use IIFE to isolate from global scope


/////////////////////////////////////////////////////////////////////////////
// Project Globals...


// Shove all the dynamic globals into a few ugly objects...
var G = {};  // various useful values (generated fresh each (re)load)
var V = {};  // view-related values (view might be saved/restored)

// Constants -- mostly UI strings, but also some key parameters, etc.
var C = {};
C.strings = {
  'textFetchFail'  : "Failed to load specified URL",
  'titleColFormat' : "Format to use if parsing this column as a date",
  'titleChangeFont': "Shrink or restore font size in table",
  'textChangeFont' : "Change font size",
  'titleRowLimit'  : "Limit of number of rows to format and display",
  'textRowLimit'   : "Row limit",
  'textBadViewer'  : "Invalid type of viewer specified.  Perhaps application state is corrupt?",
  'textRigging'    : "\u25c1",
  'textCurtain'    : "CSView",
  'textCurtainNote': "Date: ",
  'textLoading'    : "Loading...",
  'textTableLead'  : "Table from ",
  'textRecordEnd'  : " records)",
  'textRecordAll'  : " (",
  'textRecordPart1': " (showing the first ",
  'textRecordPart2': " of ",
  'textChartLead'  : "Chart from ",
  'textChartWith'  : " with ",
  'textChartOver'  : " over ",
  'textFilterWhere': " where ",

  'baseField' : "Criteria: Field...",
  'baseValue' : "Criteria: Value...",
  'titleField': "Column of dataset to use for this filter",
  'titleOp'   : "Comparison method to use for this filter",
  'titleValue': "Value to compare against for this filter",
  'titleJoin' : "How to combine if both filters are defined (if only one of the two filters is defined, the other filter is ignored)",

  'paramXaxis': "X...",
  'paramYaxis': "Y...",
  'paramColor': "Color By",
  'paramLabel': "Group By",
  'titleXaxis': "Column to be used on the 'X' (horizontal) axis of the chart",
  'titleYaxis': "Column to be used on the 'Y' (vertical) axis of the chart",
  'titleLabel': "Column to be used to label points on the chart",
  'titleColor': "Column to be used to color points on the chart",
  'titleChartPalette' : "Set of colors for points on the chart",
  'textChartPalette'  : "Palette",
};
C.ops = [
  { op: 'none', text: "Crit: Op..." },
  { op: 'hits', text: "matches" },
  { op: 'miss', text: "not match" },
  { op: 'iseq', text: "equals" },
  { op: 'nteq', text: "not equal" },
  { op: 'less', text: "less than" },
  { op: 'more', text: "more than" },
  { op: 'atmo', text: "at most" },
  { op: 'atle', text: "at least" }
];
C.views = [
  { quick: 'Table', verbose: "Display each result as a row of a formatted table [default view]" },
  { quick: 'Chart', verbose: "Graphical view of results in the dataset, interactive scatterplot of selected data" }
];
C.dialogs = [
  '#fetcher', '#columns', '#filters', '#viewers', '#exports'
];
C.palettes = [
  'Monochrome',
  'Viridis',
  'Rainbow'
//  'Cool', 'Warm',
//  'Viridis', 'Magma', 'Inferno', 'Plasma',
//  'Blues', 'Greens', 'Greys', 'Oranges', 'Purples', 'Reds',
//  'BuGn', 'BuPu', 'GnBu', 'OrRd', 'PuBuGn', 'PuBu', 'PuRd', 'RdPu',
//    'YlGnBu', 'YlGn', 'YlOrBr', 'YlOrRd',
//  'BrBG', 'PRGn', 'PiYG', 'PuOr', 'RdBu', 'RdGy', 'RdYlBu', 'RdYlGn',
//  'Spectral', 'Rainbow', 'Sinebow', 'CubehelixDefault'
];
C.normColor = 'steelblue';
C.highColor = 'red';

C.graphLabelHeight = 12; // in pixels, depends upon default font for page...
C.graphAxisHeight = 12; // height in pixels of X Axis w/ labels
C.graphAxisWidth  = 50; // width in pixels of Y Axis w/ labels
C.graphCircleSize = 5;  // radius in pixels of dots drawn on graph

C.rowlimit = 100;        // limit tables to this many rows by default
C.showFirst = 5;        // show the first N cols by default

C.exportOpts = { type: 'text/csv;charset=utf-8' };



///////////////////////////////////////////////////////////////////////////
// Utility Functions

// Get Fn
// -- utility function instead of lambdas for D3: return named field
function getFn(field) {
  if (typeof(field) === 'undefined') {
    return function(object) { return object; };
  } else {
    return function(object) { return object[field]; };
  }
}

// Test Fn
// -- utility function instead of lambdas: return if named field equals value
function testFn(value, field, equals) {
  if (typeof(equals) !== 'undefined' && equals === false) {
    // then specified a not-equals test
    if (typeof(field) === 'undefined') {
      return function(object) { return object !== value; };
    } else {
      return function(object) { return object[field] !== value; };
    }
  } else {
    if (typeof(field) === 'undefined') {
      return function(object) { return object === value; };
    } else {
      return function(object) { return object[field] === value; };
    }
  }
}

// Compose
// -- utility function for less lambdas in D3
function compose(g, h) {
  return function(d) {
    return g(h(d));
  };
}

// Hat tip to Andy Pearce for "even fewer lambdas" suggestions used above


// Date Parse
var time_format = d3.timeFormat("%c");
var file_format = d3.timeFormat("%Y%m%d-%H%M%S");


// Is Useful
// -- Check if a passed in parameter has can be used for something
function isUseful(x) {
  if (x === undefined) { return false; }
  if (x === null) { return false; }
  if (x === '') { return false; }
  return true;
}

// Is Valid
// -- Check if a passed parameter is at least something...
function isValid(x) {
  if (x === undefined) { return false; }
  if (x === null) { return false; }
  return true;
}


/////////////////////////////////////////////////////////////////////////////
// UI Functions


//
// UI Utility
//


// Make Control
// -- standardized layout of UI elements
//
function make_control(id, togglefunc, clear_content) {
  var id_string = '#' + id;
  var div = d3.select(id_string);

  div
    .classed('inactive', false)
  ;

  div.selectAll('div.toggle')
    .on('click', togglefunc)
  ;
  div.selectAll('div.label')
    .on('click', togglefunc)
  ;

  var content = div.select('div.content');
  content
    .style('opacity', 0)
    .style('pointer-events', 'none')
  ;
  if (clear_content) {
    content.selectAll('*').remove();
  }

  return content;
}


// Toggle Control
// -- show/hide the buttons/forms/whatever for one input
//
function toggle_control(id) {
  var control = d3.select(id);
  var there = control.select('div.content');
  if (there.style('opacity') > 0) {
    // then the control is visible, and we want to hide it
    hide_control(id);
  } else {
    show_control(id);
  }
}

// Show Control
// -- Show the specified control (display the dialog -- enable the action)
function show_control(id) {
  C.dialogs.forEach(function(d) { if (d !== id) { hide_control(d); } });

  var control = d3.select(id);

  var here = control.select('div.toggle');
  here.text("\u25bd");        // .text("+")

  var width = window.innerWidth;
  var x = control.node().getBoundingClientRect().left;
  var y = control.node().getBoundingClientRect().bottom;
  var there = control.select('div.content');
  there
    .style('opacity' , 1)
    .style('pointer-events', 'auto')
    .style('top' , y + 'px')
  ;
  if (x < width / 2 ) {
    there
      .style('left', x + 'px')
    ;
  } else {
    x = width - control.node().getBoundingClientRect().right;
    there
      .style('right', x + 'px')
    ;
  }

  var box = control.select('div.lead');
  box.classed('live', true);
}

// Hide Control
// -- Hide the specified control (hide the dialog -- we're done)
function hide_control(id) {
  var control = d3.select(id);

  var here = control.select('div.toggle');
  here.text("\u25b7");        // .text("-")

  var there = control.select('div.content');
  there
    .style('opacity', 0)
    .style('pointer-events', 'none')
  ;

  var box = control.select('div.lead');
  box.classed('live', false);
}


function toggle_fetcher() {
  toggle_control('#fetcher');
}
function toggle_columns() {
  toggle_control('#columns');
}
function toggle_filters() {
  toggle_control('#filters');
}
function toggle_viewers() {
  toggle_control('#viewers');
}
function toggle_exports() {
  toggle_control('#exports');
}


//
// Datasets
//


// Make Fetcher
// -- generate inputs to define a path to go fetch
//
function make_fetcher() {

  var div = make_control('fetcher', toggle_fetcher, false);

  div.select('#DataWeb')
    .on('change', op_loaddata)
  ;
  div.select('#DataLocal')
    .on('change', op_readdata)
  ;
  div.select('#DataDrop')
    .on('drop', op_dragdata)
    .on('dragover', op_enabledrag)
    .on('dragenter', op_enabledrag)
    .on('dragleave', op_disabledrag)
  ;
  div.select('#DataPaste')
    .on('change', op_copydata)
  ;
  div.select('#DataParse')
    .on('change', op_copydata)
  ;
}


// Display Message
// -- Throw up a specified message in the display
function displayMessage(mess) {
    d3.select('div.display').selectAll('*').remove();
    d3.select('div.display').append('p')
      .text(mess)
    ;
}


// Op Load Data
// -- load whichever dataset is specified
//
function op_loaddata() {
  var input = d3.select(this).node().value;
  if (isUseful(input)) {
    hide_control('#fetcher');
    displayMessage(C.strings.textLoading);
    clear_state();
    V.name = input;
    V.from = 'Web';
    fetch_data(V.name);
  }

  // Data processed, clear the pasted values
  d3.select(this).node().value = '';
}

// Op Copy Data
// -- Handle copy-and-paste data
//
function op_copydata() {
  var input = d3.select(this).node().value;
  if (isUseful(input)) {
    hide_control('#fetcher');
    displayMessage(C.strings.textLoading);
    clear_state();
    V.name = "Copy-and-Paste";
    V.from = 'Paste';
    copy_data(input);
  }

  // Data processed, clear the pasted values
  d3.select(this).node().value = '';
}

// Do Read Data
// -- Given a local file handle, get ready to process it
function do_readdata(file) {
  if (isUseful(file)) {
    hide_control('#fetcher');
    displayMessage(C.strings.textLoading);
    clear_state();
    V.name = file.name;
    V.from = 'Local';
    read_data(file);
  }
}

// Op Read Data
// -- Load a local file as the dataset
//
function op_readdata() {
  var input = d3.event.target.files[0];
  do_readdata(input);
}

// Op Drag Data
// -- Load a local file based on a 'drop' event
function op_dragdata() {
  d3.event.stopPropagation();
  d3.event.preventDefault();

  d3.select('#DataDrop')
    .classed('ready', false)
  ;

  var dt = d3.event.dataTransfer;
  var input= dt.files[0];
  do_readdata(input);
}

// Op Enable Drag
// -- no response to this event
function op_enabledrag() {
  d3.event.stopPropagation();
  d3.event.preventDefault();

  d3.select('#DataDrop')
    .classed('ready', true)
  ;
}

// Op Disable Drag
// -- no response to this event
function op_disabledrag() {
  d3.event.stopPropagation();
  d3.event.preventDefault();

  d3.select('#DataDrop')
    .classed('ready', false)
  ;
}


//
// Columns
//


// Make Columns
// -- generate inputs to control column types
function make_columns() {
  var div = make_control('columns', toggle_columns, true);

  var box = div.append('div')
    .classed('input-column', true);

  box.selectAll('div')
    .data(V.info)
    .enter()
    .append('div')
      .classed('column', true)
      .each(function(d,i) {
        d3.select(this).append('input')
          .classed('input-text', true)
          .attr('title', C.strings.titleColFormat)
          .attr('size', 6)
          .property('value', d.format)
          .property('idx', i)
          .attr('type', 'input')
          .on('change', op_setformat)
        ;

        var element = d3.select(this).append('select')
          .classed('input-drop clickable', true)
          .attr('title', "What type to use for this column")
          .on('change', op_changetype);
        element.selectAll('option')
          .data(['date', 'string', 'number'])
          .enter()
            .append('option')
            .property('selected', testFn(d.type))
            .attr('value', function(e) { return i + ',' + e; })
            .text(getFn())
        ;

        d3.select(this).append('button')
          .classed('input-select clickable', true)
          .classed('input-show', d.show === 'show')
          .text(d.quick)
          .attr('title', d.verbose)
          .property('value', d.idx)
          .on('click', op_flipshow)
        ;
      });

}


// Op Change Type
// -- capture a request to change type of column
function op_changetype() {
  var input = d3.select(this).node().value;
  var parts = input.split(',', 2);
  var idx = +parts[0];
  var type = parts[1];

  //ToDo: validate inputs, !isNaN(idx) and type %IN% string/number/date/
  V.info[idx].type = type;

  update_view();
}

// Op Set Format
// -- capture a format for string conversion
function op_setformat() {
  var input = d3.select(this).node().value;
  var idx = +d3.select(this).node().idx;

  V.info[idx].format = input;
  V.info[idx].dateParse = d3.timeParse(input);
  V.info[idx].dateFormat = d3.timeFormat(input);

  update_view();
}

// Op FlipShow
// -- flip the show/hide status for this element
function op_flipshow() {
  var input = d3.select(this).node().value;
  var idx = +input;
  var current = V.info[idx].show;

  V.info[idx].show = current === 'show' ? 'hide' : 'show';

  var div = d3.select('div.columns');
  div.selectAll('button.input-select')
    .filter(testFn(idx, 'idx'))
    .classed('input-show', current !== 'show')
  ;

  update_view();
}



//
// Filters
//


// Make Filters
// -- generate filters
//
function make_filters() {

  var filterlist = V.info.map(getFn('quick'));
  filterlist.unshift(C.strings.baseField);

  var div = make_control('filters', toggle_filters, true);

  var filterA = div.append('div')
    .classed('input-filter', true)
  ;
  var filterB = div.append('div')
    .classed('input-filter', true)
  ;

  // initialize matching variables
  if (!isValid(V.critA)) {
    V.critA = {};
    V.critA.field = C.strings.baseField;
    V.critA.value = '';
    V.critA.op = 'none';
  }
  if (!isValid(V.critB)) {
    V.critB = {};
    V.critB.field = C.strings.baseField;
    V.critB.value = '';
    V.critB.op = 'none';
  }
  if (!isUseful(V.critJoin)) {
    V.critJoin = 'OR';
  }

  var e;        // element currently being defined

  e = filterA.append('select')
    .classed('input-drop', true)
    .attr('title', C.strings.titleField)
    .on('change', op_critAfield)
  ;
  e.selectAll('option')
    .data(filterlist)
    .enter()
      .append('option')
      .property('selected', testFn(V.critA.field))
      .attr('value', getFn())
      .text(getFn())
  ;

  e = filterA.append('select')
    .classed('input-drop', true)
    .attr('title', C.strings.titleOp)
    .on('change', op_critAop)
  ;
  e.selectAll('option')
    .data(C.ops)
    .enter()
      .append('option')
      .property('selected', testFn(V.critA.op, 'op'))
      .attr('value', getFn('op'))
      .text(getFn('text'))
  ;

  e = filterA.append('input')
    .classed('input-text', true)
    .attr('title', C.strings.titleValue)
    .attr('value', V.critA.value)
    .attr('type', 'input')
    .on('change', op_critAvalue)
  ;

  e = filterB.append('select')
    .classed('input-drop', true)
    .attr('title', C.strings.titleJoin)
    .on('change', op_critJoin)
  ;
  e.selectAll('option')
    .data(['OR', 'AND'])
    .enter()
      .append('option')
      .property('selected', testFn(V.critJoin))
      .attr('value', getFn())
      .text(getFn())
  ;

  e = filterB.append('select')
    .classed('input-drop', true)
    .attr('title', C.strings.titleField)
    .on('change', op_critBfield)
  ;
  e.selectAll('option')
    .data(filterlist)
    .enter()
      .append('option')
      .property('selected', testFn(V.critB.field))
      .attr('value', getFn())
      .text(getFn())
  ;

  e = filterB.append('select')
    .classed('input-drop', true)
    .attr('title', C.strings.titleOp)
    .on('change', op_critBop)
  ;
  e.selectAll('option')
    .data(C.ops)
    .enter()
      .append('option')
      .property('selected', testFn(V.critB.op, 'op'))
      .attr('value', getFn('op'))
      .text(getFn('text'))
  ;

  e = filterB.append('input')
    .classed('input-text', true)
    .attr('title', C.strings.titleValue)
    .attr('value', V.critB.value)
    .attr('type', 'input')
    .on('change', op_critBvalue)
  ;

}


// Crit A Field
// -- capture the change of field for criteria A
function op_critAfield() {
  var input = d3.select(this).node().value;
  V.critA.field = input;
  update_view();
}

// Crit A Op
// -- capture the change of field for criteria A
function op_critAop() {
  var input = d3.select(this).node().value;
  V.critA.op = input;
  update_view();
}

// Op Field A
// -- capture the change of field for criteria A
function op_critAvalue() {
  var input = d3.select(this).node().value;
  V.critA.value = input;
  update_view();
}

// Crit B Field
// -- capture the change of field for criteria B
function op_critBfield() {
  var input = d3.select(this).node().value;
  V.critB.field = input;
  update_view();
}

// Crit B Op
// -- capture the change of field for criteria B
function op_critBop() {
  var input = d3.select(this).node().value;
  V.critB.op = input;
  update_view();
}

// Op Field B
// -- capture the change of field for criteria A
function op_critBvalue() {
  var input = d3.select(this).node().value;
  V.critB.value = input;
  update_view();
}

function op_critJoin() {
  var input = d3.select(this).node().value;
  V.critJoin = input;
  update_view();
}



//
// Viewers
//


// Make Viewers
// -- display choices for viewers
//
function make_viewers() {

  var div = make_control('viewers', toggle_viewers, true);

  if (!isUseful(V.view)) {
    V.view = 'Table';
  }
  div.selectAll('div')
    .data(C.views)
    .enter()
    .append('div')
      .classed('viewer inline', true)
      .each(function() {
        d3.select(this).append('input')
          .classed('view-radio inline', true)
          .attr('type', 'radio')
          .attr('name', 'viewer')
          .attr('id', getFn('quick'))
          .attr('value', getFn('quick'))
          .attr('title', getFn('verbose'))
          .property('checked', testFn(V.view, 'quick'))
          .on('click', change_viewer)
        ;
        //d3.select(this).append('div')
        d3.select(this).append('label')
          .attr('class', 'view-label inline clickable')
          .attr('title', getFn('verbose'))
          .attr('for', getFn('quick'))
          .text(getFn('quick'))
        ;
      })
  ;
  div = div.append('div')
    .classed('view-details', true)
  ;
  div.selectAll('div')
    .data(C.views)
    .enter()
    .append('div')
      .classed('view-config', true)
      .attr('id', getFn('quick'))
  ;

  //
  // Table settings
  //
  div = d3.select('div.view-config#Table');
  var box;      // div containing elements being created
  var e;        // element being created

  if (!isValid(V.tableSqueeze)) {
    V.tableSqueeze = false;
  }
  box = div.append('div')
    .classed('view-setting', true)
    .attr('id', 'table-font')
  ;
  e = box.append('div')
    .classed('inline', true)
    .attr('title', C.strings.titleChangeFont)
    .text(C.strings.textChangeFont)
  ;
  e.append('button')
    .classed('table-toggle inline clickable', true)
    .text("\u25bc")
    .on('click', table_toggle)
  ;

  if (!isValid(V.rowlimit)) {
    V.rowlimit = C.rowlimit;
  }
  box = div.append('div')
    .classed('view-setting', true)
    .attr('id', 'table-limit')
  ;
  e = box.append('div')
    .classed('inline', true)
    .attr('title', C.strings.titleRowLimit)
    .text(C.strings.textRowLimit)
  ;
  e.append('input')
    .classed('input-text inline', true)
    .attr('placeholder', V.rowlimit+'')
    .attr('type', 'text')
    .attr('size', '3')
    .on('change', change_limit)
  ;

  //
  // Chart settings
  //
  make_chart_opts();

  if (!isUseful(V.palette)) {
    V.palette = C.palettes[0];
  }
  div = d3.select('div.view-config#Chart');
  box = div.append('div')
    .classed('view-setting', true)
    .attr('id', 'chart-palette')
  ;
  e = box.append('div')
    .classed('inline', true)
    .attr('title', C.strings.titleChartPalette)
    .text(C.strings.textChartPalette)
  ;
  e = box.append('select')
    .classed('input-drop', true)
    .attr('title', C.strings.titleChartPalette)
    .on('change', change_palette)
  ;
  e.selectAll('option')
    .data(C.palettes)
    .enter()
      .append('option')
      .property('selected', testFn(V.palette))
      .attr('value', getFn())
      .text(getFn())
  ;

  // All View-related UI is now created
  if (!isUseful(V.view)) {
    V.view = 'Table'; // default view until changed
  }
  show_config(V.view);
}


// Change Limit
// -- capture the change of field for criteria A
function change_limit() {
  var input = d3.select(this).node().value;
  input = parseInt(input);
  if (isNaN(input) || input < 1) {
    V.rowlimit = C.rowlimit;
  } else {
    V.rowlimit = input;
  }
  update_view();
}


// Table Toggle
// -- change size of font in table (smash)
function table_toggle() {
  var here = d3.select('div.view-label#Table').select('button.table-toggle');
  var there = d3.select('table.result-table');
  if (there.classed('smashed') === true) {
    there.classed('smashed', false);
    here.text("\u25bc");
  } else {
    there.classed('smashed', true);
    here.text("\u25b2");
  }
  V.tableSqueeze = !V.tableSqueeze;
}


// Change Palette
// -- capture the change of color palette
function change_palette() {
  var input = d3.select(this).node().value;
  V.palette = input;
  update_view();
}


// Show Config
// -- show the current configuration settings, hide the rest
function show_config(view) {
  C.views.forEach(function(d) {
    var selector = 'div.view-config#' + d.quick;
    d3.select(selector)
      .classed('hidden', d.quick === view ? false : true)
    ;
  });
}

// Change Viewer
// -- user requests a different view
//
function change_viewer() {
  V.view = this.value;
  show_config(V.view);
  update_view();
}


//
// Chart
//


// Make Chart Opts
// -- make the parameter settings for chart controls
//
function make_chart_opts() {

  function make_param_entry(par, fields, sel, text, title, func) {
    var div = par.append('div')
      .classed('input-filter', true)
      .attr('title', title)
    ;
    var e = div.append('div')
      .classed('param-label inline', true)
      .text(text)
    ;
    e = div.append('select')
      .classed('input-drop', true)
      .on('change', func)
    ;
    e.selectAll('option')
      .data(fields)
      .enter()
        .append('option')
        .attr('value', getFn())
        .text(getFn())
        .property('selected', testFn(sel))
    ;
  }

  G.Allfields = V.info.map(getFn('quick'));

  var div = d3.select('div.view-config#Chart')
    .append('div')
      .classed('chart-parameters', true)
  ;

  var field;

  // Pick a default column for X Axis
  if (!isUseful(V.xAxis)) {
    field = V.info.find(function(d) {
      return d.type !== 'string' && d.show === 'show';
    });
    if (!isValid(field)) {
      // nothing found at all, fall back to just 'Row #'
      field = { quick: 'Row #' };
    }
    V.xAxis = field.quick;
  }
  make_param_entry(
    div, G.Allfields, V.xAxis,
    C.strings.paramXaxis, C.strings.titleXaxis, op_xAxis
  );

  // Pick a default column for Y Axis (guess what is of interest...)
  if (!isUseful(V.yAxis)) {
    field = V.info.find(function(d) {
      return d.type !== 'string' && d.show === 'show' && d.quick !== V.xAxis;
    });
    if (!isValid(field)) {
      // nothing found at all, fall back to just 'Row #'
      field = { quick: 'Row #' };
    }
    V.yAxis = field.quick;
  }
  make_param_entry(
    div, G.Allfields, V.yAxis,
    C.strings.paramYaxis, C.strings.titleYaxis, op_yAxis
  );

  // Pick a default column for grouping (take a quick guess)
  if (!isUseful(V.group)) {
    field = V.info.find(function(d) {
      return d.show === 'show' && d.quick !== V.xAxis && d.quick !== V.yAxis;
    });
    if (!isUseful(field)) {
      field = V.info.find(function(d,i) {
        return i > 0 && d.quick !== V.xAxis && d.quick !== V.yAxis;
      });
      if (!isUseful(field)) {
        field = { quick: 'Row #' };        // safe choice for last resort
      }
    }
    V.group = field.quick;
  }
  make_param_entry(
    div, G.Allfields, V.group,
    C.strings.paramLabel, C.strings.titleLabel, op_group
  );

  // Pick a default column for coloring (again, a guess -- that is not X or Y)
  if (!isUseful(V.cAxis)) {
    field = V.info.find(function(d) {
      return d.type !== 'string' && d.quick !== V.xAxis && d.quick !==V.yAxis;
    });
    if (!isValid(field)) {
      // nothing found at all, fall back to just 'Row #'
      field = { quick: 'Row #' };
    }
    V.cAxis = field.quick;
  }
  make_param_entry(
    div, G.Allfields, V.cAxis,
    C.strings.paramColor, C.strings.titleColor, op_cAxis
  );
}

// Op xAxis
function op_xAxis() {
  var input = d3.select(this).node().value;
  V.xAxis = input;
  visualize();
}

// Op yAxis
function op_yAxis() {
  var input = d3.select(this).node().value;
  V.yAxis = input;
  visualize();
}

// Op group
function op_group() {
  var input = d3.select(this).node().value;
  V.group = input;
  visualize();
}

// Op cAxis
function op_cAxis() {
  var input = d3.select(this).node().value;
  V.cAxis = input;
  visualize();
}


//
// Exports
//
function make_exports() {
  make_control('exports', toggle_exports, false);
}


//
// Curtain
//


// Make Curtain
// -- functionality to show/hide inputs area
function make_curtain() {
  var div = d3.select('div.rigging');

  div.select('#curtain-pull')
    .on('click', toggle_curtain)
  ;

  G.hideConfigs = false;
  var e = d3.select('div.curtain')
    .style('display', 'none')
    .style('cursor', 'pointer')
    .on('click', toggle_curtain);
  e.selectAll('*').remove();
  e.append('h1')
    .text(C.strings.textCurtain);
  e.append('p')
    .classed('squished', true);

}


// Toggle Curtain
// -- Drop/Yank a curtain to hide inputs
function toggle_curtain() {
  G.hideConfigs = !G.hideConfigs;
  if (G.hideConfigs) {
    d3.select('div.curtain').select('p')
      .text(C.strings.textCurtainNote + time_format(G.timestamp));
    d3.select('div.inputs')
      .style('display', 'none');
    d3.select('div.curtain')
      .style('display', 'initial');
  } else {
    d3.select('div.inputs')
      .style('display', 'initial');
    d3.select('div.curtain')
      .style('display', 'none');
  }
}


//////////////////////////////////////////////////////////////////////////////
// Table View


// Tabulate
// -- create a new table to display data
//
function tabulate() {

  // Truncate data to display, if necessary
  var length = G.rows.length;
  var title = C.strings.textTableLead + V.name;
  title += filters_to_text();
  if (length > V.rowlimit) {
    title +=
      C.strings.textRecordPart1 + V.rowlimit +
      C.strings.textRecordPart2 + length +
      C.strings.textRecordEnd;
  } else {
    title += C.strings.textRecordAll + length + C.strings.textRecordEnd;
  }
  var tabledata = G.rows.slice(0, V.rowlimit);

  // Take away any existing table or text
  d3.select('div.display').selectAll('*').remove();

  d3.select('div.display').append('p')
    .text(title);

  // Set up to build a new table
  var table = d3.select('div.display').append('table');

  if (V.tableSqueeze) {
    table.classed('result-table smashed', true);
  } else {
    table.classed('result-table', true);
  }

  var thead = table.append('thead');
  var tbody = table.append('tbody');

  var columns = V.info
    .filter(testFn('show', 'show'))
    .map(getFn('quick'))
  ;

  // append the header row
  thead.append('tr')
    .selectAll('th')
    .data(columns).enter()
    .append('th')
      .text(getFn())
      .style('cursor', 'pointer')
      .on('click', function(col) {
        if (V.sortAscending) {
          d3.select('table.result-table').selectAll('th').filter(function(x){ return x === col; }).attr('class', 'aes');
          V.sortAscending = false;
        } else {
          d3.select('table.result-table').selectAll('th').filter(function(x){ return x === col; }).attr('class', 'des');
          V.sortAscending = true;
        }

        V.sort = col;
        update_view();
      });

  // create a row for each object in the data
  var rows = tbody.selectAll('tr')
    .data(tabledata)
    .enter()
    .append('tr');

  // create a cell in each row for each column
  rows.selectAll('td')
    .data(function (row) {
      return columns.map(function (col) {
        var val = stringify(row[col], col);
        return {column: col, value: val};
      });
    })
    .enter()
      .append('td')
      .text(getFn('value'))
  ;

}


// Stringify
// -- given a value and the name of its column, return a "pretty" version
function stringify(value, col_name) {
  if (!isValid(value)) {
    value = '';
  }
  var info = V.info.find(testFn(col_name, 'quick'));
  var val;
  switch (info.type) {
  case 'number':
    if (!isValid(value)) {
      val = '';
    } else {
      val = value.toString();
    }
    break;
  case 'date':
    if (!isValid(value)) {
      val = '';
    } else {
      if (isValid(info.dateFormat)) {
        var x = new Date();
        x.setTime(value);
        val = info.dateFormat(x);
      } else {
        val = value.toString();
      }
    }
    break;
  default:
    if (!isValid(value)) {
      val = '';
    } else {
      val = value;
    }
  }
  return val;
}



//////////////////////////////////////////////////////////////////////////////
// Charting Functions


// Tipped
// -- return true if field is included in tooltips
function tipped(col_info) {
  var use = false;
  if (
    col_info.show === 'show'
    || col_info.quick === V.xAxis
    || col_info.quick === V.yAxis
    || col_info.quick === V.cAxis
    || col_info.quick === V.group
  ) {
    use = true;
  } else {
    use = false;
  }
  return use;
}


// Gen Tip
// -- generate an HTML string for a tooltip from a row in the CSV
function genTip(object) {
  var mess = '';
  V.info.forEach(function(d) {
    if (tipped(d)) {
      mess += "<li class=\"bulletless\">";
      mess += "<span class=\"tip-label\">";
      mess += d.quick;
      mess += "</span>";
      mess += "<span class=\"tip-value\">";
      mess += stringify(object[d.quick], d.quick);
      mess += "</span>";
      mess += "</li>";
    }
  });
  return mess;
}


// Visualize
// -- create the chart visualization
//
function visualize() {
  var div = d3.select('div.display');

  // Take away any existing table or text
  div.selectAll('*').remove();

  //
  // Header
  //
  var xCol = V.xAxis;
  var yCol = V.yAxis;
  var cCol = V.cAxis;

  var title = C.strings.textChartLead + V.name + filters_to_text() +
    C.strings.textChartWith + yCol + C.strings.textChartOver + xCol;
  var p = div.append('p')
    .text(title);

  var tip = div.append('div')
    .classed('tooltip', true)
    .style('opacity', 0);

  //
  // Preparation
  //
  var above = tip.node().getBoundingClientRect().top + 32;
  G.widthSVG = window.innerWidth - 40;
  G.marginR = C.graphLabelHeight + 1 + C.graphAxisWidth;
  G.marginL = 2 * C.graphCircleSize;
  G.marginX = G.marginL + G.marginR;
  G.widthPlot = G.widthSVG - G.marginX;
  G.heightSVG = window.innerHeight - above;
  G.marginB = C.graphLabelHeight + C.graphAxisHeight;
  G.marginT = 2 * C.graphCircleSize;
  G.marginY = G.marginT + G.marginB;
  G.heightPlot = G.heightSVG - G.marginY;

  var xScale;
  var yScale;
  var cScale;
  var xtype = V.info.find(testFn(xCol, 'quick')).type;
  var ytype = V.info.find(testFn(yCol, 'quick')).type;
  var ctype = V.info.find(testFn(cCol, 'quick')).type;
  xScale = xtype === 'date' ? d3.scaleTime() : d3.scaleLinear();
  yScale = ytype === 'date' ? d3.scaleTime() : d3.scaleLinear();

  var xExtent = d3.extent(G.rows, function(d) { return +d[xCol]; });
  var yExtent = d3.extent(G.rows, function(d) { return +d[yCol]; });
  var cExtent = d3.extent(G.rows, function(d) { return +d[cCol]; });
  xScale = xScale.domain(xExtent).range([0, G.widthPlot]);
  yScale = yScale.domain(yExtent).range([G.heightPlot-G.marginT, G.marginT]);

  var color_interpolator = d3['interpolate' + V.palette];
  if (ctype === 'string') {
    G.cset = G.rows
      .map(getFn('cCol'))
      .sort(d3.ascending)
      .reduce(function(arr,elem) {
        // push elem on array if it is not the same as the last in the array
        if (arr.slice(-1)[0] !== elem) { arr.push(elem); }
        return arr;
      }, []);
    cExtent = [0, G.cset.length];
  }
  cScale = d3.scaleSequential(color_interpolator);
  cScale = cScale.domain(cExtent);

  var xAxis = d3.axisBottom(xScale);
  var yAxis = d3.axisLeft(yScale);

  var brush = d3.brush()
    .on('end', brushend)
  ;
  var idleTimeout;      // if set then a first click was recent
  var idleDelay = 350;  // milliseconds for max duration of double-click

  function idled() {
    // called when exceeded time for double click, clear timeout
    idleTimeout = null;
  }

  function brushend() {
    var s = d3.event.selection;
    if (!s) {
      // selection is empty, check timeout and if so return to original view
      if (!idleTimeout) { return idleTimeout = setTimeout(idled, idleDelay); }
      xScale.domain(xExtent);
      yScale.domain(yExtent);
    } else {
      // user has selected an area, change the domains and let's zoom there
      xScale.domain([ s[0][0], s[1][0] ].map(xScale.invert, xScale));
      yScale.domain([ s[1][1], s[0][1] ].map(yScale.invert, yScale));
      svg.select('.brush')
        .call(brush.move, null)
      ;
    }
    zoom();
  }

  function zoom() {
    var t = svg.transition()
      .duration(1000)
      .ease(d3.easeQuadInOut)
    ;
    svg.select('.axis--x')
      .transition(t)
      .call(xAxis)
    ;
    svg.select('.axis--y')
      .transition(t)
      .call(yAxis)
    ;
    svg.selectAll('.dots')
      .transition(t)
      .attr('cx', compose(xScale, getFn(xCol)))
      .attr('cy', compose(yScale, getFn(yCol)))
    ;
  }

  function color_index(x) {
    if (V.palette === C.palettes[0]) {
      // monochrome: use 'Norm' color
      return C.normColor;
    } else {
      var ret;
      switch (ctype) {
      case 'string':
        ret = G.cset.findIndex(testFn(x));
        break;
      default:
        ret = x;
      }
      return cScale(ret);
    }
  }

  //
  // Generate SVG
  //
  var svg = div.append('svg')
    .attr('width', G.widthSVG)
    .attr('height', G.heightSVG)
  .append('g')
    .attr('transform', 'translate(' + G.marginR + ',' + 0 + ')');

  // Add a brush to the SVG
  svg.append('g')
    .attr('class', 'brush')
    .call(brush)
  ;

  // Add dots for each data point
  svg.selectAll('.dots')
    .data(G.rows)
    .enter()
      .append('circle')
        .attr('class', 'dots')
        .attr('cx', compose(xScale, getFn(xCol)))
        .attr('cy', compose(yScale, getFn(yCol)))

        // define the look for each 'dot'
        .attr('fill', compose(color_index, getFn(cCol)))
        .attr('fill-opacity', 0.5)
        .attr('r', C.graphCircleSize)

        .on('mouseover', function(d) {
          d3.selectAll('.dots').attr('r', 5);
          // show a tooltip with this label
          tip
            .style('left', d3.event.pageX + 'px')
            .style('top' , d3.event.pageY + 'px')
            .html(genTip(d));
          tip.transition()
              .duration(1000)
              .ease(d3.easeElastic.period(0.4))
            .style('opacity', 0.9)
          ;

          // highlight all dots with the same label value
          var current_value = d[V.group];
          svg.selectAll('.dots')
            .filter(testFn(current_value, V.group))
              .transition()
                .duration(1000)
                .ease(d3.easeElastic.period(0.4))
              .attr('fill', C.highColor)
              .attr('fill-opacity', 0.8)
          ;
        })
        .on('mouseout', function() {
          // remove highlight and restore regular coloring across every dot
          svg.selectAll('.dots')
            .transition()
              .duration(1000)
              .ease(d3.easeElastic.period(0.4))
            .attr('fill-opacity', 0.5)
            .attr('fill', compose(color_index, getFn(cCol)))
          ;

          // hide the tooltip (until needed again)
          tip.transition()
              .duration(1000)
              .ease(d3.easeElastic.period(0.4))
            .style('opacity', 0)
          ;
        })
  ;

  // Add axes to the chart
  svg.append('g')
    .attr('class', 'axis axis--x')
    .attr('transform', 'translate(0,' + (G.heightPlot-G.marginT) + ')')
    .call(xAxis)
  ;
  svg.append('g')
    .attr('class', 'axis axis--y')
    .attr('transform', 'translate(' + 0 + ',0)')
    .call(yAxis)
  ;

  // Add labels to the axes
  svg.append('text')
    .attr('text-anchor', 'middle')
    .attr('transform',
      'translate(' + (0-C.graphAxisWidth) + ',' + (G.heightPlot/2) + ')rotate(-90)'
    )
    .text(yCol)
  ;
  svg.append('text')
    .attr('text-anchor', 'middle')
    .attr('transform',
      'translate(' + (G.widthPlot/2) + ',' + (G.heightPlot+G.marginB) + ')'
    )
    .text(xCol)
  ;
}





//////////////////////////////////////////////////////////////////////////////
// Viewers


// Update View
// -- update the display area according to the current settings
function update_view() {
  G.rows = parse_data(G.data);  // reparse data (if cols changed)
  check_filters();              // refilter data (if filters changed)
  sort_rows(V.sort);

  switch (V.view) {
  case 'Table':
    tabulate();
    break;
  case 'Chart':
    visualize();
    break;
  default:
    no_such_view();
  }

  // prepare to export things as they are seen now
  G.timestamp = new Date();  // remember when we obtained this data
  prep_exports();
}


// No Such View
// -- fall back for when no such view is available
function no_such_view() {
  d3.select('div.display').selectAll('*').remove();
  d3.select('div.display').append('p')
    .text(C.strings.textBadViewer);
}



//////////////////////////////////////////////////////////////////////////////
// Export Functions


// Prep Exports
// -- generate exportable files from current data
//
function prep_exports() {
  var data;
  var blob;

  data = d3.csvFormat(G.data);
  blob = new Blob([data], C.exportOpts);
  if (isValid(G.fileOrig)) {
    window.URL.revokeObjectURL(G.fileOrig);
  }
  G.fileOrig = window.URL.createObjectURL(blob);
  d3.select('#link-original')
    .attr('href', G.fileOrig)
    .attr('download', export_name("original"))
  ;

  data = d3.csvFormat(G.rows);
  blob = new Blob([data], C.exportOpts);
  if (isValid(G.fileCurr)) {
    window.URL.revokeObjectURL(G.fileCurr);
  }
  G.fileCurr = window.URL.createObjectURL(blob);
  d3.select('#link-current')
    .attr('href', G.fileCurr)
    .attr('download', export_name("current"))
  ;

  var selected = V.info.filter(testFn('show', 'show'));
  var subset = G.rows.map(function(d) {
    var obj = {};
    selected.forEach(function(e) {
      obj[e.quick] = stringify(d[e.quick], e.quick);
    });
    return obj;
  });
  data = d3.csvFormat(subset);
  blob = new Blob([data], C.exportOpts);
  if (isValid(G.fileSel)) {
    window.URL.revokeObjectURL(G.fileSel);
  }
  G.fileSel = window.URL.createObjectURL(blob);
  d3.select('#link-selected')
    .attr('href', G.fileSel)
    .attr('download', export_name("selected"))
  ;

}


// Export Name
// -- utility to generate a safe file name for exports
function export_name(tag) {
  var timestr = file_format(G.timestamp);
  return "CSView-" + tag + "-" + timestr + ".csv";
}


//////////////////////////////////////////////////////////////////////////////
// Execution Functions


//
// Filters
//


// Filters To Text
// -- return a string built from current filter options
//
function filters_to_text() {
  function filter_to_str(f) {
    var mess = '';
    mess += f.field + " ";
    mess += C.ops.find(testFn(f.op, 'op')).text + " ";
    // ACA: call stringify()?
    var info = V.info.find(testFn(f.field, 'quick'));
    switch (info.type) {
      case 'number':
        mess += f.value.toString();
        break;
      case 'date':
        var x = new Date();
        x.setTime(f.value);
        mess += info.dateFormat(x);
        break;
      default:
        mess += "'" + f.value + "'";
    }
    return mess;
  }

  var filters = [];
  filters.push(crit_set(V.critA), crit_set(V.critB));
  filters = filters.filter(testFn(null, undefined, false));

  var str = '';
  switch (filters.length) {
  case 1:
    str += C.strings.textFilterWhere;
    str += filter_to_str(filters[0]);
    break;
  case 2:
    str += C.strings.textFilterWhere;
    str += filter_to_str(filters[0]);
    str += " " + V.critJoin + " ";
    str += filter_to_str(filters[1]);
    break;
  default:
  }
  return str;
}


// Crit Set
// -- return an object containing current valid criteria (or null)
//
function crit_set(crit) {
  if (!isValid(crit)) { return null; }
  if (!isUseful(crit.field)) { return null; }
  if (crit.field === C.strings.baseField) { return null; }
  if (!isUseful(crit.op)) { return null; }
  if (crit.op === 'none') { return null; }
  if (!isUseful(crit.value)) { return null; }
  var set = {
    field: crit.field,
    value: crit.value,
    op:    crit.op
  };

  // convert value from string to number, if necessary
  var info = V.info.find(testFn(crit.field, 'quick'));
  switch (info.type) {
    case 'number':
      set.value = +set.value;
      break;
    case 'date':
      set.value = +info.dateParse(set.value);
      break;
    default:
      //set.value = set.value;
  }

  // define a RegExp if necessary
  switch (crit.op) {
    case 'hits':
    case 'miss':
      set.re = RegExp(crit.value, 'i');
      set.value = set.value + '';        // force value to be a string
      break;
    default:
      set.re = null;
  }

  return set;
}


// Check Filters
// -- evaluate filters and see if data needs to be filtered
//
function check_filters() {
  var filters = [];
  filters.push(crit_set(V.critA), crit_set(V.critB));
  filters = filters.filter(testFn(null, undefined, false));
  switch (filters.length) {
  case 1:
    run_filters(filters, false);
    break;
  case 2:
    run_filters(filters, V.critJoin === 'AND');
    break;
  default:
    // Yikes! we misunderstood the filters, do nothing...
  }
}


// Run Filters
// -- run listed filters as defined
//
function run_filters(list, and) {

  function compare(x, spec) {
    switch (spec.op) {
    case 'iseq':
      return x == spec.value;
    case 'nteq':
      return x != spec.value;
    case 'less':
      return x < spec.value;
    case 'more':
      return x > spec.value;
    case 'atmo':
      return x <= spec.value;
    case 'atle':
      return x >= spec.value;
    case 'incl':
      return x.includes(spec.value);
    case 'excl':
      return ! x.includes(spec.value);
    case 'hits':
      return spec.re.test(x);
    case 'miss':
      return ! spec.re.test(x);
    default:
      return false;
    }
  }
  
  if (and) {
    G.rows = G.rows.filter(function(d) {
      return list.every(function(spec) {
        return compare(d[spec.field], spec);
      });
    });
  } else {
    G.rows = G.rows.filter(function(d) {
      return list.some(function(spec) {
        return compare(d[spec.field], spec);
      });
    });
  }
}


//
// Sorts
//


// Sort Rows
// -- sort rows based on field
//
function sort_rows_num(d) {
  if (V.sortAscending) {
    G.rows.sort(function(a, b) { return a[d] - b[d]; });
  } else {
    G.rows.sort(function(a, b) { return b[d] - a[d]; });
  }
}

function sort_rows_str(d) {
  if (V.sortAscending) {
    G.rows.sort(function(a, b) { return d3.ascending(a[d], b[d]); });
  } else {
    G.rows.sort(function(a, b) { return d3.descending(a[d], b[d]); });
  }
}

function sort_rows(col) {
  if (isUseful(col)) {
    var info = V.info.find(testFn(col, 'quick'));
    switch (info.type) {
      case 'date':
      case 'number':
        sort_rows_num(col);
        break;
      default:
        sort_rows_str(col);
    }
  }
}




//////////////////////////////////////////////////////////////////////////////
// Processing Functions


// Parse Data
// -- return a copy of the array with elements of objects in native form
function parse_data(data) {
  return data.map(function(d) {
  var o = {};
    Object.keys(d).map(function(e) {
      var info = V.info.find(testFn(e, 'quick'));
      var val;
      switch (info.type) {
      case 'number':
        val = +d[e];
        if (isNaN(val)) {
          val = +d[e].replace(/[^0-9.]/g, '');
        }
        break;
      case 'date':
        if (isValid(info.dateParse)) {
          val = +info.dateParse(d[e]);
        } else {
          val = d[e];
        }
        break;
      default:
        val = d[e];
      }
      o[e] = val;
    });
    return o;
  });
}


// Fetch Fail
// -- callback in the case of failure in fetch
function fetch_fail(error) {
  var mess = C.strings.textFetchFail + " '" + V.name + "': " + error.message;

  displayMessage(mess);
  hide_control('#fetcher');
}


// Fetch Data
// -- given a path to CSV, read it and setup to process as CSV
//
function fetch_data(url) {
  d3.csv(url)
    .then(function(data) {
      process_csv(data);
      complete_view();
    })
    .catch(fetch_fail)
  ;
}


// Read Data
// -- give a local File object, read it and set up to process as CSV
//
function read_data(file) {
  var reader = new FileReader();
  reader.onload = function(evt) {
    var raw = evt.target.result;
    var data = d3.csvParse(raw);

    process_csv(data);
    complete_view();
  };
  reader.readAsText(file);
}


// Copy Data
// -- take data as a string (as pasted) then parse and process
//
function copy_data(raw) {
  var data;
  var commas = (raw.match(/,/g)||[]).length;
  var tabs = (raw.match(/\t/g)||[]).length;
  if (tabs > commas) {
    data = d3.tsvParse(raw);
  } else {
    data = d3.csvParse(raw);
  }
  process_csv(data);
  complete_view();
}


// Process CSV
// -- take input data, create all of our internal structures
//
function process_csv(data) {
  // keep a copy of the data, with all values (including headers) trimmed
  G.data = data.map(function(d,i) {
    var obj = {};        // start out with nothing, empty
    obj['Row #'] = i;    // ensure we at least have one field, a 'Row #'

    // process each element in this row of the CSV
    Object.keys(d).map(function(e) {
      var key = e.trim();          // trim each key for easier work later
      var val = isValid(d[e]) ? d[e] : '';  // elements could be missing...
      obj[key] = val;
    });
    return obj;
  });

  // now, keep track of some info about each column in that data
  G.cols = data.columns.map(function(d) { return d.trim(); });
  G.cols.unshift('Row #');
  if (!isValid(V.info)) {
    V.info = G.cols.map(function(d,i) {
      var type;
      if (i === 0) {
        type = 'number';
      } else {
        var someNotNumeric = G.data.some(function(e) { return isNaN(+e[d]);});
        type = someNotNumeric === true ? 'string' : 'number';
      }
      var show;
      show = (i > 0 && i <= C.showFirst) ? 'show' : 'hide';

      return {
        idx: i,
        quick: d.trim(),
        type: type,
        show: show,
        dateParse: null,
        dateFormat: null
      };
    });
  }
  G.rows = parse_data(G.data);
}


// Complete View
// -- once we have data, we need to complete the UI and display
//
function complete_view() {
  make_columns();
  make_filters();
  make_viewers();
  make_exports();
  update_view();
}


// Clear State
// -- Clear the 'view' state for a fresh start
//
function clear_state() {
  V = { version: 0 };  // view-related values (view can be saved/restored)
}


// Initialize
// -- assume empty, just build the 'fetch' interface
//
function initialize() {
  make_fetcher();       // once fetcher is visible, user can begin
  make_curtain();       // initialize the 'curtain' (hides the configs)
  G.timestamp = new Date();  // set an initial time (updates w/ each view)
}



//////////////////////////////////////////////////////////////////////////////
// Mainline

initialize();

})();   // IIFE for isolation

