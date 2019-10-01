import React from "react";
import { withRouter } from "react-router";
import ArtistsDashboard from './artists';
import ArtworksDashboard from './artworks';

import styles from "./styles.module.css";

class Dashboard extends React.Component {
  render() {
    return (
      <div className={styles['dashboard']}>
        <div>
          {this.renderList()}
        </div>

      </div>
    );
  }

  renderList() {
    switch(this.props.keyData) {
      case "artists" : {
        return (
          <ArtistsDashboard artists={this.props.data} />
        )
      }
      case "artworks" : {
        return (
        <ArtworksDashboard artworks={this.props.data}/>
        )
      }
      default: {
        return null;
      }
    }
  }


}

export default withRouter(Dashboard);
