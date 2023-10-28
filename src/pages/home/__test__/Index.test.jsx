import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';
import Home from '../Index';
import { BrowserRouter } from 'react-router-dom';

describe('Test case for Home Page', () => {
  it('hero section', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const elementTxt = screen.getByText(/welcome to fourth star/i);
    expect(elementTxt).toBeInTheDocument();

    const elementTxt2 = screen.getByText(/create your own reality/i);
    expect(elementTxt2).toBeInTheDocument();
  });

  it('marketplace overview', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const elementTxt = screen.getByText(/experience marketplace/i);
    expect(elementTxt).toBeInTheDocument();

    const elementTxt2 = screen.getByText(
      /customise your avatar, own your own luxury apartment and space ship, access games and virtual concerts or just meet with your friends\. discover unique and immersive virtual experiences that will elevate your journey within the metaverse\./i
    );
    expect(elementTxt2).toBeInTheDocument();
  });

  it('assets overview', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const elementTxt = screen.getByText(/collectible assets/i);
    expect(elementTxt).toBeInTheDocument();

    const elementTxt2 = screen.getByText(
      /organize and manage your metaverse assets effortlessly with our intuitive interface\. easily browse through your avatar collection, swap outfits, and mix and match accessories to create a unique digital persona that represents you\./i
    );
    expect(elementTxt2).toBeInTheDocument();
  });

  it('gaming overview', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const elementTxt = screen.getByText(/ultimate gaming/i);
    expect(elementTxt).toBeInTheDocument();

    const elementTxt2 = screen.getByText(
      /dive into a dynamic and interconnected digital universe where you can embark on thrilling adventures, engage in epic quests, and participate in unforgettable multiplayer battles\. get ready to level up your gaming journey like never before!/i
    );
    expect(elementTxt2).toBeInTheDocument();
  });

  it('friends overview', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const elementTxt = screen.getByText(
      /connect, explore, and create unforgettable memories with friends in our immersive metaverse\. join forces, embark on epic adventures, and forge unbreakable bonds as you navigate a world beyond imagination\. together, the possibilities are limitless!/i
    );
    expect(elementTxt).toBeInTheDocument();
  });
});
