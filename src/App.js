import './App.css';
import {useEffect, useState} from "react";
import {MapMarker, MarkerClusterer} from "react-kakao-maps-sdk";
import GetLocation from './Component/GetLocation';
import Navigation from './Component/Navigation';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Aed from './Component/Aed';
import Hospital from './Component/Hospital';
import Emergency from './Component/Emergency';
import Rescue from './Component/Rescue';
import MapPicture from './Component/MapPicture';
import MainPage from './Component/MainPage';
import Map from './Component/Map';
function App() {
    return (
        <div>
            <Navigation/>
            <BrowserRouter>
                <Routes>
                    <Route path="/Mainpage" element={<MainPage/>} />
                    <Route path="/Aed" element={<Aed/>} />
                    <Route path="/Hospital" element={<Hospital />} />
                    <Route path="/Emergency" element={<Emergency />} />
                    <Route path="/Rescue" element={<Rescue />} />
                    <Route path="/MapPicture" element={<MapPicture />} />
                    <Route path="/Map" element={<Map />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}



export default App;