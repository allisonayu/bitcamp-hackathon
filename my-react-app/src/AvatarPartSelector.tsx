// AvatarPartSelector.tsx
import React from 'react';

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
}