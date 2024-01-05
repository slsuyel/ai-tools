import React from 'react';

const Loader = () => {
  const loaderContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '40vh',
  };

  const loaderStyle = `
    .loader {
      --s: 25px;
      --g: 5px;
      width: calc(2*(1.353*var(--s) + var(--g)));
      aspect-ratio: 1;
      background: linear-gradient(#ff1818 0 0) left/50% 100% no-repeat,
                  conic-gradient(from -90deg at var(--s) calc(0.353*var(--s)),
                  #fff 135deg,#666 0 270deg,#aaa 0);
      background-blend-mode: multiply;
      --_m: linear-gradient(to bottom right,
              #0000 calc(0.25*var(--s)),#000 0 calc(100% - calc(0.25*var(--s)) - 1.414*var(--g)),#0000 0),
              conic-gradient(from -90deg at right var(--g) bottom var(--g),#000 90deg,#0000 0);
      -webkit-mask: var(--_m);
      mask: var(--_m);
      background-size: 50% 50%;
      -webkit-mask-size: 50% 50%;
      mask-size: 50% 50%;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
      animation: l9 1.5s infinite;
    }
    @keyframes l9 {
      0%,12.5%    {background-position:0% 0%,0 0}
      12.6%,37.5% {background-position:100% 0%,0 0}
      37.6%,62.5% {background-position:100% 100%,0 0}
      62.6%,87.5% {background-position:0% 100%,0 0}
      87.6%,100%  {background-position:0% 0%,0 0}
    }
  `;

  return (
    <div style={loaderContainerStyle}>
      <style>{loaderStyle}</style>
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
