// AvatarPartSelector.tsx
import React from 'react';
import {useState} from 'react';

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

type AvatarPartSelectorProps = {
  title: string;
  options: { label: string; img: string }[];
  onSelect: (img: string) => void;
  previewSize: number;
};

export default function AvatarPartSelector({
  title,
  options,
  onSelect,
  previewSize,
}: AvatarPartSelectorProps) {
  if(title === "Pick your produce"){

    const bodyOptions1 = [
      { label: 'banana', img: banana },
      { label: 'blueberry', img: blueberry },
      { label: 'bokchoy', img: bokchoy },
      { label: 'broccoli', img: broccoli },
      { label: 'carrot', img: carrot },
      { label: 'fried egg', img: friedegg },
    ];

    const bodyOptions2 = [
      { label: 'orange', img: orange },
      { label: 'peach', img: peach },
      { label: 'potato', img: potato },
      { label: 'strawberry', img: strawberry },
      { label: 'tomato', img: tomato },
      { label: 'turnip', img: turnip },
    ];


    return (
      <div className="avatar-part-section">
        <h2>{title}</h2>
        <div className="button-row">
          {bodyOptions1.map(({ label, img }) => (
            <button key={label} onClick={() => onSelect(img)}>
              {label}
            </button>
          ))}
        </div>
        <div className="button-row">
          {bodyOptions2.map(({ label, img }) => (
            <button key={label} onClick={() => onSelect(img)}>
              {label}
            </button>
          ))}
        </div>
        <div className="preview-row">
          {options.map(({ label, img }) => (
            <img key={label} src={img} alt={label} style={{ width: previewSize, height: previewSize }} />
          ))}
        </div>
      </div>
    );
  } else if(title === "Eyes"){
    return (
      <div className="avatar-part-section">
        <h2>{title}</h2>
        <div className="button-row">
          {options.map(({ label, img }) => (
            <button key={label} onClick={() => onSelect(img)}>
              {label}
            </button>
          ))}
        </div>
        <div className="preview-row">
          <img src={'/res/grocery icons/all_eyes.png'} style={{ width: previewSize+300, height: previewSize }} />
        </div>
      </div>
    );
  } else{
    return (
      <div className="avatar-part-section">
        <h2>{title}</h2>
        <div className="button-row">
          {options.map(({ label, img }) => (
            <button key={label} onClick={() => onSelect(img)}>
              {label}
            </button>
          ))}
        </div>
        <div className="preview-row">
          <img src={'/res/grocery icons/mouth.png'} style={{ width: previewSize+250, height: previewSize-160 }} />
        </div>
      </div>
    );
  }
}