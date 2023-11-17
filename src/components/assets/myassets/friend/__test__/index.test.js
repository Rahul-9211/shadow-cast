/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Invite-Friend-Test-Page
 *@developer Aditya P
 */

import InviteFriend from "../InviteFriend";
import YourFriend from "../YourFriend";
import PendingInvites from "../PendingInvites";
import { BrowserRouter } from "react-router-dom";
import { screen, render, fireEvent } from "@testing-library/react";

describe("Test case for Friend Tabs Module", () => {
  // Invite Friend Component
  it("should open a modal when the Invite button is clicked", () => {
    render(
      <BrowserRouter>
        <InviteFriend />
      </BrowserRouter>
    );
    const inviteButton = screen.getByText("Invite");

    fireEvent.click(inviteButton);

    const modal = screen.getByTestId("invite-friend-modal");

    expect(modal).toBeInTheDocument();
  });

  it("should close the modal when the X button is clicked", () => {
    render(
      <BrowserRouter>
        <InviteFriend />
      </BrowserRouter>
    );
    const inviteButton = screen.getByText("Invite");

    fireEvent.click(inviteButton);

    const closeButton = screen.getByAltText("modal_close_btn");

    fireEvent.click(closeButton);

    const modal = screen.queryByTestId("invite-friend-modal");

    expect(modal).not.toBeInTheDocument();
  });

  //   Your Friends component
  it('should display the header "Your Friends"', () => {
    render(
      <BrowserRouter>
        <YourFriend />
      </BrowserRouter>
    );
    const header = screen.getByText("Your Friends");
    expect(header).toBeInTheDocument();
  });

  it("should display a search input field", () => {
    render(
      <BrowserRouter>
        <YourFriend />
      </BrowserRouter>
    );
    const searchInput = screen.getByPlaceholderText("Search");
    expect(searchInput).toBeInTheDocument();
  });

  it("should handle empty search input field", () => {
    render(
      <BrowserRouter>
        <YourFriend />
      </BrowserRouter>
    );
    const searchInput = screen.getByPlaceholderText("Search");
    fireEvent.change(searchInput, { target: { value: "" } });
    expect(searchInput.value).toBe("");
    expect(screen.queryByAltText("search_ico")).toBeInTheDocument();
  });

  //   Pending Invites
  it('should display the header "Pending Invites"', () => {
    render(<BrowserRouter>
        <PendingInvites />
    </BrowserRouter>);
    expect(screen.getByText('Pending Invites')).toBeInTheDocument();
  });

  it('should display a search input field', () => {
    render(<BrowserRouter>
        <PendingInvites />
    </BrowserRouter>);
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
  });
});
