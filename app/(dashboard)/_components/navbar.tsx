"use client";

import { InviteButton } from "./sidebar/invite-button";
import { SearchInput } from "./sidebar/search-input";

export const Navbar = () => {
  const organization = true;
  return (
    <div className="flex items-center gap-x-4 p-6">
      <div className="hidden lg:flex lg:flex-1">
        <SearchInput />
      </div>
      <div className="block lg:hidden flex-1">OrganizationSwitcher</div>
      {organization && <InviteButton />}
    </div>
  );
};
