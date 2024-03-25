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
      <div className="journaling-add--1-876880 pos-abs" id="id-13">
        <div className="rectangle-1-1-187488 pos-abs" id="id-13860"></div>
        <div className="use-some-of-our-1-393876 pos-abs" id="id-412">
          <span className="use-some-of-our-1-393876-0">
            {
              "Use some of our auto-generated prompts to help you get started writing."
            }
          </span>
        </div>
        <div className="create-your-own-1-55536 pos-abs" id="id-410">
          <span className="create-your-own-1-55536-0">{"Create your own"}</span>
        </div>
        <div className="feeling-uninspi-1-117860 pos-abs" id="id-416">
          <span className="feeling-uninspi-1-117860-0">
            {"Feeling uninspired?"}
          </span>
        </div>
        <div className="titlebar-1-229625 pos-abs" id="id-174">
          <div className="rectangle-5-1-190299 pos-abs" id="id-175"></div>
          <div className="selfcomposed-1-13702 pos-abs" id="id-176">
            <span className="selfcomposed-1-13702-0">{"self-composed"}</span>
          </div>
        </div>
        <div className="mood-tracker1-0-75790 pos-abs" id="id-1320">
          <div className="mood-tracker-1-229836 pos-abs" id="id-115"></div>
          <div className="how-are-you-fee-1-604632 pos-abs" id="id-180">
            <span className="how-are-you-fee-1-604632-0">
              {"how are you feeling today?"}
            </span>
          </div>
        </div>
        <div className="journaling--dai-0-100232 pos-abs" id="id-726">
          <div className="journaling-prom-1-844305 pos-abs" id="id-725">
            <div className="journaling-prom-1-439488 pos-abs" id="id-116"></div>
            <div className="journaling-prom-2-123806 pos-abs" id="id-1321">
              <span className="journaling-prom-2-123806-0">
                {"journaling prompt"}
              </span>
            </div>
            <div className="journaling-prom-1-48024 pos-abs" id="id-723">
              <div className="rectangle-7-1-214650 pos-abs" id="id-72"></div>
              <div className="journaling-prom-1-30318 pos-abs" id="id-713">
                <div className="line-5-1-191700 pos-abs" id="id-711"></div>
                <div className="line-6-1-120246 pos-abs" id="id-712"></div>
              </div>
            </div>
          </div>
          <div className="daily-tasks-1-805140 pos-abs" id="id-724">
            <div className="daily-tasks-win-1-705348 pos-abs" id="id-117"></div>
            <div className="daily-tasks-1-31620 pos-abs" id="id-1322">
              <span className="daily-tasks-1-31620-0">{"daily tasks"}</span>
            </div>
            <div className="selfcare-task-1-1-497984 pos-abs" id="id-722">
              <div className="rectangle-8-1-198058 pos-abs" id="id-73"></div>
              <div className="selfcare-task-1-1-349758 pos-abs" id="id-715">
                <div className="line-5-1-389084 pos-abs" id="id-716"></div>
                <div className="line-6-1-62244 pos-abs" id="id-717"></div>
              </div>
            </div>
            <div className="selfcare-task-2-1-48230 pos-abs" id="id-721">
              <div className="rectangle-9-1-119600 pos-abs" id="id-74"></div>
              <div className="selfcare-task-2-1-75852 pos-abs" id="id-718">
                <div className="line-5-1-51450 pos-abs" id="id-719"></div>
                <div className="line-6-1-433116 pos-abs" id="id-720"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar1-0-94863 pos-abs" id="id-13215">
          <div className="home-button-1-163713 pos-abs" id="id-13216">
            <div className="home-hover-1-12261 pos-abs" id="id-13217"></div>
            <div className="home-1-58653 pos-abs" id="id-13218">
              <span className="home-1-58653-0">{"home"}</span>
            </div>
          </div>
          <div className="journaling-butt-1-13377 pos-abs" id="id-13219">
            <div
              className="journaling-hove-1-148580 pos-abs"
              id="id-13220"
            ></div>
            <div className="journaling-1-834350 pos-abs" id="id-13221">
              <span className="journaling-1-834350-0">{"journaling"}</span>
            </div>
          </div>
          <div className="selfcare-button-1-26132 pos-abs" id="id-13222">
            <div className="selfcare-hover-1-73710 pos-abs" id="id-13223"></div>
            <div className="selfcare-1-6943 pos-abs" id="id-13224">
              <span className="selfcare-1-6943-0">{"self-care"}</span>
            </div>
          </div>
          <div className="profile-button-1-188670 pos-abs" id="id-13225">
            <div className="profile-hover-1-315491 pos-abs" id="id-13226"></div>
            <div className="profile-1-205212 pos-abs" id="id-13227">
              <span className="profile-1-205212-0">{"profile"}</span>
            </div>
          </div>
        </div>
        <div className="hello-user1-0-416724 pos-abs" id="id-114">
          <span className="hello-user1-0-416724-0">{"hello, user"}</span>
        </div>
        <div className="navbar-1-116335 pos-abs" id="id-13441">
          <div className="home-button-1-221760 pos-abs" id="id-13442">
            <div className="home-hover-1-106002 pos-abs" id="id-13443"></div>
            <div className="home-1-403648 pos-abs" id="id-13444">
              <span className="home-1-403648-0">{"home"}</span>
            </div>
          </div>
          <div className="journaling-butt-1-119180 pos-abs" id="id-13445">
            <div
              className="journaling-hove-1-196656 pos-abs"
              id="id-13446"
            ></div>
            <div className="journaling-1-639000 pos-abs" id="id-13447">
              <span className="journaling-1-639000-0">{"journaling"}</span>
            </div>
          </div>
          <div className="selfcare-button-1-62675 pos-abs" id="id-13448">
            <div className="selfcare-hover-1-17243 pos-abs" id="id-13449"></div>
            <div className="selfcare-1-16600 pos-abs" id="id-13450">
              <span className="selfcare-1-16600-0">{"self-care"}</span>
            </div>
          </div>
          <div className="profile-button-1-297924 pos-abs" id="id-13451">
            <div className="profile-hover-1-244114 pos-abs" id="id-13452"></div>
            <div className="profile-1-46475 pos-abs" id="id-13453">
              <span className="profile-1-46475-0">{"profile"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
ReactDOM.createRoot(document.getElementById("dualite-root")).render(<App />);
