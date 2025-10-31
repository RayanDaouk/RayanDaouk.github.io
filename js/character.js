const speedAnimation = 300; //ms

export function characterSequence() {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSequence);
  } else {
    initSequence();
  }

  function initSequence() {
    // Show specific animation container
    function showContainer(className) {
      document.querySelector(`.${className}`).style.display = "block";
    }

    // Animate frames within a container
    function runAnimationForLoops(containerClass, loopCount, callback) {
      showContainer(containerClass);

      const container = document.querySelector(`.${containerClass}`);
      const frames = container.querySelectorAll("img");
      let currentFrame = 0;
      let completedLoops = 0;

      // Hide all frames initially
      frames.forEach((frame) => (frame.style.display = "none"));

      // Show first frame
      frames[0].style.display = "block";

      const interval = setInterval(() => {
        // Hide current frame
        frames[currentFrame].style.display = "none";

        // Move to next frame
        currentFrame++;

        // Check if animation loop is complete
        if (currentFrame >= frames.length) {
          currentFrame = 0;
          completedLoops++;

          // Check if all loops are done
          if (completedLoops >= loopCount) {
            clearInterval(interval);
            callback();
            return;
          }
        }

        // Show next frame
        frames[currentFrame].style.display = "block";
      }, speedAnimation);
    }

    // Animation sequence
    function startSequence() {
      // 1. Hiddle - 5 times (6 frames)
      runAnimationForLoops("hiddle", 5, () => {
        // 2. mouseMove - 3 times (6 frames)
        runAnimationForLoops("mouseMove", 3, () => {
          // 3. Keyboard - 1 time (10 frames)
          runAnimationForLoops("keyboard", 1, () => {
            // 4. mouseMoveHiddle - 1 time (6 frames)
            runAnimationForLoops("mouseMoveHiddle", 1, () => {
              // 5. Restart sequence
              startSequence();
            });
          });
        });
      });
    }

    // Init
    startSequence();
  }
}
