import * as React from "react";

import { IconProps } from "./index";

const Azure: React.FC<IconProps> = ({
    fill = "currentColor",
    size,
    height,
    width,
    ...props
}) => {
    return (
        
        <svg width="32" height="32" viewBox="0 0 128 128">
        <defs><linearGradient id="azure-original-a" x1="60.919" y1="9.602" x2="18.667" y2="134.423" gradientUnits="userSpaceOnUse"><stop stop-color="#114A8B"></stop><stop offset="1" stop-color="#0669BC"></stop></linearGradient><linearGradient id="azure-original-b" x1="74.117" y1="67.772" x2="64.344" y2="71.076" gradientUnits="userSpaceOnUse"><stop stop-opacity=".3"></stop><stop offset=".071" stop-opacity=".2"></stop><stop offset=".321" stop-opacity=".1"></stop><stop offset=".623" stop-opacity=".05"></stop><stop offset="1" stop-opacity="0"></stop></linearGradient><linearGradient id="azure-original-c" x1="68.742" y1="5.961" x2="115.122" y2="129.525" gradientUnits="userSpaceOnUse"><stop stop-color="#3CCBF4"></stop><stop offset="1" stop-color="#2892DF"></stop></linearGradient></defs><path d="M46.09.002h40.685L44.541 125.137a6.485 6.485 0 01-6.146 4.413H6.733a6.482 6.482 0 01-5.262-2.699 6.474 6.474 0 01-.876-5.848L39.944 4.414A6.488 6.488 0 0146.09 0z" fill="url(#azure-original-a)" transform="translate(.587 4.468) scale(.91904)"></path><path d="M97.28 81.607H37.987a2.743 2.743 0 00-1.874 4.751l38.1 35.562a5.991 5.991 0 004.087 1.61h33.574z" fill="#0078d4"></path><path d="M46.09.002A6.434 6.434 0 0039.93 4.5L.644 120.897a6.469 6.469 0 006.106 8.653h32.48a6.942 6.942 0 005.328-4.531l7.834-23.089 27.985 26.101a6.618 6.618 0 004.165 1.519h36.396l-15.963-45.616-46.533.011L86.922.002z" fill="url(#azure-original-b)" transform="translate(.587 4.468) scale(.91904)"></path><path d="M98.055 4.408A6.476 6.476 0 0091.917.002H46.575a6.478 6.478 0 016.137 4.406l39.35 116.594a6.476 6.476 0 01-6.137 8.55h45.344a6.48 6.48 0 006.136-8.55z" fill="url(#azure-original-c)" transform="translate(.587 4.468) scale(.91904)"></path>
        </svg>
      
    );
};

export default Azure;


// export function VscodeIconsFileTypeAzure(props: SVGProps<SVGSVGElement>) {
//     return (
//       <svg width="1em" height="1em" viewBox="0 0 32 32" {...props}><defs><linearGradient id="svgIDa" x1="-231.477" x2="-231.5" y1="266.014" y2="265.909" gradientTransform="matrix(161.096 0 0 -241.217 37302.352 64171.913)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#114a8b"></stop><stop offset="1" stopColor="#0669bc"></stop></linearGradient><linearGradient id="svgIDb" x1="-231.889" x2="-231.896" y1="265.964" y2="265.962" gradientTransform="matrix(224.69 0 0 -241.214 52119.718 64171.207)" gradientUnits="userSpaceOnUse"><stop offset="0" stopOpacity=".3"></stop><stop offset=".071" stopOpacity=".2"></stop><stop offset=".321" stopOpacity=".1"></stop><stop offset=".623" stopOpacity=".05"></stop><stop offset="1" stopOpacity="0"></stop></linearGradient><linearGradient id="svgIDc" x1="-232.026" x2="-231.998" y1="266.018" y2="265.914" gradientTransform="matrix(169.755 0 0 -241.217 39406.126 64171.912)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#3ccbf4"></stop><stop offset="1" stopColor="#2892df"></stop></linearGradient></defs><path fill="url(#svgIDa)" d="M11.343 2.834h8.27l-8.585 25.435a1.319 1.319 0 0 1-1.249.9H3.343a1.316 1.316 0 0 1-1.243-1.74l8-23.7a1.319 1.319 0 0 1 1.249-.9Z"></path><path fill="#0078d4" d="M23.36 19.894H10.247a.607.607 0 0 0-.414 1.051l8.427 7.865a1.325 1.325 0 0 0 .9.356h7.426Z"></path><path fill="url(#svgIDb)" d="M11.343 2.834a1.308 1.308 0 0 0-1.252.914L2.106 27.407a1.315 1.315 0 0 0 1.241 1.759h6.6a1.411 1.411 0 0 0 1.083-.921l1.592-4.693l5.688 5.306a1.346 1.346 0 0 0 .847.309h7.4l-3.245-9.272h-9.459l5.79-17.061Z"></path><path fill="url(#svgIDc)" d="M21.906 3.729a1.317 1.317 0 0 0-1.248-.9h-9.216a1.317 1.317 0 0 1 1.248.9l8 23.7a1.317 1.317 0 0 1-1.248 1.738h9.217a1.317 1.317 0 0 0 1.241-1.738Z"></path></svg>
//     )
//   }
