import React from 'react';
import { ReactComponent as GitIconSvg } from '../assets/img/github.svg';
import { ReactComponent as AppIconSvg } from '../assets/img/appstore.svg';
import { ReactComponent as PlayIconSvg } from '../assets/img/googleplay.svg';

export function GitIcon(props) {
  return (
    <a href={props.href}>
      <GitIconSvg width={24} height={24} />
    </a>
  );
}

export function AppIcon(props) {
  return (
    <a href={props.href}>
      <AppIconSvg width={24} height={24} />
    </a>
  );
}

export function PlayIcon(props) {
  return (
    <a href={props.href}>
      <PlayIconSvg width={24} height={24} />
    </a>
  );
}
