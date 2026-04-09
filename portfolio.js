
  // grab the three elements we need
  const divider   = document.getElementById('divider')
  const container = divider.parentElement        // the outer box
  const leftPanel = container.querySelector('.panel-left')
  const rightPanel = container.querySelector('.panel-right')
 
  // this variable tracks whether the user is currently dragging
  let isDragging = false
 
  // when the user presses down on the divider — start dragging
  divider.addEventListener('mousedown', function() {
    isDragging = true
    document.body.style.cursor = 'ew-resize'   // change cursor on whole page
    document.body.style.userSelect = 'none'    // stop text selection while dragging
  })
 
  // when the user moves the mouse anywhere on the page
  document.addEventListener('mousemove', function(e) {
    // if they're not dragging, do nothing
    if (!isDragging) return
 
    // get the position of the container box on the screen
    const containerRect = container.getBoundingClientRect()
 
    // calculate how far the mouse is from the left edge of the container
    // e.clientX = mouse position from left edge of browser window
    let mouseX = e.clientX - containerRect.left
 
    // make sure the divider can't go past the edges
    // minimum 100px from left, minimum 100px from right
    const minX = 100
    const maxX = containerRect.width - 100
    mouseX = Math.max(minX, Math.min(maxX, mouseX))
 
    // calculate percentages for each panel
    const leftPercent  = (mouseX / containerRect.width) * 100
    const rightPercent = 100 - leftPercent
 
    // apply the new widths to each panel
    leftPanel.style.width  = leftPercent  + '%'
    rightPanel.style.width = rightPercent + '%'
  })
 
  // when the user releases the mouse — stop dragging
  document.addEventListener('mouseup', function() {
    isDragging = false
    document.body.style.cursor = ''           // reset cursor back to normal
    document.body.style.userSelect = ''       // allow text selection again
  })
