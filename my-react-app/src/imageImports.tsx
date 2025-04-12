//THIS FILE CURRENTLY DOESNT WORK
//NOT DELETING IT BECAUSE IF WE CAN FIX WE'LL USE IT LATER


import banana from '/workspaces/bitcamp-hackathon/my-react-app/res/grocery icons/body/banana.png'
import blueberry from '/workspaces/bitcamp-hackathon/my-react-app/res/grocery icons/body/blueberry.png'
import bokchoy from '/workspaces/bitcamp-hackathon/my-react-app/res/grocery icons/body/bokchoy.png'
import broccoli from '/workspaces/bitcamp-hackathon/my-react-app/res/grocery icons/body/broccoli.png'
import carrot from '/workspaces/bitcamp-hackathon/my-react-app/res/grocery icons/body/carrot.png'
import friedegg from '/workspaces/bitcamp-hackathon/my-react-app/res/grocery icons/body/fried_egg.png'
import orange from '/workspaces/bitcamp-hackathon/my-react-app/res/grocery icons/body/orange.png'
import peach from '/workspaces/bitcamp-hackathon/my-react-app/res/grocery icons/body/peach.png'
import potato from '/workspaces/bitcamp-hackathon/my-react-app/res/grocery icons/body/potato.png'
import strawberry from '/workspaces/bitcamp-hackathon/my-react-app/res/grocery icons/body/strawberry.png'
import tomato from '/workspaces/bitcamp-hackathon/my-react-app/res/grocery icons/body/tomato.png'
import turnip from '/workspaces/bitcamp-hackathon/my-react-app/res/grocery icons/body/turnip.png'

export function getImages(){
    return(
        <ol>
            <img src={banana} style={{width: 200, height: 200}}></img>
            <img src={blueberry} style={{width:200, height:200}}></img>
            <img src={bokchoy} style={{width:200, height:200}}></img>
            <img src={broccoli} style={{width:200, height:200}}></img>
            <img src={carrot} style={{width:200, height:200}}></img>
            <img src={friedegg} style={{width:200, height:200}}></img>
            <img src={orange} style={{width:200, height:200}}></img>
            <img src={peach} style={{width:200, height:200}}></img>
            <img src={potato} style={{width:200, height:200}}></img>
            <img src={strawberry} style={{width:200, height:200}}></img>
            <img src={tomato} style={{width:200, height:200}}></img>
            <img src={turnip} style={{width:200, height:200}}></img>
        </ol>
    )
}

//export default getImages