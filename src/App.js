import React from "react";
import "./App.css";
import PadBank from "./components/PadBank";

import snare808 from "./drum-kits/808/snare.wav";
import cl_hihat808 from "./drum-kits/808/cl_hihat.wav";
import claves808 from "./drum-kits/808/claves.wav";
import cowbell808 from "./drum-kits/808/cowbell.wav";
import crashcym808 from "./drum-kits/808/crashcym.wav";
import handclap808 from "./drum-kits/808/handclap.wav";
import kick808 from "./drum-kits/808/kick1.wav";
import op_hihat808 from "./drum-kits/808/open_hh.wav";
import rimshot808 from "./drum-kits/808/rimshot.wav";

import snare909 from "./drum-kits/909/909-snare.wav";
import cl_hihat909 from "./drum-kits/909/909-closed_hh.wav";
import clap909 from "./drum-kits/909/909-clap.wav";
import op_hihat909 from "./drum-kits/909/909-open-hh.wav";
import crash1909 from "./drum-kits/909/909-crash-1.wav";
import crash2909 from "./drum-kits/909/909-crash-2.wav";
import kick909 from "./drum-kits/909/909-kick.wav";
import midtom909 from "./drum-kits/909/909-midtom.wav";
import ride909 from "./drum-kits/909/909-ride.wav";

const kits = {
    808: [
        { sound: snare808, name: "Snare-808" },
        { sound: cl_hihat808, name: "Closed-HH-808" },
        { sound: kick808, name: "Kick-808" },
        { sound: handclap808, name: "Hand-Clap-808" },
        { sound: op_hihat808, name: "Open-HH-808" },
        { sound: crashcym808, name: "Crash-CYM-808" },
        { sound: claves808, name: "Claves-808" },
        { sound: rimshot808, name: "Rim-Shot-808" },
        { sound: cowbell808, name: "Cowbell-808" },
    ],
    909: [
        { sound: snare909, name: "Snare-909" },
        { sound: cl_hihat909, name: "Closed-HH-909" },
        { sound: kick909, name: "Kick-909" },
        { sound: clap909, name: "Hand-Clap-909" },
        { sound: op_hihat909, name: "Open-HH-909" },
        { sound: crash1909, name: "Crash-1-909" },
        { sound: ride909, name: "Ride-909" },
        { sound: midtom909, name: "Mid-Tom-909" },
        { sound: crash2909, name: "Crash-2-909" },
    ],
};

const validKeys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            controlPanelClosed: true,
            controlPanelContent: false,
            volume: 50,
            currentKit: "808",
            currentSound: "",
            power: true,
        };
        this.toggleControlPanel = this.toggleControlPanel.bind(this);
        this.toggleAudio = this.toggleAudio.bind(this);
        this.handleVolume = this.handleVolume.bind(this);
        this.togglePower = this.togglePower.bind(this);
        this.handleKit = this.handleKit.bind(this);
    }

    componentDidMount() {
        document.addEventListener("keydown", (e) => {
            this.handleKeyPress(e);
        });
    }

    toggleAudio(e) {
        if (!this.state.power) return;
        if (e._reactName === "onClick") {
            e = e.target;
        }
        const clip = e.querySelector(".clip");
        // play audio

        clip.pause();
        clip.currentTime = 0;
        clip.volume = this.state.volume / 100;
        clip.play();
        // set state for current sounds
        const name = e.id;
        this.setState({
            currentSound: name,
        });

        // add style to current drum pad sound
        e.style.width = "98%";
        e.style.height = "98%";
        e.style.backgroundColor = "#62a0f1";
        setTimeout(() => {
            e.style.width = null;
            e.style.height = null;
            e.style.backgroundColor = null;
        }, 100);
    }

    handleKeyPress(e) {
        const theKey = e.key.toUpperCase();
        if (!validKeys.includes(theKey)) return;
        const ele = document.getElementById(theKey).parentElement;
        this.toggleAudio(ele);
    }

    toggleControlPanel(e) {
        if (this.state.controlPanelClosed) {
            this.setState({
                controlPanelClosed: !this.state.controlPanelClosed,
            });
            setTimeout(() => {
                this.setState({
                    controlPanelContent: !this.state.controlPanelContent,
                });
            }, 250);
            document.getElementById("controlArrow").classList.add("flip");
        } else {
            document.getElementById("content").classList.remove("content-appear");
            setTimeout(() => {
                this.setState({
                    controlPanelContent: !this.state.controlPanelContent,
                });
                setTimeout(() => {
                    this.setState({
                        controlPanelClosed: !this.state.controlPanelClosed,
                    });
                }, 250);
                document.getElementById("controlArrow").classList.remove("flip");
            }, 250);
        }
    }

    handleVolume(e) {
        const volume = e.target.value;
        this.setState({
            volume: volume,
            currentSound: `Volume: ${volume}`,
        });
    }

    togglePower() {
        this.setState({
            power: !this.state.power,
            currentSound: `Power: ${!this.state.power ? "On" : "Off"}`,
        });
    }

    handleKit(e) {
        this.setState({
            currentKit: e.target.value,
            currentSound: `Kit: ${e.target.value}`,
        });
    }

    render() {
        const controlPanel = this.state.controlPanelClosed
            ? "control-panel-closed"
            : "control-panel";
        const controlPanelContent = this.state.controlPanelContent
            ? "control-panel-content"
            : "control-panel-content-closed";
        if (this.state.controlPanelContent) {
            setTimeout(() => {
                document.getElementById("content").classList.add("content-appear");
            }, 10);
        }
        return (
            <div className="drum-machine" id="drum-machine">
                <div className="display" id="display">
                    {this.state.currentSound.replace(/[-]/g, " ")}
                </div>
                <PadBank
                    toggleAudio={this.toggleAudio}
                    kit={this.state.currentKit}
                    kits={kits}
                    currentSound={this.state.currentSound}
                />
                <div className={controlPanel}>
                    <div className={controlPanelContent} id="content">
                        <div className="power">
                            <span>Power</span>
                            <div className="form-check form-switch on-off-container form-switch-lg">
                                <input
                                    className="form-check-input power-switch shadow-none"
                                    type="checkbox"
                                    id="powerSwitch"
                                    onChange={this.togglePower}
                                    defaultChecked
                                />
                            </div>
                        </div>
                        <div className="change-kit">
                            <select
                                className="form-select"
                                aria-label="Default select example"
                                onChange={this.handleKit}
                            >
                                <option value="808" defaultValue>
                                    808 Drum Kit
                                </option>
                                <option value="909">909 Drum Kit</option>
                            </select>
                        </div>
                        <div className="volume">
                            <span>Volume</span>
                            <input
                                type="range"
                                className="form-range"
                                id="volumeRange"
                                onChange={this.handleVolume}
                            />
                        </div>
                    </div>
                </div>
                <div className="control-panel-toggler" onClick={this.toggleControlPanel}>
                    <i className="fas fa-angle-double-right" id="controlArrow"></i>
                </div>
            </div>
        );
    }
}

export default App;
