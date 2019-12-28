import React, { Component } from 'react';
import Backendless from 'backendless';
import axios from 'axios';

const APP_ID = '11E907C8-1689-4223-923B-F2EEB8DE0D6F';
const API_KEY = '2438732D-E7CE-48DA-B2F2-A871F9EEEFA8';
Backendless.serverURL = 'https://api.backendless.com';
Backendless.initApp(APP_ID, API_KEY);


export default class Updatedb extends Component {
    state = {
        objectID: null
    }
    constructor(props) {
        super(props);

        let responseData;
        axios.get('https://api.nasa.gov/planetary/apod?api_key=OpY1aZ3IX0QGbIBFcbckdGLnpdjh8Ak5lIqG4EpP')
            .then(response => {
                responseData = response.data;

                Backendless.Data.of('NasaAPOD_DB').save(
                    {
                        copyright: responseData.copyright,
                        dated: responseData.date,
                        explanation: responseData.explanation,
                        hdurl: responseData.hdurl,
                        title: responseData.title,
                        url: responseData.url,
                        media_type: responseData.media_type
                    }
                ).then(obj => {
                    console.log('Database Updated with Object ID: ', obj.objectId)
                    this.setState({ objectID: obj.objectId })
                })
            })
            .catch(error => {
                console.error('Error while updating the database: ', error);
            })
    }

    render() {
        return (
            <h6>Updated Database with ID : {this.state.objectID}</h6>
        )
    }

}
