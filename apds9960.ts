namespace GS{
    GestureSensor gs;
    if(gs.Init_Gesture()){
        gs.enableProximity(true);
        gs.enableGesture(true);
    }
    export function getgesture() {
        return gs.readGesture();
    }
}


