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
      <div className="journaling-1-97519 pos-abs" id="id-12">
        <div className="rectangle-6-1-262836 pos-abs" id="id-48"></div>
        <div className="rectangle-7-1-58032 pos-abs" id="id-13760"></div>
        <div className="mediaicon25512--1-108238 pos-abs" id="id-83">
          <div
            className="nodeBg-83 pos-abs image-div bg-no-repeat  bg-crop"
            id="id-bg-83"
          >
            {" "}
          </div>
        </div>
        <div className="rectangle-2-1-132050 pos-abs" id="id-13759"></div>
        <div className="pngimg-1-1-239330 pos-abs" id="id-13764">
          <div
            className="nodeBg-13764 pos-abs image-div bg-no-repeat fill-parent bg-cover"
            id="id-bg-13764"
          >
            {" "}
          </div>
        </div>
        <div className="rectangle-11-0-90016 pos-abs" id="id-13860"></div>
        <div className="february-19-1-50868 pos-abs" id="id-32">
          <span className="february-19-1-50868-0">{"February 19"}</span>
        </div>
        <div className="whats-your-favo-1-133397 pos-abs" id="id-37">
          <span className="whats-your-favo-1-133397-0">
            {"What’s your favorite thing about yourself and why? "} <br />{" "}
          </span>
        </div>
        <div className="submit-1-315832 pos-abs" id="id-49">
          <span className="submit-1-315832-0">{"Submit"}</span>
        </div>
        <div className="create-your-own-1-363600 pos-abs" id="id-13761">
          <span className="create-your-own-1-363600-0">
            {"Create your own"}
          </span>
        </div>
        <div className="titlebar-1-30564 pos-abs" id="id-177">
          <div className="rectangle-5-1-126720 pos-abs" id="id-178"></div>
          <div className="selfcomposed-1-72680 pos-abs" id="id-179">
            <span className="selfcomposed-1-72680-0">{"self-composed"}</span>
          </div>
        </div>
        <div className="mood-tracker1-0-176788 pos-abs" id="id-1320">
          <div className="mood-tracker-1-257304 pos-abs" id="id-115"></div>
          <div className="how-are-you-fee-1-517205 pos-abs" id="id-180">
            <span className="how-are-you-fee-1-517205-0">
              {"how are you feeling today?"}
            </span>
          </div>
        </div>
        <div className="journaling--dai-0-72072 pos-abs" id="id-726">
          <div className="journaling-prom-1-267732 pos-abs" id="id-725">
            <div className="journaling-prom-1-107250 pos-abs" id="id-116"></div>
            <div className="journaling-prom-2-56620 pos-abs" id="id-1321">
              <span className="journaling-prom-2-56620-0">
                {"journaling prompt"}
              </span>
            </div>
            <div className="journaling-prom-1-4484 pos-abs" id="id-723">
              <div className="rectangle-7-1-349792 pos-abs" id="id-72"></div>
              <div className="journaling-prom-1-34225 pos-abs" id="id-713">
                <div className="line-5-1-258400 pos-abs" id="id-711"></div>
                <div className="line-6-1-7968 pos-abs" id="id-712"></div>
              </div>
            </div>
          </div>
          <div className="daily-tasks-1-437570 pos-abs" id="id-724">
            <div className="daily-tasks-win-1-256627 pos-abs" id="id-117"></div>
            <div className="daily-tasks-1-222748 pos-abs" id="id-1322">
              <span className="daily-tasks-1-222748-0">{"daily tasks"}</span>
            </div>
            <div className="selfcare-task-1-1-373201 pos-abs" id="id-722">
              <div className="rectangle-8-1-715396 pos-abs" id="id-73"></div>
              <div className="selfcare-task-1-1-705648 pos-abs" id="id-715">
                <div className="line-5-1-150670 pos-abs" id="id-716"></div>
                <div className="line-6-1-654015 pos-abs" id="id-717"></div>
              </div>
            </div>
            <div className="selfcare-task-2-1-580560 pos-abs" id="id-721">
              <div className="rectangle-9-1-86688 pos-abs" id="id-74"></div>
              <div className="selfcare-task-2-1-508851 pos-abs" id="id-718">
                <div className="line-5-1-4140 pos-abs" id="id-719"></div>
                <div className="line-6-1-156338 pos-abs" id="id-720"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar1-0-554896 pos-abs" id="id-13215">
          <div className="home-button-1-749476 pos-abs" id="id-13216">
            <div className="home-hover-1-19346 pos-abs" id="id-13217"></div>
            <div className="home-1-212212 pos-abs" id="id-13218">
              <span className="home-1-212212-0">{"home"}</span>
            </div>
          </div>
          <div className="journaling-butt-1-142209 pos-abs" id="id-13219">
            <div
              className="journaling-hove-1-233946 pos-abs"
              id="id-13220"
            ></div>
            <div className="journaling-1-172528 pos-abs" id="id-13221">
              <span className="journaling-1-172528-0">{"journaling"}</span>
            </div>
          </div>
          <div className="selfcare-button-1-222053 pos-abs" id="id-13222">
            <div
              className="selfcare-hover-1-494450 pos-abs"
              id="id-13223"
            ></div>
            <div className="selfcare-1-117711 pos-abs" id="id-13224">
              <span className="selfcare-1-117711-0">{"self-care"}</span>
            </div>
          </div>
          <div className="profile-button-1-92880 pos-abs" id="id-13225">
            <div className="profile-hover-1-221238 pos-abs" id="id-13226"></div>
            <div className="profile-1-28623 pos-abs" id="id-13227">
              <span className="profile-1-28623-0">{"profile"}</span>
            </div>
          </div>
        </div>
        <div className="use-some-of-our-0-536316 pos-abs" id="id-412">
          <span className="use-some-of-our-0-536316-0">
            {
              "Use some of our auto-generated prompts to help you get started writing."
            }
          </span>
        </div>
        <div className="feeling-uninspi-0-357588 pos-abs" id="id-416">
          <span className="feeling-uninspi-0-357588-0">
            {"Feeling uninspired?"}
          </span>
        </div>
        <div className="hello-user1-0-31200 pos-abs" id="id-114">
          <span className="hello-user1-0-31200-0">{"hello, user"}</span>
        </div>
        <div className="navbar-1-414918 pos-abs" id="id-13428">
          <div className="home-button-1-56580 pos-abs" id="id-13429">
            <div className="home-hover-1-301245 pos-abs" id="id-13430"></div>
            <div className="home-1-258125 pos-abs" id="id-13431">
              <span className="home-1-258125-0">{"home"}</span>
            </div>
          </div>
          <div className="journaling-butt-1-714675 pos-abs" id="id-13432">
            <div
              className="journaling-hove-1-69615 pos-abs"
              id="id-13433"
            ></div>
            <div className="journaling-1-353990 pos-abs" id="id-13434">
              <span className="journaling-1-353990-0">{"journaling"}</span>
            </div>
          </div>
          <div className="selfcare-button-1-322414 pos-abs" id="id-13435">
            <div
              className="selfcare-hover-1-438972 pos-abs"
              id="id-13436"
            ></div>
            <div className="selfcare-1-499140 pos-abs" id="id-13437">
              <span className="selfcare-1-499140-0">{"self-care"}</span>
            </div>
          </div>
          <div className="profile-button-1-465696 pos-abs" id="id-13438">
            <div className="profile-hover-1-24672 pos-abs" id="id-13439"></div>
            <div className="profile-1-256932 pos-abs" id="id-13440">
              <span className="profile-1-256932-0">{"profile"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
ReactDOM.createRoot(document.getElementById("dualite-root")).render(<App />);
