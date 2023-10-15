import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';
import Home from '../Index';
import { BrowserRouter } from 'react-router-dom';

describe('Test case for Home Page', () => {

  it('displays the "Experience Marketplace" section', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const experienceMarketplaceHeading = screen.getByText('Experience Marketplace');
    const experienceMarketplaceDescription = screen.getByText((content, element) => {
      return content.includes('Discover unique and immersive virtual experiences') &&
             content.includes('that will elevate your journey within the metaverse.');
    });

    expect(experienceMarketplaceHeading).toBeInTheDocument();
    expect(experienceMarketplaceDescription).toBeInTheDocument();
  });

  it('displays the "Connect Friends" section', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const connectFriendsHeading = screen.getByText('Connect Friends');
    const connectFriendsDescription = screen.getByText((content, element) => {
      return content.startsWith('Connect, explore, and create unforgettable memories with friends') &&
             content.includes('in our immersive metaverse');
    });

    expect(connectFriendsHeading).toBeInTheDocument();
    expect(connectFriendsDescription).toBeInTheDocument();
  });

  it('displays the "Collectible Assets" section', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    

    const collectibleAssetsHeading = screen.getByText('Collectible Assets');
    const collectibleAssetsDescription = screen.getByText((content, element) => {
      return content.includes('Organize and manage your Metaverse Assets effortlessly') &&
             content.includes('create a unique digital persona that represents you.');
    });

    expect(collectibleAssetsHeading).toBeInTheDocument();
    expect(collectibleAssetsDescription).toBeInTheDocument();
  });

  it('displays the "Ultimate Gaming" section', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const ultimateGamingHeading = screen.getByText('Ultimate Gaming');
    const ultimateGamingDescription = screen.getByText((content, element) => {
      return content.includes('Dive into a dynamic and interconnected digital universe') &&
             content.includes('level up your gaming journey like never before!');
    });

    expect(ultimateGamingHeading).toBeInTheDocument();
    expect(ultimateGamingDescription).toBeInTheDocument();
  });


  it('displays images in each section', () => {
    render( 
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(5); // Assuming there are four images in the sections.
  });

 



  // // Old test cases --->>>
  // it('hero section', () => {
  //   render(
  //     <BrowserRouter>
  //       <Home />
  //     </BrowserRouter>
  //   );
  //   const elementTxt = screen.getByText(/welcome to fourth star/i);
  //   expect(elementTxt).toBeInTheDocument();

  //   const elementTxt2 = screen.getByText(/create your own reality/i);
  //   expect(elementTxt2).toBeInTheDocument();
  // });

  // it('marketplace overview', () => {
  //   render(
  //     <BrowserRouter>
  //       <Home />
  //     </BrowserRouter>
  //   );
  //   const elementTxt = screen.getByText(/experience marketplace/i);
  //   expect(elementTxt).toBeInTheDocument();

  //   const elementTxt2 = screen.getByText(
  //     /customise your avatar, own your own luxury apartment and space ship, access games and virtual concerts or just meet with your friends\. discover unique and immersive virtual experiences that will elevate your journey within the metaverse\./i
  //   );
  //   expect(elementTxt2).toBeInTheDocument();
  // });

  // it('assets overview', () => {
  //   render(
  //     <BrowserRouter>
  //       <Home />
  //     </BrowserRouter>
  //   );
  //   const elementTxt = screen.getByText(/collectible assets/i);
  //   expect(elementTxt).toBeInTheDocument();

  //   const elementTxt2 = screen.getByText(
  //     /organize and manage your metaverse assets effortlessly with our intuitive interface\. easily browse through your avatar collection, swap outfits, and mix and match accessories to create a unique digital persona that represents you\./i
  //   );
  //   expect(elementTxt2).toBeInTheDocument();
  // });

  // it('gaming overview', () => {
  //   render(
  //     <BrowserRouter>
  //       <Home />
  //     </BrowserRouter>
  //   );
  //   const elementTxt = screen.getByText(/ultimate gaming/i);
  //   expect(elementTxt).toBeInTheDocument();

  //   const elementTxt2 = screen.getByText(
  //     /dive into a dynamic and interconnected digital universe where you can embark on thrilling adventures, engage in epic quests, and participate in unforgettable multiplayer battles\. get ready to level up your gaming journey like never before!/i
  //   );
  //   expect(elementTxt2).toBeInTheDocument();
  // });

  // it('friends overview', () => {
  //   render(
  //     <BrowserRouter>
  //       <Home />
  //     </BrowserRouter>
  //   );

  //   const elementTxt = screen.getByText(
  //     /connect, explore, and create unforgettable memories with friends in our immersive metaverse\. join forces, embark on epic adventures, and forge unbreakable bonds as you navigate a world beyond imagination\. together, the possibilities are limitless!/i
  //   );
  //   expect(elementTxt).toBeInTheDocument();
  // });
});
