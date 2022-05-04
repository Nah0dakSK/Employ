import React, { useState, useEffect } from 'react';

export default function ScreenSize() {
  var resizeEvent = window.document.createEvent('UIEvents'); 
  resizeEvent.initUIEvent('resize', true, false, window, 0); 
  window.dispatchEvent(resizeEvent);};