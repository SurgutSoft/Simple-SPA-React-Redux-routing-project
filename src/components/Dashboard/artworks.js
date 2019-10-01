import React from "react";

import styles from "./styles.module.css";

export default class ArtworksDashboard extends React.Component {

    state = {
        selectedArtwork: 0,
    }

    render() {
        return (
            <div className={styles['dashboard']}>
                <div>
                    <h3 className={styles['header']}>Artworks</h3>
                    {this.renderArtWorksList()}
                </div>
                {this.renderSpotLightArtWorks()}
            </div>
        );
    }

    renderArtWorksList() {
        return this.props.artworks.map(artwork => (
            <div tabIndex={artwork._id}
                style={{ cursor: "context-menu" }}
                className={styles['artwork-row']}
                onClick={this.selectArtwork.bind(this)}
            >
                <div
                    className={styles['artist-avatar']}
                    style={{
                        backgroundImage: `url(/imgs/artworks/${artwork._id}.jpg)`
                    }}
                />
                <span>{`${artwork.title}`}</span>
            </div>
        ))
    }

    selectArtwork(evt) {
        this.setState({ selectedArtwork: evt.currentTarget.tabIndex })
    }

    renderSpotLightArtWorks() {
        const props = this.props;
        //console.log(evt);
        const selectedArtwork = this.state.selectedArtwork;
        if (!selectedArtwork) {
            return null;
        }
        const artworkInSpotlight = props.artworks.find(
            artwork => Number(artwork._id) === selectedArtwork
        );
        const label = `${artworkInSpotlight.title}`;
        const imgUrl = `imgs/artworks/${artworkInSpotlight._id}.jpg`;
        return (
            <div className={styles['spotlight']}>
                <div
                    className={styles['spotlight-img']}
                    style={{
                        backgroundImage: `url(${imgUrl})`
                    }}
                />
                <div className={styles['spotlight-label']}>{label}</div>
            </div>
        );
    }
}