import React from "react";

type Props = {
  leftSection: React.ReactNode;
  centerSection?: React.ReactNode;
  rightSection: React.ReactNode;
};
function TopBarLayout({ leftSection, centerSection, rightSection }: Props) {
  return (
    <div className="relative flex items-center py-2 h-10.5">
      <div className="flex justify-between items-center w-full max-w-[1280px] mx-auto">
        {leftSection}
        {centerSection}
        {rightSection}
      </div>
    </div>
  );
}

export default TopBarLayout;
