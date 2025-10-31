const speedAnimation = 300; //ms

export function hiddleAnimation() {
  const targetImg = document.querySelector(".hiddle img");
  const animFrames = 6; // 00 to 05.png
  let hiddleCurrentFrame = 0; // start at 00.png

  function animation() {
    // Formate frame with 01,02,03, etc
    const frameNumber = hiddleCurrentFrame.toString().padStart(2, "0");
    targetImg.src = `/assets/character/hiddle/${frameNumber}.png`;

    // Next frame
    hiddleCurrentFrame = (hiddleCurrentFrame + 1) % animFrames;
  }

  // Speed animation
  return setInterval(animation, speedAnimation);
}

export function keyboardAnimation() {
  const targetImg = document.querySelector(".keyboard img");
  const animFrames = 10;
  let hiddleCurrentFrame = 0;

  function animation() {
    const frameNumber = hiddleCurrentFrame.toString().padStart(2, "0");
    targetImg.src = `/assets/character/keyboard/${frameNumber}.png`;

    hiddleCurrentFrame = (hiddleCurrentFrame + 1) % animFrames;
  }
  return setInterval(animation, speedAnimation);
}

export function mouseMoveAnimation() {
  const targetImg = document.querySelector(".mouseMove img");
  const animFrames = 6;
  let hiddleCurrentFrame = 0;

  function animation() {
    const frameNumber = hiddleCurrentFrame.toString().padStart(2, "0");
    targetImg.src = `/assets/character/mouseMove/${frameNumber}.png`;

    hiddleCurrentFrame = (hiddleCurrentFrame + 1) % animFrames;
  }
  return setInterval(animation, speedAnimation);
}

export function mouseMoveHiddleAnimation() {
  const targetImg = document.querySelector(".mouseMoveHiddle img");
  const animFrames = 6;
  let hiddleCurrentFrame = 0;

  function animation() {
    const frameNumber = hiddleCurrentFrame.toString().padStart(2, "0");
    targetImg.src = `/assets/character/mouseMoveHiddle/${frameNumber}.png`;

    hiddleCurrentFrame = (hiddleCurrentFrame + 1) % animFrames;
  }
  return setInterval(animation, speedAnimation);
}

export function characterSequence() {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSequence);
  } else {
    initSequence();
  }

  function initSequence() {
    // Hidding all div by default
    function hideAllDivs() {
      document.querySelector(".hiddle").style.display = "none";
      document.querySelector(".keyboard").style.display = "none";
      document.querySelector(".mouseMove").style.display = "none";
      document.querySelector(".mouseMoveHiddle").style.display = "none";
    }

    // Show div 1 by 1
    function showDiv(className) {
      hideAllDivs();
      document.querySelector(`.${className}`).style.display = "block";
    }

    // Init animation with x loops
    function runAnimationForLoops(
      showDivName,
      animFrames,
      loopCount,
      callback
    ) {
      showDiv(showDivName);

      const targetImg = document.querySelector(`.${showDivName} img`);
      let currentFrame = 0;
      let completedLoops = 0;

      const interval = setInterval(() => {
        const frameNumber = currentFrame.toString().padStart(2, "0");

        // Define true path depend class div
        let folderName = showDivName;
        if (showDivName === "mouseMove") folderName = "mouseMove";
        if (showDivName === "mouseMoveHiddle") folderName = "mouseMoveHiddle";

        targetImg.src = `/assets/character/${folderName}/${frameNumber}.png`;

        currentFrame++;

        // All frames are finished ?
        if (currentFrame >= animFrames) {
          currentFrame = 0;
          completedLoops++;

          // All loops of div are finished?
          if (completedLoops >= loopCount) {
            clearInterval(interval);
            callback();
          }
        }
      }, speedAnimation);
    }

    // Animations sequences
    function startSequence() {
      // 1. Hiddle - 5 times (6 frames)
      runAnimationForLoops("hiddle", 6, 5, () => {
        // 2. mouseMove - 3 times (6 frames)
        runAnimationForLoops("mouseMove", 6, 3, () => {
          // 3. Keyboard - 1 time (10 frames)
          runAnimationForLoops("keyboard", 10, 1, () => {
            // 4. mouseMoveHiddle - 1 time (6 frames)
            runAnimationForLoops("mouseMoveHiddle", 6, 1, () => {
              // 5. Back to hiddle, restart sequence
              startSequence();
            });
          });
        });
      });
    }

    // Initialisation
    hideAllDivs();
    startSequence();
  }
}
