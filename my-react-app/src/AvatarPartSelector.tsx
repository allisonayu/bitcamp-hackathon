// AvatarPartSelector.tsx
import React from 'react';
import {useState} from 'react';

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
          <img src={'/res/grocery icons/mouth.png'} style={{ width: previewSize+300, height: previewSize-160 }} />
        </div>
      </div>
    );
  }
}