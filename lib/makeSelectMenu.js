import * as d3 from 'd3';
import './makeSelectMenu.scss';

function openMenu (d3el) {
  // this is the same as the this from the click event callback
  let originalBounds = this.getBoundingClientRect();
  d3el.classed('expanded', true);
  let selectedBounds = this.getBoundingClientRect();
  d3el.style('position', 'relative')
    .style('top', (originalBounds.top - selectedBounds.top) + 'px');

  // Stick a temporary top layer on everything outside the menu
  // that will close the menu if clicked
  let menuBBox = d3el.node().getBoundingClientRect();
  let masks = d3.select('body').selectAll('.selectMenuMask')
    .data(['left', 'right', 'top', 'bottom']);
  masks = masks.enter()
    .append('div')
    .classed('selectMenuMask', true)
    .merge(masks);
  masks.style('position', 'absolute')
    .style('z-index', 10000000)
    .style('pointer-events', 'all')
    .style('left', d => d === 'right' ? menuBBox.right + 'px' : '0px')
    .style('top', d => d === 'bottom' ? menuBBox.bottom + 'px' : '0px')
    .style('right', d => d === 'left' ? (window.innerWidth - menuBBox.left) + 'px' : '0px')
    .style('bottom', d => d === 'top' ? (window.innerHeight - menuBBox.top) + 'px' : '0px')
    .on('click', () => {
      // this is the same as the this from the original click event callback
      closeMenu.call(this, d3el);
    });
}

function closeMenu (d3el) {
  // this is the same as the this from the original click event callback
  // (in the event that one of the masks was clicked, this refers to the
  // originally selected item, not the mask)
  let containerElement = d3el.node();
  let clickedItem = d3.select(this);
  let oldValue = containerElement.value;
  // clear all the inline styles, with the old selected and expanded class names
  d3el.classed('expanded', false)
    .style('position', null)
    .style('top', null);
  d3el.selectAll('li')
    .classed('selected', false)
    .style('position', null)
    .style('top', null);
  clickedItem.classed('selected', true);
  let newValue = containerElement.value;
  d3.select('body').selectAll('.selectMenuMask').remove();
  if (oldValue !== newValue) {
    // TODO: does the event listener expect an object with the new / old values?
    containerElement.dispatchEvent(new window.Event('change'));
  }
}

function handleClick (d3el) {
  let containerExpanded = d3el.classed('expanded');
  if (containerExpanded) {
    // Just closed the menu; implement the change
    closeMenu.call(this, d3el);
  } else {
    // Just opened the menu; base everything on the bounding box
    // of the list item that was originally visible
    openMenu.call(this, d3el);
  }
}

export default function (containerElement) {
  let d3el = d3.select(containerElement);

  // Attach properties to make the li or ol DOM element behave more like a
  // select element
  Object.defineProperty(containerElement, 'value', { get: function () {
    let selectedElement = d3el.select('.selected');
    return selectedElement.attr('value') || selectedElement.text();
  }});
  Object.defineProperty(containerElement, 'selectedIndex', { get: function () {
    let entries = this.children;
    for (let i = 0; i < entries.length; i += 1) {
      if (entries[i].classList.contains('selected')) {
        return i;
      }
    }
    return -1;
  }});

  // Make the entries respond to clicks
  d3el.selectAll('li')
    .on('click', function () { handleClick.call(this, d3el); });
}
