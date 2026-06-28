import React from "react";
import TopBarLayout from "./TopBarLayout";
import SubBar from "./SubBar";

import LeftSection from "./NavItemComponent/TopBarLayout/LeftSection";
import RightSection from "./NavItemComponent/TopBarLayout/RightSection";
import CenterSection from "./NavItemComponent/TopBarLayout/CenterSection";

/**
 * NavigationBar
 *
 * SOLID Principles Applied:
 *
 * SRP - Single Responsibility Principle (SRP)
 * - This component is only responsible for composing the navigation UI.
 * - It does not contain business logic, styling logic, or state management.
 *
 * OCP - Open/Closed Principle (Partially)
 * - New sections can be added or existing ones replaced by passing different
 *   components into TopBarLayout without modifying TopBarLayout itself.
 *
 * DIP - Dependency Inversion Principle (Partially)
 * - NavigationBar depends on abstractions (React components passed as props)
 *   instead of the internal implementation of the layout.
 * - TopBarLayout doesn't know what LeftSection, CenterSection, or RightSection do.
 */
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
