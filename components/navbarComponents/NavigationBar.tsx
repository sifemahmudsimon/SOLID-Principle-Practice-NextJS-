import React from "react";
import TopBarLayout from "./TopBarLayout";
import SubBar from "./SubBar";

import LeftSection from "./NavItemComponent/TopBarLayout/LeftSection";
import RightSection from "./NavItemComponent/TopBarLayout/RightSection";
import CenterSection from "./NavItemComponent/TopBarLayout/CenterSection";

function NavigationBar() {
  return (
    <div className="bg-white">
      <TopBarLayout
        leftSection={<LeftSection />}
        centerSection={<CenterSection />}
        rightSection={<RightSection />}
      />
      <SubBar />
    </div>
  );
}

export default NavigationBar;
