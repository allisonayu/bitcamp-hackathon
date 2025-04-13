import React from 'react'
import {useState} from 'react'
import './Avatar.css'

//import { getImages } from './imageImports';

//Body
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

//Eyes
import angry from '/workspaces/bitcamp-hackathon/my-react-app/res/grocery icons/eyes/angry.png'
import blush from '/workspaces/bitcamp-hackathon/my-react-app/res/grocery icons/eyes/blush.png'
import cry from '/workspaces/bitcamp-hackathon/my-react-app/res/grocery icons/eyes/cry.png'
import dead from '/workspaces/bitcamp-hackathon/my-react-app/res/grocery icons/eyes/dead.png'
import dilated from '/workspaces/bitcamp-hackathon/my-react-app/res/grocery icons/eyes/dilated.png'
import eyesmile from '/workspaces/bitcamp-hackathon/my-react-app/res/grocery icons/eyes/eye_smile.png'
import lashes from '/workspaces/bitcamp-hackathon/my-react-app/res/grocery icons/eyes/lashes.png'
import regular from '/workspaces/bitcamp-hackathon/my-react-app/res/grocery icons/eyes/regular.png'
import silly from '/workspaces/bitcamp-hackathon/my-react-app/res/grocery icons/eyes/silly.png'

//Mouth
import frown from '/workspaces/bitcamp-hackathon/my-react-app/res/grocery icons/mouth/frown.png'
import open from '/workspaces/bitcamp-hackathon/my-react-app/res/grocery icons/mouth/open.png'
import sidetongue from '/workspaces/bitcamp-hackathon/my-react-app/res/grocery icons/mouth/side_tongue.png'
import smile from '/workspaces/bitcamp-hackathon/my-react-app/res/grocery icons/mouth/smile.png'
import straight from '/workspaces/bitcamp-hackathon/my-react-app/res/grocery icons/mouth/straight.png'
import tongue from '/workspaces/bitcamp-hackathon/my-react-app/res/grocery icons/mouth/tongue.png'

var bodysize = 200;
var eyesize = 400;
var mouthsize = 400;
var avatarsize = 600;
var test = 1;


//const[eyeIndex, setEyeIndex] = useState({});
//var eyeIndex = 0;

function Avatar() {
    const[body, setBody] = useState('');
    const[eye, setEye] = useState('');
    const[mouth, setMouth] = useState('');
    const[ghostbody, setGhostBody] = useState(true);
    const[ghosteye, setGhostEye] = useState(true);
    const[ghostmouth, setGhostMouth] = useState(true);

    if(body.length == 0){
        () => setGhostBody(false);
    }
    if(eye.length == 0){
        () => setGhostEye(false);
    }
    if(mouth.length == 0){
        () => setGhostMouth(false);
    }

  return (
    <div className="container">
      <h1>Avatar Page</h1>
      <p>Design and customize your food avatar here!</p>

      <p><>pick your produce</></p>
      <ul>
          <button onClick={() => setBody(banana)}>banana</button>
          <button onClick={() => setBody(blueberry)}>blueberry</button>
          <button onClick={() => setBody(bokchoy)}>bokchoy</button>
          <button onClick={() => setBody(broccoli)}>broccoli</button>
          <button onClick={() => setBody(carrot)}>carrot</button>
          <button onClick={() => setBody(friedegg)}>fried egg</button>
      </ul>
      <ul>
          <button onClick={() => setBody(orange)}>orange</button>
          <button onClick={() => setBody(peach)}>peach</button>
          <button onClick={() => setBody(potato)}>potato</button>
          <button onClick={() => setBody(strawberry)}>strawberry</button>
          <button onClick={() => setBody(tomato)}>tomato</button>
          <button onClick={() => setBody(turnip)}>turnip</button>   
      </ul>
      <ul>
          <img src={banana} style={{width: bodysize, height: bodysize}}></img>
          <img src={blueberry} style={{width: bodysize, height: bodysize}}></img>
          <img src={bokchoy} style={{width: bodysize, height: bodysize}}></img>
          <img src={broccoli} style={{width: bodysize, height: bodysize}}></img>
          <img src={carrot} style={{width: bodysize, height: bodysize}}></img>
          <img src={friedegg} style={{width: bodysize, height: bodysize}}></img>
          <img src={orange} style={{width: bodysize, height: bodysize}}></img>
          <img src={peach} style={{width: bodysize, height:bodysize}}></img>
          <img src={potato} style={{width: bodysize, height: bodysize}}></img>
          <img src={strawberry} style={{width: bodysize, height: bodysize}}></img>
          <img src={tomato} style={{width: bodysize, height: bodysize}}></img>
          <img src={turnip} style={{width: bodysize, height: bodysize}}></img>
      </ul>

      <p><>eyes</></p>
      <ul>
          <button onClick={() => setEye(angry)}>angry</button>
          <button onClick={() => setEye(blush)}>blush</button>
          <button onClick={() => setEye(cry)}>cry</button>
          <button onClick={() => setEye(dead)}>dead</button>
          <button onClick={() => setEye(dilated)}>dilated</button>
          <button onClick={() => setEye(eyesmile)}>eye smile</button>
          <button onClick={() => setEye(lashes)}>lashes</button>
          <button onClick={() => setEye(regular)}>regular</button>
          <button onClick={() => setEye(silly)}>silly</button>
      </ul>
      <ul>
          <img src={angry} style={{width: eyesize, height: eyesize}}></img>
          <img src={blush} style={{width:eyesize, height:eyesize}}></img>
          <img src={cry} style={{width:eyesize, height:eyesize}}></img>
          <img src={dead} style={{width:eyesize, height:eyesize}}></img>
          <img src={dilated} style={{width:eyesize, height:eyesize}}></img>
          <img src={eyesmile} style={{width:eyesize, height:eyesize}}></img>
          <img src={lashes} style={{width:eyesize, height:eyesize}}></img>
          <img src={regular} style={{width:eyesize, height:eyesize}}></img>
          <img src={silly} style={{width:eyesize, height:eyesize}}></img>
      </ul>

      <p><>mouth</></p>
      <ul>
          <button onClick={() => setMouth(frown)}>frown</button>
          <button onClick={() => setMouth(open)}>open</button>
          <button onClick={() => setMouth(sidetongue)}>side tongue</button>
          <button onClick={() => setMouth(smile)}>smile</button>
          <button onClick={() => setMouth(straight)}>straight</button>
          <button onClick={() => setMouth(tongue)}>tongue</button>
      </ul>
      <ul>
          <img src={frown} style={{width:mouthsize, height:mouthsize}}></img>
          <img src={open} style={{width:mouthsize, height:mouthsize}}></img>
          <img src={sidetongue} style={{width:mouthsize, height:mouthsize}}></img>
          <img src={smile} style={{width:mouthsize, height:mouthsize}}></img>
          <img src={straight} style={{width:mouthsize, height:mouthsize}}></img>
          <img src={tongue} style={{width:mouthsize, height:mouthsize}}></img>
      </ul>

      <p>Your Avatar!</p>
      <ul>
          <img src={body} style={{width:avatarsize, height:avatarsize}}></img>
          <img src={eye} style={{width:avatarsize, height:avatarsize}}></img>
          <img src={mouth} style={{width:avatarsize, height:avatarsize}}></img>

      </ul>
  </div>
  )
}

export default Avatar