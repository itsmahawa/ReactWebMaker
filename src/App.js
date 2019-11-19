import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//User Components
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Profile from "./components/user/Profile";

//Page Components
import PageList from "./components/page/PageList";
import PageNew from "./components/page/PageNew";
import PageEdit from "./components/page/PageEdit";

//Website Components
import WebsiteEdit from "./components/website/WebsiteEdit";
import WebsiteList from "./components/website/WebsiteList";
import WebsiteNew from "./components/website/WebsiteNew";

// Widget Components
import WidgetList from "./components/widget/WidgetList";
import WidgetChooser from "./components/widget/WidgetChooser";
import WidgetEdit from "./components/widget/WidgetEdit";

function App() {
  const [users, setUsers] = useState([
    {
      _id: "123",
      username: "alice",
      password: "alice",
      firstName: "Alice",
      lastName: "Wonder",
      email: "alice@gmail.com"
    },
    {
      _id: "234",
      username: "bob",
      password: "bob",
      firstName: "Bob",
      lastName: "Marley",
      email: "bob@whatever.com"
    },
    {
      _id: "345",
      username: "charly",
      password: "charly",
      firstName: "Charly",
      lastName: "Garcia",
      email: "charly@ulem.com"
    },
    {
      _id: "456",
      username: "shiyu",
      password: "shiyu",
      firstName: "Shiyu",
      lastName: "Wang",
      email: "swang@ulem.org"
    }
  ]);

  const [websites, setWebsites] = useState([
    {
      _id: "123",
      name: "Facebook",
      developerId: "456",
      description:
        "Facebook is the leading social media site with over 500 million users across the globe."
    },
    {
      _id: "234",
      name: "Twitter",
      developerId: "456",
      description:
        "Twitter is a polarizing social media site used by all from presidential hopefuls to local school teachers. If it's not trending on Twitter, did it even happen?"
    },
    {
      _id: "456",
      name: "MSIMBO",
      developerId: "456",
      description: "A program in Boston near a booming tech economy"
    },
    {
      _id: "890",
      name: "Go",
      developerId: "123",
      description: "A random app in progress"
    },
    {
      _id: "567",
      name: "Tic Tac Toe",
      developerId: "123",
      description: "A classic game featuring X's and O's. "
    },
    {
      _id: "678",
      name: "Checkers",
      developerId: "123",
      description: "Abra Cadabra"
    },
    {
      _id: "789",
      name: "Chess",
      developerId: "234",
      description: "Diamond in the back of a sun roof top"
    }
  ]);
  const addUser = user => {
    setUsers([...users, user]);
  };

  // update user by id
  const updateUser = newUser => {
    setUsers(
      users.map(user => {
        if (user._id === newUser._id) {
          return newUser;
        } else {
          return user;
        }
      })
    );
  };

  const getWebsites = uid => {
    const curWebs = [];
    for (let website of websites) {
      if (website.developerId === uid) {
        curWebs.push(website);
      }
    }
    return curWebs;
  };

  // getWebsite
  const getWebsite = wid => {
    for (let website of websites) {
      if (website._id === wid) {
        return website;
      }
    }
  };

  //add new website
  const addWebsite = newWeb => {
    setWebsites([...websites, newWeb]);
  };

  // remove website
  const removeWebsite = wid => {
    setWebsites(websites.filter(website => website._id !== wid));
  };

  // update website
  const updateWebsite = newWeb => {
    setWebsites(
      websites.map(website => {
        if (website._id === newWeb._id) {
          return newWeb;
        } else {
          return website;
        }
      })
    );
  };
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login users={users} />
        </Route>
        <Route exact path="/register">
          <Register users={users} addUser={addUser} />
        </Route>
        <Route exact path="/user/:uid">
          <Profile users={users} updateUser={updateUser} />
        </Route>
        <Route exact path="/user/:uid/website">
          <WebsiteList getWebsites={getWebsites} />
        </Route>
        <Route exact path="/user/:uid/website/new">
          <WebsiteNew getWebsites={getWebsites} addWebsite={addWebsite} />
        </Route>
        <Route exact path="/user/:uid/website/:wid">
          <WebsiteEdit
            getWebsites={getWebsites}
            getWebsite={getWebsite}
            removeWebsite={removeWebsite}
            updateWebsite={updateWebsite}
          />
        </Route>
        <Route exact path="/user/:uid/website/:wid/page" component={PageList} />
        <Route
          exact
          path="/user/:uid/website/:wid/page/new"
          component={PageNew}
        />
        <Route
          exact
          path="/user/:uid/website/:wid/page/:pid"
          component={PageEdit}
        />
        <Route
          exact
          path="/user/:uid/website/:wid/page/:pid/widget"
          component={WidgetList}
        />
        <Route
          exact
          path="/user/:uid/website/:wid/page/:pid/widget/new"
          component={WidgetChooser}
        />
        <Route
          exact
          path="/user/:uid/website/:wid/page/:pid/widget/:wgid"
          component={WidgetEdit}
        />
        <Route path="/">
          <Login users={users} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
