import React, { useState } from 'react';
import './Avatar.css';
import AvatarPartSelector from './AvatarPartSelector.tsx';

// 🟡 Body image imports
import banana from '/res/grocery icons/body/banana.png';
import blueberry from '/res/grocery icons/body/blueberry.png';
import bokchoy from '/res/grocery icons/body/bokchoy.png';
import broccoli from '/res/grocery icons/body/broccoli.png';
import carrot from '/res/grocery icons/body/carrot.png';
import friedegg from '/res/grocery icons/body/fried_egg.png';
import orange from '/res/grocery icons/body/orange.png';
import peach from '/res/grocery icons/body/peach.png';
import potato from '/res/grocery icons/body/potato.png';
import strawberry from '/res/grocery icons/body/strawberry.png';
import tomato from '/res/grocery icons/body/tomato.png';
import turnip from '/res/grocery icons/body/turnip.png';

// 🟡 Eye image imports
import angry from '/res/grocery icons/eyes/angry.png';
import blush from '/res/grocery icons/eyes/blush.png';
import cry from '/res/grocery icons/eyes/cry.png';
import dead from '/res/grocery icons/eyes/dead.png';
import dilated from '/res/grocery icons/eyes/dilated.png';
import eyesmile from '/res/grocery icons/eyes/eye_smile.png';
import lashes from '/res/grocery icons/eyes/lashes.png';
import regular from '/res/grocery icons/eyes/regular.png';
import silly from '/res/grocery icons/eyes/silly.png';

// 🟡 Mouth image imports
import frown from '/res/grocery icons/mouth/frown.png';
import open from '/res/grocery icons/mouth/open.png';
import sidetongue from '/res/grocery icons/mouth/side_tongue.png';
import smile from '/res/grocery icons/mouth/smile.png';
import straight from '/res/grocery icons/mouth/straight.png';
import tongue from '/res/grocery icons/mouth/tongue.png';

import alleyes from '/res/grocery icons/all_eyes.png';

const bodyOptions = [
  { label: 'banana', img: banana },
  { label: 'blueberry', img: blueberry },
  { label: 'bokchoy', img: bokchoy },
  { label: 'broccoli', img: broccoli },
  { label: 'carrot', img: carrot },
  { label: 'fried egg', img: friedegg },
  { label: 'orange', img: orange },
  { label: 'peach', img: peach },
  { label: 'potato', img: potato },
  { label: 'strawberry', img: strawberry },
  { label: 'tomato', img: tomato },
  { label: 'turnip', img: turnip },
];

const eyeOptions = [
  { label: 'angry', img: angry },
  { label: 'blush', img: blush },
  { label: 'cry', img: cry },
  { label: 'dead', img: dead },
  { label: 'dilated', img: dilated },
  { label: 'eye smile', img: eyesmile },
  { label: 'lashes', img: lashes },
  { label: 'regular', img: regular },
  { label: 'silly', img: silly },
];

const mouthOptions = [
  { label: 'frown', img: frown },
  { label: 'open', img: open },
  { label: 'side tongue', img: sidetongue },
  { label: 'smile', img: smile },
  { label: 'straight', img: straight },
  { label: 'tongue', img: tongue },
];

const avatarsize = 600;

function Avatar() {
  const [body, setBody] = useState('');
  const [eye, setEye] = useState('');
  const [mouth, setMouth] = useState('');

  return (
    <div className="container">
      <h1>🌻 Design Your Avatar 🌻</h1>
      <p>Design and customize your food avatar here!</p>

      <AvatarPartSelector title="Pick your produce" options={bodyOptions} onSelect={setBody} previewSize={200} />
      <AvatarPartSelector title="Eyes" options={eyeOptions} onSelect={setEye} previewSize={400} />
      <AvatarPartSelector title="Mouth" options={mouthOptions} onSelect={setMouth} previewSize={400} />

    <h2>Your Avatar!</h2>
    <div className="center-screen">
    <div className="avatar-final">
        {body && <img className="body" src={body} alt="body layer" />}
        {eye && <img className="eye" src={eye} alt="eye layer" />}
        {mouth && <img className="mouth" src={mouth} alt="mouth layer" />}
    </div>
    </div>
    </div>
  );
}

export default Avatar;