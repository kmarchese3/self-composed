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
      <div className="profilestats-1-358316 pos-abs" id="id-113">
        <div className="hello-user1-0-71638 pos-abs" id="id-114">
          <span className="hello-user1-0-71638-0">{"hello, user"}</span>
        </div>
        <div className="titlebar-1-23166 pos-abs" id="id-7272">
          <div className="rectangle-5-1-180776 pos-abs" id="id-7273"></div>
          <div className="selfcomposed-1-26795 pos-abs" id="id-7274">
            <span className="selfcomposed-1-26795-0">{"self-composed"}</span>
          </div>
        </div>
        <div className="mood-tracker-ch-1-9146 pos-abs" id="id-6575">
          <div className="mood-chart-1-67486 pos-abs" id="id-6579">
            <span className="mood-chart-1-67486-0">{"mood chart"}</span>
          </div>
          <div className="chart-1-27133 pos-abs" id="id-6576">
            <div className="chart-1-236386 pos-abs" id="id-6577"></div>
            <div className="chart-2-62436 pos-abs" id="id-6578">
              <span className="chart-2-62436-0">{"Chart"}</span>
            </div>
          </div>
        </div>
        <div className="tasks-completed-1-5894 pos-abs" id="id-6574">
          <div className="tasks-completed-1-4186 pos-abs" id="id-6571">
            <span className="tasks-completed-1-4186-0">
              {"tasks completed this week"}
            </span>
          </div>
          <div className="chart-1-463815 pos-abs" id="id-6573">
            <div className="chart-1-217854 pos-abs" id="id-6568"></div>
            <div className="chart-2-250250 pos-abs" id="id-6572">
              <span className="chart-2-250250-0">{"Chart"}</span>
            </div>
          </div>
        </div>
        <div className="navbar-1-388721 pos-abs" id="id-1322">
          <div className="home-button-1-263144 pos-abs" id="id-1323">
            <div className="home-hover-1-95064 pos-abs" id="id-1324"></div>
            <div className="home-1-630601 pos-abs" id="id-1325">
              <span className="home-1-630601-0">{"home"}</span>
            </div>
          </div>
          <div className="journaling-butt-1-235980 pos-abs" id="id-1326">
            <div className="journaling-hove-1-41764 pos-abs" id="id-1327"></div>
            <div className="journaling-1-15025 pos-abs" id="id-1328">
              <span className="journaling-1-15025-0">{"journaling"}</span>
            </div>
          </div>
          <div className="selfcare-button-1-645858 pos-abs" id="id-1329">
            <div
              className="selfcare-hover-1-307211 pos-abs"
              id="id-13210"
            ></div>
            <div className="selfcare-1-559602 pos-abs" id="id-13211">
              <span className="selfcare-1-559602-0">{"self-care"}</span>
            </div>
          </div>
          <div className="profile-button-1-126100 pos-abs" id="id-13212">
            <div className="profile-hover-1-514944 pos-abs" id="id-13213"></div>
            <div className="profile-1-239391 pos-abs" id="id-13214">
              <span className="profile-1-239391-0">{"profile"}</span>
            </div>
          </div>
        </div>
        <div className="profile-avatar-1-340691 pos-abs" id="id-7251">
          <div className="vector-1-56166 pos-abs" id="id-7252">
            <div
              className="nodeBg-7252 pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div"
              id="id-bg-7252"
            ></div>
          </div>
          <div className="vector-2-42435 pos-abs" id="id-7253">
            <div
              className="nodeBg-7253 pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div"
              id="id-bg-7253"
            ></div>
          </div>
          <div className="vector-3-615528 pos-abs" id="id-7254">
            <div
              className="nodeBg-7254 pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div"
              id="id-bg-7254"
            ></div>
          </div>
        </div>
        <div className="streak-1-324688 pos-abs" id="id-6588">
          <div className="c-5day-task-strea-1-22890 pos-abs" id="id-6580">
            <span className="c-5day-task-strea-1-22890-0">
              {"5-day task streak!"}
            </span>
          </div>
          <div className="vector-17-1-223016 pos-abs" id="id-6587">
            <div
              className="nodeBg-6587 pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div"
              id="id-bg-6587"
            ></div>
          </div>
        </div>
        <div className="mood-tracker1-0-414498 pos-abs" id="id-1320">
          <div className="mood-tracker-1-97197 pos-abs" id="id-115"></div>
          <div className="how-are-you-fee-1-256025 pos-abs" id="id-180">
            <span className="how-are-you-fee-1-256025-0">
              {"how are you feeling today?"}
            </span>
          </div>
        </div>
        <div className="journaling--dai-0-744293 pos-abs" id="id-726">
          <div className="journaling-prom-1-7000 pos-abs" id="id-725">
            <div className="journaling-prom-1-604584 pos-abs" id="id-116"></div>
            <div className="journaling-prom-2-268705 pos-abs" id="id-1321">
              <span className="journaling-prom-2-268705-0">
                {"journaling prompt"}
              </span>
            </div>
            <div className="journaling-prom-1-139644 pos-abs" id="id-723">
              <div className="rectangle-7-1-398520 pos-abs" id="id-72"></div>
              <div className="journaling-prom-1-0 pos-abs" id="id-713">
                <div className="line-5-1-8100 pos-abs" id="id-711"></div>
                <div className="line-6-1-372899 pos-abs" id="id-712"></div>
              </div>
            </div>
          </div>
          <div className="daily-tasks-1-53586 pos-abs" id="id-724">
            <div className="daily-tasks-win-1-59328 pos-abs" id="id-117"></div>
            <div className="daily-tasks-1-192132 pos-abs" id="id-1322">
              <span className="daily-tasks-1-192132-0">{"daily tasks"}</span>
            </div>
            <div className="selfcare-task-1-1-255675 pos-abs" id="id-722">
              <div className="rectangle-8-1-42781 pos-abs" id="id-73"></div>
              <div className="selfcare-task-1-1-27072 pos-abs" id="id-715">
                <div className="line-5-1-124754 pos-abs" id="id-716"></div>
                <div className="line-6-1-227128 pos-abs" id="id-717"></div>
              </div>
            </div>
            <div className="selfcare-task-2-1-464595 pos-abs" id="id-721">
              <div className="rectangle-9-1-464646 pos-abs" id="id-74"></div>
              <div className="selfcare-task-2-1-177776 pos-abs" id="id-718">
                <div className="line-5-1-428535 pos-abs" id="id-719"></div>
                <div className="line-6-1-131752 pos-abs" id="id-720"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="squiggle-backgr-1-7172 pos-abs" id="id-6593">
          <div className="group-9-1-195063 pos-abs" id="id-6582">
            <div className="vector-1-358440 pos-abs" id="id-6583">
              <div
                className="nodeBg-6583 pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div"
                id="id-bg-6583"
              ></div>
            </div>
            <div className="vector-2-96 pos-abs" id="id-6584">
              <div
                className="nodeBg-6584 pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div"
                id="id-bg-6584"
              ></div>
            </div>
            <div className="vector-3-251550 pos-abs" id="id-6585">
              <div
                className="nodeBg-6585 pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div"
                id="id-bg-6585"
              ></div>
            </div>
          </div>
          <div className="group-10-1-196063 pos-abs" id="id-6589">
            <div className="vector-1-23226 pos-abs" id="id-6590">
              <div
                className="nodeBg-6590 pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div"
                id="id-bg-6590"
              ></div>
            </div>
            <div className="vector-2-399000 pos-abs" id="id-6591">
              <div
                className="nodeBg-6591 pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div"
                id="id-bg-6591"
              ></div>
            </div>
            <div className="vector-3-53460 pos-abs" id="id-6592">
              <div
                className="nodeBg-6592 pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div"
                id="id-bg-6592"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
ReactDOM.createRoot(document.getElementById("dualite-root")).render(<App />);
