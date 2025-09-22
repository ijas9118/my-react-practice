import { GithubIcon } from "lucide-react";
import React from "react";

const CountdownTimerDoc: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-12">
        {/* Task Description */}
        <section className="mb-10">
          <h2 className="text-2xl font-serif font-semibold text-neutral-800 mb-4">
            Task Description
          </h2>
          <p className="text-neutral-700 leading-relaxed mb-4">
            Create a countdown timer that allows the user to enter hours, minutes, and seconds.
          </p>
          <ul className="list-disc list-outside pl-6 text-neutral-700 space-y-2">
            <li>
              Once the timer has started, the input fields should be replaced with plain text that
              updates every second. The "Start" button should be replaced with "Pause" and "Reset"
              buttons.
            </li>
            <li>
              Once the timer completes, it should alert the user with a native notification (using
              the Notification API), or fallback to an alert.
            </li>
          </ul>
        </section>

        {/* Requirements */}
        <section className="mb-10">
          <h2 className="text-2xl font-serif font-semibold text-neutral-800 mb-4">Requirements</h2>
          <ul className="list-decimal list-outside pl-6 text-neutral-700 space-y-2">
            <li>
              The "Hours", "Minutes", and "Seconds" fields should not have visible labels, but they
              should be accessible and clearly labelled to a screen reader
            </li>
            <li>The input fields should use placeholder text as shown in the screenshot above</li>
            <li>
              Pressing "Start" should start the timer, replace the input fields with plain text for
              the hours/minutes/seconds, and replace "Start" with "Pause" and "Reset" buttons
            </li>
            <li>
              Pressing "Pause" should pause the timer, and replace the "Pause" button with a "Start"
              button
            </li>
            <li>Pressing "Reset" should revert the app back to the initial state</li>
            <li>
              While the timer is counting down, the numbers should be zero-padded (e.g. 01 vs 1)
            </li>
            <li>
              When the timer reaches zero, if the app has appropriate permissions, it should display
              a Notification that the timer is complete
            </li>
            <li>
              If the app doesn't have appropriate permissions, it should show an alert when the
              timer reaches zero
            </li>
          </ul>
        </section>

        {/* GitHub Link */}
        <div className="flex items-center space-x-3 border-t border-neutral-200 pt-6">
          <GithubIcon className="w-5 h-5 text-neutral-600" />
          <a
            href="https://github.com/ijas9118/my-react-practice/blob/main/src/challenges/countdown-timer/CountdownTimer.tsx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimerDoc;
