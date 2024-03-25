import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import "./animation.css";
import runAnimations, { allLinks, allFunctions } from "./scripts";
const App = () => {
  useEffect(() => {
    runAnimations();
  }, []);
  return (
    <div className="parent-div">
      <div className="homepage-1-107000 pos-abs" id="id-112">
        <div className="hello-user-1-41850 pos-abs" id="id-114">
          <span className="hello-user-1-41850-0">{"hello, user"}</span>
        </div>
        <div className="titlebar-1-216720 pos-abs" id="id-163">
          <div className="rectangle-5-1-138736 pos-abs" id="id-119"></div>
          <div className="selfcomposed-1-458990 pos-abs" id="id-120">
            <span className="selfcomposed-1-458990-0">{"self-composed"}</span>
          </div>
        </div>
        <div className="mood-tracker-1-41382 pos-abs" id="id-1320">
          <div className="mood-tracker-1-279279 pos-abs" id="id-115"></div>
          <div className="how-are-you-fee-1-51250 pos-abs" id="id-180">
            <span className="how-are-you-fee-1-51250-0">
              {"how are you feeling today?"}
            </span>
          </div>
        </div>
        <div className="navbar-1-27000 pos-abs" id="id-13215">
          <div className="home-button-1-122553 pos-abs" id="id-13216">
            <div className="home-hover-1-706 pos-abs" id="id-13217"></div>
            <div className="home-1-55242 pos-abs" id="id-13218">
              <span className="home-1-55242-0">{"home"}</span>
            </div>
          </div>
          <div className="journaling-butt-1-13794 pos-abs" id="id-13219">
            <div
              className="journaling-hove-1-197656 pos-abs"
              id="id-13220"
            ></div>
            <div className="journaling-1-77080 pos-abs" id="id-13221">
              <span className="journaling-1-77080-0">{"journaling"}</span>
            </div>
          </div>
          <div className="selfcare-button-1-632820 pos-abs" id="id-13222">
            <div className="selfcare-hover-1-3780 pos-abs" id="id-13223"></div>
            <div className="selfcare-1-21280 pos-abs" id="id-13224">
              <span className="selfcare-1-21280-0">{"self-care"}</span>
            </div>
          </div>
          <div className="profile-button-1-30129 pos-abs" id="id-13225">
            <div className="profile-hover-1-344530 pos-abs" id="id-13226"></div>
            <div className="profile-1-469098 pos-abs" id="id-13227">
              <span className="profile-1-469098-0">{"profile"}</span>
            </div>
          </div>
        </div>
        <div className="journaling--dai-1-523328 pos-abs" id="id-726">
          <div className="journaling-prom-1-511836 pos-abs" id="id-725">
            <div className="journaling-prom-1-623745 pos-abs" id="id-116"></div>
            <div className="journaling-prom-2-157440 pos-abs" id="id-1321">
              <span className="journaling-prom-2-157440-0">
                {"journaling prompt"}
              </span>
            </div>
            <div className="journaling-prom-1-126080 pos-abs" id="id-723">
              <div className="rectangle-7-1-80712 pos-abs" id="id-72"></div>
              <div className="journaling-prom-1-504501 pos-abs" id="id-713">
                <div className="line-5-1-179280 pos-abs" id="id-711"></div>
                <div className="line-6-1-121830 pos-abs" id="id-712"></div>
              </div>
            </div>
          </div>
          <div className="daily-tasks-1-206205 pos-abs" id="id-724">
            <div className="daily-tasks-win-1-115370 pos-abs" id="id-117"></div>
            <div className="daily-tasks-1-687675 pos-abs" id="id-1322">
              <span className="daily-tasks-1-687675-0">{"daily tasks"}</span>
            </div>
            <div className="selfcare-task-1-1-229140 pos-abs" id="id-722">
              <div className="rectangle-8-1-178776 pos-abs" id="id-73"></div>
              <div className="selfcare-task-1-1-255040 pos-abs" id="id-715">
                <div className="line-5-1-94394 pos-abs" id="id-716"></div>
                <div className="line-6-1-313908 pos-abs" id="id-717"></div>
              </div>
            </div>
            <div className="selfcare-task-2-1-17472 pos-abs" id="id-721">
              <div className="rectangle-9-1-13496 pos-abs" id="id-74"></div>
              <div className="selfcare-task-2-1-36120 pos-abs" id="id-718">
                <div className="line-5-1-68026 pos-abs" id="id-719"></div>
                <div className="line-6-1-167085 pos-abs" id="id-720"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
ReactDOM.createRoot(document.getElementById("dualite-root")).render(<App />);
