import React from "react";
import { Link } from "react-router-dom";

export default function WidgetList() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light fixed-top">
        <div>
          <Link className="text-dark" to="/user/:uid/website/:wid/page">
            <i className="fas fa-chevron-left" />
          </Link>
          <span className="navbar-brand h1 mb-0 ml-4">Widgets</span>
        </div>
        <Link
          className="text-dark"
          to="/user/:uid/website/:wid/page/:pid/widget/new"
        >
          <i className="fas fa-plus" />
        </Link>
      </nav>
      <main className="container-fluid">
        <section>
          {/* Icons */}
          <div className="position-absolute absolute-right p-1 bg-light rounded-left">
            <Link to="/user/:uid/website/:wid/page/:pid/widget/:wgid">
              <i className="fas fa-cog" />
            </Link>
            <i className="fas fa-bars" />
          </div>
          <h2>Healthy 4C Natural Hair</h2>
        </section>
        <section>
          {/* Icons */}
          <div className="position-absolute absolute-right p-1 bg-light rounded-left">
            <Link to="/user/:uid/website/:wid/page/:pid/widget/:wgid">
              <i className="fas fa-cog" />
            </Link>
            <i className="fas fa-bars" />
          </div>
          <h4>Maintaining Long and Healthy 4C Natural Hair</h4>
        </section>
        <section>
          {/* Icons */}
          <div className="position-absolute absolute-right p-1 bg-light rounded-left">
            <Link to="/user/:uid/website/:wid/page/:pid/widget/:wgid">
              <i className="fas fa-cog" />
            </Link>
            <i className="fas fa-bars" />
          </div>
          <img
            src="https://i.pinimg.com/originals/be/10/61/be1061e04c32f1188a018b99cb507ba4.jpg"
            alt="dogs"
            width="95%"
          />
        </section>
        <section>
          {/* Icons */}
          <div className="position-absolute absolute-right p-1 bg-light rounded-left">
            <Link to="/user/:uid/website/:wid/page/:pid/widget/:wgid">
              <i className="fas fa-cog" />
            </Link>
            <i className="fas fa-bars" />
          </div>
          <p>
            Your curl type is determined by the shape of the follicle that your
            hair grows out of from your scalp. The flatter or more oval shaped
            the follicle, the curlier your hair; while the more circular the
            cross-section, the straighter your hair. Your
            <a href="https://www.google.com"> curl pattern </a> is also
            identified by the shape that the strands of hair make, whether they
            kink, curve, or wind around themselves into spirals.
          </p>
        </section>
        <section>
          {/* Icons */}
          <div className="position-absolute absolute-right p-1 bg-light rounded-left">
            <Link to="/user/:uid/website/:wid/page/:pid/widget/:wgid">
              <i className="fas fa-cog" />
            </Link>
            <i className="fas fa-bars" />
          </div>
          <h3> A 3 Step Video on How to Wash 4C Hair</h3>
        </section>
        <section>
          {/* Icons */}
          <div className="position-absolute absolute-right p-1 bg-light rounded-left front">
            <Link to="/user/:uid/website/:wid/page/:pid/widget/:wgid">
              <i className="fas fa-cog" />
            </Link>
            <i className="fas fa-bars" />
          </div>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              width="450"
              height="275"
              src="https://www.youtube.com/embed/RQ0zon-MnCI"
              title="video"
              frameBorder={0}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>
        <section>
          {/* Icons */}
          <div className="position-absolute absolute-right p-1 bg-light rounded-left">
            <Link to="/user/:uid/website/:wid/page/:pid/widget/:wgid">
              <i className="fas fa-cog" />
            </Link>
            <i className="fas fa-bars" />
          </div>
          <p>
            Welcome to my channel. We are dedicated to haircare and beauty! I'm
            going to show you guys how to tame and maintain 4C natural hair. In
            my opinion, with the right tools, it's quick and easy to do.
            Products used: Shampoo Bar, Deep Conditioner, Hair Stew, Brush,
            Condiment Bottles, Clips, Hair Dryers.
          </p>
        </section>
      </main>
      <nav className="navbar navbar-light bg-light fixed-bottom">
        <div>
          <i className="fas fa-play" />
          <i className="fas fa-eye ml-2" />
        </div>
        <Link className="text-dark" to="/user/:uid">
          <i className="fas fa-user" />
        </Link>
      </nav>
    </div>
  );
}
