'use strict';

const init = (settings) => {

  const defaults = {
    element: '#ue-scroll',
    position: 200,
    scrollSpeed: 10,
    fadeSpeed: 10,
    cancelByScroll: true,
    cancelByClick: true,
    cancelByKeydown: true
  };

  const w = window;
  const d = w.document;
  const opts = Object.assign(defaults, settings);
  const btn = d.querySelector(opts.element);
  const isTouchDevice = (typeof w.ontouchstart !== 'undefined');

  // Element not found
  if (btn === null) return;

  let isVisibleBtn = false;
  let isScrolling = false;
  let beforeScroll = 0;
  let scrollAnimation;

  // For canceling scroll
  const cancelScrolling = () => {
    if (isScrolling) {
      clearInterval(scrollAnimation);
      isScrolling = false;
    }
  };

  // Init styles
  d.addEventListener('DOMContentLoaded', () => {
    btn.style.display = 'none';
    btn.style.opacity = 0;
  }, false);

  // Fade in and out
  w.addEventListener('scroll', () => {
    let fadeInAnimation;
    let fadeOutAnimation;
    const scroll = d.body.scrollTop || d.documentElement.scrollTop;
    const setOpacity = (opacity) => {
      btn.style.opacity = opacity;
    };
    const fadeInArrow = (opacity) => {
      setOpacity(opacity += 0.05);
      if (opacity >= 1.0) {
        clearInterval(fadeInAnimation);
        btn.style.opacity = 1.0;
      }
    };
    const fadeOutArrow = (opacity) => {
      setOpacity(opacity -= 0.05);
      if (opacity < 0.1) {
        clearInterval(fadeOutAnimation);
        btn.style.opacity = 0.0;
        btn.style.display = 'none';
      }
    };
    if (!isVisibleBtn && scroll >= opts.position) {
      btn.style.display = 'block';
      isVisibleBtn = true;
      clearInterval(fadeInAnimation);
      fadeInAnimation = setInterval(() => {
        fadeInArrow(parseFloat(btn.style.opacity));
      }, opts.fadeSpeed);
    }
    if (isVisibleBtn && scroll < opts.position) {
      isVisibleBtn = false;
      clearInterval(fadeOutAnimation);
      fadeOutAnimation = setInterval(() => {
        fadeOutArrow(parseFloat(btn.style.opacity));
      }, opts.fadeSpeed);
    }
    // Canceling scroll by reverse scrolling
    if (!isTouchDevice && opts.cancelByScroll) {
      if (scroll > beforeScroll) cancelScrolling();
      beforeScroll = scroll;
    }
  });

  // Canceling scroll on click or tap
  if (opts.cancelByClick) {
    w.addEventListener((isTouchDevice) ? 'touchstart' : 'click', (e) => {
      if (e.target !== btn) cancelScrolling();
    });
  }

  // Canceling scroll on any keypress
  if (opts.cancelByKeydown) {
    w.addEventListener('keydown', () => {
      cancelScrolling();
    });
  }

  // Scroll to top
  btn.addEventListener('click', () => {
    const scrollPage = (x, y) => {
      w.scrollTo(x, Math.floor(y - y / (opts.scrollSpeed * 2)));
      if (y <= 0) {
        clearInterval(scrollAnimation);
        isScrolling = false;
        btn.style.opacity = 0.0;
      }
    };
    if (!isScrolling) {
      isScrolling = true;
      clearInterval(scrollAnimation);
      scrollAnimation = setInterval(() => {
        const x = d.body.scrollLeft || d.documentElement.scrollLeft;
        const y = d.body.scrollTop || d.documentElement.scrollTop;
        scrollPage(x, y);
      }, opts.scrollSpeed);
    }
    return false;
  });

};

export default {
  init: init
};
