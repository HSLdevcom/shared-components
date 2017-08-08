import React from 'react';

import { Svg,
  Path,
  G
} from 'react-primitives-svg';
import PropTypes from 'prop-types';

export default function Icon({ fill, ...rest }) {
  return (
    <Svg {...rest} viewBox="0 0 30 36" preserveAspectRatio="xMidYMid meet">
      <G fill={fill}>
        <Path d="M11.6547059,0 L9.63529412,0 L8.27352941,5.25304918 L6.85647059,0 L4.75470588,0 C5.17529412,1.2387541 5.61411765,2.48577049 6.03470588,3.72688525 C6.67470588,5.59239344 7.07470588,6.99816393 7.25529412,7.95895082 L7.25529412,13.3772459 L9.25235294,13.3772459 L9.25235294,7.95895082 L11.6547059,0 Z M16.9917647,10.1496393 L16.9917647,6.65704918 C16.9917647,5.59239344 16.8094118,4.81396721 16.4317647,4.30878689 C15.9329412,3.62832787 15.2329412,3.28721311 14.3311765,3.28721311 C13.4347059,3.28721311 12.7323529,3.62832787 12.2347059,4.30878689 C11.8511765,4.81396721 11.6705882,5.59239344 11.6705882,6.65704918 L11.6705882,10.1496393 C11.6705882,11.2095738 11.8511765,11.9944918 12.2347059,12.4949508 C12.7323529,13.1742295 13.4347059,13.5153443 14.3311765,13.5153443 C15.2329412,13.5153443 15.9329412,13.1742295 16.4317647,12.4949508 C16.8094118,11.9944918 16.9917647,11.2095738 16.9917647,10.1496393 Z M15.19,10.4895738 C15.19,11.412 14.9117647,11.8735082 14.3311765,11.8735082 C13.75,11.8735082 13.4711765,11.412 13.4711765,10.4895738 L13.4711765,6.29527869 C13.4711765,5.37285246 13.75,4.91370492 14.3311765,4.91370492 C14.9117647,4.91370492 15.19,5.37285246 15.19,6.29527869 L15.19,10.4895738 Z M23.65,13.3772459 L23.65,3.40819672 L21.8494118,3.40819672 L21.8494118,11.0278033 C21.4494118,11.5937705 21.0711765,11.8735082 20.7117647,11.8735082 C20.4694118,11.8735082 20.3288235,11.7306885 20.29,11.4503607 C20.2676471,11.3919344 20.2676471,11.1712131 20.2676471,10.7474754 L20.2676471,3.40819672 L18.4723529,3.40819672 L18.4723529,11.2910164 C18.4723529,11.9944918 18.5335294,12.4719344 18.6329412,12.7735082 C18.8117647,13.2786885 19.2117647,13.5153443 19.7923529,13.5153443 C20.4488235,13.5153443 21.1317647,13.114623 21.8494118,12.2895738 L21.8494118,13.3772459 L23.65,13.3772459 L23.65,13.3772459 Z" />
        <Path d="M29.4829412,25.4767869 C29.4829412,27.7825574 29.4811765,30.229377 28.9658824,32.4690492 C28.6058824,34.0412459 27.3235294,35.200918 25.7794118,35.3750164 C22.1235294,35.7845902 18.4223529,35.7869508 14.7394118,35.7845902 C11.0552941,35.7869508 7.35529412,35.7845902 3.69941176,35.3750164 C2.15529412,35.200918 0.872941176,34.0412459 0.513529412,32.4690492 C0,30.229377 0,27.7825574 0,25.4767869 C0,23.1680656 0.00529411765,20.7259672 0.519411765,18.4833443 C0.879411765,16.9117377 2.16117647,15.7514754 3.70529412,15.5785574 C7.36176471,15.1678033 11.0617647,15.1672131 14.7452941,15.1678033 C18.4282353,15.1672131 22.1294118,15.1678033 25.7852941,15.5785574 C27.33,15.7514754 28.6123529,16.9117377 28.9717647,18.4833443 C29.4847059,20.7259672 29.4829412,23.1680656 29.4829412,25.4767869" />
        <Path d="M8.40941176,20.5005246 L8.40941176,18.6356066 L2.19647059,18.6356066 L2.19647059,20.5005246 L4.29294118,20.5005246 L4.29294118,31.8759344 L6.27411765,31.8759344 L6.27411765,20.5005246 L8.40941176,20.5005246 Z M12.0088235,31.8759344 L12.0088235,30.8006557 C11.3017647,31.615082 10.6288235,32.0122623 9.97352941,32.0122623 C9.39882353,32.0122623 9.00352941,31.7785574 8.82588235,31.2780984 C8.72764706,30.9782951 8.66823529,30.5085246 8.66823529,29.811541 L8.66823529,22.0101639 L10.4494118,22.0101639 L10.4494118,29.2739016 C10.4494118,29.6917377 10.4494118,29.9112787 10.4658824,29.9691148 C10.5094118,30.2459016 10.6441176,30.3863607 10.8823529,30.3863607 C11.24,30.3863607 11.6152941,30.1095738 12.0088235,29.5506885 L12.0088235,22.0101639 L13.7929412,22.0101639 L13.7929412,31.8759344 L12.0088235,31.8759344 Z M18.78,29.0567213 C18.78,29.9478689 18.5182353,30.3863607 18.0047059,30.3863607 C17.7117647,30.3863607 17.4141176,30.2459016 17.1164706,29.9478689 L17.1164706,23.9340984 C17.4141176,23.6401967 17.7117647,23.4991475 18.0047059,23.4991475 C18.5182353,23.4991475 18.78,23.9565246 18.78,24.8459016 L18.78,29.0567213 Z M20.5611765,28.9162623 L20.5611765,24.9863607 C20.5611765,24.0539016 20.5,23.4 20.3811765,23.0028197 C20.1435294,22.2645246 19.6676471,21.8903607 18.9570588,21.8903607 C18.3029412,21.8903607 17.6923529,22.2503607 17.1164706,22.9597377 L17.1164706,18.6356066 L15.3352941,18.6356066 L15.3352941,31.8759344 L17.1164706,31.8759344 L17.1164706,30.920459 C17.7117647,31.6587541 18.3229412,32.0122623 18.9570588,32.0122623 C19.6676471,32.0122623 20.1435294,31.6375082 20.3811765,30.9033443 C20.5,30.4860984 20.5611765,29.8280656 20.5611765,28.9162623 Z M25.5041176,25.7807213 L23.7235294,25.7807213 L23.7235294,24.868918 C23.7235294,23.9565246 24.0211765,23.4991475 24.6170588,23.4991475 C25.2058824,23.4991475 25.5041176,23.9565246 25.5041176,24.868918 L25.5041176,25.7807213 Z M27.2864706,28.7197377 L27.2864706,28.4594754 L25.4670588,28.4594754 C25.4670588,29.1765246 25.4458824,29.5713443 25.4294118,29.6687213 C25.3270588,30.1467541 25.0705882,30.3863607 24.6323529,30.3863607 C24.0211765,30.3863607 23.7235294,29.9313443 23.7235294,29.0177705 L23.7235294,27.2697049 L27.2864706,27.2697049 L27.2864706,25.2265574 C27.2864706,24.1713443 27.1070588,23.4 26.7341176,22.9019016 C26.2352941,22.2255738 25.5258824,21.8903607 24.6323529,21.8903607 C23.7235294,21.8903607 23.0123529,22.2255738 22.4988235,22.9019016 C22.1194118,23.4 21.9482353,24.1713443 21.9482353,25.2265574 L21.9482353,28.6825574 C21.9482353,29.728918 22.1423529,30.5085246 22.5205882,31.0007213 C23.0347059,31.6752787 23.7435294,32.0122623 24.6776471,32.0122623 C25.6076471,32.0122623 26.3382353,31.6587541 26.8323529,30.9428852 C27.0470588,30.6265574 27.1870588,30.2665574 27.2470588,29.8717377 C27.2641176,29.6917377 27.2864706,29.2945574 27.2864706,28.7197377 L27.2864706,28.7197377 Z" fill="#FFFFFF" />
      </G>
    </Svg>
  );
}

Icon.propTypes = {
  fill: PropTypes.string
};
Icon.displayName = 'Icon.Youtube';
