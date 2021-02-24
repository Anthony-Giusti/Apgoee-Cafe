import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as focusTrap from 'focus-trap';

import { MenuData } from './Data/MenuData';
import GridData from './Data/GridData';

import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Menu from './Components/Menu/Menu';
import Gallery from './Components/Gallery/Gallery';
import Location from './Components/Location/Location';
import Footer from './Components/Footer/Footer';

import './normalize.css';
import './App.css';

function App() {
  const [menuItems] = useState(MenuData);
  const [navSelection, setNavSelection] = useState('home');
  const [menuSection, setMenuSection] = useState('coffee');
  const [currentMenu, setCurrentMenu] = useState(MenuData[0]);
  const [imageInspect, setImageInspect] = useState('');
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [galleryTrap, setGalleryTrap] = useState();
  const [emailOpen, setEmailOpen] = useState(false);

  const switchMenuSection = (e) => {
    setMenuSection(e.target.id);
    setCurrentMenu(menuItems.find((element) => element.type === e.target.id));
  };

  const switchNavSelection = (location) => {
    let x = location.pathname.substring(1);
    if (x === '') {
      x = 'home';
    }
    setNavSelection(x);
  };

  const getItemAdditions = (additions) =>
    additions.map((addition) => <p>{`${addition.type} +$${addition.price}`}</p>);

  const createGalleryTrap = (target) => {
    setGalleryTrap(
      focusTrap.createFocusTrap(target.parentNode, {
        allowOutsideClick: true,
        initialFocus: target,
      })
    );
  };

  const openGalleryBackDrop = (target) => {
    target.parentNode.classList.remove('gallery_item_focus');
    document.getElementById(target.id).classList.add('galleryInspect');
    setShowBackdrop(true);
    setImageInspect(document.getElementById(target.id));
    createGalleryTrap(target);
  };

  const closeGalleryBackDrop = () => {
    setShowBackdrop(false);
    imageInspect.parentNode.classList.add('gallery_item_focus');
    imageInspect.classList.remove('galleryInspect');
    setImageInspect('');
  };

  useEffect(
    () => {
      if (galleryTrap) {
        if (showBackdrop) {
          galleryTrap.activate();
        } else {
          galleryTrap.deactivate();
        }
      }
    },
    [imageInspect],
    []
  );

  return (
    <Router>
      <section className="app">
        <Nav navSelection={navSelection} switchNavSelection={switchNavSelection} />
        <Switch>
          <Route path="/" exact component={Home}>
            <Home
              emailOpen={emailOpen}
              setEmailOpen={setEmailOpen}
              switchNavSelection={switchNavSelection}
            />
          </Route>
          <Route path="/menu" component={Menu}>
            <Menu
              currentMenu={currentMenu}
              menuSection={menuSection}
              switchMenuSection={switchMenuSection}
              getItemAdditions={getItemAdditions}
              switchNavSelection={switchNavSelection}
            />
          </Route>
          <Route path="/gallery" component={Gallery}>
            <Gallery
              GridData={GridData}
              showBackdrop={showBackdrop}
              setShowBackdrop={setShowBackdrop}
              openGalleryBackDrop={openGalleryBackDrop}
              closeGalleryBackDrop={closeGalleryBackDrop}
              imageInspect={imageInspect}
              setImageInspect={setImageInspect}
              switchNavSelection={switchNavSelection}
            />
          </Route>
          <Route path="/location" component={Location}>
            <Location switchNavSelection={switchNavSelection} />
          </Route>
        </Switch>
        <Footer />
      </section>
    </Router>
  );
}

export default App;
