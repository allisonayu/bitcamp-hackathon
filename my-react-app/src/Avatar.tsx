import React from 'react'
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
var eyesize = 50;
var mouthsize = 50;

function Avatar() {
  return (
    <div className="container">
      <h1>Avatar Page</h1>
      <p>Design and customize your food avatar here!</p>

      <p><>pick your produce</></p>
      <ul>
          <li><a href="www.google.com">banana</a></li>
          <li><a href="www.google.com">blueberry</a></li>
          <li><a href="www.google.com">bokchoy</a></li>
          <li><a href="www.google.com">broccoli</a></li>
          <li><a href="www.google.com">carrot</a></li>
          <li><a href="www.google.com">fried egg</a></li>
      </ul>
      <ul>
          <img src={banana} style={{width: bodysize, height: bodysize}}></img>
          <img src={blueberry} style={{width: bodysize, height: bodysize}}></img>
          <img src={bokchoy} style={{width: bodysize, height: bodysize}}></img>
          <img src={broccoli} style={{width: bodysize, height: bodysize}}></img>
          <img src={carrot} style={{width: bodysize, height: bodysize}}></img>
          <img src={friedegg} style={{width: bodysize, height: bodysize}}></img>
      </ul>
      <ul>
          <li><a href="www.google.com">orange</a></li>
          <li><a href="www.google.com">peach</a></li>
          <li><a href="www.google.com">potato</a></li>
          <li><a href="www.google.com">strawberry</a></li>
          <li><a href="www.google.com">tomato</a></li>
          <li><a href="www.google.com">turnip</a></li>
      </ul>
      <ul>
          <img src={orange} style={{width: bodysize, height: bodysize}}></img>
          <img src={peach} style={{width: bodysize, height:bodysize}}></img>
          <img src={potato} style={{width: bodysize, height: bodysize}}></img>
          <img src={strawberry} style={{width: bodysize, height: bodysize}}></img>
          <img src={tomato} style={{width: bodysize, height: bodysize}}></img>
          <img src={turnip} style={{width: bodysize, height: bodysize}}></img>
      </ul>

      <p><>eyes</></p>
      <ul>
          <button>angry</button>
          <button>blush</button>
          <button>cry</button>
          <button>dead</button>
          <button>dilated</button>
          <button>eye smile</button>
          <button>lashes</button>
          <button>regular</button>
          <button>silly</button>
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
          <button>frown</button>
          <button>open</button>
          <button>side_tongue</button>
          <button>smile</button>
          <button>straight</button>
          <button>tongue</button>
      </ul>
      <ul>
          <img src={frown} style={{width:mouthsize, height:mouthsize}}></img>
          <img src={open} style={{width:mouthsize, height:mouthsize}}></img>
          <img src={sidetongue} style={{width:mouthsize, height:mouthsize}}></img>
          <img src={smile} style={{width:mouthsize, height:mouthsize}}></img>
          <img src={straight} style={{width:mouthsize, height:mouthsize}}></img>
          <img src={tongue} style={{width:mouthsize, height:mouthsize}}></img>
      </ul>
  </div>
  )
}

export default Avatar
