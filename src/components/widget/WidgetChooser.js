import React from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import uuid from "uuid";

export default function WidgetChooser(props) {
  const params = useParams();
  const history = useHistory();

  const create = type => {
    // Create new widget variable
    const newWidget = {
      _id: uuid.v4(),
      widgetType: type,
      pageId: params.pid
    };
    // Add new widget into widgets array
    props.addWidget(newWidget);
    // Navigate to widget edit page
    history.push(
      `/user/${params.uid}/website/${params.wid}/page/${params.pid}/widget/${newWidget._id}`
    );
  };

  return (
    <div>
      <nav className="navbar navbar-light bg-light fixed-top">
        <div>
          <Link
            to={`/user/${params.uid}/website/${params.wid}/page/${params.pid}/widget`}
            className="text-dark"
          >
            <i className="fas fa-chevron-left" />
          </Link>
          <span className="navbar-brand h1 mb-0 ml-4">Choose Widget</span>
        </div>
      </nav>
      <main className="container">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <button
              onClick={create.bind(this, "HEADING")}
              className="btn btn-primary"
            >
              Header
            </button>
          </li>
          <li className="list-group-item">
            <button className="btn btn-primary">Label</button>
          </li>
          <li className="list-group-item">
            <button className="btn btn-primary">HTML</button>
          </li>
          <li className="list-group-item">
            <button className="btn btn-primary">Text Input</button>
          </li>
          <li className="list-group-item">
            <button className="btn btn-primary">Link</button>
          </li>
          <li className="list-group-item">
            <button className="btn btn-primary">Button</button>
          </li>
          <li className="list-group-item">
            <button
              className="btn btn-primary"
              onClick={create.bind(this, "IMAGE")}
            >
              Image
            </button>
          </li>
          <li className="list-group-item">
            <button
              className="btn btn-primary"
              onClick={create.bind(this, "YOUTUBE")}
            >
              YouTube
            </button>
          </li>
          <li className="list-group-item">
            <button className="btn btn-primary"> Data Table </button>
          </li>
          <li className="list-group-item">
            <button className="btn btn-primary">Repeater</button>
          </li>
        </ul>
      </main>
      <footer className="navbar navbar-light bg-light fixed-bottom">
        <span />
        <Link to={`/user/${params.uid}`}>
          <i className="fas fa-user" />
        </Link>
      </footer>
    </div>
  );
}
