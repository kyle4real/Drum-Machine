const PadBank = (props) => {
    const kit = props.kit;
    const kits = props.kits;
    return (
        <div className="pad-bank">
            <div className="drum-pad" id={kits[kit][0].name} onClick={props.toggleAudio}>
                <audio src={kits[kit][0].sound} className="clip" id="Q"></audio>Q
            </div>
            <div className="drum-pad" id={kits[kit][1].name} onClick={props.toggleAudio}>
                <audio src={kits[kit][1].sound} className="clip" id="W"></audio>W
            </div>
            <div className="drum-pad" id={kits[kit][2].name} onClick={props.toggleAudio}>
                <audio src={kits[kit][2].sound} className="clip" id="E"></audio>E
            </div>
            <div className="drum-pad" id={kits[kit][3].name} onClick={props.toggleAudio}>
                <audio src={kits[kit][3].sound} className="clip" id="A"></audio>A
            </div>
            <div className="drum-pad" id={kits[kit][4].name} onClick={props.toggleAudio}>
                <audio src={kits[kit][4].sound} className="clip" id="S"></audio>S
            </div>
            <div className="drum-pad" id={kits[kit][5].name} onClick={props.toggleAudio}>
                <audio src={kits[kit][5].sound} className="clip" id="D"></audio>D
            </div>
            <div className="drum-pad" id={kits[kit][6].name} onClick={props.toggleAudio}>
                <audio src={kits[kit][6].sound} className="clip" id="Z"></audio>Z
            </div>
            <div className="drum-pad" id={kits[kit][7].name} onClick={props.toggleAudio}>
                <audio src={kits[kit][7].sound} className="clip" id="X"></audio>X
            </div>
            <div className="drum-pad" id={kits[kit][8].name} onClick={props.toggleAudio}>
                <audio src={kits[kit][8].sound} className="clip" id="C"></audio>C
            </div>
        </div>
    );
};

export default PadBank;
