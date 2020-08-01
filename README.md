# React native Custom Switches

A library (in construction) with several (not yet) switches options for React Native projects.

## Install

`npm install react-native-custom-switches`

## Usage

Select the switch that you like (see options in 'Available switches'), import and have fun.

### Available Switches

#### Labeled switch

`import {LabeledSwitch} from 'react-native-custom-switch';`

| Props      | Type     | Default  | Description                    |
| ---------- | -------- | -------- | ------------------------------ |
| value      | boolean  | false    | state of the switch            |
| onChange   | function | () => {} | function to update the _value_ |
| leftLabel  | string   | Opened   | label for _true_ value         |
| rightLabel | string   | Closed   | label for _false_ value        |
| leftColor  | string   | #00b33   | color for _true_ value         |
| rightColor | string   | #ff3333  | color for _false_ value        |
| width      | number   | 120      | width of the switch            |
